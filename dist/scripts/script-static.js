/*!
 * docker-registry-ui
 * Copyright (C) 2016  Jones Magloire @Joxit
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function Http(){this.oReq=new XMLHttpRequest,this.oReq.hasHeader=Http.hasHeader,this._events={},this._headers={}}Http.prototype.addEventListener=function(e,t){this._events[e]=t;var s=this;switch(e){case"loadend":s.oReq.addEventListener("loadend",function(){if(401==this.status){var e=new XMLHttpRequest;e.open(s._method,s._url);for(key in s._events)e.addEventListener(key,s._events[key]);for(key in s._headers)e.setRequestHeader(key,s._headers[key]);e.withCredentials=!0,e.hasHeader=Http.hasHeader,e.send()}else t.bind(this)()});break;case"load":s.oReq.addEventListener("load",function(){401!==this.status&&t.bind(this)()});break;default:s.oReq.addEventListener(e,function(){t.bind(this)()})}},Http.prototype.setRequestHeader=function(e,t){this.oReq.setRequestHeader(e,t),this._headers[e]=t},Http.prototype.open=function(e,t){this._method=e,this._url=t,this.oReq.open(e,t)},Http.prototype.send=function(){this.oReq.send()},Http.hasHeader=function(e){return this.getAllResponseHeaders().split("\n").some(function(t){return new RegExp("^"+e+":","i").test(t)})};var registryUI={};registryUI.url=function(){return"${URL}"},registryUI.isImageRemoveActivated=!0,registryUI.catalog={},registryUI.taglist={},riot.mount("catalog"),riot.mount("taglist"),riot.mount("app");