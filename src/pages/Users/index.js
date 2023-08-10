import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import H1 from '../../components/Title';
import ContainerItems from "../../components/ContainerItems";
import Button from "../../components/Button";
import {
  Container,
  Image,
  User,
} from "./styles";

import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

function Users() {
  const [users, setUsers] = useState([]); //vamos manipular com um map, então precisamos de um array vazio
  const navigate = useNavigate();

  const url = 'https://dev-club-node-project.vercel.app'

  useEffect(() => {
    async function fetchUsers(){
      const { data: newUsers } = await axios.get(`${url}/users`)

      setUsers(newUsers)
    }
    fetchUsers()
  }, [])

    /*
  UseEffect: é como se fosse um "efeito colateral". Toda vez que eu alterar alguma coisa, o useEffect é chamado.
  O primeiro parâmetro é uma função e o segundo é um array, exemplo:
    useEffect(() => {

    }, [])

    O useEffect é chamado em 2 ocasiões:
    1. quando a aplicação inicia (a página carregou, useEffect é chamado -- a função dentro dele)
    2. quando um estado que está no array de dependências do useEffect é alterado (aquele array que fica após a função)
  
    PS: o useEffect não aceita async
    */

  async function deleteUser(userId) {
    await axios.delete(`${url}/users/${userId}`)

    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItems isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="lata-de-lixo" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
        <img alt="seta" src={Arrow} /> Voltar 
        </Button>

      </ContainerItems>
    </Container>
  );
}

export default Users;
