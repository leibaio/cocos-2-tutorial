
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwicnVuSnVtcEFjdGlvbiIsImp1bXBVcCIsInR3ZWVuIiwiYnkiLCJ5IiwiZWFzaW5nIiwianVtcERvd24iLCJzZXF1ZW5jZSIsInJlcGVhdEZvcmV2ZXIiLCJvbktleURvd24iLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJhY2NMZWZ0IiwiZCIsImFjY1JpZ2h0Iiwib25LZXlVcCIsIm9uTG9hZCIsImp1bXBBY3Rpb24iLCJub2RlIiwidGhlbiIsInN0YXJ0Iiwic3BlZWRYIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJLRVlfVVAiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJhYnMiLCJ4Iiwib25EZXN0cm95Iiwib2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNQLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1Y7SUFDQUMsVUFBVSxFQUFFLENBQUM7SUFDYjtJQUNBQyxZQUFZLEVBQUUsQ0FBQztJQUNmO0lBQ0FDLFlBQVksRUFBRSxDQUFDO0lBQ2Y7SUFDQUMsS0FBSyxFQUFFO0VBQ1QsQ0FBQztFQUVEQyxhQUFhLFdBQUFBLGNBQUEsRUFBRztJQUNkO0lBQ0EsSUFBSUMsTUFBTSxHQUFHVCxFQUFFLENBQ1pVLEtBQUssRUFBRSxDQUNQQyxFQUFFLENBQUMsSUFBSSxDQUFDTixZQUFZLEVBQUU7TUFBRU8sQ0FBQyxFQUFFLElBQUksQ0FBQ1I7SUFBVyxDQUFDLEVBQUU7TUFBRVMsTUFBTSxFQUFFO0lBQVUsQ0FBQyxDQUFDO0lBQ3ZFO0lBQ0EsSUFB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RyxDQUFDLElBQUksQ0FBQ1YsTUFBTSxDQUFDO0lBQ3pFO0lBQ0E7SUFDQSxJQUFJLENBQUNILElBQUksQ0FBQ2MsQ0FBQyxJQUFJLElBQUksQ0FBQ1gsTUFBTSxHQUFHUSxFQUFFO0VBQ2pDLENBQUM7RUFFREksU0FBUyxXQUFBQSxVQUFBLEVBQUc7SUFDVjtJQUNBNUMsRUFBRSxDQUFDaUMsV0FBVyxDQUFDWSxHQUFHLENBQUM3QyxFQUFFLENBQUNtQyxXQUFXLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxFQUFFLElBQUksQ0FBQ3BCLFNBQVMsRUFBRSxJQUFJLENBQUM7SUFDM0VqQixFQUFFLENBQUNpQyxXQUFXLENBQUNZLEdBQUcsQ0FBQzdDLEVBQUUsQ0FBQ21DLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLEVBQUUsSUFBSSxDQUFDWixPQUFPLEVBQUUsSUFBSSxDQUFDO0VBQ3pFO0FBQ0YsQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLy8g5Li76KeS6Lez6LeD6auY5bqmXG4gICAganVtcEhlaWdodDogMCxcbiAgICAvLyDkuLvop5Lot7Pot4PmjIHnu63ml7bpl7RcbiAgICBqdW1wRHVyYXRpb246IDAsXG4gICAgLy8g5pyA5aSn56e75Yqo6YCf5bqmXG4gICAgbWF4TW92ZVNwZWVkOiAwLFxuICAgIC8vIOWKoOmAn+W6plxuICAgIGFjY2VsOiAwLFxuICB9LFxuXG4gIHJ1bkp1bXBBY3Rpb24oKSB7XG4gICAgLy8g6Lez6LeD5Yqo5L2cXG4gICAgbGV0IGp1bXBVcCA9IGNjXG4gICAgICAudHdlZW4oKVxuICAgICAgLmJ5KHRoaXMuanVtcER1cmF0aW9uLCB7IHk6IHRoaXMuanVtcEhlaWdodCB9LCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSk7XG4gICAgLy8g5LiL6JC9XG4gICAgbGV0IGp1bXBEb3duID0gY2NcbiAgICAgIC50d2VlbigpXG4gICAgICAuYnkodGhpcy5qdW1wRHVyYXRpb24sIHsgeTogLXRoaXMuanVtcEhlaWdodCB9LCB7IGVhc2luZzogXCJzaW5lSW5cIiB9KTtcblxuICAgIC8vIOWIm+W7uuS4gOS4que8k+WKqO+8jOaMiSBqdW1wVXDjgIFqdW1wRG93biDpobrluo/miafooYxcbiAgICBsZXQgdHdlZW4gPSBjYy50d2VlbigpLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24pO1xuICAgIC8vIOS4jeaWremHjeWkjVxuICAgIHJldHVybiBjYy50d2VlbigpLnJlcGVhdEZvcmV2ZXIodHdlZW4pO1xuICB9LFxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxuXG4gIG9uS2V5VXAoZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxuXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICAvLyDliJ3lp4vljJbot7Pot4PliqjkvZxcbiAgICBsZXQganVtcEFjdGlvbiA9IHRoaXMucnVuSnVtcEFjdGlvbigpO1xuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihqdW1wQWN0aW9uKS5zdGFydCgpO1xuXG4gICAgLy8g5Yqg6YCf5bqm5pa55ZCR5byA5YWzXG4gICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xuICAgIC8vIOW9k+WJjeawtOW5s+aWueWQkemAn+W6plxuICAgIHRoaXMuc3BlZWRYID0gMDtcblxuICAgIC8vIOWIneWni+WMlumUruebmOi+k+WFpeebkeWQrFxuICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gIH0sXG5cbiAgc3RhcnQoKSB7fSxcblxuICB1cGRhdGUoZHQpIHtcbiAgICAvLyDmoLnmja7lvZPliY3liqDpgJ/luqbmlrnlkJHmr4/luKfmm7TmlrDpgJ/luqZcbiAgICBpZiAodGhpcy5hY2NMZWZ0KSB7XG4gICAgICB0aGlzLnNwZWVkWCAtPSB0aGlzLmFjY2VsICogZHQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFjY1JpZ2h0KSB7XG4gICAgICB0aGlzLnNwZWVkWCArPSB0aGlzLmFjY2VsICogZHQ7XG4gICAgfVxuXG4gICAgLy8g6ZmQ5Yi25pyA5aSn6YCf5bqmXG4gICAgaWYgKE1hdGguYWJzKHRoaXMuc3BlZWRYKSA+IHRoaXMubWF4TW92ZVNwZWVkKSB7XG4gICAgICAvLyDkuI3lhYHorrjotoXov4fmnIDlpKfpgJ/luqZcbiAgICAgIHRoaXMuc3BlZWRYID0gKHRoaXMubWF4TW92ZVNwZWVkICogdGhpcy5zcGVlZFgpIC8gTWF0aC5hYnModGhpcy5zcGVlZFgpO1xuICAgIH1cbiAgICAvLyDmoLnmja7lvZPliY3pgJ/luqbmm7TmlrDkvY3nva5cbiAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkWCAqIGR0O1xuICB9LFxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICAvLyDlj5bmtojplK7nm5jovpPlhaXnm5HlkKxcbiAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XG4gIH0sXG59KTtcbiJdfQ==