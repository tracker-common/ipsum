
//namespacing
var IpsumApp = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    initialize: function() {
        new IpsumApp.Routers.ipsum();
        Backbone.history.start();
    }
};