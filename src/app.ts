import express, { Application } from "express";
import morgan from "morgan";

//Routes
import IndexRoutes from "./routes/index.routes";

export class App {
  app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.setting();
    this.middleware();
    this.routes();
  }

  setting() {
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  middleware() {
    this.app.use(morgan("dev"));
  }

  routes() {
    this.app.use(IndexRoutes);
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on port", 3000);
  }
}
