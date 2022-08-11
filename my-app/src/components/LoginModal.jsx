import {
  ModalBackground,
  ModalContainer,
  Title,
  InputField,
  Button,
} from "../css/loginModalStyle";

function LoginModal() {
  return (
    <>
      <ModalBackground>
        <ModalContainer>
            <h3 style={{textAlign: "right", margin: "20px",}}>x</h3>
          <Title>
            <h1>로그인</h1>
          </Title>
          <InputField>
            <h3>ID</h3>
            <input type="text" placeholder="아이디를 입력해주세요"></input>
          </InputField>
          <InputField>
            <h3>PW</h3>
            <input type="password" placeholder="비밀번호를 입력해주세요"></input>
          </InputField>
          <Button>로그인</Button>
        </ModalContainer>
      </ModalBackground>
    </>
  );
}

export default LoginModal;
