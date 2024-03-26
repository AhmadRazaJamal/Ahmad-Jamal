export const changeProgressBarHeight = (
  className: string,
  offset: number,
  rangeStart: number,
  range: boolean
) => {
  const progressBar = document.querySelector(`.${className}`) as HTMLElement;

  if (progressBar && range) {
    const heightIncrement = (offset - rangeStart) * 2000;
    progressBar.style.height = `${1 + heightIncrement}rem`;
  } else if (progressBar) {
    progressBar.style.height = "0rem";
  }
};

export const isSmallScreen = window?.innerWidth < 757;
