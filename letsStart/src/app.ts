import * as express from "express";
import catRouter from "./cats/cats.route";

const app: express.Express = express();
const port: number = 8000;

//* logging middleware
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(req.rawHeaders[1]);
  console.log("this is logging middleware");
  next();
});

//* json middleware
app.use(express.json());

app.use(catRouter);

//* 404 middleware
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found error" });
});

app.listen(port, () => {
  console.log("server is on...");
});
