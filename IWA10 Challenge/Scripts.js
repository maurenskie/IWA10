const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: 'Day of Reconciliation',
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: 'Workers Day',
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: 'Day of Goodwill',
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: 'New Year Day',
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: 'Womens Day',
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: 'Heritage Day',
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: 'Christmas Day',
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: 'Youth Day',
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: 'Human Rights Day',
    date: new Date(`21 March ${currentYear}`)
  },
};

const christmas = 6;
const futureId = 9;

// Check if futureId has a value
if (holidays[futureId]) {
  console.log(holidays[futureId].name);
} else {
  console.log(`ID ${futureId} not created yet`);
}

// Copy the Christmas object and make the requested changes
const copied = { ...holidays[christmas] };
copied.name = 'X-mas Day';
copied.date.setHours(0, 0, 0, 0);

// Check if the new date is earlier and log the result
const isEarlier = copied.date < holidays[christmas].date;
console.log(`New date is earlier: ${isEarlier}`);

// Log the changes made to the copied object
console.log(`ID change: false`);
console.log(`Name change: ${copied.name}`);
console.log(`Date change: ${copied.date.getDate().toString().padStart(2, '0')}/${(copied.date.getMonth() + 1).toString().padStart(2, '0')}/${copied.date.getFullYear()}`);

// Output the first and last holidays of the year and a randomly selected holiday
const holidayDates = Object.values(holidays).map((holiday) => holiday.date);
const firstHoliday = new Date(Math.min(...holidayDates));
const lastHoliday = new Date(Math.max(...holidayDates));
const randomHoliday = holidayDates[Math.floor(Math.random() * holidayDates.length)];

console.log(`First holiday: ${firstHoliday.getDate().toString().padStart(2, '0')}/${(firstHoliday.getMonth() + 1).toString().padStart(2, '0')}/${firstHoliday.getFullYear()}`);
console.log(`Last holiday: ${lastHoliday.getDate().toString().padStart(2, '0')}/${(lastHoliday.getMonth() + 1).toString().padStart(2, '0')}/${lastHoliday.getFullYear()}`);
console.log(`Random holiday: ${randomHoliday.getDate().toString().padStart(2, '0')}/${(randomHoliday.getMonth() + 1).toString().padStart(2, '0')}`);

