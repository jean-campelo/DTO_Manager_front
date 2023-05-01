import dayjs from "dayjs";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getConsultsMonth } from "../services/DTO-ManagerApi.js";
import DataContext from "../context/dataContext.js";
import { useEffect, useState, useContext } from "react";

export default function ViewMonth() {
  const [consultsMonth, setConsultsMonth] = useState([]);
  const { dataUser, setDateSelected } = useContext(DataContext);

  useEffect(() => {
    const date = dayjs(new Date()).format("YYYY-MM-DD");
    getConsultsMonth(date)
      .then((res) => setConsultsMonth(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <TopBar>
        <h1>{dataUser.name}</h1>
        <Link to={"/"}>
          <h2 onClick={() => setDateSelected(dayjs(new Date()).format("YYYY-MM-DD"))}>Sair</h2>
        </Link>
      </TopBar>
      <ContainerConsultsMonth>
        {consultsMonth.map((item) => renderDays(item))}
      </ContainerConsultsMonth>
    </Container>
  );

  function renderDays(consult) {
    return (
        //TODO
        <Link to={"/home"}>
           <ContainerConsults onClick={() => setDateSelected(consult.date)}>
        <div className="day">
          <h1>{consult.day}</h1>
          <h2>{consult.weekDay}</h2>
        </div>

        <Indicators>
          <div className="total">
            Programados <h1>{consult.consultDay.indicators.consultsTotal}</h1>
          </div>
          <div className="done">
            Realizadas <h1>{consult.consultDay.indicators.consultsDone}</h1>
          </div>
          <div className="canceled">
            Cancelados <h1>{consult.consultDay.indicators.consultsCanceled}</h1>
          </div>
        </Indicators>
      </ContainerConsults>
        </Link>
   
    );
  }
}

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

const Container = styled.div``;

const ContainerConsultsMonth = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ContainerConsults = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  border: solid 1px #b5bac9;
  margin: 20px;
  width: 160px;
  border-radius: 5px;

  .day {
    display: flex;
    background-color: #f5f5f5;
    align-items: flex-end;
  }
  h2 {
    margin: 0 8px;
    filter: opacity(0.8);
    font-size: 12px;
  }
`;

const Indicators = styled.div`
  font-size: 12px;

  .total,
  .done,
  .canceled {
    display: flex;
    justify-content: space-between;
    padding: 2px 4px;
    margin: 2px 0;
  }

  .total {
    background-color: #b2dafa;
  }

  .done {
    background-color: #a5eea0;
  }

  .canceled {
    background-color: #dd6961;
  }
`;
