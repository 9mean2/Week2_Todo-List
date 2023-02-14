import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/modules/todoModule";

const Home = () => {
  // 1. input useState
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");

  const titleChangeHandler = (event) => {
    setTitleInput(event.target.value);
  };

  const descChangeHandler = (event) => {
    setDescInput(event.target.value);
  };

  // 2. useSelector로 store 접근
  const data = useSelector((state) => {
    return state.reducer;
  });
  console.log(data);

  // 3. Dispatch 가져오기
  const dispatch = useDispatch();

  //TODO: 4. create button handler
  const addBtnHandler = () => {
    dispatch(addTodo(titleInput, descInput));
  };

  //TODO: 5. remove button handler
  const removeBtnHandler = (id) => {
    dispatch(removeTodo(id));
  };

  //TODO: 6. moveTodoList button handler

  return (
    <>
      <div>
        <input onChange={titleChangeHandler} value={titleInput} />
        <input onChange={descChangeHandler} value={descInput} />
        <button onClick={addBtnHandler}>추가하기</button>
      </div>
      <div>
        {data.map((item, i) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <h3>{item.desc}</h3>
              <button onClick={() => removeBtnHandler(item.id)}>삭제</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
