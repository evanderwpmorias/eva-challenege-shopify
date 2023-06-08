
export const storageLocal:any = {
    set: (name:string, value:any) => window.localStorage.setItem(name, JSON.stringify(value)),
    get: (x:string) => {
      const value:any = window.localStorage.getItem(x);
      return JSON.parse(value);
    },
    remove: (x:string) => window.localStorage.removeItem(x),
  };
  
  