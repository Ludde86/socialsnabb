export const hamtaVeckonummer = () => {
  const idag = new Date();

  const startAr = new Date(idag.getFullYear(), 0, 1);

  const dagar = Math.floor((idag - startAr) / (24 * 60 * 60 * 1000));

  return Math.ceil((dagar + 1) / 7);
};
