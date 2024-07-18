import CustomButton from '../button';
import React, { useState } from 'react';
import Alert from '@theme/Admonition';
const generatePassword = () => {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const passwordLength = 32;
  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  // Adiciona parte do timestamp atual para maior aleatoriedade
  const timestamp = Date.now().toString();
  const randomPart = timestamp.slice(-4);

  return password + randomPart;
};


const GeneratePassword = () => {
  const [password, setPassword] = useState();
  const handleClick = async () => {
    const newPassword = generatePassword();
    if (password) return;
    setPassword(newPassword)
    try {
      await navigator.clipboard.writeText(newPassword);
      alert(`A senha ${newPassword} gerada foi copiada para area de transferencia!`);
    } catch (err) {
      alert('Falha ao copiar a senha: ', err);
    }
  };

  return (
    <>
      {password && <Alert title="Aviso" type="danger">
        Ao gerar uma senha com o gerador é de extrema importancia que anote essa senha,
         ja que ela será necessaria em algumas etapas!
      </Alert>}
      <div><CustomButton disabled={password ? true : false} onClick={handleClick}>Gerar senha</CustomButton> {password && <>Senha gerada: {password}</>}</div>
    </>
  )
};


export default GeneratePassword;
