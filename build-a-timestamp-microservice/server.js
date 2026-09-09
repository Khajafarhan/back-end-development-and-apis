import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

// Do not change code above this line
// Do not change code above this line

app.get("/api", (_req, res) => {
  const now = new Date();

  res.json({
    unix: now.getTime(),
    utc: now.toUTCString(),
  });
});

app.get("/api/:date", (req, res) => {
  const dateParam = req.params.date;

  // Unix timestamp in milliseconds
  if (/^\d+$/.test(dateParam)) {
    const date = new Date(Number(dateParam));

    return res.json({
      unix: date.getTime(),
      utc: date.toUTCString(),
    });
  }

  // Natural date string
  const date = new Date(dateParam);

  if (isNaN(date.getTime())) {
    return res.json({
      error: "Invalid Date",
    });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});


// Do not change code below this line

// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
