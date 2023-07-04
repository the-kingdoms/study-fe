const Input = () => {
  return (
    <div>
      <input
        type="text"
        className="input-box"
        id="idInput"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      ></input>
      <input
        type="password"
        className="input-box"
        id="pwInput"
        placeholder="비밀번호"
      ></input>
    </div>
  );
};
export default Input;
