import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const MemoContainer = styled.TouchableOpacity`
    background-color: #ffffff;
    border-radius: 20px;                        
    padding: 10px 10px;                         
    margin: 0px 15px;                            
    width: ${({width}) => (width/2)-30}px;      
    height : 150px;

    border: #101010;
    border-style: solid;

`;
const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: #101010;
`;
const Days = styled.Text`
    font-size: 10px;
    font-weight: 400;
    color: #808080;
`;

const Memo = props => {
    const width = Dimensions.get('window').width;
    return(
        <MemoContainer width={width}>
            <Title>{props.title}</Title>
            <Days>{props.title2}</Days>
        </MemoContainer>
    );
};

export default Memo;