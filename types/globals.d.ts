/// <reference types="react" />
/// <reference types="next" />

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "@/app/globals.css" {
  const content: any;
  export default content;
}
