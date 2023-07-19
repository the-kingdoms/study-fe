import React from "react";
import { NoticeCardInterface } from "@/types/NoticeCardInterface";
import "./Main.css";
import NoticeCard from "./NoticeCard";
import "./NoticeCard.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Main = () => {
  const [posts, setPosts] = useState<NoticeCardInterface[]>([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        console.log("success!", response.data);
      })
      .catch((error) => {
        console.log("some errors", error);
      });
  }, []);

  return (
    <div className="main">
      <div className="main-logoPage">
        <img src="img/lion.jpg" className="main-logoPage-logo"></img>
      </div>
      <div className="main-container dis-col-center">
        <div className="main-container-name ">게시글 목록</div>
        <div className="main-container-table dis-col">
          <div className="dis-row-space main-container-table-bar ">
            <div className="card-num dis-col-center">번호</div>
            <div className="card-title dis-col-center">제목</div>
            <div className="card-body dis-col-center">본문</div>
          </div>
          <div className="main-container-table-source">
            {posts.map((post, index) => (
              <NoticeCard key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
