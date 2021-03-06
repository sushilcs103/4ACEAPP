(function (global) {
    var app = global.app = global.app || {};
   
   
    document.addEventListener('deviceready', function () {

        app.changeSkin = function (e) {
            var mobileSkin = "";

            if (e.sender.element.text() === "Flat") {
                e.sender.element.text("Native");
                mobileSkin = "flat";
            } else {
                e.sender.element.text("Flat");
                mobileSkin = "";
            }

            app.application.skin(mobileSkin);
        };
      
        app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout",platform:"ios7" });
    }, false);
})(window);