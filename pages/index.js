import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";

function HomePage(props) {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);
  //   useEffect(()=>{
  //     setLoadedMeetups(dummy_meetups)
  //   },[])

  return (
    <Fragment>
      <Head>
        <title>MohamadReza And Saba</title>
        <meta name="description" content="me and saba" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSidePops(context){
//     const req = context.req;
//     const res = context.res;

//     return {
//         props : {
//             meetups: dummy_meetups
//         }
//     }
// }

export async function getStaticProps() {
  // fetch ('/api/meetups');

  const client = await MongoClient.connect(
    "mongodb+srv://morf:11121377@cluster0.in7cw8o.mongodb.net/meetup?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetup");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
