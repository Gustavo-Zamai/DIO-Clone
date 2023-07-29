import React from 'react'
import logo from '../../assets/logo-dio.svg'
import { Button } from '../Button';
import {
    SearchInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture
} from './styles';

const Header = ({auth}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da DIO" />
                {auth ? (
                    <>
                    <SearchInputContainer>
                        <Input placeholder='Buscar...'/>
                    </SearchInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>                    
                    </>
                ) : null}
            </Row>
            <Row>
                {auth ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/92702717?v=4' />
                ) : (
                    <>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}


export { Header }; 