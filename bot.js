var channelToken = 'cr0ZJAYJLJV941C33xsHyujmWm42kyveHAPuD5EHzN6+ZhPaNB6Q+JkOPCq5p40upnI6L48jZ9uu15d34978YnP2BxJjY+seh2tEOPw89lMcIBqpl7SpNRCFSTvDFF+Y+pdGXfuAlCNen9n4GSBpNwdB04t89/1O/w1cDnyilFU=';


function doGet(e) {
  
} 


function doPost(e) {
  var reToken = JSON.parse(e.postData.contents).events[0].replyToken;
  var userMsg = JSON.parse(e.postData.contents).events[0].message.text;
  var userId = JSON.parse(e.postData.contents).events[0].source.userId;

      sendMsg(reToken, userMsg); 

  } 

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
function sendMsg(reToken, userMsg) {
  var url = 'https://api.line.me/v2/bot/message/reply';
  var opt = {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelToken,
	},
	'method': 'post',
	'payload': JSON.stringify({
      'replyToken': reToken,
      'messages': [{'type': 'text', 'text': userMsg}]
      })
	};
    UrlFetchApp.fetch(url, opt);
}


