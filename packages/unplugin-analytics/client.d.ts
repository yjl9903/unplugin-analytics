declare module '~analytics/scripts.astro' {
  export default function Analytics(): any;
}

declare module '~analytics/clarity' {
  export const clarity: (event: string) => void;
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

  export const umami: {
    track: {
      (): void;

      (payload: Payload): void;

      (payload: (props: Payload) => Payload & Record<string, any>): void;

      (event: string, data?: Record<string, any>): void;
    };
  };
}
