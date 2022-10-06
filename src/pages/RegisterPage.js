import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import LocaleContext from '../contexts/LocaleContext';
import { register } from '../utils/network-data';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <section className="register-page">
      <h2>
        {locale === 'en'
          ? 'Fill the form to register account'
          : ' Isi Form untuk mendaftarkan akun'}
      </h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        {locale === 'en' ? 'Already have an account?' : 'Sudah punya akun?'}{' '}
        <Link to="/">Login {locale === 'en' ? ' here' : 'di sini'}</Link>
      </p>
    </section>
  );
}
