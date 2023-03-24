sap.ui.define([
    "sap/ui/core/Control"
], function(Control) {
    'use strict';
    return Control.extend("provider.control.CustomControl",{
        metadata : {
            lib : "provider.lib",
            properties : {
                text : {type : "any", defaultValue : undefined}
            }
        },
        renderer : function(oRm,oControl){
            oRm.openStart("div",oControl);
            oRm.class("customControl");
            oRm.openEnd();
            oRm.text(oControl.getText());
            oRm.close("div");
        }
    })
});