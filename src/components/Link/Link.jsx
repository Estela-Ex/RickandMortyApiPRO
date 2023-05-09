import { styled } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

const StyledLink = styled(ReactRouterLink)(() => ({
  textDecoration: "none",
  color: "grey",
}));

export default function Link({ to, children }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}
