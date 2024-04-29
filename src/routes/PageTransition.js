import React, { useEffect, useState } from 'react';
import '../css/PageTransition.css'; // Importe o arquivo CSS com os estilos da página

const Page = ({ children }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Ativa a animação de fade-in após um pequeno atraso para permitir o efeito visual
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    // Limpa o timeout ao desmontar o componente para evitar vazamentos de memória
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`page ${fadeIn ? 'fade-in' : ''}`}>
      {children}
    </div>
  );
};

export default Page;
