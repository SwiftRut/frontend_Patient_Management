import { lazy } from "react";
export const lazyLoader = (path) => lazy(() => import(`../${path}`));