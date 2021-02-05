import { createBrowserHistory } from "history";

export const {
  length,
  action,
  location,
  createHref,
  push,
  replace,
  go,
  goBack,
  goForward,
  block,
  listen,
} = createBrowserHistory();

export const entries = [];

listen((route, act) => {
  switch (act) {
    case "PUSH":
      entries.push(route.pathname);
      break;
    case "POP":
      entries.pop();
      break;
    case "REPLACE":
      entries[entries.length - 1] = route.pathname;
      break;
    default:
  }
});
