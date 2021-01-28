import { ContainerBodyCenterPage } from "ui";
import { MAIN_PAGE } from "utils/constants";
import { ContentMain } from "./components";

const Main = () => {
  return (
    <ContainerBodyCenterPage>
      <ContentMain data={MAIN_PAGE.LABEL_CONTENT} />
    </ContainerBodyCenterPage>
  );
};

export default Main;
