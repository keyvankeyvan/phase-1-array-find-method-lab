// code your solution here

/* function superbowlWin(record) {
    for (const results of record){
        if (results.result ==='W'){
            return results.year
        }
    }
} */

function finder(obj){
    return obj.result === 'W'
}

function superbowlWin(record) {
    const winner = record.find(finder)
    if (winner != undefined) {
        return winner.year
    }
}