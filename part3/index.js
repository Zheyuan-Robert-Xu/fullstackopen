// importing express, which this time is a function that is used to create an express application stored in the app variable:
const express = require("express");
const app = express();

app.use(express.json()); // In order to access the data easily, we need the help of the express json-parser that is taken to
//use with command app.use(express.json())

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
app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id); // id should be interget not string
  const note = notes.find((note) => {
    console.log(note.id, typeof note.id, id, typeof id, note.id === id);
    return note.id === id;
  });
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});
app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});
const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};
app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const note = {
    content: body.content,
    important: body.important || false, //If the important property is missing, we will default the value to false.
    date: new Date(),
    id: generateId(),
  };

  // const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  // const note = request.body; //json-parser, the body property would be undefined.
  // //The json-parser functions so that it takes the JSON data of a request,
  // //transforms it into a JavaScript object and then attaches it to the body property of the request object before the route handler is called.
  // note.id = maxId + 1;
  notes = notes.concat(note);
  response.json(note);
});
