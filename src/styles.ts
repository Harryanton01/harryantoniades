import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AppContainer = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 2em;
`;
export const MainSectionCenter = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 100%;
`;
export const MainSection = styled.div`
  margin-top: 50px;
`;

export const Image = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 10px;
  margin: 1em;
`;

export const MainText = styled.span`
  font-size: 26px;
`;

export const SecondaryText = styled.span`
  font-size: 16px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  padding: 5px 30%;
`;

export const Nav = styled.nav`
  text-align: center;
  width: 100%;
  position: absolute;
  right: 0px;
  left: 0px;
  top: 0px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: inline-block;
`;

export const Anchor = styled.a`
  padding: 0.5em;
  margin: 0.5em;
  font-weight: normal;
  text-decoration: none;
  color: inherit;
  border-radius: 0.5em;
  transition: all 0.2s ease 0s;
  &:hover {
    color: rgb(26, 26, 26);
    background-color: rgb(230, 230, 230);
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 0.5em;
  margin: 0.5em;
  font-weight: normal;
  text-decoration: none;
  color: inherit;
  border-radius: 0.5em;
  transition: all 0.2s ease 0s;
  &:hover {
    color: rgb(26, 26, 26);
    background-color: rgb(230, 230, 230);
  }
  &.active {
    color: rgb(26, 26, 26);
    background-color: rgb(247, 247, 247);
    &:hover {
      background-color: rgb(230, 230, 230);
    }
  }
`;
