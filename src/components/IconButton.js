import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import PropType from 'prop-types';
import { images } from '../images'

const Icon = styled.Image`
    width: 40px;
    height: 40px;
    margin: 10px;
`;
const BigIcon = styled.Image`
width: 60px;
height: 60px;
margin: 20px;
`;

const IconButton = ({type, size, onPressOut}) => {
  if(size == 'Big') {
    return(
      <TouchableOpacity onPressOut={onPressOut}>
          <BigIcon source={type} />
          
      </TouchableOpacity>
    );
  }
  else {
    return(
      <TouchableOpacity onPressOut={onPressOut}>
          <Icon source={type} />
          
      </TouchableOpacity>
    );
  }
  
};

const MenuIcon = () => {
  return (
    <Button
    type="outline" //clear
    onPressOut={()=>navigation.navigate('Menu')}
    icon={<Icon name="bars" size={25} color="#4F4E4E"/>}/>
  );
};    


IconButton.PropType = {
    type: PropType.oneOf(Object.values(images)).isRequired,
    onPressOut: PropType.func,
};

export default IconButton;