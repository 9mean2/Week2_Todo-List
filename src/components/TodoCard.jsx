import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, todomove } from "../redux/modules/todoModule";
import Button from "../common/Button";

function TodoCard({ Done }) {
  // 1. useSelector로 store 접근
  const data = useSelector((state) => {
    return state.reducer;
  });

  // 2. Dispatch 가져오기
  const dispatch = useDispatch();

  //TODO: 3. remove button handler
  const removeBtnHandler = (id) => {
    dispatch(removeTodo(id));
  };

  //TODO: 4. moveTodoList button handler
  const moveTodoListBtnHandler = (id) => {
    dispatch(todomove(id));
  };

  return (
    <>
      {data
        .filter((v) => v.isDone === Done)
        .map((item) => {
          console.log(item);
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <h3>{item.desc}</h3>
              <Button onClick={() => removeBtnHandler(item.id)} text={"삭제"} />
              <Button
                onClick={() => moveTodoListBtnHandler(item.id)}
                text={item.isDone ? "취소" : "완료"}
              />
            </div>
          );
        })}
    </>
  );
}

export default TodoCard;