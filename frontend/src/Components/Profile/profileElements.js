import styled from "styled-components";

export const Background = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 250px;
  right: 250px;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #b4cad5;
`;

export const Welcome = styled.h1`
  text-align: center;
  margin-top: 30px;

  font-size: 50px;
  font-weight: 800;
  color: #97abb6;
`;

export const Container = styled.div`
  margin: 0 auto;

  height: 70%;
  width: 60%;
  border: 3px solid black;

  display: flex;
  justify-content: space-between;
`;

export const SubContainer = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const SubContainer2 = styled.div`
  height: 100%;
  width: 40%;

  display: flex;
  flex-direction: column;
`;

export const SubMiniTextGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 90px;
  padding: 0 15px 0 15px;
`;

export const Text = styled.p`
  font-size: 20px;
  color: black;
`;

export const BoldText = styled.p`
font-size: 20px;
font-weight: 800:
color: #97abb6;

`;

export const SubMiniContainer2 = styled.div`
  height: 40%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SubMiniContainer3 = styled.div`
  height: 65%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const SubContainerImage = styled.img`
  height: 90%;
  width: 90%;
  background-color: white;
`;
