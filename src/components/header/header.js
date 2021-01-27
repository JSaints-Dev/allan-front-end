import styled from "styled-components";
import { Link } from "react-router-dom";
import { BodyNavBar } from "components/header/style-header";
import { Container as MuiContainer, Grid } from "@material-ui/core";
import { NAME_LOGO, LIST_LABELS_NAV } from "utils/constants";
import Logo from "components/header/style-header/logo";
import Nav from "components/header/nav";

import { HOME } from "routes";

const Container = styled(MuiContainer)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Header = () => {
  return (
    <BodyNavBar>
      <Container>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={4}>
            <Link to={HOME}>
              <Logo label={NAME_LOGO} />
            </Link>
          </Grid>

          <Grid item xs={8}>
            <Nav data={LIST_LABELS_NAV} />
          </Grid>
        </Grid>
      </Container>
    </BodyNavBar>
  );
};

export default Header;
