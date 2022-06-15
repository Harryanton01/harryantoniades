import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AppContainer = styled.div`
  box-sizing: border-box;
  padding: 2em;
  height: 100vh;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
export const PageContainer = styled.div`
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

export const NavButton = styled.button`
  border: 0;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #283b8b;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  // positions the icon to the right and center aligns it vertically
  position: relative;
  top: 27px;
  left: 90%;
  transform: translateY(-50%);
  display: none;
  &:hover {
    background-color: #2642af;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
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
  @media screen and (max-width: 1280px) {
    padding: 5px 5%;
  }
`;
export const Title = styled.h2`
  padding: 5px 30%;
  @media screen and (max-width: 1280px) {
    padding: 5px 5%;
  }
`;
export const Nav = styled.nav`
  text-align: center;
  width: 100%;
  position: relative;
  right: 0px;
  left: 0px;
  top: 0px;
`;
export const StyledImage = styled.img`
  width: 100%;
  padding-bottom: 20px;
`;
export const List = styled.ul<{ isExpanded: boolean }>`
  list-style: none;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isExpanded ? "none" : "flex")};
    position: relative;
    flex-direction: column;
    width: 100%;
    background-color: white;

    padding: 0;
  }
  & > a {
    border: 1px solid black;
    height: 30px;
  }
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
