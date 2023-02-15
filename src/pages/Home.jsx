import React from "react";

import TodoCard from "../components/TodoCard";
import InputBox from "../components/InputBox";

const Home = () => {
  return (
    <>
      <div>
        <InputBox />
      </div>
      <div>
        <h1>완료하지 않은 일</h1>
        <TodoCard Done={false} />
        <h1>완료 한 일</h1>
        <TodoCard Done={true} />
      </div>
    </>
  );
};

export default Home;
