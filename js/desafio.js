let year = 2022;
let month = 3;
let day = 06;

const appointment = (dayEntry, monthEntry, yearEntry) => {
  if (timeUntilSchedule(dayEntry, monthEntry, yearEntry)) {
    return (
      "Faltan" +
      " " +
      (day - dayEntry) +
      " " +
      "dias y" +
      " " +
      (month - monthEntry) +
      " " +
      "meses para el turno asignado."
    );
  } else if (scheduleToday(dayEntry, monthEntry, yearEntry)) {
    return "Tiene un turno asignado para el dia de hoy.";
  } else {
    return (
      "Su ultimo turno fue asignado hace" +
      " " +
      (day + dayEntry + 20) +
      " " +
      "dias."
    );
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

console.log(appointment(01, 04, 2022));
