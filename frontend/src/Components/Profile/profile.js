import React from "react";
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
  return (
    <>
      <Background>
        <Welcome> Welcome Admin!</Welcome>
        <Container>
          <SubContainer>
            <SubMiniTextGroup>
              <BoldText> Username: </BoldText>
              <Text></Text>
            </SubMiniTextGroup>
            <SubMiniTextGroup>
              <BoldText> Full name: </BoldText>
              <Text></Text>
            </SubMiniTextGroup>
            <SubMiniTextGroup>
              <BoldText> Email: </BoldText>
              <Text></Text>
            </SubMiniTextGroup>
          </SubContainer>
          <SubContainer2>
            <SubMiniContainer2>
              <SubContainerImage></SubContainerImage>
            </SubMiniContainer2>
            <SubMiniContainer3>
              <SubMiniTextGroup>
                <BoldText> Biography: </BoldText>
                <Text></Text>
              </SubMiniTextGroup>
              <SubMiniTextGroup>
                <BoldText> Pet: </BoldText>
                <Text></Text>
              </SubMiniTextGroup>
            </SubMiniContainer3>
          </SubContainer2>
        </Container>
      </Background>
    </>
  );
}

export default ProfilePage;
