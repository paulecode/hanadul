import { MenuPoint } from '../screens/Homescreen';

export const mainMenu: Record<string, MenuPoint> = {
  jpn: {
    label_simple: 'Japanese',
    label_split_animation: [
      ['Ja', 'pa', 'ne', 'se'],
      ['に', 'ほ', 'ん', 'ご'],
    ],
  },
  kor: {
    label_simple: 'Korean',
    label_split_animation: [
      ['Ko', 're', 'an'],
      ['한', '국', '오'],
    ],
  },
};

