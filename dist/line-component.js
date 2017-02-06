"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ProgressBar = require('progressbar.js');
var core_1 = require('@angular/core');
var shape_1 = require('./shape');
var LineProgressComponent = (function (_super) {
    __extends(LineProgressComponent, _super);
    function LineProgressComponent(elementRef) {
        _super.call(this);
        this.elementRef = elementRef;
    }
    LineProgressComponent.prototype.ngOnInit = function () {
        _super.prototype.setShape.call(this, new ProgressBar.Line(this.elementRef.nativeElement, this.options));
        _super.prototype.animate.call(this, 0.0);
    };
    LineProgressComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ks-line-progress',
                    template: "\n  <ng-content></ng-content>\n"
                },] },
    ];
    LineProgressComponent.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    LineProgressComponent.propDecorators = {
        'options': [{ type: core_1.Input },],
    };
    return LineProgressComponent;
}(shape_1.BaseShapeComponent));
exports.LineProgressComponent = LineProgressComponent;
//# sourceMappingURL=line-component.js.map