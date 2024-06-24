import express from 'express';
import router from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());

    this.routes();

    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private routes(): void {
    this.app.use(router);
    this.app.all('*', (_req, res) =>
      res.status(501).json({ message: 'Not implemented' })
    );
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };
