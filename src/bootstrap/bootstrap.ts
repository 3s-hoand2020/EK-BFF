import { NestFactory } from "@nestjs/core";
import { INestApplication, ValidationPipe } from "@nestjs/common";

import { ConfigService } from "../service/config";

export class App {
  public static async start(module: any) {
    const app = await NestFactory.create(module);
    await App.setup(app);
  }

  public static async setup(app: INestApplication) {
    // main app
    const env = new ConfigService();

    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    await app.listen(env.appEnv().port);
    console.log(`listening the port http://${process.env.HOSTNAME || "localhost"}:${env.appEnv().port}`);
  }
}
