'use client'
import {FcApproval} from 'react-icons/fc';
import React from 'react';

const Prestamo = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ textAlign: 'center' }}>
                <div className='ronded-xl bg-white flex center justify-center align-middle'>
                    <FcApproval />
                </div>
                <p>Información del préstamo:</p>
            </div>
        </div>
    );
};

export default Prestamo;
