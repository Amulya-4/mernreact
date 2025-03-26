import React from "react";
import { useFetch } from "./UseFetch";
export default function App37() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [data] = useFetch(url);
  return (
    <div>
      {data.map((element) => (
        <div key={element.id}>{element.title}</div>
      ))}
    </div>
  );
}