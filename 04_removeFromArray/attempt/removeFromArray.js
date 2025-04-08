const removeFromArray = function(array, ...args) {
    result = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            result.push(item);
        }
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
