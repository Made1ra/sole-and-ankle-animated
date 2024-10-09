import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

const NavLink = ({ children, delegated }) => {
  return (
    <StyledNavLink {...delegated}>
      <MainText>{children}</MainText>
      <HoverText aria-hidden={true}>{children}</HoverText>
    </StyledNavLink>
  );
};

const StyledNavLink = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  transform: translate(0, 0);
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transform: translate(0, var(--translate-from));
  transition: transform 300ms;

  @media (prefers-reduced-motion: no-preference) {
    ${StyledNavLink}:hover & {
      transform: translate(0, var(--translate-to));
      transition: transform 600ms;
    }
  }
`;

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;

const HoverText = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;
  font-weight: ${WEIGHTS.bold};
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

export default NavLink;
