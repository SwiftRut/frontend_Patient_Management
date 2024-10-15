import { lazy } from "react";

export const lazyLoader = (path) => lazy(() => {
  /* @vite-ignore */
  return import(`../${path}`);
});
