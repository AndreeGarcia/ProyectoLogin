import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiLock } from "react-icons/fi";

export const HomeBackground = styled.div`
  height: 100vh;
  width: 95vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccessButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3d3d3d;
  height: 20%;
  width: 10%;
  border: none;
  border-radius: 30%;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ primary }) => (primary ? "#ffffff" : "#BBB2B2")};
  }
`;

export const LogInIcon = styled(FiLock)`
  color: #bbb2b2;
  padding: 25%;
  border-radius: 30%;
  height: 50%;
  width: 50%;
  border: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ primary }) => (primary ? "#ffffff" : "#3D3D3D")};
  }
`;
