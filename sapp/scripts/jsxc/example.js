/*jshint latedef: nofunc */

$(function() {
   // var settings = {
   //    xmpp: {
   //       url: 'http://localhost:5280/http-bind/',
   //       domain: 'localhost',
   //       resource: 'example',
   //       overwrite: true
   //    }
   // };

   // // Initialize core functions, intercept login form
   // // and attach connection if possible.
   // jsxc.init({
   //    loginForm: {
   //       form: '#form',
   //       jid: 'nitin@localhost',
   //       pass: 'nitin'
   //    },
   //    logoutElement: $('#logout'),
   //    rosterAppend: 'body',
   //    root: window.location.pathname.replace(/\/[^/]+$/, "/") + (window.location.pathname.match(/dev\.html/) ? '../dev' : '../build'),
   //    displayRosterMinimized: function() {
   //       return true;
   //    },
   //    loadSettings: function(username, password, cb) {
   //      // alert(username)
   //       cb(settings);
   //    },
   //    xmpp: {
   //       url: settings.xmpp.url
   //    }
   // });
jsxc.init({
  xmpp: {
    url: '/http-bind/'
  },
  root: '/jsxc/'
});

           jsxc.start('abhishek@localhost', 'abhishek');
})
   