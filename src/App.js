import { useState } from 'react';
import './App.css';
import AddUser from './Component/Users/AddUser';
import UsersList from './Component/Users/UsersList';

function App() {
  const [userList , setUserList] = useState([])


const addUserHandler = (uName , uAge) => {

  setUserList(prevUserList =>{
    return [...prevUserList, {name: uName , age: uAge , id:Math.random().toString()}]
    })
    console.log(userList)
  }


  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList} setUserList={setUserList}/>
    </div>
  );
}

export default App;
