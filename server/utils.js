function createElement (elementType, queryArgument) {
    if (elementType === "minions") {
        if (
            queryArgument.hasOwnProperty("name") &&
            queryArgument.hasOwnProperty("title") &&
            queryArgument.hasOwnProperty("weaknesses") &&
            queryArgument.hasOwnProperty("salary")
        ) {
            const newMinion = {
                name: queryArgument.name,
                title: queryArgument.title,
                weakness: queryArgument.weakness,
                salary: queryArgument.salary
            }
            return newMinion;
        } else {
            return false;
        }
    } else if (elementType === "ideas") {
        if (
            queryArgument.hasOwnProperty("name") &&
            queryArgument.hasOwnProperty("description") &&
            queryArgument.hasOwnProperty("weeklyRevenue") &&
            queryArgument.hasOwnProperty("numWeeks")
        ) {
            const newIdea = {
                name: queryArgument.name,
                description: queryArgument.description,
                weeklyRevenue: queryArgument.weeklyRevenue,
                numWeeks: queryArgument.numWeeks
            }
            return newIdea
        } else {
            return false;
        }
    } else if (elementType === "meetings") {
        if (
            queryArgument.hasOwnProperty("time") &&
            queryArgument.hasOwnProperty("date") &&
            queryArgument.hasOwnProperty("day") &&
            queryArgument.hasOwnProperty("note")
        ) {
            const newMeeting = {
                time: queryArgument.time,
                date: queryArgument.date,
                day: queryArgument.day,
                note: queryArgument.note
            }
            return newMeeting;
        } else {
            return false;
        }
    }
}

module.exports = {
    createElement: createElement
}