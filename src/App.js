import { useState, useRef, useEffect } from "react";
import axios from "axios";

import {
  Container,
  Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";

function App() {
  // const users = [];
  const [users, setUsers] = useState([]); //vamos manipular com um map, então precisamos de um array vazio
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);
  }

  useEffect(() => {
    async function fetchUsers(){
      const { data: newUsers } = await axios.get("http://localhost:3001/users")

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
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
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

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

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
      </ContainerItems>
    </Container>
  );
}

export default App;
