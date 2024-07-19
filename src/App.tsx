import React, { useState } from 'react';
import './App.scss';
import {
  HashRouter as Router, Routes, Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
// import { RegisterPage } from './pages/RegistrationPage/RegistrationPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { ForgotPage } from './pages/ForgotPage/ForgotPage';
import { User } from './types/User';
import usersFromServer from './api/users.json';
import { useLocalStorage } from './services/useLocalStorage';
import { RegisterPage } from './pages/RegistrationPage/RegistrationPage';

const initialUsers = usersFromServer;

function App() {
  const [users, setUsers] = useLocalStorage<User[]>('users', initialUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const checkFunc = (phoneNum: string, password: string) => {
    const currUser = users.find(user => user.tel === `${phoneNum}` && user.password === `${password}`) || null;
    setSelectedUser(currUser);
  }

  const onAdd = (newUser: User) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setUsers((currentUsers: User[]) => [ ...currentUsers, newUser ]);
  }
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage users={users} />} />
        <Route path='registration' element={<RegisterPage onSubmit={onAdd} />} />
        <Route path='login' element={<LoginPage user={selectedUser} onCheck={checkFunc} />} />
        <Route path='profile' element={<ProfilePage user={selectedUser} setSelectedUser={setSelectedUser} />} />
        <Route path='forgot' element={<ForgotPage />} />
      </Routes>
    </Router>
  );
}

export default App;
