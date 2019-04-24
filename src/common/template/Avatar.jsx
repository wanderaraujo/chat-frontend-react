import React from 'react'
import Avatar from 'react-avatar';

export default props => (
  <Avatar color={Avatar.getRandomColor('sitebase')}  name={props.nome_avatar} round={props.rounded} size={props.size} />    
)