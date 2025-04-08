const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson;
    people.forEach(person => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
        let age = person.yearOfDeath - person.yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    })
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
