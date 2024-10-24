import React, { useState } from "react";
const PatientForm = () => {
  const [details, setDetails] = useState({
    name: "",
    diabetties: "",
    glucose: "",
    dob: "",
    age: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const inputHandler = (e) => {
    const { name, value } = e.target;
    const presentDate = new Date();
    if (name == "dob") {
      const ans1 = e.target.value;
      const ans = parseInt(ans1.slice(0, 4));

      const presenAge = presentDate.getFullYear() - ans;
      console.log(presenAge, typeof presentDate.getFullYear(), "ll");
      setDetails({ ...details, age: presenAge, dob: e.target.value });
    } else {
      setDetails({ ...details, [name]: value });
    }
  };
  console.log(details, "kk");

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name:&emsp; </label>
          <input
            type="text"
            name="name"
            value={details.name}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label>Diabetties:&emsp; </label>
          <input
            type="text"
            name="diabetties"
            value={details.diabetties}
            onChange={inputHandler}
          />
        </div>
        {details.diabetties == "yes" && (
          <div>
            <label>glucose:&emsp; </label>

            <input
              type="text"
              name="glucose"
              value={details.glucose}
              onChange={inputHandler}
            />
          </div>
        )}
        <div>
          <label>dob:&emsp; </label>
          <input
            type="date"
            name="dob"
            value={details.dob}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label>age:&emsp; </label>
          <input
            type="text"
            name="age"
            value={details.age}
            onChange={inputHandler}
          />
        </div>
        <button type="submit">submit </button>
      </form>
    </div>
  );
};
export default PatientForm;
