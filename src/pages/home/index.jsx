import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Container, TextContent, Title, TitleHighlight } from "./styles";
import banner from "../../assets/banner.svg";
import { Button } from "../../components/Button";

const Home = () => {

  const navigate = useNavigate();

  const handleClickSignin = () => {
    navigate('/login');
  }
  return (
    <>
      <Header />
      <Container>
        <div>
            <Title>
                <TitleHighlight>
                    Implemente <br/>
                </TitleHighlight>
                o seu futuro global agora!
            </Title>
            <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional,
                 evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button title={'Começar agora'} variant="secondary" onClick={handleClickSignin}/>
        </div>
        <div>
          <img
            src={banner}
            alt="Banner de um homem segurando um tablet, e um mundo de possibilidades aparecendo para ele"
          />
        </div>
      </Container>
    </>
  );
};

export { Home };
