const typePreparer = (date) => {
  if (date.match(/^\d+$/)) {
    return new Date(Number(date));
  } else {
    return new Date(date);
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
    let days = ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"];

    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let dayMonth = String(date.getDate()).padStart(2, "0");
    let day = days[date.getDay()];
    let hour = String(date.getHours()).padStart(2, "0");
    let min = String(date.getMinutes()).padStart(2, "0");
    let sec = String(date.getSeconds()).padStart(2, "0");
    let unix = date.getTime();
    let utc = `${day}, ${dayMonth} ${month} ${year} ${hour}:${min}:${sec} CST`;
    return { unix: unix, utc: utc };
  } else {
    return false;
  }
};

module.exports = { timeStamp, typePreparer };
