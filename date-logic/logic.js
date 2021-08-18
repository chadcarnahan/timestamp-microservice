const typePreparer = (date) => {
  if (date.match(/^\d+$/)) {
    let newDate = new Date(Number(date));
    return new Date(newDate.getTime() - newDate.getTimezoneOffset() * -60000);
  } else {
    let newDate = new Date(date);
    return new Date(newDate.getTime() - newDate.getTimezoneOffset() * -60000);
  }
};

const timeStamp = (date) => {
  if (date instanceof Date && !isNaN(date.valueOf())) {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let days = ["Sun","Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let dayMonth = String(date.getDate()).padStart(2, "0");
    let day = days[date.getDay()];
    let hour = String(date.getHours()).padStart(2, "0");
    let min = String(date.getMinutes()).padStart(2, "0");
    let sec = String(date.getSeconds()).padStart(2, "0");
    let unix = date.getTime();
    let utc = `${day}, ${dayMonth} ${month} ${year} ${hour}:${min}:${sec} GMT`;
    return { unix: unix, utc: utc };
  } else {
    return false;
  }
};

module.exports = { timeStamp, typePreparer };
