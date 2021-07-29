import { Controller, Res, Get } from "@nestjs/common";
import { Response } from "express";

import { ConfigService } from "../../service/config";

@Controller()
export class EnvironmentController {
  constructor(public config: ConfigService) {}

  @Get("env")
  public getEnvironment(@Res() res: Response) {
    res
      .status(200)
      .json({
        ekAppSite: this.config.appEnv().ekAppSite || "",
        ekServer: this.config.appEnv().ekServer || "",
      })
      .end();
  }

  @Get("hello-world")
  public getConditionMonitoring(@Res() res: Response) {
    res.status(200).json({ status: 200, message: "Very Goood!!" }).end();
  }
}
