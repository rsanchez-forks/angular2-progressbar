"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import1 = require('@angular/core/src/linker/view');
var import2 = require('@angular/core/src/linker/element');
var import3 = require('./semi-circle-component');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/linker/element_ref');
var import9 = require('@angular/core/src/metadata/view');
var import10 = require('@angular/core/src/linker/component_factory');
var renderType_SemiCircleProgressComponent_Host = null;
var _View_SemiCircleProgressComponent_Host0 = (function (_super) {
    __extends(_View_SemiCircleProgressComponent_Host0, _super);
    function _View_SemiCircleProgressComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SemiCircleProgressComponent_Host0, renderType_SemiCircleProgressComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SemiCircleProgressComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ks-semi-circle-progress', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_SemiCircleProgressComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._SemiCircleProgressComponent_0_4 = new import3.SemiCircleProgressComponent(new import8.ElementRef(this._el_0));
        this._appEl_0.initComponent(this._SemiCircleProgressComponent_0_4, [], compView_0);
        compView_0.create(this._SemiCircleProgressComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_SemiCircleProgressComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.SemiCircleProgressComponent) && (0 === requestNodeIndex))) {
            return this._SemiCircleProgressComponent_0_4;
        }
        return notFoundResult;
    };
    _View_SemiCircleProgressComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._SemiCircleProgressComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_SemiCircleProgressComponent_Host0;
}(import1.AppView));
function viewFactory_SemiCircleProgressComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SemiCircleProgressComponent_Host === null)) {
        (renderType_SemiCircleProgressComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_SemiCircleProgressComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.SemiCircleProgressComponentNgFactory = new import10.ComponentFactory('ks-semi-circle-progress', viewFactory_SemiCircleProgressComponent_Host0, import3.SemiCircleProgressComponent);
var styles_SemiCircleProgressComponent = [];
var renderType_SemiCircleProgressComponent = null;
var _View_SemiCircleProgressComponent0 = (function (_super) {
    __extends(_View_SemiCircleProgressComponent0, _super);
    function _View_SemiCircleProgressComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SemiCircleProgressComponent0, renderType_SemiCircleProgressComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SemiCircleProgressComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this.renderer.projectNodes(parentRenderNode, import4.flattenNestedViewRenderNodes(this.projectableNodes[0]));
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init([], [
            this._text_0,
            this._text_1
        ], [], []);
        return null;
    };
    return _View_SemiCircleProgressComponent0;
}(import1.AppView));
function viewFactory_SemiCircleProgressComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SemiCircleProgressComponent === null)) {
        (renderType_SemiCircleProgressComponent = viewUtils.createRenderComponentType('', 1, import9.ViewEncapsulation.None, styles_SemiCircleProgressComponent, {}));
    }
    return new _View_SemiCircleProgressComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_SemiCircleProgressComponent0 = viewFactory_SemiCircleProgressComponent0;
//# sourceMappingURL=semi-circle-component.ngfactory.js.map