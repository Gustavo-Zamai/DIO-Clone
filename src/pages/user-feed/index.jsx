import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHighlight } from "./styles";

const UserFeed = () => {
  return (
    <>
      <Header auth={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={75}
            name="Gustavo Zamai"
            image="https://avatars.githubusercontent.com/u/92702717?v=4"
          />
          <UserInfo
            percentual={75}
            name="Gustavo Zamai"
            image="https://avatars.githubusercontent.com/u/92702717?v=4"
          />
          <UserInfo
            percentual={75}
            name="Gustavo Zamai"
            image="https://avatars.githubusercontent.com/u/92702717?v=4"
          />
          <UserInfo
            percentual={75}
            name="Gustavo Zamai"
            image="https://avatars.githubusercontent.com/u/92702717?v=4"
          />
          <UserInfo
            percentual={75}
            name="Gustavo Zamai"
            image="https://avatars.githubusercontent.com/u/92702717?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { UserFeed };
