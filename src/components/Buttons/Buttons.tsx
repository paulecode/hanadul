import { motion } from 'motion/react';
import { useState } from 'react';
import { MenuPoint } from '../../screens/Homescreen';
import { handleHoverEnd, handleHoverStart } from '../../utils/animationUtils';

function NavigationButton({ props }: { props: MenuPoint }) {
  const { label_simple, label_split_animation } = props;

  const [label, setLabel] = useState(label_simple);

  return (
    <motion.button
      whileHover={{ scale: 1.2, opacity: '75%' }}
      initial={{ opacity: '50%' }}
      className="flex justify-center cursor-pointer label-xl"
      onHoverStart={() => handleHoverStart(label_split_animation, setLabel)}
      onHoverEnd={() => handleHoverEnd(label_split_animation, setLabel)}
    >
      {label}
    </motion.button>
  );
}

export { NavigationButton };
