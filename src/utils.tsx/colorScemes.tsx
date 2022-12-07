export enum SchemeColors {
  First,
  Second,
  Third
}

export const colorSchemes = [
  {
    mainColor: SchemeColors.First,
    secondaryColor: SchemeColors.Third,
  },
  {
    mainColor: SchemeColors.Second,
    secondaryColor: SchemeColors.First,
  },
  {
    mainColor: SchemeColors.Third,
    secondaryColor: SchemeColors.Second,
  },
];

export const getColorIndex = (color: number) => {
  const schemesLenght = colorSchemes.length;
  const colorIndex = color < schemesLenght ? color : color % schemesLenght;

  return colorIndex;
}

export const getColorByIndex = (color: number) => {
  const colorIndex = getColorIndex(color)

  return colorSchemes[colorIndex];
}