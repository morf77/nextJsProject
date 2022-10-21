import Link from 'next/link';
import { Fragment } from "react";

function NewMeetUp() {
  return (
    <Fragment>
      <h1>The news Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJs Is A Great Framework
          </Link>
        </li>
        <li>
          <Link href="">Something Else</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewMeetUp;
