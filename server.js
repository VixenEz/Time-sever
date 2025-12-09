const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  // Get current time in Cambodia (UTC+7)
  const now = new Date();
  const cambodiaTime = new Date(now.getTime() + (7 * 60 * 60 * 1000));
  
  res.end(JSON.stringify({ 
    time_utc: now.toISOString(),
    time_cambodia: cambodiaTime.toISOString().replace('Z', '+07:00'),
    time_cambodia_formatted: cambodiaTime.toLocaleString('en-US', { timeZone: 'Asia/Phnom_Penh' }),
    timestamp: Date.now(),
    timezone: "Asia/Phnom_Penh (UTC+7)",
    country: "Cambodia"
  }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Cambodia Time Server running on port ${PORT}`);
});
