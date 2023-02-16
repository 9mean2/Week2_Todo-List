import React from "react";
import TodoCard from "../components/TodoCard";
import InputBox from "../components/InputBox";
import styled from "styled-components";

const ListBox = styled.div`
  padding: 0 24px;
`;

const Home = () => {
  return (
    <>
      <div>
        <InputBox />
      </div>
      <ListBox>
        <h1>완료하지 않은 일</h1>
        <TodoCard Done={false} />
        <h1>완료 한 일</h1>
        <TodoCard Done={true} />
      </ListBox>
    </>
  );
};

export default Home;
