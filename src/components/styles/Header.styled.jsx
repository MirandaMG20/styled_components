import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  // background-color: ${({ bg }) => bg};
  // background-color: ${(props) => props.bg};
  // background-color: #ebfbff;
  padding: 40px 0;

  // h1 {
  //     color: red;
  // }

  // &:hover {
  //     background-color: black;
  // }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Logo = styled.img`

`;
