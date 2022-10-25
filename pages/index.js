import MeetupList from '../components/meetups/MeetupList'
import { useEffect, useState } from 'react';

const dummy_meetups = [
    {
        id: 'm1',
        title: 'first meet up',
        image : 'https://upload.wikimedia.org/wikipedia/commons/8/8b/PanoStanislasCrepuscule.jpg',
        address : 'some address 5, 12345 sime city'
    },
    {
        id: 'm1',
        title: 'first meet up',
        image : 'https://upload.wikimedia.org/wikipedia/commons/8/8b/PanoStanislasCrepuscule.jpg',
        address : 'some address 5, 12345 sime city'
    }
]


function HomePage(props) {
 
//   const [loadedMeetups, setLoadedMeetups] = useState([]);
//   useEffect(()=>{
//     setLoadedMeetups(dummy_meetups)
//   },[])

  return <MeetupList meetups={props.meetups} />;
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

export async function getStaticProps () {
    return {
        props: {
            meetups : dummy_meetups
        },
        revalidate: 10  
    };
}

export default HomePage;
