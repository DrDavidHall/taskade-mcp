#!/usr/bin/env node
import http from 'node:http';

// Preserve your public exports for other imports
export * from './server';
export * from './tools.generated';

const port = Number(process.env.PORT ?? 3000);

const server = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'text/plain; charset=utf-8');
  res.end('Taskade MCP server alive ✅');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on :${port}`);
});
