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