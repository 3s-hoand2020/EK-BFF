// from process env
export interface IEnv {
  PORT?: string;
  EK_APP_SITE?: string;
  EK_SERVER?: string;
}

export class AppEnvironment {
  public port = 3000;
  public ekAppSite = "http://localhost:4200";
  public ekServer = "http://localhost:3100";

  constructor(env: IEnv = process.env) {
    this.port = Number(env.PORT || this.port);
    this.ekAppSite = env.EK_APP_SITE || this.ekAppSite;
    this.ekServer = env.EK_SERVER || this.ekServer;
  }
}
