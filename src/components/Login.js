 
import React, { useState } from 'react'

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '528798288833-6jp9ee02c0otfb0hl3atolk4eff6pibq.apps.googleusercontent.com';

function Login() {

  const [isLoggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState()

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully! Welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
    setLoggedIn(true);
    setName(res.profileObj.name)
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login 😢. Please try again`
    );
  };

  
  return (

    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '50px' }}
        isSignedIn={true}
      />
    {isLoggedIn ? <p>Hello {name}</p>: <p></p> }
    </div>
  );
}

export default Login;