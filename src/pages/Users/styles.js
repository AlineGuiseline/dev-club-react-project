import styled from "styled-components";
import Background2 from "../../assets/background2.svg";

const Container = styled.div`
  background: url("${Background2}");
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

const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 61px 61px 0px 0px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.6) 0.01%,
    rgba(255, 255, 255, 0.15) 100%
  );
  backdrop-filter: blur(22.5px);
  padding: 50px 36px;
  height: 100%;
  min-height: calc(100vh - 170px);
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  margin-bottom: 80px;
`;

const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 120px;

  border-radius: 14px;
  border: 1px solid #FFF;
  background: transparent;

  color: #fff;
  font-style: normal;
  font-weight: bold;
  line-height: 28px;
  font-size: 17px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: rotateY(180deg);
  }
`;

const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 342px;
  height: 58px;
  outline: none;
  border: none;

  p {
    color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export {
  Container,
  Image,
  ContainerItems,
  H1,
  Button,
  User,
};
