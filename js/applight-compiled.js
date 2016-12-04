"use strict";

/**
 * Created by hesk on 16年12月4日.
 */

var model_control = {
  name: "Ashley",
  age: 24,
  friends: [{ name: "Bob", age: 21 }, { name: "Jane", age: 20 }, { name: "Anna", age: 29 }],

  translate: {
    using: 0,
    current: {},
    cn: {
      username: "邮箱/手机",
      password: "密码",
      login: "登录",
      fblogin: "臉書登入",
      failurelogin: "请填写电子邮件和密码。"
    },
    en: {
      username: "Email/Phone number",
      password: "Password",
      login: "Login",
      fblogin: "Facebook Login",
      failurelogin: "Please fill out the form email and password."
    }
  },
  token: "",
  search: "",
  username: "",
  password: ""
};

Vue.component('sitepoint', {
  props: ['channel'],
  template: '<a href="https://www.sitepoint.com/{{ channel | lowercase }}">{{ channel }} @Sitepoint</span>'
});

var slider = new Vue({
  el: "#main_app",
  data: model_control,
  methods: {
    loginprocess: function loginprocess(e) {
      if (this.$data.username == "" || this.$data.password == "") {
        alert(this.$data.translate.current.failurelogin);
      } else {
        this.$http.post(installation.baseapi + "users/login", {
          email: this.$data.username,
          password: this.$data.password
        }).then(function (response) {
          console.log(response);
        }, function (errorresponse) {
          console.log(errorresponse);
        });
      }
    },
    switchlang: function switchlang() {
      var now = this.$data.translate.current.using == 0 ? 1 : 0;
      if (now == 1) {
        this.$data.translate.current = model_control.translate.en;
      } else if (now == 0) {
        this.$data.translate.current = model_control.translate.cn;
      }
      this.$data.translate.current.using = now;
    },
    facebooklogin: function facebooklogin() {
      FB.login();
    },
    googlelogin: function googlelogin() {}
  }
});

var thesnd = new Vue({});
document.getElementById('toggleProfile').addEventListener('click', function () {
  [].map.call(document.querySelectorAll('.profile'), function (el) {
    el.classList.toggle('profile--open');
  });
});
function callbackfblogin(response) {
  if (response.status == "connected") {
    var uuid = response.authResponse.userID;
    FB.api("/me", { fields: 'id,email,name' }, function (response) {
      if (response && !response.error) {
        console.log("fb api now ===");
        console.log(response);
        console.log("fb api uuid ===");
        console.log(uuid);
        console.log("fb api authresponse ===");
        console.log(response.authResponse);
      }
    });
  } else {}
}
window.fbAsyncInit = function () {
  FB.init({
    appId: installation.FB,
    status: true,
    cookie: true,
    xfbml: true,
    version: 'v2.8'
  });
  FB.getLoginStatus(function (response) {
    callbackfblogin(response);
  });
};
slider.$data.translate.current = model_control.translate.cn;

//# sourceMappingURL=applight-compiled.js.map