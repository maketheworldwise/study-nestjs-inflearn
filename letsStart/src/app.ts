import * as express from "express";
import catRouter from "./cats/cats.route";

class Server {
  public app: express.Application;
  private port: number = 8000;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setMiddleware() {
    //* logging middleware
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.log(req.rawHeaders[1]);
      console.log("this is logging middleware");
      next();
    });

    //* json middleware
    this.app.use(express.json());

    //* router
    this.setRoute();

    //* 404 middleware
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.log("this is error middleware");
      res.send({ error: "404 not found error" });
    });
  }

  private setRoute() {
    this.app.use(catRouter);
  }

  public listen() {
    this.setMiddleware();

    this.app.listen(this.port, () => {
      console.log("server is on...");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
