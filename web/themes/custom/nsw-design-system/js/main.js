(() => {
  var t = {
    24: (t, e, s) => {
      "use strict";
      s.r(e), s.d(e, {
        Accordion: () => l,
        Navigation: () => r,
        ShareThis: () => c,
        SiteSearch: () => i,
        SitewideMessage: () => u,
        Tabs: () => h,
        initSite: () => d
      });
      const i = class {
        constructor(t) {
          this.triggerButton = t, this.originalButton = document.querySelector(".js-open-search"), this.targetElement = document.getElementById(this.triggerButton.getAttribute("aria-controls")), this.searchInput = this.targetElement.querySelector(".js-search-input"), this.pressed = "true" === this.triggerButton.getAttribute("aria-expanded")
        }

        init() {
          this.controls()
        }

        controls() {
          this.triggerButton.addEventListener("click", this.showHide.bind(this), !1)
        }

        showHide() {
          this.pressed ? (this.targetElement.hidden = !0, this.originalButton.hidden = !1, this.originalButton.focus()) : (this.targetElement.hidden = !1, this.originalButton.hidden = !0, this.searchInput.focus())
        }
      }, n = (t, e) => {
        const s = [];
        for (let i = 0; i < e.length; i += 1) s.push([].slice.call(document.querySelectorAll(`#${t} ${e[i]}`)));
        const i = [].concat(...s);
        return {all: n = i, first: n[0], last: n[n.length - 1], length: n.length};
        var n
      }, o = (t, e) => {
        const {activeElement: s} = document, i = e;
        return 9 === t.keyCode && (1 === i.length ? t.preventDefault() : t.shiftKey && s === i.first ? (i.last.focus(), t.preventDefault()) : t.shiftKey || s !== i.last || (i.first.focus(), t.preventDefault()), !0)
      }, a = t => `${void 0 === t ? "nsw" : t}-${Math.random().toString(36).substr(2, 16)}`, r = class {
        constructor() {
          this.openNavButton = document.querySelector(".js-open-navigation"), this.closeNavButtons = document.querySelectorAll(".js-close-navigation"), this.openSubnavButtons = document.querySelectorAll(".js-open-subnav"), this.closeSubnavButtons = document.querySelectorAll(".js-close-subnav"), this.mainNavElement = document.getElementById("main-navigation"), this.isMegaMenuElement = !!document.querySelector(".js-mega-menu"), this.transitionEvent = (() => {
            const t = document.createElement("fakeelement"), e = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd"
            };
            return e[Object.keys(e).filter((e => void 0 !== t.style[e]))[0]]
          })(), this.mobileToggleMainNavEvent = t => this.mobileToggleMainNav(t), this.mobileToggleSubnavEvent = () => this.closeSubnav(), this.mobileShowMainTransitionEndEvent = t => this.mobileShowMainNav(t), this.mobileHideMainTransitionEndEvent = t => this.mobileHideMainNav(t), this.showSubNavTransitionEndEvent = t => this.showSubNav(t), this.mobileTrapTabKeyEvent = t => this.mobileMainNavTrapTabs(t), this.mobileSubNavTrapTabKeyEvent = t => this.trapkeyEventStuff(t), this.desktopButtonClickEvent = t => this.buttonClickDesktop(t), this.desktopButtonKeydownEvent = t => this.buttonKeydownDesktop(t), this.checkFocusEvent = t => this.checkIfContainsFocus(t), this.escapeCloseEvent = t => this.escapeClose(t), this.openSubNavElements = [], this.breakpoint = window.matchMedia("(min-width: 62em)"), this.body = document.body
        }

        init() {
          this.mainNavElement && (this.setUpMobileControls(), this.responsiveCheck(this.breakpoint), this.breakpoint.addListener((t => this.responsiveCheck(t))))
        }

        responsiveCheck(t) {
          let e = [];
          t.matches ? (e = [].slice.call(this.mainNavElement.querySelectorAll(".nsw-navigation__list > li")), this.body.classList.remove("navigation-open")) : e = [].slice.call(this.mainNavElement.querySelectorAll("li")), this.tearDownNavControls(), this.setUpNavControls(e)
        }

        tearDownNavControls() {
          this.isMegaMenuElement && [].slice.call(this.mainNavElement.querySelectorAll("li")).forEach((t => {
            const e = t.querySelector("[id^=subnav-]"), s = t.querySelector("a");
            e && (s.removeAttribute("role"), s.removeAttribute("aria-expanded"), s.removeAttribute("aria-controls"), s.removeEventListener("click", this.desktopButtonClickEvent, !1), s.removeEventListener("keydown", this.desktopButtonKeydownEvent, !1))
          }))
        }

        setUpMobileControls() {
          this.openNavButton.addEventListener("click", this.mobileToggleMainNavEvent, !1), this.closeNavButtons.forEach((t => {
            t.addEventListener("click", this.mobileToggleMainNavEvent, !1)
          })), this.closeSubnavButtons.forEach((t => {
            t.addEventListener("click", this.mobileToggleSubnavEvent, !1)
          }))
        }

        mobileMainNavTrapTabs(t) {
          const e = n(this.mainNavElement.id, ["> div button", "> ul > li > a"]);
          o(t, e)
        }

        setUpNavControls(t) {
          this.isMegaMenuElement && t.forEach((t => {
            const e = t.querySelector("[id^=subnav-]"), s = t.querySelector("a");
            e && (s.setAttribute("role", "button"), s.setAttribute("aria-expanded", "false"), s.setAttribute("aria-controls", e.id), s.addEventListener("click", this.desktopButtonClickEvent, !1), s.addEventListener("keydown", this.desktopButtonKeydownEvent, !1), document.addEventListener("keydown", this.escapeCloseEvent, !1))
          }))
        }

        mobileShowMainNav({propertyName: t}) {
          "transform" !== !t && (n(this.mainNavElement.id, ["> div button", "> ul > li > a"]).all[1].focus(), this.mainNavElement.classList.add("is-open"), this.mainNavElement.classList.remove("is-opening"), this.mainNavElement.removeEventListener(this.transitionEvent, this.mobileShowMainTransitionEndEvent, !1), this.mainNavElement.addEventListener("keydown", this.mobileTrapTabKeyEvent, !1))
        }

        mobileHideMainNav({propertyName: t}) {
          if ("transform" !== !t) {
            for (this.mainNavElement.classList.remove("is-open"), this.mainNavElement.classList.remove("is-closing"); this.openSubNavElements.length > 0;) {
              const {submenu: t} = this.whichSubNavLatest();
              t.removeEventListener("keydown", this.mobileSubNavTrapTabKeyEvent, !1), t.classList.remove("is-open"), t.classList.remove("is-closing"), this.openSubNavElements.pop()
            }
            this.mainNavElement.removeEventListener(this.transitionEvent, this.mobileHideMainTransitionEndEvent, !1), this.mainNavElement.removeEventListener("keydown", this.mobileTrapTabKeyEvent, !1)
          }
        }

        mobileToggleMainNav(t) {
          const {currentTarget: e} = t;
          "true" === e.getAttribute("aria-expanded") ? (this.body.classList.remove("navigation-open"), this.openNavButton.focus(), this.mainNavElement.classList.add("is-closing"), this.mainNavElement.addEventListener(this.transitionEvent, this.mobileHideMainTransitionEndEvent, !1)) : (this.body.classList.add("navigation-open"), this.mainNavElement.classList.add("is-opening"), this.mainNavElement.addEventListener(this.transitionEvent, this.mobileShowMainTransitionEndEvent, !1))
        }

        buttonClickDesktop(t) {
          this.saveElements(t), this.toggleSubnavDesktop(), t.preventDefault()
        }

        buttonKeydownDesktop(t) {
          " " !== t.key && "Enter" !== t.key && "Spacebar" !== t.key || (this.saveElements(t), this.toggleSubnavDesktop(), t.preventDefault())
        }

        escapeClose(t) {
          if ("Escape" === t.key) {
            const {link: e} = this.whichSubNavLatest();
            "true" === e.getAttribute("aria-expanded") && (this.toggleSubnavDesktop(!0), t.preventDefault(), e.focus())
          }
        }

        saveElements(t) {
          const {currentTarget: e} = t,
            s = {submenu: document.getElementById(e.getAttribute("aria-controls")), link: e, linkParent: e.parentNode};
          this.openSubNavElements.push(s)
        }

        showSubNav({propertyName: t}) {
          const {submenu: e} = this.whichSubNavLatest();
          "transform" !== !t && (n(e.id, ["> div button", "> h2 a", "> ul > li > a"]).all[2].focus(), e.removeEventListener(this.transitionEvent, this.showSubNavTransitionEndEvent, !1))
        }

        closeSubnav() {
          const {submenu: t, link: e} = this.whichSubNavLatest();
          this.breakpoint.matches ? (e.setAttribute("aria-expanded", !1), e.classList.remove("is-open"), this.mainNavElement.removeEventListener("focus", this.checkFocusEvent, !0), this.mainNavElement.removeEventListener("mousedown", this.checkFocusEvent, !0)) : (e.focus(), t.removeEventListener("keydown", this.mobileSubNavTrapTabKeyEvent, !1)), t.classList.remove("is-open"), this.openSubNavElements.pop()
        }

        opensubnav() {
          const {submenu: t, link: e} = this.whichSubNavLatest();
          this.breakpoint.matches ? (e.setAttribute("aria-expanded", !0), e.classList.add("is-open"), this.mainNavElement.addEventListener("focus", this.checkFocusEvent, !0), this.mainNavElement.addEventListener("mousedown", this.checkFocusEvent, !0)) : (t.addEventListener("keydown", this.mobileSubNavTrapTabKeyEvent, !1), t.addEventListener(this.transitionEvent, this.showSubNavTransitionEndEvent, !1)), t.classList.add("is-open")
        }

        toggleSubnavDesktop() {
          const {link: t} = this.whichSubNavLatest();
          "true" === t.getAttribute("aria-expanded") ? this.closeSubnav() : this.opensubnav()
        }

        checkIfContainsFocus() {
          const {linkParent: t} = this.whichSubNavLatest();
          t.contains(document.activeElement) || this.toggleSubnavDesktop(!0)
        }

        whichSubNavLatest() {
          const t = this.openSubNavElements.length - 1;
          return this.openSubNavElements[t]
        }

        trapkeyEventStuff(t) {
          const {submenu: e} = this.whichSubNavLatest(), s = n(e.id, ["> div button", "> ul > li > a"]);
          o(t, s)
        }
      }, l = class {
        constructor(t) {
          this.accordionHeadingClass = ".nsw-accordion__title", this.accordion = t, this.headings = t.querySelectorAll(this.accordionHeadingClass), this.buttons = [], this.content = [], this.showHideEvent = t => this.showHide(t)
        }

        init() {
          this.setUpDom(), this.controls()
        }

        setUpDom() {
          this.accordion.classList.add("is-ready"), this.headings.forEach((t => {
            const e = t, s = t.nextElementSibling, i = function ({textContent: t}) {
              const e = document.createDocumentFragment(), s = document.createElement("button"), i = a("accordion");
              return s.textContent = t, s.setAttribute("type", "button"), s.setAttribute("aria-expanded", "false"), s.setAttribute("aria-controls", i), s.classList.add("nsw-accordion__button"), s.insertAdjacentHTML("beforeend", '\n  <svg class="nsw-icon nsw-accordion__icon" focusable="false" aria-hidden="true">\n    <use xlink:href="#chevron"></use>\n  </svg>\n  '), e.appendChild(s), e
            }(t);
            e.textContent = "", e.appendChild(i);
            const n = e.getElementsByTagName("button")[0];
            s.id = n.getAttribute("aria-controls"), s.hidden = !0, this.content.push(s), this.buttons.push(n)
          }))
        }

        controls() {
          this.buttons.forEach((t => {
            t.addEventListener("click", this.showHideEvent, !1)
          }))
        }

        showHide(t) {
          const {currentTarget: e} = t, s = this.buttons.indexOf(e), i = this.content[s];
          i.hidden ? (e.classList.add("is-open"), e.setAttribute("aria-expanded", "true"), i.hidden = !1) : (e.classList.remove("is-open"), e.setAttribute("aria-expanded", "false"), i.hidden = !0)
        }
      }, c = class {
        constructor() {
          this.sharelinks = document.querySelectorAll(".js-share-this")
        }

        init() {
          this.controls()
        }

        controls() {
          this.sharelinks.forEach((t => {
            t.addEventListener("click", this.popup, !1)
          }))
        }

        popup(t) {
          t.preventDefault(), ((t, e, s) => {
            const i = window.top.outerHeight / 2 + window.top.screenY - 300,
              n = window.top.outerWidth / 2 + window.top.screenX - 300;
            window.open(t, "", `toolbar=no,location=no,directories=no, status=no,\n    menubar=no, scrollbars=no, resizable=no, copyhistory=no,\n    width=600, height=600, top=${i}, left=${n}`)
          })(this.href)
        }
      }, h = class {
        constructor(t, e) {
          this.tablistClass = ".nsw-tabs__list", this.tablistItemClass = ".nsw-tabs__list-item", this.tablistLinkClass = ".nsw-tabs__link", this.tab = t, this.showTab = e, this.tabList = t.querySelector(this.tablistClass), this.tabItems = this.tabList.querySelectorAll(this.tablistItemClass), this.allowedKeys = [35, 36, 37, 39, 40], this.tabLinks = [], this.tabPanel = [], this.selectedTab = null, this.clickTabEvent = t => this.clickTab(t), this.arrowKeysEvent = t => this.arrowKeys(t)
        }

        init() {
          this.setUpDom(), this.controls(), this.setInitalTab()
        }

        setUpDom() {
          this.tab.classList.add("is-ready"), this.tabList.setAttribute("role", "tablist"), this.tabItems.forEach((t => {
            const e = t, s = t.querySelector(this.tablistLinkClass), i = this.tab.querySelector(s.hash), n = a("tab");
            e.setAttribute("role", "presentation"), this.enhanceTabLink(s, n), this.enhanceTabPanel(i, n)
          }))
        }

        enhanceTabLink(t, e) {
          t.setAttribute("role", "tab"), t.setAttribute("id", e), t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this.tabLinks.push(t)
        }

        enhanceTabPanel(t, e) {
          const s = t;
          s.setAttribute("role", "tabpanel"), s.setAttribute("role", "tabpanel"), s.setAttribute("aria-labelledBy", e), s.setAttribute("tabindex", "0"), s.hidden = !0, this.tabPanel.push(s)
        }

        setInitalTab() {
          const {tabItems: t, tabLinks: e, tabPanel: s, showTab: i} = this, n = void 0 === i ? 0 : i, o = e[n];
          t[n].classList.add("is-selected"), o.removeAttribute("tabindex"), o.setAttribute("aria-selected", !0), s[n].hidden = !1, this.selectedTab = o
        }

        clickTab(t) {
          t.preventDefault(), this.switchTabs(t.currentTarget)
        }

        switchTabs(t) {
          const e = t;
          if (e !== this.selectedTab) {
            e.focus(), e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this.selectedTab.setAttribute("aria-selected", !1), this.selectedTab.setAttribute("tabindex", "-1");
            const t = this.tabLinks.indexOf(e), s = this.tabLinks.indexOf(this.selectedTab);
            this.tabItems[t].classList.add("is-selected"), this.tabItems[s].classList.remove("is-selected"), this.tabPanel[t].hidden = !1, this.tabPanel[s].hidden = !0, this.selectedTab = e
          }
        }

        arrowKeys({which: t}) {
          const e = this.tabLinks.length - 1;
          let s = this.tabLinks.indexOf(this.selectedTab), i = !1;
          if (this.allowedKeys.includes(t)) {
            switch (t) {
              case 35:
                s = e;
                break;
              case 36:
                s = 0;
                break;
              case 37:
                s = 0 === s ? e : s -= 1;
                break;
              case 39:
                s = s === e ? 0 : s += 1;
                break;
              case 40:
                i = !0
            }
            i ? this.tabPanel[s].focus() : this.switchTabs(this.tabLinks[s])
          }
        }

        controls() {
          this.tabLinks.forEach((t => {
            t.addEventListener("click", this.clickTabEvent, !1), t.addEventListener("keydown", this.arrowKeysEvent, !1)
          }))
        }
      }, u = class {
        constructor(t) {
          this.messageElement = t, this.closeButton = t.querySelector(".nsw-sitewide-message__close"), this.closeMessageEvent = t => this.closeMessage(t)
        }

        init() {
          this.controls()
        }

        controls() {
          this.closeButton.addEventListener("click", this.closeMessageEvent, !1)
        }

        closeMessage() {
          this.messageElement.hidden = !0
        }
      };

      function d() {
        const t = document.querySelectorAll(".js-open-search"), e = document.querySelectorAll(".js-close-search"),
          s = document.querySelectorAll(".js-accordion"), n = document.querySelectorAll(".js-tabs"),
          o = document.querySelectorAll(".js-sitewide-message");
        t.forEach((t => {
          new i(t).init()
        })), e.forEach((t => {
          new i(t).init()
        })), (new r).init(), s.forEach((t => {
          new l(t).init()
        })), n && n.forEach((t => {
          new h(t).init()
        })), (new c).init(), o && o.forEach((t => {
          new u(t).init()
        }))
      }

      window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), Element.prototype.closest || (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest = function (t) {
        let e = this;
        if (!document.documentElement.contains(this)) return null;
        do {
          if (e.matches(t)) return e;
          e = e.parentElement
        } while (null !== e);
        return null
      })
    }
  }, e = {};

  function s(i) {
    if (e[i]) return e[i].exports;
    var n = e[i] = {exports: {}};
    return t[i](n, n.exports, s), n.exports
  }

  s.d = (t, e) => {
    for (var i in e) s.o(e, i) && !s.o(t, i) && Object.defineProperty(t, i, {enumerable: !0, get: e[i]})
  }, s.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (t) {
      if ("object" == typeof window) return window
    }
  }(), s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), s.r = t => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, (() => {
    var t;
    s.g.importScripts && (t = s.g.location + "");
    var e = s.g.document;
    if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
      var i = e.getElementsByTagName("script");
      i.length && (t = i[i.length - 1].src)
    }
    if (!t) throw new Error("Automatic publicPath is not supported in this browser");
    t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = t + "../"
  })(), (() => {
    const t = s(24);
    window.NSW = t
  })(), (() => {
    "use strict";
    s.p
  })()
})();
