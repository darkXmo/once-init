import oi from "once-init";
import request from "./request";
declare global {
  interface Window {
    oi: Function;
  }
}
window.oi = oi;

const commonRequest = request.count;
const oiRequest = oi(request.count).refresh;

const commonBtn = document.getElementById("common") as HTMLButtonElement;
const oiBtn = document.getElementById("oi") as HTMLButtonElement;

commonBtn.addEventListener("click", () =>
  commonRequest().then((res) => {
    (document.getElementById("value") as HTMLSpanElement).innerText =
      res.toString();
  })
);
oiBtn.addEventListener("click", () =>
  oiRequest().then((res) => {
    (document.getElementById("value") as HTMLSpanElement).innerText =
      res.toString();
  })
);
