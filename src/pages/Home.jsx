import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, todomove } from "../redux/modules/todoModule";

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
  const moveTodoListBtnHandler = (id) => {
    dispatch(todomove(id));
  };

  return (
    <>
      <div>
        <input onChange={titleChangeHandler} value={titleInput} />
        <input onChange={descChangeHandler} value={descInput} />
        <button onClick={addBtnHandler}>추가하기</button>
      </div>
      <div>
        <h1>완료하지 않은 일</h1>
        {data
          .filter((v) => v.isDone === false)
          .map((item) => {
            console.log(item);
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
                <h3>{item.desc}</h3>
                <button onClick={() => removeBtnHandler(item.id)}>삭제</button>
                <button onClick={() => moveTodoListBtnHandler(item.id)}>
                  완료
                </button>
              </div>
            );
          })}

        <h1>완료 한 일</h1>

        {data
          .filter((v) => v.isDone === true)
          .map((item) => {
            console.log(item);
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
                <h3>{item.desc}</h3>
                <button onClick={() => removeBtnHandler(item.id)}>삭제</button>
                <button onClick={() => moveTodoListBtnHandler(item.id)}>
                  취소
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
