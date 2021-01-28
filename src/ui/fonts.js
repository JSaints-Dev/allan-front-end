import styled from "styled-components";

export const H1 = styled.span`
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-size: min(max(40px, 5vw), 50px);
`;

export const H2 = styled.span`
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-size: min(max(30px, 4vw), 40px);
`;

export const H3 = styled.span`
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-size: min(max(20px, 3vw), 30px);
`;

export const H4 = styled.span`
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-size: min(max(10px, 1.5vw), 20px);
`;

export const H5 = styled.span`
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-size: min(max(6px, 1vw), 10px);
`;
