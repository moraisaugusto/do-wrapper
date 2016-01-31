"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),_requestHelper=require("./request-helper"),_requestHelper2=_interopRequireDefault(_requestHelper),DigitalOcean=function(){function e(t,a){_classCallCheck(this,e),this.perPage=a,this.requestHelper=new _requestHelper2["default"](t)}return _createClass(e,[{key:"account",value:function(e){var t={actionPath:"account"};this.requestHelper.request(t,e)}},{key:"accountGetActions",value:function(e,t){var a={actionPath:"actions",key:"actions",qs:{perPage:e.perPage||this.perPage,page:e.page||1},includeAll:e.includeAll||!1};this.requestHelper.request(a,t)}},{key:"accountGetAction",value:function(e,t){var a={actionPath:"actions/"+e};this.requestHelper.request(a,t)}},{key:"accountGetKeys",value:function(e,t){var a={actionPath:"account/keys",key:"ssh_keys",qs:{perPage:e.perPage||this.perPage,page:e.page||1},includeAll:e.includeAll||!1};this.requestHelper.request(a,t)}},{key:"accountAddKey",value:function(e,t){var a={actionPath:"account/keys",method:"POST",body:e};this.requestHelper.request(a,t)}},{key:"accountGetKeyById",value:function(e,t){var a={actionPath:"account/keys/"+e};this.requestHelper.request(a,t)}},{key:"accountGetKeyByFingerprint",value:function(e,t){var a={actionPath:"account/keys/"+e};this.requestHelper.request(a,t)}},{key:"accountRenameKey",value:function(e,t,a){var r={actionPath:"account/keys/"+e,method:"PUT",body:{name:t}};this.requestHelper.request(r,a)}},{key:"accountDeleteKey",value:function(e,t){var a={actionPath:"account/keys/"+e,method:"DELETE"};this.requestHelper.request(a,t)}},{key:"dropletsGetAll",value:function(e,t){var a={actionPath:"droplets",key:"droplets",qs:{perPage:e.perPage||this.perPage,page:e.page||1},includeAll:e.includeAll||!1};this.requestHelper.request(a,t)}},{key:"dropletsGetKernels",value:function(e,t,a){var r={actionPath:"droplets/"+e+"/kernels",key:"kernels",qs:{perPage:t.perPage||this.perPage,page:t.page||1},includeAll:t.includeAll||!1};this.requestHelper.request(r,a)}},{key:"dropletsGetSnapshots",value:function(e,t,a){var r={actionPath:"droplets/"+e+"/snapshots",key:"snapshots",qs:{perPage:t.perPage||this.perPage,page:t.page||1},includeAll:t.includeAll||!1};this.requestHelper.request(r,a)}},{key:"dropletsGetBackups",value:function(e,t,a){var r={actionPath:"droplets/"+e+"/backups",key:"backups",qs:{perPage:t.perPage||this.perPage,page:t.page||1},includeAll:t.includeAll||!1};this.requestHelper.request(r,a)}},{key:"dropletsGetActions",value:function(e,t,a){var r={actionPath:"droplets/"+e+"/actions",key:"actions",qs:{perPage:t.perPage||this.perPage,page:t.page||1},includeAll:t.includeAll||!1};this.requestHelper.request(r,a)}},{key:"dropletsCreate",value:function(e,t){var a={actionPath:"droplets",method:"POST",body:e};this.requestHelper.request(a,t)}},{key:"dropletsGetById",value:function(e,t){var a={actionPath:"droplets/"+e};this.requestHelper.request(a,t)}},{key:"dropletsDelete",value:function(e,t){var a={actionPath:"droplets/"+e,method:"DELETE"};this.requestHelper.request(a,t)}},{key:"dropletsGetNeighbors",value:function(e,t){var a={actionPath:"droplets/"+e+"/neighbors"};this.requestHelper.request(a,t)}},{key:"dropletsGetNeighborsReport",value:function(e){var t={actionPath:"reports/droplet_neighbors"};this.requestHelper.request(t,e)}},{key:"dropletsGetUpgrades",value:function(e){var t={actionPath:"droplet_upgrades"};this.requestHelper.request(t,e)}},{key:"dropletsRequestAction",value:function(e,t,a){var r={actionPath:"droplets/"+e+"/actions",method:"POST",body:t};this.requestHelper.request(r,a)}},{key:"dropletsGetAction",value:function(e,t,a){var r={actionPath:"droplets/"+e+"/actions/"+t};this.requestHelper.request(r,a)}},{key:"domainsGetAll",value:function(e,t){var a={actionPath:"domains",key:"domains",qs:{perPage:e.perPage||this.perPage,page:e.page||1}};this.requestHelper.request(a,t)}},{key:"domainsCreate",value:function(e,t,a){var r={actionPath:"domains",method:"POST",body:{name:e,ipAddress:t}};this.requestHelper.request(r,a)}},{key:"domainsGet",value:function(e,t){var a={actionPath:"domains/"+e};this.requestHelper.request(a,t)}},{key:"domainsDelete",value:function(e,t){var a={actionPath:"domains/"+e,method:"DELETE"};this.requestHelper.request(a,t)}},{key:"domainRecordsGetAll",value:function(e,t,a){var r={actionPath:"domains/"+e+"/records",key:"domain_records",qs:{perPage:t.perPage||this.perPage,page:t.page||1}};this.requestHelper.request(r,a)}},{key:"domainRecordsCreate",value:function(e,t,a){var r={actionPath:"domains/"+e+"/records",method:"POST",body:t};this.requestHelper.request(r,a)}},{key:"domainRecordsGet",value:function(e,t,a){var r={actionPath:"domains/"+e+"/records/"+t};this.requestHelper.request(r,a)}},{key:"domainRecordsUpdate",value:function(e,t,a,r){var s={actionPath:"domains/"+e+"/records/"+t,method:"PUT",body:a};this.requestHelper.request(s,r)}},{key:"domainRecordsDelete",value:function(e,t,a){var r={actionPath:"domains/"+e+"/records/"+t,method:"DELETE"};this.requestHelper.request(r,a)}},{key:"regionsGetAll",value:function(e,t){var a={actionPath:"regions",key:"regions",qs:{perPage:e.perPage||this.perPage,page:e.page||1},includeAll:e.includeAll||!1};this.requestHelper.request(a,t)}},{key:"sizesGetAll",value:function(e,t){var a={actionPath:"sizes",key:"sizes",qs:{perPage:e.perPage||this.perPage,page:e.page||1},includeAll:e.includeAll||!1};this.requestHelper.request(a,t)}},{key:"imagesGetAll",value:function(e,t){var a={actionPath:"images",key:"images",qs:{perPage:e.perPage||this.perPage,page:e.page||1,"private":e["private"]||!1,type:e.type||null},includeAll:e.includeAll||!1};this.requestHelper.request(a,t)}},{key:"imagesGetById",value:function(e,t){var a={actionPath:"images/"+e};this.requestHelper.request(a,t)}},{key:"imagesGetBySlug",value:function(e,t){var a={actionPath:"images/"+e};this.requestHelper.request(a,t)}},{key:"imagesGetActions",value:function(e,t,a){var r={actionPath:"images/"+e+"/actions",key:"actions",qs:{perPage:t.perPage||this.perPage,page:t.page||1},includeAll:t.includeAll||!1};this.requestHelper.request(r,a)}},{key:"imagesUpdate",value:function(e,t,a){var r={actionPath:"images/"+e,body:{name:t},method:"PUT"};this.requestHelper.request(r,a)}},{key:"imagesDelete",value:function(e,t){var a={actionPath:"images/"+e,method:"DELETE"};this.requestHelper.request(a,t)}},{key:"imagesRequestAction",value:function(e,t,a){var r={actionPath:"images/"+e+"/actions",method:"POST",body:t};this.requestHelper.request(r,a)}},{key:"imagesGetAction",value:function(e,t,a){var r={actionPath:"images/"+e+"/actions/"+t};this.requestHelper.request(r,a)}},{key:"floatingIpsGetAll",value:function(e,t){var a={actionPath:"floating_ips",key:"floating_ips",qs:{perPage:e.perPage||this.perPage,page:e.page||1},includeAll:e.includeAll||!1};this.requestHelper.request(a,t)}},{key:"floatingIpsAssignDroplet",value:function(e,t){var a={actionPath:"floating_ips",method:"POST",body:{droplet_id:e}};this.requestHelper.request(a,t)}},{key:"floatingIpsAssignRegion",value:function(e,t){var a={actionPath:"floating_ips",method:"POST",body:{region:e}};this.requestHelper.request(a,t)}},{key:"floatingIpsGet",value:function(e,t){var a={actionPath:"floating_ips/"+e};this.requestHelper.request(a,t)}},{key:"floatingIpsDelete",value:function(e,t){var a={actionPath:"floating_ips/"+e,method:"DELETE"};this.requestHelper.request(a,t)}},{key:"floatingIpsRequestAction",value:function(e,t,a){var r={actionPath:"floating_ips/"+e+"/actions",method:"POST",body:t};this.requestHelper.request(r,a)}},{key:"floatingIpsGetActions",value:function(e,t,a){var r={actionPath:"floating_ips/"+e+"/actions",key:"actions",qs:{perPage:t.perPage||this.perPage,page:t.page||1},includeAll:t.includeAll||!1};this.requestHelper.request(r,a)}},{key:"floatingIpsGetAction",value:function(e,t,a){var r={actionPath:"floating_ips/"+e+"/actions/"+t};this.requestHelper.request(r,a)}}]),e}();exports["default"]=DigitalOcean,module.exports=exports["default"];