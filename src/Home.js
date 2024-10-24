import React, { useContext } from "react";
import ManContext from "./ManContext";
const Home = () => {
  const data = useContext(ManContext);
  const { user, setUserData, people } = useContext(ManContext);

  const inputHandler = (e) => {
    setUserData(e.target.value);
  };
  return (
    <div>
      <h1>{data.user} </h1>
      {people.map((eachPeople) => (
        <h4>{eachPeople.name} </h4>
      ))}
      <input type="text" onChange={inputHandler} />
    </div>
  );
};

export default Home;
