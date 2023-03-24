sap.ui.define([

], function() {
    'use strict';
    sap.ui.getCore().initLibrary({
        name : "provider",
        noLibraryCSS: true,
        controls : [
            "provider.control.CustomControl"
        ]
    })
    return provider;
},false);