let year = 2022;
let month = 3;
let day = 06;

const appointment = (dayEntry, monthEntry, yearEntry) => {
  if (timeUntilSchedule(dayEntry, monthEntry, yearEntry)) {
    return (
      "Faltan" +
      " " +
      (day - dayEntry + month - monthEntry + year - yearEntry) +
      " " +
      "dias para el turno asignado."
    );
  } else if (scheduleToday(dayEntry, monthEntry, yearEntry)) {
    return "Tiene un turno asignado para el dia de hoy.";
  }
};

const scheduleToday = (dayEntry, monthEntry) => {
  if (dayEntry == day && monthEntry == month) {
    return true;
  } else {
    return false;
  }
};

const timeUntilSchedule = (dayEntry, monthEntry) => {
  if (monthEntry < month || (monthEntry == month && dayEntry < day)) {
    return true;
  } else {
    return false;
  }
};

console.log(appointment(01, 03, 2022));
