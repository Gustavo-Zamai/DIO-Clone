import React from "react";

import {FiThumbsUp} from 'react-icons/fi';
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/imgs/react.png'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/92702717?v=4' />
                <div>
                    <h4>Gustavo</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Something</h4>
                <p>More stuffs and somethings</p>
            </PostInfo>
            <HasInfo>
                <h4>#Something #Someone</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
};


export { Card };