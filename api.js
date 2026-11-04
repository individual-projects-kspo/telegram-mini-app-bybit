// Calls the bot's API with the Telegram Mini App session, which the API verifies
// (Authorization: tma <initData>, signed by Telegram with the bot's key). Outside Telegram
// there is no session and the API answers 401.
(function () {
  window.API_ORIGIN = "https://ubsbot.vinu.com.tr";
  window.apiFetch = function (input, init) {
    init = init || {};
    var initData = (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData) || "";
    var headers = Object.assign({}, init.headers || {}, { Authorization: "tma " + initData });
    return fetch(input, Object.assign({}, init, { headers: headers }));
  };
})();
