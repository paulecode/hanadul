import { motion } from 'motion/react';
import { useState } from 'react';
import { MenuPoint } from '../../screens/Homescreen';

function NavigationButton({ props }: { props: MenuPoint }) {
  const { label_simple, label_split_animation } = props;

  const [label, setLabel] = useState(label_simple);

  const handleHoverStart = () => {
    constructAnimation([...label_split_animation[0]], [...label_split_animation[1]]);
  };

  const handleHoverEnd = () => {
    constructAnimation([...label_split_animation[1]], [...label_split_animation[0]]);
  };

  const constructAnimation = (labelStart: string[], labelEnd: string[]) => {
    const indices = [...Array(labelStart.length).keys()].sort(() => Math.random() - 0.5);

    indices.forEach((letter, i) => {
      setTimeout(() => {
        labelStart[letter] = labelEnd[letter];
        const newLabel = labelStart.join('');
        setLabel(newLabel);
      }, i * 20);
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.2, opacity: '75%' }}
      initial={{ opacity: '50%' }}
      className="flex justify-center cursor-pointer label-xl"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {label}
    </motion.button>
  );
}

export { NavigationButton };
