const { typePreparer, timeStamp } = require("../date-logic/logic");
const getTime = (req, res) => {
  const date = typePreparer(req.params.date);
  let { unix, utc } = timeStamp(date);
  if (timeStamp) {
    res.status(200).json({ unix: unix, utc: utc });
  } else {
    res.status(401).json({ error: "Invalid Date" });
  }
};

const getCurrent = (req, res) => {
  let { unix, utc } = timeStamp(new Date());
  res.status(200).json({ unix: unix, utc: utc });
};

module.exports = { getTime, getCurrent };
