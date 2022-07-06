import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [state, setState] = useState("idle"); // idle | loading | success | error
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    setState("loading");
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => setUsersList(users));
      setState("success");
    } catch (error) {
      setState(error);
    }
  }, []);
  return (
    <DefaultPage>
      <div>
        <ul>
          {usersList &&
            usersList.map((user) => (
              <li>
                {user.name} | {user.email}
              </li>
            ))}
        </ul>
      </div>
    </DefaultPage>
  );
};

export default Users;
