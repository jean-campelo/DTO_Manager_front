import styled from "styled-components";
import { SlUserFemale, SlUser } from "react-icons/sl";
import { FiCheckSquare } from "react-icons/fi";

export default function ConsultsDate({ consult }) {
  return <Container>{consult.map((value) => renderConsults(value))}</Container>;

  function renderConsults(cons) {
    return (
      <ConsultData status={cons.status}>
        <Patient status={cons.status}>
          <Status>
            {cons.status === "REALIZADO" ? <FiCheckSquare /> : ""}
          </Status>
          {cons.consultStarts} - {cons.patientName}, {cons.age} anos -
          <div className="icon">
            {cons.patientGender === "FEMALE" ? <SlUserFemale /> : <SlUser />}
          </div>
        </Patient>

        <Doctor>
          <h1>{cons.doctorName}</h1>
          <h2>{cons.doctorSpecialty}</h2>
        </Doctor>
      </ConsultData>
    );
  }
}

const Container = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const ConsultData = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  margin: 4px 0;
  border: solid 1px silver;

  :nth-child(odd) {
    background-color: #defde0;
  }

  :nth-child(even) {
    background-color: #fff;
  }

  :first-child {
    margin-top: 10px;
  }

  :last-child {
    margin-bottom: 20px;
  }
`;

const Patient = styled.div`
  display: flex;
  text-decoration: ${({ status }) =>
    status === "CANCELADO" ? "line-through" : "none"};
  width: 70%;
  padding: 10px;

  .icon {
    display: flex;
    align-items: center;
    margin: 0 10px;
  }
`;

const Status = styled.div`
  display: flex;
  justify-content: center;
  width: 26px;
  margin-right: 6px;
  color: green;
`;

const Doctor = styled.div`
  margin: 0 10px;
  h2 {
    font-size: 12px;
  }
`;
