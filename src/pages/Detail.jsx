import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

function Detail() {
  // 스토어에 접근하기 위해 useSelector
  const data = useSelector((state) => {
    return state.reducer;
  });

  //어떤 todolist인지 찾아 봄! 조건에 맞는(data.id === params.id) 것들만 가져옴
  const params = useParams();
  const foundData = data.find((item) => {
    console.log("item.id -->", String(item.id), "params.id--->", params.id);
    return String(item.id) === params.id;
  });

  const navigate = useNavigate();

  return (
    <>
      <div>
        <p>{`id: ${foundData.id}`}</p>
        <h1>{foundData.title}</h1>
        <h3>{foundData.desc}</h3>
        <button onClick={() => navigate("/")}>집으로 가자</button>
      </div>
    </>
  );
}

export default Detail;
