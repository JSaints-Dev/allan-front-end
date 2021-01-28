import styled from "styled-components";
import { H1, H4 } from "ui";
import { colors } from "styles/theme";
import { MAIN_PAGE } from "utils/constants";

const ContainerMainPage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 70%;
`;

const Content = ({ label }) => {
  return (
    <WrapperContent>
      <H1 color={colors.purple}>{label.primary}</H1>
      <H4 color={colors.purple}>{label.secondary}</H4>
    </WrapperContent>
  );
};

const Main = () => {
  return (
    <ContainerMainPage>
      <Content label={MAIN_PAGE.LABEL_CONTENT} />
    </ContainerMainPage>
  );
};

export default Main;
