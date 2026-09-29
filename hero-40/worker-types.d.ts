declare module "cloudflare:workers" {
  export const env: {
    DB?: any;
    [key: string]: any;
  };
}

declare type Fetcher = any;
declare type D1Database = any;
