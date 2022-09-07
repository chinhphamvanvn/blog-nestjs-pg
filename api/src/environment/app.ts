export interface IConf {
  port?: number;
  appName?: string;
  version?: string;
  production?: boolean;
  frontend?: string;
}

export class AppConfig implements IConf {
  public appName = 'bff';
  public version = '0.0.0';
  public port = 3000;
  public production = true;
  public frontend = 'http://localhost:4200';

  constructor() {
    this.frontend = this.frontend;
  }
}
