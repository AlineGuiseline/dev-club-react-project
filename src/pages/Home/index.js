import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import H1 from "../../components/Title";
import ContainerItems from "../../components/ContainerItems";
import Button from '../../components/Button';
import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

function Home() {
  const [users, setUsers] = useState([]); //vamos manipular com um map, então precisamos de um array vazio
  const navigate = useNavigate();
  
  const inputName = useRef();
  const inputAge = useRef();

  const url = 'https://dev-club-node-project.vercel.app'

  async function addNewUser() {
    const { data: newUser } = await axios.post(`${url}/users`, {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    navigate("/usuarios");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button to="/usuarios" onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

      </ContainerItems>
    </Container>
  );
}

export default Home;
