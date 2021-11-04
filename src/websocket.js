import { displayTransacript} from './components/SendBox';

let wsUri = "ws://localhost:443";
let websocket = new WebSocket(wsUri);

function onLoad() {
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
 }
      
 function onOpen(evt) {
   console.log("websocket open")
 }
      
 function onClose(evt) {
    console.log("websocket closed")
 }
      
 function onMessage(evt) {
    // There are two types of messages:
    // 1. a chat participant message itself
    // 2. a message with a number of connected chat participants
    var message = evt.data;
          
    if (message.startsWith("log:")) {
      console.log("log:");
    }else if (message.startsWith("connected:")) {
      console.log("websocket connected");
    }else{
      displayTransacript(message);
    }
 }
      
 function onError(evt) {
   console.log("websocket error");
 }
      
 export function addMessage(audio) {
    websocket.send(audio);
 }

 window.addEventListener("load", onLoad, false);