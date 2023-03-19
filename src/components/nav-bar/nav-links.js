import styled from "styled-components";
import { Link } from "react-scroll/modules";

export const BaseNavLink = styled(Link)`
  background: transparent;
  font-family: "Work Sans";
  font-style: light;
  font-size: 24px;
  line-height: 23px;
  line-height: 100%;
  padding: 2px 8px;
  margin: 0 2px;
  cursor: pointer;
  color: #000000;
  width: max-content;
  text-align: center;
  &:hover {
    background: ${(props) => props.color};
    font-weight: 500;
  }
`;
