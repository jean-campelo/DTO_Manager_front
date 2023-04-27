import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <Main>
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
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
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
