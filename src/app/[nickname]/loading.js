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
    };

    return (
        <div style={styles.container}>
            <h1>Loading...</h1>
        </div>
    );
}