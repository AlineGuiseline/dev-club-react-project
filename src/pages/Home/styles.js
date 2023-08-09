import styled from "styled-components";
import Background1 from "../../assets/background1.svg";

const Container = styled.div`
  background: url("${Background1}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100vh;
`;

const Image = styled.img`
  margin-top: 30px;
`;

const InputLabel = styled.p`
  color: #eee;
  letter-spacing: -0.408px;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  margin-left: 25px;
`;

const Input = styled.input`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 342px;
  height: 58px;
  border: none;
  outline: none;
  padding-left: 25px;
  margin-bottom: 34px;

  color: #fff;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
`;

export {
  Container,
  Image,
  InputLabel,
  Input,
};
