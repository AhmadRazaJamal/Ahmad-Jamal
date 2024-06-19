export const isMobileScreen = typeof window !== 'undefined' && window.innerWidth <= 425;
export const isSmallScreen = typeof window !== 'undefined' && window.innerWidth <= 768;
export const isMediumScreen = typeof window !== 'undefined' && window.innerWidth <= 1024;
export const isLargeScreen = typeof window !== 'undefined' && window.innerWidth <= 1440;
export const isExtraLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1440;
export const isMobileDevice = () => /Mobi|Android/i.test(navigator.userAgent);
export const isSafariBrowser = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent);