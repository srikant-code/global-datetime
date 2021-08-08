const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  const nDate = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Calcutta",
  });

const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(' ');

  let [hours, minutes, seconds] = time.split(':');

  if (hours === '12' || hours === '24') {
    hours = '00';
  }
  if(hours > 12) return `/${hours}:${minutes}:${seconds}`
  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }
  return `/${hours}:${minutes}:${seconds}`;
}

  let ydate = nDate.replace("/", "-").replace("/", "-")
  ydate = ydate.split(", ")[0] + convertTime12to24(ydate.split(", ")[1]);

  res.send(ydate);
});

app.listen(port, () => {
  console.log(`global-date app listening at http://localhost:${port}`);
});
