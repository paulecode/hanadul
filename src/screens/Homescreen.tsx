import { motion } from 'motion/react';
import { NavigationButton } from '../components/Buttons/Buttons';
import { mainMenu } from '../data/menus';

export type MenuPoint = {
  label_simple: string;
  label_split_animation: [string[], string[]];
};

function Homescreen() {
  const menuPoints = mainMenu;

  return (
    <motion.div className="gap-8 grid place-content-center grow">
      {Object.values(menuPoints).map((menuPoint: MenuPoint) => (
        <NavigationButton props={menuPoint} />
      ))}
    </motion.div>
  );
}

export default Homescreen;
