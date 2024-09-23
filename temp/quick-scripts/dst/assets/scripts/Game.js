
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32676byv+tEN5zDYTJ8MTBa', 'Game');
// scripts/Game.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    // 这个属性引用了星星预制资源
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // 星星产生后消失时间的随机范围
    maxStarDuration: 0,
    minStarDuration: 0,
    // 地面节点，用于确定星星生成的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    // Player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    console.log("[ this.ground ] >", this.ground);
    console.log("[ this.player ] >", this.player);
    // 获取地平面的 y 轴坐标
    this.groundY = this.ground.y + this.ground.height / 2;
    // 生成一个新的星星
    this.spawnNewStar();
  },
  spawnNewStar: function spawnNewStar() {
    // 使用给定的模板在场景中生成一个新节点
    var newStar = cc.instantiate(this.starPrefab);
    // 将新增的节点添加到 Canvas 节点下面
    this.node.addChild(newStar);
    // 为星星设置一个随机位置
    newStar.setPosition(this.getNewStarPosition());

    // 在星星脚本组件上保存 Game 对象的引用
    newStar.getComponent("Star").game = this;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0;
    // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标
    var randY = this.groundY + Math.random() * this.player.getComponent("Player").jumpHeight + 50;
    // 根据屏幕宽度，随机得到一个星星 x 坐标
    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX;
    // 返回星星坐标
    return cc.v2(randX, randY);
  },
  start: function start() {} // update (dt) {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsIm9uTG9hZCIsImNvbnNvbGUiLCJsb2ciLCJncm91bmRZIiwieSIsImhlaWdodCIsInNwYXduTmV3U3RhciIsIm5ld1N0YXIiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsInJhbmRYIiwicmFuZFkiLCJNYXRoIiwicmFuZG9tIiwianVtcEhlaWdodCIsIm1heFgiLCJ3aWR0aCIsInYyIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ1AsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDVjtJQUNBQyxVQUFVLEVBQUU7TUFDVixXQUFTLElBQUk7TUFDYkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBQ1gsQ0FBQztJQUVEO0lBQ0FDLGVBQWUsRUFBRSxDQUFDO0lBQ2xCQyxlQUFlLEVBQUUsQ0FBQztJQUVsQjtJQUNBQyxNQUFNLEVBQUU7TUFDTixXQUFTLElBQUk7TUFDYkosSUFBSSxFQUFFTCxFQUFFLENBQUNVO0lBQ1gsQ0FBQztJQUVEO0lBQ0FDLE1BQU0sRUFBRTtNQUNOLFdBQVMsSUFBSTtNQUNiTixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1U7SUFDWDtFQUNGLENBQUM7RUFFRDtFQUVBRSxNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNQQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUNMLE1BQU0sQ0FBQztJQUM3Q0ksT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDSCxNQUFNLENBQUM7SUFDN0M7SUFDQSxJQUFJLENBQUNJLE9BQU8sR0FBRyxJQUFJLENBQUNOLE1BQU0sQ0FBQ08sQ0FBQyxHQUFHLElBQUksQ0FBQ1AsTUFBTSxDQUFDUSxNQUFNLEdBQUcsQ0FBQztJQUNyRDtJQUNBLElBQUksQ0FBQ0MsWUFBWSxFQUFFO0VBQ3JCLENBQUM7RUFFREEsWUFBWSxXQUFBQSxhQUFBLEVBQUc7SUFDYjtJQUNBLElBQUlDLE9BQU8sR0FBR25CLEVBQUUsQ0FBQ29CLFdBQVcsQ0FBQyxJQUFJLENBQUNoQixVQUFVLENBQUM7SUFDN0M7SUFDQSxJQUFJLENBQUNpQixJQUFJLENBQUNDLFFBQVEsQ0FBQ0gsT0FBTyxDQUFDO0lBQzNCO0lBQ0FBLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDLElBQUksQ0FBQ0Msa0JBQWtCLEVBQUUsQ0FBQzs7SUFFOUM7SUFDQUwsT0FBTyxDQUFDTSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUNDLElBQUksR0FBRyxJQUFJO0VBQzFDLENBQUM7RUFFREYsa0JBQWtCLFdBQUFBLG1CQUFBLEVBQUc7SUFDbkIsSUFBSUcsS0FBSyxHQUFHLENBQUM7SUFDYjtJQUNBLElBQUlDLEtBQUssR0FDUCxJQUFJLENBQUNiLE9BQU8sR0FDWmMsSUFBSSxDQUFDQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUNuQixNQUFNLENBQUNjLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQ00sVUFBVSxHQUM3RCxFQUFFO0lBQ0o7SUFDQSxJQUFJQyxJQUFJLEdBQUcsSUFBSSxDQUFDWCxJQUFJLENBQUNZLEtBQUssR0FBRyxDQUFDO0lBQzlCTixLQUFLLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQyxNQUFNLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHRSxJQUFJO0lBQ3hDO0lBQ0EsT0FBT2hDLEVBQUUsQ0FBQ2tDLEVBQUUsQ0FBQ1AsS0FBSyxFQUFFQyxLQUFLLENBQUM7RUFDNUIsQ0FBQztFQUVETyxLQUFLLFdBQUFBLE1BQUEsRUFBRyxDQUFDLENBQUMsQ0FFVjtBQUNGLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8vIOi/meS4quWxnuaAp+W8leeUqOS6huaYn+aYn+mihOWItui1hOa6kFxuICAgIHN0YXJQcmVmYWI6IHtcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgfSxcblxuICAgIC8vIOaYn+aYn+S6p+eUn+WQjua2iOWkseaXtumXtOeahOmaj+acuuiMg+WbtFxuICAgIG1heFN0YXJEdXJhdGlvbjogMCxcbiAgICBtaW5TdGFyRHVyYXRpb246IDAsXG5cbiAgICAvLyDlnLDpnaLoioLngrnvvIznlKjkuo7noa7lrprmmJ/mmJ/nlJ/miJDnmoTpq5jluqZcbiAgICBncm91bmQ6IHtcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgIH0sXG5cbiAgICAvLyBQbGF5ZXIg6IqC54K577yM55So5LqO6I635Y+W5Li76KeS5by56Lez55qE6auY5bqm77yM5ZKM5o6n5Yi25Li76KeS6KGM5Yqo5byA5YWzXG4gICAgcGxheWVyOiB7XG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICB9LFxuICB9LFxuXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlsgdGhpcy5ncm91bmQgXSA+XCIsIHRoaXMuZ3JvdW5kKTtcbiAgICBjb25zb2xlLmxvZyhcIlsgdGhpcy5wbGF5ZXIgXSA+XCIsIHRoaXMucGxheWVyKTtcbiAgICAvLyDojrflj5blnLDlubPpnaLnmoQgeSDovbTlnZDmoIdcbiAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0IC8gMjtcbiAgICAvLyDnlJ/miJDkuIDkuKrmlrDnmoTmmJ/mmJ9cbiAgICB0aGlzLnNwYXduTmV3U3RhcigpO1xuICB9LFxuXG4gIHNwYXduTmV3U3RhcigpIHtcbiAgICAvLyDkvb/nlKjnu5nlrprnmoTmqKHmnb/lnKjlnLrmma/kuK3nlJ/miJDkuIDkuKrmlrDoioLngrlcbiAgICBsZXQgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XG4gICAgLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcbiAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XG4gICAgLy8g5Li65pif5pif6K6+572u5LiA5Liq6ZqP5py65L2N572uXG4gICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKTtcblxuICAgIC8vIOWcqOaYn+aYn+iEmuacrOe7hOS7tuS4iuS/neWtmCBHYW1lIOWvueixoeeahOW8leeUqFxuICAgIG5ld1N0YXIuZ2V0Q29tcG9uZW50KFwiU3RhclwiKS5nYW1lID0gdGhpcztcbiAgfSxcblxuICBnZXROZXdTdGFyUG9zaXRpb24oKSB7XG4gICAgbGV0IHJhbmRYID0gMDtcbiAgICAvLyDmoLnmja7lnLDlubPpnaLkvY3nva7lkozkuLvop5Lot7Pot4Ppq5jluqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ/nmoQgeSDlnZDmoIdcbiAgICBsZXQgcmFuZFkgPVxuICAgICAgdGhpcy5ncm91bmRZICtcbiAgICAgIE1hdGgucmFuZG9tKCkgKiB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikuanVtcEhlaWdodCArXG4gICAgICA1MDtcbiAgICAvLyDmoLnmja7lsY/luZXlrr3luqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ8geCDlnZDmoIdcbiAgICBsZXQgbWF4WCA9IHRoaXMubm9kZS53aWR0aCAvIDI7XG4gICAgcmFuZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyICogbWF4WDtcbiAgICAvLyDov5Tlm57mmJ/mmJ/lnZDmoIdcbiAgICByZXR1cm4gY2MudjIocmFuZFgsIHJhbmRZKTtcbiAgfSxcblxuICBzdGFydCgpIHt9LFxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=