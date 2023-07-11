import "./NoticeCard.css";
import "./Main.css";
interface NoticeCardProps {
  post: {
    num: number;
    postTitle: string;
    user: string;
    date: string;
    commentNum: number;
  }[];
  num: number;
  title: String;
  user: String;
  date: String;
  commentNum: number;
}

const NoticeCard: React.FC<NoticeCardProps> = (props) => {
  return (
    <div className="notice-card dis-row-center">
      <div className="card-num dis-col-center">{props.num}</div>
      <div className="card-title dis-col-center">{props.title}</div>
      <div className="card-user dis-col-center">{props.user}</div>
      <div className="card-date dis-col-center">{props.date}</div>
      <div className="card-commentNum dis-col-center">{props.commentNum}</div>
    </div>
  );
};
export default NoticeCard;
