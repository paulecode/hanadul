import { motion } from 'motion/react';
import { handleHoverEnd, handleHoverStart } from '../../utils/animationUtils';
import { useState } from 'react';

function NavBar() {
  const hana: [string[], string[]] = [
    ['ha', 'na'],
    ['하', '나'],
  ];
  const dul: [string[], string[]] = [['dul'], ['둘']];

  const [hanaLabel, setHanaLabel] = useState('hana');
  const [dulLabel, setDulLabel] = useState('dul');

  // const hanaLabel =
  return (
    <div className="h-16 flex gap-1 items-center label-xl opacity-25 text-xl pl-4">
      <motion.p
        onHoverStart={() => handleHoverStart(hana, setHanaLabel)}
        onHoverEnd={() => handleHoverEnd(hana, setHanaLabel)}
        className="w-12"
      >
        {hanaLabel}
      </motion.p>
      <motion.p
        onHoverStart={() => handleHoverStart(dul, setDulLabel)}
        onHoverEnd={() => handleHoverEnd(dul, setDulLabel)}
        className="w-8"
      >
        {dulLabel}
      </motion.p>
    </div>
  );
}

export default NavBar;
