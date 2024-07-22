// components/PageTransition.js
import { motion } from 'framer-motion';

const PageTransition = ({ isAnimating, gifSrc }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={isAnimating ? { opacity: 1 } : { opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'black',
                zIndex: 1000,
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <img src={gifSrc} alt="Loading" style={{ width: '200px', height: '200px' }} />
        </motion.div>
    );
};

export default PageTransition;