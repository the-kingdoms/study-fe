import React from "react";
import "./NoticeCard.css";
import "./Main.css";
import { NoticeCardInterface } from "@/types/NoticeCardInterface";

const NoticeCard: React.FC<NoticeCardInterface> = (props) => {
  return (
    <div className="notice-card dis-row-space">
      <div className="card-num dis-col-center">{props.id}</div>
      {/* <div className="card-user dis-col-center">{props.userId}</div> */}
      <div className="card-title dis-col-center">{props.title}</div>
      <div className="card-body dis-col-center">{props.body}</div>
    </div>
  );
};
export default NoticeCard;
