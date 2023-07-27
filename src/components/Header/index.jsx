import React from 'react'

import logo from '../../assets/logo-dio.svg'
import { Button } from '../Button/styles';
import {
    SearchInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from './styles';

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da DIO" />
                <SearchInputContainer>
                    <Input placeholder='Buscar...'/>
                </SearchInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
            </Row>
        </Container>
    </Wrapper>
  )
}


export { Header }; 