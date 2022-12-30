import Link from "next/link";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Our Love Story</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Our Stories</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Love Story</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
