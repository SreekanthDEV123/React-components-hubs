import React, { useContext } from "react";
import ManContext from "./ManContext";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/cartSlice";

const Home = () => {
  const { user, setUserData, people } = useContext(ManContext);
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setUserData(e.target.value);
  };
  const handleRedux = (e) => {
    e.preventDefault();
    dispatch(addToCart({ name: "Sre", age: 34 }));
  };

  return (
    <div>
      <h1>{user}</h1>
      {people.map((eachPeople, index) => (
        <h4 key={index}>{eachPeople.name}</h4>
      ))}
      <input type="text" onChange={inputHandler} />
      <button onClick={() => handleRedux}>Add</button>{" "}
      {/* Adjust payload as needed */}
    </div>
  );
};

export default Home;
