export const getBgColor = (id: number) => {
  const colors = ['pink', 'green', 'blue'];

  const remainder = (id - 1) / colors.length;

  console.log('remainder',remainder);

  return colors[id - 1];
}