import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    register({
      name,
      email,
      password,
    });
  };

  return (
    <div className="register-input">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        id="name"
        onChange={(event) => {
          onNameChange(event);
        }}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        id="email"
        onChange={(event) => {
          onEmailChange(event);
        }}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => {
          onPasswordChange(event);
        }}
        id="password"
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(event) => {
          onConfirmPasswordChange(event);
        }}
        id="confirmPassword"
      />

      <button type="button" onClick={(event) => onSubmitHandler(event)}>
        Register
      </button>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
