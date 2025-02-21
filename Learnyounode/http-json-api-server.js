const http = require('http');
const url = require('url');
const port = Number(process.argv[2]);

function parseTime(iso) {
  const date = new Date(iso);
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}
function unixTime(iso) {
  const date = new Date(iso);
  return {
    unixtime: date.getTime(),
  };
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${port}`);
  const pathname = parsedUrl.pathname;
  const iso = parsedUrl.searchParams.get('iso');

  let result;

  if (pathname === '/api/parsetime' && iso) {
    result = parseTime(iso);
  } else if (pathname === '/api/unixtime' && iso) {
    result = unixTime(iso);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Invalid endpoint or missing iso query' }));
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
