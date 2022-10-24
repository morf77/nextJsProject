import Link from 'next/link';
import { Fragment } from "react";
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetUp() {
  function addMeeupHandler (enteredMeetupData) {
    console.log(enteredMeetupData)
  }

  return <NewMeetupForm onAddMeetup={addMeeupHandler} />
}

export default NewMeetUp;
