function distanceFromHqInBlocks(somevalue){
    const Hqblocknum = 42;
    return Math.abs(somevalue - Hqblocknum);
}
function distanceFromHqInFeet(somevalue){
    return distanceFromHqInBlocks(somevalue) * 264;
}
function distanceTravelledInFeet(start, destination){
    const blocklength = 264;
    return Math.abs(destination - start) * blocklength
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance<400){
        return 0;
    }else if (distance>400 && distance<=2000){
        return (distance - 400) * 0.02;
    }else if (distance>2000 && distance<=2500){
        return 25;
    }else{
        return 'cannot travel that far'
    }   
}