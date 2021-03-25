import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './UserData.css'


export default function UserData() {
  // create the same var you created in User 
  // creat another var for useParams so you can get to the especific info needed
  // put the {id} in useParams and in the url
  const [userData, setUserData] = useState([]);

  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, [url]);
  // return in JSX to show the data, if you need to show nested objects
  // need to call both of them usen &&
  return (
    <div className= 'background'>
    <ul  className= 'parent-ul' key={userData.id}>
      <li><span>Name: </span>{userData.name}</li>
      <li><span>Phone: </span>{userData.phone}</li>
      <li className= 'email-user'>{userData.email}</li>
      <li><span>Address:</span></li>
        <ul className= 'nested-ul'>
          <li><span>Street: </span>{userData.address && userData.address.street}, {userData.address && userData.address.suite}</li>
          <li><span>City: </span>{userData.address && userData.address.city}, {userData.address && userData.address.zipcode}</li>
          <li><span>Geo: </span>Lat: {userData.address && userData.address.geo && userData.address.geo.lat} Lng: {userData.address && userData.address.geo && userData.address.geo.lng}</li>
        </ul>
      <li><span>Company:</span></li>
        <ul className= 'nested-ul'>
          <li><span>Name: </span>{userData.company && userData.company.name}</li>
          <li><span>Catch Phrase: </span>{userData.company && userData.company.catchPhrase}</li>
          <li><span>BS: </span>{userData.company && userData.company.bs}</li>
        </ul>
      <Link className= 'button-return' to={'/'}>Return to Users</Link>
   </ul>
   </div>
  );
}

