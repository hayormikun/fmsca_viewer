// server.ts

import express, { Request, Response } from 'express';
import next from 'next';
import path from 'path';
import { promises as fs } from 'fs';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Define an Express route to serve the JSON file
  server.get('/api/data', async (req: Request, res: Response) => {
    try {
      // Find the absolute path of the data directory
      const jsonDirectory = path.join(process.cwd(), 'public', 'data');

      // Read the JSON data file data.json
      const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

      // Send the JSON response
      res.json(JSON.parse(fileContents));
    } catch (error) {
      console.error('Error reading JSON file:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Handle all other routes with Next.js
  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
