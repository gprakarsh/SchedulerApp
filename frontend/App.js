import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NativeRouter } from 'react-router-native';
import Registration from './components/molecules/Registration';
import routes from './routes';
import Navbar from './components/molecules/Navbar';
import Login from './components/molecules/Login';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [renderLogin, setRenderLogin] = useState(false)

  //add code here to check if the user is logged in and set a boolean value for loggedIn

  const login = async (email, password) => {
    //axios post request
    //setLoggedIn 
    console.log(email,password)
    setLoggedIn(true)
  }

  const register = async (name, email, password, geocode) => {
    //axios post request
    //setLoggedIn
    console.log(name, email, password, geocode) 
    setLoggedIn(true)
  }

  const logout = () => {
    //axios post request
    //setLoggedIn 
    setLoggedIn(false)
  }

  // if (!loggedIn) {
  //   if (renderLogin) {
  //     return <Login setRenderLogin={setRenderLogin} login={login} />
  //   }
  //   else {
  //     return (
  //       <Registration setRenderLogin={setRenderLogin} register={register} />
  //     )
  //   }
  // }
  return (
    <NativeRouter>
      <View style={{flex:1,backgroundColor:'black'}}>
        {routes}
        <Navbar />
      </View>
    </NativeRouter>
  )
}
