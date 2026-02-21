/// <reference types="vite/client" />

declare module "*&as=srcset" {
  const srcset: string;
  export default srcset;
}

declare module "*&as=picture" {
  const picture: ImageMetadata;
  export default picture;
}