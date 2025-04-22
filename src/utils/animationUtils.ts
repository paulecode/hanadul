export const constructAnimation = (
  labelStart: string[],
  labelEnd: string[],
  setLabel: (newLabel: string) => void
): void => {
  const indices = [...Array(labelStart.length).keys()].sort(() => Math.random() - 0.5);

  indices.forEach((letter, i) => {
    setTimeout(() => {
      labelStart[letter] = labelEnd[letter];
      const newLabel = labelStart.join('');
      setLabel(newLabel);
    }, i * 25);
  });
};

export const handleHoverStart = (
  labelSplitAnimation: [string[], string[]],
  setLabel: (newLabel: string) => void
): void => {
  constructAnimation([...labelSplitAnimation[0]], [...labelSplitAnimation[1]], setLabel);
};

export const handleHoverEnd = (
  labelSplitAnimation: [string[], string[]],
  setLabel: (newLabel: string) => void
): void => {
  constructAnimation([...labelSplitAnimation[1]], [...labelSplitAnimation[0]], setLabel);
};
