/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
class Dependencies {
  private vars: Map<string, any> = new Map();

  put<S>(dependency: S, name: string): void {
    this.vars.set(name, dependency);
  }

  find<S>(name: string): S {
    return this.vars.get(name);
  }
}

const Get = new Dependencies();
export default Get;
