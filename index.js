const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);

  // Handle only POST requests to /sync-email
  if (req.method === 'POST' && parsedUrl.pathname === '/sync-email') {
    // Read the data from the request
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });

    req.on('end', () => {
      try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Extract email from the JSON data
        const email = jsonData.email;

        // Perform any necessary actions with the received email (e.g., save it to a database)
        // Replace the following line with your actual logic

        console.log('Received email for synchronization:', email);

        // Send a response
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Email synchronized successfully' }));
      } catch (error) {
        console.error('Error parsing JSON:', error);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Invalid JSON data' }));
      }
    });
  } else {
    // Handle other requests
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 3000; // You can choose any available port

// Start the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
