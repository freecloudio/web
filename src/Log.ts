export class Log {

  // tslint:disable-next-line
  public debug = (process.env.NODE_ENV === "production") ? (msg: string, ...rest: any[]) => {} :
    (msg: string, ...rest: any[]) => {
      console.debug(this.fmt("DBG", msg), ...rest);
    }

  constructor(private component: string) {
  }
  
  public info(msg: string, ...rest: any[]) {
    console.info(this.fmt("INF", msg), ...rest);
  }

  public warn(msg: string, ...rest: any[]) {
    console.warn(this.fmt("WRN", msg), ...rest);
  }

  public error(msg: string, ...rest: any[]) {
    console.error(this.fmt("ERR", msg), ...rest);
  }

  private fmt(lvl: string, msg: string) {
    return `[${lvl}] ${this.component}: ${msg}`;
  }
}