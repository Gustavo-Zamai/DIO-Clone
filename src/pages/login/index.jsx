import {MdEmail, MdLock} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Header } from "../../components/Header";
import { 
  Container,
  Column,
  CreateText,
  ForgotText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper, 
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

const Login = () => {
    const navigate = useNavigate();

  const handleClickHome = () => {
    navigate('/user-feed');
  }
  return (
    <>
      <Header />
      <Container>
        <Column>
            <Title>
              A plataforma para você aprender com experts,
               dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
          <Wrapper>
           <TitleLogin>Faça seu cadastro</TitleLogin>
           <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
           <form>
              <Input placeholder='E-mail' leftIcon={<MdEmail/>}/>
              <Input placeholder='Password' type='password' leftIcon={<MdLock/>}/>
              <Button title='Entrar' variant="secondary" onClick={handleClickHome} type='button'/>
           </form>
           <Row>
            <ForgotText>Esqueci minha senha</ForgotText>
            <CreateText>Criar conta</CreateText>
           </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
