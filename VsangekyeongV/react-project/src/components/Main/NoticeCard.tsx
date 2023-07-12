import "./NoticeCard.css";
import "./Main.css";
import { NoticeCardInterface } from "@/types/NoticeCardInterface";

const NoticeCard: React.FC<NoticeCardInterface> = (props) => {
  return (
    <div className="notice-card dis-row-center">
      <div className="card-num dis-col-center">{props.num}</div>
      <div className="card-title dis-col-center">{props.postTitle}</div>
      <div className="card-user dis-col-center">{props.user}</div>
      <div className="card-date dis-col-center">{props.date}</div>
      <div className="card-commentNum dis-col-center">{props.commentNum}</div>
    </div>
  );
};
export default NoticeCard;
