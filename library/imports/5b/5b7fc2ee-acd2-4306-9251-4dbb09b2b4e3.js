"use strict";
cc._RF.push(module, '5b7fcLurNJDBpJRTbsJsrTj', 'Player');
// scripts/Player.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    // 主角跳跃高度
    jumpHeight: 0,
    // 主角跳跃持续时间
    jumpDuration: 0,
    // 最大移动速度
    maxMoveSpeed: 0,
    // 加速度
    accel: 0
  },
  runJumpAction: function runJumpAction() {
    // 跳跃动作
    var jumpUp = cc.tween().by(this.jumpDuration, {
      y: this.jumpHeight
    }, {
      easing: "sineOut"
    });
    // 下落
    var jumpDown = cc.tween().by(this.jumpDuration, {
      y: -this.jumpHeight
    }, {
      easing: "sineIn"
    });

    // 创建一个缓动，按 jumpUp、jumpDown 顺序执行
    var tween = cc.tween().sequence(jumpUp, jumpDown);
    // 不断重复
    return cc.tween().repeatForever(tween);
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;
      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;
      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // 初始化跳跃动作
    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start();

    // 加速度方向开关
    this.accLeft = false;
    this.accRight = false;
    // 当前水平方向速度
    this.speedX = 0;

    // 初始化键盘输入监听
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {},
  update: function update(dt) {
    // 根据当前加速度方向每帧更新速度
    if (this.accLeft) {
      this.speedX -= this.accel * dt;
    } else if (this.accRight) {
      this.speedX += this.accel * dt;
    }

    // 限制最大速度
    if (Math.abs(this.speedX) > this.maxMoveSpeed) {
      // 不允许超过最大速度
      this.speedX = this.maxMoveSpeed * this.speedX / Math.abs(this.speedX);
    }
    // 根据当前速度更新位置
    this.node.x += this.speedX * dt;
  },
  onDestroy: function onDestroy() {
    // 取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  }
});

cc._RF.pop();