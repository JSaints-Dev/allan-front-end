import styled from "styled-components";
import { colors } from "styles/theme";
import { H1, H4 } from "ui";

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

export default Content;
