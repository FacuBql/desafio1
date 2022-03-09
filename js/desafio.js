let day = 29;
let month = 10;
let year = 2022;

const schedule = (dayEntry, monthEntry, year) => {
  if (scheduleToday(dayEntry, monthEntry, year)) {
    return "Usted tiene un turno asignado el dia de hoy.";
  } else if (prevSchedule(dayEntry, monthEntry, year)) {
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
  } else {
    return "No tiene turnos programados. ¿Desea solicitar uno?";
  }
};

const scheduleToday = (dayEntry, monthEntry) => {
  if (dayEntry == day && monthEntry == month) {
    return true;
  } else {
    return false;
  }
};

const prevSchedule = (dayEntry, monthEntry) => {
  if (dayEntry < day && monthEntry < month) {
    return true;
  } else {
    return false;
  }
};

console.log(schedule(14, 06, 2022));
console.log(schedule(29, 10, 2022));
console.log(schedule(15, 12, 2023));
