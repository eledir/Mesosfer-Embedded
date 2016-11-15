var Client = require('node-rest-client').Client;

var client = new Client();

var args = {
    data: { "data":{"title": "Hi", "alert": "Thanks for coming."} },
    headers: { "Content-Type": "application/json", "Authorization" : "Bearer YOUR ACCESS_TOKEN", "X-Mesosfer-AppId" : "YOUR APP_ID", "X-Mesosfer-AppKey" : "YOUR APP_KEY"}
};

client.post("https://api.mesosfer.com/api/v2/push/notification", args, function (data, response) {
    
    console.log(data);
});