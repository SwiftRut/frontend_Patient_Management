import { lazy } from "react";

export const lazyLoader = (path) => 
  lazy(() => /* @vite-ignore */ import(`../${path}`));
