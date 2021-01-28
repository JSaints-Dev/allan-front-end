import { ContainerBodyCenterPage } from "ui";
import { MAIN_PAGE } from "utils/constants";
import { Content } from "./components";

const Main = () => {
  return (
    <ContainerBodyCenterPage>
      <Content label={MAIN_PAGE.LABEL_CONTENT} />
    </ContainerBodyCenterPage>
  );
};

export default Main;
