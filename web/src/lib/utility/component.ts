export const mode = (light: any, dark: any) => (colorMode: string) => {
  return colorMode === 'dark' ? dark : light;
};
