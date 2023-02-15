import React, { useState, useRef, useEffect } from "react";
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
  const addBtnHandler = (event) => {
    event.preventDefault();

    if (titleInput !== "") {
      dispatch(addTodo(titleInput, descInput));
      setTitleInput("");
      setDescInput("");
    }
  };

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [titleInput]);

  return (
    <>
      <form action="/" onSubmit={addBtnHandler}>
        <Input
          refprops={inputRef}
          onChange={titleChangeHandler}
          value={titleInput}
        />
        <Input onChange={descChangeHandler} value={descInput} />
        <Button text="추가하기" />
      </form>
    </>
  );
}

export default InputBox;
