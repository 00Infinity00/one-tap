const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 3000; // You can choose any available port

// Middleware to parse JSON in the request body
app.use(bodyParser.json());
app.use(cors());
// app.get('/', (req, res)=>{
//   // console.log(req.url)
//     })

// Endpoint to handle email synchronization
app.post('/sync-email', (req, res) => {
  const { email } = req?.body;

  // Perform any necessary actions with the received email (e.g., save it to a database)
  // Replace the following line with your actual logic

  console.log('Received email for synchronization:', email);

  res.json({ success: true, message: 'Email synchronized successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
