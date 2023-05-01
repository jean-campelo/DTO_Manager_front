import dayjs from "dayjs";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DataContext from "../context/dataContext.js";
import { useEffect, useState, useContext } from "react";
import { getConsultsWeek } from "../services/DTO-ManagerApi.js";

export default function ViewWeek() {
  const [consultsWeek, setConsultsWeek] = useState([]);
  const { dataUser } = useContext(DataContext);

  useEffect(() => {
    const date = dayjs(new Date()).format("YYYY-MM-DD");
    getConsultsWeek(date)
      .then((res) => setConsultsWeek(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <TopBar>
        <h1>{dataUser.name}</h1>
        <Link to={"/"}>
          <h2>Sair</h2>
        </Link>
      </TopBar>
      <ContainerConsults>
        {consultsWeek.map((item) => renderDay(item))}
      </ContainerConsults>
    </Container>
  );

  function renderDay(consult) {
    return (
      <Day>
        <div className="date">
          <h1>{consult.day}</h1>
          <h2>{consult.month}</h2>
        </div>
        <div className="weekDay">{consult.weekDay}</div>

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

        <ConsultDay>
          {consult.consultDay.consults.map((item) => renderConsultsDay(item))}
        </ConsultDay>
      </Day>
    );
  }

  function renderConsultsDay(consultDay) {
    return (
      <ConsultCard status={consultDay.status}>
        <div className="doctor">{consultDay.doctorName}</div>
        <div className="specialty">{consultDay.doctorSpecialty}</div>
        <div className="patient">{consultDay.patientName}</div>
      </ConsultCard>
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

const ContainerConsults = styled.div`
  display: flex;
  margin: 20px 0;
`;

const Day = styled.div`
  border: solid 1px silver;
  border-radius: 5px;
  width: 160px;
  height: 300px;
  margin: 0 6px;
  overflow: scroll;

  .date,
  .weekDay {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .date {
    background-color: silver;
    font-size: 18px;
  }

  h2 {
    font-size: 12px;
    margin-left: 6px;
    filter: opacity(0.5);
  }

  .weekDay {
    background-color: silver;
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
    margin: 1px 0;
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

const ConsultDay = styled.div``;

const ConsultCard = styled.div`
  background-color: #f5f5f5;
  margin: 4px 0;
  border-radius: 4px;
  font-size: 14px;
  border: solid 1px
    ${({ status }) => (status === "CANCELADO" ? "red" : "#b5bac9")};
  text-decoration: ${({ status }) =>
    status === "CANCELADO" ? "line-through" : "none"};
  opacity: ${({ status }) => (status === "CANCELADO" ? "0.5" : "1")};

  .doctor {
    background-color: #b5bac9;
  }

  .specialty {
    font-size: 10px;
    background-color: #b5bac9;
  }
`;
