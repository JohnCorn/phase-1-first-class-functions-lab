
const returnFirstTwoDrivers= function (d  = ['Antonia', 'Nuru', 'Amari', 'Mo']) 
{
    const firstTwoDrivers = d.slice(0, 2);
    return (firstTwoDrivers);
};


const returnLastTwoDrivers= function (d  = ['Antonia', 'Nuru', 'Amari', 'Mo']) 
{
    const lastTwoDrivers = d.slice(2, d.lenght);
    return (lastTwoDrivers);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (n)
{
    const fare = 1;

    switch(n)
    {
        case 2:
        return function (fare) {
            return fareDoubler(fare);
        };

        case 3:
            return function (fare) {
                return fareTripler(fare);
            };

            
        case 5:
            return function (fare) {
                return fareQuintupler(fare);
            };

        default:
            return fare * n;
    }
}

function fareDoubler (fare)
{
    return (fare *2); 
}

function fareTripler (fare)
{
    return (fare *3); 
}

function fareQuintupler (fare)
{
    return (fare * 5); 
}

function selectDifferentDrivers(d  = ['Antonia', 'Nuru', 'Amari', 'Mo'], returnFunction)
{
    return returnFunction (d);
}