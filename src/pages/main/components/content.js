import styled from "styled-components";
import { colors } from "styles/theme";
import { H1, H4 } from "ui";

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 70%;
`;

const ContentMain = ({ data }) => {
  return (
    <WrapperContent>
      <H1 color={colors.purple}>{data.primary}</H1>
      <H4 color={colors.purple}>{data.secondary}</H4>
    </WrapperContent>
  );
};

export default ContentMain;
