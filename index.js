function distanceFromHqInBlocks(someValue) {
    let distance
    return distance = Math.abs(someValue - 42)
}

function distanceFromHqInFeet(somevalue2) {
    let distanceFeet
    return distanceFeet = distanceFromHqInBlocks(somevalue2) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264)
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination) 
    let fare
    if (distance < 400) {
        fare = 0
        return fare
    }
    else if (distance < 2000) {
        fare = (distance - 400) * .02
        return fare
    }
    else if (distance < 2500) {
        fare = 25
        return fare
    }
    else {
        return "cannot travel that far"
    }
}