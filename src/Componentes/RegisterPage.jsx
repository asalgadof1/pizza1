import React, { useState } from 'react';


const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!email || !password || !confirmPassword) {
      setError('Todos los campos son obligatorios');
      setSuccess('');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setSuccess('');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      setSuccess('');
      return;
    }

    // Si todas las validaciones pasan
    setError('');
    setSuccess('Registro exitoso');
  };

  return (
    <div className="form-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrar</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default RegisterPage;
