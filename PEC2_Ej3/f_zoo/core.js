function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  let totalPrice = 0;
  totalPrice += (entrants.Child || 0) * prices.Child;
  totalPrice += (entrants.Adult || 0) * prices.Adult;
  totalPrice += (entrants.Senior || 0) * prices.Senior; 
  
  return totalPrice;
}
/* ---------------------------------------------------------------- */
//Revisar formathour dins de schedule
const { hours } = require('./data');

function formatHour(hour) {
  if (hour === 0) {
    return '12am';
  } else if (hour === 12) {
    return '12pm';
  } else {
    return `${hour % 12}${hour < 12 ? 'am' : 'pm'}`;
  }
}
function schedule(dayName) {
  const formattedSchedule = {};
  for (const day in hours) {
    if (hours.hasOwnProperty(day)) {
      const dayHours = hours[day];
      if (dayHours.close === 0 && dayHours.open === 0) {
        formattedSchedule[day] = 'CLOSED';
      } else {
        formattedSchedule[day] = `Open from ${formatHour(dayHours.open)} until ${formatHour(dayHours.close)}`;
      }
    }
  }

  if (dayName) {
    return { [dayName]: formattedSchedule[dayName] };
  }
  return formattedSchedule;
}
module.exports = { schedule };

/* ---------------------------------------------------------------- */
// Revisar, no funciona correctament
module.exports.animals = {
  lions: 5,
  tigers: 4,
  bears: 3,
  giraffes: 7
};

const { animals } = require('./data');

function animalCount(species) {
  if (species) {
    const count = animals[species] || 0;
    return { [species]: count };
  } else {
    return animals;
  }
}

module.exports = { animalCount };

/* ---------------------------------------------------------------- */
function animalMap(options = {}) {
  const map = {};

  animals.forEach((animal) => {
    if (!map[animal.location]) {
      map[animal.location] = [];
    }

    if (options.includeNames) {
      const names = animal.residents
        .filter((resident) => {
          return options.sex ? resident.sex === options.sex : true;
        })
        .map((resident) => resident.name);

      map[animal.location].push({ [animal.name]: names });
    } else {
  
      map[animal.location].push(animal.name);
    }
  });

  return map;
}

/* ---------------------------------------------------------------- */
// Revisar, no passa el 2n test
function animalPopularity(rating) {

  const popularityMap = {};
  animals.forEach(animal => {
    const pop = animal.popularity;

    if (rating === undefined || rating === pop) {
      if (!popularityMap[pop]) {
        popularityMap[pop] = [];
      }
      popularityMap[pop].push(animal.name);
    }
  });

  return rating !== undefined ? { [rating]: popularityMap[rating] || [] } : popularityMap;
}

/* ---------------------------------------------------------------- */
function animalsByIds(...ids) {
  return animals.filter(animal => ids.includes(animal.id));
}
/* ---------------------------------------------------------------- */
//Revisar no funciona be
/*
function animalByName(animalName) {
  for (let i = 0; i < animals.length; i++) {
    for (let j = 0; j < animals[i].residents.length; j++) {
      if (animals[i].residents[j].name === animalName) {
        return animals[i].residents[j];
      }
    }
  }
  return null;
}
*/
/* ---------------------------------------------------------------- */
// No funciona
/*
function employeesByIds(ids) {
  return employees.filter(employee => ids.includes(employee.id));
}

const selectedEmployeeIds = ['c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1', '56d43ba3-a5a7-40f6-8dd7-cbb05082383f'];
const selectedEmployees = employeesByIds(selectedEmployeeIds);
console.log(selectedEmployees);
*/
/* ---------------------------------------------------------------- */

function employeeByName(employeeName) {
  if (!employeeName){ return {};
}
  const employee = employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName
  ); return employee || {};
}

/* ---------------------------------------------------------------- */
/*
function managersForEmployee(idOrName) {
  // your code here
}
*/
/* ---------------------------------------------------------------- */
/*
function employeeCoverage(idOrName) {
  // your code here
}
*/
/* ---------------------------------------------------------------- */



module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  employeeByName
  /*
  animalByName,
  employeesByIds,
  managersForEmployee,
  employeeCoverage
  */
};
