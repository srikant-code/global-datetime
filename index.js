const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  const nDate = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Calcutta",
  });
  res.send(nDate.replace("/", "-").replace("/", "-").replace(", ", "/"));
});

app.listen(port, () => {
  console.log(`global-date app listening at http://localhost:${port}`);
});
