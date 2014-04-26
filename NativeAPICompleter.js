/*!
	* NativeAPICompleter 1.0
	*
	* Author : Emir Khaled Belhaddad
	* Copyright Open Source
	* 
	* Require :
	* 
	*
	*/
document.isready = false;
this.log = function() {
	for(var arg in arguments){
		console.log(arguments[arg]);
	}
}
this.dirxml = function() {
	for(var arg in arguments){
		console.dirxml(arguments[arg]);
	}
}
this.addEvent = function(elem, type, func) {
  if(elem.attachEvent)
    elem.attachEvent("on"+type, func);
  if(elem.addEventListener)
    elem.addEventListener(type, func, false);
  if(type == "ready" && document.isready)
  {
	var event;
    if (document.createEvent) {
      event = document.createEvent("HTMLEvents");
      event.initEvent("ready", true, true);
    } else {
      event = document.createEventObject();
      event.eventType = "ready";
    }

    event.eventName = "ready";
    event.memo = { };
	
	this.func = func;

    this.func(event);
  }
}
this.addEvent.toString = function (){return "function addEvent(obj, type, func) { [native code] }";};
Node.prototype.parents = function (selector){
	var _arr = [], element = this;
	document.querySelectorAll(selector || "*").toArray().forEach(function(e/* element */,i/* index */){
		if(e.querySelectorAll("*").toArray().inArray(element)){
			_arr.push(e);
		}
	});
	return _arr;
};

String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};
String.prototype.reverse.toString = function(){return "function reverse() { [native code] }";};
Object.defineProperty(String.prototype, 'reverse', {enumerable: false,writable: false});

Node.prototype.addEvent = function(type,func){
  if(this.attachEvent)
    this.attachEvent("on"+type, func);
  if(this.addEventListener)
    this.addEventListener(type, func, false);
  if(type == "ready" && document.isready)
  {
	var event;
    if (document.createEvent) {
      event = document.createEvent("HTMLEvents");
      event.initEvent("ready", true, true);
    } else {
      event = document.createEventObject();
      event.eventType = "ready";
    }

    event.eventName = "ready";
    event.memo = { };
	
	this.func = func;

    this.func(event);
  }
};
Node.prototype.addEvent.toString = function (){return "function addEvent(type, func) { [native code] }";};
Object.defineProperty(Node.prototype, 'addEvent', {enumerable: false,writable: false});


navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
this.connect = function(url, meth, post){
	var xhr = new XMLHttpRequest();
	xhr.open(((meth != null) ? meth.toUpperCase() : "GET"), url, false);
	var resp = null;
	addEvent(xhr, "readystatechange", function(e){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				resp = xhr.response;
			}
			else {
				resp = undefined;
				delete resp;
			}
		}
	});
	xhr.send(((meth != null) ? meth.toUpperCase() : "GET") == "POST" ? post : null);
	return (typeof resp == "undefined" || resp == null) ? null : resp;
}
  
this.concat = function(o1 , o2) {
 for (var key in o2) {
  o1[key] = o2[key];
 }
 return o1;
}
this.concat.toString = function (){return "function concat(obj1, obj2) { [native code] }";};
Object.prototype.concat = function(o1) { 
  return concat(this, o1);
}
Object.prototype.concat.toString = function (){return "function concat(obj) { [native code] }";};
Object.defineProperty(Object.prototype, 'concat', {enumerable: false,writable: false});

Object.defineProperty(Object.prototype, 'length', {get:function(){var count = 0,a = this;for(var b in a){++count}; return count;},set:function(value){},enumerable: false});

Object.prototype.toArray = function (){
	var _arr = [];
	for(var _k in this){ 
		if(isFinite(new Number(_k)))
			_arr.push(this[_k]);
	}
	return _arr;
};
Object.defineProperty(Object.prototype, 'toArray', {enumerable: false,writable: false});

this.toAllChilds = function(obj,attr,val,contrainte) {
  for(var child in obj.children) {
    if(obj.children[child].toString() == "[object HTMLDivElement]" && (obj.children[child].className != "milieu_centre" || (contrainte != true))) {
      if(obj.children[child].children.length > 0)
        toAllChilds(obj.children[child],attr,val,contrainte);
    }
  }
};
this.toAllChilds.toString = function (){return "function toAllChilds(obj, attr, val, contrainte) { [native code] }";};
Node.prototype.toAllChilds = function(attr,val,contrainte){return this.toAllChilds(this,attr,val,contrainte);};
Object.defineProperty(Node.prototype,"toAllChilds",{enumerable: false,writable: false});

Array.prototype.remove = function(member) {
  var index = this.indexOf(member);
  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
};
Array.prototype.remove.toString = function (){return "function remove(member) { [native code] }";};
Object.defineProperty(Array.prototype, 'remove', {enumerable: false,writable: false});

Array.prototype.isEmpty = function(){
	return this.lenght <= 0 ? true : false ;
};
Object.defineProperty(Array.prototype, 'isEmpty', {enumerable: false,writable: false});

this.keydown = function(code, modifiers, el){
  var event = document.createEvent('Event');
  event.initEvent('keydown', true, true);
  event.keyCode = code;
  if (modifiers && modifiers.length > 0)
      for(var i in modifiers) event[modifierMap[modifiers[i]]] = true;
  (el||document).dispatchEvent(event);
}
this.keydown.toString = function (){return "function keydown(code, modifiers, el) { [native code] }";};

this.keyup = function(code, el){
  var event = document.createEvent('Event');
  event.initEvent('keyup', true, true);
  event.keyCode = code;
  (el||document).dispatchEvent(event);
}
this.keyup.toString = function (){return "function keyup(code, el) { [native code] }";};
this.keypress = function(code, modifiers, el){
  var event = document.createEvent('Event');
  event.initEvent('keypress', true, true);
  event.keyCode = code;
  if (modifiers && modifiers.length > 0)
      for(var i in modifiers) event[modifierMap[modifiers[i]]] = true;
  (el||document).dispatchEvent(event);
}
this.keypress.toString = function (){return "function keypress(code, modifiers, el) { [native code] }";};
this.initws = function(wsUri,proto){
  window.ws = new WebSocket(wsUri,proto);
  ws.addEventListener("open", function (e){ console.log("Connection"); }, false);
  ws.addEventListener("error", function (e){ console.log("Error : "); console.dir(e); }, false);
  ws.addEventListener("message", function (e){ try{ console.dir(JSON.parse(e.data)); }catch(exept){ console.log(e.data); } }, false);
  ws.addEventListener("close", function (e){ console.log("Close"); }, false);
}
this.initws.toString = function (){return "function initws(wsUri, proto) { [native code] }";};
this.notif = function(msg,opt){
  if(opt != null) { //s'il y a des options ...
    //L'option qui définit si onferme au click ... 
    var closeonclick = ((opt["closeOnClick"] || opt["closeonClick"] || opt["closeOnclick"] || opt["closeonclick"]) == true || (opt["closeOnClick"] || opt["closeonClick"] || opt["closeOnclick"] || opt["closeonclick"]) == false) ? (opt["closeOnClick"] || opt["closeonClick"] || opt["closeOnclick"] || opt["closeonclick"]) : true ; //vrai par défaut
    //La fonction qu'on exécute auclick
    var oc = opt["onclick"] || opt["click"] || function(){};
    //L'option qui définit le son utilisé
    var son = opt["son"] || opt["music"] || opt["ringtone"] || "notif";
    //Selon le son choisit, on y attribut le fichier MP3 correspondant.
    son = (son == "notif")? "../son/notif.mp3" : (son == "hangout") ? "../son/hangout.mp3" : (son == "aucun" || son == "none" || son == "non" || son == "no" || son == "null" || son == "") ? "" :"../son/hangout.mp3" ;
  }
  else //... Sinon, mettre les valeurs par défauts
  {
    var closeonclick = true;
    var oc = function(){};
    var son = "../son/hangout.mp3";
  }
  
  if(window.webkitNotifications){
    if(webkitNotifications.checkPermission() === 0){
      var n = webkitNotifications.createNotification("../img/favicon.ico","NexOS",msg);
      n.show();
      (new Audio(son)).play();
      n.addEventListener("click",oc,false);
      if(closeonclick) 
        n.addEventListener("click",function() { this.cancel(); },false);
    }
    else{
      webkitNotifications.requestPermission(function(perm) {
        var n = webkitNotifications.createNotification("favicon.ico","NexOS",msg);
        n.show();
        (new Audio(son)).play();
        n.addEventListener("click",oc,false);
        if(closeonclick)
          n.addEventListener("click",function() { this.cancel(); },false);
      });
    }
  }
  else if(window.Notification){
    var n = new Notification(msg);
    n.addEventListener("click",oc,false);
    if(closeonclick)
      n.addEventListener("click",function() { this.cancel(); },false);
    (new Audio(son)).play();
  }
};
this.notif.toString = function (){return "function notif(msg, opt) { [native code] }";};
Object.defineProperty(this,this.notif.name,{enumerable: false,writable: false});

NodeList.prototype.toArray = function(){
	var _arr = [];
	for(var _i = 0; _i < this.length; _i++){
		_arr.push(this.item(_i));
	}
	return _arr;
};

Node.prototype.addClass = function () {
	var argv = arguments, cls;
	argv = (function(){var _a = new Array(); for(var a in argv){if(argv[a]) _a.push(argv[a]);} return _a;})();
	var filter = function(e, i){if(e) return e;};
	argv.filter(filter);
	for(var key in argv){
		cls = argv[key];
		if(this.className.match(cls.trim().replace("__","___").replace("_","__").replace(/\s/ig,"_")) == null) this.className += ( this.className.trim() == "" ? "" :  " ")+cls.trim().replace("__","___").replace("_","__").replace(/\s/ig,"_");
	}
}
Node.prototype.addClass.toString = function (){return "function addClass( [string] class ) { [native code] }";};
Node.prototype.removeClass = function () {
	var argv = arguments, cls;
	argv = (function(){var _a = new Array(); for(var a in argv){if(argv[a]) _a.push(argv[a]);} return _a;})();
	argv.filter(function(e, i){if(e) return e;});
	for(var key in argv){
		cls = argv[key];
		this.className = this.className.replace(new RegExp("\\s?"+cls.trim().replace("__","___").replace("_","__").replace(/\s/ig,"_"),"ig"),"");
	}
}
Node.prototype.removeClass.toString = function (){return "function removeClass( [string] class ) { [native code] }";};

String.prototype.toFirstUpperCase = function(){
	return this.replace(this.trim(),(this.trim().substr(0,1).toUpperCase()+this.trim().substr(1,this.length-1)));
};
String.prototype.toFirstUpperCase.toString = function (){return "function toFirstUpperCase() { [native code] }";};
Object.defineProperty(String.prototype,"toFirstUpperCase",{enumerable: false});

Node.prototype.getHeight = function(){return Math.max(this["offset"+"height".toFirstUpperCase()],this["scroll"+"height".toFirstUpperCase()],this["client"+"height".toFirstUpperCase()]);};
Node.prototype.getHeight.toString = function (){return "function getHeight() { [native code] }";};
Node.prototype.getWidth = function(){return Math.max(this["offset"+"width".toFirstUpperCase()],this["scroll"+"width".toFirstUpperCase()],this["client"+"width".toFirstUpperCase()]);};
Node.prototype.getWidth.toString = function (){return "function getWidth() { [native code] }";};

Array.prototype.inArray = function(el){
	var arr = this;
	for(var _e in arr) {
		if(arr[_e] === el) return true;
	}
	return false;
};
Array.prototype.inArray.toString = function (){return "function inArray( [Mixte] str ) { [native code] }";};
Object.defineProperty(Array.prototype, 'inArray', {enumerable: false});

String.prototype.escapeHTML = function() {
	var _textEsc_ = document.createElement("div"), text = this;
	_textEsc_.appendChild(document.createTextNode(text));
	return _textEsc_.innerHTML;
};
String.prototype.escapeHTML.toString = function() {return "function escapeHTML() { [native code] }";};
Object.defineProperty(String.prototype,"escapeHTML",{enumerable: false});

this.isArray = function(_arr){
	if(_arr != null) return _arr.constructor == Array; return null;
};

Node.prototype.insertAtFirst = function(node){
	this.insertBefore(node,this.firstChild);
};

this.printElapsedTime = function(fTest) {
	var _args = [];for(var _k in arguments){if(_k != 0) _args.push(arguments[_k]);}
	var nStartTime = Date.now(), 
            vReturn = fTest.apply(this,_args),
            nEndTime = Date.now();

	console.log("Elapsed time: " + String(nEndTime - nStartTime) + " milliseconds");
	return vReturn;
}
this.handleEvent = function (elem,name) {
	var event;
	if (document.createEvent) {
		event = document.createEvent("HTMLEvents");
		event.initEvent(name, true, true);
	} else {
		event = document.createEventObject();
		event.eventType = name;
	}
	
	event.eventName = name;
	event.memo = { };
	
	if (document.createEvent) {
		elem.dispatchEvent(event);
	} else {
		elem.fireEvent("on" + event.eventType, event);
	}
	(typeof elem.onready == "function") ? elem.onready(event) : "";
};

document.onready = null;
document.addEvent("readystatechange",function(e){
	if(this.readyState == "complete")
	{
		document.isready = true;
		var event;
		if (document.createEvent) {
			event = document.createEvent("HTMLEvents");
			event.initEvent("ready", true, true);
		} else {
			event = document.createEventObject();
			event.eventType = "ready";
		}
		
		event.eventName = "ready";
		event.memo = { };
		
		if (document.createEvent) {
			document.dispatchEvent(event);
		} else {
			document.fireEvent("on" + event.eventType, event);
		}
		(typeof document.onready == "function") ? document.onready(event) : "";
	}
},false);
