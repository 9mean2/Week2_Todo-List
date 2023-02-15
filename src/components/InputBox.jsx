import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todoModule";
import Input from "../common/Input";
import Button from "../common/Button";

function InputBox() {
  // 1. input useState
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");

  const titleChangeHandler = (event) => {
    setTitleInput(event.target.value);
  };

  const descChangeHandler = (event) => {
    setDescInput(event.target.value);
  };

  // 2. Dispatch 가져오기
  const dispatch = useDispatch();

  //TODO: 3. create button handler
  const addBtnHandler = () => {
    if (titleInput !== "") {
      dispatch(addTodo(titleInput, descInput));
      setTitleInput("");
      setDescInput("");
    }
  };

  return (
    <>
      <Input onChange={titleChangeHandler} vlaue={titleInput} />
      <Input onChange={descChangeHandler} vlaue={descInput} />
      <Button onClick={addBtnHandler} text="추가하기" />
    </>
  );
}

export default InputBox;
