import styled from "styled-components";
import { MAIN_PAGE } from "utils/constants";
import { Content } from "./components";

const ContainerMainPage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Main = () => {
  return (
    <ContainerMainPage>
      <Content label={MAIN_PAGE.LABEL_CONTENT} />
    </ContainerMainPage>
  );
};

export default Main;
