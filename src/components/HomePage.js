import styled from "styled-components";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/dataContext.js";
import { getConsultsByDate } from "../services/DTO-ManagerApi.js";
import ConsultsDate from "./ConsultsDate.js";
import Indicators from "./Indicators.js";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export default function HomePage() {
  const { consults, setConsults, dataUser } = useContext(DataContext);
  useEffect(() => {
    const date = dayjs(new Date()).format("YYYY-MM-DD");
    getConsultsByDate(date)
      .then((res) => setConsults(res.data.consultsData))
      .catch((err) => toast(err.response.data.message));
  }, []);

  const consultsExists = consults.length !== 0;
  return (
    <Main>
      <TopBar>
        <h1>{dataUser.name}</h1>
        <Link to={"/"}>
          <h2>Sair</h2>
        </Link>
      </TopBar>
      {consultsExists ? <Indicators index={consults} /> : ""}

      <ButtonsView>
        <Link to={"/week"}>
          <button>Semanal</button>
        </Link>

        <Link to={"/month"}>
          <button>Mensal</button>
        </Link>
      </ButtonsView>

      <ConsultsContainer>
        {consultsExists ? (
          <ConsultsDate consult={consults.consults} />
        ) : (
          <div className="message">Não há consultas</div>
        )}
      </ConsultsContainer>
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBar = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #084d6e;
  padding: 20px;

  h1 {
    margin-left: 20px;
    color: #fff;
    font-size: 20px;
  }

  h2 {
    cursor: pointer;
    color: #a1deff;

    :hover {
      filter: brightness(220%);
      color: #fff;
    }
  }
`;

const ConsultsContainer = styled.div`
  border-radius: 10px;
  width: 90%;
  height: 500px;
  overflow: scroll;
  background-color: #f5f5f5;

  .message {
    color: gray;
    font-weight: 600;
    font-size: 30px;
    -webkit-text-stroke-width: 0.7px;
  }
`;

const ButtonsView = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;

  button {
    width: 80px;
    height: 30px;
    background-color: #f5f5f5;
    border-radius: 5px;
    font-size: 14px;

    :hover {
      cursor: pointer;
      background-color: #a1deff;
    }
  }
`;
