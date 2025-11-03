// import React, { useState } from 'react';
// import { auth, db } from '../firebase';
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [isSignup, setIsSignup] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('member'); // default role
//   const navigate = useNavigate();  // Initialize navigate

//   const handleAuth = async () => {
//     try {
//       if (isSignup) {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         await setDoc(doc(db, 'users', userCredential.user.uid), {
//           email,
//           role,
//         });
//         alert('Signup successful!');
//         navigate('/add-event'); // Redirect to add-event page after signup
//       } else {
//         await signInWithEmailAndPassword(auth, email, password);
//         alert('Login successful!');
//         navigate('/add-event'); // Redirect to add-event page after login
//       }
//     } catch (error) {
//       console.error(error);
//       alert(error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>{isSignup ? 'Signup' : 'Login'}</h2>
//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
//       {isSignup && (
//         <select onChange={(e) => setRole(e.target.value)}>
//           <option value="member">Member</option>
//           <option value="coordinator">Coordinator</option>
//         </select>
//       )}
//       <button onClick={handleAuth}>{isSignup ? 'Signup' : 'Login'}</button>
//       <p onClick={() => setIsSignup(!isSignup)}>
//         {isSignup ? 'Already have an account? Login' : 'New here? Signup'}
//       </p>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // Create this CSS file

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('member');
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      if (isSignup) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, 'users', userCredential.user.uid), { email, role });
        navigate('/add-event');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/add-event');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="auth-card">
        <h2 className="auth-title">{isSignup ? 'Create Account' : 'Welcome Back'}</h2>
        
        <div className="input-group">
          <input 
            className="auth-input"
            placeholder="Email" 
            type="email"
            onChange={(e) => setEmail(e.target.value)} 
          />
          <span className="input-icon">✉️</span>
        </div>
        
        <div className="input-group">
          <input 
            className="auth-input"
            placeholder="Password" 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <span className="input-icon">🔒</span>
        </div>

        {isSignup && (
          <div className="input-group">
            <select 
              className="auth-select"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="member">Member</option>
              <option value="coordinator">Coordinator</option>
            </select>
          </div>
        )}

        <button className="auth-button" onClick={handleAuth}>
          {isSignup ? 'Sign Up' : 'Login'}
        </button>

        <p className="auth-toggle" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? 'Already have an account? Login' : 'New here? Create an account'}
        </p>
      </div>
    </div>
  );
}

export default Login;