// import './App.css';
// import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// function App() {
//     const  responseGoogle =(e) =>{
//         console.log(e)
//     }
//
//
//   return (
//     <div className="App">
//         <GoogleLogin
//             onSuccess={responseGoogle}
//             onError={responseGoogle}
//             useOneTap
//             flow="auth-code"
//         />
//     </div>
//   );
// }
//
// export default App;
//
//
// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// // or
// import { GoogleLogin } from '@react-oauth/google';
//
// import { useGoogleLogin } from '@react-oauth/google';
//
// function App() {
//
//
//     const  responseMessage =(e) =>{
//         console.log(e)
//     }
//
//     const  errorMessage =(e) =>{
//         console.log(e)
//     }
//     return (
//         <div className="App">
//             <div>
//                 <h2>React Google Login</h2>
//                 <br />
//                 <br />
//                 <GoogleLogin
//                     useOneTap
//                     flow="auth-code"
//                     onSuccess={responseMessage} onError={errorMessage} />
//             </div>
//         </div>
//     );
// }
//
// export default App;



import './App.css';
import React from 'react';

import { useGoogleLogin } from '@react-oauth/google';

function App() {


    const googleLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log('Google login successful', tokenResponse);

            const {code} = tokenResponse
            fetch('https://oauth2.googleapis.com/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    code,
                    // client_id,
                    // client_secret,
                    // redirect_uri,
                    grant_type:"convert_token",
                }),
            })
                .then(response => response.json())
                .then(tokens => {
                    // Send the tokens back to the frontend, or store them securely and create a session
                })
                .catch(error => {
                    // Handle errors in the token exchange
                    console.error('Token exchange error:', error);
                });

            // You can now use the tokenResponse to authenticate the user in your app
        },
        onError: () => {
            console.error('Google login failed');
            // Handle login errors here
        },
        flow: 'auth-code', // Use 'auth-code' for the authorization code flow
    });

    return (
        <button onClick={() => googleLogin()}>
            Sign in with Google 🚀
        </button>
    );
}

export default App;