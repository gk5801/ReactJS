import React from 'react';
import ReactDOM from 'react-dom';
import Avtar from './Avtar';
const AvatarList = (props) =>
{
      return (
      <div className="ma4 bg-light-purple dib pa4 grow">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"></img>
            <h1 className="text">{props.name}</h1>
            <h4 className="text">{props.designation}</h4>
      </div>
      )
}
export default AvatarList;