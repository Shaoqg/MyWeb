require=function e(o,t,c){function n(i,a){if(!t[i]){if(!o[i]){var d="function"==typeof require&&require;if(!a&&d)return d(i,!0);if(r)return r(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var p=t[i]={exports:{}};o[i][0].call(p.exports,function(e){var t=o[i][1][e];return n(t||e)},p,p.exports,e,o,t,c)}return t[i].exports}for(var r="function"==typeof require&&require,i=0;i<c.length;i++)n(c[i]);return n}({blockManager:[function(e,o,t){"use strict";cc._RF.push(o,"e10ebBi/C9G3pVnCOYV1ru7","blockManager"),Object.defineProperty(t,"__esModule",{value:!0});var c=new cc.Vec2(100,57),n=new cc.Vec2(-200,-300),r=0,i={easy:++r,simple:++r,hard:++r},a=null,d=cc._decorator,u=d.ccclass,p=d.property,l=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.blockitem=null,o.nextNode=null,o.standNode=null,o.currentRatio=null,o.currentType=i.easy,o.blockList=[],o}return __extends(o,e),o.prototype.getStandNode=function(){return a.standNode},o.prototype.getNextNodeWorldPos=function(){var e=a.nextNode.convertToWorldSpaceAR(cc.p(0,0));return cc.v2(e.x,e.y+165)},o.prototype.onLoad=function(){},o.prototype.onEnable=function(){(a=this).blockList.push(a.standNode),a.standNode.position=n,a.currentType=i.easy,a.creatNode()},o.prototype.creatNode=function(){var e=1;e=1===a.blockList.length?1:Math.random()>.5?-1:1;var o=1.5;switch(a.currentType){case i.easy:o=1.5+.6*Math.random()*2.5;break;case i.simple:o=1.5+.85*Math.random()*2.5;break;case i.hard:o=1.5+2.5*Math.random()}a.currentRatio={x:c.x*o*e,y:c.y*o},console.log(a.currentRatio);var t=cc.instantiate(a.blockitem);t.getChildByName("collision").getComponent(cc.Collider).tag=a.blockList.length,a.standNode=a.nextNode,a.nextNode=t,t.parent=a.node,t.setSiblingIndex(0);a.standNode.position.x,a.currentRatio.x;return t.position=cc.v2(a.standNode.position.x+a.currentRatio.x,a.standNode.position.y+a.currentRatio.y),t.getChildByName("block").getComponent(cc.Animation).play("startAni"),a.blockList.push(t),e},__decorate([p(cc.Node)],o.prototype,"blockitem",void 0),__decorate([p(cc.Node)],o.prototype,"nextNode",void 0),__decorate([p(cc.Node)],o.prototype,"standNode",void 0),__decorate([p()],o.prototype,"currentRatio",void 0),__decorate([p],o.prototype,"currentType",void 0),__decorate([p],o.prototype,"blockList",void 0),o=__decorate([u],o)}(cc.Component);t.default=l,cc._RF.pop()},{}],collision:[function(e,o,t){"use strict";cc._RF.push(o,"e56dewCBCFPx5xSIT+N0O63","collision"),Object.defineProperty(t,"__esModule",{value:!0});var c=cc._decorator,n=c.ccclass,r=c.property,i=null,a=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.isFail=!1,o.isNotChange=!1,o.currentTag=0,o}return __extends(o,e),o.prototype.onLoad=function(){i=this,console.log(i.currentTag),console.log(">>>")},o.prototype.start=function(){},o.prototype.onCollisionEnter=function(e,o){console.log(i.currentTag),i.currentTag===e.tag?i.isChange=!1:i.isChange=!0,i.isFail=!1},o.prototype.onCollisionExit=function(e,o){i.isFail=!0},__decorate([r()],o.prototype,"isFail",void 0),__decorate([r()],o.prototype,"isNotChange",void 0),__decorate([r()],o.prototype,"currentTag",void 0),o=__decorate([n],o)}(cc.Component);t.default=a,cc._RF.pop()},{}],jumpManager:[function(e,o,t){"use strict";cc._RF.push(o,"5af2d/WXxtAcpmdMAW0aHyN","jumpManager"),Object.defineProperty(t,"__esModule",{value:!0});var c=e("./blockManager"),n=e("./collision"),r=cc._decorator,i=r.ccclass,a=r.property,d=cc.Enum({idle:"idle",touching:"touch",jumping:"jumping",checking:"checking",readyNext:"readyNext",fail:"fail"}),u=(new cc.Vec2(100,57),new cc.Vec2(-200,-300),null),p=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.touchNode=null,o.gameNode=null,o.leftNode=null,o.rightNode=null,o.scoreLable=null,o.score=null,o.jumperNode=null,o.jumperNodePic=null,o.jumperEffectStart=null,o.jumperEffectEnd=null,o.currentState=d.idle,o.blockListNode=null,o.blockScriptList=[],o.standNode=null,o.standNodePic=null,o.touchTime=0,o}return __extends(o,e),o.prototype.onLoad=function(){(u=this).score=0,u.blockManager=u.blockListNode.getComponent(c.default),u.collision=u.jumperNode.getChildByName("collision").getComponent(n.default),u.touchNode.on(cc.Node.EventType.TOUCH_START,function(e){u.currentState===d.idle&&(u.touchRead(),u.currentState=d.touching)},u.touchNode),u.touchNode.on(cc.Node.EventType.TOUCH_END,function(e){u.currentState===d.touching&&(u.isJumped=!1,u.currentState=d.jumping)},u.touchNode),u.touchNode.on(cc.Node.EventType.TOUCH_END,function(e){u.currentState===d.touching&&(u.currentState=d.jumping)},u.touchNode)},o.prototype.onStart=function(){},o.prototype.update=function(e){switch(u.currentState){case d.idle:break;case d.touching:u.onTouch(e);break;case d.jumping:u.isJumped||(u.isJumped=!0,u.jumpTo());break;case d.checking:u.isChecked||u.check();break;case d.readyNext:u.isReadyNexted||u.readyNext();break;case d.fail:}},o.prototype.init=function(){},o.prototype.onTouch=function(e){u.touchTime>1.5||(u.touchTime+=e,u.standNodePic.height-=32*e,u.jumperNode.y-=32*e,u.jumperNodePic.scaleX+=.13*e,u.jumperNodePic.scaleY-=.2*e,u.jumperEffectStart.active||(u.jumperEffectStart.active=!0))},o.prototype.jumpTo=function(){var e=cc.scaleTo(.3,1);u.jumperNodePic.runAction(e),u.jumperEffectStart.active=!1,u.standNodePic.getComponent(cc.Animation).play("springback");var o=u.touchTime/1.5*690,t=u.jumperNode.convertToWorldSpaceAR(cc.p(0,0)),c=u.blockManager.getNextNodeWorldPos(),n=cc.pDistance(t,c),r=cc.v2(c.x-t.x,c.y-t.y),i=o/n;u.jumpPosition=cc.v2(r.x*i,r.y*i);var a=.3*u.touchTime/1.5+.3;console.log(a);var p=cc.jumpBy(a,u.jumpPosition,150,1);u.jumperNode.runAction(p),setTimeout(function(){u.currentState=d.checking,u.isChecked=!1},1e3*a)},o.prototype.check=function(){u.isChecked=!0;var e=cc.pDistance(u.jumperNode.position,u.jumpPosition);console.log(e);var o=u.collision.isFail,t=u.collision.isChange;o?(u.currentState=d.fail,console.log("fail"),u.node.getChildByName("fail").active=!0):t?(u.currentState=d.readyNext,u.isReadyNexted=!1,console.log("next")):(u.currentState=d.idle,u.jumperNodePic.getComponent(cc.Animation).play(),setTimeout(function(){u.currentState=d.idle},300))},o.prototype.readyNext=function(){u.isReadyNexted=!0,u.score++,u.setScoreLabel(u.score,1),u.jumperNodePic.getComponent(cc.Animation).play();var e=u.blockManager.creatNode();u.jumperNode.scaleX=e,console.log(u.jumperNodePic.scaleX),u.jumperEffectEnd.active=!0,setTimeout(function(){u.jumperEffectEnd.active=!1,u.currentState=d.idle},300);var o,t,c=u.blockManager.standNode.convertToWorldSpaceAR(cc.p(0,0));t=-1===e?u.rightNode.convertToWorldSpaceAR(cc.p(0,0)):u.leftNode.convertToWorldSpaceAR(cc.p(0,0)),o=cc.v2(t.x-c.x,t.y-c.y),console.log(o),setTimeout(function(){var e=cc.moveBy(.3,o);u.gameNode.runAction(e)},200)},o.prototype.touchRead=function(){u.touchTime=0,u.standNode=u.blockManager.standNode,u.standNodePic=u.standNode.getChildByName("block"),u.collision.currentTag=u.standNode.getChildByName("collision").getComponent(cc.Collider).tag},o.prototype.reset=function(){u.touchTime=0,u.currentState=d.idle},o.prototype.setScoreLabel=function(e,o){u.scoreLable.string=e;var t=u.jumperNode.getChildByName("label");t.getComponent(cc.Label).string="+ "+o,t.position=cc.v2(0,80),t.active=!0;var c=cc.moveBy(.5,cc.v2(0,50));t.runAction(c),setTimeout(function(){t.active=!1},500)},__decorate([a(cc.Node)],o.prototype,"touchNode",void 0),__decorate([a(cc.Node)],o.prototype,"gameNode",void 0),__decorate([a(cc.Node)],o.prototype,"leftNode",void 0),__decorate([a(cc.Node)],o.prototype,"rightNode",void 0),__decorate([a(cc.Label)],o.prototype,"scoreLable",void 0),__decorate([a()],o.prototype,"score",void 0),__decorate([a(cc.Node)],o.prototype,"jumperNode",void 0),__decorate([a(cc.Node)],o.prototype,"jumperNodePic",void 0),__decorate([a(cc.Node)],o.prototype,"jumperEffectStart",void 0),__decorate([a(cc.Node)],o.prototype,"jumperEffectEnd",void 0),__decorate([a(cc.Enum)],o.prototype,"currentState",void 0),__decorate([a(cc.Node)],o.prototype,"blockListNode",void 0),__decorate([a(Array)],o.prototype,"blockScriptList",void 0),__decorate([a(cc.Node)],o.prototype,"standNode",void 0),__decorate([a(cc.Node)],o.prototype,"standNodePic",void 0),__decorate([a()],o.prototype,"touchTime",void 0),o=__decorate([i],o)}(cc.Component);t.default=p,cc._RF.pop()},{"./blockManager":"blockManager","./collision":"collision"}],openCollision:[function(e,o,t){"use strict";cc._RF.push(o,"21f30XSU/tMSbssK/S6WKjM","openCollision"),Object.defineProperty(t,"__esModule",{value:!0});var c=cc._decorator,n=c.ccclass,r=(c.property,function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return __extends(o,e),o.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0},o=__decorate([n],o)}(cc.Component));t.default=r,cc._RF.pop()},{}]},{},["blockManager","collision","jumpManager","openCollision"]);