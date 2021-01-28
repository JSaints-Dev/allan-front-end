import { ContainerBodyCenterPage } from "ui";
import { ABOUT_PAGE } from "utils/constants";
import { ContentAbout } from "./components";

const About = () => {
  return (
    <ContainerBodyCenterPage>
      <ContentAbout data={ABOUT_PAGE.LABEL_CONTENT} />
    </ContainerBodyCenterPage>
  );
};

export default About;
