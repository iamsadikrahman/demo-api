// import express from "express";

// const app = express();
// const port = 9000;
// app.use("/", (req, res) => {
//   res.json({ message: "Hello From Express App" });
// });

// app.listen(9000, () => {
//   console.log(`Starting Server on Port ${port}`);
// });



import express from "express";

import cors from "cors"


import data from './data.json' assert { type: 'json' };

const port = 9000;



const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/movies', (req, res) => {
  res.json(data);
});

// Define a route to get data by ID
app.get('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const dataItem = data.find(item => item.id === id);
  if (dataItem) {
    res.json(dataItem);
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Movie API!');
});


app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});
