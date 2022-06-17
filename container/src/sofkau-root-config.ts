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
  activeWhen: ["/footer"]
});

registerApplication({
  name: "@sofkau/mf-header",
  app: () => System.import("@sofkau/mf-header"),
  activeWhen: ["/header"]
});

start({
  urlRerouteOnly: true,
});
