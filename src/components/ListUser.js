import React from "react";
import styled from "styled-components";

const List = styled.ul`
   z-index: 10;

   width: 60%;
   list-style: none;
   padding: 0;

   & li {
      background: white;
      padding: 1rem 2rem;
      border-radius: 10px;
      margin: 1rem auto;

      display: flex;
      justify-content: space-between;
      align-items: center;

      span:last-child {
         font-size: 0.8rem;
         font-color: grey;
         cursor: pointer;
      }
   }
`;

export default function ListUser({ users, removeUser }) {
   console.log(users);
   const renderUsers = () => {
      const render = users.map((user) => (
         <li key={user.id} onClick={() => removeUser(user.id)}>
            <span>
               {user.userName} ({user.userAge} years old)
            </span>
            <span>Click to Delete</span>
         </li>
      ));

      return render;
   };

   return <List>{renderUsers()}</List>;
}
