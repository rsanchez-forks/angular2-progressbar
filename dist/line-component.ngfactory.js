"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import1 = require('@angular/core/src/linker/view');
var import2 = require('@angular/core/src/linker/element');
var import3 = require('./line-component');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('@angular/core/src/linker/element_ref');
var import9 = require('@angular/core/src/metadata/view');
var import10 = require('@angular/core/src/linker/component_factory');
var renderType_LineProgressComponent_Host = null;
var _View_LineProgressComponent_Host0 = (function (_super) {
    __extends(_View_LineProgressComponent_Host0, _super);
    function _View_LineProgressComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LineProgressComponent_Host0, renderType_LineProgressComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LineProgressComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ks-line-progress', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_LineProgressComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._LineProgressComponent_0_4 = new import3.LineProgressComponent(new import8.ElementRef(this._el_0));
        this._appEl_0.initComponent(this._LineProgressComponent_0_4, [], compView_0);
        compView_0.create(this._LineProgressComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_LineProgressComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.LineProgressComponent) && (0 === requestNodeIndex))) {
            return this._LineProgressComponent_0_4;
        }
        return notFoundResult;
    };
    _View_LineProgressComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._LineProgressComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_LineProgressComponent_Host0;
}(import1.AppView));
function viewFactory_LineProgressComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LineProgressComponent_Host === null)) {
        (renderType_LineProgressComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_LineProgressComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.LineProgressComponentNgFactory = new import10.ComponentFactory('ks-line-progress', viewFactory_LineProgressComponent_Host0, import3.LineProgressComponent);
var styles_LineProgressComponent = [];
var renderType_LineProgressComponent = null;
var _View_LineProgressComponent0 = (function (_super) {
    __extends(_View_LineProgressComponent0, _super);
    function _View_LineProgressComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_LineProgressComponent0, renderType_LineProgressComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_LineProgressComponent0.prototype.createInternal = function (rootSelector) {
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
    return _View_LineProgressComponent0;
}(import1.AppView));
function viewFactory_LineProgressComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_LineProgressComponent === null)) {
        (renderType_LineProgressComponent = viewUtils.createRenderComponentType('', 1, import9.ViewEncapsulation.None, styles_LineProgressComponent, {}));
    }
    return new _View_LineProgressComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_LineProgressComponent0 = viewFactory_LineProgressComponent0;
//# sourceMappingURL=line-component.ngfactory.js.map