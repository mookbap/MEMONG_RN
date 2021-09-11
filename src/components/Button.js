import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
    background-color: #fff;
    justify-content: center;
    height: 50px;
    
`;
const Title =styled.Text`
    padding: 10px 10px;
    font-size: 20px;
    font-weight: 600;
    color: #101010;
`;



const Button = props => {
    return(
        <ButtonContainer>
            <Title>{props.title}</Title>
        </ButtonContainer>
    );
};


export default Button;