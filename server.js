const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const currentTime = new Date().toISOString();
  res.end(JSON.stringify({ 
    time: currentTime,
    timestamp: Date.now()
  }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Time server running on port ${PORT}`);
});
