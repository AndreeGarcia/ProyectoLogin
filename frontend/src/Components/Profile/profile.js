import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
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
  const userData = [];
  async function getUser(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();

      const username = data.map((a) => {
        return a.username;
      });

      const password = data.map((a) => {
        return a.password;
      });
      const email = data.map((a) => {
        return a.email;
      });
      const fullname = data.map((a) => {
        return a.fullname;
      });
      const biography = data.map((a) => {
        return a.biography;
      });
      const pet = data.map((a) => {
        return a.pet;
      });

      userData.push(username, password, email, fullname, biography, pet);
    } catch (error) {
      console.log(error);
    }
  }

  getUser("https://localhost:5000/user");
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
              <Text> admin@admin.com</Text>
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
