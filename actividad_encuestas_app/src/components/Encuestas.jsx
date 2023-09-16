import React from 'react';

const Encuestas = ({encuestas}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2 style={{fontSize: '40px'}}>Encuestas Disponibles</h2>
                {
                    encuestas.map(encuesta => {
                        return (
                            <div>
                                <h3 style={{fontSize: '30px'}}>{encuesta.pregunta}</h3>
                                {encuesta.opciones.map(opcion => {
                                    return <p style={{fontSize: '20px'}}>{opcion}</p>
                                })}
                            </div>
                        )
                    })
                }
        </div>
    );
}

export default Encuestas;
