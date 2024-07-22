import React from 'react';

export default function Loading() {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#000', // Темный фон
        },
        image: {
            width: '200px',
            height: '200px',
        },
    };

    return (
        <div style={styles.container}>
            <img src={'/assets/img/loadings/loading1.gif'} alt="Loading" style={styles.image} />
        </div>
    );
}
