import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import ManContext from "./ManContext";
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import Header from "./Header";
import appStore from "./store/appStore";

function App() {
  const [userdata, setUserData] = useState("");
  const [peoplesList, setpeoplesList] = useState([]);
  useEffect(() => {
    const data = {
      name: "sreekanth",

      people: [
        {
          name: "sreekanth",
          age: 23,
          city: "hyderabad",
        },
        {
          name: "krishnan",
          age: 23,
          city: "hyderabad",
        },
        {
          name: "mahesh",
          age: 23,
          city: "hyderabad",
        },
        {
          name: "shiva",
          age: 23,
          city: "hyderabad",
        },
      ],
    };

    setUserData(data.name);
    setpeoplesList(data.people);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      const people = {
        name: "hanuman",
      };
      setUserData(people.name);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={appStore}>
      <ManContext.Provider
        value={{ user: userdata, people: peoplesList, setUserData }}
      >
        <div>
          <Header />
          <Outlet />
        </div>
      </ManContext.Provider>
    </Provider>
  );
}

export default App;
