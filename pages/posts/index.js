import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [state, setState] = useState("idle"); // idle | loading | success | error
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    setState("loading");
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((post) => setPostList(post));
      setState("success");
    } catch (error) {
      setState(error);
    }
  }, []);
  return (
    <DefaultPage>
      <div>
        <ul>
          {postList &&
            postList.map((post) => (
              <li key={post.userId}>
                {post.title} | {post.body}
              </li>
            ))}
        </ul>
      </div>
    </DefaultPage>
  );
};

export default Posts;
