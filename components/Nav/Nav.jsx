import { Test } from "../Test";
import style from "./Nav.module.scss";
import Link from "next/link";
import React from "react";

const listMenuItem = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Users",
    path: "/users",
  },
  {
    name: "Posts",
    path: "/posts",
  },
];
export const Nav = () => {
  return (
    <nav className={style.container}>
      <div className={style.link_container}>
        <ul className={style.list_items}>
          {listMenuItem.map(({ name, path }, i) => (
            <Link href={path} key={i}>
              <li className={style.item}>
                <a>{name}</a>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className={style.logo_container}>
        <Link href={"/"}>
          <i className={`fa fa-fort-awesome ${style.logo}`} />
        </Link>
        <Test />
      </div>
    </nav>
  );
};
