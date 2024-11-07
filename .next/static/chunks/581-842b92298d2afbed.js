(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[581],{4737:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var a=i(2898);let r=(0,a.Z)("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]])},8339:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var a=i(2898);let r=(0,a.Z)("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]])},7545:function(e){e.exports=function(){var e={80:function(e,t,i){e.exports=i(728).default},728:function(e,t,i){"use strict";i.d(t,{default:function(){return tN}});var a=i(48),r=i.n(a),n=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},o=function(){return("000000"+(2176782336*Math.random()<<0).toString(36)).slice(-6)},s=function(e){var t,i;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=o()),e.muxId;try{i=document.querySelector(e)}catch(e){}return i&&!i.muxId&&(i.muxId=e),(null===(t=i)||void 0===t?void 0:t.muxId)||e},l=function(e){e&&void 0!==e.nodeName?e=s(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]},d=i(640),u=i.n(d),c=u().methodFactory;u().methodFactory=function(e,t,i){var a=c(e,t,i);return function(){for(var e=["[mux]"],t=0;t<arguments.length;t++)e.push(arguments[t]);a.apply(void 0,e)}},u().setLevel(u().getLevel());var h=u();function m(){return"1"===(r().doNotTrack||r().navigator&&r().navigator.doNotTrack)}var p={now:function(){var e=r().performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}},v=function(e){return b(e)[0]},b=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},f={exists:function(){var e=r().performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=r().performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=r().performance,t=e&&e.timing;return t&&t.navigationStart}};function E(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}var g=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],y=["x-cdn","content-type"].concat(g);function _(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(y.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function A(e){if(e){var t=g.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var k=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t};function T(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function w(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?T(Object(i),!0).forEach(function(t){var a;a=i[t],t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):T(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var I=function(e){if(!e)return{};var t=f.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},S=function(e){if(e&&"function"==typeof e.getAllResponseHeaders)return _(e.getAllResponseHeaders())};function D(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function R(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?D(Object(i),!0).forEach(function(t){var a;a=i[t],t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):D(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var L=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=v(e.url),r=e.url,n=e.bytesLoaded,o=new Date(e.requestStartDate).getTime(),s=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);return u.length>0&&(i=_(u[u.length-1]._responseHeaders||"")),{requestStart:o,requestResponseStart:s,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:i?A(i):void 0}},M=function(e,t){var i=t.getQualityFor(e),a=t.getCurrentTrackFor(e).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},C=function(e){var t;return null===(t=e.match(/.*codecs\*?="(.*)"/))||void 0===t?void 0:t[1]},O=function(e){try{var t,i;return null===(t=e.getVersion)||void 0===t||null===(i=t.call(e))||void 0===i?void 0:i.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}};function x(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var N=0,P=function(){var e,t;function i(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i)}return e=[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++N,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++N;var r=function r(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before*"]||[],r=this._listeners[e]||[],n=this._listeners["after"+e]||[],o=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};o(a,t),o(r,t),o(n,t)}}}],x(i.prototype,e),t&&x(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}();function U(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var B=function(){var e;function t(e){var i=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,t),this.pm=e,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,e.on("playing",function(){i._playheadShouldBeProgressing=!0}),e.on("play",this._startPlaybackHeartbeatInterval.bind(this)),e.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),e.on("seeking",this._startPlaybackHeartbeatInterval.bind(this)),e.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),e.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("seeked",function(){e.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),e.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&e.emit("playbackheartbeat")}),e.on("devicesleep",function(t,a){null!==i._playbackHeartbeatInterval&&(r().clearInterval(i._playbackHeartbeatInterval),e.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return U(t.prototype,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=r().setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(r().clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e&&U(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}();function W(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var V=(e3=function e(t){var i=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context});r?(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,i.viewErrored=!0):(delete t.data.player_error_code,delete t.data.player_error_message,delete t.data.player_error_context)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}})},e4&&W(e3.prototype,e4),e7&&W(e3,e7),Object.defineProperty(e3,"prototype",{writable:!1}),e3);function q(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var H=function(){var e,t;function i(e){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,i),this.pm=e,this._watchTimeTrackerLastCheckedTime=null,e.on("playbackheartbeat",this._updateWatchTime.bind(this)),e.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return e=[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),E(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}],q(i.prototype,e),t&&q(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}();function F(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var j=function(){var e,t;function i(e){var t=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,i),this.pm=e,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=p.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);e.on("playing",a),e.on("adplaying",a),e.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);e.on("playbackheartbeatend",r),e.on("seeking",r),e.on("adplaying",function(){t._isAdPlaying=!0}),e.on("adended",function(){t._isAdPlaying=!1}),e.on("adpause",function(){t._isAdPlaying=!1}),e.on("adbreakstart",function(){t._isAdPlaying=!1}),e.on("adbreakend",function(){t._isAdPlaying=!1}),e.on("adplay",function(){t._isAdPlaying=!1}),e.on("viewinit",function(){t._playbackTimeTrackerLastPlayheadPosition=-1,t._lastTime=p.now(),t._isAdPlaying=!1,t._callbackUpdatePlaybackTime=null})}return e=[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,t=p.now(),i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?i=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=t-this._lastTime),i>0&&i<=1e3&&E(this.pm.data,"view_content_playback_time",i),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}],F(i.prototype,e),t&&F(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}();function $(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var K=function(){var e,t;function i(e){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,i),this.pm=e;var t=this._updatePlayheadTime.bind(this);e.on("playbackheartbeat",t),e.on("playbackheartbeatend",t),e.on("timeupdate",t),e.on("destroy",function(){e.off("timeupdate",t)})}return e=[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}],$(i.prototype,e),t&&$(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}();function Y(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var G=(e8=function e(t){if(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;E(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(E(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},e6&&Y(e8.prototype,e6),e9&&Y(e8,e9),Object.defineProperty(e8,"prototype",{writable:!1}),e8);function Z(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var Q=function(){var e,t;function i(e){var t=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,i),this.pm=e,e.disableRebufferTracking||e.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,e.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),e.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),e.on("seeking",function(){t._cleanupRebufferTracker(null,{viewer_time:p.now()})}))}return e=[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)this._cleanupRebufferTracker(e,t);else if(null!==this._lastCheckedTime){if(this._lastPlayheadTime===this.pm.data.player_playhead_time){var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}else this._cleanupRebufferTracker(e,t,!0)}else this._prepareRebufferTrackerState(t.viewer_time)}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}],Z(i.prototype,e),t&&Z(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}();function z(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var X=function(){var e;function t(e){var i=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,t),this.pm=e,e.on("viewinit",function(){var t=e.data,a=t.view_id;if(!t.view_program_changed){var r=function(t,r){var n=r.viewer_time;"playing"===t.type&&void 0===e.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||p.now(),a):"adplaying"===t.type&&(void 0===e.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||p.now(),a)};e.one("playing",r),e.one("adplaying",r),e.one("viewend",function(){e.off("playing",r),e.off("adplaying",r)})}})}return z(t.prototype,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e&&z(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}();function J(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var ee=(te=function e(t){var i=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0)return void(i._lastPlayheadPosition=-1);var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),E(t.data,"view_total_content_playback_time",e),E(t.data,"view_total_upscaling",r*e),E(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},tt&&J(te.prototype,tt),ti&&J(te,ti),Object.defineProperty(te,"prototype",{writable:!1}),te);function et(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var ei=(ta=function e(t){var i=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),this.isSeeking=!1;var a=-1,r=function(){var e=p.now(),r=(t.data.viewer_time||e)-(a||e);E(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3?a=n.viewer_time:(i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,E(t.data,"view_seek_count",1),t.send("seeking"))}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},tr&&et(ta.prototype,tr),tn&&et(ta,tn),Object.defineProperty(ta,"prototype",{writable:!1}),ta);function ea(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return er(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?er(e,t):void 0}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function er(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function en(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var eo=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},es=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],el=function(){var e,t;function i(e){var t=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,i),this.pm=e,e.on("viewinit",function(){t.isAdBreak=!1,t._currentAdRequestNumber=0,t._currentAdResponseNumber=0,t._adRequests=[],t._adResponses=[],t._adHasPlayed=!1,t._wouldBeNewAdPlay=!0,t._prerollPlayTime=void 0}),es.forEach(function(i){return e.on(i,t._updateAdData.bind(t))});var a=function(){t.isAdBreak=!1};e.on("adbreakstart",function(){t.isAdBreak=!0}),e.on("play",a),e.on("playing",a),e.on("viewend",a),e.on("adrequest",function(i,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+t._currentAdRequestNumber++},a),eo(t._adRequests,a),E(e.data,"view_ad_request_count"),t.inPrerollPosition()&&(e.data.view_preroll_requested=!0,t._adHasPlayed||E(e.data,"view_preroll_request_count"))}),e.on("adresponse",function(i,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+t._currentAdResponseNumber++},a),eo(t._adResponses,a);var r=t.findAdRequest(a.ad_request_id);r&&E(e.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),e.on("adplay",function(i,a){t._adHasPlayed=!0,t._wouldBeNewAdPlay&&(t._wouldBeNewAdPlay=!1,E(e.data,"view_ad_played_count")),t.inPrerollPosition()&&!e.data.view_preroll_played&&(e.data.view_preroll_played=!0,t._adRequests.length>0&&(e.data.view_preroll_request_time=Math.max(0,a.viewer_time-t._adRequests[0].viewer_time)),e.data.view_start&&(e.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-e.data.view_start)),t._prerollPlayTime=a.viewer_time)}),e.on("adplaying",function(i,a){t.inPrerollPosition()&&void 0===e.data.view_preroll_load_time&&void 0!==t._prerollPlayTime&&(e.data.view_preroll_load_time=a.viewer_time-t._prerollPlayTime,e.data.view_startup_preroll_load_time=a.viewer_time-t._prerollPlayTime)}),e.on("adclicked",function(i,a){t._wouldBeNewAdPlay||E(e.data,"view_ad_clicked_count")}),e.on("adskipped",function(i,a){t._wouldBeNewAdPlay||E(e.data,"view_ad_skipped_count")}),e.on("adended",function(){t._wouldBeNewAdPlay=!0}),e.on("aderror",function(){t._wouldBeNewAdPlay=!0})}return e=[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=ea(b(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=ea(b(t.ad_asset_url),2),o=n[0],s=n[1];this.pm.data.view_preroll_ad_asset_domain=s,this.pm.data.view_preroll_ad_asset_hostname=o}}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id}}],en(i.prototype,e),t&&en(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}();function ed(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var eu=(to=function e(t){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e);var i,a,n=function(){t.disableRebufferTracking||i&&(E(t.data,"view_waiting_rebuffer_duration",p.now()-i),i=!1,r().clearInterval(a))},o=!1,s=function(){o=!1,n()};t.on("waiting",function(){o&&(t.disableRebufferTracking||(E(t.data,"view_waiting_rebuffer_count",1),i=p.now(),a=r().setInterval(function(){if(i){var e=p.now();E(t.data,"view_waiting_rebuffer_duration",e-i),i=e}},250)))}),t.on("playing",function(){n(),o=!0}),t.on("pause",s),t.on("seeking",s)},ts&&ed(to.prototype,ts),tl&&ed(to,tl),Object.defineProperty(to,"prototype",{writable:!1}),to);function ec(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var eh=(td=function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e);var a=function(){i.lastWallClockTime=p.now(),t.on("before*",r)},r=function(e){var a=p.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},tu&&ec(td.prototype,tu),tc&&ec(td,tc),Object.defineProperty(td,"prototype",{writable:!1}),td),em=i(375),ep=i(655),ev=i.n(ep),eb="muxData",ef=function(){var e;try{e=em.parse(ev().get(eb)||"")}catch(t){e={}}return e},eE=function(e){try{ev().set(eb,em.stringify(e),{expires:365})}catch(e){}},eg=function(){var e=ef();return e.mux_viewer_id=e.mux_viewer_id||n(),e.msn=e.msn||Math.random(),eE(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},ey=function(){var e;switch(e_()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},e_=function(){var e=r().navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};ey.getConnectionFromAPI=e_;var eA=eT({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),ek=eT({ad:"ad",ag:"aggregate",ap:"api",al:"application",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",br:"break",bw:"browser",by:"bytes",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cr:"creative",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ep:"experiments",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pr:"preload",ps:"position",pt:"part",py:"property",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",st:"start",su:"startup",sv:"server",sw:"software",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function eT(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function ew(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),o=n[0],s=eA[o];s||(h.info("Data key word `"+n[0]+"` not expected in "+a),s=o+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),ek[e]?s+=ek[e]:Number(e)&&Math.floor(Number(e))===Number(e)?s+=e:(h.info("Data key word `"+e+"` not expected in "+a),s+="_"+e+"_")}),r?i[s]=e[a]:t[s]=e[a]}}),Object.assign(t,i)}var eI={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},eS=["hb","requestcompleted","requestfailed","requestcanceled"],eD=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},eI,t)};eD.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},eD.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&1===this._eventQueue.length?this._eventQueue.pop():(this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending())},eD.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),r().clearTimeout(this._sendTimeout)},eD.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],ew({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);eR(this._beaconUrl,i,!0,function(){})},eD.prototype._sendBeaconQueue=function(){var e=this;if(!this._postInFlight){var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=p.now();eR(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,h.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=p.now()-a,e._postInFlight=!1})}},eD.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},eD.prototype._startBeaconSending=function(){var e=this;r().clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=r().setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},eD.prototype._createPayload=function(e){var t,i,a,r=this,n={transmission_timestamp:Math.round(p.now())};this._roundTripTime&&(n.rtt_ms=Math.round(this._roundTripTime));var o=function(){a=(t=JSON.stringify({metadata:n,events:i||e})).length/1024},s=function(){return a<=r._options.maxPayloadKBSize};return o(),s()||(h.info("Payload size is too big ("+a+" kb). Removing unnecessary events."),i=e.filter(function(e){return -1===eS.indexOf(e.e)}),o()),s()||(h.info("Payload size still too big ("+a+" kb). Cropping fields.."),i.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),o()),t};var eR=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t))a();else if(r().fetch)r().fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:t.length<=57344}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});else{if(r().XMLHttpRequest){var n=new(r()).XMLHttpRequest;return n.onreadystatechange=function(){if(4===n.readyState)return a(null,200!==n.status?"error":void 0)},n.open("POST",e),n.setRequestHeader("Content-Type","text/plain"),void n.send(t)}a()}};function eL(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function eM(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function eC(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?eM(Object(i),!0).forEach(function(t){eN(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):eM(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function eO(e){return(eO="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ex(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function eN(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var eP=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id"],eU=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],eB=["ad_id","ad_creative_id","ad_universal_id"],eW=["viewstart","error","ended","viewend"],eV=function(){var e,t;function i(e,t){var a,n,o,s,l,d,u,c,h,m,p,v,b,f,E,g,y,_,A,k=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,i),eN(this,"previousBeaconData",null),eN(this,"lastEventTime",0),eN(this,"rateLimited",!1),this.mux=e,this.envKey=t,this.options=k,this.eventQueue=new eD((a=this.envKey,o=(n=this.options).beaconCollectionDomain,s=n.beaconDomain,o?"https://"+o:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!==(l=this.options.sampleRate)&&void 0!==l?l:1,this.disableCookies=null!==(d=this.options.disableCookies)&&void 0!==d&&d,this.respectDoNotTrack=null!==(u=this.options.respectDoNotTrack)&&void 0!==u&&u,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null===(c=this.options.platform)||void 0===c?void 0:c.name,viewer_application_version:null===(h=this.options.platform)||void 0===h?void 0:h.version,viewer_application_engine:null===(m=this.options.platform)||void 0===m?void 0:m.layout,viewer_device_name:null===(p=this.options.platform)||void 0===p?void 0:p.product,viewer_device_category:"",viewer_device_manufacturer:null===(v=this.options.platform)||void 0===v?void 0:v.manufacturer,viewer_os_family:null===(b=this.options.platform)||void 0===b||null===(f=b.os)||void 0===f?void 0:f.family,viewer_os_architecture:null===(E=this.options.platform)||void 0===E||null===(g=E.os)||void 0===g?void 0:g.architecture,viewer_os_version:null===(y=this.options.platform)||void 0===y||null===(_=y.os)||void 0===_?void 0:_.version,viewer_connection_type:ey(),page_url:null===r()||void 0===r()||null===(A=r().location)||void 0===A?void 0:A.href},this.viewerData=this.disableCookies?{}:eg()}return e=[{key:"send",value:function(e,t){var i;if(e&&null!=t&&t.view_id){if(this.respectDoNotTrack&&m())return h.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!==eO(t))return h.error("A data object was expected in send() but was not provided");var a,r,o=this.disableCookies?{}:(a=ef(),r=p.now(),a.session_start&&(a.sst=a.session_start,delete a.session_start),a.session_id&&(a.sid=a.session_id,delete a.session_id),a.session_expires&&(a.sex=a.session_expires,delete a.session_expires),(!a.sex||a.sex<r)&&(a.sid=n(),a.sst=r),a.sex=r+15e5,eE(a),{session_id:a.sid,session_start:a.sst,session_expires:a.sex}),s=eC(eC(eC(eC(eC({},this.pageLevelData),t),o),this.viewerData),{},{event:e,env_key:this.envKey});s.user_id&&(s.viewer_user_id=s.user_id,delete s.user_id);var l=(null!==(i=s.mux_sample_number)&&void 0!==i?i:0)>=this.sampleRate,d=ew(this._deduplicateBeaconData(e,s));if(this.lastEventTime=this.mux.utils.now(),l)return h.info("Not sending event due to sample rate restriction",e,s,d);if(this.envKey||h.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,s,d),!this.rateLimited){if(h.info("Sending event",e,s,d),this.rateLimited=!this.eventQueue.queueEvent(e,d),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&"hb"===e?this.eventQueue.flushEvents(!0):eW.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return s.event="eventrateexceeded",d=ew(s),this.eventQueue.queueEvent(s.event,d),h.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=eC({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=function(e){if(Array.isArray(e))return e}(t)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw r}}return n}}(t,2)||function(e,t){if(e){if("string"==typeof e)return eL(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?eL(e,t):void 0}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=r[0],s=r[1];i.previousBeaconData&&(s!==i.previousBeaconData[o]||eP.indexOf(o)>-1||i.objectHasChanged(n,o,s,i.previousBeaconData[o])||i.eventRequiresKey(e,o))&&(a[o]=s,i.previousBeaconData[o]=s)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!(!e||0!==t.indexOf("request_")||"request_response_headers"!==t&&"object"===eO(i)&&"object"===eO(a)&&Object.keys(i||{}).length===Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return"renditionchange"===e&&0===t.indexOf("video_source_")||!(!eB.includes(t)||!eU.includes(e))}}],ex(i.prototype,e),t&&ex(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}();function eq(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var eH=(th=function e(t){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e);var i=0,a=0,r=0,n=0,o=0,s=0,l=0;t.on("requestcompleted",function(e,s){var l,d,u=s.request_start,c=s.request_response_start,h=s.request_response_end,m=s.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;o++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/o)}}),t.on("requestfailed",function(e,i){n++,s++,t.data.view_request_count=n,t.data.view_request_failed_count=s}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tm&&eq(th.prototype,tm),tp&&eq(th,tp),Object.defineProperty(th,"prototype",{writable:!1}),th);function eF(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var ej=(tv=function e(t){var i=this;(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),t.on("before*",function(e,a){var r=a.viewer_time,n=p.now(),o=i._lastEventTime;if(i._lastEventTime=n,o&&n-o>36e5){var s=Object.keys(t.data).reduce(function(e,i){var a,r;return 0===i.indexOf("video_")?Object.assign(e,(a={},r=t.data[i],i in a?Object.defineProperty(a,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[i]=r,a)):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view"),t.emit("viewinit",Object.assign({viewer_time:r},s)),t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})},tb&&eF(tv.prototype,tb),tf&&eF(tv,tf),Object.defineProperty(tv,"prototype",{writable:!1}),tv);function e$(e){return(e$="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function eK(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function eY(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function eG(e,t){return(eG=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function eZ(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function eQ(e){return(eQ=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ez=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],eX=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&eG(e,t)}(o,e);var t,i,a,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=eQ(o);if(t){var a=eQ(this).constructor;e=Reflect.construct(i,arguments,a)}else e=i.apply(this,arguments);return function(e,t){if(t&&("object"===e$(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return eZ(e)}(this,e)});function o(e,t,i){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,o),(s=r.call(this)).DOM_CONTENT_LOADED_EVENT_END=f.domContentLoadedEventEnd(),s.NAVIGATION_START=f.navigationStart(),s.mux=e,s.id=t,null!==(a=i)&&void 0!==a&&a.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(i=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(e){return e}},i)).data=i.data||{},i.data.property_key&&(i.data.env_key=i.data.property_key,delete i.data.property_key),h.setLevel(i.debug?"debug":"warn"),s.getPlayheadTime=i.getPlayheadTime,s.getStateData=i.getStateData||function(){return{}},s.getAdData=i.getAdData||function(){},s.minimumRebufferDuration=i.minimumRebufferDuration,s.sustainedRebufferThreshold=i.sustainedRebufferThreshold,s.playbackHeartbeatTime=i.playbackHeartbeatTime,s.disableRebufferTracking=i.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=i.disablePlayheadRebufferTracking,s.errorTranslator=i.errorTranslator,s.playbackEventDispatcher=new eV(e,i.data.env_key,i),s.data={player_instance_id:n(),mux_sample_rate:i.sampleRate,beacon_domain:i.beaconCollectionDomain||i.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1,s.oldEmit=s.emit,s.emit=function(e,t){t=Object.assign({viewer_time:this.mux.utils.now()},t),this.oldEmit(e,t)};var a,s,l=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(eZ(s));s.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",l),this.one("adbreakstart",l)});var d=(function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}).bind(eZ(s));if(s.on("videochange",function(e,t){d(t)}),s.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),d(Object.assign(t,{view_program_changed:!0})),l(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),s.on("destroy",s.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var u=function(){var e=void 0!==s.data.view_start;s.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",u,!1);var c=function(e){e.persisted||s.destroy()};window.addEventListener("pagehide",c,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",u),window.removeEventListener("pagehide",c)})}return s.on("playerready",function(e,t){Object.assign(this.data,t)}),ez.forEach(function(e){s.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),s.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),s.on("viewend",function(e,t){Object.assign(s.data,t)}),s.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),s.longResumeTracker=new ej(eZ(s)),s.errorTracker=new V(eZ(s)),new eh(eZ(s)),s.seekingTracker=new ei(eZ(s)),s.playheadTime=new K(eZ(s)),s.playbackHeartbeat=new B(eZ(s)),new ee(eZ(s)),s.watchTimeTracker=new H(eZ(s)),new j(eZ(s)),s.adTracker=new el(eZ(s)),new Q(eZ(s)),new G(eZ(s)),new X(eZ(s)),new eu(eZ(s)),new eH(eZ(s)),i.hlsjs&&s.addHLSJS(i),i.dashjs&&s.addDashJS(i),s.emit("viewinit",i.data),s}return i=[{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i,a=function(e){if(Array.isArray(e))return e}(i=b(t.video_source_url))||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw r}}return n}}(i,2)||function(e,t){if(e){if("string"==typeof e)return eK(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?eK(e,t):void 0}}(i,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=a[0],n=a[1];t.video_source_domain=n,t.video_source_hostname=r}delete t.ad_request_id,this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_updateStateData",value:function(){Object.assign(this.data,this.getStateData()),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();0!==i.indexOf("data:")&&0!==i.indexOf("blob:")||(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(e,t){var i=this;Object.keys(this.data).forEach(function(e){0===e.indexOf("video_")&&delete i.data[e]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(e,t){delete this.data.player_error_code,delete this.data.player_error_message}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=n(),i=function(){t===e.data.view_id&&E(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this.errorTracker.viewErrored||(this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4))}},{key:"addHLSJS",value:function(e){e.hlsjs?this.hlsjs?this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):(this.hlsjs=e.hlsjs,function(e,t,i){var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,o=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(f.exists()){var s=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,o=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=I(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,b=c.responseEnd;s("requestcompleted",w(w({},k(l)),{},{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:b,request_type:"manifest",request_hostname:v(r),request_response_headers:S(o),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=I(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=o(m)+n(m.duration);s("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:v(i.url),request_response_headers:S(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=I(t.stats);s("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:v(i.url),request_response_headers:S(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,o=I(a=a||n.stats),l=o.bytesLoaded,d=o.requestStart,u=o.responseStart,c=o.responseEnd,h=r?S(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?v(r.responseURL):void 0,request_id:h?A(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,s("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;s("fragmentchange",{currentFragmentPDT:o(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,o=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?S(u):void 0;n!==a.ErrorDetails.MANIFEST_LOAD_ERROR&&n!==a.ErrorDetails.MANIFEST_LOAD_TIMEOUT&&n!==a.ErrorDetails.FRAG_LOAD_ERROR&&n!==a.ErrorDetails.FRAG_LOAD_TIMEOUT&&n!==a.ErrorDetails.LEVEL_LOAD_ERROR&&n!==a.ErrorDetails.LEVEL_LOAD_TIMEOUT&&n!==a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR&&n!==a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT&&n!==a.ErrorDetails.SUBTITLE_LOAD_ERROR&&n!==a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT&&n!==a.ErrorDetails.KEY_LOAD_ERROR&&n!==a.ErrorDetails.KEY_LOAD_TIMEOUT||s("requestfailed",{request_error:n,request_url:c,request_hostname:v(c),request_id:h?A(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==o?void 0:o.code,request_error_text:null==o?void 0:o.text}),l&&s("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(o&&(o.code||o.text)?"response: ".concat(o.code,", ").concat(o.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null===(i=t.err)||void 0===i?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";s("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:v(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var b=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var o,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(o=d),l?s("renditionchange",{video_source_fps:o,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,b),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,b),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)}else r.warn("performance timing not supported. Not tracking HLS.js.")}(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)):this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){var e;this.hlsjs&&((e=this.hlsjs)&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor(),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){e.dashjs?this.dashjs?this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):(this.dashjs=e.dashjs,function(e,t,i){var a=e.log;if(i&&i.on){var r=O(i),n=function(i,a){return e.emit(t,i,a)},o=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:v(i),request_url:i})};i.on("manifestLoaded",o);var s={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,o=(a||{}).mediaInfo||{},l=o.type,d=o.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?s.video=u:"audio"===l?s.audio=u:s.media=u;var c=L(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,v=c.requestResponseHeaders,b=c.requestMediaDuration,f=c.requestHostname,E=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:v,request_hostname:f,request_id:c.requestId,request_url:E,request_media_duration:b,request_rendition_lists:s})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,o=a||{},s=o.mediaInfo,l=o.start,d=(s||{}).type,u=L(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,v=u.requestResponseHeaders,b=u.requestMediaDuration,f=u.requestHostname,E=u.requestUrl,g=u.requestId,y=M(d,i),_=y.currentLevel,A=y.renditionWidth,k=y.renditionHeight,T=y.renditionBitrate;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:v,request_hostname:f,request_id:g,request_url:E,request_media_start_time:l,request_media_duration:b,request_current_level:_,request_labeled_bitrate:T,request_video_width:A,request_video_height:k})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(c.video.width&&c.video.height){var e=c.video.bitrate;return c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate?(c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:C(c.video.codec)}):void 0}a.warn("have bitrate info for video but missing width/height")}},m=function(e,t,r){if("number"==typeof e.newQuality){var o=e.mediaType;if("audio"===o||"video"===o){var s=i.getBitrateInfoListFor(o).find(function(t){return t.qualityIndex===e.newQuality});if(s&&"number"==typeof s.bitrate){c[o]=R(R({},s),{},{codec:i.getCurrentTrackFor(o).codec});var l=h();l&&n("renditionchange",l)}else a.warn("missing bitrate info for ".concat(o))}}else a.warn("missing evt.newQuality in qualityChangeRendered event",e)};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:v(t.url)})};i.on("fragmentLoadingAbandoned",p);var b=function(e){var t,i,a=e.error,r=(null==a||null===(t=a.data)||void 0===t?void 0:t.request)||{},o=(null==a||null===(i=a.data)||void 0===i?void 0:i.response)||{};27===(null==a?void 0:a.code)&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:v(r.url),request_type:r.mediaType,request_error_code:o.status,request_error_text:o.statusText});var s="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=o&&o.status||null!=o&&o.statusText?"response: ".concat(null==o?void 0:o.status,", ").concat(null==o?void 0:o.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:s})};i.on("error",b),i._stopMuxMonitor=function(){i.off("manifestLoaded",o),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",b),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}}else a.warn("Invalid dash.js player reference. Monitoring blocked.")}(this.mux,this.id,e.dashjs)):this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){var e;this.dashjs&&((e=this.dashjs)&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor(),this.dashjs=void 0)}}],eY(o.prototype,i),a&&eY(o,a),Object.defineProperty(o,"prototype",{writable:!1}),o}(P),eJ=i(153),e0=i.n(eJ);function e1(e){return(e1="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function e2(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return e5(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e5(e,t):void 0}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e5(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}var e3,e4,e7,e8,e6,e9,te,tt,ti,ta,tr,tn,to,ts,tl,td,tu,tc,th,tm,tp,tv,tb,tf,tE,tg=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],ty={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};r()&&r().WeakMap&&(tE=new WeakMap);var t_=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};t_.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},t_.prototype.processLine=function(e){var t=e.indexOf(":"),i=tD(e,t),a=i[0],r=2===i.length?tT(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case"#EXT-X-TARGETDURATION":if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case"#EXT-X-PART-INF":tA(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case"#EXT-X-SERVER-CONTROL":tA(this.manifest,i),this.setHoldBack();break;case"#EXTINF":0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case"#EXT-X-PROGRAM-DATE-TIME":var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case"#EXT-X-VERSION":tA(this.manifest,i);break;case"#EXT-X-SESSION-DATA":var o=k(tR(i[1]));Object.assign(this.manifest.sessionData,o)}},t_.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",o=i&&3*i,s=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=o),o&&t[r]<o&&(t[r]=o),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<s&&(t[n]=s)}};var tA=function(e,t){var i,a=tk(t[0].replace("#EXT-X-",""));tS(t[1])?(i={},i=Object.assign(tI(t[1]),i)):i=tT(t[1]),e[a]=i},tk=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tT=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tw=function(e){var t={},i=e.split("=");return i.length>1&&(t[tk(i[0])]=tT(i[1])),t},tI=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tw(t[a]),i);return i},tS=function(e){return e.indexOf("=")>-1},tD=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tR=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tL={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){h.info("safeCall error",e)}return r},safeIncrement:E,getComputedStyle:function(e,t){var i;if(e&&t&&r()&&"function"==typeof r().getComputedStyle)return tE&&tE.has(e)&&(i=tE.get(e)),i||(i=r().getComputedStyle(e,null),tE&&tE.set(e,i)),i.getPropertyValue(t)},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:_,cdnHeadersToRequestId:A,extractHostnameAndDomain:b,extractHostname:v,manifestParser:t_,generateShortID:o,generateUUID:n,now:p.now};function tM(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}var tC={},tO=function e(t){var i=arguments;"string"==typeof t?e.hasOwnProperty(t)?r().setTimeout(function(){i=Array.prototype.splice.call(i,1),e[t].apply(null,i)},0):h.warn("`"+t+"` is an unknown task"):"function"==typeof t?r().setTimeout(function(){t(e)},0):h.warn("`"+t+"` is invalid.")},tx={loaded:p.now(),NAME:"mux-embed",VERSION:"4.30.0",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=e2(l(t),3),r=a[0],n=a[1],o=a[2],s=e.log,d=e.utils.getComputedStyle,u=e.utils.secondsToMs;if(!r)return s.error("No element was found with the `"+n+"` query selector.");if("video"!==o&&"audio"!==o)return s.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,s.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i)).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),i.getPlayheadTime=function(){return u(r.currentTime)},i.getStateData=function(){var e,t,a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&e1("function"===this.dashjs.getSource)&&this.dashjs.getSource(),o={player_is_paused:r.paused,player_playhead_time:u(r.currentTime),player_width:parseInt(d(r,"width")),player_height:parseInt(d(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:e0()&&!!(e0().fullscreenElement||e0().webkitFullscreenElement||e0().mozFullScreenElement||e0().msFullscreenElement),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:u(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null===(e=r)||void 0===e||null===(t=e.getVideoPlaybackQuality)||void 0===t?void 0:t.call(e).droppedVideoFrames},s=i.getPlayheadTime();if(r.getStartDate&&s>0){var l=r.getStartDate();if(l&&"function"==typeof l.getTime&&l.getTime()){var c=l.getTime();if(o.player_program_time=c+s,r.seekable.length>0){var h=c+r.seekable.end(r.seekable.length-1);o.player_live_edge_program_time=h}}}return o},r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)};var c=function(){s.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.destroy=c,r.mux.swapElement=c,r.mux.emit=c,r.mux.addHLSJS=c,r.mux.addDashJS=c,r.mux.removeHLSJS=c,r.mux.removeDashJS=c,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=e2(l(t),3),a=i[0],n=i[1],o=i[2];return a?"video"!==o&&"audio"!==o?e.log.error("The element of `"+n+"` was not a media element."):(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,void(r=a)):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},tg.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=ty[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))})}(tO,e,t)},destroyMonitor:function(e){var t,i=(function(e){if(Array.isArray(e))return e}(t=l(e))||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw r}}return n}}(t,1)||function(e,t){if(e){if("string"==typeof e)return tM(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?tM(e,t):void 0}}(t,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];i&&i.mux&&"function"==typeof i.mux.destroy?i.mux.destroy():h.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=s(e);tC[i]?tC[i].addHLSJS(t):h.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=s(e);tC[i]?tC[i].addDashJS(t):h.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=s(e);tC[t]?tC[t].removeHLSJS():h.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=s(e);tC[t]?tC[t].removeDashJS():h.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){m()&&t&&t.respectDoNotTrack&&h.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=s(e);tC[i]=new eX(tO,i,t)},emit:function(e,t,i){var a=s(e);tC[a]?(tC[a].emit(t,i),"destroy"===t&&delete tC[a]):h.error("A monitor for `"+a+"` has not been initialized.")},checkDoNotTrack:m,log:h,utils:tL,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tO,tx),void 0!==r()&&"function"==typeof r().addEventListener&&r().addEventListener("pagehide",function(e){e.persisted||(tO.WINDOW_UNLOADING=!0)},!1);var tN=tO},655:function(e,t,i){var a,r;function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e);/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */}!function(o){var s=!1;if(void 0===(r="function"==typeof(a=o)?a.call(t,i,t,e):a)||(e.exports=r),s=!0,"object"===n(t)&&(e.exports=o(),s=!0),!s){var l=window.Cookies,d=window.Cookies=o();d.noConflict=function(){return window.Cookies=l,d}}}(function(){var e=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t};return function t(i){function a(t,r,n){var o;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(n=e({path:"/"},a.defaults,n)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*n.expires),n.expires=s}try{o=JSON.stringify(r),/^[\{\[]/.test(o)&&(r=o)}catch(e){}return r=i.write?i.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[t,"=",r,n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}t||(o={});for(var l=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<l.length;u++){var c=l[u].split("="),h=c.slice(1).join("=");'"'===h.charAt(0)&&(h=h.slice(1,-1));try{var m=c[0].replace(d,decodeURIComponent);if(h=i.read?i.read(h,m):i(h,m)||h.replace(d,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===m){o=h;break}t||(o[m]=h)}catch(e){}}return o}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,i){a(t,"",e(i,{expires:-1}))},a.withConverter=t,a}(function(){})})},153:function(e,t,i){var a,r=void 0!==i.g?i.g:"undefined"!=typeof window?window:{},n=i(558);"undefined"!=typeof document?a=document:(a=r["__GLOBAL_DOCUMENT_CACHE@4"])||(a=r["__GLOBAL_DOCUMENT_CACHE@4"]=n),e.exports=a},48:function(e,t,i){var a;a="undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{},e.exports=a},640:function(e,t,i){var a,r;void 0===(r="function"==typeof(a=function(){var e=function(){},t="undefined",i=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),a=["trace","debug","info","warn","error"];function r(e,t){var i=e[t];if("function"==typeof i.bind)return i.bind(e);try{return Function.prototype.bind.call(i,e)}catch(t){return function(){return Function.prototype.apply.apply(i,[e,arguments])}}}function n(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function o(t,i){for(var r=0;r<a.length;r++){var n=a[r];this[n]=r<t?e:this.methodFactory(n,t,i)}this.log=this.debug}function s(e,i,a){return function(){typeof console!==t&&(o.call(this,i,a),this[e].apply(this,arguments))}}function l(a,o,l){var d;return"debug"===(d=a)&&(d="log"),typeof console!==t&&("trace"===d&&i?n:void 0!==console[d]?r(console,d):void 0!==console.log?r(console,"log"):e)||s.apply(this,arguments)}function d(e,i,r){var n,s=this;i=null==i?"WARN":i;var d="loglevel";function u(){var e;if(typeof window!==t&&d){try{e=window.localStorage[d]}catch(e){}if(typeof e===t)try{var i=window.document.cookie,a=i.indexOf(encodeURIComponent(d)+"=");-1!==a&&(e=/^([^;]+)/.exec(i.slice(a))[1])}catch(e){}return void 0===s.levels[e]&&(e=void 0),e}}"string"==typeof e?d+=":"+e:"symbol"==typeof e&&(d=void 0),s.name=e,s.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},s.methodFactory=r||l,s.getLevel=function(){return n},s.setLevel=function(i,r){if("string"==typeof i&&void 0!==s.levels[i.toUpperCase()]&&(i=s.levels[i.toUpperCase()]),!("number"==typeof i&&i>=0&&i<=s.levels.SILENT))throw"log.setLevel() called with invalid level: "+i;if(n=i,!1!==r&&function(e){var i=(a[e]||"silent").toUpperCase();if(typeof window!==t&&d){try{return void(window.localStorage[d]=i)}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"="+i+";"}catch(e){}}}(i),o.call(s,i,e),typeof console===t&&i<s.levels.SILENT)return"No console available for logging"},s.setDefaultLevel=function(e){i=e,u()||s.setLevel(e,!1)},s.resetLevel=function(){s.setLevel(i,!1),function(){if(typeof window!==t&&d){try{return void window.localStorage.removeItem(d)}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},s.enableAll=function(e){s.setLevel(s.levels.TRACE,e)},s.disableAll=function(e){s.setLevel(s.levels.SILENT,e)};var c=u();null==c&&(c=i),s.setLevel(c,!1)}var u=new d,c={};u.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw TypeError("You must supply a name when creating a logger.");var t=c[e];return t||(t=c[e]=new d(e,u.getLevel(),u.methodFactory)),t};var h=typeof window!==t?window.log:void 0;return u.noConflict=function(){return typeof window!==t&&window.log===u&&(window.log=h),u},u.getLoggers=function(){return c},u.default=u,u})?a.call(t,i,t,e):a)||(e.exports=r)},375:function(e,t){"use strict";var i=Object.prototype.hasOwnProperty;function a(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function r(e){try{return encodeURIComponent(e)}catch(e){return null}}t.stringify=function(e,t){var a,n,o=[];for(n in"string"!=typeof(t=t||"")&&(t="?"),e)if(i.call(e,n)){if((a=e[n])||null!=a&&!isNaN(a)||(a=""),n=r(n),a=r(a),null===n||null===a)continue;o.push(n+"="+a)}return o.length?t+o.join("&"):""},t.parse=function(e){for(var t,i=/([^=?#&]+)=?([^&]*)/g,r={};t=i.exec(e);){var n=a(t[1]),o=a(t[2]);null===n||null===o||n in r||(r[n]=o)}return r}},558:function(){}},t={};function i(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,i),n.exports}return i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i(80)}()},8864:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let a=i(1024);i(2265);let r=a._(i(533));function n(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){let i=r.default,a={loading:e=>{let{error:t,isLoading:i,pastDelay:a}=e;return null}};"function"==typeof e&&(a.loader=e),Object.assign(a,t);let o=a.loader;return i({...a,loader:()=>null!=o?o().then(n):Promise.resolve(n(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},533:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let a=i(1024),r=a._(i(2265)),n=i(3699),o=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function i(e){let i=t.loading,a=r.default.createElement(i,{isLoading:!0,pastDelay:!0,error:null}),o=t.ssr?r.default.Fragment:n.NoSSR,s=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:a},r.default.createElement(o,null,r.default.createElement(s,e)))}return t.lazy=r.default.lazy(t.loader),i.displayName="LoadableComponent",i}},432:function(){},1:function(e,t,i){"use strict";let a,r;i.d(t,{Z:function(){return cS}});var n=i(2265);let o={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},s={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},l={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_PAUSED:"mediaPaused",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_ENDED:"mediaEnded",MEDIA_MUTED:"mediaMuted",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_IS_PIP:"mediaIsPip",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_LOADING:"mediaLoading",MEDIA_BUFFERED:"mediaBuffered",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled"},d=Object.entries(l),u=d.reduce((e,[t,i])=>(e[t]=`${i.toLowerCase()}`,e),{}),c=d.reduce((e,[t,i])=>(e[t]=`${i.toLowerCase()}`,e),{USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(c).reduce((e,[t,i])=>{let a=u[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let h=Object.entries(u).reduce((e,[t,i])=>{let a=c[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),m={SUBTITLES:"subtitles",CAPTIONS:"captions",METADATA:"metadata"},p={DISABLED:"disabled",SHOWING:"showing"},v={MOUSE:"mouse",TOUCH:"touch"},b={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},f={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},E={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:e=1}={})=>`current playback rate ${e}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading"},g={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",AIRPLAY:()=>"air play",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:e=30}={})=>`seek forward ${e} seconds`,SEEK_BACK_N_SECS:({seekOffset:e=30}={})=>`seek back ${e} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"};function y(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function _(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:i,height:a}}}function A(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function k(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function T(e,t=!1){return e.split("_").map(function(e,i){return(i||t?e[0].toUpperCase():e[0].toLowerCase())+e.slice(1).toLowerCase()}).join("")}function w(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}({...E,...g});let I=e=>new Promise(t=>setTimeout(t,e)),S=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],D=(e,t)=>{let i=1===e?S[t].singular:S[t].plural;return`${e} ${i}`},R=e=>{if(!("number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)))return"";let t=Math.abs(e),i=new Date(0,0,0,0,0,t,0),a=[i.getHours(),i.getMinutes(),i.getSeconds()],r=a.map((e,t)=>e&&D(e,t)).filter(e=>e).join(", ");return`${r}${t!==e?" remaining":""}`};function L(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||Math.floor(t/3600)>0?n+":":"")||Math.floor(t/60%60)>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let M=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},C=(e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},O=(e,t)=>C(e,t)[0],x=(e,t)=>!!e&&!!t&&(!!e.contains(t)||x(e,t.getRootNode().host)),N=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||N(e.getRootNode().host,t)};function P(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function U(e,t){var i;let a;for(a of e.querySelectorAll("style")){let e;try{e=null==(i=a.sheet)?void 0:i.cssRules}catch{continue}for(let i of null!=e?e:[])if(i.selectorText===t)return i}return(null==a?void 0:a.sheet)?(a.sheet.insertRule(`${t}{}`,a.sheet.cssRules.length),a.sheet.cssRules[a.sheet.cssRules.length-1]):{style:{setProperty:()=>{},removeProperty:()=>{}}}}function B(e,t,i=Number.NaN){let a=e.getAttribute(t);return null!=a?+a:i}function W(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}B(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function V(e,t){return e.hasAttribute(t)}function q(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}V(e,t)!=i&&e.toggleAttribute(t,i)}function H(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function F(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;H(e,t,void 0)!==a&&e.setAttribute(t,a)}class j{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}let $={createElement:function(){return new K.HTMLElement},addEventListener(){},removeEventListener(){}},K={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:$,HTMLElement:class extends j{},DocumentFragment:class extends j{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[]}},Y="undefined"==typeof window||void 0===window.customElements,G=Object.keys(K).every(e=>e in globalThis),Z=Y&&!G?K:globalThis,Q=Y&&!G?$:globalThis.document;var z=Object.defineProperty,X=(e,t,i)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,J=(e,t,i)=>(X(e,"symbol"!=typeof t?t+"":t,i),i),ee=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},et=(e,t,i)=>(ee(e,t,"read from private field"),i?i.call(e):t.get(e)),ei=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ea=(e,t,i,a)=>(ee(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let er=Q.createElement("template");er.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-control-padding, 10px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;class en extends Z.HTMLElement{constructor(e={}){if(super(),ei(this,rI,void 0),J(this,"preventClick",!1),ei(this,rS,e=>{this.preventClick||this.handleClick(e)}),ei(this,rD,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",et(this,rD));return}this.preventClick||this.handleClick(e)}),ei(this,rR,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",et(this,rD));return}this.addEventListener("keyup",et(this,rD),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});let t=er.content.cloneNode(!0);this.nativeEl=t;let i=e.slotTemplate;i||((i=Q.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(i.content.cloneNode(!0)),this.shadowRoot.appendChild(t)}let{style:t}=U(this.shadowRoot,":host");t.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`)}static get observedAttributes(){return["disabled",s.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",et(this,rS)),this.addEventListener("keydown",et(this,rR)),this.tabIndex=0}disable(){this.removeEventListener("click",et(this,rS)),this.removeEventListener("keydown",et(this,rR)),this.removeEventListener("keyup",et(this,rD)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=et(this,rI))?void 0:a.unassociateElement)||r.call(a,this),ea(this,rI,null)),i&&this.isConnected&&(ea(this,rI,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=et(this,rI))?void 0:o.associateElement)||l.call(o,this))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(ea(this,rI,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=et(this,rI))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=et(this,rI))?void 0:e.unassociateElement)||t.call(e,this),ea(this,rI,null)}get keysUsed(){return["Enter"," "]}handleClick(e){}}rI=new WeakMap,rS=new WeakMap,rD=new WeakMap,rR=new WeakMap,Z.customElements.get("media-chrome-button")||Z.customElements.define("media-chrome-button",en);let eo=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,es=Q.createElement("template");es.innerHTML=`
  <slot name="icon">${eo}</slot>
`,Z.customElements.get("media-airplay-button")||Z.customElements.define("media-airplay-button",class extends en{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:es,...e})}connectedCallback(){this.setAttribute("aria-label",g.AIRPLAY()),super.connectedCallback()}get mediaAirplayUnavailable(){return H(this,u.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){F(this,u.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new Z.CustomEvent(o.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}});let el=Q.createElement("template");el.innerHTML=`
  <style>
  :host([${u.MEDIA_IS_CASTING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${u.MEDIA_IS_CASTING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
  </slot>
`;let ed=e=>{let t=null!=e.getAttribute(u.MEDIA_IS_CASTING),i=t?g.EXIT_CAST():g.ENTER_CAST();e.setAttribute("aria-label",i)};Z.customElements.get("media-cast-button")||Z.customElements.define("media-cast-button",class extends en{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_IS_CASTING,u.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:el,...e})}connectedCallback(){ed(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===u.MEDIA_IS_CASTING&&ed(this),super.attributeChangedCallback(e,t,i)}get mediaIsCasting(){return V(this,u.MEDIA_IS_CASTING)}set mediaIsCasting(e){q(this,u.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return H(this,u.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){F(this,u.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?o.MEDIA_EXIT_CAST_REQUEST:o.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new Z.CustomEvent(e,{composed:!0,bubbles:!0}))}});var eu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ec=(e,t,i)=>(eu(e,t,"read from private field"),i?i.call(e):t.get(e)),eh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},em=(e,t,i,a)=>(eu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ep=Q.createElement("template");ep.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;class ev extends Z.HTMLElement{constructor(e={}){if(super(),eh(this,rL,void 0),!this.shadowRoot){let t=this.attachShadow({mode:"open"}),i=ep.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=Q.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(a.content.cloneNode(!0)),t.appendChild(i)}}static get observedAttributes(){return[s.MEDIA_CONTROLLER,u.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ec(this,rL))?void 0:a.unassociateElement)||r.call(a,this),em(this,rL,null)),i&&this.isConnected&&(em(this,rL,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ec(this,rL))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),em(this,rL,function(e){var t;let i=e.getAttribute(s.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):N(e,"media-controller")}(this)),this.getAttribute(s.MEDIA_CONTROLLER)&&(null==(t=null==(e=ec(this,rL))?void 0:e.associateElement)||t.call(e,this)),null==(i=ec(this,rL))||i.addEventListener("pointerdown",this),null==(a=ec(this,rL))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(s.MEDIA_CONTROLLER)&&(null==(t=null==(e=ec(this,rL))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=ec(this,rL))||i.removeEventListener("pointerdown",this),null==(a=ec(this,rL))||a.removeEventListener("click",this),em(this,rL,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:o}=this.getBoundingClientRect(),s=t-a,l=i-r;if(s<0||l<0||s>n||l>o||0===n&&0===o)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===v.TOUCH){this.handleTap(e);return}if(d===v.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return V(this,u.MEDIA_PAUSED)}set mediaPaused(e){q(this,u.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?o.MEDIA_PLAY_REQUEST:o.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new Z.CustomEvent(t,{composed:!0,bubbles:!0}))}}rL=new WeakMap,Z.customElements.get("media-gesture-receiver")||Z.customElements.define("media-gesture-receiver",ev);let eb=new WeakMap,ef=e=>{let t=eb.get(e);return t||eb.set(e,t=new Set),t},eE=new Z.ResizeObserver(e=>{for(let t of e)for(let e of ef(t.target))e(t)});function eg(e,t){ef(e).add(t),eE.observe(e)}function ey(e,t){let i=ef(e);i.delete(t),i.size||eE.unobserve(e)}var e_=Object.defineProperty,eA=(e,t,i)=>t in e?e_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ek=(e,t,i)=>(eA(e,"symbol"!=typeof t?t+"":t,i),i),eT=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ew=(e,t,i)=>(eT(e,t,"read from private field"),i?i.call(e):t.get(e)),eI=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eS=(e,t,i,a)=>(eT(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),eD=(e,t,i)=>(eT(e,t,"access private method"),i);let eR={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},eL=Q.createElement("template");eL.innerHTML=`
  <style>
    
    :host([${u.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${eR.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${eR.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${eR.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${eR.AUDIO}])[${eR.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${eR.AUDIO}])[${eR.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator)) {
      pointer-events: auto;
    }

    :host(:not([${eR.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${eR.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${eR.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${eR.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([${eR.NO_AUTOHIDE}])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${eR.USER_INACTIVE}]:not([${u.MEDIA_PAUSED}]):not([${u.MEDIA_IS_CASTING}]):not([${eR.AUDIO}])) ::slotted(:not([slot=media]):not([${eR.NO_AUTOHIDE}])) {
      opacity: 0;
      transition: opacity 1s;
    }

    :host([${eR.USER_INACTIVE}]:not([${u.MEDIA_PAUSED}]):not([${u.MEDIA_IS_CASTING}]):not([${eR.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${eR.AUDIO}])[${u.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;let eM=Object.values(u);class eC extends Z.HTMLElement{constructor(){super(),eI(this,rO),eI(this,rN),eI(this,rU),eI(this,rW),eI(this,rq),eI(this,rM,0),eI(this,rC,void 0),ek(this,"breakpointsComputed",!1),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(eL.content.cloneNode(!0)));let e=new MutationObserver(e=>{let t=this.media;for(let i of e)"childList"===i.type&&(i.removedNodes.forEach(e=>{if("media"==e.slot&&i.target==this){let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}}),t&&i.addedNodes.forEach(e=>{e===t&&t!==ew(this,rC)&&this.handleMediaUpdated(t).then(e=>this.mediaSetCallback(e))}))});e.observe(this,{childList:!0,subtree:!0});let t=!1;eg(this,e=>{t||(setTimeout(()=>{(function(e,t){var i;if(!e.isConnected)return;let a=null!=(i=e.getAttribute(eR.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960",r=function(e){let t=e.split(/\s+/);return Object.fromEntries(t.map(e=>e.split(":")))}(a),n=Object.keys(r).filter(e=>t>=r[e]),o=!1;if(Object.keys(r).forEach(t=>{if(n.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(c.BREAKPOINTS_CHANGE,{detail:n});e.dispatchEvent(t)}})(e.target,e.contentRect.width),t=!1,this.breakpointsComputed||(this.breakpointsComputed=!0,this.dispatchEvent(new CustomEvent(c.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))},0),t=!0)});let i=this.querySelector(":scope > slot[slot=media]");i&&i.addEventListener("slotchange",()=>{let e=i.assignedElements({flatten:!0});if(!e.length){this.mediaUnsetCallback(ew(this,rC));return}this.media&&this.media!==ew(this,rC)&&this.handleMediaUpdated(this.media).then(e=>this.mediaSetCallback(e))})}static get observedAttributes(){return[eR.AUTOHIDE,eR.GESTURES_DISABLED].concat(eM).filter(e=>![u.MEDIA_RENDITION_LIST,u.MEDIA_AUDIO_TRACK_LIST].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==eR.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){return(eS(this,rC,e),e)?(e.localName.includes("-")&&await Z.customElements.whenDefined(e.localName),e):(eS(this,rC,null),console.error('Media Chrome: Media element set with slot="media" does not appear to be compatible.',e),Promise.reject(e))}connectedCallback(){var e;let t=null!=this.getAttribute(eR.AUDIO),i=t?E.AUDIO_PLAYER():E.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",i),this.media&&this.media!==ew(this,rC)&&this.handleMediaUpdated(this.media).then(e=>this.mediaSetCallback(e)),this.setAttribute(eR.USER_INACTIVE,""),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=Z.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;this.media&&this.mediaUnsetCallback(this.media),null==(e=Z.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){}handleEvent(e){switch(e.type){case"pointerdown":eS(this,rM,e.timeStamp);break;case"pointermove":eD(this,rO,rx).call(this,e);break;case"pointerup":eD(this,rN,rP).call(this,e);break;case"mouseleave":eD(this,rU,rB).call(this);break;case"mouseup":this.removeAttribute(eR.KEYBOARD_CONTROL);break;case"keyup":eD(this,rq,rH).call(this),this.setAttribute(eR.KEYBOARD_CONTROL,"")}}set autohide(e){e=Number(e),this._autohide=isNaN(e)?0:e}get autohide(){return void 0===this._autohide?2:this._autohide}}rM=new WeakMap,rC=new WeakMap,rO=new WeakSet,rx=function(e){!("mouse"!==e.pointerType&&e.timeStamp-ew(this,rM)<250)&&(eD(this,rW,rV).call(this),clearTimeout(this._inactiveTimeout),[this,this.media].includes(e.target)&&eD(this,rq,rH).call(this))},rN=new WeakSet,rP=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(eR.USER_INACTIVE);[this,this.media].includes(e.target)&&t?eD(this,rU,rB).call(this):eD(this,rq,rH).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&eD(this,rq,rH).call(this)},rU=new WeakSet,rB=function(){if(this.autohide<0||this.hasAttribute(eR.USER_INACTIVE))return;this.setAttribute(eR.USER_INACTIVE,"");let e=new Z.CustomEvent(c.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},rW=new WeakSet,rV=function(){if(!this.hasAttribute(eR.USER_INACTIVE))return;this.removeAttribute(eR.USER_INACTIVE);let e=new Z.CustomEvent(c.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},rq=new WeakSet,rH=function(){eD(this,rW,rV).call(this),clearTimeout(this._inactiveTimeout),this.autohide<0||(this._inactiveTimeout=setTimeout(()=>{eD(this,rU,rB).call(this)},1e3*this.autohide))};var eO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ex=(e,t,i)=>(eO(e,t,"read from private field"),i?i.call(e):t.get(e)),eN=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},eP=(e,t,i,a)=>(eO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class eU{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){eN(this,rY),eN(this,rF,void 0),eN(this,rj,void 0),eN(this,r$,void 0),eN(this,rK,new Set),eP(this,rF,e),eP(this,rj,t),eP(this,r$,new Set(i))}[Symbol.iterator](){return ex(this,rY,rG).values()}get length(){return ex(this,rY,rG).size}get value(){var e;return null!=(e=[...ex(this,rY,rG)].join(" "))?e:""}set value(e){var t;e!==this.value&&(eP(this,rK,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...ex(this,rY,rG)][e]}values(){return ex(this,rY,rG).values()}forEach(e){ex(this,rY,rG).forEach(e)}add(...e){var t,i;e.forEach(e=>ex(this,rK).add(e)),(""!==this.value||(null==(t=ex(this,rF))?void 0:t.hasAttribute(`${ex(this,rj)}`)))&&(null==(i=ex(this,rF))||i.setAttribute(`${ex(this,rj)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>ex(this,rK).delete(e)),null==(t=ex(this,rF))||t.setAttribute(`${ex(this,rj)}`,`${this.value}`)}contains(e){return ex(this,rY,rG).has(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}rF=new WeakMap,rj=new WeakMap,r$=new WeakMap,rK=new WeakMap,rY=new WeakSet,rG=function(){return ex(this,rK).size?ex(this,rK):ex(this,r$)};let eB=(e="")=>e.split(/\s+/),eW=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:t="cc"===t?"captions":"subtitles",language:i,label:r}},eV=(e="",t={})=>eB(e).map(e=>{let i=eW(e);return{...t,...i}}),eq=e=>Array.isArray(e)?e.map(e=>"string"==typeof e?eW(e):e):"string"==typeof e?eV(e):[e],eH=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,eF=(e=[])=>Array.prototype.map.call(e,eH).join(" "),ej=(e,t)=>i=>i[e]===t,e$=e=>{let t=Object.entries(e).map(([e,t])=>ej(e,t));return e=>t.every(t=>t(e))},eK=(e,t=[],i=[])=>{let a=eq(i).map(e$);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},eY=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:e$(t);return Array.from(e.textTracks).filter(i)},eG=e=>{let t=!!e.getAttribute(u.MEDIA_SUBTITLES_SHOWING);return t},eZ={enter:"requestFullscreen",exit:"exitFullscreen",rootEvents:["fullscreenchange"],mediaEvents:[],element:"fullscreenElement",error:"fullscreenerror",enabled:"fullscreenEnabled"};void 0===Q.fullscreenElement&&(eZ.enter="webkitRequestFullScreen",eZ.exit=null!=Q.webkitExitFullscreen?"webkitExitFullscreen":"webkitCancelFullScreen",eZ.rootEvents=["webkitfullscreenchange"],eZ.mediaEvents=["webkitbeginfullscreen","webkitendfullscreen"],eZ.element="webkitFullscreenElement",eZ.error="webkitfullscreenerror",eZ.enabled="webkitFullscreenEnabled");let eQ=()=>{var e;return a||(a=null==(e=null==Q?void 0:Q.createElement)?void 0:e.call(Q,"video"))},ez=async(e=eQ())=>{if(!e)return!1;let t=e.volume;return e.volume=t/2+.1,await I(0),e.volume!==t},eX=((e=eQ())=>{let t=Q[eZ.enabled];return!t&&e&&(t="webkitSupportsFullscreen"in e),t})(),eJ=((e=eQ())=>"function"==typeof(null==e?void 0:e.requestPictureInPicture))(),e0=!!Z.WebKitPlaybackTargetAvailabilityEvent,e1=!!Z.chrome,e2=ez().then(e=>r=e),e5=Object.values(f),e3=e=>eY(e.media,e=>[m.SUBTITLES,m.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),e4=e=>eY(e.media,e=>e.mode===p.SHOWING&&[m.SUBTITLES,m.CAPTIONS].includes(e.kind)),e7={MEDIA_PAUSED:{get:function(e){let{media:t}=e;return!t||t.paused},mediaEvents:["play","playing","pause","emptied"]},MEDIA_HAS_PLAYED:{get:function(e){let{media:t}=e;return!!t&&!t.paused},mediaEvents:["playing","emptied"]},MEDIA_ENDED:{get:function(e){let{media:t}=e;return!!t&&t.ended},mediaEvents:["seeked","ended","emptied"]},MEDIA_PLAYBACK_RATE:{get:function(e){let{media:t}=e;return t&&void 0!==t.playbackRate?t.playbackRate:1},mediaEvents:["ratechange","loadstart"]},MEDIA_MUTED:{get:function(e){let{media:t}=e;return!!t&&void 0!==t.muted&&t.muted},mediaEvents:["volumechange"]},MEDIA_VOLUME:{get:function(e){let{media:t}=e;return t&&void 0!==t.volume?Number(t.volume):1},mediaEvents:["volumechange"]},MEDIA_VOLUME_LEVEL:{get:function(e){let{media:t}=e,i="high";if(!t||void 0===t.volume)return i;let{muted:a,volume:r}=t;return 0===r||a?i="off":r<.5?i="low":r<.75&&(i="medium"),i},mediaEvents:["volumechange"]},MEDIA_CURRENT_TIME:{get:function(e){let{media:t}=e;return t&&void 0!==t.currentTime?t.currentTime:0},mediaEvents:["playing","pause","timeupdate","loadedmetadata"]},MEDIA_DURATION:{get:function(e){let{media:t}=e;return e.hasAttribute("defaultduration")&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?+e.getAttribute("defaultduration"):t&&Number.isFinite(t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},MEDIA_SEEKABLE:{get:function(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress"]},MEDIA_LOADING:{get:function(e){var t;return(null==(t=e.media)?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},MEDIA_BUFFERED:{get:function(e){var t,i,a;let r=null==(t=e.media)?void 0:t.buffered;return Array.from(null!=(a=null==(i=e.media)?void 0:i.buffered)?a:[]).map((e,t)=>[Number(r.start(t)).toFixed(3),Number(r.end(t)).toFixed(3)])},mediaEvents:["progress","emptied"]},MEDIA_STREAM_TYPE:{get:function(e){let{media:t}=e;if(!t)return;let{streamType:i}=t;if(e5.includes(i)){if(i===f.UNKNOWN){let t=e.getAttribute("defaultstreamtype");return[f.LIVE,f.ON_DEMAND].includes(t)?t:void 0}return i}let a=t.duration;if(a===1/0)return f.LIVE;if(Number.isFinite(a))return f.ON_DEMAND;{let t=e.getAttribute("defaultstreamtype");if([f.LIVE,f.ON_DEMAND].includes(t))return t}},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},MEDIA_TARGET_LIVE_WINDOW:{get:function(e){let{media:t}=e;if(!t)return Number.NaN;let{targetLiveWindow:i}=t,a=e7.MEDIA_STREAM_TYPE.get(e);return(null==i||Number.isNaN(i))&&a===f.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},MEDIA_TIME_IS_LIVE:{get:function(e){let{media:t}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;let i="live"===e7.MEDIA_STREAM_TYPE.get(e);if(!i)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=e.hasAttribute("liveedgeoffset")?Number(e.getAttribute("liveedgeoffset")):10,n=a.end(a.length-1)-r;return t.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},MEDIA_IS_FULLSCREEN:{get:function(e,t){var i,a;let r;let n=e.media;if(n&&void 0===Q[eZ.element]&&"webkitDisplayingFullscreen"in n)return n.webkitDisplayingFullscreen&&"fullscreen"===n.webkitPresentationMode;if(t){let e=Q[eZ.element];r=e?t.target:null}else r=null!=(a=null==(i=function(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}(e))?void 0:i.fullscreenElement)?a:Q[eZ.element];return x(e.fullscreenElement,r)},rootEvents:eZ.rootEvents,mediaEvents:eZ.mediaEvents},MEDIA_IS_PIP:{get:function(e,t){var i;let a=e.media;if(!a)return!1;if(t)return"enterpictureinpicture"==t.type;{let t=null!=(i=e.getRootNode().pictureInPictureElement)?i:Q.pictureInPictureElement;return x(a,t)}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},MEDIA_IS_CASTING:{get:function(e,t){var i;let{media:a}=e;if(!a)return!1;let r=null==(i=Z.CastableVideoElement)?void 0:i.castElement,n=x(a,r);return(null==t?void 0:t.type)==="castchange"&&(null==t?void 0:t.detail)==="CONNECTING"&&(n="connecting"),n},mediaEvents:["entercast","leavecast","castchange"]},MEDIA_AIRPLAY_UNAVAILABLE:{get:function(e,t){if(!e0)return b.UNSUPPORTED;if(t){if("available"===t.availability)return;if("not-available"===t.availability)return b.UNAVAILABLE}},mediaEvents:["webkitplaybacktargetavailabilitychanged"]},MEDIA_CAST_UNAVAILABLE:{get:function(){var e;let t=null==(e=Z.CastableVideoElement)?void 0:e.castState;return e1&&t?t.includes("CONNECT")?void 0:b.UNAVAILABLE:b.UNSUPPORTED},mediaEvents:["castchange"]},MEDIA_FULLSCREEN_UNAVAILABLE:{get:function(){return eX?void 0:b.UNAVAILABLE}},MEDIA_PIP_UNAVAILABLE:{get:function(){return eJ?void 0:b.UNSUPPORTED}},MEDIA_RENDITION_UNAVAILABLE:{get:function(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:b.UNAVAILABLE:b.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},MEDIA_AUDIO_TRACK_UNAVAILABLE:{get:function(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?b.UNAVAILABLE:void 0:b.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},MEDIA_VOLUME_UNAVAILABLE:{get:function(e){if(void 0!==r&&!r)return b.UNSUPPORTED;let{media:t}=e;if(t&&void 0===t.volume)return b.UNAVAILABLE},mediaEvents:["loadstart"]},MEDIA_SUBTITLES_LIST:{get:function(e){return e3(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},MEDIA_SUBTITLES_SHOWING:{get:function(e){return!e.hasAttribute("defaultsubtitles")||e.hasAttribute(u.MEDIA_HAS_PLAYED)||e.hasAttribute(u.MEDIA_SUBTITLES_SHOWING)||e8.MEDIA_TOGGLE_SUBTITLES_REQUEST(void 0,void 0,e),e4(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"]},MEDIA_RENDITION_LIST:{get:function(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]]},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},MEDIA_RENDITION_SELECTED:{get:function(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},MEDIA_AUDIO_TRACK_LIST:{get:function(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},MEDIA_AUDIO_TRACK_ENABLED:{get:function(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]}},e8={MEDIA_PLAY_REQUEST:(e,t,i)=>{var a;let r=e7.MEDIA_STREAM_TYPE.get(i),n=null===i.getAttribute("noautoseektolive");r==f.LIVE&&n&&e8.MEDIA_SEEK_TO_LIVE_REQUEST(e),null==(a=e.play())||a.catch(()=>{})},MEDIA_PAUSE_REQUEST:e=>e.pause(),MEDIA_MUTE_REQUEST:e=>e.muted=!0,MEDIA_UNMUTE_REQUEST:e=>{e.muted=!1,0===e.volume&&(e.volume=.25)},MEDIA_VOLUME_REQUEST:(e,t,i)=>{let a=t.detail;if(e.volume=a,a>0&&e.muted&&(e.muted=!1),!i.hasAttribute("novolumepref"))try{Z.localStorage.setItem("media-chrome-pref-volume",a.toString())}catch(e){}},MEDIA_ENTER_FULLSCREEN_REQUEST:(e,t,i)=>{if(!eX){console.warn("Fullscreen support is unavailable; not entering fullscreen");return}Q.pictureInPictureElement&&Q.exitPictureInPicture(),i[eZ.enter]?i.fullscreenElement[eZ.enter]():e.webkitEnterFullscreen?e.webkitEnterFullscreen():e.requestFullscreen?e.requestFullscreen():console.warn("MediaChrome: Fullscreen not supported")},MEDIA_EXIT_FULLSCREEN_REQUEST:()=>{Q[eZ.exit]()},MEDIA_ENTER_PIP_REQUEST:e=>{if(!Q.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!e.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}Q[eZ.element]&&Q[eZ.exit]();let t=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};e.requestPictureInPicture().catch(i=>{if(11===i.code){if(0===e.readyState&&"none"===e.preload){let i=()=>{e.removeEventListener("loadedmetadata",a),e.preload="none"},a=()=>{e.requestPictureInPicture().catch(t),i()};e.addEventListener("loadedmetadata",a),e.preload="metadata",setTimeout(()=>{0===e.readyState&&t(),i()},1e3)}else throw i}else throw i})},MEDIA_EXIT_PIP_REQUEST:()=>{Q.pictureInPictureElement&&Q.exitPictureInPicture()},MEDIA_ENTER_CAST_REQUEST:e=>{var t;(null==(t=Z.CastableVideoElement)?void 0:t.castEnabled)&&(Q[eZ.element]&&Q[eZ.exit](),e.requestCast())},MEDIA_EXIT_CAST_REQUEST:async()=>{var e;(null==(e=Z.CastableVideoElement)?void 0:e.castElement)&&Z.CastableVideoElement.exitCast()},MEDIA_SEEK_REQUEST:(e,t)=>{let i=t.detail;(e.readyState>0||void 0===e.readyState)&&(e.currentTime=i)},MEDIA_PLAYBACK_RATE_REQUEST:(e,t)=>{e.playbackRate=t.detail},MEDIA_PREVIEW_REQUEST:(e,t,i)=>{var a;if(!e)return;let r=t.detail;null===r&&i.propagateMediaState(u.MEDIA_PREVIEW_TIME,void 0),i.propagateMediaState(u.MEDIA_PREVIEW_TIME,r);let[n]=eY(e,{kind:m.METADATA,label:"thumbnails"});if(!(n&&n.cues))return;if(null===r){i.propagateMediaState(u.MEDIA_PREVIEW_IMAGE,void 0),i.propagateMediaState(u.MEDIA_PREVIEW_COORDS,void 0);return}let o=Array.prototype.find.call(n.cues,e=>e.startTime>=r);if(!o)return;let s=/'^(?:[a-z]+:)?\/\//i.test(o.text)?void 0:null==(a=e.querySelector('track[label="thumbnails"]'))?void 0:a.src,l=new URL(o.text,s),d=new URLSearchParams(l.hash).get("#xywh");i.propagateMediaState(u.MEDIA_PREVIEW_IMAGE,l.href),i.propagateMediaState(u.MEDIA_PREVIEW_COORDS,d.split(","))},MEDIA_SHOW_SUBTITLES_REQUEST:(e,t,i)=>{var a;let r=e3(i),{detail:n=[]}=t,o=eq(n),s=null==(a=o[0])?void 0:a.language;!s||(null==i?void 0:i.hasAttribute("nosubtitleslangpref"))||Z.localStorage.setItem("media-chrome-pref-subtitles-lang",s),eK(p.SHOWING,r,o)},MEDIA_DISABLE_SUBTITLES_REQUEST:(e,t,i)=>{let a=e3(i),{detail:r=[]}=t;eK(p.DISABLED,a,r)},MEDIA_TOGGLE_SUBTITLES_REQUEST:(e,t,i)=>{let{detail:a}=null!=t?t:{},r=e3(i),n=e4(i),o=!!n.length;if(r.length&&(!o||!a)&&(o||!1!==a)){if(o)eK(p.DISABLED,r,n);else{let e=r[0];if(!(null==i?void 0:i.hasAttribute("nosubtitleslangpref"))){let t=Z.localStorage.getItem("media-chrome-pref-subtitles-lang"),i=t?[t,...Z.navigator.languages]:Z.navigator.languages,a=r.filter(e=>i.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>{let a=i.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0])),r=i.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0]));return a-r});a[0]&&(e=a[0])}let{language:t,label:a,kind:n}=e;eK(p.SHOWING,r,[{language:t,label:a,kind:n}])}}},MEDIA_AIRPLAY_REQUEST:e=>{if(e){if(!(e.webkitShowPlaybackTargetPicker&&Z.WebKitPlaybackTargetAvailabilityEvent)){console.warn("received a request to select AirPlay but AirPlay is not supported in this environment");return}e.webkitShowPlaybackTargetPicker()}},MEDIA_SEEK_TO_LIVE_REQUEST:e=>{let t=e.seekable;if(!t){console.warn("MediaController: Media element does not support seeking to live.");return}if(!t.length){console.warn("MediaController: Media is unable to seek to live.");return}e.currentTime=t.end(t.length-1)},MEDIA_RENDITION_REQUEST:(e,t)=>{if(!(null==e?void 0:e.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let i=t.detail,a=[...e.videoRenditions].findIndex(e=>e.id==i);e.videoRenditions.selectedIndex!=a&&(e.videoRenditions.selectedIndex=a)},MEDIA_AUDIO_TRACK_REQUEST:(e,t)=>{if(!(null==e?void 0:e.audioTracks)){console.warn("MediaController: Audio track selection not supported by this media.");return}let i=t.detail;for(let t of e.audioTracks)t.enabled=i==t.id}};var e6=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},e9=(e,t,i)=>(e6(e,t,"read from private field"),i?i.call(e):t.get(e)),te=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tt=(e,t,i,a)=>(e6(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ti=(e,t,i)=>(e6(e,t,"access private method"),i);let ta=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],tr={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",NO_HOTKEYS:"nohotkeys"};class tn extends eC{constructor(){super(),te(this,rX),te(this,r0),te(this,rZ,new eU(this,tr.HOTKEYS)),te(this,rQ,void 0),te(this,rz,void 0),void 0===e7.MEDIA_VOLUME_UNAVAILABLE.get(this)&&e2.then(()=>{this.propagateMediaState(u.MEDIA_VOLUME_UNAVAILABLE,e7.MEDIA_VOLUME_UNAVAILABLE.get(this))}),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,this.associateElement(this),Object.keys(e8).forEach(e=>{let t=`_handle${T(e,!0)}`;this[t]=t=>{if(t.stopPropagation(),!this.media){console.warn("MediaController: No media available.");return}e8[e](this.media,t,this)},this.addEventListener(o[e],this[t])}),this._mediaStatePropagators={},Object.keys(e7).forEach(e=>{this._mediaStatePropagators[e]=t=>{this.propagateMediaState(l[e],e7[e].get(this,t))}})}static get observedAttributes(){return super.observedAttributes.concat(tr.NO_HOTKEYS,tr.HOTKEYS,tr.DEFAULT_STREAM_TYPE,tr.DEFAULT_SUBTITLES,tr.DEFAULT_DURATION)}get fullscreenElement(){var e;return null!=(e=e9(this,rQ))?e:this}set fullscreenElement(e){this.hasAttribute(tr.FULLSCREEN_ELEMENT)&&this.removeAttribute(tr.FULLSCREEN_ELEMENT),tt(this,rQ,e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),e===tr.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(tr.HOTKEYS)&&console.warn("Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===tr.HOTKEYS)e9(this,rZ).value=i;else if(e===tr.DEFAULT_SUBTITLES&&i!==t&&""===i)this.dispatchEvent(new Z.CustomEvent(o.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:!0}));else if(e===tr.DEFAULT_STREAM_TYPE)this.propagateMediaState(l.MEDIA_STREAM_TYPE);else if(e===tr.FULLSCREEN_ELEMENT){let e=i?null==(a=e9(this,rz))?void 0:a.getElementById(i):void 0;tt(this,rQ,e)}}connectedCallback(){super.connectedCallback(),tt(this,rz,this.getRootNode()),this.enableHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this.disableHotkeys(),this.dispatchEvent(new Z.CustomEvent(o.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:!1}))}mediaSetCallback(e){if(super.mediaSetCallback(e),e.hasAttribute("tabindex")||(e.tabIndex=-1),Object.keys(e7).forEach(t=>{let{mediaEvents:i,rootEvents:a,textTracksEvents:r,videoRenditionsEvents:n,audioTracksEvents:o}=e7[t],s=this._mediaStatePropagators[t];null==i||i.forEach(t=>{e.addEventListener(t,s),s()}),null==a||a.forEach(e=>{var t;null==(t=e9(this,rz))||t.addEventListener(e,s),s()}),null==r||r.forEach(t=>{var i;null==(i=e.textTracks)||i.addEventListener(t,s),s()}),null==n||n.forEach(t=>{var i;null==(i=e.videoRenditions)||i.addEventListener(t,s),s()}),null==o||o.forEach(t=>{var i;null==(i=e.audioTracks)||i.addEventListener(t,s),s()})}),!this.hasAttribute("novolumepref"))try{let t=Z.localStorage.getItem("media-chrome-pref-volume");null!==t&&(e.volume=t)}catch(e){console.debug("Error getting volume pref",e)}}mediaUnsetCallback(e){super.mediaUnsetCallback(e),Object.keys(e7).forEach(t=>{let{mediaEvents:i,rootEvents:a,textTracksEvents:r,videoRenditionsEvents:n,audioTracksEvents:o}=e7[t],s=this._mediaStatePropagators[t];null==i||i.forEach(t=>{e.removeEventListener(t,s)}),null==a||a.forEach(e=>{var t;null==(t=e9(this,rz))||t.removeEventListener(e,s)}),null==r||r.forEach(t=>{var i;null==(i=e.textTracks)||i.removeEventListener(t,s)}),null==n||n.forEach(t=>{var i;null==(i=e.videoRenditions)||i.removeEventListener(t,s),s()}),null==o||o.forEach(t=>{var i;null==(i=e.audioTracks)||i.removeEventListener(t,s),s()})}),this.propagateMediaState(l.MEDIA_PAUSED,!0)}propagateMediaState(e,t){let i=tf(this.mediaStateReceivers,e);if(tb(this.mediaStateReceivers,e,t),i===tf(this.mediaStateReceivers,e))return;let a=e.toLowerCase(),r=new Z.CustomEvent(h[a],{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(r)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=this.registerMediaStateReceiver.bind(this),a=this.unregisterMediaStateReceiver.bind(this),r=tE(e,i,a);Object.keys(o).forEach(t=>{e.addEventListener(o[t],this[`_handle${T(t,!0)}`])}),t.set(e,r)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(!t.has(e))return;let i=t.get(e);i(),t.delete(e),Object.keys(o).forEach(t=>{e.removeEventListener(o[t],this[`_handle${T(t,!0)}`])})}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers,i=t.indexOf(e);i>-1||(t.push(e),Object.keys(e7).forEach(t=>{let i=e7[t];tb([e],l[t],i.get(this))}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",ti(this,r0,r1))}disableHotkeys(){this.removeEventListener("keydown",ti(this,r0,r1)),this.removeEventListener("keyup",ti(this,rX,rJ))}get hotkeys(){return e9(this,rZ)}keyboardShortcutHandler(e){var t,i,a,r;let n,s,l,d;let c=(null!=(r=null!=(a=null==(t=e.target.getAttribute(tr.KEYS_USED))?void 0:t.split(" "))?a:null==(i=e.target)?void 0:i.keysUsed)?r:[]).map(e=>"Space"===e?" ":e).filter(Boolean);if(!c.includes(e.key)&&!e9(this,rZ).contains(`no${e.key.toLowerCase()}`)&&!(" "===e.key&&e9(this,rZ).contains("nospace")))switch(e.key){case" ":case"k":n=null!=this.getAttribute(u.MEDIA_PAUSED)?o.MEDIA_PLAY_REQUEST:o.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new Z.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"m":n="off"===this.getAttribute(u.MEDIA_VOLUME_LEVEL)?o.MEDIA_UNMUTE_REQUEST:o.MEDIA_MUTE_REQUEST,this.dispatchEvent(new Z.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"f":n=null!=this.getAttribute(u.MEDIA_IS_FULLSCREEN)?o.MEDIA_EXIT_FULLSCREEN_REQUEST:o.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new Z.CustomEvent(n,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new Z.CustomEvent(o.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":l=Math.max(((s=this.getAttribute(u.MEDIA_CURRENT_TIME))&&!Number.isNaN(+s)?+s:0)-10,0),d=new Z.CustomEvent(o.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d);break;case"ArrowRight":l=Math.max(((s=this.getAttribute(u.MEDIA_CURRENT_TIME))&&!Number.isNaN(+s)?+s:0)+10,0),d=new Z.CustomEvent(o.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d)}}}rZ=new WeakMap,rQ=new WeakMap,rz=new WeakMap,rX=new WeakSet,rJ=function(e){let{key:t}=e;if(!ta.includes(t)){this.removeEventListener("keyup",ti(this,rX,rJ));return}this.keyboardShortcutHandler(e)},r0=new WeakSet,r1=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!ta.includes(a)){this.removeEventListener("keyup",ti(this,rX,rJ));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(e9(this,rZ).contains(`no${a.toLowerCase()}`)||" "===a&&e9(this,rZ).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",ti(this,rX,rJ),{once:!0})};let to=Object.values(u),ts=Object.values(l),tl=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(Z.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let o=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,s.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||o)?(n||o).filter(e=>to.includes(e)):[]},td=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&Z.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof Z.customElements.get(e.nodeName.toLowerCase()))&&Z.customElements.upgrade(e),ts.some(t=>t in e)},tu=e=>td(e)||!!tl(e).length,tc=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},th={[u.MEDIA_SUBTITLES_LIST]:eF,[u.MEDIA_SUBTITLES_SHOWING]:eF,[u.MEDIA_SEEKABLE]:tc,[u.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(tc).join(" "),[u.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[u.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(y).join(" ")},[u.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(A).join(" ")}},tm=async(e,t,i)=>{var a,r;if(e.isConnected||await I(0),"boolean"==typeof i||null==i)return q(e,t,i);if("number"==typeof i)return W(e,t,i);if("string"==typeof i)return F(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=th[t])?void 0:a.call(th,i))?r:i;return e.setAttribute(t,n)},tp=e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))},tv=(e,t)=>{if(tp(e))return;let i=(e,t)=>{var i,a;tu(e)&&t(e);let{children:r=[]}=null!=e?e:{},n=null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[],o=[...r,...n];o.forEach(e=>tv(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!tu(e)){Z.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},tb=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=tl(e),r=t.toLowerCase();a.includes(r)&&tm(e,r,i)})},tf=(e,t)=>{for(let i of e){if(t in i)return i[t];let e=tl(i),a=t.toLowerCase();if(e.includes(a))return i.getAttribute(a)}},tE=(e,t,i)=>{tv(e,t);let a=e=>{var i;let a=null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target;t(a)},r=e=>{var t;let a=null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target;i(a)};e.addEventListener(o.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(o.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],l=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>tv(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>tv(e,t)))};e.addEventListener("slotchange",l);let d=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:o,attributeName:l}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>tv(e,t)),Array.prototype.forEach.call(r,e=>tv(e,i))):"attributes"===n&&l===s.MEDIA_CHROME_ATTRIBUTES&&(tu(o)?t(o):i(o))})});return d.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{tv(e,i),e.removeEventListener("slotchange",l),d.disconnect(),e.removeEventListener(o.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(o.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};Z.customElements.get("media-controller")||Z.customElements.define("media-controller",tn);var tg=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ty=(e,t,i)=>(tg(e,t,"read from private field"),i?i.call(e):t.get(e)),t_=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tA=(e,t,i,a)=>(tg(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tk=(e,t,i)=>(tg(e,t,"access private method"),i);let tT=Q.createElement("template");tT.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; 
      z-index: 1; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
    }

    #background,
    #track {
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #background {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      backdrop-filter: var(--media-range-track-background-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-background-backdrop-filter);
    }

    #track {
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      overflow: hidden;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      border-radius: var(--media-range-track-border-radius, 1px);
      transition: var(--media-range-track-transition);
      position: absolute;
      height: 100%;
    }

    #highlight {
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      height: 100%;
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      border-radius: var(--media-range-track-border-radius, 1px);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
      position: absolute;
      height: 100%;
    }

    :host(:hover) #pointer {
      transition: visibility .5s, opacity .5s;
      visibility: visible;
      opacity: 1;
    }

    #thumb {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      margin-left: calc(var(--media-range-thumb-width, 10px) / -2);
      border: var(--media-range-thumb-border, none);
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance">
      <div id="background"></div>
      <div id="track">
        <div id="highlight"></div>
        <div id="pointer"></div>
        <div id="progress"></div>
      </div>
      <div id="thumb"></div>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;class tw extends Z.HTMLElement{constructor(){super(),t_(this,r6),t_(this,ne),t_(this,ni),t_(this,nr),t_(this,no),t_(this,nl),t_(this,nu),t_(this,r2,void 0),t_(this,r5,void 0),t_(this,r3,void 0),t_(this,r4,void 0),t_(this,r7,()=>{if(this.range.matches(":focus-visible")){let{style:e}=U(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),t_(this,r8,()=>{let{style:e}=U(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tT.content.cloneNode(!0)));let{style:e}=U(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.container=this.shadowRoot.querySelector("#container"),tA(this,r3,this.shadowRoot.querySelector("#startpoint")),tA(this,r4,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range")}static get observedAttributes(){return["disabled","aria-disabled",s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=ty(this,r2))?void 0:a.unassociateElement)||r.call(a,this),tA(this,r2,null)),i&&this.isConnected&&(tA(this,r2,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ty(this,r2))?void 0:o.associateElement)||l.call(o,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),tk(this,r6,r9).call(this)):(this.range.setAttribute(e,i),tk(this,ne,nt).call(this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(tA(this,r2,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=ty(this,r2))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",ty(this,r7)),this.shadowRoot.addEventListener("focusout",ty(this,r8)),tk(this,r6,r9).call(this)}disconnectedCallback(){var e,t;tk(this,ne,nt).call(this),null==(t=null==(e=ty(this,r2))?void 0:e.unassociateElement)||t.call(e,this),tA(this,r2,null),this.shadowRoot.removeEventListener("focusin",ty(this,r7)),this.shadowRoot.removeEventListener("focusout",ty(this,r8))}updatePointerBar(e){let t=this.range.getBoundingClientRect(),i=(e.clientX-t.left)/t.width;i=100*Math.max(0,Math.min(1,i));let{style:a}=U(this.shadowRoot,"#pointer");a.setProperty("width",`${i}%`)}updateBar(){let e=100*this.range.valueAsNumber,t=U(this.shadowRoot,"#progress"),i=U(this.shadowRoot,"#thumb");t.style.setProperty("width",`${e}%`),i.style.setProperty("left",`${e}%`)}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"input":this.updateBar();break;case"pointerenter":tk(this,nr,nn).call(this,e);break;case"pointerdown":tk(this,ni,na).call(this,e);break;case"pointermove":tk(this,nu,nc).call(this,e);break;case"pointerup":tk(this,no,ns).call(this);break;case"pointerleave":tk(this,nl,nd).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}r2=new WeakMap,r5=new WeakMap,r3=new WeakMap,r4=new WeakMap,r7=new WeakMap,r8=new WeakMap,r6=new WeakSet,r9=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},ne=new WeakSet,nt=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=Z.window)||e.removeEventListener("pointerup",this),null==(t=Z.window)||t.removeEventListener("pointermove",this)},ni=new WeakSet,na=function(e){var t;tA(this,r5,e.composedPath().includes(this.range)),null==(t=Z.window)||t.addEventListener("pointerup",this)},nr=new WeakSet,nn=function(e){var t;"mouse"!==e.pointerType&&tk(this,ni,na).call(this,e),this.addEventListener("pointerleave",this),null==(t=Z.window)||t.addEventListener("pointermove",this)},no=new WeakSet,ns=function(){var e;null==(e=Z.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},nl=new WeakSet,nd=function(){var e;this.removeEventListener("pointerleave",this),null==(e=Z.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},nu=new WeakSet,nc=function(e){if(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),this.dragging&&("mouse"!==e.pointerType||!ty(this,r5))){this.range.disabled=!0;let t=function(e,t,i,a){let r=P(i,a),n=P(i,{x:e,y:t}),o=P(a,{x:e,y:t});return n>r||o>r?n>o?1:0:n/r}(e.clientX,e.clientY,ty(this,r3).getBoundingClientRect(),ty(this,r4).getBoundingClientRect());t=Math.max(0,Math.min(1,t)),this.range.valueAsNumber=t,this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}},Z.customElements.get("media-chrome-range")||Z.customElements.define("media-chrome-range",tw);var tI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tS=(e,t,i)=>(tI(e,t,"read from private field"),i?i.call(e):t.get(e)),tD=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tR=(e,t,i,a)=>(tI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let tL=Q.createElement("template");tL.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }
  </style>

  <slot></slot>
`;class tM extends Z.HTMLElement{constructor(){super(),tD(this,nh,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tL.content.cloneNode(!0)))}static get observedAttributes(){return[s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=tS(this,nh))?void 0:a.unassociateElement)||r.call(a,this),tR(this,nh,null)),i&&this.isConnected&&(tR(this,nh,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=tS(this,nh))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(tR(this,nh,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=tS(this,nh))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=tS(this,nh))?void 0:e.unassociateElement)||t.call(e,this),tR(this,nh,null)}}nh=new WeakMap,Z.customElements.get("media-control-bar")||Z.customElements.define("media-control-bar",tM);var tC=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tO=(e,t,i)=>(tC(e,t,"read from private field"),i?i.call(e):t.get(e)),tx=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tN=(e,t,i,a)=>(tC(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let tP=Q.createElement("template");tP.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;class tU extends Z.HTMLElement{constructor(){super(),tx(this,nm,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tP.content.cloneNode(!0)));let{style:e}=U(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`)}static get observedAttributes(){return[s.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=tO(this,nm))?void 0:a.unassociateElement)||r.call(a,this),tN(this,nm,null)),i&&this.isConnected&&(tN(this,nm,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=tO(this,nm))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(tN(this,nm,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=tO(this,nm))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=tO(this,nm))?void 0:e.unassociateElement)||t.call(e,this),tN(this,nm,null)}}nm=new WeakMap,Z.customElements.get("media-text-display")||Z.customElements.define("media-text-display",tU);var tB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tW=(e,t,i)=>(tB(e,t,"read from private field"),i?i.call(e):t.get(e)),tV=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tq=(e,t,i,a)=>(tB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);np=new WeakMap,Z.customElements.get("media-duration-display")||Z.customElements.define("media-duration-display",class extends tU{constructor(){super(),tV(this,np,void 0),tq(this,np,this.shadowRoot.querySelector("slot")),tW(this,np).textContent=L(0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===u.MEDIA_DURATION&&(tW(this,np).textContent=L(i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return B(this,u.MEDIA_DURATION)}set mediaDuration(e){W(this,u.MEDIA_DURATION,e)}});var tH=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tF=(e,t,i)=>(tH(e,t,"read from private field"),i?i.call(e):t.get(e)),tj=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},t$=(e,t,i,a)=>(tH(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let tK={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},tY=[...Object.values(tK),u.MEDIA_CURRENT_TIME,u.MEDIA_DURATION,u.MEDIA_SEEKABLE],tG=["Enter"," "],tZ="&nbsp;/&nbsp;",tQ=(e,{timesSep:t=tZ}={})=>{var i,a,r,n;let o=e.hasAttribute(tK.REMAINING),s=e.hasAttribute(tK.SHOW_DURATION),l=null!=(i=e.mediaCurrentTime)?i:0,[,d]=null!=(a=e.mediaSeekable)?a:[],u=null!=(n=null!=(r=e.mediaDuration)?r:d)?n:0,c=o?L(0-(u-l)):L(l);return s?`${c}${t}${L(u)}`:c},tz=e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=e.mediaDuration||a;if(null==i||null==r){e.setAttribute("aria-valuetext","video not loaded, unknown time.");return}let n=e.hasAttribute(tK.REMAINING),o=e.hasAttribute(tK.SHOW_DURATION),s=n?R(0-(r-i)):R(i);if(!o){e.setAttribute("aria-valuetext",s);return}let l=R(r),d=`${s} of ${l}`;e.setAttribute("aria-valuetext",d)};nv=new WeakMap,Z.customElements.get("media-time-display")||Z.customElements.define("media-time-display",class extends tU{constructor(){super(),tj(this,nv,void 0),t$(this,nv,this.shadowRoot.querySelector("slot")),tF(this,nv).innerHTML=`${tQ(this)}`;let{style:e}=U(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","pointer"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))")}static get observedAttributes(){return[...super.observedAttributes,...tY,"disabled"]}connectedCallback(){this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",E.PLAYBACK_TIME());let e=t=>{let{key:i}=t;if(!tG.includes(i)){this.removeEventListener("keyup",e);return}this.toggleTimeDisplay()};this.addEventListener("keydown",t=>{let{metaKey:i,altKey:a,key:r}=t;if(i||a||!tG.includes(r)){this.removeEventListener("keyup",e);return}this.addEventListener("keyup",e)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){tY.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return V(this,tK.REMAINING)}set remaining(e){q(this,tK.REMAINING,e)}get showDuration(){return V(this,tK.SHOW_DURATION)}set showDuration(e){q(this,tK.SHOW_DURATION,e)}get noToggle(){return V(this,tK.NO_TOGGLE)}set noToggle(e){q(this,tK.NO_TOGGLE,e)}get mediaDuration(){return B(this,u.MEDIA_DURATION)}set mediaDuration(e){W(this,u.MEDIA_DURATION,e)}get mediaCurrentTime(){return B(this,u.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){W(this,u.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(u.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(u.MEDIA_SEEKABLE);return}this.setAttribute(u.MEDIA_SEEKABLE,e.join(":"))}update(){let e=tQ(this);tz(this),e!==tF(this,nv).innerHTML&&(tF(this,nv).innerHTML=e)}});let tX=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,tJ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,t0=Q.createElement("template");t0.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on">${tX}</slot>
    <slot name="off">${tJ}</slot>
  </slot>
`;let t1=e=>{e.setAttribute("aria-checked",eG(e))},t2=(e,t)=>{let i=e.getAttribute(t);return i?eV(i):[]},t5=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=eF(i),r=e.getAttribute(t);r!==a&&e.setAttribute(t,a)};Z.customElements.get("media-captions-button")||Z.customElements.define("media-captions-button",class extends en{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_SUBTITLES_LIST,u.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:t0,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",E.CLOSED_CAPTIONS()),t1(this)}attributeChangedCallback(e,t,i){e===u.MEDIA_SUBTITLES_SHOWING&&t1(this),super.attributeChangedCallback(e,t,i)}get mediaSubtitlesList(){return t2(this,u.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){t5(this,u.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return t2(this,u.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){t5(this,u.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new Z.CustomEvent(o.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}});let t3={SEEK_OFFSET:"seekoffset"},t4=Q.createElement("template");t4.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>
`,Z.customElements.get("media-seek-forward-button")||Z.customElements.define("media-seek-forward-button",class extends en{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_CURRENT_TIME,t3.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:t4,...e})}connectedCallback(){this.seekOffset=B(this,t3.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===t3.SEEK_OFFSET&&(this.seekOffset=B(this,t3.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return B(this,t3.SEEK_OFFSET,30)}set seekOffset(e){W(this,t3.SEEK_OFFSET,e),this.setAttribute("aria-label",g.SEEK_FORWARD_N_SECS({seekOffset:this.seekOffset})),M(O(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return B(this,u.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){W(this,u.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new Z.CustomEvent(o.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}});let t7=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,t8=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,t6=Q.createElement("template");t6.innerHTML=`
  <style>
  :host([${u.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${u.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${t7}</slot>
    <slot name="exit">${t8}</slot>
  </slot>
`;let t9=e=>{let t=e.mediaIsFullscreen?g.EXIT_FULLSCREEN():g.ENTER_FULLSCREEN();e.setAttribute("aria-label",t)};Z.customElements.get("media-fullscreen-button")||Z.customElements.define("media-fullscreen-button",class extends en{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_IS_FULLSCREEN,u.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:t6,...e})}connectedCallback(){t9(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===u.MEDIA_IS_FULLSCREEN&&t9(this),super.attributeChangedCallback(e,t,i)}get mediaFullscreenUnavailable(){return H(this,u.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){F(this,u.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return V(this,u.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){q(this,u.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?o.MEDIA_EXIT_FULLSCREEN_REQUEST:o.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new Z.CustomEvent(e,{composed:!0,bubbles:!0}))}});let{MEDIA_TIME_IS_LIVE:ie,MEDIA_PAUSED:it}=u,{MEDIA_SEEK_TO_LIVE_REQUEST:ii,MEDIA_PLAY_REQUEST:ia}=o,ir=Q.createElement("template");ir.innerHTML=`
  <style>

  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${ie}]:not([${it}])) slot[name=indicator] > *,
  :host([${ie}]:not([${it}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${ie}]:not([${it}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;let io=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?g.SEEK_LIVE():g.PLAYING_LIVE();e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};Z.customElements.get("media-live-button")||Z.customElements.define("media-live-button",class extends en{static get observedAttributes(){return[...super.observedAttributes,it,ie]}constructor(e={}){super({slotTemplate:ir,...e})}connectedCallback(){io(this),super.connectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),io(this)}get mediaPaused(){return V(this,u.MEDIA_PAUSED)}set mediaPaused(e){q(this,u.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return V(this,u.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){q(this,u.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new Z.CustomEvent(ii,{composed:!0,bubbles:!0})),this.hasAttribute(it)&&this.dispatchEvent(new Z.CustomEvent(ia,{composed:!0,bubbles:!0})))}});let{MEDIA_VOLUME_LEVEL:is}=u,il=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,id=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,iu=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,ic=Q.createElement("template");ic.innerHTML=`
  <style>
  
  :host(:not([${is}])) slot:not([name=high]):not([name=icon]), 
  :host([${is}=high]) slot:not([name=high]):not([name=icon]) {
    display: none !important;
  }

  :host([${is}=off]) slot:not([name=off]):not([name=icon]) {
    display: none !important;
  }

  :host([${is}=low]) slot:not([name=low]):not([name=icon]) {
    display: none !important;
  }

  :host([${is}=medium]) slot:not([name=medium]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="off">${il}</slot>
    <slot name="low">${id}</slot>
    <slot name="medium">${id}</slot>
    <slot name="high">${iu}</slot>
  </slot>
`;let ih=e=>{let t="off"===e.mediaVolumeLevel,i=t?g.UNMUTE():g.MUTE();e.setAttribute("aria-label",i)};Z.customElements.get("media-mute-button")||Z.customElements.define("media-mute-button",class extends en{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:ic,...e})}connectedCallback(){ih(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===u.MEDIA_VOLUME_LEVEL&&ih(this),super.attributeChangedCallback(e,t,i)}get mediaVolumeLevel(){return H(this,u.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){F(this,u.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?o.MEDIA_UNMUTE_REQUEST:o.MEDIA_MUTE_REQUEST;this.dispatchEvent(new Z.CustomEvent(e,{composed:!0,bubbles:!0}))}});let im=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,ip=Q.createElement("template");ip.innerHTML=`
  <style>
  :host([${u.MEDIA_IS_PIP}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${u.MEDIA_IS_PIP}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${im}</slot>
    <slot name="exit">${im}</slot>
  </slot>
`;let iv=e=>{let t=e.mediaIsPip?g.EXIT_PIP():g.ENTER_PIP();e.setAttribute("aria-label",t)};Z.customElements.get("media-pip-button")||Z.customElements.define("media-pip-button",class extends en{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_IS_PIP,u.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:ip,...e})}connectedCallback(){iv(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===u.MEDIA_IS_PIP&&iv(this),super.attributeChangedCallback(e,t,i)}get mediaPipUnavailable(){return H(this,u.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){F(this,u.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return V(this,u.MEDIA_IS_PIP)}set mediaIsPip(e){q(this,u.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?o.MEDIA_EXIT_PIP_REQUEST:o.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new Z.CustomEvent(e,{composed:!0,bubbles:!0}))}});let ib=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,iE=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,ig=Q.createElement("template");ig.innerHTML=`
  <style>
  :host([${u.MEDIA_PAUSED}]) slot[name=pause] {
    display: none !important;
  }

  :host(:not([${u.MEDIA_PAUSED}])) slot[name=play] {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="play">${ib}</slot>
    <slot name="pause">${iE}</slot>
  </slot>
`;let iy=e=>{let t=e.mediaPaused?g.PLAY():g.PAUSE();e.setAttribute("aria-label",t)};Z.customElements.get("media-play-button")||Z.customElements.define("media-play-button",class extends en{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PAUSED,u.MEDIA_ENDED]}constructor(e={}){super({slotTemplate:ig,...e})}connectedCallback(){iy(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===u.MEDIA_PAUSED&&iy(this),super.attributeChangedCallback(e,t,i)}get mediaPaused(){return V(this,u.MEDIA_PAUSED)}set mediaPaused(e){q(this,u.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?o.MEDIA_PLAY_REQUEST:o.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new Z.CustomEvent(e,{composed:!0,bubbles:!0}))}});var i_=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iA=(e,t,i)=>(i_(e,t,"read from private field"),i?i.call(e):t.get(e)),ik=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let iT={RATES:"rates"},iw=[1,1.2,1.5,1.7,2],iI=Q.createElement("template");iI.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-control-padding, 10px 5px);
    }
  </style>
  <span id="container"></span>
`,nb=new WeakMap,Z.customElements.get("media-playback-rate-button")||Z.customElements.define("media-playback-rate-button",class extends en{constructor(e={}){super({slotTemplate:iI,...e}),ik(this,nb,new eU(this,iT.RATES,{defaultValue:iw})),this.container=this.shadowRoot.querySelector("#container"),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PLAYBACK_RATE,iT.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===iT.RATES&&(iA(this,nb).value=i),e===u.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",E.PLAYBACK_RATE({playbackRate:t}))}}get rates(){return iA(this,nb)}set rates(e){e?Array.isArray(e)&&(iA(this,nb).value=e.join(" ")):iA(this,nb).value=""}get mediaPlaybackRate(){return B(this,u.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){W(this,u.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(this.rates.values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new Z.CustomEvent(o.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}});let iS={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},iD=Q.createElement("template");iD.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;let iR=e=>{e.style.removeProperty("background-image")},iL=(e,t)=>{e.style["background-image"]=`url('${t}')`};class iM extends Z.HTMLElement{static get observedAttributes(){return[iS.PLACEHOLDER_SRC,iS.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(iD.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===iS.SRC&&(null==i?this.image.removeAttribute(iS.SRC):this.image.setAttribute(iS.SRC,i)),e===iS.PLACEHOLDER_SRC&&(null==i?iR(this.image):iL(this.image,i))}get placeholderSrc(){return H(this,iS.PLACEHOLDER_SRC)}set placeholderSrc(e){F(this,iS.SRC,e)}get src(){return H(this,iS.SRC)}set src(e){F(this,iS.SRC,e)}}Z.customElements.get("media-poster-image")||Z.customElements.define("media-poster-image",iM);let iC={SEEK_OFFSET:"seekoffset"},iO=Q.createElement("template");iO.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>
`,Z.customElements.get("media-seek-backward-button")||Z.customElements.define("media-seek-backward-button",class extends en{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_CURRENT_TIME,iC.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:iO,...e})}connectedCallback(){this.seekOffset=B(this,iC.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===iC.SEEK_OFFSET&&(this.seekOffset=B(this,iC.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return B(this,iC.SEEK_OFFSET,30)}set seekOffset(e){W(this,iC.SEEK_OFFSET,e),this.setAttribute("aria-label",g.SEEK_BACK_N_SECS({seekOffset:this.seekOffset})),M(O(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return B(this,u.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){W(this,u.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new Z.CustomEvent(o.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}});var ix=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iN=(e,t,i)=>(ix(e,t,"read from private field"),i?i.call(e):t.get(e)),iP=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iU=(e,t,i,a)=>(ix(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);nf=new WeakMap,Z.customElements.get("media-preview-time-display")||Z.customElements.define("media-preview-time-display",class extends tU{constructor(){super(),iP(this,nf,void 0),iU(this,nf,this.shadowRoot.querySelector("slot")),iN(this,nf).textContent=L(0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){e===u.MEDIA_PREVIEW_TIME&&null!=i&&(iN(this,nf).textContent=L(i)),super.attributeChangedCallback(e,t,i)}get mediaPreviewTime(){return B(this,u.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){W(this,u.MEDIA_PREVIEW_TIME,e)}});var iB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iW=(e,t,i)=>(iB(e,t,"read from private field"),i?i.call(e):t.get(e)),iV=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iq=(e,t,i,a)=>(iB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let iH=Q.createElement("template");iH.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;class iF extends Z.HTMLElement{constructor(){super(),iV(this,nE,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(iH.content.cloneNode(!0)))}static get observedAttributes(){return[s.MEDIA_CONTROLLER,u.MEDIA_PREVIEW_IMAGE,u.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(iq(this,nE,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=iW(this,nE))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=iW(this,nE))?void 0:e.unassociateElement)||t.call(e,this),iq(this,nE,null)}attributeChangedCallback(e,t,i){var a,r,n,o,l;[u.MEDIA_PREVIEW_IMAGE,u.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=iW(this,nE))?void 0:a.unassociateElement)||r.call(a,this),iq(this,nE,null)),i&&this.isConnected&&(iq(this,nE,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=iW(this,nE))?void 0:o.associateElement)||l.call(o,this)))}get mediaPreviewImage(){return H(this,u.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){F(this,u.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(u.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(u.MEDIA_PREVIEW_COORDS);return}this.setAttribute(u.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,o=t.split("#")[0],s=getComputedStyle(this),{maxWidth:l,maxHeight:d,minWidth:u,minHeight:c}=s,h=Math.min(parseInt(l)/r,parseInt(d)/n),m=Math.max(parseInt(u)/r,parseInt(c)/n),p=h<1,v=p?h:m>1?m:1,{style:b}=U(this.shadowRoot,":host"),f=U(this.shadowRoot,"img").style,E=this.shadowRoot.querySelector("img"),g=p?"min":"max";b.setProperty(`${g}-width`,"initial","important"),b.setProperty(`${g}-height`,"initial","important"),b.width=`${r*v}px`,b.height=`${n*v}px`;let y=()=>{f.width=`${this.imgWidth*v}px`,f.height=`${this.imgHeight*v}px`,f.display="block"};E.src!==o&&(E.onload=()=>{this.imgWidth=E.naturalWidth,this.imgHeight=E.naturalHeight,y()},E.src=o,y()),y(),f.transform=`translate(-${i*v}px, -${a*v}px)`}}nE=new WeakMap,Z.customElements.get("media-preview-thumbnail")||Z.customElements.define("media-preview-thumbnail",iF);var ij=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},i$=(e,t,i)=>(ij(e,t,"read from private field"),i?i.call(e):t.get(e)),iK=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iY=(e,t,i,a)=>(ij(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),iG=(e,t,i,a)=>({set _(value){iY(e,t,value,i)},get _(){return i$(e,t,a)}});class iZ{constructor(e,t,i){iK(this,ng,void 0),iK(this,ny,void 0),iK(this,n_,void 0),iK(this,nA,void 0),iK(this,nk,void 0),iK(this,nT,void 0),iK(this,nw,void 0),iK(this,nI,void 0),iK(this,nS,0),iK(this,nD,(e=performance.now())=>{iY(this,nS,requestAnimationFrame(i$(this,nD))),iY(this,nA,performance.now()-i$(this,n_));let t=1e3/this.fps;if(i$(this,nA)>t){iY(this,n_,e-i$(this,nA)%t);let i=1e3/((e-i$(this,ny))/++iG(this,nk)._),a=(e-i$(this,nT))/1e3/this.duration,r=i$(this,nw)+a*this.playbackRate,n=r-i$(this,ng).valueAsNumber;n>0?iY(this,nI,this.playbackRate/this.duration/i):(iY(this,nI,.995*i$(this,nI)),r=i$(this,ng).valueAsNumber+i$(this,nI)),this.callback(r)}}),iY(this,ng,e),this.callback=t,this.fps=i}start(){0===i$(this,nS)&&(iY(this,n_,performance.now()),iY(this,ny,i$(this,n_)),iY(this,nk,0),i$(this,nD).call(this))}stop(){0!==i$(this,nS)&&(cancelAnimationFrame(i$(this,nS)),iY(this,nS,0))}update({start:e,duration:t,playbackRate:i}){let a=e-i$(this,ng).valueAsNumber;(a>0||a<-.03)&&this.callback(e),iY(this,nw,e),iY(this,nT,performance.now()),this.duration=t,this.playbackRate=i}}ng=new WeakMap,ny=new WeakMap,n_=new WeakMap,nA=new WeakMap,nk=new WeakMap,nT=new WeakMap,nw=new WeakMap,nI=new WeakMap,nS=new WeakMap,nD=new WeakMap;var iQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},iz=(e,t,i)=>(iQ(e,t,"read from private field"),i?i.call(e):t.get(e)),iX=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iJ=(e,t,i,a)=>(iQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),i0=(e,t,i)=>(iQ(e,t,"access private method"),i);let i1=e=>{let t=e.range,i=R(+i3(e)),a=R(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)},i2=Q.createElement("template");i2.innerHTML=`
  <style>
    :host {
      --media-preview-border-radius: 3px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
    }

    #highlight {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
    }

    #preview-rail,
    #current-rail {
      
      width: 1%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
    }

    [part~="box"] {
      
      position: absolute;
      bottom: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="preview-box"] {
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${u.MEDIA_PREVIEW_IMAGE}], [${u.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${u.MEDIA_PREVIEW_IMAGE}], [${u.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${u.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${u.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${u.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${u.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${u.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display) {
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 1px 10px 0);
      margin: var(--media-preview-time-margin, 0 0 10px);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${u.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${u.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      min-width: 100%;
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-time-display></media-preview-time-display>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;let i5=(e,t=e.mediaCurrentTime)=>{if(Number.isNaN(e.mediaSeekableEnd))return 0;let i=(t-e.mediaSeekableStart)/(e.mediaSeekableEnd-e.mediaSeekableStart);return Math.max(0,Math.min(i,1))},i3=(e,t=e.range.valueAsNumber)=>Number.isNaN(e.mediaSeekableEnd)?0:t*(e.mediaSeekableEnd-e.mediaSeekableStart)+e.mediaSeekableStart;nR=new WeakMap,nL=new WeakMap,nM=new WeakMap,nC=new WeakMap,nO=new WeakMap,nx=new WeakMap,nN=new WeakMap,nP=new WeakSet,nU=function(){i0(this,nB,nW).call(this)?iz(this,nL).start():iz(this,nL).stop()},nB=new WeakSet,nW=function(){return this.isConnected&&function(e,t=3){if(e.checkVisibility)return e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let i=e;for(;i&&t>0;){let e=getComputedStyle(i);if("0"===e.opacity||"hidden"===e.visibility||"none"===e.display)return!1;i=i.parentElement,t--}return!0}(this)&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded},nV=new WeakMap,nq=new WeakSet,nH=function(e,t){var i;let a=`${1e4*t}%`,r=e.offsetWidth;if(!r)return a;let n=null!=(i=this.getAttribute("bounds")?N(this,`#${this.getAttribute("bounds")}`):this.parentElement)?i:this,o=this.range.getBoundingClientRect(),s=n.getBoundingClientRect(),l=(iz(this,nx)-(o.left-s.left-r/2))/o.width*100,d=(s.right-o.left-r/2-iz(this,nN))/o.width*100;return Number.isNaN(l)||(a=`max(${100*l}%, ${a})`),Number.isNaN(d)||(a=`min(${a}, ${100*d}%)`),a},nF=new WeakSet,nj=function(e){let t=[...iz(this,nM)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this))){i0(this,n$,nK).call(this,null);return}let i=this.mediaDuration;if(!i)return;let a=this.range.getBoundingClientRect(),r=(e.clientX-a.left)/a.width;r=Math.max(0,Math.min(1,r));let n=i0(this,nq,nH).call(this,iz(this,nC),r),{style:o}=U(this.shadowRoot,"#preview-rail");o.transform=`translateX(${n})`,i0(this,n$,nK).call(this,r*i)},n$=new WeakSet,nK=function(e){this.dispatchEvent(new Z.CustomEvent(o.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},nY=new WeakSet,nG=function(){iz(this,nL).stop();let e=i3(this);this.dispatchEvent(new Z.CustomEvent(o.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},Z.customElements.get("media-time-range")||Z.customElements.define("media-time-range",class extends tw{constructor(){super(),iX(this,nP),iX(this,nB),iX(this,nq),iX(this,nF),iX(this,n$),iX(this,nY),iX(this,nR,void 0),iX(this,nL,void 0),iX(this,nM,void 0),iX(this,nC,void 0),iX(this,nO,void 0),iX(this,nx,void 0),iX(this,nN,void 0),iX(this,nV,e=>{this.dragging||(this.range.valueAsNumber=e,this.updateBar())}),this.container.appendChild(i2.content.cloneNode(!0)),iJ(this,nM,this.shadowRoot.querySelectorAll('[part~="box"]')),iJ(this,nC,this.shadowRoot.querySelector('[part~="preview-box"]')),iJ(this,nO,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);iJ(this,nx,parseInt(e.getPropertyValue("--media-box-padding-left"))),iJ(this,nN,parseInt(e.getPropertyValue("--media-box-padding-right"))),iJ(this,nL,new iZ(this.range,iz(this,nV),60))}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PAUSED,u.MEDIA_DURATION,u.MEDIA_SEEKABLE,u.MEDIA_CURRENT_TIME,u.MEDIA_PREVIEW_IMAGE,u.MEDIA_PREVIEW_TIME,u.MEDIA_BUFFERED,u.MEDIA_PLAYBACK_RATE,u.MEDIA_LOADING,u.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",E.SEEK()),i0(this,nP,nU).call(this),iJ(this,nR,this.getRootNode()),null==(e=iz(this,nR))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),i0(this,nP,nU).call(this),null==(e=iz(this,nR))||e.removeEventListener("transitionstart",this),iJ(this,nR,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===u.MEDIA_CURRENT_TIME||e===u.MEDIA_PAUSED||e===u.MEDIA_ENDED||e===u.MEDIA_LOADING||e===u.MEDIA_DURATION||e===u.MEDIA_SEEKABLE?(iz(this,nL).update({start:i5(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),i0(this,nP,nU).call(this),i1(this)):e===u.MEDIA_BUFFERED&&this.updateBufferedBar())}get mediaPaused(){return V(this,u.MEDIA_PAUSED)}set mediaPaused(e){q(this,u.MEDIA_PAUSED,e)}get mediaLoading(){return V(this,u.MEDIA_LOADING)}set mediaLoading(e){q(this,u.MEDIA_LOADING,e)}get mediaDuration(){return B(this,u.MEDIA_DURATION)}set mediaDuration(e){W(this,u.MEDIA_DURATION,e)}get mediaCurrentTime(){return B(this,u.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){W(this,u.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return B(this,u.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){W(this,u.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(u.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(u.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(u.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(u.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(u.MEDIA_SEEKABLE);return}this.setAttribute(u.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return H(this,u.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){F(this,u.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return B(this,u.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){W(this,u.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return V(this,u.MEDIA_ENDED)}set mediaEnded(e){q(this,u.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t;let i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=i5(this,r)}let{style:a}=U(this.shadowRoot,"#highlight");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!iz(this,nO).assignedElements().length)return;let e=i0(this,nq,nH).call(this,iz(this,nO),this.range.valueAsNumber),{style:t}=U(this.shadowRoot,"#current-rail");t.transform=`translateX(${e})`}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":i0(this,nY,nG).call(this);break;case"pointermove":i0(this,nF,nj).call(this,e);break;case"pointerup":case"pointerleave":i0(this,n$,nK).call(this,null);break;case"transitionstart":x(e.target,this)&&setTimeout(()=>i0(this,nP,nU).call(this),0)}}});var i4=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},i7=(e,t,i)=>(i4(e,t,"read from private field"),i?i.call(e):t.get(e)),i8=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},i6=(e,t,i,a)=>(i4(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let i9={LOADING_DELAY:"loadingdelay"},ae=Q.createElement("template"),at=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;ae.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${u.MEDIA_LOADING}]:not([${u.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${u.MEDIA_LOADING}]:not([${u.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${u.MEDIA_LOADING}]:not([${u.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${at}</slot>
<div id="status" role="status" aria-live="polite">${E.MEDIA_LOADING()}</div>
`;class ai extends Z.HTMLElement{constructor(){if(super(),i8(this,nZ,void 0),i8(this,nQ,500),i8(this,nz,void 0),!this.shadowRoot){let e=this.attachShadow({mode:"open"}),t=ae.content.cloneNode(!0);e.appendChild(t)}let{style:e}=U(this.shadowRoot,":host");i6(this,nz,e)}static get observedAttributes(){return[s.MEDIA_CONTROLLER,u.MEDIA_PAUSED,u.MEDIA_LOADING,i9.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===i9.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===s.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=i7(this,nZ))?void 0:a.unassociateElement)||r.call(a,this),i6(this,nZ,null)),i&&this.isConnected&&(i6(this,nZ,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=i7(this,nZ))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(i6(this,nZ,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=i7(this,nZ))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=i7(this,nZ))?void 0:e.unassociateElement)||t.call(e,this),i6(this,nZ,null)}get loadingDelay(){return i7(this,nQ)}set loadingDelay(e){i6(this,nQ,e),i7(this,nz).setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return V(this,u.MEDIA_PAUSED)}set mediaPaused(e){q(this,u.MEDIA_PAUSED,e)}get mediaLoading(){return V(this,u.MEDIA_LOADING)}set mediaLoading(e){q(this,u.MEDIA_LOADING,e)}}nZ=new WeakMap,nQ=new WeakMap,nz=new WeakMap,Z.customElements.get("media-loading-indicator")||Z.customElements.define("media-loading-indicator",ai);let aa=e=>e.mediaMuted?0:e.mediaVolume,ar=({value:e})=>`${Math.round(100*e)}%`;Z.customElements.get("media-volume-range")||Z.customElements.define("media-volume-range",class extends tw{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_VOLUME,u.MEDIA_MUTED,u.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new Z.CustomEvent(o.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",E.VOLUME())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===u.MEDIA_VOLUME||e===u.MEDIA_MUTED)&&(this.range.valueAsNumber=aa(this),this.range.setAttribute("aria-valuetext",ar(this.range)),this.updateBar())}get mediaVolume(){return B(this,u.MEDIA_VOLUME,1)}set mediaVolume(e){W(this,u.MEDIA_VOLUME,e)}get mediaMuted(){return V(this,u.MEDIA_MUTED)}set mediaMuted(e){q(this,u.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return H(this,u.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){F(this,u.MEDIA_VOLUME_UNAVAILABLE,e)}});var an=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ao=(e,t,i)=>(an(e,t,"read from private field"),i?i.call(e):t.get(e)),as=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},al=(e,t,i,a)=>(an(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ad=(e,t,i)=>(an(e,t,"access private method"),i);let au=`
<svg aria-hidden="true" viewBox="0 1 24 24" part="select-indicator indicator">
  <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
</svg>`;function ac(e,t,i){let a=Q.createElement("media-chrome-option");a.part.add("option"),a.value=t,a.selected=i;let r=Q.createElement("span");return r.textContent=e,a.append(r),a}function ah(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);return((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)?((i=i.cloneNode(!0)).removeAttribute("slot"),i):e.shadowRoot.querySelector(`[name="${t}"] > svg`).cloneNode(!0)}let am=Q.createElement("template");am.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 15px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-listbox-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
    border-radius: var(--media-listbox-border-radius);
    display: inline-flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
  }

  ::slotted([slot="header"]) {
    padding: .4em 1.4em;
    border-bottom: 1px solid rgb(255 255 255 / .25);
  }

  #container {
    gap: var(--media-listbox-gap);
    display: flex;
    flex-direction: var(--media-listbox-flex-direction, column);
    overflow: hidden auto;
    padding-block: .5em;
  }

  media-chrome-option {
    padding-inline: .7em 1.4em;
  }

  media-chrome-option > span {
    margin-inline: .5ch;
  }

  [part~="indicator"] {
    fill: var(--media-option-indicator-fill, var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
    height: var(--media-option-indicator-height, 1.25em);
    vertical-align: var(--media-option-indicator-vertical-align, text-top);
  }

  [part~="select-indicator"] {
    display: var(--media-option-select-indicator-display);
    visibility: hidden;
  }

  [aria-selected="true"] > [part~="select-indicator"] {
    visibility: visible;
  }
</style>
<style id="layout-row" media="width:0">

  ::slotted([slot="header"]) {
    padding: .4em .5em;
  }

  #container {
    gap: var(--media-listbox-gap, .25em);
    flex-direction: var(--media-listbox-flex-direction, row);
    padding-inline: .5em;
  }

  media-chrome-option {
    padding: .3em .24em;
  }

  media-chrome-option[aria-selected="true"] {
    background: var(--media-option-selected-background, rgb(255 255 255 / .2));
  }

  [part~="select-indicator"] {
    display: var(--media-option-select-indicator-display, none);
  }
</style>
<slot name="header"></slot>
<slot id="container"></slot>
<slot name="select-indicator" hidden>${au}</slot>
`;class ap extends Z.HTMLElement{constructor(e={}){super(),as(this,n5),as(this,n8),as(this,n9),as(this,ot),as(this,oa),as(this,on),as(this,nX,void 0),as(this,nJ,""),as(this,n0,null),as(this,n1,!1),as(this,n2,e=>{this.handleClick(e)}),as(this,n4,e=>{let{key:t}=e;if("Escape"===t){this.removeEventListener("keyup",ao(this,n4));return}if("Meta"===t){al(this,n1,!1);return}ad(this,n5,n3).call(this,e)}),as(this,n7,e=>{let{key:t,altKey:i}=e;if(i){this.removeEventListener("keyup",ao(this,n4));return}if("Meta"===t){al(this,n1,!0);return}if(this.keysUsed.includes(t)&&e.preventDefault(),ao(this,n1)&&this.keysUsed.includes(t)){ad(this,n5,n3).call(this,e);return}this.addEventListener("keyup",ao(this,n4),{once:!0})}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=am.content.cloneNode(!0),e.slotTemplate&&this.nativeEl.append(e.slotTemplate.content.cloneNode(!0)),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.container.addEventListener("slotchange",e=>{for(let t of e.target.assignedNodes({flatten:!0}))3===t.nodeType&&""===t.textContent.trim()&&t.remove()})}static get observedAttributes(){return["disabled","style",s.MEDIA_CONTROLLER]}static formatOptionText(e){return e}formatOptionText(e,t){return this.constructor.formatOptionText(e,t)}get options(){var e;let t=this.querySelectorAll("media-chrome-option");return t.length||(t=null==(e=this.container)?void 0:e.querySelectorAll("media-chrome-option")),Array.from(t)}get selectedOptions(){return this.options.filter(e=>e.selected)}get value(){var e,t;return null!=(t=null==(e=this.selectedOptions[0])?void 0:e.value)?t:""}set value(e){let t=this.options.find(t=>t.value===e);t&&ad(this,ot,oi).call(this,t)}focus(){var e;null==(e=this.selectedOptions[0])||e.focus()}enable(){this.addEventListener("click",ao(this,n2)),this.addEventListener("keydown",ao(this,n7))}disable(){this.removeEventListener("click",ao(this,n2)),this.removeEventListener("keyup",ao(this,n4))}attributeChangedCallback(e,t,i){var a,r,n,o,l;"style"===e&&i!==t?ad(this,n8,n6).call(this):e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=ao(this,nX))?void 0:a.unassociateElement)||r.call(a,this),al(this,nX,null)),i&&this.isConnected&&(al(this,nX,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=ao(this,nX))?void 0:o.associateElement)||l.call(o,this))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;ad(this,n8,n6).call(this),this.hasAttribute("disabled")||this.enable(),this.hasAttribute("role")||this.setAttribute("role","listbox");let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(al(this,nX,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=ao(this,nX))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=ao(this,nX))?void 0:e.unassociateElement)||t.call(e,this),al(this,nX,null)}get keysUsed(){return["Enter"," ","ArrowDown","ArrowUp","Home","End"]}handleSelection(e,t){let i=ad(this,n9,oe).call(this,e);i&&ad(this,ot,oi).call(this,i,t)}handleMovement(e){let t;let{key:i}=e,a=this.options,r=ad(this,n9,oe).call(this,e);switch(r||(r=a.filter(e=>"0"===e.getAttribute("tabindex"))[0]),i){case"ArrowDown":(null==(t=r.nextElementSibling)?void 0:t.hasAttribute("disabled"))&&(t=t.nextElementSibling);break;case"ArrowUp":(null==(t=r.previousElementSibling)?void 0:t.hasAttribute("disabled"))&&(t=t.previousElementSibling);break;case"Home":t=a[0];break;case"End":t=a[a.length-1];break;default:t=ad(this,oa,or).call(this,i)}t&&(a.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),t.focus())}handleClick(e){let t=ad(this,n9,oe).call(this,e);!t||t.hasAttribute("disabled")||(this.options.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this.handleSelection(e,this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")))}}nX=new WeakMap,nJ=new WeakMap,n0=new WeakMap,n1=new WeakMap,n2=new WeakMap,n5=new WeakSet,n3=function(e){let{key:t}=e;"Enter"===t||" "===t?this.handleSelection(e,this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")):this.handleMovement(e)},n4=new WeakMap,n7=new WeakMap,n8=new WeakSet,n6=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=(null==(e=getComputedStyle(this).getPropertyValue("--media-listbox-layout"))?void 0:e.trim())==="row";t.setAttribute("media",i?"":"width:0")},n9=new WeakSet,oe=function(e){let t=e.composedPath(),i=t.findIndex(e=>"MEDIA-CHROME-OPTION"===e.nodeName);return t[i]},ot=new WeakSet,oi=function(e,t){let i=[...this.selectedOptions];this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")||this.options.forEach(e=>e.selected=!1),t?e.selected=!e.selected:e.selected=!0,this.selectedOptions.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},oa=new WeakSet,or=function(e){ad(this,on,oo).call(this);let t=this.options,i=t.findIndex(e=>"0"===e.getAttribute("tabindex"));al(this,nJ,ao(this,nJ)+e);let a=ao(this,nJ).split("").every(t=>t===e),r=t.slice(i+(a?1:0)).filter(e=>e.textContent.toLowerCase().startsWith(ao(this,nJ))),n=t.slice(0,i-(a?1:0)).filter(e=>e.textContent.toLowerCase().startsWith(ao(this,nJ))),o=[],s=[];a&&(o=t.slice(i+(a?1:0)).filter(t=>t.textContent.startsWith(e)),s=t.slice(0,i-(a?1:0)).filter(t=>t.textContent.startsWith(e)));let l=[...r,...n,...o,...s];return l[0]},on=new WeakSet,oo=function(){clearTimeout(ao(this,n0)),al(this,n0,null),al(this,n0,setTimeout(()=>{al(this,nJ,""),al(this,n0,null)},500))},Z.customElements.get("media-chrome-listbox")||Z.customElements.define("media-chrome-listbox",ap);var av=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ab=(e,t,i)=>(av(e,t,"read from private field"),i?i.call(e):t.get(e)),af=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aE=(e,t,i,a)=>(av(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ag=(e,t,i)=>(av(e,t,"access private method"),i);let ay=Q.createElement("template");ay.innerHTML=`
<style>
  :host {
    cursor: pointer;
    display: block;
    line-height: revert;
    white-space: nowrap;
    white-space-collapse: collapse;
    text-wrap: nowrap;
    padding: .4em .5em;
    transition: var(--media-option-transition);
    outline: var(--media-option-outline, 0);
    outline-offset: var(--media-option-outline-offset, -1px);
  }

  :host(:focus-visible) {
    box-shadow: var(--media-option-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
    outline: var(--media-option-hover-outline, 0);
    outline-offset: var(--media-option-hover-outline-offset,  var(--media-option-outline-offset, -1px));
  }

  :host(:hover) {
    cursor: pointer;
    background: var(--media-option-hover-background, rgb(82 82 122 / .8));
    outline: var(--media-option-hover-outline);
    outline-offset: var(--media-option-hover-outline-offset,  var(--media-option-outline-offset, -1px));
  }

  :host([aria-selected="true"]) {
    background: var(--media-option-selected-background);
  }

  :host([disabled]) {
    pointer-events: none;
    color: rgba(255, 255, 255, .3);
  }
</style>
<slot></slot>
`;let a_={VALUE:"value",SELECTED:"selected",DISABLED:"disabled"};class aA extends Z.HTMLElement{constructor(){super(),af(this,od),af(this,os,!1),af(this,ol,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ay.content.cloneNode(!0)))}static get observedAttributes(){return[a_.DISABLED,a_.SELECTED,a_.VALUE]}get value(){var e;return null!=(e=this.getAttribute(a_.VALUE))?e:this.text}set value(e){this.setAttribute(a_.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get selected(){return"true"===this.getAttribute("aria-selected")}set selected(e){aE(this,os,!0),this.setAttribute("aria-selected",e?"true":"false"),e?this.part.add("option-selected"):this.part.remove("option-selected")}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex",-1),this.hasAttribute("aria-selected")||this.setAttribute("aria-selected","false")}disable(){this.removeAttribute("tabindex")}attributeChangedCallback(e,t,i){e!==a_.SELECTED||ab(this,os)?e===a_.DISABLED&&i!==t&&(null==i?this.enable():this.disable()):this.setAttribute("aria-selected",null!=i?"true":"false")}connectedCallback(){this.hasAttribute(a_.DISABLED)||this.enable(),this.setAttribute("role","option"),aE(this,ol,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.options)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),ag(this,od,ou).call(this)}disconnectedCallback(){this.disable(),ag(this,od,ou).call(this),aE(this,ol,null)}handleClick(){}}os=new WeakMap,ol=new WeakMap,od=new WeakSet,ou=function(){var e;let t=null==(e=ab(this,ol))?void 0:e.options;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-selected")).pop();i||(i=t[0]),"true"!==ab(this,ol).getAttribute("aria-multiselectable")&&t.forEach(e=>{e.setAttribute("tabindex","-1"),e.setAttribute("aria-selected","false")}),null==i||i.setAttribute("tabindex","0"),null==i||i.setAttribute("aria-selected","true")},Z.customElements.get("media-chrome-option")||Z.customElements.define("media-chrome-option",aA);var ak=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aT=(e,t,i)=>(ak(e,t,"read from private field"),i?i.call(e):t.get(e)),aw=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aI=(e,t,i,a)=>(ak(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aS=(e,t,i)=>(ak(e,t,"access private method"),i);let aD=Q.createElement("template");aD.innerHTML=`
  <style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 15px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    display: inline-flex;
    position: relative;
    flex-shrink: .5;
  }

  [name=listbox]::slotted(*),
  [part=listbox] {
    position: absolute;
    bottom: 100%;
    max-height: 300px;
    transition: var(--media-selectmenu-transition-in,
      visibility 0s, transform .15s ease-out, opacity .15s ease-out);
    transform: var(--media-listbox-transform-in, translateY(0) scale(1));
    visibility: visible;
    opacity: 1;
  }

  [name=listbox][hidden]::slotted(*),
  [hidden] [part=listbox] {
    transition: var(--media-selectmenu-transition-out,
      visibility .15s ease-out, transform .15s ease-out, opacity .15s ease-out);
    transform: var(--media-listbox-transform-out, translateY(2px) scale(.99));
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }

  slot[name=listbox][hidden] {
    display: block;
  }
  </style>

  <slot name="button">
    <media-chrome-button aria-haspopup="listbox" part="button">
      <slot name="button-content"></slot>
    </media-chrome-button>
  </slot>
  <slot name="listbox" hidden>
    <media-chrome-listbox id="listbox" part="listbox">
      <slot></slot>
    </media-chrome-listbox>
  </slot>
`;class aR extends Z.HTMLElement{constructor(){var e;super(),aw(this,o_),aw(this,ok),aw(this,ow),aw(this,oc,void 0),aw(this,oh,void 0),aw(this,om,void 0),aw(this,op,void 0),aw(this,ov,void 0),aw(this,ob,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",aT(this,ob));return}let i=e.composedPath().includes(aT(this,oh));i&&("Enter"===t||" "===t)?aS(this,o_,oA).call(this):"Escape"===t&&aS(this,ow,oI).call(this)}),aw(this,of,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",aT(this,ob));return}e.preventDefault(),this.addEventListener("keyup",aT(this,ob),{once:!0})}),aw(this,oE,e=>{e.composedPath().includes(this)||aS(this,ow,oI).call(this)}),aw(this,og,e=>{e.composedPath().includes(aT(this,oh))&&aS(this,o_,oA).call(this)}),aw(this,oy,()=>{aS(this,ow,oI).call(this)}),aw(this,oS,()=>{if(0===aT(this,op).offsetWidth)return;let e=aT(this,op).offsetWidth,t=aT(this,oh).getBoundingClientRect();if(this.hasAttribute("mediacontroller")||aT(this,oh).hasAttribute("mediacontroller")||aT(this,op).hasAttribute("mediacontroller")){aT(this,op).style.zIndex="1",aT(this,op).style.bottom="unset",aT(this,op).style.right=null,aT(this,op).style.left="0",aT(this,op).style.top=`${t.height}px`;return}let i=aL(this),a=i.getBoundingClientRect(),r=t.x+e,n=Math.max(t.right-r,t.right-a.right);aT(this,op).style.left=null,aT(this,op).style.right=`${n}px`,aT(this,op).style.maxHeight=`${a.height-t.height}px`}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(aD.content.cloneNode(!0)));let{style:t}=U(this.shadowRoot,":host");t.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),null==(e=this.init)||e.call(this),aI(this,oh,this.shadowRoot.querySelector("[part=button]")),aI(this,op,this.shadowRoot.querySelector("[part=listbox]")),aI(this,om,this.shadowRoot.querySelector("slot[name=button]")),aT(this,om).addEventListener("slotchange",()=>{let e=aT(this,om).assignedElements()[0];if(!e)return;aI(this,oh,e),aT(this,oh).preventClick=!0;let t=this.hasAttribute("disabled")||aT(this,oh).hasAttribute("disabled");t?this.disable():(this.enable(),aT(this,oh).setAttribute("aria-haspopup","listbox"))}),aI(this,ov,this.shadowRoot.querySelector("slot[name=listbox]")),aT(this,ov).addEventListener("slotchange",()=>{aI(this,op,aT(this,ov).assignedElements()[0]||aT(this,op))})}static get observedAttributes(){return["disabled",s.MEDIA_CONTROLLER]}enable(){aT(this,oh).toggleAttribute("disabled",!1),this.addEventListener("change",aT(this,oy)),this.addEventListener("keydown",aT(this,of)),this.addEventListener("click",aT(this,og)),Q.addEventListener("click",aT(this,oE))}disable(){aT(this,oh).toggleAttribute("disabled",!0),this.removeEventListener("change",aT(this,oy)),this.removeEventListener("keydown",aT(this,of)),this.removeEventListener("keyup",aT(this,ob)),this.removeEventListener("click",aT(this,og)),Q.removeEventListener("click",aT(this,oE))}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===s.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=aT(this,oc))?void 0:a.unassociateElement)||r.call(a,this),aI(this,oc,null),aT(this,op).removeAttribute(s.MEDIA_CONTROLLER)),i&&this.isConnected&&(aI(this,oc,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(l=null==(o=aT(this,oc))?void 0:o.associateElement)||l.call(o,this),aT(this,op).setAttribute(s.MEDIA_CONTROLLER,i))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;let a=this.getAttribute(s.MEDIA_CONTROLLER);a&&(aI(this,oc,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=aT(this,oc))?void 0:t.associateElement)||i.call(t,this),aT(this,op).setAttribute(s.MEDIA_CONTROLLER,a)),this.hasAttribute("disabled")||this.enable(),aT(this,ov).hidden||eg(aL(this),aT(this,oS))}disconnectedCallback(){var e,t;ey(aL(this),aT(this,oS)),this.disable(),null==(t=null==(e=aT(this,oc))?void 0:e.unassociateElement)||t.call(e,this),aI(this,oc,null),aT(this,op).removeAttribute(s.MEDIA_CONTROLLER)}get keysUsed(){return["Enter","Escape"," ","ArrowUp","ArrowDown","f","c","k","m"]}}function aL(e){var t;return null!=(t=e.getAttribute("bounds")?N(e,`#${e.getAttribute("bounds")}`):function(e){var t;let i=e.getAttribute(s.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):N(e,"media-controller")}(e)||e.parentElement)?t:e}oc=new WeakMap,oh=new WeakMap,om=new WeakMap,op=new WeakMap,ov=new WeakMap,ob=new WeakMap,of=new WeakMap,oE=new WeakMap,og=new WeakMap,oy=new WeakMap,o_=new WeakSet,oA=function(){aT(this,ov).hidden?aS(this,ok,oT).call(this):aS(this,ow,oI).call(this)},ok=new WeakSet,oT=function(){aT(this,ov).hidden&&(aT(this,ov).hidden=!1,aT(this,oh).setAttribute("aria-expanded","true"),aT(this,oS).call(this),aT(this,op).focus(),eg(aL(this),aT(this,oS)))},ow=new WeakSet,oI=function(){if(aT(this,ov).hidden)return;ey(aL(this),aT(this,oS));let e=function e(t=document){var i;let a=null==t?void 0:t.activeElement;return a?null!=(i=e(a.shadowRoot))?i:a:null}();aT(this,ov).hidden=!0,aT(this,oh).setAttribute("aria-expanded","false"),x(aT(this,op),e)&&aT(this,oh).focus()},oS=new WeakMap,Z.customElements.get("media-chrome-selectmenu")||Z.customElements.define("media-chrome-selectmenu",aR);var aM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aC=(e,t,i)=>(aM(e,t,"read from private field"),i?i.call(e):t.get(e)),aO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ax=(e,t,i,a)=>(aM(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aN=(e,t,i)=>(aM(e,t,"access private method"),i);let aP=`
<svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,aU=Q.createElement("template");aU.innerHTML=`
  <slot name="captions-indicator" hidden>${aP}</slot>
`,oD=new WeakMap,oR=new WeakSet,oL=function(){var e;if(aC(this,oD)===JSON.stringify(this.mediaSubtitlesList))return;ax(this,oD,JSON.stringify(this.mediaSubtitlesList));let t=this.shadowRoot.querySelector("#container");t.textContent="";let i=!this.value,a=ac(this.formatOptionText("Off"),"off",i);a.prepend(ah(this,"select-indicator")),t.append(a);let r=this.mediaSubtitlesList;for(let i of r){let a=ac(this.formatOptionText(i.label,i),eH(i),this.value==eH(i));a.prepend(ah(this,"select-indicator"));let r=null!=(e=i.kind)?e:"subs";"captions"===r&&a.append(ah(this,"captions-indicator")),t.append(a)}},oM=new WeakSet,oC=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(u.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new Z.CustomEvent(o.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new Z.CustomEvent(o.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};let aB=(e,t)=>{let i=e.getAttribute(t);return i?eV(i):[]},aW=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=eF(i),r=e.getAttribute(t);r!==a&&e.setAttribute(t,a)};Z.customElements.get("media-captions-listbox")||Z.customElements.define("media-captions-listbox",class extends ap{constructor(){super({slotTemplate:aU}),aO(this,oR),aO(this,oM),aO(this,oD,void 0)}static get observedAttributes(){return[...super.observedAttributes,"aria-multiselectable",u.MEDIA_SUBTITLES_LIST,u.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===u.MEDIA_SUBTITLES_LIST&&t!==i?aN(this,oR,oL).call(this):e===u.MEDIA_SUBTITLES_SHOWING&&t!==i?this.value=i:"aria-multiselectable"===e&&(this.removeAttribute("aria-multiselectable"),console.warn("Captions List doesn't currently support multiple selections. You can enable multiple items via the media.textTracks API."))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",aN(this,oM,oC))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",aN(this,oM,oC))}get mediaSubtitlesList(){return aB(this,u.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){aW(this,u.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return aB(this,u.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){aW(this,u.MEDIA_SUBTITLES_SHOWING,e)}}),Z.customElements.get("media-captions-selectmenu")||Z.customElements.define("media-captions-selectmenu",class extends aR{init(){let e=Q.createElement("media-captions-button");e.part.add("button"),e.preventClick=!0;let t=Q.createElement("media-captions-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}});var aV=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aq=(e,t,i)=>(aV(e,t,"read from private field"),i?i.call(e):t.get(e)),aH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aF=(e,t,i)=>(aV(e,t,"access private method"),i);let aj={RATES:"rates"};oO=new WeakMap,ox=new WeakSet,oN=function(){let e=this.shadowRoot.querySelector("#container");for(let t of(e.textContent="",this.rates)){let i=ac(this.formatOptionText(`${t}x`,t),t,this.mediaPlaybackRate==t);i.prepend(ah(this,"select-indicator")),e.append(i)}},oP=new WeakSet,oU=function(){if(!this.value)return;let e=new Z.CustomEvent(o.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},Z.customElements.get("media-playback-rate-listbox")||Z.customElements.define("media-playback-rate-listbox",class extends ap{constructor(){super(),aH(this,ox),aH(this,oP),aH(this,oO,new eU(this,aj.RATES,{defaultValue:iw})),aF(this,ox,oN).call(this)}static get observedAttributes(){return[...super.observedAttributes,"aria-multiselectable",u.MEDIA_PLAYBACK_RATE,aj.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===u.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===aj.RATES&&t!=i&&(aq(this,oO).value=i,aF(this,ox,oN).call(this))}get rates(){return aq(this,oO)}set rates(e){e?Array.isArray(e)&&(aq(this,oO).value=e.join(" ")):aq(this,oO).value="",aF(this,ox,oN).call(this)}get mediaPlaybackRate(){return B(this,u.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){W(this,u.MEDIA_PLAYBACK_RATE,e)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",aF(this,oP,oU))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",aF(this,oP,oU))}}),Z.customElements.get("media-playback-rate-selectmenu")||Z.customElements.define("media-playback-rate-selectmenu",class extends aR{init(){let e=Q.createElement("media-playback-rate-button");e.part.add("button"),e.preventClick=!0;let t=Q.createElement("media-playback-rate-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}});var a$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aK=(e,t,i)=>(a$(e,t,"read from private field"),i?i.call(e):t.get(e)),aY=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aG=(e,t,i,a)=>(a$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aZ=(e,t,i)=>(a$(e,t,"access private method"),i);oB=new WeakMap,oW=new WeakMap,oV=new WeakSet,oq=function(){if(aK(this,oW)===JSON.stringify(this.mediaRenditionList))return;aG(this,oW,JSON.stringify(this.mediaRenditionList));let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height),t=this.shadowRoot.querySelector("#container");t.textContent="";let i=!this.mediaRenditionSelected;for(let a of e){let e=this.formatOptionText(`${Math.min(a.width,a.height)}p`,a),r=ac(e,`${a.id}`,a.selected&&!i);r.prepend(ah(this,"select-indicator")),t.append(r)}let a=ac(this.formatOptionText("Auto"),"auto",i);a.prepend(ah(this,"select-indicator")),t.append(a)},oH=new WeakSet,oF=function(){if(null==this.value)return;let e=new Z.CustomEvent(o.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},Z.customElements.get("media-rendition-listbox")||Z.customElements.define("media-rendition-listbox",class extends ap{constructor(){super(...arguments),aY(this,oV),aY(this,oH),aY(this,oB,[]),aY(this,oW,void 0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_RENDITION_LIST,u.MEDIA_RENDITION_SELECTED]}attributeChangedCallback(e,t,i){(super.attributeChangedCallback(e,t,i),e===u.MEDIA_RENDITION_SELECTED&&t!==i)?this.value=null!=i?i:"auto":e===u.MEDIA_RENDITION_LIST&&t!==i&&(aG(this,oB,null==i?void 0:i.split(/\s+/).map(_)),aZ(this,oV,oq).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",aZ(this,oH,oF))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",aZ(this,oH,oF))}get mediaRenditionList(){return aK(this,oB)}set mediaRenditionList(e){aG(this,oB,e),aZ(this,oV,oq).call(this)}get mediaRenditionSelected(){return H(this,u.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){F(this,u.MEDIA_RENDITION_SELECTED,e)}});let aQ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,az=Q.createElement("template");az.innerHTML=`
  <slot name="icon">${aQ}</slot>
`,Z.customElements.get("media-rendition-button")||Z.customElements.define("media-rendition-button",class extends en{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_RENDITION_SELECTED,u.MEDIA_RENDITION_UNAVAILABLE]}constructor(){super({slotTemplate:az})}get mediaRenditionSelected(){return H(this,u.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){F(this,u.MEDIA_RENDITION_SELECTED,e)}}),Z.customElements.get("media-rendition-selectmenu")||Z.customElements.define("media-rendition-selectmenu",class extends aR{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_RENDITION_SELECTED,u.MEDIA_RENDITION_UNAVAILABLE]}init(){let e=Q.createElement("media-rendition-button");e.part.add("button"),e.preventClick=!0;let t=Q.createElement("media-rendition-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}});var aX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aJ=(e,t,i)=>(aX(e,t,"read from private field"),i?i.call(e):t.get(e)),a0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a1=(e,t,i,a)=>(aX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),a2=(e,t,i)=>(aX(e,t,"access private method"),i);oj=new WeakMap,o$=new WeakMap,oK=new WeakSet,oY=function(){if(aJ(this,o$)===JSON.stringify(this.mediaAudioTrackList))return;a1(this,o$,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList,t=this.shadowRoot.querySelector("#container");for(let i of(t.textContent="",e)){let e=this.formatOptionText(i.label,i),a=ac(e,`${i.id}`,i.enabled);a.prepend(ah(this,"select-indicator")),t.append(a)}},oG=new WeakSet,oZ=function(){if(null==this.value)return;let e=new Z.CustomEvent(o.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},Z.customElements.get("media-audio-track-listbox")||Z.customElements.define("media-audio-track-listbox",class extends ap{constructor(){super(...arguments),a0(this,oK),a0(this,oG),a0(this,oj,[]),a0(this,o$,void 0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_AUDIO_TRACK_LIST,u.MEDIA_AUDIO_TRACK_ENABLED]}attributeChangedCallback(e,t,i){(super.attributeChangedCallback(e,t,i),e===u.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)?this.value=i:e===u.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(a1(this,oj,null==i?void 0:i.split(/\s+/).map(k)),a2(this,oK,oY).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",a2(this,oG,oZ))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",a2(this,oG,oZ))}get mediaAudioTrackList(){return aJ(this,oj)}set mediaAudioTrackList(e){a1(this,oj,e),a2(this,oK,oY).call(this)}get mediaAudioTrackEnabled(){return H(this,u.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){F(this,u.MEDIA_AUDIO_TRACK_ENABLED,e)}});let a5=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,a3=Q.createElement("template");a3.innerHTML=`
  <slot name="icon">${a5}</slot>
`,Z.customElements.get("media-audio-track-button")||Z.customElements.define("media-audio-track-button",class extends en{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_AUDIO_TRACK_ENABLED,u.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:a3})}get mediaAudioTrackEnabled(){return H(this,u.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){F(this,u.MEDIA_AUDIO_TRACK_ENABLED,e)}}),Z.customElements.get("media-audio-track-selectmenu")||Z.customElements.define("media-audio-track-selectmenu",class extends aR{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_AUDIO_TRACK_ENABLED,u.MEDIA_AUDIO_TRACK_UNAVAILABLE]}init(){let e=Q.createElement("media-audio-track-button");e.part.add("button"),e.preventClick=!0;let t=Q.createElement("media-audio-track-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}});var a4=i(7545),a7=i(2513).ZP,a8=class extends Error{constructor(e,t=a8.MEDIA_ERR_CUSTOM,i,a){var r;super(e),this.name="MediaError",this.code=t,this.context=a,this.fatal=null!=i?i:t>=a8.MEDIA_ERR_NETWORK&&t<=a8.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(r=a8.defaultMessages[this.code])?r:"")}};a8.MEDIA_ERR_ABORTED=1,a8.MEDIA_ERR_NETWORK=2,a8.MEDIA_ERR_DECODE=3,a8.MEDIA_ERR_SRC_NOT_SUPPORTED=4,a8.MEDIA_ERR_ENCRYPTED=5,a8.MEDIA_ERR_CUSTOM=100,a8.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var a6=e=>null==e,a9=(e,t)=>!a6(t)&&e in t,re={ANY:"any",MUTED:"muted"},rt={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},ri={MSE:"mse",NATIVE:"native"},ra={HEADER:"header",QUERY:"query",NONE:"none"},rr=Object.values(ra),rn={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},ro={HLS:rn.M3U8};Object.keys(ro),[...Object.values(rn)];var rs=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},rl=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},rd=e=>{let t=e.type;if(t){let e=t.toUpperCase();return a9(e,ro)?ro[e]:t}let{src:i}=e;return i?rh(i):""},ru=e=>"VOD"===e?rt.ON_DEMAND:rt.LIVE,rc=e=>"EVENT"===e?Number.POSITIVE_INFINITY:"VOD"===e?Number.NaN:0,rh=e=>{let t="";try{t=new URL(e).pathname}catch{console.error("invalid url")}let i=t.lastIndexOf(".");if(i<0)return"";let a=t.slice(i+1).toUpperCase();return a9(a,rn)?rn[a]:""},rm=Object.values(re),rp=e=>"boolean"==typeof e||"string"==typeof e&&rm.includes(e),rv=({autoplay:e},t,i)=>{let a=!1,r=!1,n=rp(e)?e:!!e,o=()=>{a||rs(t,"playing",()=>{a=!0},{once:!0})};if(o(),rs(t,"loadstart",()=>{a=!1,o(),rb(t,n)},{once:!0}),rs(t,"loadstart",()=>{i||(r=!Number.isFinite(t.duration)),rb(t,n)},{once:!0}),i&&i.once(a7.Events.LEVEL_LOADED,(e,t)=>{var i;r=null!=(i=t.details.live)&&i}),!n){let e=()=>{!r||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&rs(t,"play",()=>{"metadata"===t.preload?i.once(a7.Events.LEVEL_UPDATED,e):e()},{once:!0})}return e=>{a||rb(t,n=rp(e)?e:!!e)}},rb=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case re.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case re.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},rf=({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,o=!1,s=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;o||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=s,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return rs(i,"play",()=>{o=!0,a.config.maxBufferLength=s,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d};function rE(e,t,i,a,r){let n=document.createElement("track");return n.kind=t,n.label=i,a&&(n.srclang=a),r&&(n.id=r),n.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",n.setAttribute("data-removeondestroy",""),e.append(n),n.track}var rg="cuepoints",ry=Object.freeze({label:rg}),r_=(e,{label:t=rg}=ry)=>{var i;return null==(i=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&"metadata"===e.track.kind))?void 0:i.track};async function rA(e,t,i=ry){let a=r_(e,i);if(!a){let{label:t=rg}=i;(a=rE(e,"metadata",t)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))}return"hidden"!==a.mode&&(a.mode="hidden"),[...t].sort(({time:e},{time:t})=>t-e).forEach(({time:t,value:i})=>{var r,n;let o=Array.prototype.findIndex.call(null==a?void 0:a.cues,e=>e.startTime>=t),s=null==(r=null==a?void 0:a.cues)?void 0:r[o],l=s?s.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,d=null==(n=null==a?void 0:a.cues)?void 0:n[o-1];d&&(d.endTime=t);let u=new VTTCue(t,l,JSON.stringify(null!=i?i:null));a.addCue(u)}),a}var rk=e=>({time:e.startTime,value:JSON.parse(e.text)});function rT(e,t={label:rg}){var i,a;let r=r_(e,t);if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;let{currentTime:n}=e;return rk(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n))}async function rw(e,t=ry){return new Promise(i=>{rs(e,"loadstart",async()=>{let a=await rA(e,[],t);rs(e,"cuechange",()=>{let t=rT(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var rI,rS,rD,rR,rL,rM,rC,rO,rx,rN,rP,rU,rB,rW,rV,rq,rH,rF,rj,r$,rK,rY,rG,rZ,rQ,rz,rX,rJ,r0,r1,r2,r5,r3,r4,r7,r8,r6,r9,ne,nt,ni,na,nr,nn,no,ns,nl,nd,nu,nc,nh,nm,np,nv,nb,nf,nE,ng,ny,n_,nA,nk,nT,nw,nI,nS,nD,nR,nL,nM,nC,nO,nx,nN,nP,nU,nB,nW,nV,nq,nH,nF,nj,n$,nK,nY,nG,nZ,nQ,nz,nX,nJ,n0,n1,n2,n5,n3,n4,n7,n8,n6,n9,oe,ot,oi,oa,or,on,oo,os,ol,od,ou,oc,oh,om,op,ov,ob,of,oE,og,oy,o_,oA,ok,oT,ow,oI,oS,oD,oR,oL,oM,oC,oO,ox,oN,oP,oU,oB,oW,oV,oq,oH,oF,oj,o$,oK,oY,oG,oZ,oQ,oz,oX,oJ=async e=>fetch(e).then(e=>e.text()).then(e=>{let t=e.split(`
`).find((e,t,i)=>t&&i[t-1].startsWith("#EXT-X-STREAM-INF"));return fetch(t).then(e=>e.text()).then(e=>e.split(`
`))}),o0=e=>{var t,i,a;let r=null==(i=(null!=(t=e.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),n=ru(r),o=rc(r),s;if(n===rt.LIVE){let t=e.find(e=>e.startsWith("#EXT-X-PART-INF"));if(t)s=2*+t.split(":")[1].split("=")[1];else{let t=e.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),i=null==(a=null==t?void 0:t.split(":"))?void 0:a[1];s=3*+(null!=i?i:6)}}return{streamType:n,targetLiveWindow:o,liveEdgeStartOffset:s}},o1=async(e,t)=>t===rn.MP4?{streamType:rt.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0}:t===rn.M3U8?o0(await oJ(e)):(console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0}),o2=async(e,t,i=rd({src:e}))=>{var a,r,n;let{streamType:o,targetLiveWindow:s,liveEdgeStartOffset:l}=await o1(e,i);(null!=(a=o7.get(t))?a:{}).liveEdgeStartOffset=l,(null!=(r=o7.get(t))?r:{}).targetLiveWindow=s,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(n=o7.get(t))?n:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},o5=e=>{var t;let i=e.type,a=ru(i),r=rc(i),n,o=!!(null!=(t=e.partList)&&t.length);return a===rt.LIVE&&(n=o?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:o}},o3=(e,t,i)=>{var a,r,n,o,s,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:p}=o5(e);if(c===rt.LIVE){p?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(o=i.userConfig.backBufferLength)?o:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(s=o7.get(t))?s:{}).seekable=e}(null!=(l=o7.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=o7.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=o7.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},o4=-1!==(null!=(oz=null==(oQ=null==globalThis?void 0:globalThis.navigator)?void 0:oQ.userAgent)?oz:"").toLowerCase().indexOf("android"),o7=new WeakMap,o8="mux.com",o6=null==(oX=a7.isSupported)?void 0:oX.call(a7),o9=()=>a4.utils.now(),se=a4.utils.generateUUID,st=(e,{domain:t=o8,maxResolution:i=""}={})=>{if(!e)return;let[a,r=""]=rl(e),n=new URL(`https://stream.${t}/${a}.m3u8${r}`);return i&&n.searchParams.set("max_resolution",i),n.toString()},si=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},sa=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(".m3u8");return t||void 0},sr=e=>{var t,i,a;return null!=(t=null==e?void 0:e.metadata)&&t.video_id?e.metadata.video_id:sg(e)&&null!=(a=null!=(i=si(e.playbackId))?i:sa(e.src))?a:e.src},sn=e=>{var t;return null==(t=o7.get(e))?void 0:t.error},so=e=>{var t,i;return null!=(i=null==(t=o7.get(e))?void 0:t.streamType)?i:rt.UNKNOWN},ss=e=>{var t,i;return null!=(i=null==(t=o7.get(e))?void 0:t.targetLiveWindow)?i:Number.NaN},sl=e=>{var t,i;return null!=(i=null==(t=o7.get(e))?void 0:t.seekable)?i:e.seekable},sd=e=>{var t;let i=null==(t=o7.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return Number.NaN;let a=sl(e);return a.length?a.end(a.length-1)-i:Number.NaN},su=(e,t,i=.001)=>Math.abs(e-t)<=i,sc=(e,t,i=.001)=>e>t||su(e,t,i),sh=e=>e.paused&&sc(e.currentTime,e.duration),sm=(e,t)=>e.loop||t?e.ended:e.ended||sh(e),sp=(e,t,i)=>{sv(t,i);let{metadata:a={}}=e,{view_session_id:r=se()}=a,n=sr(e);a.view_session_id=r,a.video_id=n,e.metadata=a,o7.set(t,{});let o=sf(e,t);sy(e,t,o),s_(e,t,o),rw(t);let s=rv(e,t,o),l=rf(e,t,o);return{engine:o,setAutoplay:s,setPreload:l}},sv=(e,t)=>{let i=null==t?void 0:t.engine;i&&(i.detachMedia(),i.destroy()),(null==e?void 0:e.mux)&&!e.mux.deleted&&(e.mux.destroy(),delete e.mux),e&&(e.removeAttribute("src"),e.load(),e.removeEventListener("error",sk),e.removeEventListener("error",sT),e.removeEventListener("durationchange",sA),o7.delete(e),e.dispatchEvent(new Event("teardown")))};function sb(e,t){var i;let a=rd(e);if(a!==rn.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,o=n===ri.MSE,s=n===ri.NATIVE;return r&&(s||!(o6&&(o||o4)))}var sf=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:o}=e,s=rd(e)===rn.M3U8,l=sb(e,t);if(s&&!l&&o6){let e=sE(a),t=o!==ra.NONE?{useHeaders:o===ra.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0;return new a7({debug:i,startPosition:r,cmcd:t,backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0,...e})}},sE=e=>e===rt.LIVE?{backBufferLength:8}:{},sg=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=null==window?void 0:window.location.href,r=new URL(t,a).hostname.toLocaleLowerCase();return r.includes(o8)||!!i&&r.includes(i.toLocaleLowerCase())},sy=(e,t,i)=>{var a;let{envKey:r}=e,n=sg(e);if(r||n){let{playerInitTime:n,playerSoftwareName:o,playerSoftwareVersion:s,beaconCollectionDomain:l,debug:d,disableCookies:u}=e,c={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};a4.monitor(t,{debug:d,beaconCollectionDomain:l,hlsjs:i,Hls:i?a7:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:u,data:{...r?{env_key:r}:{},player_software_name:o,player_software:o,player_software_version:s,player_init_time:n,...c}})}},s_=(e,t,i)=>{var a;let r=sb(e,t),{src:n}=e;if(t&&r){let i=rd(e);"string"==typeof n?("none"===t.preload?rs(t,"loadstart",()=>o2(n,t,i)):o2(n,t,i),t.setAttribute("src",n),e.startTime&&((null!=(a=o7.get(t))?a:{}).startTime=e.startTime,t.addEventListener("durationchange",sA,{once:!0}))):t.removeAttribute("src"),t.addEventListener("error",sk),t.addEventListener("error",sT),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0});let r=()=>{t.ended||!sm(t)||t.dispatchEvent(new Event("ended"))};rs(t,"pause",r),rs(t,"seeked",r),rs(t,"play",()=>{t.ended||!sc(t.currentTime,t.duration)||(t.currentTime=t.seekable.start(0))})}else i&&n?(i.once(a7.Events.LEVEL_LOADED,(e,a)=>{o3(a.details,t,i)}),i.on(a7.Events.ERROR,(e,i)=>{let a={[a7.ErrorTypes.NETWORK_ERROR]:a8.MEDIA_ERR_NETWORK,[a7.ErrorTypes.MEDIA_ERROR]:a8.MEDIA_ERR_DECODE},r=new a8("",a[i.type]);r.fatal=i.fatal,r.data=i,t.dispatchEvent(new CustomEvent("error",{detail:r}))}),t.addEventListener("error",sT),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(a7.Events.MANIFEST_PARSED,function(t,i){s();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(a7.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(o(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)}),t.on(a7.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let o=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!o.includes(t.id)&&n.removeRendition(t)});let r=i=>{let a=e.currentTime,r=!1,n=(e,t)=>{r||(r=!Number.isFinite(t.endOffset))};t.on(a7.Events.BUFFER_FLUSHING,n),t.nextLevel=i,t.off(a7.Events.BUFFER_FLUSHING,n),r||t.trigger(a7.Events.BUFFER_FLUSHING,{startOffset:a+10,endOffset:1/0,type:"video"})};null==(i=e.videoRenditions)||i.addEventListener("change",e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&r(i)});let n=()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)},o=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},s=()=>{n(),o()};t.once(a7.Events.DESTROYING,s)}(e,i),function(e,t){t.on(a7.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a;let r=null!=(a=i.subtitleTrack)?a:i.closedCaptions,n=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==r?void 0:r.lang)&&t===i.label&&a.toLowerCase()===i.kind);rE(e,i.kind,i.label,null==r?void 0:r.lang,`${i.kind}${n}`)})});let i=()=>{var i;if(!t.subtitleTracks.length)return;let a=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind)),r=`${null==(i=t.subtitleTracks[t.subtitleTrack])?void 0:i.type.toLowerCase()}${t.subtitleTrack}`;if(a&&(t.subtitleTrack<0||(null==a?void 0:a.id)!==r)){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:i})=>e==a.language&&t===a.label&&i.toLowerCase()===a.kind);t.subtitleTrack=e}a&&(null==a?void 0:a.id)===r&&a.cues&&Array.from(a.cues).forEach(e=>{a.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(a7.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(a7.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&"thumbnails"===t.label){if(!(null!=(i=t.cues)&&i.length)){let t=e.querySelector('track[label="thumbnails"]'),i=null!=(a=null==t?void 0:t.getAttribute("src"))?a:"";null==t||t.removeAttribute("src"),setTimeout(()=>{null==t||t.setAttribute("src",i)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(a7.Events.MANIFEST_LOADED,a),t.once(a7.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function sA(e){var t;let i=e.target,a=null==(t=o7.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function sk(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new a8(i,a);if(t.src&&(a!==a8.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}t.dispatchEvent(new CustomEvent("error",{detail:r}))}function sT(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof a8))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=o7.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var sw=Object.defineProperty,sI=(e,t,i)=>t in e?sw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,sS=(e,t,i)=>(sI(e,"symbol"!=typeof t?t+"":t,i),i),sD=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sR=(e,t,i)=>(sD(e,t,"read from private field"),i?i.call(e):t.get(e)),sL=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sM=(e,t,i,a)=>(sD(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sC=(e,t,i)=>(sD(e,t,"access private method"),i),sO=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"undefined"==typeof DocumentFragment&&(globalThis.DocumentFragment=class extends sO{});var sx,sN=class extends sO{},sP=class{constructor(e,t={}){sL(this,sx,void 0),sM(this,sx,null==t?void 0:t.detail)}get detail(){return sR(this,sx)}initCustomEvent(){}};sx=new WeakMap;var sU={document:{createElement:function(e,t){return new sN}},DocumentFragment,customElements:{get(e){},define(e,t,i){},upgrade(e){},whenDefined:e=>Promise.resolve(sN)},CustomEvent:sP,EventTarget:sO,HTMLElement:sN,HTMLVideoElement:class extends sO{}},sB="undefined"==typeof window||void 0===globalThis.customElements,sW=sB?sU:globalThis;sB&&sU.document;var sV=(()=>{try{return"0.16.5"}catch{}return"UNKNOWN"})(),sq=e=>{var t,i,a,r,n,o,s,l,d,u,c,h,m,p,v,b,f,E,g,y,_,A,k,T,w,I,S,D,R,L,M,C,O,x,N,P,U,B,W,V;return t=class extends e{constructor(){super(),sL(this,S),sL(this,R),sL(this,M),sL(this,O),sL(this,N),sL(this,U),sL(this,W),sS(this,"castEnabled",!1),sL(this,_,{paused:!1}),sL(this,A,void 0),sL(this,k,{}),sL(this,T,void 0),sL(this,w,void 0),sL(this,I,void 0),t.instances.add(this),sC(this,N,P).call(this)}static get castElement(){return sR(t,i)}static get castEnabled(){return sR(t,a)}static get castState(){var e;return null==(e=sR(t,d,u))?void 0:e.getCastState()}static async exitCast(){try{await sR(t,d,u).endCurrentSession(!0)}catch(e){console.error(e);return}}get castPlayer(){if(t.castElement===this)return sR(this,A)}attributeChangedCallback(e){if(this.castPlayer)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async requestCast(e={}){sC(t,g,y).call(t,e),sM(t,i,this),Object.entries(sR(this,k)).forEach(([e,t])=>{sR(this,A).controller.addEventListener(e,t)});try{await sR(t,d,u).requestSession()}catch{sM(t,i,void 0);return}sR(this,_).paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){var e,i;if(!this.castPlayer)return super.load();let a=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType),r=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),n=[],o=0;r.length&&(a.tracks=r.map(e=>{let t=++o;0===n.length&&"showing"===e.track.mode&&n.push(t);let i=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return i.trackContentId=e.src,i.trackContentType="text/vtt",i.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,i.name=e.label,i.language=e.srclang,i})),"live"===this.castStreamType?a.streamType=chrome.cast.media.StreamType.LIVE:a.streamType=chrome.cast.media.StreamType.BUFFERED,a.metadata=new chrome.cast.media.GenericMediaMetadata,a.metadata.title=this.title,a.metadata.images=[{url:this.poster}];let s=new chrome.cast.media.LoadRequest(a);s.currentTime=null!=(e=super.currentTime)?e:0,s.autoplay=!sR(this,_).paused,s.activeTrackIds=n,await (null==(i=sR(t,c,h))?void 0:i.loadMedia(s)),this.dispatchEvent(new Event("volumechange"))}play(){var e;if(this.castPlayer){this.castPlayer.isPaused&&(null==(e=this.castPlayer.controller)||e.playOrPause());return}return super.play()}pause(){var e;if(this.castPlayer){this.castPlayer.isPaused||null==(e=this.castPlayer.controller)||e.playOrPause();return}super.pause()}get castSrc(){var e,t,i;return null!=(i=null!=(t=this.getAttribute("cast-src"))?t:null==(e=this.querySelector("source"))?void 0:e.src)?i:this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){var e;return null!=(e=this.getAttribute("cast-content-type"))?e:void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){var e,t;return null!=(t=null!=(e=this.getAttribute("cast-stream-type"))?e:this.streamType)?t:void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get readyState(){if(this.castPlayer)switch(this.castPlayer.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.castPlayer?this.castPlayer.isPaused:super.paused}get muted(){var e;return this.castPlayer?null==(e=this.castPlayer)?void 0:e.isMuted:super.muted}set muted(e){var t;if(this.castPlayer){(e&&!this.castPlayer.isMuted||!e&&this.castPlayer.isMuted)&&(null==(t=this.castPlayer.controller)||t.muteOrUnmute());return}super.muted=e}get volume(){var e,t;return this.castPlayer?null!=(t=null==(e=this.castPlayer)?void 0:e.volumeLevel)?t:1:super.volume}set volume(e){var t;if(this.castPlayer){this.castPlayer.volumeLevel=e,null==(t=this.castPlayer.controller)||t.setVolumeLevel();return}super.volume=e}get duration(){var e,t;return this.castPlayer&&sR(this,S,D)?null!=(t=null==(e=this.castPlayer)?void 0:e.duration)?t:NaN:super.duration}get currentTime(){var e,t;return this.castPlayer&&sR(this,S,D)?null!=(t=null==(e=this.castPlayer)?void 0:e.currentTime)?t:0:super.currentTime}set currentTime(e){var t;if(this.castPlayer){this.castPlayer.currentTime=e,null==(t=this.castPlayer.controller)||t.seek();return}super.currentTime=e}get onentercast(){return sR(this,T)}set onentercast(e){sR(this,T)&&(this.removeEventListener("entercast",sR(this,T)),sM(this,T,null)),"function"==typeof e&&(sM(this,T,e),this.addEventListener("entercast",e))}get onleavecast(){return sR(this,w)}set onleavecast(e){sR(this,w)&&(this.removeEventListener("leavecast",sR(this,w)),sM(this,w,null)),"function"==typeof e&&(sM(this,w,e),this.addEventListener("leavecast",e))}get oncastchange(){return sR(this,I)}set oncastchange(e){sR(this,I)&&(this.removeEventListener("castchange",sR(this,I)),sM(this,I,null)),"function"==typeof e&&(sM(this,I,e),this.addEventListener("castchange",e))}},i=new WeakMap,a=new WeakMap,r=new WeakMap,n=new WeakSet,o=function(){return"undefined"!=typeof chrome&&chrome.cast&&chrome.cast.isAvailable},s=new WeakSet,l=function(){return"undefined"!=typeof cast&&cast.framework},d=new WeakSet,u=function(){if(sR(t,s,l))return cast.framework.CastContext.getInstance()},c=new WeakSet,h=function(){var e;return null==(e=sR(t,d,u))?void 0:e.getCurrentSession()},m=new WeakSet,p=function(){var e;return null==(e=sR(t,c,h))?void 0:e.getSessionObj().media[0]},v=new WeakSet,b=function(e){return new Promise((i,a)=>{sR(t,m,p).editTracksInfo(e,i,a)})},f=new WeakSet,E=function(e){return new Promise((i,a)=>{sR(t,m,p).getStatus(e,i,a)})},g=new WeakSet,y=function(e){return sR(t,d,u).setOptions({receiverApplicationId:chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0,...e})},_=new WeakMap,A=new WeakMap,k=new WeakMap,T=new WeakMap,w=new WeakMap,I=new WeakMap,S=new WeakSet,D=function(){var e;return null==(e=this.castPlayer)?void 0:e.isMediaLoaded},R=new WeakSet,L=function(){sR(t,i)===this&&(Object.entries(sR(this,k)).forEach(([e,t])=>{sR(this,A).controller.removeEventListener(e,t)}),sM(t,i,void 0),this.muted=sR(this,A).isMuted,this.currentTime=sR(this,A).savedPlayerState.currentTime,!1===sR(this,A).savedPlayerState.isPaused&&this.play())},M=new WeakSet,C=function(){this.dispatchEvent(new CustomEvent("castchange",{detail:sR(t,d,u).getCastState()}))},O=new WeakSet,x=async function(){var e;let{SESSION_RESUMED:a}=cast.framework.SessionState;if(sR(t,d,u).getSessionState()===a&&this.castSrc===(null==(e=sR(t,m,p))?void 0:e.media.contentId)){sM(t,i,this),Object.entries(sR(this,k)).forEach(([e,t])=>{sR(this,A).controller.addEventListener(e,t)});try{await sC(t,f,E).call(t,new chrome.cast.media.GetStatusRequest)}catch(e){console.error(e)}sR(this,k)[cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED](),sR(this,k)[cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},N=new WeakSet,P=function(){!sR(t,s,l)||this.castEnabled||(this.castEnabled=!0,sC(t,g,y).call(t),this.textTracks.addEventListener("change",sC(this,W,V).bind(this)),sC(this,M,C).call(this),sM(this,A,new cast.framework.RemotePlayer),new cast.framework.RemotePlayerController(sR(this,A)),sM(this,k,{[cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!1===e&&sC(this,R,L).call(this),this.dispatchEvent(new Event(e?"entercast":"leavecast"))},[cast.framework.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.dispatchEvent(new Event("durationchange"))},[cast.framework.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.dispatchEvent(new Event("volumechange"))},[cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.dispatchEvent(new Event("volumechange"))},[cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{sR(this,S,D)&&this.dispatchEvent(new Event("timeupdate"))},[cast.framework.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.dispatchEvent(new Event("resize"))},[cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.dispatchEvent(new Event(this.paused?"pause":"play"))},[cast.framework.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var e,t;(null==(e=this.castPlayer)?void 0:e.playerState)!==chrome.cast.media.PlayerState.PAUSED&&this.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[null==(t=this.castPlayer)?void 0:t.playerState]))},[cast.framework.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{sR(this,S,D)&&(await Promise.resolve(),sC(this,U,B).call(this))}}))},U=new WeakSet,B=function(){sC(this,W,V).call(this)},W=new WeakSet,V=async function(){var e,i,a,r,n,o;if(!this.castPlayer)return;let s=(null!=(i=null==(e=sR(this,A).mediaInfo)?void 0:e.tracks)?i:[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),l=[...this.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),d=s.map(({language:e,name:t,trackId:i})=>{var a;let{mode:r}=null!=(a=l.find(i=>i.language===e&&i.label===t))?a:{};return!!r&&{mode:r,trackId:i}}).filter(Boolean),u=d.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),m=d.find(({mode:e})=>"showing"===e),p=null!=(n=null==(r=null==(a=sR(t,c,h))?void 0:a.getSessionObj().media[0])?void 0:r.activeTrackIds)?n:[],f=p;if(p.length&&(f=f.filter(e=>!u.includes(e))),null!=m&&m.trackId&&(f=[...f,m.trackId]),o=f=[...new Set(f)],!(p.length===o.length&&p.every(e=>o.includes(e))))try{let e=new chrome.cast.media.EditTracksInfoRequest(f);await sC(t,v,b).call(t,e)}catch(e){console.error(e)}},sL(t,n),sL(t,s),sL(t,d),sL(t,c),sL(t,m),sL(t,v),sL(t,f),sL(t,g),sS(t,"observedAttributes",["cast-src","cast-content-type","cast-stream-type"]),sS(t,"instances",new Set),sL(t,i,void 0),sL(t,a,!1),sS(t,"initCast",()=>{sR(t,n,o)?sR(t,s,l)?sR(t,r).call(t,chrome.cast.isAvailable):customElements.whenDefined("google-cast-button").then(()=>sR(t,r).call(t,chrome.cast.isAvailable)):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(()=>sR(t,r).call(t,chrome.cast.isAvailable))}}),sL(t,r,e=>{if(e){sM(t,a,!0);let{CAST_STATE_CHANGED:e}=cast.framework.CastContextEventType;sR(t,d,u).addEventListener(e,e=>{t.instances.forEach(t=>sC(t,M,C).call(t,e))});let{SESSION_STATE_CHANGED:i}=cast.framework.CastContextEventType;sR(t,d,u).addEventListener(i,e=>{t.instances.forEach(t=>sC(t,O,x).call(t,e))}),t.instances.forEach(e=>sC(e,N,P).call(e))}}),t},sH=globalThis.HTMLVideoElement?sq(HTMLVideoElement):sq(Object);globalThis.customElements&&!globalThis.customElements.get("castable-video")&&(customElements.define("castable-video",sH,{extends:"video"}),globalThis.CastableVideoElement=sH),sH.initCast();var sF,sj=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],s$=null==(sF=globalThis.document)?void 0:sF.createElement("template");s$&&(s$.innerHTML=`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      audio {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
      }
    </style>
    <slot></slot>
  `);var sK,sY=null==(sK=globalThis.document)?void 0:sK.createElement("template");sY&&(sY.innerHTML=`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot></slot>
  `);var sG=(e,{tag:t,is:i})=>{var a,r,n,o,s,l,d,u,c,h,m,p,v;let b=null==(a=globalThis.document)?void 0:a.createElement(t,{is:i}),f=b?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i))t.push(...Object.getOwnPropertyNames(i));return t}(b):[];return r=class extends e{constructor(){super(),sL(this,u),sL(this,h),sL(this,p),sL(this,l,void 0),sL(this,d,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0)))}static get observedAttributes(){var e,t;return sC(r,o,s).call(r),[...null!=(t=null==(e=null==b?void 0:b.constructor)?void 0:e.observedAttributes)?t:[],"autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"]}get nativeEl(){var e,i;return null!=(i=null!=(e=sR(this,d))?e:this.shadowRoot.querySelector(t))?i:this.querySelector(t)}set nativeEl(e){sM(this,d,e)}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",!!e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){var e,t;return null!=(t=this.getAttribute("preload"))?t:null==(e=this.nativeEl)?void 0:e.preload}set preload(e){this.setAttribute("preload",`${e}`)}attributeChangedCallback(e,t,i){sC(this,u,c).call(this),sC(this,p,v).call(this,e,t,i)}connectedCallback(){sC(this,u,c).call(this)}},n=new WeakMap,o=new WeakSet,s=function(){if(sR(this,n))return;sM(this,n,!0);let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),f))if(!(t in this.prototype)){if("function"==typeof b[t])this.prototype[t]=function(...e){return sC(this,u,c).call(this),this.call?this.call(t,...e):this.nativeEl[t].apply(this.nativeEl,e)};else{let i={get(){var i,a,r;sC(this,u,c).call(this);let n=t.toLowerCase();if(e.has(n)){let e=this.getAttribute(n);return null!==e&&(""===e||e)}return null!=(r=null==(i=this.get)?void 0:i.call(this,t))?r:null==(a=this.nativeEl)?void 0:a[t]}};t!==t.toUpperCase()&&(i.set=function(i){sC(this,u,c).call(this);let a=t.toLowerCase();if(e.has(a)){!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i);return}if(this.set){this.set(t,i);return}this.nativeEl[t]=i}),Object.defineProperty(this.prototype,t,i)}}},l=new WeakMap,d=new WeakMap,u=new WeakSet,c=function(){var e,a;if(sR(this,l))return;if(sM(this,l,!0),!this.nativeEl){let e=document.createElement(t,{is:i});e.part=t,this.shadowRoot.append(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),f))sC(this,h,m).call(this,e);let r=new Map,n=this.shadowRoot.querySelector("slot:not([name])");for(let t of(null==n||n.addEventListener("slotchange",()=>{let e=new Map(r);n.assignedElements().filter(e=>["track","source"].includes(e.localName)).forEach(t=>{var i,a;e.delete(t);let n=r.get(t);n||(n=t.cloneNode(),r.set(t,n)),null==(a=(i=this.nativeEl).append)||a.call(i,n)}),e.forEach(e=>e.remove())}),this.constructor.Events))null==(a=(e=this.shadowRoot).addEventListener)||a.call(e,t,e=>{e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))},!0)},h=new WeakSet,m=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},p=new WeakSet,v=function(e,t,i){var a,r,n,o;["id","class"].includes(e)||(null===i?null==(r=(a=this.nativeEl).removeAttribute)||r.call(a,e):null==(o=(n=this.nativeEl).setAttribute)||o.call(n,e,i))},sL(r,o),sS(r,"Events",sj),sS(r,"template",t.endsWith("audio")?s$:sY),sL(r,n,void 0),r};globalThis.document&&sG(HTMLElement,{tag:"video"}),globalThis.document&&sG(HTMLElement,{tag:"audio"});var sZ=class extends Event{constructor(e,t){super(e),sS(this,"track"),this.track=t.track}},sQ=new WeakMap;function sz(e){var t;let i;return null!=(t=sQ.get(e))?t:((i=sQ.get(e))||sQ.set(e,i={}),Object.assign(i,{}))}function sX(e,t){let i=e.videoTracks;sz(t).media=e,sz(t).renditionSet||(sz(t).renditionSet=new Set);let a=sz(i).trackSet;a.add(t);let r=a.size-1;r in s4.prototype||Object.defineProperty(s4.prototype,r,{get(){return[...sz(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new sZ("addtrack",{track:t}))})}function sJ(e){var t;let i=null==(t=sz(e).media)?void 0:t.videoTracks;i&&(sz(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new sZ("removetrack",{track:e}))}))}var s0,s1,s2,s5,s3,s4=class extends EventTarget{constructor(){super(),sL(this,s5),sL(this,s0,void 0),sL(this,s1,void 0),sL(this,s2,void 0),sz(this).trackSet=new Set}[Symbol.iterator](){return sR(this,s5,s3).values()}get length(){return sR(this,s5,s3).size}getTrackById(e){var t;return null!=(t=[...sR(this,s5,s3)].find(t=>t.id===e))?t:null}get selectedIndex(){return[...sR(this,s5,s3)].findIndex(e=>e.selected)}get onaddtrack(){return sR(this,s0)}set onaddtrack(e){sR(this,s0)&&(this.removeEventListener("addtrack",sR(this,s0)),sM(this,s0,void 0)),"function"==typeof e&&(sM(this,s0,e),this.addEventListener("addtrack",e))}get onremovetrack(){return sR(this,s1)}set onremovetrack(e){sR(this,s1)&&(this.removeEventListener("removetrack",sR(this,s1)),sM(this,s1,void 0)),"function"==typeof e&&(sM(this,s1,e),this.addEventListener("removetrack",e))}get onchange(){return sR(this,s2)}set onchange(e){sR(this,s2)&&(this.removeEventListener("change",sR(this,s2)),sM(this,s2,void 0)),"function"==typeof e&&(sM(this,s2,e),this.addEventListener("change",e))}};s0=new WeakMap,s1=new WeakMap,s2=new WeakMap,s5=new WeakSet,s3=function(){return sz(this).trackSet};var s7=class extends Event{constructor(e,t){super(e),sS(this,"rendition"),this.rendition=t.rendition}};function s8(e){return[...sz(e).media.videoTracks].filter(e=>e.selected).flatMap(e=>[...sz(e).renditionSet])}var s6,s9,le,lt=class extends EventTarget{constructor(){super(...arguments),sL(this,s6,void 0),sL(this,s9,void 0),sL(this,le,void 0)}[Symbol.iterator](){return s8(this).values()}get length(){return s8(this).length}getRenditionById(e){var t;return null!=(t=s8(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return s8(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of s8(this).entries())i.selected=t===e}get onaddrendition(){return sR(this,s6)}set onaddrendition(e){sR(this,s6)&&(this.removeEventListener("addrendition",sR(this,s6)),sM(this,s6,void 0)),"function"==typeof e&&(sM(this,s6,e),this.addEventListener("addrendition",e))}get onremoverendition(){return sR(this,s9)}set onremoverendition(e){sR(this,s9)&&(this.removeEventListener("removerendition",sR(this,s9)),sM(this,s9,void 0)),"function"==typeof e&&(sM(this,s9,e),this.addEventListener("removerendition",e))}get onchange(){return sR(this,le)}set onchange(e){sR(this,le)&&(this.removeEventListener("change",sR(this,le)),sM(this,le,void 0)),"function"==typeof e&&(sM(this,le,e),this.addEventListener("change",e))}};s6=new WeakMap,s9=new WeakMap,le=new WeakMap;var li,la=class{constructor(){sS(this,"src"),sS(this,"id"),sS(this,"width"),sS(this,"height"),sS(this,"bitrate"),sS(this,"frameRate"),sS(this,"codec"),sL(this,li,!1)}get selected(){return sR(this,li)}set selected(e){var t;let i;sR(this,li)===e||(sM(this,li,e),t=this,(i=sz(t).media.videoRenditions)&&!sz(i).changeRequested&&(sz(i).changeRequested=!0,queueMicrotask(()=>{delete sz(i).changeRequested,sz(t).track.selected&&i.dispatchEvent(new Event("change"))})))}};li=new WeakMap;var lr,ln=class{constructor(){sS(this,"id"),sS(this,"kind"),sS(this,"label",""),sS(this,"language",""),sS(this,"sourceBuffer"),sL(this,lr,!1)}addRendition(e,t,i,a,r,n){var o;let s,l,d,u=new la;return u.src=e,u.width=t,u.height=i,u.frameRate=n,u.bitrate=r,u.codec=a,o=this,s=sz(o).media.videoRenditions,sz(u).media=sz(o).media,sz(u).track=o,(l=sz(o).renditionSet).add(u),(d=l.size-1)in lt.prototype||Object.defineProperty(lt.prototype,d,{get(){return s8(this)[d]}}),queueMicrotask(()=>{o.selected&&s.dispatchEvent(new s7("addrendition",{rendition:u}))}),u}removeRendition(e){let t,i;t=sz(e).media.videoRenditions,i=sz(e).track,sz(i).renditionSet.delete(e),queueMicrotask(()=>{sz(e).track.selected&&t.dispatchEvent(new s7("removerendition",{rendition:e}))})}get selected(){return sR(this,lr)}set selected(e){sR(this,lr)!==e&&(sM(this,lr,e),!0===e&&function(e){var t;let i=null!=(t=sz(e).media.videoTracks)?t:[],a=!1;for(let t of i)t!==e&&(t.selected=!1,a=!0);if(a){if(sz(i).changeRequested)return;sz(i).changeRequested=!0,queueMicrotask(()=>{delete sz(i).changeRequested,i.dispatchEvent(new Event("change"))})}}(this))}};function lo(e){return[...sz(e).media.audioTracks].filter(e=>e.enabled).flatMap(e=>[...sz(e).renditionSet])}lr=new WeakMap;var ls,ll,ld,lu=class extends EventTarget{constructor(){super(...arguments),sL(this,ls,void 0),sL(this,ll,void 0),sL(this,ld,void 0)}[Symbol.iterator](){return lo(this).values()}get length(){return lo(this).length}getRenditionById(e){var t;return null!=(t=lo(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return lo(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of lo(this).entries())i.selected=t===e}get onaddrendition(){return sR(this,ls)}set onaddrendition(e){sR(this,ls)&&(this.removeEventListener("addrendition",sR(this,ls)),sM(this,ls,void 0)),"function"==typeof e&&(sM(this,ls,e),this.addEventListener("addrendition",e))}get onremoverendition(){return sR(this,ll)}set onremoverendition(e){sR(this,ll)&&(this.removeEventListener("removerendition",sR(this,ll)),sM(this,ll,void 0)),"function"==typeof e&&(sM(this,ll,e),this.addEventListener("removerendition",e))}get onchange(){return sR(this,ld)}set onchange(e){sR(this,ld)&&(this.removeEventListener("change",sR(this,ld)),sM(this,ld,void 0)),"function"==typeof e&&(sM(this,ld,e),this.addEventListener("change",e))}};ls=new WeakMap,ll=new WeakMap,ld=new WeakMap;var lc,lh=class{constructor(){sS(this,"src"),sS(this,"id"),sS(this,"bitrate"),sS(this,"codec"),sL(this,lc,!1)}get selected(){return sR(this,lc)}set selected(e){var t;let i;sR(this,lc)===e||(sM(this,lc,e),t=this,(i=sz(t).media.audioRenditions)&&!sz(i).changeRequested&&(sz(i).changeRequested=!0,queueMicrotask(()=>{delete sz(i).changeRequested,sz(t).track.enabled&&i.dispatchEvent(new Event("change"))})))}};function lm(e,t){let i=e.audioTracks;sz(t).media=e,sz(t).renditionSet||(sz(t).renditionSet=new Set);let a=sz(i).trackSet;a.add(t);let r=a.size-1;r in ly.prototype||Object.defineProperty(ly.prototype,r,{get(){return[...sz(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new sZ("addtrack",{track:t}))})}function lp(e){var t;let i=null==(t=sz(e).media)?void 0:t.audioTracks;i&&(sz(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new sZ("removetrack",{track:e}))}))}lc=new WeakMap;var lv,lb,lf,lE,lg,ly=class extends EventTarget{constructor(){super(),sL(this,lE),sL(this,lv,void 0),sL(this,lb,void 0),sL(this,lf,void 0),sz(this).trackSet=new Set}[Symbol.iterator](){return sR(this,lE,lg).values()}get length(){return sR(this,lE,lg).size}getTrackById(e){var t;return null!=(t=[...sR(this,lE,lg)].find(t=>t.id===e))?t:null}get onaddtrack(){return sR(this,lv)}set onaddtrack(e){sR(this,lv)&&(this.removeEventListener("addtrack",sR(this,lv)),sM(this,lv,void 0)),"function"==typeof e&&(sM(this,lv,e),this.addEventListener("addtrack",e))}get onremovetrack(){return sR(this,lb)}set onremovetrack(e){sR(this,lb)&&(this.removeEventListener("removetrack",sR(this,lb)),sM(this,lb,void 0)),"function"==typeof e&&(sM(this,lb,e),this.addEventListener("removetrack",e))}get onchange(){return sR(this,lf)}set onchange(e){sR(this,lf)&&(this.removeEventListener("change",sR(this,lf)),sM(this,lf,void 0)),"function"==typeof e&&(sM(this,lf,e),this.addEventListener("change",e))}};lv=new WeakMap,lb=new WeakMap,lf=new WeakMap,lE=new WeakSet,lg=function(){return sz(this).trackSet};var l_,lA=class{constructor(){sS(this,"id"),sS(this,"kind"),sS(this,"label",""),sS(this,"language",""),sS(this,"sourceBuffer"),sL(this,l_,!1)}addRendition(e,t,i){var a;let r,n,o,s=new lh;return s.src=e,s.codec=t,s.bitrate=i,a=this,r=sz(a).media.audioRenditions,sz(s).media=sz(a).media,sz(s).track=a,(n=sz(a).renditionSet).add(s),(o=n.size-1)in lu.prototype||Object.defineProperty(lu.prototype,o,{get(){return lo(this)[o]}}),queueMicrotask(()=>{a.enabled&&r.dispatchEvent(new s7("addrendition",{rendition:s}))}),s}removeRendition(e){let t,i;t=sz(e).media.audioRenditions,i=sz(e).track,sz(i).renditionSet.delete(e),queueMicrotask(()=>{sz(e).track.enabled&&t.dispatchEvent(new s7("removerendition",{rendition:e}))})}get enabled(){return sR(this,l_)}set enabled(e){let t;sR(this,l_)===e||(sM(this,l_,e),(t=sz(this).media.audioTracks)&&!sz(t).changeRequested&&(sz(t).changeRequested=!0,queueMicrotask(()=>{delete sz(t).changeRequested,t.dispatchEvent(new Event("change"))})))}};l_=new WeakMap;var lk=lw(globalThis.HTMLMediaElement,"video"),lT=lw(globalThis.HTMLMediaElement,"audio");function lw(e,t){var i;if(null!=e&&e.prototype)return null==(i=Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`))?void 0:i.get}sj.push("castchange","entercast","leavecast");var lI,lS,lD,lR,lL,lM,lC,lO,lx,lN=function(e){if(!(null!=e&&e.prototype))return e;let t=lw(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){return function(e){var t;let i=sz(e).videoTracks;if(!i&&(i=new s4,sz(e).videoTracks=i,lk)){let a=lk.call(null!=(t=e.nativeEl)?t:e);for(let t of a)sX(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof ln)){for(let e of a)sJ(e);return}sX(e,t.track)}),a.addEventListener("removetrack",e=>{sJ(e.track)})}return i}(this)}});let i=lw(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){return function(e){var t;let i=sz(e).audioTracks;if(!i&&(i=new ly,sz(e).audioTracks=i,lT)){let a=lT.call(null!=(t=e.nativeEl)?t:e);for(let t of a)lm(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof lA)){for(let e of a)lp(e);return}lm(e,t.track)}),a.addEventListener("removetrack",e=>{lp(e.track)})}return i}(this)}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new ln;return a.kind=e,a.label=t,a.language=i,sX(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=sJ),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new lA;return a.kind=e,a.label=t,a.language=i,lm(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=lp),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=sz(e).videoRenditions;return t||(sz(t=new lt).media=e,sz(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=sz(e).audioRenditions;return t||(sz(t=new lu).media=e,sz(e).audioRenditions=t),t};return e}(sG(sW.HTMLElement,{tag:"video",is:"castable-video"})),lP={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_COOKIES:"disable-cookies",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type"},lU=Object.values(lP),lB=class extends lN{constructor(){super(),sL(this,lO),sL(this,lI,void 0),sL(this,lS,void 0),sL(this,lD,void 0),sL(this,lR,{}),sL(this,lL,void 0),sL(this,lM,void 0),sL(this,lC,void 0),sM(this,lD,o9())}static get observedAttributes(){var e;return[...lU,...null!=(e=lN.observedAttributes)?e:[]]}get preferCmcd(){var e;return null!=(e=this.getAttribute(lP.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?rr.includes(e)?this.setAttribute(lP.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${rr.join()}`):this.removeAttribute(lP.PREFER_CMCD))}get playerInitTime(){return sR(this,lD)}get playerSoftwareName(){var e;return null!=(e=sR(this,lM))?e:"mux-video"}set playerSoftwareName(e){sM(this,lM,e)}get playerSoftwareVersion(){var e;return null!=(e=sR(this,lL))?e:sV}set playerSoftwareVersion(e){sM(this,lL,e)}get _hls(){var e;return null==(e=sR(this,lI))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=sn(this.nativeEl))?e:null}get errorTranslator(){return sR(this,lC)}set errorTranslator(e){sM(this,lC,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(lP.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(lP.TYPE,e):this.removeAttribute(lP.TYPE))}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(lP.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(lP.DEBUG,""):this.removeAttribute(lP.DEBUG))}get disableCookies(){return this.hasAttribute(lP.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(lP.DISABLE_COOKIES,""):this.removeAttribute(lP.DISABLE_COOKIES))}get startTime(){let e=this.getAttribute(lP.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(lP.START_TIME):this.setAttribute(lP.START_TIME,`${e}`))}get playbackId(){var e;return null!=(e=this.getAttribute(lP.PLAYBACK_ID))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(lP.PLAYBACK_ID,e):this.removeAttribute(lP.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(lP.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(lP.MAX_RESOLUTION,e):this.removeAttribute(lP.MAX_RESOLUTION))}get customDomain(){var e;return null!=(e=this.getAttribute(lP.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(lP.CUSTOM_DOMAIN,e):this.removeAttribute(lP.CUSTOM_DOMAIN))}get ended(){return sm(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(lP.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(lP.ENV_KEY,e):this.removeAttribute(lP.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(lP.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(lP.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(lP.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(lP.STREAM_TYPE))?e:so(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(lP.STREAM_TYPE,e):this.removeAttribute(lP.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(lP.TARGET_LIVE_WINDOW)?+this.getAttribute(lP.TARGET_LIVE_WINDOW):ss(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(lP.TARGET_LIVE_WINDOW):this.setAttribute(lP.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(lP.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return sd(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(lP.LIVE_EDGE_OFFSET))return+this.getAttribute(lP.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(lP.LIVE_EDGE_OFFSET):this.setAttribute(lP.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return sl(this.nativeEl)}async addCuePoints(e){return rA(this.nativeEl,e)}get activeCuePoint(){return rT(this.nativeEl)}get cuePoints(){return function(e,t={label:rg}){let i=r_(e,t);return null!=i&&i.cues?Array.from(i.cues,e=>rk(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){return function(e,t){if(t&&t.playingDate)return t.playingDate;if("function"==typeof e.getStartDate){let t=e.getStartDate();return new Date(t.getTime()+1e3*e.currentTime)}return new Date(NaN)}(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(lP.PREFER_PLAYBACK);if(e===ri.MSE||e===ri.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===ri.MSE||e===ri.NATIVE?this.setAttribute(lP.PREFER_PLAYBACK,e):this.removeAttribute(lP.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![lP.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...sR(this,lR)}}set metadata(e){sM(this,lR,null!=e?e:{}),this.mux&&this.mux.emit("hb",sR(this,lR))}load(){sM(this,lI,sp(this,this.nativeEl,sR(this,lI)))}unload(){sv(this.nativeEl,sR(this,lI)),sM(this,lI,void 0)}attributeChangedCallback(e,t,i){var a,r;switch(lN.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case lP.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case lP.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?sC(this,lO,lx).call(this):e&&!a?this.unload():e&&a&&(this.unload(),sC(this,lO,lx).call(this));break}case"autoplay":if(i===t)break;null==(a=sR(this,lI))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=sR(this,lI))||r.setPreload(i);break;case lP.PLAYBACK_ID:this.src=st(null!=i?i:void 0,{maxResolution:this.maxResolution,domain:this.customDomain});break;case lP.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case lP.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case lP.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case lP.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}))}}connectedCallback(){var e;null==(e=super.connectedCallback)||e.call(this),this.nativeEl&&this.src&&!sR(this,lI)&&sC(this,lO,lx).call(this)}disconnectedCallback(){this.unload()}};lI=new WeakMap,lS=new WeakMap,lD=new WeakMap,lR=new WeakMap,lL=new WeakMap,lM=new WeakMap,lC=new WeakMap,lO=new WeakSet,lx=async function(){sR(this,lS)||(await sM(this,lS,Promise.resolve()),sM(this,lS,null),this.load())},sW.customElements.get("mux-video")||(sW.customElements.define("mux-video",lB),sW.MuxVideoElement=lB);var lW=Object.defineProperty,lV=(e,t,i)=>t in e?lW(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,lq=(e,t,i)=>(lV(e,"symbol"!=typeof t?t+"":t,i),i),lH=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lF=(e,t,i)=>(lH(e,t,"read from private field"),i?i.call(e):t.get(e)),lj=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l$=(e,t,i,a)=>(lH(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let lK={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof l0&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof l0?a.element[a.attributeName]=t:a.value=t}}}};class lY extends Z.DocumentFragment{constructor(e,t,i=lK){var a;super(),lj(this,dT,void 0),lj(this,dw,void 0),this.append(e.content.cloneNode(!0)),l$(this,dT,lG(this)),l$(this,dw,i),null==(a=i.createCallback)||a.call(i,this,lF(this,dT),t),i.processCallback(this,lF(this,dT),t)}update(e){lF(this,dw).processCallback(this,lF(this,dT),e)}}dT=new WeakMap,dw=new WeakMap;let lG=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new lJ;for([i,a]of lQ(r.value))if(i){let i=new l0(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){if(1===r.nodeType||r.data.includes("{{")){let n=[];if(r.data)for([i,a]of lQ(r.data))if(i){let i=new l1(e);n.push(i),t.push([a,i])}else n.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new l2(e,r);n.push(i),t.push([i.expression,i])}r.replaceWith(...n.flatMap(e=>e.replacementNodes||[e]))}}else lG(r,t);return t},lZ={},lQ=e=>{let t="",i=0,a=lZ[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),lZ[e]=a};class lz{get value(){return""}set value(e){}toString(){return this.value}}let lX=new WeakMap;class lJ{constructor(){lj(this,dI,[])}[Symbol.iterator](){return lF(this,dI).values()}get length(){return lF(this,dI).length}item(e){return lF(this,dI)[e]}append(...e){for(let t of e)t instanceof l0&&lX.set(t,this),lF(this,dI).push(t)}toString(){return lF(this,dI).join("")}}dI=new WeakMap;class l0 extends lz{constructor(e,t,i){super(),lj(this,dM),lj(this,dS,""),lj(this,dD,void 0),lj(this,dR,void 0),lj(this,dL,void 0),l$(this,dD,e),l$(this,dR,t),l$(this,dL,i)}get attributeName(){return lF(this,dR)}get attributeNamespace(){return lF(this,dL)}get element(){return lF(this,dD)}get value(){return lF(this,dS)}set value(e){lF(this,dS)!==e&&(l$(this,dS,e),lF(this,dM,dC)&&1!==lF(this,dM,dC).length?lF(this,dD).setAttributeNS(lF(this,dL),lF(this,dR),lF(this,dM,dC)):null==e?lF(this,dD).removeAttributeNS(lF(this,dL),lF(this,dR)):lF(this,dD).setAttributeNS(lF(this,dL),lF(this,dR),e))}get booleanValue(){return lF(this,dD).hasAttributeNS(lF(this,dL),lF(this,dR))}set booleanValue(e){if(lF(this,dM,dC)&&1!==lF(this,dM,dC).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}dS=new WeakMap,dD=new WeakMap,dR=new WeakMap,dL=new WeakMap,dM=new WeakSet,dC=function(){return lX.get(this)};class l1 extends lz{constructor(e,t){super(),lj(this,dO,void 0),lj(this,dx,void 0),l$(this,dO,e),l$(this,dx,t?[...t]:[new Text])}get replacementNodes(){return lF(this,dx)}get parentNode(){return lF(this,dO)}get nextSibling(){return lF(this,dx)[lF(this,dx).length-1].nextSibling}get previousSibling(){return lF(this,dx)[0].previousSibling}get value(){return lF(this,dx).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),l$(this,dx,function(e,t,i,a=null){let r=0,n,o,s,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)s=i[r++],o=n?n.nextSibling:a,n==s?n=o:r<l&&i[r]==o?(e.replaceChild(s,n),n=o):e.insertBefore(s,n);for(;n!=a;)o=n.nextSibling,e.removeChild(n),n=o}return i}(lF(this,dx)[0].parentNode,lF(this,dx),t,this.nextSibling))}}dO=new WeakMap,dx=new WeakMap;class l2 extends l1{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),lq(this,"directive"),this.expression=a,this.template=t,this.directive=i}}let l5={string:e=>String(e)};class l3{constructor(e){this.template=e,this.state=void 0}}let l4=new WeakMap,l7=new WeakMap,l8={partial:(e,t)=>{t[e.expression]=new l3(e.template)},if:(e,t)=>{var i;if(dt(e.expression,t)){if(l4.get(e)!==e.template){l4.set(e,e.template);let i=new lY(e.template,t,l9);e.replace(i),l7.set(e,i)}else null==(i=l7.get(e))||i.update(t)}else e.replace(""),l4.delete(e),l7.delete(e)}},l6=Object.keys(l8),l9={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof l2){if(!n.directive){let e=l6.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=l8[n.directive])||a.call(l8,n,i);continue}let t=dt(e,i);if(t instanceof l3){l4.get(n)!==t.template?(l4.set(n,t.template),t=new lY(t.template,t.state,l9),n.value=t,l7.set(n,t)):null==(r=l7.get(n))||r.update(t.state);continue}t?(n instanceof l0&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof l0?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,l4.delete(n),l7.delete(n))):n instanceof l0?n.value=void 0:(n.value=void 0,l4.delete(n),l7.delete(n))}}},de={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=l5[t])?void 0:i.call(l5,e)}};function dt(e,t={}){var i,a,r,n,o,s,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return di(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return di(e);let s={...t};i.state=s;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(o=l[e+2])?void 0:o.token;i&&"="===a&&(s[i]=dr(d,t))}return i}if(1===d.length)return da(d[0])?dr(d[0].token,t):di(e);if(2===d.length){let i=null==(s=d[0])?void 0:s.token,a=de[i];if(!a||!da(d[1]))return di(e);let r=dr(d[1].token,t);return a(r)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=de[i];if(!a||!da(d[0])||!da(d[2]))return di(e);let r=dr(d[0].token,t);if("|"===i)return a(r,d[2].token);let n=dr(d[2].token,t);return a(r,n)}}function di(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function da({type:e}){return["number","boolean","string","param"].includes(e)}function dr(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):w(e)?parseFloat(e):t[e]}var dn=Object.defineProperty,ds=(e,t,i)=>t in e?dn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,dl=(e,t,i)=>(ds(e,"symbol"!=typeof t?t+"":t,i),i),dd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},du=(e,t,i)=>(dd(e,t,"read from private field"),i?i.call(e):t.get(e)),dc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dh=(e,t,i,a)=>(dd(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dm=(e,t,i)=>(dd(e,t,"access private method"),i);let dp={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},dv=Q.createElement("template");dv.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-controller:not([mediasubtitleslist]) media-captions-selectmenu,
    media-captions-button:not([mediasubtitleslist]),
    media-rendition-selectmenu[mediarenditionunavailable],
    media-audio-track-selectmenu[mediaaudiotrackunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class db extends Z.HTMLElement{constructor(){super(),dc(this,dB),dc(this,dV),dl(this,"renderRoot"),dl(this,"renderer"),dc(this,dN,void 0),dc(this,dP,void 0),dc(this,dU,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(dp[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(c.BREAKPOINTS_COMPUTED,this.render),dm(this,dB,dW).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=du(this,dN))?e:this.constructor.template}set template(e){dh(this,dU,null),dh(this,dN,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>dp[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=dp[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(w(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&dm(this,dV,dq).call(this)}connectedCallback(){dm(this,dV,dq).call(this)}createRenderer(){this.template&&this.template!==du(this,dP)&&(dh(this,dP,this.template),this.renderer=new lY(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(dv.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function df(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}dN=new WeakMap,dP=new WeakMap,dU=new WeakMap,dB=new WeakSet,dW=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},dV=new WeakSet,dq=function(){var e;let t=this.getAttribute("template");if(!t||t===du(this,dU))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){dh(this,dU,t),dh(this,dN,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(dh(this,dU,t),df(t).then(e=>{let t=Q.createElement("template");t.innerHTML=e,dh(this,dN,t),this.createRenderer()}).catch(console.error))},dl(db,"template"),dl(db,"observedAttributes",["template"]),dl(db,"processor",l9),Z.customElements.get("media-theme")||Z.customElements.define("media-theme",db);var dE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dg=(e,t,i)=>(dE(e,t,"read from private field"),i?i.call(e):t.get(e)),dy=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},d_=(e,t,i,a)=>(dE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dA=(e,t,i)=>(dE(e,t,"access private method"),i),dk=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};"undefined"==typeof DocumentFragment&&(globalThis.DocumentFragment=class extends dk{});var dT,dw,dI,dS,dD,dR,dL,dM,dC,dO,dx,dN,dP,dU,dB,dW,dV,dq,dH,dF=class extends dk{},dj=class{constructor(e,t={}){dy(this,dH,void 0),d_(this,dH,null==t?void 0:t.detail)}get detail(){return dg(this,dH)}initCustomEvent(){}};dH=new WeakMap;var d$={document:{createElement:function(e,t){return new dF}},DocumentFragment,customElements:{get(e){},define(e,t,i){},upgrade(e){},whenDefined:e=>Promise.resolve(dF)},CustomEvent:dj,EventTarget:dk,HTMLElement:dF,HTMLVideoElement:class extends dk{}},dK="undefined"==typeof window||void 0===globalThis.customElements,dY=dK?d$:globalThis,dG=dK?d$.document:globalThis.document,dZ={code:"en"};function dQ(e,t=!0){var i;let a=t&&null!=(i=null==dZ?void 0:dZ[e])?i:e,r=t?dZ.code:"en";return new dz(a,r)}var dz=class{constructor(e,t=null!=(d5=dZ.code)?d5:"en"){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}};function dX(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function dJ(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function d0(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function d1(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}function d2(e){let t=(null!=e?e:"").split(".")[1];return t?JSON.parse(decodeURIComponent(atob(t.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{}}var d5,d3,d4,d7,d8=(e,t)=>!!e&&!!t&&(!!e.contains(t)||d8(e,t.getRootNode().host)),d6="mux.com",d9=(()=>{try{return"1.15.0"}catch{}return"UNKNOWN"})(),ue=(e,{maxResolution:t,token:i,domain:a=d6}={})=>`https://stream.${a}/${e}.m3u8${d1(i?{token:i}:{redundant_streams:!0,...t?{max_resolution:t}:{}})}`,ut=(e,{token:t,thumbnailTime:i,domain:a=d6}={})=>{let r=null==t?i:void 0,{aud:n}=d2(t);if(!(t&&"t"!==n))return`https://image.${a}/${e}/thumbnail.webp${d1({token:t,time:r})}`},ui=(e,{token:t,domain:i=d6}={})=>{let{aud:a}=d2(t);if(!(t&&"s"!==a))return`https://image.${i}/${e}/storyboard.vtt${d1({token:t,format:"webp"})}`},ua=e=>{if(e){if([rt.LIVE,rt.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return rt.LIVE}},ur={crossorigin:"crossOrigin",playsinline:"playsInline"},un=class{constructor(e,t){dy(this,d3,void 0),dy(this,d4,void 0),dy(this,d7,[]),d_(this,d3,e),d_(this,d4,t)}[Symbol.iterator](){return dg(this,d7).values()}get length(){return dg(this,d7).length}get value(){var e;return null!=(e=dg(this,d7).join(" "))?e:""}set value(e){var t;e!==this.value&&(d_(this,d7,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return dg(this,d7)[e]}values(){return dg(this,d7).values()}keys(){return dg(this,d7).keys()}forEach(e){dg(this,d7).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||dg(this,d7).push(e)}),(""!==this.value||null!=(t=dg(this,d3))&&t.hasAttribute(`${dg(this,d4)}`))&&null!=(i=dg(this,d3))&&i.setAttribute(`${dg(this,d4)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{dg(this,d7).splice(dg(this,d7).indexOf(e),1)}),null==(t=dg(this,d3))||t.setAttribute(`${dg(this,d4)}`,`${this.value}`)}contains(e){return dg(this,d7).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};d3=new WeakMap,d4=new WeakMap,d7=new WeakMap;var uo=`[mux-player ${d9}]`;function us(...e){console.warn(uo,...e)}function ul(...e){console.error(uo,...e)}function ud(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${dQ("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),us(i)}var uu={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},uc={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},uh=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),um=sj.filter(e=>"error"!==e),up=Object.values(uu).filter(e=>![uu.PLAYSINLINE].includes(e)),uv=Object.values(uc);function ub(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var uf=class extends dY.HTMLElement{static get observedAttributes(){return[...up,...uv]}constructor(){super(),this.querySelectorAll(":scope > track").forEach(e=>{var t;null==(t=this.media)||t.append(e.cloneNode())}),new MutationObserver(e=>{for(let t of e)"childList"===t.type&&(t.removedNodes.forEach(e=>{var t,i;let a=null==(t=this.media)?void 0:t.querySelector(`track[src="${e.src}"]`);a&&(null==(i=this.media)||i.removeChild(a))}),t.addedNodes.forEach(e=>{var t;null==(t=this.media)||t.append(e.cloneNode())}))}).observe(this,{childList:!0,subtree:!0})}attributeChangedCallback(e,t,i){var a,r;switch(e){case uc.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case uc.VOLUME:{let e=null!=(a=d0(i))?a:1;this.media&&(this.media.volume=e);return}case uc.PLAYBACKRATE:{let e=null!=(r=d0(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}requestCast(e){var t;return null==(t=this.media)?void 0:t.requestCast(e)}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:uh}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:uh}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=d0(this.getAttribute(uc.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(uc.PLAYBACKRATE,`${e}`):this.removeAttribute(uc.PLAYBACKRATE)}get crossOrigin(){return ub(this,uu.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(uu.CROSSORIGIN,`${e}`)}get autoplay(){return null!=ub(this,uu.AUTOPLAY)}set autoplay(e){e?this.setAttribute(uu.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(uu.AUTOPLAY)}get loop(){return null!=ub(this,uu.LOOP)}set loop(e){e?this.setAttribute(uu.LOOP,""):this.removeAttribute(uu.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=ub(this,uu.MUTED)}set defaultMuted(e){e?this.setAttribute(uu.MUTED,""):this.removeAttribute(uu.MUTED)}get playsInline(){return null!=ub(this,uu.PLAYSINLINE)}set playsInline(e){ul("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(uu.PRELOAD,e):this.removeAttribute(uu.PRELOAD)}},uE=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-selectmenu-display: var(--captions-selectmenu, var(--media-captions-button-display));
  --media-rendition-selectmenu-display: var(--rendition-selectmenu);
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button);
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  width: 100%;
  line-height: 0;
}

/* Hide custom elements that are not defined yet */
:not(:defined) {
  display: none;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--top-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--top-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--top-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--center-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--center-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--center-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--bottom-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--bottom-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--bottom-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}
`,ug=`
  :host {
    z-index: 100;
    display: var(--media-dialog-display, flex);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    color: #fff;
    line-height: 18px;
    font-family: Arial, sans-serif;
    padding: var(--media-dialog-backdrop-padding, 0);
    background: var(--media-dialog-backdrop-background,
      linear-gradient(to bottom, rgba(20, 20, 30, 0.7) 50%, rgba(20, 20, 30, 0.9))
    );
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-open, visibility .2s, opacity .2s) !important;
    transform: var(--media-dialog-transform-open, none) !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
  }

  :host(:not([open])) {
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-close, visibility .1s, opacity .1s) !important;
    transform: var(--media-dialog-transform-close, none) !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px rgba(27, 127, 204, 0.9);
  }

  .dialog {
    position: relative;
    box-sizing: border-box;
    background: var(--media-dialog-background, none);
    padding: var(--media-dialog-padding, 10px);
    width: min(320px, 100%);
    word-wrap: break-word;
    max-height: 100%;
    overflow: auto;
    text-align: center;
    line-height: 1.4;
  }
`,uy=dG.createElement("template");uy.innerHTML=`
  <style>
    ${ug}
  </style>

  <div class="dialog">
    <slot></slot>
  </div>
`;var u_=class extends dY.HTMLElement{constructor(){var e;super(),this.attachShadow({mode:"open"}),null==(e=this.shadowRoot)||e.appendChild(this.constructor.template.content.cloneNode(!0))}show(){this.setAttribute("open",""),this.dispatchEvent(new CustomEvent("open",{composed:!0,bubbles:!0})),uA(this)}close(){this.hasAttribute("open")&&(this.removeAttribute("open"),this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0})),this._previouslyFocusedElement instanceof HTMLElement&&this._previouslyFocusedElement.focus())}attributeChangedCallback(e,t,i){"open"===e&&t!==i&&(null!=i?this.show():this.close())}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","dialog"),this.hasAttribute("open")&&uA(this)}};function uA(e){let t=new CustomEvent("initfocus",{composed:!0,bubbles:!0,cancelable:!0});if(e.dispatchEvent(t),t.defaultPrevented)return;let i=e.querySelector("[autofocus]:not([disabled])");!i&&e.tabIndex>=0&&(i=e),i||(i=function e(t){let i=["button","input","keygen","select","textarea"].map(function(e){return e+":not([disabled])"});i.push('[tabindex]:not([disabled]):not([tabindex=""])');let a=null==t?void 0:t.querySelector(i.join(", "));if(!a&&"attachShadow"in Element.prototype){let i=(null==t?void 0:t.querySelectorAll("*"))||[];for(let t=0;t<i.length&&!(i[t].tagName&&i[t].shadowRoot&&(a=e(i[t].shadowRoot)));t++);}return a}(e.shadowRoot)),e._previouslyFocusedElement=dG.activeElement,dG.activeElement instanceof HTMLElement&&dG.activeElement.blur(),e.addEventListener("transitionend",()=>{i instanceof HTMLElement&&i.focus({preventScroll:!0})},{once:!0})}u_.styles=ug,u_.template=uy,u_.observedAttributes=["open"],dY.customElements.get("media-dialog")||(dY.customElements.define("media-dialog",u_),dY.MediaDialog=u_);var uk=u_,uT=dG.createElement("template");uT.innerHTML=`
  <style>
    ${uk.styles}

    .close {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      width: 28px;
      height: 28px;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  </style>

  <div class="dialog">
    <slot></slot>
  </div>

  <slot name="close">
    <button class="close" tabindex="0">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </slot>
`;var uw=class extends uk{constructor(){var e,t;super(),null==(t=null==(e=this.shadowRoot)?void 0:e.querySelector(".close"))||t.addEventListener("click",()=>{this.close()})}};uw.template=uT,dY.customElements.get("mxp-dialog")||(dY.customElements.define("mxp-dialog",uw),dY.MxpDialog=uw);var uI=new WeakMap,uS=class{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=uI.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=uI.get(this.element);e&&e.delete(this.type)}}static for(e){uI.has(e.element)||uI.set(e.element,new Map);let t=e.attributeName.slice(2),i=uI.get(e.element);return i&&i.has(t)?i.get(t):new uS(e.element,t)}},uD=new Map,uR=new WeakMap,uL=new WeakMap,uM=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(uD.has(this.stringsKey))return uD.get(this.stringsKey);{let e=dG.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),uD.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(uR.get(e)!==i){uR.set(e,i);let t=new lY(i,this.values,this.processor);uL.set(e,t),e instanceof l1?e.replace(...t.children):e.appendChild(t);return}let a=uL.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},uC={processCallback(e,t,i){var a,r,n;if(i)for(let[e,o]of t){e in i&&(function(e,t){if(e instanceof l0&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}(r=o,n=null!=(a=i[e])?a:"")||function(e,t){if("boolean"==typeof t&&e instanceof l0){let i=e.attributeNamespace,a=e.element.hasAttributeNS(i,e.attributeName);return t!==a&&(e.booleanValue=t),!0}return!1}(r,n)||r instanceof l0&&r.attributeName.startsWith("on")&&(uS.for(r).set(n),r.element.removeAttributeNS(r.attributeNamespace,r.attributeName),1)||!1===n&&r instanceof l1&&(r.replace(""),1)||n instanceof uM&&r instanceof l1&&(n.renderInto(r),1)||n instanceof DocumentFragment&&r instanceof l1&&(n.childNodes.length&&r.replace(...n.childNodes),1)||function(e,t){if(e instanceof l0){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(r,n))}}};function uO(e,...t){return new uM(e,t,uC)}var ux=e=>uO`
  <style>
    ${uE}
  </style>
  ${uP(e)}
`,uN=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===ua(e.streamType)&&(t+=" noarrowleft noarrowright"),t},uP=e=>{var t,i,a,r,n,o,s,l,d,u,c,h,m,p,v,b,f,E,g,y,_,A,k,T,w,I,S,D,R,L,M,C,O,x,N;let P;return uO`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${null!=(t=e.defaultStreamType)&&t}"
    hotkeys="${uN(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||e.isDialogOpen||!1}"
    noautoseektolive="${!!(null!=(i=e.streamType)&&i.includes(rt.LIVE))&&0!==e.targetLiveWindow}"
    novolumepref="${e.novolumepref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${null!=(a=e.audio)&&a}"
    style="${null!=(N={"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor},P="",Object.entries(N).forEach(([e,t])=>{null!=t&&(P+=`${dX(e)}: ${t}; `)}),r=P?P.trim():void 0)&&r}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(n=e.forwardSeekOffset)&&n}"
    backwardseekoffset="${null!=(o=e.backwardSeekOffset)&&o}"
    playbackrates="${null!=(s=e.playbackRates)&&s}"
    defaultshowremainingtime="${null!=(l=e.defaultShowRemainingTime)&&l}"
    hideduration="${null!=(d=e.hideDuration)&&d}"
    title="${null!=(u=e.title)&&u}"
    exportparts="top, center, bottom, layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer, controller, poster, live, play, button, seek-backward, seek-forward, mute, captions, airplay, pip, fullscreen, cast, playback-rate, volume, range, time, display, control-bar"
  >
    <mux-video
      slot="media"
      target-live-window="${null!=(c=e.targetLiveWindow)&&c}"
      stream-type="${null!=(h=ua(e.streamType))&&h}"
      crossorigin="${null!=(m=e.crossOrigin)?m:""}"
      playsinline
      autoplay="${null!=(p=e.autoplay)&&p}"
      muted="${null!=(v=e.muted)&&v}"
      loop="${null!=(b=e.loop)&&b}"
      preload="${null!=(f=e.preload)&&f}"
      debug="${null!=(E=e.debug)&&E}"
      prefer-cmcd="${null!=(g=e.preferCmcd)&&g}"
      disable-cookies="${null!=(y=e.disableCookies)&&y}"
      prefer-playback="${null!=(_=e.preferPlayback)&&_}"
      start-time="${null!=e.startTime&&e.startTime}"
      beacon-collection-domain="${null!=(A=e.beaconCollectionDomain)&&A}"
      player-software-name="${null!=(k=e.playerSoftwareName)&&k}"
      player-software-version="${null!=(T=e.playerSoftwareVersion)&&T}"
      env-key="${null!=(w=e.envKey)&&w}"
      custom-domain="${null!=(I=e.customDomain)&&I}"
      src="${e.src?e.src:!!e.playbackId&&ue(e.playbackId,{maxResolution:e.maxResolution,domain:e.customDomain,token:e.tokens.playback})}"
      cast-src="${e.src?e.src:!!e.playbackId&&ue(e.playbackId,{maxResolution:e.maxResolution,domain:e.customDomain,token:e.tokens.playback})}"
      exportparts="video"
    >
      ${e.storyboard?uO`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:uO``}
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${""!==e.poster&&null!=(S=e.poster)&&S}"
        placeholdersrc="${null!=(D=e.placeholder)&&D}"
      ></media-poster-image>
    </slot>
    <mxp-dialog
      no-auto-hide
      open="${null!=(R=e.isDialogOpen)&&R}"
      onclose="${e.onCloseErrorDialog}"
      oninitfocus="${e.onInitFocusDialog}"
    >
      ${null!=(L=e.dialog)&&L.title?uO`<h3>${e.dialog.title}</h3>`:uO``}
      <p>
        ${null==(M=e.dialog)?void 0:M.message}
        ${null!=(C=e.dialog)&&C.linkUrl?uO`<a
              href="${e.dialog.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(O=e.dialog.linkText)?O:""} ${dQ("(opens in a new window)")}"
              >${null!=(x=e.dialog.linkText)?x:e.dialog.linkUrl}</a
            >`:uO``}
      </p>
    </mxp-dialog>
  </media-theme>
`};function uU(e,t,i,a,r){var n,o,s;let l={},d={};switch(e.code){case a8.MEDIA_ERR_NETWORK:switch(l.title=dQ("Network Error",r),l.message=e.message,null==(n=e.data)?void 0:n.response.code){case 412:l.title=dQ("Video is not currently available",r),l.message=dQ("The live stream or video file are not yet ready.",r),d.message=dQ("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),d.file="412-not-playable.md";break;case 404:l.title=dQ("Video does not exist",r),l.message="",d.message=dQ("This playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),d.file="404-not-found.md";break;case 403:{if(l.title=dQ("Invalid playback URL",r),l.message=dQ("The video URL or playback-token are formatted with incorrect or incomplete information.",r),d.message=dQ("403 error trying to access this playback URL. If this is a signed URL, you might need to provide a playback-token.",r),d.file="missing-signed-tokens.md",!a)break;let{exp:e,aud:t,sub:n}=d2(a),o=Date.now()>1e3*e,s=n!==i,u="v"!==t,c={};if(o){l.title=dQ("Video URL has expired",r),l.message=dQ("The video’s secured playback-token has expired.",r),d.message=dQ("The video’s secured playback-token has expired.",r),d.context=dQ("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat(dZ.code,c).format(1e3*e),currentDate:new Intl.DateTimeFormat(dZ.code,c).format(Date.now())}),d.file="403-expired-token.md";break}if(s){l.title=dQ("Video URL is formatted incorrectly",r),l.message=dQ("The video’s playback ID does not match the one encoded in the playback-token.",r),d.message=dQ("The video’s playback ID does not match the one encoded in the playback-token.",r),d.context=dQ("Specified playback ID: {playbackId} and the playback ID encoded in the playback-token: {tokenPlaybackId}",r).format({playbackId:i,tokenPlaybackId:n}),d.file="403-playback-id-mismatch.md";break}if(u){l.title=dQ("Video URL is formatted incorrectly",r),l.message=dQ("The playback-token is formatted with incorrect information.",r),d.message=dQ("The playback-token is formatted with incorrect information.",r),d.context=dQ("The playback-token has an incorrect aud value: {tokenType}. aud value should be v.",r).format({tokenType:t}),d.file="403-incorrect-aud-value.md";break}d.message=dQ("403 error trying to access this playback URL. If this is a signed playback ID, the token might not have been generated correctly.",r),d.file="403-malformatted-token.md"}}break;case a8.MEDIA_ERR_DECODE:{let{message:t}=e;l={title:dQ("Media Error",r),message:t},d.file="media-decode-error.md";break}case a8.MEDIA_ERR_SRC_NOT_SUPPORTED:{let n=null==(s=null==(o=e.data)?void 0:o.response)?void 0:s.code;if(n>=400&&n<500){e.code=a8.MEDIA_ERR_NETWORK,e.data={response:{code:n}},{dialog:l,devlog:d}=uU(e,t,i,a);break}l={title:dQ("Source Not Supported",r),message:e.message},d.file="media-src-not-supported.md";break}default:l={title:dQ("Error",r),message:e.message}}return t&&(l={title:dQ("Your device appears to be offline",r),message:dQ("Check your internet connection and try reloading this video.",r)}),{dialog:l,devlog:d}}var uB=`<!-- prettier-ignore -->
<template id="media-theme-classic">
  <style>
    :host {
      --_primary-color: var(--media-primary-color, white);
      --_secondary-color: var(--media-secondary-color, rgb(0 0 0 / .75));

      --media-icon-color: var(--_primary-color);
      --media-range-thumb-background: var(--_primary-color);
      --media-range-bar-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_secondary-color);
      --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
      --media-range-track-background:
        linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        linear-gradient(rgba(20, 20, 30, 0.7), rgba(20, 20, 30, 0.7));
      --media-preview-thumbnail-border: 0;
      --media-preview-thumbnail-border-radius: 2px 2px 0 0;
      --media-preview-time-border-radius: 0 0 2px 2px;
      --media-preview-time-margin: 0 0 8px;
      --media-preview-time-text-shadow: none;
      --media-listbox-border-radius: 2px;
      --media-listbox-transform-in: translateY(-8px) scale(1);
      --media-listbox-transform-out: translateY(-6px) scale(.99);
      --media-option-hover-background: rgba(255, 255, 255, 0.28);

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --media-preview-time-border-radius: 3px;
      --media-preview-time-margin: 0 0 5px;
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
    }

    [disabled]:not(media-live-button),
    [aria-disabled='true']:not(media-live-button) {
      opacity: 60%;
      cursor: not-allowed;
    }

    /* 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast. */
    media-controller ::slotted([slot='media']) {
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused],:not([userinactive])) ::slotted([slot='media']) {
      /* 42px is the height of the control bar and progress bar
       * with an additional 5px as a buffer, to get 47px */
      --media-webkit-text-track-transform: translateY(-47px);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    :host media-time-range {
      color: var(--_primary-color);
      --media-range-thumb-opacity: 0;
    }

    :host(:not([audio])) media-time-range {
      --media-range-padding: 0;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar {
      --media-control-padding: 4px 3px;
    }

    [breakpointsm] media-control-bar {
      --media-control-padding: 9px 5px;
    }

    [breakpointmd] media-control-bar {
      --media-control-padding: 9px 7px;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is(media-text-display, media-time-display):first-child {
      --media-control-padding: 9px 5px 9px 10px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    /* Add a small space on the right to have the play button and
     * fullscreen button aligned in relation to the progress bar. */
    media-control-bar:not([slot])::after {
      content: '';
      width: 2px;
      height: 100%;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(160px, 25%);
      background: linear-gradient(rgb(0 0 0 / 0.4), transparent);
    }

    media-control-bar[slot='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow: 0 0 2px rgb(0 0 0 / 0.25), 0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      width: max(43px, min(10%, 55px));
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 2%;
      width: max(33px, min(8%, 40px));
    }

    media-control-bar:not([slot]) media-seek-backward-button {
      padding-right: 5px;
    }

    media-control-bar:not([slot]) media-seek-forward-button {
      padding-left: 5px;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
    }

    media-time-display {
      white-space: nowrap;
    }

    :is(media-time-display, media-text-display, media-playback-rate-button[role='button']) {
      color: inherit;
      line-height: 24px;
    }

    :is(.title-display, media-live-button) {
      color: inherit;
      font-size: 16px;
      text-shadow: 0 0 2px rgb(0 0 0 / 0.6);
    }

    :host([audio]) .title-display {
      flex-grow: 1;
      font-size: 21px;
    }
  </style>

  <template partial="TitleDisplay">
    <template if="title">
      <media-text-display part="top title display" class="title-display">
        {{title}}
      </media-text-display>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="play">
        <path d="m6.73 20.93 14.05-8.54a.46.46 0 0 0 0-.78L6.73 3.07a.48.48 0 0 0-.73.39v17.07a.48.48 0 0 0 .73.4Z" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="pause">
        <path
          d="M6 19.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v15ZM14.5 4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 22 24" slot="backward">
        <path d="M11 6V3L5.37 7 11 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 11 6Z" />
        <text class="value" transform="translate(2.5 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 22 24" slot="forward">
        <path d="M11 6V3l5.61 4L11 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 11 6Z" />
        <text class="value" transform="translate(10 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
          {{forwardseekoffset}}
        </text>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="high">
        <path
          d="m11.14 4.86-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.21a.5.5 0 0 0-.86-.35Zm2.74-1.56v1.52A7.52 7.52 0 0 1 19.47 12a7.52 7.52 0 0 1-5.59 7.18v1.52A9 9 0 0 0 21 12a9 9 0 0 0-7.12-8.7Zm3.56 8.7a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="low">
        <path
          d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="medium">
        <path
          d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="off">
        <path
          d="m3 4.05 4.48 4.47-.33.33a.49.49 0 0 1-.36.15H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.48.48 0 0 0 .36.15.5.5 0 0 0 .5-.5v-5.75l4.67 4.66a7.71 7.71 0 0 1-2.79 1.47v1.52a9.32 9.32 0 0 0 3.87-1.91L20 21l1-1L4.06 3 3 4.05Zm5.36 5.36 2.39 2.39V17L8 14.26a1.74 1.74 0 0 0-1.24-.51H4.25v-3.5h2.54A1.74 1.74 0 0 0 8 9.74l.36-.33ZM19.47 12a7.19 7.19 0 0 1-.89 3.47l1.11 1.1A8.64 8.64 0 0 0 21 12a9 9 0 0 0-7.12-8.7v1.52A7.52 7.52 0 0 1 19.47 12ZM12 8.88V5.21a.5.5 0 0 0-.5-.5.48.48 0 0 0-.36.15L9.56 6.44 12 8.88ZM15.91 12a4.284 4.284 0 0 1-.07.72l1.22 1.22a5.2 5.2 0 0 0 .38-1.94 5.49 5.49 0 0 0-3.56-5.1v1.66A4 4 0 0 1 15.91 12Z"
        />
      </svg>
    </media-mute-button>
  </template>

  <template partial="RenditionSelect">
    <media-rendition-selectmenu part="bottom rendition selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-rendition-button slot="button" part="bottom rendition button">
        <svg aria-hidden="true" slot="icon" viewBox="0 0 18 24">
          <path d="M2.25 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
        </svg>
      </media-rendition-button>
      <media-rendition-listbox slot="listbox" part="bottom rendition listbox">
        <div slot="header">Quality</div>
      </media-rendition-listbox>
    </media-rendition-selectmenu>
  </template>

  <template partial="AudioTrackSelect">
    <media-audio-track-selectmenu part="bottom audio-track selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-audio-track-button slot="button" part="bottom audio-track button">
        <svg aria-hidden="true" slot="icon" viewBox="0 0 24 24">
          <path d="M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0 1.5C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"/>
          <path d="M7.25 9.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3-3a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75Zm3 2a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Zm3-1a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75Z"/>
        </svg>
      </media-audio-track-button>
      <media-audio-track-listbox slot="listbox" part="bottom audio-track listbox">
        <div slot="header">Audio</div>
      </media-audio-track-listbox>
    </media-audio-track-selectmenu>
  </template>

  <template partial="CaptionsSelect">
    <media-captions-selectmenu part="bottom captions selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-captions-button slot="button" part="bottom captions button">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="on">
          <path d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.41 10.1a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 4 4 0 0 1-1.28-.83 3.67 3.67 0 0 1-.84-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.53 3.53 0 0 1 .84-1.21 3.89 3.89 0 0 1 1.29-.8 4.76 4.76 0 0 1 1.63-.27 4.06 4.06 0 0 1 1.35.24c.225.091.44.205.64.34a2.7 2.7 0 0 1 .55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.35 2.35 0 0 0-.46.77 2.78 2.78 0 0 0-.16 1c-.009.34.046.68.16 1 .104.283.26.545.46.77.188.21.415.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.88 2.88 0 0 1-1.22 1.01Zm7.52 0a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 3.89 3.89 0 0 1-1.28-.83 3.55 3.55 0 0 1-.85-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.43 3.43 0 0 1 .85-1.25 3.75 3.75 0 0 1 1.28-.8 4.76 4.76 0 0 1 1.63-.27 4 4 0 0 1 1.35.24c.225.091.44.205.64.34.21.144.395.32.55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.352 2.352 0 0 0-.46.77 3.01 3.01 0 0 0-.16 1c-.003.34.05.678.16 1 .108.282.263.542.46.77.188.21.416.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.82 2.82 0 0 1-1.21 1.05Z"/>
        </svg>
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="off">
          <path d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-1.81-.12-4.67-.18-7.53-.18-2.86 0-5.72.06-7.53.18a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c1.81.12 4.67.18 7.53.18 2.86 0 5.72-.06 7.53-.18a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.137-.21-8.283 0-12.42a1.11 1.11 0 0 1 .91-1.11c1.67-.11 4.43-.18 7.43-.18s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.137.21 8.283 0 12.42ZM10.843 14a1.55 1.55 0 0 1-.76.18 1.57 1.57 0 0 1-.71-.18 1.69 1.69 0 0 1-.57-.42 2.099 2.099 0 0 1-.38-.58 2.47 2.47 0 0 1 0-1.64 2 2 0 0 1 .39-.66 1.73 1.73 0 0 1 .58-.42c.23-.103.479-.158.73-.16.241-.004.48.044.7.14.199.088.373.222.51.39l1.08-.89a2.179 2.179 0 0 0-.47-.44 2.81 2.81 0 0 0-.54-.32 2.91 2.91 0 0 0-.58-.15 2.71 2.71 0 0 0-.56 0 4.08 4.08 0 0 0-1.38.15 3.27 3.27 0 0 0-1.09.67 3.14 3.14 0 0 0-.71 1.06 3.62 3.62 0 0 0-.26 1.39 3.57 3.57 0 0 0 .26 1.38 3 3 0 0 0 .71 1.06c.316.293.687.52 1.09.67.443.16.91.238 1.38.23a3.2 3.2 0 0 0 1.28-.27c.401-.183.747-.47 1-.83l-1.17-.88a1.42 1.42 0 0 1-.53.52Zm6.62 0a1.58 1.58 0 0 1-.76.18 1.54 1.54 0 0 1-.7-.18 1.69 1.69 0 0 1-.57-.42 2.12 2.12 0 0 1-.43-.58 2.29 2.29 0 0 1 .39-2.3 1.84 1.84 0 0 1 1.32-.58c.241-.003.48.045.7.14.199.088.373.222.51.39l1.08-.92a2.43 2.43 0 0 0-.47-.44 3.22 3.22 0 0 0-.53-.29 2.999 2.999 0 0 0-.57-.15 2.87 2.87 0 0 0-.57 0 4.06 4.06 0 0 0-1.36.15 3.17 3.17 0 0 0-1.09.67 3 3 0 0 0-.72 1.06 3.62 3.62 0 0 0-.25 1.39 3.57 3.57 0 0 0 .25 1.38c.16.402.405.764.72 1.06a3.17 3.17 0 0 0 1.09.67c.44.16.904.237 1.37.23.441 0 .877-.092 1.28-.27a2.45 2.45 0 0 0 1-.83l-1.15-.85a1.49 1.49 0 0 1-.54.49Z"/>
        </svg>
      </media-captions-button>
      <media-captions-listbox slot="listbox" part="bottom captions listbox"></media-captions-listbox>
    </media-captions-selectmenu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="airplay">
        <path
          d="M13.19 14.22a.25.25 0 0 0-.38 0l-5.46 6.37a.25.25 0 0 0 .19.41h10.92a.25.25 0 0 0 .19-.41l-5.46-6.37Z"
        />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2.94L8 16.75H4.25V4.25h17.5v12.5H18L19.06 18H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
        <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
        <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
        <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
        <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
        <path
          d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
        />
        <path d="M20.5 5.5h-15v5.811c3.52.906 6.283 3.67 7.189 7.19H20.5V5.5Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
        <path
          d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
        <path
          d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="enter">
        <path
          d="M20.25 14.5a.76.76 0 0 0-.75.75v4.25h-4.25a.75.75 0 1 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5a.76.76 0 0 0-.75-.75Zm0-11.5h-5a.76.76 0 0 0-.75.75.76.76 0 0 0 .75.75h4.25v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75ZM8.75 19.5H4.5v-4.25a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75h5a.75.75 0 1 0 0-1.5Zm0-16.5h-5a.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75.76.76 0 0 0 .75-.75V4.5h4.25a.76.76 0 0 0 .75-.75.76.76 0 0 0-.75-.75Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" slot="exit">
        <path
          d="M20.25 14.5h-5a.76.76 0 0 0-.75.75v5a.75.75 0 1 0 1.5 0V16h4.25a.75.75 0 1 0 0-1.5Zm-5-5h5a.75.75 0 1 0 0-1.5H16V3.75a.75.75 0 1 0-1.5 0v5a.76.76 0 0 0 .75.75Zm-6.5 5h-5a.75.75 0 1 0 0 1.5H8v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75Zm0-11.5a.76.76 0 0 0-.75.75V8H3.75a.75.75 0 0 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5A.76.76 0 0 0 8.75 3Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="LiveButton">
    <media-live-button
      part="{{section ?? 'top'}} live button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-live-button>
  </template>

  <template partial="PlaybackRateButton">
    <media-playback-rate-button
      rates="{{playbackrates}}"
      part="bottom playback-rate button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-button>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range
      part="bottom time range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-range>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:300 md:700"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>
    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="audio">

      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          {{>SeekBackwardButton}}
          {{>SeekForwardButton}}
          {{>TimeDisplay}}
          {{>TimeRange}}
          {{>MuteButton}}
          {{>VolumeRange}}
          {{>PlaybackRateButton}}
          {{>AudioTrackSelect}}
          {{>AirplayButton}}
          {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">

        <template if="targetlivewindow > 0">
          <template if="title">
            <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
          </template>
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>LiveButton section="bottom"}}
            {{>SeekBackwardButton}}
            {{>SeekForwardButton}}
            {{>TimeDisplay}}
            {{>TimeRange}}
            {{>MuteButton}}
            {{>VolumeRange}}
            {{>PlaybackRateButton}}
            {{>AudioTrackSelect}}
            {{>AirplayButton}}
            {{>CastButton}}
          </media-control-bar>
        </template>

        <template if="!targetlivewindow">
          <template if="title">
            <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
          </template>
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>LiveButton section="bottom"}}
            {{>MuteButton}}
            {{>VolumeRange}}
            <div class="spacer"></div>
            {{>AudioTrackSelect}}
            {{>AirplayButton}}
            {{>CastButton}}
          </media-control-bar>
        </template>

      </template>
    </template>

    <template if="!audio">

      <template if="streamtype == 'on-demand'">

        <template if="!breakpointsm">
          {{>TimeRange}}
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>MuteButton}}
            <div class="spacer"></div>
            {{>CaptionsSelect}}
            {{>FullscreenButton}}
          </media-control-bar>
        </template>

        <template if="breakpointsm">
          <template if="!breakpointmd">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>SeekBackwardButton section="center"}}
              {{>PlayButton section="center"}}
              {{>SeekForwardButton section="center"}}
            </div>
            {{>TimeRange}}
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>TimeDisplay}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>RenditionSelect}}
              {{>PlaybackRateButton}}
              {{>AudioTrackSelect}}
              {{>CaptionsSelect}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>
        </template>

        <template if="breakpointmd">
          <media-control-bar part="control-bar top" slot="top-chrome">
            {{>TitleDisplay}}
          </media-control-bar>
          <div slot="centered-chrome" class="center-controls">
            {{>PlayButton section="center"}}
          </div>
          {{>TimeRange}}
          <media-control-bar part="control-bar bottom">
            {{>PlayButton}}
            {{>SeekBackwardButton}}
            {{>SeekForwardButton}}
            {{>TimeDisplay}}
            {{>MuteButton}}
            {{>VolumeRange}}
            <div class="spacer"></div>
            {{>RenditionSelect}}
            {{>PlaybackRateButton}}
            {{>AudioTrackSelect}}
            {{>CaptionsSelect}}
            {{>AirplayButton}}
            {{>CastButton}}
            {{>PipButton}}
            {{>FullscreenButton}}
          </media-control-bar>
        </template>

      </template>

      <template if="streamtype == 'live'">

        <template if="!targetlivewindow">

          <template if="!breakpointsm">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
            </media-control-bar>
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>MuteButton}}
              <div class="spacer"></div>
              {{>CaptionsSelect}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

          <template if="breakpointsm">
            <template if="!breakpointmd">
              <media-control-bar part="control-bar top" slot="top-chrome">
                {{>LiveButton}}
                {{>TitleDisplay}}
              </media-control-bar>
              <div slot="centered-chrome" class="center-controls">
                {{>PlayButton section="center"}}
              </div>
              <media-control-bar part="control-bar bottom">
                {{>PlayButton}}
                {{>MuteButton}}
                {{>VolumeRange}}
                <div class="spacer"></div>
                {{>RenditionSelect}}
                {{>AudioTrackSelect}}
                {{>CaptionsSelect}}
                {{>AirplayButton}}
                {{>CastButton}}
                {{>PipButton}}
                {{>FullscreenButton}}
              </media-control-bar>
            </template>
          </template>

          <template if="breakpointmd">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>PlayButton section="center"}}
            </div>
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>RenditionSelect}}
              {{>AudioTrackSelect}}
              {{>CaptionsSelect}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>
        </template>

        <template if="targetlivewindow > 0">

          <template if="!breakpointsm">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
            </media-control-bar>
            {{>TimeRange}}
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>MuteButton}}
              <div class="spacer"></div>
              {{>CaptionsSelect}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

          <template if="breakpointsm">
            <template if="!breakpointmd">
              <media-control-bar part="control-bar top" slot="top-chrome">
                {{>LiveButton}}
                {{>TitleDisplay}}
              </media-control-bar>
              <div slot="centered-chrome" class="center-controls">
                {{>SeekBackwardButton section="center"}}
                {{>PlayButton section="center"}}
                {{>SeekForwardButton section="center"}}
              </div>
              {{>TimeRange}}
              <media-control-bar part="control-bar bottom">
                {{>PlayButton}}
                {{>MuteButton}}
                {{>VolumeRange}}
                <div class="spacer"></div>
                {{>RenditionSelect}}
                {{>AudioTrackSelect}}
                {{>CaptionsSelect}}
                {{>AirplayButton}}
                {{>CastButton}}
                {{>PipButton}}
                {{>FullscreenButton}}
              </media-control-bar>
            </template>
          </template>

          <template if="breakpointmd">
            <media-control-bar part="control-bar top" slot="top-chrome">
              {{>LiveButton}}
              {{>TitleDisplay}}
            </media-control-bar>
            <div slot="centered-chrome" class="center-controls">
              {{>PlayButton section="center"}}
            </div>
            {{>TimeRange}}
            <media-control-bar part="control-bar bottom">
              {{>PlayButton}}
              {{>SeekBackwardButton}}
              {{>SeekForwardButton}}
              {{>MuteButton}}
              {{>VolumeRange}}
              <div class="spacer"></div>
              {{>RenditionSelect}}
              {{>AudioTrackSelect}}
              {{>CaptionsSelect}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </media-control-bar>
          </template>

        </template>

      </template>

    </template>

    <slot></slot>

  </media-controller>
</template>
`,uW=dG.createElement("template");"innerHTML"in uW&&(uW.innerHTML=uB);var uV,uq,uH=class extends db{};uH.template=null==(uq=null==(uV=uW.content)?void 0:uV.children)?void 0:uq[0],dY.customElements.get("media-theme-classic")||dY.customElements.define("media-theme-classic",uH);var uF={SRC:"src",POSTER:"poster"},uj={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",TITLE:"title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",NO_VOLUME_PREF:"no-volume-pref"},u$=["audio","backwardseekoffset","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","novolumepref"];function uK(e){let t=e.hasAttribute(uj.TITLE)?{video_title:e.getAttribute(uj.TITLE)}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}var uY,uG,uZ,uQ,uz,uX,uJ,u0,u1,u2,u5,u3,u4,u7,u8,u6,u9,ce,ct,ci,ca,cr=Object.values(lP),cn=Object.values(uF),co=Object.values(uj),cs={dialog:void 0,isDialogOpen:!1},cl=class extends uf{constructor(){super(),dy(this,uX),dy(this,u0),dy(this,u2),dy(this,u3),dy(this,u7),dy(this,u6),dy(this,ce),dy(this,ci),dy(this,uY,!1),dy(this,uG,{}),dy(this,uZ,!0),dy(this,uQ,new un(this,"hotkeys")),dy(this,uz,{...cs,onCloseErrorDialog:()=>dA(this,u2,u5).call(this,{dialog:void 0,isDialogOpen:!1}),onInitFocusDialog:e=>{d8(this,dG.activeElement)||e.preventDefault()}}),this.attachShadow({mode:"open"}),dA(this,u0,u1).call(this),this.isConnected&&dA(this,uX,uJ).call(this)}static get observedAttributes(){var e;return[...null!=(e=uf.observedAttributes)?e:[],...cn,...cr,...co]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){var e;let t=null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video");t&&(t.metadata=uK(this))}attributeChangedCallback(e,t,i){var a;switch(dA(this,uX,uJ).call(this),super.attributeChangedCallback(e,t,i),e){case uj.HOTKEYS:dg(this,uQ).value=i;break;case uj.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&us(dQ("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").format({}));break;case uj.THUMBNAIL_TOKEN:{let{aud:e}=d2(i);i&&"t"!==e&&us(dQ("The provided thumbnail-token should have audience value 't' instead of '{aud}'.").format({aud:e}));break}case uj.STORYBOARD_TOKEN:{let{aud:e}=d2(i);i&&"s"!==e&&us(dQ("The provided storyboard-token should have audience value 's' instead of '{aud}'.").format({aud:e}));break}case lP.PLAYBACK_ID:null!=i&&i.includes("?token")&&ul(dQ("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case lP.STREAM_TYPE:i&&![rt.LIVE,rt.ON_DEMAND,rt.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:ud({file:"invalid-stream-type.md",message:dQ("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):this.targetLiveWindow=i===rt.LIVE?0:Number.NaN}[lP.PLAYBACK_ID,uF.SRC,uj.PLAYBACK_TOKEN].includes(e)&&t!==i&&d_(this,uz,{...dg(this,uz),...cs}),dA(this,u3,u4).call(this,{[null!=(a=ur[e])?a:dJ(e)]:i})}get preferCmcd(){var e;return null!=(e=this.getAttribute(lP.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?rr.includes(e)?this.setAttribute(lP.PREFER_CMCD,e):us(`Invalid value for preferCmcd. Must be one of ${rr.join()}`):this.removeAttribute(lP.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute("media-has-played"))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute("media-time-is-live")}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(uj.THEME))?e:"classic"}set theme(e){this.setAttribute(uj.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(u$.includes(i))continue;let a=e.getAttribute(i);t[dJ(i)]=""===a||a}return t}set themeProps(e){var t,i;dA(this,uX,uJ).call(this);let a={...this.themeProps,...e};for(let r in a){if(u$.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(dX(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(dX(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(lP.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(lP.PLAYBACK_ID,e):this.removeAttribute(lP.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=cd(this,uF.SRC))?e:void 0:null!=(t=this.getAttribute(uF.SRC))?t:void 0}set src(e){e?this.setAttribute(uF.SRC,e):this.removeAttribute(uF.SRC)}get poster(){var e;let t=this.getAttribute(uF.POSTER);return null!=t?t:this.playbackId&&!this.audio?ut(this.playbackId,{domain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,token:this.tokens.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(uF.POSTER,e):this.removeAttribute(uF.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(uj.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(uj.STORYBOARD_SRC,e):this.removeAttribute(uj.STORYBOARD_SRC)}get storyboard(){return this.storyboardSrc&&!this.tokens.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[rt.LIVE,rt.UNKNOWN].includes(this.streamType)?void 0:ui(this.playbackId,{domain:this.customDomain,token:this.tokens.storyboard})}get audio(){return this.hasAttribute(uj.AUDIO)}set audio(e){if(!e){this.removeAttribute(uj.AUDIO);return}this.setAttribute(uj.AUDIO,"")}get hotkeys(){return dg(this,uQ)}get nohotkeys(){return this.hasAttribute(uj.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(uj.NOHOTKEYS);return}this.setAttribute(uj.NOHOTKEYS,"")}get thumbnailTime(){return d0(this.getAttribute(uj.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(uj.THUMBNAIL_TIME,`${e}`)}get title(){var e;return null!=(e=this.getAttribute(uj.TITLE))?e:""}set title(e){e!==this.title&&(e?this.setAttribute(uj.TITLE,e):this.removeAttribute("title"),super.title=e)}get placeholder(){var e;return null!=(e=cd(this,uj.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(uj.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(uj.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=dY.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(uj.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(uj.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=dY.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(uj.SECONDARY_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(uj.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(uj.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(uj.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(uj.PLAYBACK_RATES))return this.getAttribute(uj.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(uj.PLAYBACK_RATES);return}this.setAttribute(uj.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=d0(this.getAttribute(uj.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(uj.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=d0(this.getAttribute(uj.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(uj.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(uj.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(uj.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(uj.DEFAULT_HIDDEN_CAPTIONS)}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(lP.PLAYER_SOFTWARE_NAME))?e:"mux-player"}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(lP.PLAYER_SOFTWARE_VERSION))?e:d9}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(lP.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(lP.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(lP.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(lP.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(lP.MAX_RESOLUTION,e):this.removeAttribute(lP.MAX_RESOLUTION))}get customDomain(){var e;return null!=(e=this.getAttribute(lP.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(lP.CUSTOM_DOMAIN,e):this.removeAttribute(lP.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=cd(this,lP.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(lP.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(uj.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(uj.NO_VOLUME_PREF,""):this.removeAttribute(uj.NO_VOLUME_PREF)}get debug(){return null!=cd(this,lP.DEBUG)}set debug(e){e?this.setAttribute(lP.DEBUG,""):this.removeAttribute(lP.DEBUG)}get disableCookies(){return null!=cd(this,lP.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(lP.DISABLE_COOKIES,""):this.removeAttribute(lP.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(lP.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:rt.UNKNOWN}set streamType(e){this.setAttribute(lP.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(uj.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(uj.DEFAULT_STREAM_TYPE))?i:rt.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(uj.DEFAULT_STREAM_TYPE,e):this.removeAttribute(uj.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(uj.TARGET_LIVE_WINDOW)?+this.getAttribute(uj.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:Number.NaN}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(uj.TARGET_LIVE_WINDOW):this.setAttribute(uj.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return d0(cd(this,lP.START_TIME))}set startTime(e){this.setAttribute(lP.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(lP.PREFER_PLAYBACK);if(e===ri.MSE||e===ri.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===ri.MSE||e===ri.NATIVE?this.setAttribute(lP.PREFER_PLAYBACK,e):this.removeAttribute(lP.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(dA(this,uX,uJ).call(this),!this.media){ul("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...uK(this),...e}}async addCuePoints(e){var t;if(dA(this,uX,uJ).call(this),!this.media){ul("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return null==(t=this.media)?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(uj.PLAYBACK_TOKEN),t=this.getAttribute(uj.THUMBNAIL_TOKEN),i=this.getAttribute(uj.STORYBOARD_TOKEN);return{...dg(this,uG),...null!=e?{playback:e}:{},...null!=t?{thumbnail:t}:{},...null!=i?{storyboard:i}:{}}}set tokens(e){d_(this,uG,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(uj.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(uj.PLAYBACK_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(uj.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(uj.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(uj.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(uj.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return rE(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}};function cd(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}uY=new WeakMap,uG=new WeakMap,uZ=new WeakMap,uQ=new WeakMap,uz=new WeakMap,uX=new WeakSet,uJ=function(){var e,t,i,a;if(!dg(this,uY)){d_(this,uY,!0),dA(this,u3,u4).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof dY.HTMLElement))throw""}catch{ul("<media-theme> failed to upgrade!")}try{if(customElements.upgrade(this.media),!(this.media instanceof lB))throw""}catch{ul("<mux-video> failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof tn))throw""}catch{ul("<media-controller> failed to upgrade!")}a=this,a.querySelectorAll(":scope > track").forEach(e=>{var t;null==(t=a.media)||t.append(e.cloneNode())}),um.forEach(e=>{var t;null==(t=a.media)||t.addEventListener(e,e=>{a.dispatchEvent(new Event(e.type))})}),dA(this,u7,u8).call(this),dA(this,u6,u9).call(this),dA(this,ce,ct).call(this),d_(this,uZ,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute("userinactive"))||t),dA(this,ci,ca).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",()=>{dA(this,u3,u4).call(this)})}},u0=new WeakSet,u1=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},u2=new WeakSet,u5=function(e){Object.assign(dg(this,uz),e),dA(this,u3,u4).call(this)},u3=new WeakSet,u4=function(e={}){var t,i,a;let r;(function(e,t){e.renderInto(t)})(ux((t={...dg(this,uz),...e},{src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src,poster:this.poster,storyboard:this.storyboard,storyboardSrc:this.getAttribute(uj.STORYBOARD_SRC),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=dY.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(uj.NOHOTKEYS),hotKeys:this.getAttribute(uj.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,metadata:this.metadata,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(lP.TARGET_LIVE_WINDOW),streamType:ua(this.getAttribute(lP.STREAM_TYPE)),primaryColor:this.primaryColor,secondaryColor:this.secondaryColor,forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(r=null==(a=this.mediaController)?void 0:a.querySelector("media-time-display"))&&"none"===getComputedStyle(r).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(uj.PLAYBACK_RATES),customDomain:null!=(i=this.getAttribute(lP.CUSTOM_DOMAIN))?i:void 0,title:this.getAttribute(uj.TITLE),novolumepref:this.hasAttribute(uj.NO_VOLUME_PREF),...t})),this.shadowRoot)},u7=new WeakSet,u8=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(u$.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},u6=new WeakSet,u9=function(){var e;this.addEventListener("error",e=>{let{detail:t}=e;if(t instanceof a8||(t=new a8(t.message,t.code,t.fatal)),!(null!=t&&t.fatal)){us(t),t.data&&us(`${t.name} data:`,t.data);return}let{dialog:i,devlog:a}=uU(t,!window.navigator.onLine,this.playbackId,this.playbackToken);a.message&&ud(a),ul(t),t.data&&ul(`${t.name} data:`,t.data),dA(this,u2,u5).call(this,{isDialogOpen:!0,dialog:i})}),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof a8))return e;let{devlog:r}=uU(null==(i=this.media)?void 0:i.error,!window.navigator.onLine,this.playbackId,this.playbackToken,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}}),null==(e=this.media)||e.addEventListener("error",e=>{var t,i;let{detail:a}=e;if(!a){let{message:e,code:r}=null!=(i=null==(t=this.media)?void 0:t.error)?i:{};a=new a8(e,r)}null!=a&&a.fatal&&this.dispatchEvent(new CustomEvent("error",{detail:a}))})},ce=new WeakSet,ct=function(){var e,t,i,a;let r=()=>dA(this,u3,u4).call(this);null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",r),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",r)},ci=new WeakSet,ca=function(){var e,t;let i=/.*Version\/.*Safari\/.*/.test(navigator.userAgent);if(!/Firefox/i.test(navigator.userAgent))return;let a,r=new WeakMap,n=()=>this.streamType===rt.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,o=(e,t,a=!1)=>{n()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10)){if(!t||this.paused){let t=e.text.split(`
`).length,n=i?-2:-3;this.streamType===rt.LIVE&&(n=i?-1:-2);let o=n-t;(e.line!==o||a)&&(r.has(e)||r.set(e,e.line),e.line=o-1,e.line=o)}else setTimeout(()=>{e.line=r.get(e)||"auto"},500)}})},s=()=>{var e,t;o(a,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute("userinactive"))&&t)},l=()=>{var e,t;let i=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];i!==a&&(null==a||a.removeEventListener("cuechange",s)),null==(a=i)||a.addEventListener("cuechange",s),o(a,dg(this,uZ))};if(l(),null==(e=this.textTracks)||e.addEventListener("change",l),null==(t=this.textTracks)||t.addEventListener("addtrack",l),navigator.userAgent.includes("Chrome/")){let e=()=>{o(a,dg(this,uZ),!0),this.paused||window.requestAnimationFrame(e)};this.addEventListener("playing",()=>{e()})}this.addEventListener("userinactivechange",()=>{var e,t;let i=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute("userinactive"))||t;dg(this,uZ)!==i&&(d_(this,uZ,i),o(a,dg(this,uZ)))})},dY.customElements.get("mux-player")||(dY.customElements.define("mux-player",cl),dY.MuxPlayerElement=cl);var cu={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},cc=e=>null==e,ch=(e,t)=>!cc(t)&&e in t,cm=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),cp=(e,t)=>{if(!("boolean"==typeof t&&!t))return ch(e,cu)?cu[e]:/[A-Z]/.test(e)?cm(e):e},cv=(e,t)=>"boolean"==typeof e?"":e,cb=(e={})=>Object.entries(e).reduce((e,[t,i])=>{let a=cp(t,i);if(!a)return e;let r=cv(i,t);return e[a]=r,e},{}),cf=(...e)=>{let t=(0,n.useRef)(null);return(0,n.useEffect)(()=>{e.forEach(e=>{e&&("function"==typeof e?e(t.current):e.current=t.current)})},[e]),t},cE=Object.prototype.hasOwnProperty,cg=(e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!cE.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0},cy=(e,t,i)=>!cg(t,e[i]),c_=(e,t,i)=>{e[i]=t},cA=(e,t,i,a=c_,r=cy)=>(0,n.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t]),ck=(()=>{try{return"1.15.0"}catch{}return"UNKNOWN"})(),cT=n.forwardRef(({children:e,...t},i)=>n.createElement("mux-player",cb({...t,ref:i}),e)),cw=(e,t,i)=>(0,n.useEffect)(()=>{let a=null==t?void 0:t.current;if(!(!a||!i))return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i]),cI=(e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:o,onLoadedData:s,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:p,onPlay:v,onPlaying:b,onTimeUpdate:f,onPause:E,onSeeking:g,onSeeked:y,onStalled:_,onSuspend:A,onEnded:k,onError:T,onCuePointChange:w,onCuePointsChange:I,metadata:S,tokens:D,paused:R,playbackId:L,playbackRates:M,currentTime:C,themeProps:O,...x}=t;return cA("playbackRates",M,e),cA("metadata",S,e),cA("themeProps",O,e),cA("tokens",D,e),cA("playbackId",L,e),cA("paused",R,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&cy(e,t,i)),cA("currentTime",C,e,(e,t)=>{null!=t&&(e.currentTime=t)}),cw("abort",e,i),cw("canplay",e,a),cw("canplaythrough",e,r),cw("emptied",e,n),cw("loadstart",e,o),cw("loadeddata",e,s),cw("loadedmetadata",e,l),cw("progress",e,d),cw("durationchange",e,u),cw("volumechange",e,c),cw("ratechange",e,h),cw("resize",e,m),cw("waiting",e,p),cw("play",e,v),cw("playing",e,b),cw("timeupdate",e,f),cw("pause",e,E),cw("seeking",e,g),cw("seeked",e,y),cw("stalled",e,_),cw("suspend",e,A),cw("ended",e,k),cw("error",e,T),cw("cuepointchange",e,w),cw("cuepointschange",e,I),[x]},cS=n.forwardRef((e,t)=>{let i=(0,n.useRef)(null),a=cf(i,t),[r]=cI(i,e);return n.createElement(cT,{ref:a,playerSoftwareName:"mux-player-react",playerSoftwareVersion:ck,...r})})},2506:function(e,t,i){"use strict";i.d(t,{$j:function(){return L},Dx:function(){return M},VY:function(){return D},aU:function(){return R},aV:function(){return S},dk:function(){return C},fC:function(){return T},h_:function(){return I},xz:function(){return w}});var a=i(3428),r=i(2265),n=i(6989),o=i(2210),s=i(3452),l=i(5744),d=i(7256);let[u,c]=(0,n.b)("AlertDialog",[s.p8]),h=(0,s.p8)(),m=(0,r.forwardRef)((e,t)=>{let{__scopeAlertDialog:i,...n}=e,o=h(i);return(0,r.createElement)(s.xz,(0,a.Z)({},o,n,{ref:t}))}),p=(0,r.forwardRef)((e,t)=>{let{__scopeAlertDialog:i,...n}=e,o=h(i);return(0,r.createElement)(s.aV,(0,a.Z)({},o,n,{ref:t}))}),v="AlertDialogContent",[b,f]=u(v),E=(0,r.forwardRef)((e,t)=>{let{__scopeAlertDialog:i,children:n,...u}=e,c=h(i),m=(0,r.useRef)(null),p=(0,o.e)(t,m),f=(0,r.useRef)(null);return(0,r.createElement)(s.jm,{contentName:v,titleName:g,docsSlug:"alert-dialog"},(0,r.createElement)(b,{scope:i,cancelRef:f},(0,r.createElement)(s.VY,(0,a.Z)({role:"alertdialog"},c,u,{ref:p,onOpenAutoFocus:(0,l.M)(u.onOpenAutoFocus,e=>{var t;e.preventDefault(),null===(t=f.current)||void 0===t||t.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault()}),(0,r.createElement)(d.A4,null,n),!1)))}),g="AlertDialogTitle",y=(0,r.forwardRef)((e,t)=>{let{__scopeAlertDialog:i,...n}=e,o=h(i);return(0,r.createElement)(s.Dx,(0,a.Z)({},o,n,{ref:t}))}),_=(0,r.forwardRef)((e,t)=>{let{__scopeAlertDialog:i,...n}=e,o=h(i);return(0,r.createElement)(s.dk,(0,a.Z)({},o,n,{ref:t}))}),A=(0,r.forwardRef)((e,t)=>{let{__scopeAlertDialog:i,...n}=e,o=h(i);return(0,r.createElement)(s.x8,(0,a.Z)({},o,n,{ref:t}))}),k=(0,r.forwardRef)((e,t)=>{let{__scopeAlertDialog:i,...n}=e,{cancelRef:l}=f("AlertDialogCancel",i),d=h(i),u=(0,o.e)(t,l);return(0,r.createElement)(s.x8,(0,a.Z)({},d,n,{ref:u}))}),T=e=>{let{__scopeAlertDialog:t,...i}=e,n=h(t);return(0,r.createElement)(s.fC,(0,a.Z)({},n,i,{modal:!0}))},w=m,I=e=>{let{__scopeAlertDialog:t,...i}=e,n=h(t);return(0,r.createElement)(s.h_,(0,a.Z)({},n,i))},S=p,D=E,R=A,L=k,M=y,C=_},2237:function(e,t,i){"use strict";i.d(t,{z$:function(){return k},fC:function(){return A}});var a=i(3428),r=i(2265),n=i(2210),o=i(6989),s=i(5744),l=i(3763),d=i(4977),u=i(5606),c=i(9381);let h="Checkbox",[m,p]=(0,o.b)(h),[v,b]=m(h),f=(0,r.forwardRef)((e,t)=>{let{__scopeCheckbox:i,name:o,checked:d,defaultChecked:u,required:h,disabled:m,value:p="on",onCheckedChange:b,...f}=e,[E,A]=(0,r.useState)(null),k=(0,n.e)(t,e=>A(e)),T=(0,r.useRef)(!1),w=!E||!!E.closest("form"),[I=!1,S]=(0,l.T)({prop:d,defaultProp:u,onChange:b}),D=(0,r.useRef)(I);return(0,r.useEffect)(()=>{let e=null==E?void 0:E.form;if(e){let t=()=>S(D.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[E,S]),(0,r.createElement)(v,{scope:i,state:I,disabled:m},(0,r.createElement)(c.WV.button,(0,a.Z)({type:"button",role:"checkbox","aria-checked":y(I)?"mixed":I,"aria-required":h,"data-state":_(I),"data-disabled":m?"":void 0,disabled:m,value:p},f,{ref:k,onKeyDown:(0,s.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,s.M)(e.onClick,e=>{S(e=>!!y(e)||!e),w&&(T.current=e.isPropagationStopped(),T.current||e.stopPropagation())})})),w&&(0,r.createElement)(g,{control:E,bubbles:!T.current,name:o,value:p,checked:I,required:h,disabled:m,style:{transform:"translateX(-100%)"}}))}),E=(0,r.forwardRef)((e,t)=>{let{__scopeCheckbox:i,forceMount:n,...o}=e,s=b("CheckboxIndicator",i);return(0,r.createElement)(u.z,{present:n||y(s.state)||!0===s.state},(0,r.createElement)(c.WV.span,(0,a.Z)({"data-state":_(s.state),"data-disabled":s.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),g=e=>{let{control:t,checked:i,bubbles:n=!0,...o}=e,s=(0,r.useRef)(null),l=function(e){let t=(0,r.useRef)({value:e,previous:e});return(0,r.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(i),u=(0,d.t)(t);return(0,r.useEffect)(()=>{let e=s.current,t=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(t,"checked"),r=a.set;if(l!==i&&r){let t=new Event("click",{bubbles:n});e.indeterminate=y(i),r.call(e,!y(i)&&i),e.dispatchEvent(t)}},[l,i,n]),(0,r.createElement)("input",(0,a.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!y(i)&&i},o,{tabIndex:-1,ref:s,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function y(e){return"indeterminate"===e}function _(e){return y(e)?"indeterminate":e?"checked":"unchecked"}let A=f,k=E}}]);