declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.graphql' {
  const content: any;
  export default content;
}

declare type Prop<
  T extends React.JSXElementConstructor<React.ComponentProps<T>>,
  P extends keyof React.ComponentProps<T>,
> = React.ComponentProps<T>[P];

type Merge<T, E> = {
  [K in Exclude<keyof T, keyof E>]: T[K]
} & E;
