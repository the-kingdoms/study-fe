import { NoticeCardInterface } from "@/types/NoticeCardInterface";
import "./Main.css";
import NoticeCard from "./NoticeCard";

const Main = () => {
  const title = [
    "비밀의 정원: 사랑과 장미의 이야기",
    "푸른 바다의 수호자: 해양 보호 활동의 중요성",
    "시간을 거슬러: 과거로 돌아가는 탐험",
    "무한한 가능성의 문: 꿈을 향한 여정",
    "성공을 위한 7가지 습관: 목표 달성을 위한 비결",
    "심리학의 신비: 인간 마음의 허상과 진실",
    "빛과 어둠의 대결: 미스터리한 우주의 비밀",
    "마법의 숲: 요정과 마법사의 이야기",
    "사라진 세계: 미래를 위한 모험의 시작",
    "소리 없는 외침: 사랑과 갈등이 교차하는 이야기",
  ];
  const makePost = () => {
    const posts: NoticeCardInterface[] = [];
    for (let i = 0; i < 10; i++) {
      const post = {
        num: i,
        postTitle: title[i],
        user: `unknown${i}`,
        date: `2023/6/${i}`,
        commentNum: Math.floor(Math.random() * 100) + 1,
      };
      posts.push(post);
    }
    return posts.map((post) => <NoticeCard {...post} />);
  };

  return (
    <div className="main">
      <div className="main-logoPage"></div>
      <div className="main-container dis-col-center">
        <div className="main-container-name "></div>
        <div className="main-container-table dis-col">
          <div className="main-container-table-bar"></div>
          <div className="main-container-table-source" {...makePost()}></div>
        </div>
      </div>
    </div>
  );
};
export default Main;
