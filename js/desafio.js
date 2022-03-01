let year = 2022;
let month = 2;
let day = 28;

const laborOld = (dayEntry, monthEntry, yearEntry) => {
  if (moreThanFiveYears(dayEntry, monthEntry, yearEntry)) {
    return (
      "You have" +
      " " +
      (year - yearEntry) +
      " " +
      "years of labor contribution to the company."
    );
  } else if (fiveYears(dayEntry, monthEntry, yearEntry)) {
    return (
      "Congratulations, you have accomplished" +
      " " +
      (year - yearEntry) +
      " " +
      "years of labor contribution to the company."
    );
  } else {
    return (
      "You have" +
      " " +
      (year - yearEntry - 1) +
      " " +
      "years of labor contribution."
    );
  }
};

const fiveYears = (dayEntry, monthEntry) => {
  if (dayEntry == day && monthEntry == month) {
    return true;
  } else {
    return false;
  }
};

const moreThanFiveYears = (dayEntry, monthEntry) => {
  if (monthEntry < month || (monthEntry == month && dayEntry < day)) {
    return true;
  } else {
    return false;
  }
};

console.log(laborOld(09, 10, 2014));
