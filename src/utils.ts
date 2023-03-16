export const useMultiplier = (screenSize: number) => {
    if(screenSize >= 768){
        return 1
    } else { 
        return 2
    }
}

export const positionFrame = (screenSize: number) => {
    if(screenSize >= 768){
        return 0
    } else { 
        return 8.5
    }
}