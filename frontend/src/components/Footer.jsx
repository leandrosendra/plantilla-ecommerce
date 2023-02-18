import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray h-64 px-9 py-9 flex justify-between'>
            <div>
                <h1 className='font-bold mb-1.5'>Ayuda</h1>
                <p>Como comprar</p>
                <p>Preguntas frecuentes</p>
                <p>Botón de arrepentimiento</p>
                <p>Bases y condiciones</p>
                <p>Políticas de privacidad</p>
                <p>Términos y condiciones</p>
                <p>Defensa de las y los Consumidores: Para reclamos. Ingrese aquí</p>
            </div>
            <div>
                <h1 className='font-bold mb-1.5'>Seguinos</h1>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
            </div>

        </div>
    );
};

export default Footer;