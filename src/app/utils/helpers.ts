export const useMultiplier = (screenSize: number) => {
    if(screenSize >= 768){
        return 2
    } else { 
        return 1.5
    }
}

export const positionCamera = (screenSize: number) => {
    if(screenSize >= 768){
        return 0
    } else { 
        return 12.4
    }
}

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