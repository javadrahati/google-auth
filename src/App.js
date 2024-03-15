// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login';
// // or
// function App() {
//     const  responseGoogle =(e) =>{
//         console.log(e)
//     }
//
//
//   return (
//     <div className="App">
//       <GoogleLogin
//           clientId="21413704931-8mhv2l6hg9am2er4bj1bncpt0u4mt66d.apps.googleusercontent.com"
//           buttonText="Login"
//           onSuccess={responseGoogle}
//           onFailure={responseGoogle}
//           cookiePolicy={'single_host_origin'}
//       />
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



import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
// or
import { GoogleLogin } from '@react-oauth/google';

import { useGoogleLogin } from '@react-oauth/google';

function App() {


    const googleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {

            console.log(codeResponse)
            // Send the authorization code to the backend server
            // fetch('/api/auth/google', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ code: codeResponse.code }),
            // })
            //     .then(response => response.json())
            //     .then(data => {
            //         console.log('Backend response:', data);
            //     })
            //     .catch(error => {
            //         console.error('Error:', error);
            //     });
        },
        onError: () => {
            // Handle login errors here
            console.error('Google login failed');
        },
        flow: 'auth-code',
    });

    return (
        <button onClick={() => googleLogin()}>
            Sign in with Google
        </button>
    );
}
export default App;