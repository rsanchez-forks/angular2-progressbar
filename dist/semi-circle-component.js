"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ProgressBar = require('progressbar.js');
var core_1 = require('@angular/core');
var shape_1 = require('./shape');
var SemiCircleProgressComponent = (function (_super) {
    __extends(SemiCircleProgressComponent, _super);
    function SemiCircleProgressComponent(elementRef) {
        _super.call(this);
        this.elementRef = elementRef;
    }
    SemiCircleProgressComponent.prototype.ngOnInit = function () {
        _super.prototype.setShape.call(this, new ProgressBar.SemiCircle(this.elementRef.nativeElement, this.options));
        _super.prototype.animate.call(this, 0.0);
    };
    SemiCircleProgressComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ks-semi-circle-progress',
                    template: "\n  <ng-content></ng-content>\n"
                },] },
    ];
    SemiCircleProgressComponent.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    SemiCircleProgressComponent.propDecorators = {
        'options': [{ type: core_1.Input },],
    };
    return SemiCircleProgressComponent;
}(shape_1.BaseShapeComponent));
exports.SemiCircleProgressComponent = SemiCircleProgressComponent;
//# sourceMappingURL=semi-circle-component.js.map