// photos
import { runOnce } from "https://esm.sh/@bramus/sda-utilities";

// Chrome seems to fire animationend while the page is still loading?! – https://crbug.com/1470309
// To counteract, we only attach the listeners on load
window.addEventListener("load", (e) => {
  document.querySelectorAll(".photo").forEach(($photo) => {
    runOnce($photo, "animate-in");
  });
});