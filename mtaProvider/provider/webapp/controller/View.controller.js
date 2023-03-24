sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "provider/control/CustomControl"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,CustomControl) {
        "use strict";

        return Controller.extend("provider.controller.View", {
            onInit: function () {
                const oView = this.getView();
                const oCustomControl =  new CustomControl({text : "hello world"});        
                oView.byId("page").addContent(oCustomControl);
            }
        });
    });
