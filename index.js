function distanceFromHqInBlocks(blocks){
    const hq = 42
    if (blocks>hq){
        return blocks - hq;
    } else {
        return hq - blocks;
    }
}

function distanceFromHqInFeet(feet){
    const hq = 42
    if (feet>hq){
        return feet*264 - hq*264;
    } else {
        return hq*264 - feet*264;
    }
}

function distanceTravelledInFeet(start,destination){
    if (destination>start){
        return destination*264 - start*264;
    } else {
        return start*264 - destination*264;
    }
}

function calculatesFarePrice(start,destination){
    const feetTravelled = distanceTravelledInFeet(start,destination)
    if (feetTravelled<=400){
        return 0
    } else if (feetTravelled>400 && feetTravelled<=2000){
        return feetTravelled*0.02
    } else if (feetTravelled>2000 && feetTravelled<=2500) {
        return 25
    } else if (feetTravelled>2500){
        return 'cannot travel that far'
    }
}
