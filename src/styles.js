import styled from "styled-components";
import Background1 from "./assets/background1.svg";

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
  padding: 50px 36px;
  height: 100vh;
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

const Button = styled.button`
  width: 342px;
  height: 74px;

  border-radius: 14px;
  border: none;
  background: var(--templates-5-color-1, rgba(0, 0, 0, 0.8));

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
`;

export { Container, Image, ContainerItems, H1, InputLabel, Input, Button };
