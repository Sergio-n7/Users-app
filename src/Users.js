import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Users.css";
import Face from "./Face-ID.jpeg";

// afeter import all component you need to create the function
export default function List() {
  // 1 var in order to have the list with the useState hook, so you can change the date of it
  // 1 var in order to have the url where you one to get the info
  const [list, setList] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  // useEffect is a Hook that let us get the info
  useEffect(() => {
    // this is the sintax to fetch a url with useEffect
    fetch(url)
      .then((response) => response.json())
      .then((list) => setList(list));
  }, [url]);
  // the return must have all de JSX you need to show
  // all grab in a div, then map the lis and with key inform the id
  // a is going to an error
  // create a Link to the component, tell the id to know whith user wants to show
  return (
    <div className="cards-display">
      {list.map((el) => (
        <div className="user-card" key={el.id}>
          <img src={Face} className="face" alt="" />
          <h3 className="name">{el.name}</h3>
          <p className="user-name">@{el.username}</p>
          <a href="http://localhost/index.php/_error/" className="web-site">
            www.{el.website}
          </a>
          <Link to={`/userdata/${el.id}`} className="link-button">
            More Details
          </Link>
        </div>
      ))}
    </div>
  );
}
// export the component in the function or at the end of the file
