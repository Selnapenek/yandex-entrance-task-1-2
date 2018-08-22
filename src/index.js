// bf-0 was: import  initMap  from "./map";
import { initMap } from "./map";
//TODO: НАВЕДИ КРАСОТУ ПЕРЕД ПОСЛЕДНИМ ШАГОМ.
ymaps.ready(() => {
  initMap(ymaps, "map");
});
