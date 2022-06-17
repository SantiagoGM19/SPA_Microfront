import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@sofkau/mf-footer",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@sofkau/mf-footer",
  app: () => System.import("@sofkau/mf-footer"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@sofkau/mf-header",
  app: () => System.import("@sofkau/mf-header"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
