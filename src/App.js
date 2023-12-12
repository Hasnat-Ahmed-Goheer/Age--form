import {React,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
const [userList,setUserList] =useState([]);


  const addListUser = (users) =>{
    // console.log(uName,uAge);
    setUserList(prevState => [...prevState,{
      name: users.username,
      age:users.age,
      id:Math.random(),
    }]);
  }

  return (
    <div className="App">
     <AddUser onAddUser = {addListUser}/>
     <UserList users = {userList}/>
    </div>
  );
}

export default App;
