import styled from "styled-components";
import UserInput from "./components/UserInput";
import ListUser from "./components/ListUser";
import { useState } from "react";
import Modal from "./components/Modal";

const Page = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 3rem;

   position: relative;
`;

function App() {
   const [users, setUsers] = useState([]);

   const [modal, setModal] = useState({ show: false, text: "" });

   const addUsers = (name, age) => {
      setUsers((prevState) => {
         return [
            ...prevState,
            {
               userName: name,
               userAge: age,
               id: Math.floor(Math.random() * 1000),
            },
         ];
      });
   };

   const showModal = (text) => {
      setModal({
         show: true,
         text,
      });
   };

   const hideModal = () => {
      setModal({
         show: false,
         text: "",
      });
   };

   const removeUser = (id) => {
      // const removing = users.findIndex((user) => user.id === id);
      // const newArr = [...users];
      // newArr.splice(removing, 1);

      const newArr = users.filter((user) => user.id !== id);

      console.log("watching", newArr);

      setUsers(newArr);
   };

   return (
      <Page>
         <UserInput addUsers={addUsers} showModal={showModal} />
         <ListUser users={users} removeUser={removeUser} />
         {modal.show && <Modal modalText={modal.text} hideModal={hideModal} />}
      </Page>
   );
}

export default App;
