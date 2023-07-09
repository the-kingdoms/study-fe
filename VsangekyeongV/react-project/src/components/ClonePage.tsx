import "./Main.css";
import "./button.css";
import "./default.css";
import LoginForm from "./LoginForm";
const ClonePage = () => {
  return (
    <div>
      <html lang="ko">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Instagram</title>
        </head>
        <body>
          <div className="container">
            <div className="logIn">
              <div className="logo mb-30px cursor-pointer">𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</div>
              <div>
                <LoginForm />
                <div className="row mt-20px">
                  <div className="line"></div>
                  <div className="or">또는</div>
                  <div className="line"></div>
                </div>
                <div className="cursor-pointer login-facebook ">
                  <img className="logo-facebook" src="./img/logo.png" />
                  Facebook으로 로그인
                </div>
              </div>
              <div className="cursor-pointer mt-20px lost-password ">
                비밀번호를 잊으셨나요?
              </div>
            </div>
            <div className="signIn">
              <span>계정이 없으신가요?</span>
              <button className="signIn-button button-basic">가입하기</button>
            </div>

            <div className="download-app">앱을 다운로드하세요.</div>
            <div className="download mt-10px">
              <a className="download-button-1 cursor-pointer">
                <img
                  alt="Google Play에서 다운로드"
                  className="download-button-1"
                  src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png"
                />
              </a>
              <a className="download-button-2 cursor-pointer">
                <img
                  alt="Microsoft에서 다운로드"
                  className="download-button-2"
                  src="https://static.cdninstagram.com/rsrc.php/v3/yw/r/LBxTdceDfgS.png"
                />
              </a>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
};
export default ClonePage;
