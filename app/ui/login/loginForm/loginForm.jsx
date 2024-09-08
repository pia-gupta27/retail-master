"use client"
import { authenticate } from '@/app/lib/actions'
import styles from './loginForm.module.css'
import {useFormState} from "react-dom"

const LoginForm = () => {

  const [state, formAction] = useFormState(authenticate, undefined);

    return (
        <form action={formAction} className={styles.form}>
            <h1>Login</h1>
            <input type='text' placeholder='username' name='username'/>
            <input type='password' placeholder='password' name='password'/>
            <button>Login</button>
            {state && state}
            <h5>Type username: tanvi password: 123456</h5>
        </form>
    )
}

export default LoginForm
/*
import { useState } from 'react';
import { authenticate } from '@/app/lib/actions'
import styles from './loginForm.module.css'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await authenticate({ username, password });
      // Redirect to dashboard here
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Login</h1>
      <input type='text' placeholder='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type='password' placeholder='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h5>Type username: tanvi password: 123456</h5>
    </form>
  );
};

export default LoginForm*/

