import React from 'react';
import avatar from '../../assets/img/iam.png';

const MainData = (props) => {

  return (
    <div className="main-data">
      <img src={avatar} alt="avatar" className="avatar" />
      <div className="data-info">
        <p>{props.name}</p>
        <p>{props.surname}</p>
        <p>{props.age}</p>
        <p><a href="tel:{props.phone} ">{props.phone}</a></p>
        <p><a href="mailto:{props.email} ">{props.email}</a></p>
      </div>
    </div>
  )
}
export default MainData;