"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var line_component_1 = require('./line-component');
var semi_circle_component_1 = require('./semi-circle-component');
var circle_component_1 = require('./circle-component');
var ProgressBarModule = (function () {
    function ProgressBarModule() {
    }
    ProgressBarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [line_component_1.LineProgressComponent, semi_circle_component_1.SemiCircleProgressComponent, circle_component_1.CircleProgressComponent],
                    exports: [line_component_1.LineProgressComponent, semi_circle_component_1.SemiCircleProgressComponent, circle_component_1.CircleProgressComponent]
                },] },
    ];
    ProgressBarModule.ctorParameters = [];
    return ProgressBarModule;
}());
exports.ProgressBarModule = ProgressBarModule;
//# sourceMappingURL=progressbar.module.js.map