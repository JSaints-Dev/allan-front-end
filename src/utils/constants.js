import * as routes from "routes";

export const NAME_LOGO = "GG";

export const MAIN_PAGE = {
  LABEL_CONTENT: {
    primary: "Welcome to Ger's Garage",
    secondary: "We are the best brand in Ireland to fix and repair vehicles.",
  },
};

export const ABOUT_PAGE = {
  LABEL_CONTENT: {
    primary:
      "Ger's garage was founded in 2020 in Dublin. Small garage that provides automotive services by well qualified specialists to service vehicles such as cars, small vans, motorcycles and small buses. Despite being a new and small company, Ger's garage is one of the favorites of the celebrities who live around and well evaluated by the magazine car drive.",
  },
};

export const LIST_LABELS_NAV = [
  {
    label: "Home",
    path: `${routes.HOME}`,
  },
  {
    label: "Services",
    path: `${routes.ABOUT}`,
  },
  {
    label: "About",
    path: `${routes.ABOUT}`,
  },
  {
    label: "Contact",
    path: `${routes.ABOUT}`,
  },
  {
    label: "Booking",
    path: `${routes.ABOUT}`,
  },
  {
    label: "Perfil",
    path: `${routes.ABOUT}`,
  },
  {
    label: "Admin",
    path: `${routes.ABOUT}`,
  },
  {
    label: "Sign in",
    path: `${routes.ABOUT}`,
  },
  {
    label: "Sing up",
    path: `${routes.ABOUT}`,
  },
];
