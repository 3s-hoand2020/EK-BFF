import { Injectable } from "@nestjs/common/decorators";

import { AppEnvironment } from "../../environment/app";

@Injectable()
export class ConfigService {
  private readonly app: AppEnvironment;

  public constructor() {
    this.app = new AppEnvironment();
  }

  public appEnv(): AppEnvironment {
    return this.app;
  }
}
