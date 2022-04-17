// importing express, which this time is a function that is used to create an express application stored in the app variable:
const express = require("express");
const app = express();

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true,
  },
];
// defines an event handler that is used to handle HTTP GET requests made to the application's / root:
app.get("/", (request, response) => {
  response.send("<h1>Hello World, Robbert!</h1>");
});

app.get("/api/notes", (request, response) => {
  response.json(notes); //http://localhost:3001/api/notes
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
