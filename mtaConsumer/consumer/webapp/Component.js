/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "consumer/model/models"
],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("consumer.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();
                // set the device model
                this.setModel(models.createDeviceModel(), "device");
                // let sPath = window.location.pathname.split('/');
                let sPath = this.getManifestObject()._oBaseUri._parts.path.split("/");
                let sDestGuid = sPath[1].split(".")[0];
                // sap.ui.loader.config({
                //     paths: { "provider": `/${sDestGuid}.mtaProvider.provider` }
                // });

                jQuery.sap.registerModulePath("provider", `/${sDestGuid}.mtaProvider.provider`)
                // sap.ui.getCore().loadLibrary("provider");
            }
        });
    }
);