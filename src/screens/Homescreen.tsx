import { motion } from 'motion/react';
import { NavigationButton } from '../components/Buttons/Buttons';
import { mainMenu } from '../data/menus';

export type MenuPoint = {
  label_simple: string;
  label_split_animation: string[][];
};

function Homescreen() {
  const menuPoints = mainMenu;

  return (
    <motion.div className="flex flex-col gap-8">
      {Object.values(menuPoints).map((menuPoint: MenuPoint) => (
        <NavigationButton props={menuPoint} />
      ))}
    </motion.div>
  );
}

export default Homescreen;
