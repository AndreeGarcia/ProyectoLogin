import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginBackground = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
`;

export const LogInContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const LogInContent = styled.form`
background: #B4CAD5;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 10px;
@media screen and (max-width: 400px) {
  padding: 32px 32px;
}
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: black;
  font-size: 40px;
  font-weight: 800;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: black;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  color: black;
`;

export const FormButton = styled(Link)`
  background: #97abb6;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
`;

export const FormSubmit = styled.button`
  background: #97abb6;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
`;

export const TextLink = styled.div`
  margin-top: 5px;
  height: 20px;
  width: 100%;
`;

export const Text = styled(Link)`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  background-color: black;
  font-size: 14px;
`;
