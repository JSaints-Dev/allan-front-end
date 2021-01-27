import { Grid } from "@material-ui/core";
import { H4 } from "ui";
import { Link } from "react-router-dom";

const Nav = ({ data }) => {
  return (
    <Grid container alignItems="center" justify="space-between" spacing={2}>
      {data.map((el) => (
        <Grid key={el.label} item>
          <Link to={el.path}>
            <H4>{el.label}</H4>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Nav;
