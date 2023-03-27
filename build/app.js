"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
// import 'express-async-errors';
const express_1 = __importDefault(require("express"));
// import teamRouter from './api/routes/TeamRoutes';
// import loginRouter from './api/routes/LoginRouter';
// import matchRouter from './api/routes/MatchRoutes';
// import leaderboardRouter from './api/routes/LeaderBoardRoutes';
// import ErrorHandler from './api/middlewares/ErrorHandler';
// import LoginMiddleware from './api/middlewares/LoginMiddleware';
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.initRoutes();
        // this.initMiddlewares();
        // Não remover essa rota
        this.app.get('/', (req, res) => res.json({ ok: true }));
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express_1.default.json());
        this.app.use(accessControl);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
    initRoutes() {
        // this.app.use(teamRouter);
        // this.app.use(loginRouter);
        // this.app.use(matchRouter);
        // this.app.use(leaderboardRouter);
        // this.app.use(ErrorHandler);
    }
}
exports.App = App;
// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
exports.app = new App().app;
