import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { colors } from "styles/theme";
import { H4 } from "ui";
import { Img } from ".";

const ContainerContentAbout = styled(Grid)`
  text-align: right;

  path {
    fill: ${colors.purple};
  }
`;

const ContentAbout = ({ data }) => {
  return (
    <ContainerContentAbout
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      <Grid item xs={10} md={4}>
        <H4 color={colors.purple}>{data.primary}</H4>
      </Grid>
      <Grid item xs={10} md={7}>
        <Img />
      </Grid>
    </ContainerContentAbout>
  );
};

export default ContentAbout;
