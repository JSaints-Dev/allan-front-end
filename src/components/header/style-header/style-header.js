import styled from "styled-components";
import { colors } from "styles/theme";

export const BodyNavBar = styled.div`
  background-color: ${colors.purple};
  display: flex;
  height: 10vh;
  max-height: 90px;
  width: 100%;

  a {
    color: ${colors.magic_mint};
    text-decoration: none;
  }
`;
