import React, { useState, useEffect } from 'react';
import '../css/preload.css';

const Preload = () => {
    const [showPreload, setShowPreload] = useState(true);

    useEffect(() => {
        // Simula una carga de 2 segundos
        const timeout = setTimeout(() => {
            setShowPreload(false);
        }, 2500);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return showPreload ? (
        <div className="preload">
            <div className="spinner">
                <img src="/logo2.png" alt="" />
            </div>
        </div>
    ) : null;
};

export default Preload;
