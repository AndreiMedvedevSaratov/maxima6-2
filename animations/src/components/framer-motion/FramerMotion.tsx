import { motion } from 'framer-motion';

function FramerMotion() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            Hello, world!
        </motion.div>
    );
}

export default FramerMotion;