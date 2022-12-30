import Link from "next/link";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUp() {
  const router = useRouter();

  async function addMeeupHandler(enteredMeetupData) {
    console.log(JSON.stringify(enteredMeetupData));
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Love</title>
        <meta name="description" content="Add your own Love Story" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeeupHandler} />
    </Fragment>
  );
}

export default NewMeetUp;
