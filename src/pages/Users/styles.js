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
  Button,
  User,
};
