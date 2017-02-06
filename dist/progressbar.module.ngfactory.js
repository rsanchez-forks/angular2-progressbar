"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('./progressbar.module');
var import2 = require('@angular/common/src/common_module');
var import3 = require('@angular/common/src/localization');
var import5 = require('@angular/core/src/i18n/tokens');
var ProgressBarModuleInjector = (function (_super) {
    __extends(ProgressBarModuleInjector, _super);
    function ProgressBarModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(ProgressBarModuleInjector.prototype, "_NgLocalization_2", {
        get: function () {
            if ((this.__NgLocalization_2 == null)) {
                (this.__NgLocalization_2 = new import3.NgLocaleLocalization(this.parent.get(import5.LOCALE_ID)));
            }
            return this.__NgLocalization_2;
        },
        enumerable: true,
        configurable: true
    });
    ProgressBarModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ProgressBarModule_1 = new import1.ProgressBarModule();
        return this._ProgressBarModule_1;
    };
    ProgressBarModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import1.ProgressBarModule)) {
            return this._ProgressBarModule_1;
        }
        if ((token === import3.NgLocalization)) {
            return this._NgLocalization_2;
        }
        return notFoundResult;
    };
    ProgressBarModuleInjector.prototype.destroyInternal = function () {
    };
    return ProgressBarModuleInjector;
}(import0.NgModuleInjector));
exports.ProgressBarModuleNgFactory = new import0.NgModuleFactory(ProgressBarModuleInjector, import1.ProgressBarModule);
//# sourceMappingURL=progressbar.module.ngfactory.js.map