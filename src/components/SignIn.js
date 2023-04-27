import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import DataContext from "../context/dataContext.js";
import { postLogin } from "../services/DTO-ManagerApi.js";

export default function SignIn() {
  let navigate = useNavigate();
  const { setDataUser, isDisabled, setIsDisabled } = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <TopBar>
        <div>
          <Link to={"/register"}>
            <h2>Cadastrar</h2>
          </Link>
          <Link to={"/login"}>
            <h1>Entrar</h1>
          </Link>
        </div>
      </TopBar>
      <Container>
        <Info>
          GERENCIADOR <br /> MÉDICO
        </Info>
        <Form onSubmit={submit}>
          <h1>Acessar conta</h1>
          <input
            placeholder="E-mail"
            type="text"
            value={email}
            disabled={isDisabled}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            type="password"
            disabled={isDisabled}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">
            {isDisabled ? (
              <ThreeDots color="#66849c" height={40} width={40} />
            ) : (
              "Entrar"
            )}
          </button>
          <Link to={"/register"}>
            <h2>Crie aqui sua conta!</h2>
          </Link>
        </Form>
      </Container>
    </>
  );

  function submit(event) {
    event.preventDefault();

    setIsDisabled(true);
    validateNewUser({ email, password });
    const body = { email, password };

    postLogin(body)
      .then((res) => {
        toast("Login realizado com sucesso!");
        navigate("/home");
        setDataUser(res.data);
        setIsDisabled(false);
      })
      .catch((err) => {
        toast(err.response.data.message);
        setIsDisabled(false);
      });
  }

  function validateNewUser({ email, password }) {
    if (!email || !password) return toast("Todos os campos devem ser preenchidos");
  }
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background-color: #e1eaec;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 60px;
  color: #e1eaec;
  font-family: "Monoton";
  font-weight: 600;
  font-size: 50px;

  -webkit-text-stroke-width: 0.7px;
  -webkit-text-stroke-color: #084d6e;
`;

const Form = styled.form`
  h1 {
    margin-bottom: 20px;
    font-size: 36px;
    color: #084d6e;
  }

  h2 {
    margin-top: 20px;
    font-size: 18px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  position: relative;
  width: 600px;

  input {
    width: 450px;
    height: 45px;
    margin-bottom: 12px;
    color: #536987;
    border: 1px solid #536987;
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
  }

  input:disabled {
    background-color: #66849c;
    color: #d3d3d3;
    border: #66849c;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 450px;
    height: 45px;
    margin-bottom: 6px;
    color: #e1eaec;
    border: 1px solid #536987;
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
    background-color: #084d6e;
    font-weight: 700;
    cursor: pointer;
  }
`;

const TopBar = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #084d6e;

  div {
    display: flex;
    margin-right: 50px;
  }

  h1,
  h2 {
    font-size: 20px;
    display: flex;
    margin: 0 20px;
    cursor: pointer;
    color: #a1deff;

    :hover {
      filter: brightness(220%);
      color: #fff;
    }
  }
`;
