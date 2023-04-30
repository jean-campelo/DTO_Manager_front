import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import DataContext from "../context/dataContext.js";
import { getConsultsByDate } from "../services/DTO-ManagerApi.js";
import ConsultsDate from "./ConsultsDate.js";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export default function HomePage() {
  const {consults, setConsults} = useContext(DataContext);

  useEffect(() => {
    const date = dayjs(new Date()).format("YYYY-MM-DD");
    getConsultsByDate(date)
      .then((res) => setConsults(res.data.consultsData))
      .catch((err) => toast(err.response.data.message));
  }, []);

  const existsConsults = consults.length !== 0;
  return (
    <Main>
      <TopBar>
        <h1>Name clinic</h1>
      </TopBar>
      <ConsultsContainer>
        {existsConsults ? (
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
  background-color: #084d6e;

  h1 {
    margin-left: 20px;
    color: #fff;
    font-size: 20px;
  }
`;

const ConsultsContainer = styled.div`
  margin-top: 30px;
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
