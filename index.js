// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray){
    let newArr = []
    newArr.push(driversArray[0], driversArray[1]);
    return newArr;
    //or with slice(0, 2);
};

const returnLastTwoDrivers = function(driversArray) {
    // let newArr = [];
    // newArr.push(driversArray[driversArray.length -2], driversArray[driversArray.length -1]);
    // return newArr;
    return driversArray.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = int => {
    return function(fare) {
        return fare * int;
    };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (driversArray, drivers) => {
    if (drivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(driversArray);
    } else if (drivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(driversArray);
    };
};