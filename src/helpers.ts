export const changeProgressBarHeight = (className: string, offset: number, speed: number, depth: number, range: boolean) => {
    const progressBar = document.querySelector(`.${className}`) as HTMLElement;

    if (progressBar && range) {
        // Use a non-linear function to model the growth. Here we use a custom growing function.
        const calculatedHeight = `${1 - (speed - offset) * depth}vh` 
        // Set the progress bar height
        progressBar.style.height = calculatedHeight;
    } else if (progressBar) {
        progressBar.style.height = '0vh';
    }
}