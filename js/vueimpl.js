/**
 * Created by hesk on 16年12月3日.
 */
var Lng = Vue.extend({});
var slider = new Vue({
  el: "#slider",
  data: {slider: installation.script_cn.slider}
});
var features = new Vue({
  el: "#features",
  data: {features: installation.script_cn.features}
});
var works = new Vue({
  el: "#works",
  data: {works: installation.script_cn.works}
});
var facts = new Vue({
  el: "#facts",
  data: {facts: installation.script_cn.facts}
});
var contact = new Vue({
  el: "#contact",
  data: {contact: installation.script_cn.contact},
  methods: {
    lng: function (langpack) {

    }
  }
});
var footer = new Vue({
  el: "#footer",
  data: {footer: installation.script_cn.footer}
});
var header = new Vue({
  el: '#navigation',
  data: {
    menu: installation.script_cn.menu
  },
  methods: {
    switchLanguage: function () {
      this.isEn = this.isEn == undefined ? false : !this.isEn;
      // this.data.language = this.data.language == undefined ? false : !this.data.language;
      if (this.isEn) {
        this.menu = installation.script_en.menu;
        contact.$data.contact = installation.script_en.contact;
        facts.$data.facts = installation.script_en.facts;
        works.$data.works = installation.script_en.works;
        features.$data.features = installation.script_en.features;
        slider.$data.slider = installation.script_en.slider;
        footer.$data.footer = installation.script_en.footer;
      } else {
        this.menu = installation.script_cn.menu;
        contact.$data.contact = installation.script_cn.contact;
        facts.$data.facts = installation.script_cn.facts;
        works.$data.works = installation.script_cn.works;
        features.$data.features = installation.script_cn.features;
        slider.$data.slider = installation.script_cn.slider;
        footer.$data.footer = installation.script_cn.footer;
      }
      return;
    }
  }
});