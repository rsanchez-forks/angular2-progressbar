"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ProgressBar = require('progressbar.js');
var core_1 = require('@angular/core');
var shape_1 = require('./shape');
var CircleProgressComponent = (function (_super) {
    __extends(CircleProgressComponent, _super);
    function CircleProgressComponent(elementRef) {
        _super.call(this);
        this.elementRef = elementRef;
    }
    CircleProgressComponent.prototype.ngOnInit = function () {
        _super.prototype.setShape.call(this, new ProgressBar.Circle(this.elementRef.nativeElement, this.options));
        _super.prototype.animate.call(this, 0.0);
    };
    CircleProgressComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ks-circle-progress',
                    template: "\n    <ng-content></ng-content>\n"
                },] },
    ];
    CircleProgressComponent.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    CircleProgressComponent.propDecorators = {
        'options': [{ type: core_1.Input },],
    };
    return CircleProgressComponent;
}(shape_1.BaseShapeComponent));
exports.CircleProgressComponent = CircleProgressComponent;
//# sourceMappingURL=circle-component.js.map