import React, { useRef, useState } from "react";
import "./Quiz.css";
import { data } from "../../assets/data";

const Quiz = () => {
  const [index, setIndex] = useState(0); 
  const [lock, setLock] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (data[index].ans === ans) {
        e.target.classList.add("correct");
      } else {
        e.target.classList.add("wrong");
        option_array[data[index].ans - 1].current.classList.add("correct");
      }
      setLock(true);
    }
  };

  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
      setLock(false);
      option_array.forEach((option) => {
        if (option.current) {
          option.current.classList.remove("correct", "wrong");
        }
      });
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Quiz App</h1>
        <hr />
        <h2>
          {index + 1}. {data[index].question}
        </h2>
        <ul>
          <li
            ref={Option1}
            onClick={(e) => {
              checkAns(e, 1);
            }}
          >
            {data[index].option1}
          </li>
          <li
            ref={Option2}
            onClick={(e) => {
              checkAns(e, 2);
            }}
          >
            {data[index].option2}
          </li>
          <li
            ref={Option3}
            onClick={(e) => {
              checkAns(e, 3);
            }}
          >
            {data[index].option3}
          </li>
          <li
            ref={Option4}
            onClick={(e) => {
              checkAns(e, 4);
            }}
          >
            {data[index].option4}
          </li>
        </ul>
        <button onClick={handleNext}>Next</button>
        <div className="index">
          {index + 1} of {data.length} questions
        </div>
      </div>
    </div>
  );
};

export default Quiz;
