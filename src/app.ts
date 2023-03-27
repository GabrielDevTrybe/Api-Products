// import 'express-async-errors';
import * as express from 'express';// import teamRouter from './api/routes/TeamRoutes';
// import loginRouter from './api/routes/LoginRouter';
// import matchRouter from './api/routes/MatchRoutes';
// import leaderboardRouter from './api/routes/LeaderBoardRoutes';
// import ErrorHandler from './api/middlewares/ErrorHandler';
// import LoginMiddleware from './api/middlewares/LoginMiddleware';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.initRoutes();

    // this.initMiddlewares();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }

  private initRoutes(): void {
    // this.app.use(teamRouter);
    // this.app.use(loginRouter);
    // this.app.use(matchRouter);
    // this.app.use(leaderboardRouter);
    // this.app.use(ErrorHandler);
  }

  // private initMiddlewares() {
  //   this.app.use(LoginMiddleware.validatelogin);
  // }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();