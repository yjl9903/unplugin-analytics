declare module '~analytics/scripts.astro' {
  export default function Analytics(): any;
}

declare module '~analytics/clarity' {
  export const clarity:
    | {
        (event: 'event', name: string): void;
      }
    | undefined;
}

declare module '~analytics/umami' {
  type Payload = {
    hostname?: string;
    language?: string;
    referrer?: string;
    screen?: string;
    title?: string;
    url?: string;
    website: string;
  };

  export const umami:
    | {
        /**
         * The Umami tracker exposes a function that you can call on your website if you want more control over your tracking.
         *
         * @link https://umami.is/docs/tracker-functions
         */
        track: {
          (): Promise<string>;

          (payload: Payload): Promise<string>;

          (
            payload: (
              props: Payload
            ) =>
              | (Payload & { name: string; data: Record<string, any> })
              | (Payload & Record<string, any>)
          ): Promise<string>;

          (event: string, data?: Record<string, any>): Promise<string>;
        };
      }
    | undefined;
}
