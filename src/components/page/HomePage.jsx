/*eslint-disable*/
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../include/Header";
import Bottom from "../include/Bottom";
import { useParams } from "react-router-dom";

//로그아웃 처리를 위해서 props에 authLogic 주소번지를 받아온다
const HomePage = ({ authLogic }) => {
  let { userId } = useParams();
  console.log(userId);
  //onLogout이라는 변수가 함수객체를 가리키고 있다. - 주소번지
  //함수가 가르키는 주소번지가 다르면 리렌더링이 일어남
  //리렌더링은 언제 발생하지?
  //1)state상태가 변경 - useState(0); useState({}); useState([]);
  //2)props가 변경= ({title, onLogout, content}) - spread operator
  //3)부모컴포넌트가 변경 - map(n건) ->item별로 row
  //:BoardList BoardRow BoardDetail

  const onLogout = () => {
    console.log("HomePage onLogout 호출");
    authLogic.logout();
  };

  useEffect(() => {
    authLogic.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <React.Fragment>
      <Header userId={userId} onLogout={onLogout} />
      <div>HomePage페이지</div>
      <Bottom />
    </React.Fragment>
  );
};

export default HomePage;
