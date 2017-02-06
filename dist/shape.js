"use strict";
var BaseShapeComponent = (function () {
    function BaseShapeComponent() {
    }
    BaseShapeComponent.prototype.setShape = function (shape) {
        this.shape = shape;
    };
    BaseShapeComponent.prototype.animate = function (to) {
        this.shape.animate(to);
    };
    BaseShapeComponent.prototype.setText = function (text) {
        this.shape.setText(text);
    };
    BaseShapeComponent.prototype.destroy = function () {
        this.shape.destroy();
    };
    BaseShapeComponent.prototype.value = function () {
        return this.shape.value();
    };
    BaseShapeComponent.prototype.stop = function () {
        return this.shape.stop();
    };
    BaseShapeComponent.prototype.setProgress = function (progress) {
        return this.shape.set(progress);
    };
    return BaseShapeComponent;
}());
exports.BaseShapeComponent = BaseShapeComponent;
//# sourceMappingURL=shape.js.map