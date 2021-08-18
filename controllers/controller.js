const { typePreparer, timeStamp } = require("../date-logic/logic");
const getTime = (req, res) => {
  const date = typePreparer(req.params.date);
  let { unix, utc } = timeStamp(date);
  if (timeStamp) {
    res.json({ unix: unix, utc: utc });
  } else {
    res.json({ error: "Invalid Date" });
  }
};

const getCurrent = (req, res) => {
  let { unix, utc } = timeStamp(new Date());
  res.json({ unix: unix, utc: utc });
};

module.exports = { getTime, getCurrent };
