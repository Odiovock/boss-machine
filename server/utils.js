let minionCounter = 999;
let ideaCounter = 999;
let meetingCounter = 999;

function createElement (elementType, queryArgument) {
    if (elementType === "minions") {
        if (
            queryArgument.hasOwnProperty("name") &&
            queryArgument.hasOwnProperty("title") &&
            queryArgument.hasOwnProperty("weakness") &&
            queryArgument.hasOwnProperty("salary")
        ) {
            minionCounter++
            return ({
                id: minionCounter,
                name: queryArgument.name,
                title: queryArgument.title,
                weakness: queryArgument.weakness,
                salary: queryArgument.salary
            });
        } else {
            return false;
        }
    }
}

module.exports = {
    createElement: createElement
}