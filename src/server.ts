import app from './app';
import { Request, Response } from 'express';
import config from './app/config';

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});
