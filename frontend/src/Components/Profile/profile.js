import React from "react";
import { useEffect, useState } from "react";
import {
  Background,
  Welcome,
  Container,
  SubContainer,
  SubContainer2,
  SubMiniContainer2,
  SubMiniContainer3,
  SubContainerImage,
  SubMiniTextGroup,
  Text,
  BoldText,
} from "./profileElements";

function ProfilePage() {
  fetch("http://localhost:5000/user").then;

  return (
    <>
      <Background>
        <Welcome> Welcome Admin!</Welcome>
        <Container>
          <SubContainer>
            <SubMiniTextGroup>
              <BoldText> Username: </BoldText>
              <Text> admin </Text>
            </SubMiniTextGroup>
            <SubMiniTextGroup>
              <BoldText> Full name: </BoldText>
              <Text> administrator </Text>
            </SubMiniTextGroup>
            <SubMiniTextGroup>
              <BoldText> Email: </BoldText>
              <Text> admin@admin.com </Text>
            </SubMiniTextGroup>
          </SubContainer>
          <SubContainer2>
            <SubMiniContainer2>
              <SubContainerImage></SubContainerImage>
            </SubMiniContainer2>
            <SubMiniContainer3>
              <SubMiniTextGroup>
                <BoldText> Biography: </BoldText>
                <Text> hey </Text>
              </SubMiniTextGroup>
              <SubMiniTextGroup>
                <BoldText> Pet: </BoldText>
                <Text> dog </Text>
              </SubMiniTextGroup>
            </SubMiniContainer3>
          </SubContainer2>
        </Container>
      </Background>
    </>
  );
}

export default ProfilePage;
