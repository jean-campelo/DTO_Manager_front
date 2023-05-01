import styled from "styled-components";

export default function Indicators({ index }) {
  return (
    <Container>
      <div className="consultsTotal">
        Atendimentos programados
        <div className="indexTotal">{index.indicators.consultsTotal}</div>
      </div>

      <div className="consultsDone">
        Consultas realizadas
        <div className="indexDone">{index.indicators.consultsDone}</div>
      </div>

      <div className="consultsCanceled">
        Cancelamentos
        <div className="indexCanceled">{index.indicators.consultsCanceled}</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-top: 30px;

  .consultsTotal,
  .consultsDone,
  .consultsCanceled {
    height: 120px;
    width: 190px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    font-weight: 700;
    text-align: center;

    .indexTotal,
    .indexDone,
    .indexCanceled {
      border-radius: 50%;
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      font-size: 40px;
    }
  }

  .consultsTotal {
    background-color: #486f99;
    color: #b2dafa;

    .indexTotal {
      background-color: #b2dafa;
      color: #486f99;
    }
  }

  .consultsDone {
    background-color: #42ab49;
    color: #a5eea0;

    .indexDone {
      background-color: #a5eea0;
      color: #42ab49;
    }
  }

  .consultsCanceled {
    background-color: #840c3d;
    color: #dd6961;

    .indexCanceled {
      background-color: #dd6961;
      color: #840c3d;
    }
  }
`;
