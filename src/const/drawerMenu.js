import HomeIcon from "@mui/icons-material/Home";
import FaceIcon from "@mui/icons-material/Face";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { HOME, CHARACTERS, EPISODES, LOCATIONS } from "./routes";

export const drawerMenu = [
  {
    label: "Home",
    path: `${HOME}`,
    icon: HomeIcon,
  },
  {
    label: "Characters",
    path: `/${CHARACTERS}`,
    icon: FaceIcon,
  },
  {
    label: "Locations",
    path: `/${LOCATIONS}`,
    icon: PersonPinCircleIcon,
  },
  {
    label: "Episodes",
    path: `/${EPISODES}`,
    icon: LiveTvIcon,
  },
];
