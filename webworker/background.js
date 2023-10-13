
const worker = new Worker("worker.js");

browser.browserAction.onClicked.addListener(() => {
  worker.postMessage("retrieve");
});

worker.onmessage = (e) => {
  browser.notifications.create({
    "type": "basic",
    "title": "Retrieved via webworker",
    "message": e.data
  });
};