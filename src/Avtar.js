import React from 'react';
import ReactDOM from 'react-dom';
import './Avtar.css';
import 'tachyons';
import AvatarList from'./AvatarList';
const Avtar = (props) => {
      const avatarList = [
            {
                  id:1,
                  name: "Girisha",
                  designation:"student",
            },
            {
                  id: 2,
                  name:"Ashita",
                  designation: "teacher",
            },
            {
                  id: 3,
                  name: "Inayat",
                  designation: "graduate",
            },
            {
                  id: 4,
                  name: "Prabh",
                  designation: "student",
            },
      ];
      const a = avatarList.map((av,index) =>
      {
            return <AvatarList id= {avatarList[index].id}
                        name={avatarList[index].name}
                        designation = {avatarList[index].designation}/>
                 })
           return (<div>
                        <h1 className="tc">Welcome to Avatar World</h1>
                        {a}
                        <br></br>
                        <button>Change Text</button>
            </div>
           )
}
export default Avtar;