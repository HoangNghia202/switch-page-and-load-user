import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// const backTohome=() =>{
//     setTimeout(() => {
//         let navigate = useNavigate();
//         navigate('/')
//     }, 3000);
// };

const checkEmptyObj = (obj) => {
  let isEmptyObj = Object.keys(obj).length === 0 ? true : false;
  return isEmptyObj;
};

function DetailUser() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState({});

  async function getRes(id) {
    let res = await axios.get(`https://reqres.in/api/users/${id}`);
    setUser(res.data.data);
  }
  getRes(userId);
  return (
    <div>
      Detail User Page
      <div>id user :{userId} </div>
      <div>
        {user.first_name} {user.last_name}
      </div>
      <div>
        {" "}
        <img src={user.avatar}></img>
      </div>
    </div>
  );
}

export default DetailUser;
