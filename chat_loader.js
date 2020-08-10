webpackJsonp([11], {
    "/Uby": function(e, t, n) {
        "use strict";
        var i = n("Xxa5"),
            a = n.n(i),
            s = n("mvHQ"),
            r = n.n(s),
            o = n("Gu7T"),
            c = n.n(o),
            u = n("exGp"),
            l = n.n(u),
            d = n("d7EF"),
            h = n.n(d),
            f = n("Dd8w"),
            m = n.n(f),
            p = n("NYxO"),
            v = n("mtWM"),
            g = n.n(v),
            y = n("xrTZ");

        function b(e) {
            if (e.length < 1) return null;
            for (var t = {}, n = e[0], i = 1, a = 0; a < e.length; a += 1) {
                var s = e[a];
                t[s] = (t[s] || 0) + 1, t[s] > i && (n = s, i = t[s])
            }
            return n
        }
        var _ = {
                name: "search-bar",
                computed: m()({}, Object(p.e)(["searchQuery"])),
                data: function() {
                    return {
                        fetcherDelay: null,
                        showSBIRect: !1,
                        sbiMode: "image_url",
                        imageUrl: "",
                        imageLoading: !1,
                        handlePageClickListener: null,
                        hasDragEventOccurred: !1,
                        hideSBIRectWhenDragLeaves: !1,
                        isSearching: !1
                    }
                },
                methods: m()({}, Object(p.b)(["enqueueNotification", "fetchSearchResults"]), {
                    tryClose: function() {
                        this.isSearching || (this.showSBIRect = !1)
                    },
                    onChange: function(e) {
                        var t = this,
                            n = {},
                            i = e.target.value.trim();
                        i.length && (n = {
                            path: "/search",
                            query: {
                                q: i
                            }
                        });
                        var a = "search" !== this.$route.name ? "push" : "replace";
                        this.$router[a](n), clearTimeout(this.fetcherDelay), this.fetcherDelay = setTimeout(function() {
                            return t.fetchSearchResults(i)
                        }, 500)
                    },
                    searchResized: function(e) {
                        var t = document.createElement("canvas"),
                            n = t.getContext("2d"),
                            i = Math.floor(480 / (e.width / e.height));
                        t.width = 480, t.height = i, n.drawImage(e, 0, 0, e.width, e.height, 0, 0, 480, i);
                        var a = t.toDataURL("image/jpeg", .9);
                        this.searchByImage(a)
                    },
                    loadImageFromUrl: function() {
                        var e = this;
                        this.imageLoading = !0;
                        var t = new Image;
                        t.crossOrigin = "anonymous", t.onload = function() {
                            e.imageLoading = !1, e.imageUrl = "", e.searchResized(t)
                        }, t.onerror = function() {
                            e.enqueueNotification({
                                type: "alert",
                                text: "無法讀取圖片",
                                duration: 2e3
                            }), e.imageLoading = !1, e.imageUrl = ""
                        }, t.src = "https://image.trace.moe/imgproxy?url=" + encodeURIComponent(this.imageUrl)
                    },
                    onFileChange: function(e, t) {
                        var n = this,
                            i = h()(e[t].files, 1)[0],
                            a = void 0;
                        if (!this.isSearching)
                            if (i) i.type.startsWith("image/") ? a = URL.createObjectURL(i) : this.enqueueNotification({
                                type: "alert",
                                text: "只接受圖像檔案",
                                duration: 2e3
                            });
                            else if ("dataTransfer" === t) {
                            var s = document.createElement("div");
                            s.innerHTML = e.dataTransfer.getData("text/html"), (s = s.querySelector("img")) && (a = "https://image.trace.moe/imgproxy?url=" + encodeURIComponent(s.src))
                        }
                        if (a) {
                            var r = new Image;
                            r.crossOrigin = "anonymous", r.onload = function() {
                                n.searchResized(r), a.startsWith("http") || URL.revokeObjectURL(a)
                            }, r.onerror = function() {
                                n.hasDragEventOccurred = !1, n.enqueueNotification({
                                    type: "alert",
                                    text: "不支援的圖像格式",
                                    duration: 2e3
                                })
                            }, r.src = a
                        } else this.hasDragEventOccurred = !1
                    },
                    searchByImage: function(e) {
                        var t = this;
                        return l()(a.a.mark(function n() {
                            var i, s, o, u, l, d, f, m, p, v, _, w, k, C, x, E, S, L, M, T, j, D, O, R, I;
                            return a.a.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, t.isSearching = !0, n.next = 4, g()({
                                            method: "post",
                                            url: "https://trace.moe/api/search",
                                            data: {
                                                image: e
                                            }
                                        });
                                    case 4:
                                        if (i = n.sent, s = i.data, !((o = s.docs).length < 1)) {
                                            n.next = 10;
                                            break
                                        }
                                        return t.enqueueNotification({
                                            type: "info",
                                            text: "沒有符合條件的結果",
                                            duration: 2e3
                                        }), n.abrupt("return");
                                    case 10:
                                        u = o.reduce(function(e, t) {
                                            return [].concat(c()(e), [t.anilist_id + "\0" + t.episode])
                                        }, []), l = o.reduce(function(e, t) {
                                            return [].concat(c()(e), [t.anilist_id + "\0" + t.at])
                                        }, []), d = b(u).split("\0"), f = h()(d, 2), m = f[0], p = f[1], v = b(l).split("\0"), _ = h()(v, 2), _[0], w = _[1], (k = o.find(function(e) {
                                            return String(e.anilist_id) === m && String(e.episode) === p && String(e.at) === w
                                        })) || (C = o.sort(function(e, t) {
                                            return t.similarity - e.similarity
                                        }), x = h()(C, 1), k = x[0]), S = (E = k).at, L = E.filename, M = E.tokenthumb, T = E.title_chinese, j = E.title_native, D = E.similarity, O = (100 * D).toFixed(1), R = "https://trace.moe/thumbnail.php?anilist_id=" + m + "&file=" + encodeURIComponent(L) + "&t=" + S + "&token=" + M, I = y.Base64.encodeURI(r()({
                                            at: S,
                                            ep: p,
                                            nameChi: T,
                                            nameJpn: j,
                                            preview: R,
                                            score: O
                                        })), window.ga("send", "event", "Search", "image", r()({
                                            nameChi: T,
                                            ep: p,
                                            at: S,
                                            score: O,
                                            preview: R
                                        })), t.$router.push({
                                            name: "what-anime",
                                            query: {
                                                payload: I
                                            }
                                        }), n.next = 28;
                                        break;
                                    case 24:
                                        n.prev = 24, n.t0 = n.catch(0), console.error(n.t0), t.enqueueNotification({
                                            type: "alert",
                                            text: "搜尋時發生未知錯誤",
                                            duration: 2e3
                                        });
                                    case 28:
                                        return n.prev = 28, t.isSearching = !1, t.hasDragEventOccurred = !1, n.finish(28);
                                    case 32:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, t, [
                                [0, 24, 28, 32]
                            ])
                        }))()
                    }
                }),
                watch: {
                    $route: function() {
                        this.tryClose()
                    },
                    showSBIRect: function(e) {
                        e || (this.hideSBIRectWhenDragLeaves = !1, this.sbiMode = "image_url")
                    },
                    hasDragEventOccurred: function(e) {
                        e ? (this.showSBIRect = !0, this.sbiMode = "image") : this.hideSBIRectWhenDragLeaves && (this.showSBIRect = !1)
                    }
                },
                mounted: function() {
                    var e = this;
                    this.handlePageClickListener = function(t) {
                        for (var n = t.target; null !== n && String(n.getAttribute("class")).indexOf("sbi-") < 0 && "app" !== n.id;) n = n.parentNode;
                        null !== n && n.className.indexOf("sbi-") < 0 && e.tryClose()
                    }, this.handleDragEnterListener = function(t) {
                        null === t.relatedTarget && (e.hasDragEventOccurred = !0, e.showSBIRect || (e.hideSBIRectWhenDragLeaves = !0))
                    }, this.handleDragLeaveListener = function(t) {
                        null === t.relatedTarget && (e.hasDragEventOccurred = !1)
                    }, document.addEventListener("click", this.handlePageClickListener), document.addEventListener("dragenter", this.handleDragEnterListener), document.addEventListener("dragleave", this.handleDragLeaveListener)
                },
                beforeDestroy: function() {
                    document.removeEventListener("click", this.handlePageClickListener), document.removeEventListener("dragenter", this.handleDragEnterListener), document.removeEventListener("dragleave", this.handleDragLeaveListener)
                }
            },
            w = n("XyMi");
        var k = function(e) {
                n("0yLS")
            },
            C = Object(w.a)(_, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "search-bar"
                }, [n("input", {
                    attrs: {
                        type: "text",
                        spellcheck: "false",
                        placeholder: "搜尋動畫作品"
                    },
                    domProps: {
                        value: e.searchQuery
                    },
                    on: {
                        input: e.onChange
                    }
                }), e._v(" "), n("div", {
                    staticClass: "sbi-toggle",
                    on: {
                        click: function(t) {
                            e.showSBIRect = !0
                        }
                    }
                }, [n("i", {
                    staticClass: "fe-camera"
                })]), e._v(" "), e.showSBIRect ? n("div", {
                    staticClass: "sbi-rect"
                }, [n("header", [e._m(0), e._v(" "), n("i", {
                    staticClass: "fe-x",
                    on: {
                        click: e.tryClose
                    }
                })]), e._v(" "), e.isSearching || e.hasDragEventOccurred ? n("div", {
                    staticClass: "drop-hint",
                    on: {
                        dragover: function(e) {
                            e.preventDefault()
                        },
                        drop: function(t) {
                            t.preventDefault(), e.onFileChange(t, "dataTransfer")
                        }
                    }
                }, [e._v("\n      " + e._s(e.isSearching ? "搜尋中，請稍等..." : "將圖片拖放到這裡") + "\n    ")]) : n("div", {
                    staticClass: "legend"
                }, [n("nav", [n("ul", [n("li", {
                    class: {
                        active: "image_url" === e.sbiMode
                    },
                    on: {
                        click: function(t) {
                            e.sbiMode = "image_url"
                        }
                    }
                }, [e._v("\n            貼上圖片網址\n          ")]), e._v(" "), n("li", {
                    class: {
                        active: "image" === e.sbiMode
                    },
                    on: {
                        click: function(t) {
                            e.sbiMode = "image"
                        }
                    }
                }, [e._v("\n            上載圖片\n          ")])])]), e._v(" "), n("div", {
                    staticClass: "search-option"
                }, ["image_url" === e.sbiMode ? n("div", {
                    staticClass: "sbi-input"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.imageUrl,
                        expression: "imageUrl"
                    }],
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: e.imageUrl
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.imageUrl = t.target.value)
                        }
                    }
                }), e._v(" "), n("button", {
                    attrs: {
                        disabled: e.imageLoading
                    },
                    on: {
                        click: e.loadImageFromUrl
                    }
                }, [e._v("搜尋")])]) : [n("input", {
                    attrs: {
                        type: "file"
                    },
                    on: {
                        change: function(t) {
                            e.onFileChange(t, "target")
                        }
                    }
                })], e._v(" "), e._m(1)], 2)])]) : e._e()])
            }, [function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", [t("h1", [this._v("以圖搜尋")]), this._v(" "), t("span", [this._v("直接使用場景截圖搜尋作品")])])
            }, function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "powered"
                }, [t("span", [this._v("\n            powered by\n            "), t("a", {
                    attrs: {
                        rel: "noopener noreferrer nofollow",
                        href: "https://trace.moe",
                        target: "_blank"
                    }
                }, [this._v("trace.moe")])])])
            }], !1, k, "data-v-10acf67b", null);
        t.a = C.exports
    },
    0: function(e, t) {},
    "0yLS": function(e, t) {},
    "69wS": function(e, t) {},
    "7u3C": function(e, t) {},
    "82bE": function(e, t) {},
    "8EGg": function(e, t) {},
    "8ELW": function(e, t) {},
    "8Gro": function(e, t) {},
    "9DBc": function(e, t) {},
    "9FGH": function(e, t) {},
    AFwT: function(e, t) {},
    BB2M: function(e, t, n) {
        "use strict";
        var i = n("n5Qe"),
            a = {
                name: "ads",
                props: {
                    type: {
                        type: String,
                        required: !0
                    },
                    size: {
                        type: Object,
                        required: !0
                    }
                },
                computed: {
                    src: function() {
                        var e = this.size,
                            t = e.width,
                            n = e.height;
                        return i.a.replace("_", "ads") + "/iframe?type=" + this.type + "#" + t + "x" + n
                    },
                    style: function() {
                        var e = this.size,
                            t = e.width;
                        return {
                            height: e.height + "px",
                            width: t + "px"
                        }
                    }
                }
            },
            s = n("XyMi");
        var r = function(e) {
                n("8ELW")
            },
            o = Object(s.a)(a, function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "wrapper",
                    style: this.style
                }, [t("iframe", {
                    style: this.style,
                    attrs: {
                        frameBorder: "0",
                        src: this.src
                    }
                })])
            }, [], !1, r, "data-v-307d78bc", null);
        t.a = o.exports
    },
    DGRE: function(e, t) {},
    EJjF: function(e, t) {},
    ISRz: function(e, t) {},
    JTgL: function(e, t) {},
    LbrN: function(e, t, n) {
        e.exports = n.p + "static/img/ebuko-sprite_3.f42e7c4.png"
    },
    MCa2: function(e, t, n) {
        e.exports = n.p + "static/img/ebuko-sprite_4.74ef803.png"
    },
    MaZ1: function(e, t) {},
    NHnr: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("fZjL"),
            a = n.n(i),
            s = n("Xxa5"),
            r = n.n(s),
            o = n("exGp"),
            c = n.n(o),
            u = n("//Fk"),
            l = n.n(u),
            d = n("M4fF"),
            h = n.n(d),
            f = n("/5sW"),
            m = n("no1S"),
            p = n.n(m),
            v = n("9mpg"),
            g = n.n(v),
            y = n("DmT9"),
            b = n.n(y),
            _ = n("HI0L"),
            w = n.n(_),
            k = n("oHEs"),
            C = n("8jLZ"),
            x = n("n5Qe"),
            E = n("Gu7T"),
            S = n.n(E),
            L = n("d7EF"),
            M = n.n(L),
            T = n("Dd8w"),
            j = n.n(T),
            D = n("NYxO"),
            O = n("O4Lo"),
            R = n.n(O),
            I = n("BB2M"),
            P = n("czzF"),
            A = n("wd27"),
            $ = n("/Uby"),
            z = {
                name: "notification",
                props: {
                    payload: {
                        type: Object,
                        required: !0
                    }
                },
                computed: {
                    icon: function() {
                        return "alert" === this.payload.type ? "alert-triangle" : "info"
                    }
                },
                methods: j()({}, Object(D.b)(["dequeueNotification"]), {
                    dismiss: function() {
                        this.dequeueNotification(this.payload.id)
                    }
                })
            },
            F = n("XyMi");
        var H = function(e) {
                n("ISRz")
            },
            N = Object(F.a)(z, function() {
                var e, t = this.$createElement,
                    n = this._self._c || t;
                return n("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [n("div", {
                    staticClass: "notification",
                    on: {
                        click: this.dismiss
                    }
                }, [n("i", {
                    class: (e = {}, e["" + this.payload.type] = !0, e["fe-" + this.icon] = !0, e)
                }), this._v(" "), n("span", {
                    domProps: {
                        innerHTML: this._s(this.payload.text)
                    }
                })])])
            }, [], !1, H, "data-v-55cf43fa", null).exports;
        var q = function(e) {
                n("WUyN")
            },
            U = Object(F.a)({
                name: "background"
            }, function() {
                var e = this.$createElement;
                return (this._self._c || e)("div", {
                    staticClass: "background"
                })
            }, [], !1, q, "data-v-5d8ce302", null).exports,
            B = {
                name: "app",
                components: {
                    Ads: I.a,
                    Ebuko: P.a,
                    Loader: A.a,
                    SearchBar: $.a,
                    Notification: N,
                    Background: U
                },
                data: function() {
                    return {
                        year: (new Date).getFullYear(),
                        loaded: !1,
                        adsDismissed: !1,
                        showSideAds: !1
                    }
                },
                computed: j()({}, Object(D.e)(["user", "isMobile", "showEbuko", "hideEbukoOverride", "notifications"]), {
                    screenWidth: function() {
                        return window.innerWidth
                    }
                }),
                methods: j()({}, Object(D.d)(["setIsCommentsSided", "setIsMobile"]), Object(D.b)(["setEbukoUnwell", "setShowEbuko", "fetchUser", "fetchAnimeList", "fetchHPData", "enqueueNotification"]), {
                    showOnegai1: function() {
                        var e = void 0,
                            t = Math.random();
                        if (t < .2) e = document.body;
                        else if (t < .55) e = document.querySelector("#app");
                        else {
                            e = M()(document.body.children[0].children, 1)[0]
                        }
                        var n = document.createElement("div"),
                            i = "請考慮關閉廣告封鎖插件，或將 ebb 新增至白名單中。我們需要您的行動支持才能負擔高昂的營運開支 (>∧<)";
                        i = (i = (i = i.split("")).reverse()).map(function(e) {
                            return '<span style="transform: rotateY(180deg)">' + (e = " " === e ? "&nbsp;" : "&#x" + e.charCodeAt(0).toString(16) + ";") + "</span>"
                        }), n.innerHTML = i.join("");
                        var a = [].concat(S()(document.styleSheets)),
                            s = (a = (a = a.map(function(e) {
                                return [].concat(S()(e.cssRules || e.rules || [])).map(function(e) {
                                    return e instanceof CSSStyleRule ? [e] : e instanceof CSSMediaRule && window.matchMedia(e.conditionText) ? [].concat(S()(e.cssRules)) : []
                                })
                            })).reduce(function(e, t) {
                                return e.concat.apply(e, S()(t))
                            }, [])).find(function(e) {
                                return "[ebuko-kara-no-onegai]" === e.selectorText
                            }).cssText.match(/{(.+?)}/)[1];
                        n.style.cssText = s;
                        var r = Math.floor(t * e.children.length);
                        e.insertBefore(n, e.children[r])
                    },
                    checkEbukoHealth: function() {
                        var e = this;
                        return new l.a(function(t) {
                            var n = document.createElement("script"),
                                i = function(i) {
                                    n.parentNode.removeChild(n), e.setEbukoUnwell(i), t(), i && e.showOnegai()
                                };
                            n.onload = i.bind(!0, !1), n.onerror = i.bind(!1, !0), n.src = "https://pagead2.googlesyndication.com/pagead/js/google_top_exp.js", document.head.appendChild(n)
                        })
                    }
                }),
                mounted: function() {
                    var e = this;
                    return c()(r.a.mark(function t() {
                        var n;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.checkEbukoHealth();
                                case 2:
                                    return n = R()(function() {
                                        e.showSideAds = !!window.matchMedia("(min-width: 1856px)").matches;
                                        var t = !window.matchMedia("(max-width: 1135px)").matches,
                                            n = !!window.matchMedia("(max-width: 839px)").matches,
                                            i = !!window.matchMedia("(min-width: calc(1536px + (110px + 64px) * 2))").matches;
                                        e.setIsCommentsSided(t), e.setIsMobile(n), e.setShowEbuko(i)
                                    }, 200), window.addEventListener("resize", n), n(), t.next = 7, l.a.all([e.fetchUser(), e.fetchAnimeList(), e.fetchHPData()]);
                                case 7:
                                    e.loaded = !0, e.$root.$emit("appload");
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                }
            };
        var W = function(e) {
                n("TuST"), n("82bE"), n("x6Cj")
            },
            X = Object(F.a)(B, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("div", {
                    staticClass: "content"
                }, [n("nav", [n("div", {
                    staticClass: "left"
                }, [n("router-link", {
                    staticClass: "logo link",
                    attrs: {
                        to: {
                            name: "index"
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        width: "32",
                        height: "16",
                        viewBox: "0 0 428 214",
                        fill: "currentColor"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M320.6,118.7c-0.2-3.3-0.8-6.5-1.5-9.6c-0.7-3.2-1.8-6.2-3.2-9c-1.4-2.8-3.1-5.2-5.2-7c-1.4-1.3-3.2-2.1-5.3-2.3\n            c-2.1-0.3-4.2-0.2-6.6,0.1c-2.3,0.4-4.7,1-7.2,1.8c-2.5,0.9-4.8,1.8-7,3c-2.2,1.2-4.2,2.4-6,3.7c-1.8,1.3-3.2,2.5-4.2,3.7\n            c-1.5,1.8-3,4.4-4.3,8.1c-1.4,3.7-1.3,6.2,0.2,7.5c2.2,1.9,5.3,2,9.3,0.3c1.5-0.6,3.1-1.6,4.9-2.7c1.7-1.2,3.4-2.2,5.2-3.2\n            c1.8-1,3.6-1.7,5.5-2.2c1.9-0.5,3.8-0.4,5.9,0.3c1.2,1.7,2,3.7,2.5,6.3c0.5,2.6,0.7,5.3,0.6,8.3c-0.1,3-0.3,6.2-0.9,9.6\n            c-0.5,3.3-1.2,6.8-1.9,10.2c-0.7,3.2-1.7,6.7-3,10.4s-2.8,7.5-4.6,11.2c-1.7,3.7-3.6,7.3-5.6,10.7c-2,3.4-4.2,6.3-6.3,8.8\n            c-1.5,1.8-3.5,3.1-5.8,4.1c-2.4,1-4.9,1.7-7.5,1.9s-5.1,0.1-7.7-0.5c-2.5-0.6-4.6-1.7-6.4-3.3c-8.8-7.7-16-17.3-21.5-28.5\n            c-5.5-11.2-9.2-23.8-10.9-37.6c-1-7.2-2.8-11.9-5.4-14.5c2.3-1,4.6-2,6.6-2.9c2.6-1.2,5-2.3,7.4-3.4c0.6-0.3,1.4-0.6,2.4-1\n            c0.9-0.3,1.9-0.7,3-1.2c1.1-0.4,2-0.7,2.7-1c0.7-0.2,1.2-0.5,1.5-0.6c1.4-0.6,3-1.2,4.9-2.1c1.9-0.8,4.1-1.8,6.6-2.9\n            c2.5-1.1,4.7-2.1,6.7-2.9c2-0.9,3.8-1.6,5.4-2.2c11-4.7,22.5-11,34.2-19c1.1-0.9,1.8-1.5,2.2-2c0.8-1.4,0.9-3.3,0.2-5.5\n            c-0.6-2.3-1.8-3.8-3.2-4.7c-0.8-0.5-4,0.4-9.6,2.6c-5.4,2.2-10.2,4.4-14.3,6.7c-1.3,0.7-2.3,1.4-3.1,1.9c-0.8,0.6-1.9,1.3-3.4,2.2\n            c-2.6,1.3-5.2,2.6-8,3.8c-2.8,1.3-5.8,2.6-8.8,3.9c-6.2,2.6-11,4.5-14.5,6.1c-5.4,2.3-10.2,4.5-14.5,6.3c-4.2,1.8-8,3.4-11.3,4.8\n            c-6.6,2.7-17.8,7.3-34,13.9c-1.9,0.7-4.4,1.7-7.4,2.8c-2.5,1-5.5,2.2-8.7,3.4c0-1.2-0.2-2.6-0.9-4.4c-1.4-3.7-2.8-6.4-4.3-8.1\n            c-1-1.1-2.4-2.3-4.2-3.7c-1.8-1.3-3.8-2.6-6-3.7c-2.2-1.2-4.6-2.2-7-3c-2.5-0.9-4.9-1.5-7.2-1.8c-2.3-0.4-4.6-0.4-6.6-0.1\n            c-2.1,0.2-3.8,1-5.3,2.3c-2.1,1.8-3.8,4.1-5.2,7c-1.4,2.9-2.4,5.8-3.2,9c-0.7,3.2-1.3,6.4-1.5,9.6c-0.2,3.3-0.4,6.1-0.3,8.8\n            c0.2,6.5,1,13,2.2,19.5c1.2,6.5,2.9,12.8,5,18.9c2.1,6.1,4.6,11.7,7.5,17.1s6.1,10,9.5,13.9l0.4,0.5c3.4,3.8,7.2,7,11.4,9.5\n            c4.2,2.5,8.5,4.1,13,4.8c4.5,0.7,8.9,0.4,13.5-0.8c4.5-1.3,8.8-3.7,12.8-7.2c3.8-3.3,7.4-7,10.6-10.9s6.2-8.3,8.9-13.1\n            s5-10.1,7.2-15.9c1.5-4.1,2.9-8.8,4.2-13.6c1.3,4.9,2.6,9.5,4.2,13.6c2.2,5.8,4.6,11.2,7.2,15.9s5.6,9.2,8.9,13.1\n            s6.8,7.6,10.6,10.9c4,3.5,8.2,5.9,12.8,7.2c4.5,1.3,9,1.5,13.5,0.8c4.5-0.7,8.9-2.3,13-4.8c4.2-2.5,8-5.7,11.4-9.5l0.4-0.5\n            c3.4-3.9,6.6-8.5,9.5-13.9c3-5.3,5.4-11,7.5-17.1c2.2-6.1,3.8-12.4,5-18.9c1.3-6.5,2-13.1,2.2-19.5\n            C321,124.8,320.8,121.9,320.6,118.7z M125.6,117.6c0.5-2.6,1.3-4.6,2.5-6.3c2-0.7,4-0.8,5.9-0.3c1.9,0.5,3.8,1.2,5.5,2.2\n            c1.8,1,3.5,2.1,5.2,3.2c1.7,1.1,3.4,2.1,4.9,2.7c0.4,0.2,0.7,0.1,1.1,0.2c-0.8,0.3-1.8,0.7-2.6,1c-2.9,1.1-5.4,2.2-7.2,3\n            c-9.2,3.8-14.3,6.6-15.4,8.2c-0.2-1.9-0.5-3.9-0.5-5.7C124.9,122.8,125.1,120,125.6,117.6z M196.2,160.4\n            c-5.5,11.3-12.7,20.8-21.5,28.5c-1.8,1.6-3.9,2.6-6.4,3.3c-2.5,0.6-5,0.8-7.7,0.5c-2.6-0.2-5.1-0.9-7.5-1.9c-2.4-1-4.3-2.4-5.8-4.1\n            c-2.2-2.5-4.2-5.3-6.3-8.8c-2.1-3.3-3.9-6.9-5.6-10.7c-1.7-3.7-3.2-7.5-4.6-11.2c-1.3-3.7-2.3-7.3-3-10.4c-0.2-1.1-0.4-2.2-0.6-3.3\n            c0.2,0.2,0.4,0.7,0.6,0.8c0.5,0.2,1.1,0.5,1.8,0.6c0.8,0.1,1.4,0.1,1.7,0c4.8-0.9,9.6-2.3,14.5-4.1c2.4-0.9,5-1.9,7.8-3.2\n            c2.8-1.2,5.8-2.6,9-4.2s5.8-2.8,7.6-3.7c1.8-0.9,3-1.4,3.6-1.7c4.5-2,8.9-4,13.5-6c4.6-2.1,8.9-4,13.3-5.7c2.1-0.9,4.4-1.8,6.8-2.9\n            c1-0.4,2.2-1,3.2-1.4c-1.7,2.9-3,6.5-3.7,11.9C205.4,136.7,201.7,149.2,196.2,160.4z"
                    }
                }), e._v(" "), n("ellipse", {
                    attrs: {
                        cx: "158.5",
                        cy: "21.1",
                        rx: "17.3",
                        ry: "21.1"
                    }
                }), e._v(" "), n("ellipse", {
                    attrs: {
                        cx: "270.5",
                        cy: "21.1",
                        rx: "17.3",
                        ry: "21.1"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M56.7,16.9c0,2.3-2,5.6-6,9.9c-3,3-5.9,6-8.9,8.9c-7.2,8.2-12.9,19.8-17,35c-3.6,13.2-5.4,26.2-5.4,39\n            c0,32.9,7.5,57.1,22.4,72.4c3,2.3,6,4.7,9.1,7c3.8,3,5.7,5.9,5.7,8.8c0,2.1-0.8,4-2.5,5.6c-1.7,1.6-3.6,2.4-5.8,2.4\n            c-1.9,0-4.3-0.7-7-2.2C13.7,188.3,0,156.2,0,107.5c0-17.6,3.5-35.3,10.6-53.4c7.9-20,18.3-34.5,31.2-43.5c2.6-1.8,4.6-2.7,6.1-2.7\n            c2.3,0,4.4,0.9,6.1,2.8C55.8,12.4,56.7,14.5,56.7,16.9z"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M428,107.5c0,48.8-13.8,80.9-41.3,96.2c-2.7,1.5-5,2.2-6.9,2.2c-2.2,0-4.2-0.8-5.8-2.4c-1.7-1.6-2.5-3.5-2.5-5.6\n            c0-2.9,1.9-5.9,5.7-8.8c3-2.3,6-4.7,9.1-7c14.9-15.4,22.4-39.5,22.4-72.4c0-12.8-1.8-25.8-5.4-39c-4.2-15.2-9.8-26.8-17-35\n            c-3-3-5.9-6-8.9-8.9c-4-4.3-6-7.6-6-9.9c0-2.3,0.9-4.4,2.6-6.3c1.7-1.8,3.8-2.8,6.1-2.8c1.5,0,3.6,0.9,6.2,2.7\n            c12.9,9,23.3,23.5,31.2,43.5C424.5,72.1,428,89.9,428,107.5z"
                    }
                })]), e._v(" "), n("span", [e._v("ebb")])]), e._v(" "), e.loaded && !e.isMobile ? n("search-bar") : e._e()], 1), e._v(" "), n("div", {
                    staticClass: "right"
                }, [e.isMobile ? n("div", {
                    staticClass: "icon"
                }, [n("router-link", {
                    staticClass: "link",
                    attrs: {
                        to: {
                            name: "search"
                        }
                    }
                }, [n("i", {
                    staticClass: "fe-search"
                })])], 1) : e._e(), e._v(" "), e.user ? n("div", {
                    staticClass: "icon"
                }, [n("router-link", {
                    staticClass: "link",
                    attrs: {
                        to: {
                            name: "watch-history"
                        }
                    }
                }, [n("i", {
                    staticClass: "fe-clock"
                })])], 1) : e._e(), e._v(" "), n("div", {
                    staticClass: "icon"
                }, [n("router-link", {
                    staticClass: "link",
                    attrs: {
                        to: {
                            name: "account"
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                    }
                })])])], 1)])]), e._v(" "), n("portal-target", {
                    attrs: {
                        slim: "",
                        name: "stats"
                    }
                }), e._v(" "), n("portal-target", {
                    attrs: {
                        slim: "",
                        name: "nav-level"
                    }
                }), e._v(" "), n("portal-target", {
                    attrs: {
                        slim: "",
                        name: "curtain"
                    }
                }), e._v(" "), n("main", [e.loaded ? e._e() : n("loader"), e._v(" "), e.loaded ? n("router-view") : e._e()], 1), e._v(" "), e.showSideAds ? n("div", {
                    staticClass: "side-ads",
                    staticStyle: {
                        left: "0"
                    }
                }, [n("ads", {
                    attrs: {
                        type: "ucf_skyscraper",
                        size: {
                            width: 160,
                            height: 600
                        }
                    }
                })], 1) : e._e(), e._v(" "), e.showSideAds ? n("div", {
                    staticClass: "side-ads",
                    staticStyle: {
                        right: "0"
                    }
                }, [n("ads", {
                    attrs: {
                        type: "ucf_skyscraper",
                        size: {
                            width: 160,
                            height: 600
                        }
                    }
                })], 1) : e._e(), e._v(" "), n("footer", [n("div", [n("span", [e._v("© " + e._s(e.year) + " ebb.io")]), e._v(" "), e._m(0), e._v(" "), n("div", {
                    staticClass: "links"
                }, [n("a", {
                    staticClass: "link",
                    attrs: {
                        rel: "noopener noreferrer nofollow",
                        href: "https://t.me/ebbStatus",
                        target: "_blank"
                    }
                }, [e._v("最新消息")]), e._v(" "), n("ins"), e._v(" "), n("a", {
                    staticClass: "link",
                    attrs: {
                        rel: "noopener noreferrer nofollow",
                        href: "https://t.me/ebbAnimeUpdate",
                        target: "_blank"
                    }
                }, [e._v("推送通知")]), e._v(" "), n("ins"), e._v(" "), n("a", {
                    staticClass: "link",
                    attrs: {
                        rel: "noopener noreferrer nofollow",
                        href: "https://t.me/ebbCafe",
                        target: "_blank"
                    }
                }, [e._v("CAFE")]), e._v(" "), n("ins"), e._v(" "), n("a", {
                    staticClass: "link",
                    attrs: {
                        rel: "noopener noreferrer nofollow",
                        href: "https://github.com/ebb-io/ebbx",
                        target: "_blank"
                    }
                }, [e._v("GitHub")]), e._v(" "), n("ins"), e._v(" "), n("router-link", {
                    staticClass: "link",
                    attrs: {
                        to: {
                            name: "about"
                        }
                    }
                }, [e._v("關於我們")])], 1)])])], 1), e._v(" "), n("transition", {
                    attrs: {
                        name: "ebuko",
                        mode: "out-in"
                    }
                }, [n("div", {
                    staticClass: "ebuko-fix-wrap"
                }, [e.showEbuko && !e.hideEbukoOverride ? n("ebuko") : e._e()], 1)]), e._v(" "), n("div", {
                    staticClass: "notification-wrapper"
                }, e._l(e.notifications, function(e) {
                    return n("notification", {
                        key: e.id,
                        attrs: {
                            payload: e
                        }
                    })
                })), e._v(" "), n("background"), e._v(" "), e.isMobile && !e.adsDismissed ? n("div", {
                    staticClass: "mfloat-ads"
                }, [n("ads", {
                    attrs: {
                        type: "iit_banner",
                        size: {
                            width: e.screenWidth,
                            height: 120
                        }
                    }
                }), e._v(" "), n("i", {
                    staticClass: "fe-x",
                    on: {
                        click: function(t) {
                            e.adsDismissed = !0
                        }
                    }
                })], 1) : e._e()], 1)
            }, [function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "disclaimer"
                }, [this._v("\n          本站影片皆串流自其他網站，伺服器並不保存影音資源\n          "), t("br"), this._v("\n          影片版權歸原作者所有，如有侵權請盡快通知我們反映\n        ")])
            }], !1, W, "data-v-27aed7e2", null).exports,
            V = n("bOdI"),
            Y = n.n(V),
            G = n("Y4FN"),
            K = n.n(G);
        f.default.use(D.a);
        var Q = {
                user: null,
                isCommentsSided: !1,
                isMobile: !1,
                showEbuko: !1,
                hideEbukoOverride: !1,
                notifications: [],
                hpData: {},
                animeList: [],
                searchQuery: "",
                searchResultIds: [],
                directoryParams: null,
                playerConfig: j()({
                    rate: 1,
                    volume: 1,
                    danmaku: !1
                }, K.a.get("fl-player-config") || {})
            },
            Z = !1,
            J = {
                setIsCommentsSided: function(e, t) {
                    e.isCommentsSided = t
                },
                setIsMobile: function(e, t) {
                    e.isMobile = t
                },
                SET_SHOW_EBUKO: function(e, t) {
                    e.showEbuko = t
                },
                SET_HIDE_EBUKO_OVERRIDE: function(e, t) {
                    e.hideEbukoOverride = t
                },
                ENQUEUE_NOTIFICATION: function(e, t) {
                    e.notifications.push(t)
                },
                DEQUEUE_NOTIFICATION: function(e, t) {
                    e.notifications = e.notifications.filter(function(e) {
                        return e.id !== t
                    })
                },
                SET_USER: function(e, t) {
                    e.user = t
                },
                SET_HP_DATA: function(e, t) {
                    e.hpData = t
                },
                SET_ANIME_LIST: function(e, t) {
                    e.animeList = t
                },
                SET_SEARCH_QUERY: function(e, t) {
                    e.searchQuery = t
                },
                SET_SEARCH_RESULT_IDS: function(e, t) {
                    e.searchResultIds = t
                },
                UPDATE_DIRECTORY_PARAMS: function(e, t) {
                    e.directoryParams = t
                },
                SET_PLAYER_CONFIG: function(e, t) {
                    K.a.set("fl-player-config", t), e.playerConfig = t
                }
            },
            ee = {
                setShowEbuko: function(e, t) {
                    (0, e.commit)("SET_SHOW_EBUKO", t && !Z)
                },
                setHideEbukoOverride: function(e, t) {
                    (0, e.commit)("SET_HIDE_EBUKO_OVERRIDE", t)
                },
                setEbukoUnwell: function(e, t) {
                    Z = t
                },
                enqueueNotification: function(e, t) {
                    var n = e.commit,
                        i = e.dispatch,
                        a = t.type,
                        s = t.text,
                        r = t.duration,
                        o = "" + (1e8 * Math.random()).toString(16);
                    n("ENQUEUE_NOTIFICATION", {
                        id: o,
                        type: a,
                        text: s
                    }), setTimeout(function() {
                        return i("dequeueNotification", o)
                    }, r)
                },
                dequeueNotification: function(e, t) {
                    (0, e.commit)("DEQUEUE_NOTIFICATION", t)
                },
                fetchUser: function(e) {
                    var t = this,
                        n = e.commit;
                    return c()(r.a.mark(function e() {
                        var i;
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, x.b.fetchUser();
                                case 2:
                                    i = e.sent, n("SET_USER", i);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, t)
                    }))()
                },
                fetchHPData: function(e) {
                    var t = this,
                        n = e.commit;
                    return c()(r.a.mark(function e() {
                        var i;
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, x.b.fetchHPData();
                                case 2:
                                    i = e.sent, n("SET_HP_DATA", i);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, t)
                    }))()
                },
                fetchAnimeList: function(e) {
                    var t = this,
                        n = e.commit;
                    return c()(r.a.mark(function e() {
                        var i;
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, x.b.fetchAnimeList();
                                case 2:
                                    i = e.sent, n("SET_ANIME_LIST", i);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e, t)
                    }))()
                },
                fetchSearchResults: function(e, t) {
                    var n = this,
                        i = e.commit;
                    return c()(r.a.mark(function e() {
                        var a, s;
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = t.trim(), i("SET_SEARCH_QUERY", a), e.next = 4, x.b.fetchSearchResults(a);
                                case 4:
                                    s = e.sent, window.ga("send", "event", "Search", "query", a), i("SET_SEARCH_RESULT_IDS", s);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }, e, n)
                    }))()
                },
                updateDirectoryParams: function(e, t) {
                    var n = this,
                        i = e.commit,
                        a = e.state;
                    return c()(r.a.mark(function e() {
                        var s;
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t) {
                                        e.next = 3;
                                        break
                                    }
                                    return i("UPDATE_DIRECTORY_PARAMS", null), e.abrupt("return");
                                case 3:
                                    s = void 0, e.t0 = t.type, e.next = "all" === e.t0 ? 7 : "tag" === e.t0 ? 9 : "studio" === e.t0 ? 9 : 18;
                                    break;
                                case 7:
                                    return s = a.animeList, e.abrupt("break", 19);
                                case 9:
                                    if (!((a.directoryParams && a.directoryParams.param) !== t.param)) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.next = 13, x.b.fetchAnimeList(t);
                                case 13:
                                    s = e.sent, e.next = 17;
                                    break;
                                case 16:
                                    s = a.directoryParams.list;
                                case 17:
                                case 18:
                                    return e.abrupt("break", 19);
                                case 19:
                                    i("UPDATE_DIRECTORY_PARAMS", j()({}, t, {
                                        list: s
                                    }));
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }, e, n)
                    }))()
                },
                updatePlayerConfig: function(e, t) {
                    var n = e.commit,
                        i = t.key,
                        a = t.value;
                    n("SET_PLAYER_CONFIG", j()({}, Q.playerConfig, Y()({}, i, a)))
                }
            },
            te = {
                featuredSeasons: function(e) {
                    return e.hpData.featured ? e.hpData.featured : null
                },
                informatizedAnimeList: function(e) {
                    var t = [],
                        n = [],
                        i = new Date;
                    return e.animeList.forEach(function(e) {
                        e.is_ended || t.push(e);
                        var a = new Date(e.last_updated);
                        (i.getTime() - a.getTime()) / 1e3 < 7776e3 && t.indexOf(e) < 0 && n.push(e)
                    }), {
                        "最新連載": t,
                        "近期更新": n
                    }
                },
                searchResultAnimeList: function(e) {
                    if (!e.searchResultIds.length) return [];
                    var t = h.a.keyBy(e.animeList.filter(function(t) {
                        return e.searchResultIds.indexOf(t.anime_id) >= 0
                    }), "anime_id");
                    return t = (t = e.searchResultIds.map(function(e) {
                        return t[e]
                    })).filter(function(e) {
                        return !!e
                    })
                },
                animeDirectory: function(e) {
                    if (!e.directoryParams) return null;
                    var t = e.directoryParams,
                        n = t.type,
                        i = t.page,
                        a = t.param,
                        s = t.list,
                        r = Math.ceil(s.length / 21),
                        o = s.slice(21 * (i - 1), 21 * i);
                    return {
                        title: "tag" === n ? "標籤：" + a : "studio" === n ? "動畫製作：" + a : "動畫列表",
                        total: r,
                        items: o
                    }
                }
            },
            ne = new D.a.Store({
                state: Q,
                mutations: J,
                actions: ee,
                getters: te,
                strict: !0
            }),
            ie = n("/ocq"),
            ae = n("Ty2L"),
            se = {
                name: "index-anime-list",
                props: {
                    tabs: {
                        type: Array,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        activeTabIndex: 0,
                        collapseBreakpoint: null,
                        isCollapsed: !1
                    }
                },
                computed: j()({}, Object(D.e)({
                    isMobile: "isMobile"
                })),
                watch: {
                    activeTabIndex: {
                        handler: function(e) {
                            var t = this;
                            return c()(r.a.mark(function n() {
                                var i, a;
                                return r.a.wrap(function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, t.$nextTick();
                                        case 2:
                                            i = t.$refs.underline, 0 === e ? t.$refs.underline.style.transform = "translate3d(0, 0, 0)" : (a = i.parentNode.children[e - 1].clientWidth, t.$refs.underline.style.transform = "translate3d(" + a + "px, 0, 0)"), t.$refs.underline.style.width = i.parentNode.children[e].clientWidth + "px";
                                        case 5:
                                        case "end":
                                            return n.stop()
                                    }
                                }, n, t)
                            }))()
                        },
                        immediate: !0
                    }
                },
                methods: {
                    expand: function() {
                        this.collapseBreakpoint = null, this.isCollapsed = !1
                    }
                },
                mounted: function() {
                    var e = this.$refs.component.$el.clientHeight,
                        t = this.isMobile ? Math.floor(.8 * window.screen.height) : 1e3;
                    e >= t && (this.collapseBreakpoint = t, this.isCollapsed = !0)
                }
            };
        var re = function(e) {
                n("7u3C")
            },
            oe = Object(F.a)(se, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("article", {
                    staticClass: "tab-content"
                }, [n("nav", {
                    staticClass: "tab-bar"
                }, [e._l(e.tabs, function(t, i) {
                    var a = t.title;
                    return n("div", {
                        key: a,
                        class: {
                            tab: !0, active: i === e.activeTabIndex
                        },
                        on: {
                            click: function(t) {
                                e.activeTabIndex = i
                            }
                        }
                    }, [e._v("\n      " + e._s(a) + "\n    ")])
                }), e._v(" "), n("div", {
                    ref: "underline",
                    staticClass: "underline"
                })], 2), e._v(" "), n("div", {
                    class: {
                        "component-view": !0, collapsed: e.isCollapsed
                    }
                }, [n("div", {
                    staticClass: "inner",
                    style: {
                        maxHeight: e.collapseBreakpoint && e.collapseBreakpoint + "px"
                    }
                }, [n(e.tabs[e.activeTabIndex].component, e._b({
                    ref: "component",
                    tag: "component"
                }, "component", e.tabs[e.activeTabIndex].props, !1))], 1), e._v(" "), e.isCollapsed ? n("div", {
                    staticClass: "expand",
                    on: {
                        click: e.expand
                    }
                }, [e._v("\n      顯示全部\n    ")]) : e._e()])])
            }, [], !1, re, "data-v-38a0eb94", null).exports,
            ce = {
                name: "index-anime-list",
                components: {
                    AnimeListRenderer: n("c4Tg").a
                },
                props: {
                    animes: {
                        type: Array,
                        required: !0
                    }
                }
            },
            ue = Object(F.a)(ce, function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "inner"
                }, [t("anime-list-renderer", {
                    attrs: {
                        items: this.animes
                    }
                })], 1)
            }, [], !1, null, null, null).exports,
            le = {
                name: "index-calendar",
                components: {
                    Plark: ae.a
                },
                computed: j()({}, Object(D.e)({
                    calendar: function(e) {
                        return e.hpData.calendar
                    }
                })),
                methods: {
                    calendarLinkMousedown: function(e) {
                        var t = this,
                            n = e.button,
                            i = e.clientX,
                            a = e.clientY,
                            s = e.currentTarget;
                        if (0 === n) {
                            document.addEventListener("mouseup", function e(n) {
                                var r = n.clientX,
                                    o = n.clientY;
                                document.removeEventListener("mouseup", e), i === r && a === o && t.$router.push({
                                    path: s.pathname
                                })
                            })
                        }
                    },
                    calendarLinkTouchstart: function(e) {
                        var t = this,
                            n = e.touches,
                            i = e.currentTarget,
                            a = n[0],
                            s = a.clientX,
                            r = a.clientY,
                            o = void 0,
                            c = void 0,
                            u = function(e) {
                                var t = e.touches;
                                o = t[0].clientX, c = t[0].clientY
                            };
                        document.addEventListener("touchmove", u), document.addEventListener("touchend", function e() {
                            document.removeEventListener("touchmove", u), document.removeEventListener("touchend", e), s === o && r === c && t.$router.push({
                                path: i.pathname
                            })
                        })
                    }
                }
            };
        var de = function(e) {
                n("O9Wa")
            },
            he = Object(F.a)(le, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "inner"
                }, [n("plark", [n("div", {
                    staticClass: "calendar"
                }, e._l(e.calendar.days, function(t) {
                    return n("div", {
                        key: t.label,
                        staticClass: "column"
                    }, [n("b", [e._v(e._s(t.label))]), e._v(" "), n("ul", e._l(t.animes, function(t) {
                        return n("li", {
                            key: t.path
                        }, [t.path ? n("a", {
                            attrs: {
                                href: t.path
                            },
                            on: {
                                click: function(e) {
                                    e.preventDefault()
                                },
                                mousedown: function(t) {
                                    return t.preventDefault(), e.calendarLinkMousedown(t)
                                },
                                touchstart: e.calendarLinkTouchstart
                            }
                        }, [e._v("\n              " + e._s(t.name) + "\n            ")]) : e._e(), e._v(" "), t.path ? e._e() : n("span", [e._v(e._s(t.name))])])
                    }))])
                }))])], 1)
            }, [], !1, de, "data-v-5ad02ba2", null).exports,
            fe = {
                name: "index-discover",
                computed: j()({}, Object(D.e)({
                    isMobile: "isMobile"
                }))
            };
        var me = function(e) {
                n("WQx6")
            },
            pe = Object(F.a)(fe, function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "inner"
                }, [t("div", {
                    staticClass: "links"
                }, [t("router-link", {
                    staticClass: "link",
                    attrs: {
                        to: {
                            path: "/browse/all"
                        }
                    }
                }, [t("i", {
                    staticClass: "fe-list"
                }), this._v(" "), t("span", [this._v("全部動畫列表")])]), this._v(" "), this.isMobile ? this._e() : t("router-link", {
                    staticClass: "link",
                    attrs: {
                        to: {
                            path: "/timeline"
                        }
                    }
                }, [t("i", {
                    staticClass: "fe-git-commit"
                }), this._v(" "), t("span", [this._v("動畫時間軸")])])], 1)])
            }, [], !1, me, "data-v-3c145467", null).exports,
            ve = {
                name: "index-featured",
                components: {
                    Plark: ae.a
                },
                computed: j()({}, Object(D.c)(["featuredSeasons"])),
                methods: {
                    calendarLinkMousedown: function(e) {
                        var t = this,
                            n = e.button,
                            i = e.clientX,
                            a = e.clientY,
                            s = e.currentTarget;
                        if (0 === n) {
                            document.addEventListener("mouseup", function e(n) {
                                var r = n.clientX,
                                    o = n.clientY;
                                document.removeEventListener("mouseup", e), i === r && a === o && t.$router.push({
                                    path: s.pathname
                                })
                            })
                        }
                    },
                    calendarLinkTouchstart: function(e) {
                        var t = this,
                            n = e.touches,
                            i = e.currentTarget,
                            a = n[0],
                            s = a.clientX,
                            r = a.clientY,
                            o = void 0,
                            c = void 0,
                            u = function(e) {
                                var t = e.touches;
                                o = t[0].clientX, c = t[0].clientY
                            };
                        document.addEventListener("touchmove", u), document.addEventListener("touchend", function e() {
                            document.removeEventListener("touchmove", u), document.removeEventListener("touchend", e), s === o && r === c && t.$router.push({
                                path: i.pathname
                            })
                        })
                    }
                }
            };
        var ge = function(e) {
                n("8Gro")
            },
            ye = Object(F.a)(ve, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "inner"
                }, [n("plark", [n("div", {
                    staticClass: "featured"
                }, e._l(e.featuredSeasons, function(t) {
                    return n("a", {
                        key: t.season_id,
                        attrs: {
                            href: "/anime/" + t.anime_id + "x" + t.season_id
                        },
                        on: {
                            click: function(e) {
                                e.preventDefault()
                            },
                            mousedown: function(t) {
                                return t.preventDefault(), e.calendarLinkMousedown(t)
                            },
                            touchstart: e.calendarLinkTouchstart
                        }
                    }, [n("article", [n("b", {
                        attrs: {
                            "data-deferred-src": t.poster_large
                        }
                    }), e._v(" "), n("h2", [e._v(e._s(t.name_chi) + " " + e._s(t.season_title))])])])
                }))])], 1)
            }, [], !1, ge, "data-v-6b84e202", null).exports,
            be = {
                name: "index-page",
                components: {
                    Ads: I.a,
                    Plark: ae.a,
                    TabBar: oe,
                    AnimeList: ue,
                    Calendar: he,
                    Discover: pe,
                    Featured: ye
                },
                data: function() {
                    return {
                        tabItems: []
                    }
                },
                computed: j()({}, Object(D.e)({
                    calendar: function(e) {
                        return e.hpData.calendar
                    },
                    isMobile: "isMobile",
                    animeList: "animeList"
                }), Object(D.c)(["informatizedAnimeList"])),
                mounted: function() {
                    var e = this;
                    return c()(r.a.mark(function t() {
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.$nextTick();
                                case 2:
                                    e.$root.$emit("pageload"), e.tabItems = [
                                        [{
                                            title: "精選推介",
                                            component: ye
                                        }],
                                        [{
                                            title: e.calendar.title,
                                            component: he
                                        }], a()(e.informatizedAnimeList).map(function(t) {
                                            return {
                                                title: t,
                                                component: ue,
                                                props: {
                                                    animes: e.informatizedAnimeList[t]
                                                }
                                            }
                                        }), [{
                                            title: "瀏覽更多",
                                            component: pe
                                        }]
                                    ];
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                }
            };
        var _e = function(e) {
                n("mqSy")
            },
            we = Object(F.a)(be, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.tabItems.length ? n("div", {
                    staticClass: "page"
                }, [n("var", {
                    attrs: {
                        "data-mark": ""
                    }
                }), e._v(" "), e._l(e.tabItems, function(t, i) {
                    return n("div", {
                        key: i
                    }, [n("tab-bar", {
                        attrs: {
                            tabs: t
                        }
                    }), e._v(" "), n("div", {
                        staticClass: "info-ads"
                    }, [n("ads", {
                        attrs: {
                            type: "iit_banner",
                            size: {
                                width: 620,
                                height: 120
                            }
                        }
                    })], 1)], 1)
                })], 2) : e._e()
            }, [], !1, _e, "data-v-231ccde9", null).exports,
            ke = n("NC6I"),
            Ce = n.n(ke),
            xe = n("UyXO"),
            Ee = n.n(xe),
            Se = n("O9Uj"),
            Le = n("mtWM"),
            Me = n.n(Le),
            Te = n("fFkg"),
            je = n.n(Te);
        var De = function(e) {
                n("qHym")
            },
            Oe = Object(F.a)(null, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("button", {
                    staticClass: "big-play-button",
                    on: {
                        click: function(t) {
                            e.$emit("click")
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        viewBox: "0 0 512 512"
                    }
                }, [n("g", {
                    attrs: {
                        fill: "rgba(0, 0, 0, .6)"
                    }
                }, [n("polygon", {
                    attrs: {
                        points: "209,336.2 334.5,255.5 209,174.8  "
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M256-0.5C114.6-0.5,0,114.1,0,255.5s114.6,256,256,256s256-114.6,256-256S397.4-0.5,256-0.5z M358.4,263.9\n        l-154,99c-1.6,1.1-3.5,1.6-5.4,1.6c-1.6,0-3.3-0.4-4.8-1.2c-3.2-1.8-5.2-5.1-5.2-8.8v-198c0-3.7,2-7,5.2-8.8s7.1-1.6,10.2,0.4\n        l154,99c2.9,1.8,4.6,5,4.6,8.4C363,258.9,361.3,262.1,358.4,263.9z"
                    }
                })])])])
            }, [], !1, De, "data-v-396bbd06", null).exports,
            Re = {
                components: {
                    Ads: I.a
                },
                data: function() {
                    return {
                        adsType: 1,
                        adDismissed: !1
                    }
                },
                computed: j()({}, Object(D.e)({
                    isMobile: function(e) {
                        return e.isMobile
                    }
                }), {
                    player: function() {
                        return this.$parent
                    },
                    showAd: function() {
                        return this.player.paused
                    }
                }),
                watch: {
                    showAd: function() {
                        this.adDismissed = !1
                    }
                },
                mounted: function() {
                    this.adsType = Math.floor(3 * Math.random()) + 1
                }
            };
        var Ie = function(e) {
                n("oMza")
            },
            Pe = Object(F.a)(Re, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return !e.isMobile && e.showAd ? n("div", {
                    staticClass: "player-ad"
                }, [
                    [1, 2, 3].indexOf(e.adsType) >= 0 && !e.adDismissed ? n("div", {
                        staticClass: "ads-wrapper"
                    }, [n("div", [n("ads", {
                        attrs: {
                            type: "ypa_box2",
                            size: {
                                width: 336,
                                height: 280
                            }
                        }
                    }), e._v(" "), n("i", {
                        staticClass: "fe-x",
                        on: {
                            click: function(t) {
                                e.adDismissed = !0
                            }
                        }
                    })], 1)]) : e._e(), e._v(" "), -1 !== e.adsType || e.adDismissed ? e._e() : n("div", {
                        staticClass: "ads-wrapper"
                    }, [n("div", [n("ads", {
                        attrs: {
                            type: "iit_box2",
                            size: {
                                width: 336,
                                height: 280
                            }
                        }
                    }), e._v(" "), n("i", {
                        staticClass: "fe-x",
                        on: {
                            click: function(t) {
                                e.adDismissed = !0
                            }
                        }
                    })], 1)])
                ]) : e._e()
            }, [], !1, Ie, "data-v-603c5a3a", null).exports,
            Ae = {
                data: function() {
                    return {
                        loaderSize: 64,
                        percentage: 0
                    }
                },
                computed: {
                    player: function() {
                        return this.$parent
                    },
                    radius: function() {
                        return .45 * this.loaderSize
                    },
                    dashArray: function() {
                        return 2 * this.radius * Math.PI
                    },
                    dashOffset: function() {
                        var e = Math.PI * (2 * this.radius);
                        return (1 - this.percentage) * e
                    },
                    nextEpisodeTitle: function() {
                        var e = this.player.pageComponent,
                            t = e.activeSeason,
                            n = e.nextEpisode;
                        return t.season_title + " " + n.title
                    },
                    hasNextEpisode: function() {
                        return !!this.player.pageComponent.nextEpisode
                    }
                },
                watch: {
                    percentage: function(e) {
                        if (1 === e) {
                            var t = this.player.pageComponent.nextEpisode;
                            this.player.pageComponent.play(t, !0)
                        }
                    }
                },
                mounted: function() {
                    var e = this;
                    if (this.hasNextEpisode) {
                        var t = Date.now() + 3500;
                        ! function n() {
                            var i = t - Date.now();
                            if (i < 60) e.percentage = 1;
                            else {
                                var a = 1 - i / 3500;
                                e.percentage = a, window.requestAnimationFrame(n)
                            }
                        }()
                    }
                }
            };
        var $e = function(e) {
                n("Uf11")
            },
            ze = Object(F.a)(Ae, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "up-next"
                }, [n("div", {
                    staticClass: "inner"
                }, [e.hasNextEpisode ? [n("h2", [e._v("即將放映")]), e._v(" "), n("h1", [e._v(e._s(e.nextEpisodeTitle))]), e._v(" "), n("div", {
                    staticClass: "loader"
                }, [n("svg", {
                    attrs: {
                        width: e.loaderSize,
                        height: e.loaderSize,
                        viewPort: "0 0 100 100"
                    }
                }, [n("circle", {
                    attrs: {
                        r: "45%",
                        cx: "50%",
                        cy: "50%",
                        fill: "none",
                        "stroke-width": "4",
                        stroke: "rgba(224, 224, 224, .4)",
                        "stroke-dasharray": e.dashArray,
                        "stroke-dashoffset": 0
                    }
                }), e._v(" "), n("circle", {
                    attrs: {
                        r: "45%",
                        cx: "50%",
                        cy: "50%",
                        fill: "none",
                        "stroke-width": "4",
                        stroke: "#fff",
                        "stroke-dasharray": e.dashArray,
                        "stroke-dashoffset": e.dashOffset
                    }
                })]), e._v(" "), n("i", {
                    staticClass: "fe-x",
                    on: {
                        click: function(t) {
                            e.player.showUpNextOverlay = !1
                        }
                    }
                })])] : [n("h1", [e._v("找不到下一集了 (・_・;)")])]], 2)])
            }, [], !1, $e, "data-v-75401127", null).exports,
            Fe = {
                components: {
                    Loader: A.a
                },
                props: {
                    level: {
                        type: String,
                        required: !0
                    },
                    player: {
                        type: Object,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        isLoading: !0,
                        peekFallback: !1,
                        renderSpec: null
                    }
                },
                methods: {
                    setProgress: function(e) {
                        var t = this.$refs,
                            n = t.container,
                            i = t.peek,
                            a = t.storyboard;
                        if (this.peekFallback) i.style.backgroundPosition = Math.floor(100 * e) * -n.offsetWidth + "px";
                        else {
                            var s = this.renderSpec,
                                r = s.storyboards,
                                o = s.frameWidth,
                                c = s.frameRowLength,
                                u = s.frameCount,
                                l = Math.ceil(o / this.videoRatio),
                                d = 0;
                            r.forEach(function(e, t) {
                                t === r.length - 1 ? e.frames = u - d : e.frames = Math.ceil(e.height / l * c), d += e.frames
                            });
                            for (var h = Math.floor(u * e), f = -1, m = 0, p = -1; f + 1 < r.length && p < h;) m = (p + 1) / c, p += r[f += 1].frames;
                            var v = r[f].width / c,
                                g = void 0,
                                y = void 0,
                                b = void 0;
                            n.offsetWidth / n.offsetHeight > v / l ? (g = Math.round(n.offsetWidth / v * r[f].width), Math.round(n.offsetWidth / v * r[f].height), y = n.offsetWidth, b = Math.round(n.offsetWidth / v * l)) : (g = Math.round(n.offsetHeight / l * r[f].width), Math.round(n.offsetHeight / l * r[f].height), y = Math.round(n.offsetHeight / l * v), b = n.offsetHeight);
                            var _ = Math.floor(h / c) - m,
                                w = h % c;
                            a.src = r[f].src, a.style.width = g + "px", a.style.top = -b * _ + "px", a.style.left = -y * w + "px"
                        }
                    }
                },
                computed: {
                    videoRatio: function() {
                        var e = this.player.video;
                        return e.videoWidth / e.videoHeight
                    }
                },
                mounted: function() {
                    var e = this;
                    return c()(r.a.mark(function t() {
                        var n, i, a, s, o;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.player.storyboards[e.level]) {
                                        t.next = 13;
                                        break
                                    }
                                    return e.peekFallback = !0, t.next = 5, e.$nextTick();
                                case 5:
                                    return i = e.$refs, a = i.container, s = i.peek, o = a.offsetWidth / e.videoRatio, s.style.backgroundImage = "url(" + e.player.vdata.src.replace("/s/", "/p/").replace("/master.csv", ".jpg") + ")", s.style.backgroundSize = 100 * a.offsetWidth + "px " + o + "px", s.style.width = a.offsetWidth + "px", s.style.height = o + "px", e.isLoading = !1, t.abrupt("return");
                                case 13:
                                    return t.next = 15, l.a.all(n.storyboards.map(function(e) {
                                        return new l.a(function(t, n) {
                                            var i = new Image;
                                            i.onload = function() {
                                                return t(i)
                                            }, i.onerror = n, i.src = e
                                        })
                                    }));
                                case 15:
                                    n.storyboards = t.sent, e.renderSpec = n, e.isLoading = !1;
                                case 18:
                                case "end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                }
            };
        var He = function(e) {
                n("mO4b")
            },
            Ne = Object(F.a)(Fe, function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    ref: "container",
                    staticClass: "container"
                }, [this.peekFallback ? t("div", {
                    ref: "peek",
                    staticClass: "peek"
                }) : this.renderSpec ? t("img", {
                    ref: "storyboard",
                    staticClass: "storyboard"
                }) : t("loader", {
                    attrs: {
                        size: "32px"
                    }
                })], 1)
            }, [], !1, He, "data-v-f6bedf92", null).exports,
            qe = {
                components: {
                    Storyboard: Ne
                },
                data: function() {
                    return {
                        isSeeking: !1,
                        lastTouchend: 0
                    }
                },
                computed: j()({}, Object(D.e)({
                    isMobile: function(e) {
                        return e.isMobile
                    }
                }), {
                    player: function() {
                        return this.$parent
                    },
                    video: function() {
                        return this.player.video
                    },
                    peekSize: function() {
                        var e = this.video,
                            t = e.videoWidth / e.videoHeight;
                        return ["140px", Math.ceil(140 / t) + "px"]
                    }
                }),
                methods: {
                    onOverlayClick: function() {
                        this.player.togglePlay()
                    },
                    onDoubleTapRecognized: function(e) {
                        var t = this,
                            n = document.createElement("div");
                        n.className = "ff-indicator", n.style.width = "70%", n.style[e] = "-35%", this.$refs.overlay.appendChild(n), setTimeout(function() {
                            t.$refs.overlay.removeChild(n)
                        }, 499), this.doubleTapRecognized = !0
                    },
                    onOverlayTouchstart: function(e) {
                        var t = this,
                            n = M()(e.touches, 1)[0];
                        if (this.var__playerRect || (this.var__playerRect = this.video.getBoundingClientRect()), this.startPos = [n.clientX, n.clientY], this.playPivot = this.video.currentTime / this.video.duration * this.var__playerRect.width, Date.now() - this.lastTouchend < 350) {
                            var i = this.var__playerRect.width / 2,
                                a = .15 * this.var__playerRect.width;
                            n.clientX <= i - a ? (this.video.currentTime = Math.max(0, this.video.currentTime - 10), this.onDoubleTapRecognized("left")) : n.clientX >= i + a && (this.video.currentTime = Math.min(this.video.duration, this.video.currentTime + 10), this.onDoubleTapRecognized("right"))
                        } else this.player.isIdle ? (clearTimeout(this.toggleControlsTimeout), this.toggleControlsTimeout = setTimeout(function() {
                            return t.$emit("show-controls")
                        }, 350)) : (clearTimeout(this.toggleControlsTimeout), this.toggleControlsTimeout = setTimeout(function() {
                            return t.$emit("hide-controls")
                        }, 350))
                    },
                    onOverlayTouchmove: function(e) {
                        var t = M()(e.touches, 1)[0],
                            n = t.clientX - this.startPos[0],
                            i = t.clientY - this.startPos[1];
                        if (!this.touchmoveIsPageScroll) {
                            if (void 0 === this.touchmoveIsPageScroll) {
                                if (Math.abs(i) > Math.abs(n)) return void(this.touchmoveIsPageScroll = !0);
                                this.touchmoveIsPageScroll = !1
                            }
                            e.preventDefault();
                            var a = this.playPivot + n;
                            a = Math.max(0, a), a = Math.min(a, this.var__playerRect.width), clearTimeout(this.toggleControlsTimeout), this.$emit("show-controls"), this.player.$refs.seekBar.isSeekProgressOverride = !0, this.isSeeking = !0, this.lastSeekProgress = a / this.var__playerRect.width, this.$refs.storyboard.setProgress(this.lastSeekProgress), this.$refs.seekProgress.style.width = 100 * this.lastSeekProgress + "%", this.player.$refs.seekBar.$refs.progressBarPlayed.style.width = 100 * this.lastSeekProgress + "%", this.$refs.timeDisplayPeek.innerHTML = Object(Se.b)(this.lastSeekProgress * this.video.duration);
                            var s = a - 70;
                            s = Math.max(s, 0), s = Math.min(s, this.var__playerRect.width - 140), this.$refs.preview.style.left = s + "px"
                        }
                    },
                    onOverlayTouchend: function() {
                        var e = this;
                        if (this.doubleTapRecognized) return delete this.doubleTapRecognized, clearTimeout(this.toggleControlsTimeout), void this.$emit("show-controls");
                        if (void 0 !== this.lastSeekProgress) {
                            var t = this.lastSeekProgress * this.video.duration;
                            this.video.currentTime = t, setTimeout(function() {
                                return e.$emit("hide-controls")
                            }, 3e3)
                        }
                        this.player.$refs.seekBar.isSeekProgressOverride = !1, this.isSeeking = !1, delete this.touchmoveIsPageScroll, delete this.lastSeekProgress, delete this.var__playerRect, this.lastTouchend = Date.now()
                    }
                },
                mounted: function() {
                    var e = this,
                        t = this.$refs.overlay;
                    this.isMobile ? (t.addEventListener("touchstart", this.onOverlayTouchstart), t.addEventListener("touchmove", this.onOverlayTouchmove), t.addEventListener("touchend", this.onOverlayTouchend)) : t.addEventListener("click", this.onOverlayClick), this.$on("hide-controls", function() {
                        e.player.isIdle = !0
                    }), this.$on("show-controls", function() {
                        e.player.isIdle = !1, clearTimeout(e.player.idleTimeout), e.player.idleTimeout = setTimeout(function() {
                            e.player.isIdle = !0
                        }, 3e3)
                    })
                },
                beforeDestroy: function() {
                    var e = this.$refs.overlay;
                    this.isMobile ? (e.removeEventListener("touchstart", this.onOverlayTouchstart), e.removeEventListener("touchmove", this.onOverlayTouchmove), e.removeEventListener("touchend", this.onOverlayTouchend)) : e.removeEventListener("click", this.onOverlayClick)
                }
            };
        var Ue = function(e) {
                n("JTgL")
            },
            Be = Object(F.a)(qe, function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    ref: "overlay",
                    staticClass: "overlay-controls"
                }, [t("div", {
                    class: {
                        "seek-preview": !0, hidden: !this.isSeeking
                    }
                }, [t("div", {
                    ref: "seekProgress",
                    staticClass: "progress"
                }), this._v(" "), t("div", {
                    ref: "preview",
                    staticClass: "preview",
                    style: {
                        width: this.peekSize[0],
                        height: this.peekSize[1]
                    }
                }, [t("storyboard", {
                    ref: "storyboard",
                    attrs: {
                        level: "L2",
                        player: this.player
                    }
                }), this._v(" "), t("time", {
                    ref: "timeDisplayPeek"
                }, [this._v("-:--")])], 1)])])
            }, [], !1, Ue, "data-v-a987ccf6", null).exports,
            We = {
                components: {
                    Storyboard: Ne
                },
                data: function() {
                    return {
                        peekSpec: null
                    }
                },
                computed: j()({}, Object(D.e)({
                    isMobile: function(e) {
                        return e.isMobile
                    }
                }), {
                    player: function() {
                        return this.$parent
                    },
                    video: function() {
                        return this.player.video
                    },
                    peekSize: function() {
                        var e = this.video,
                            t = e.videoWidth / e.videoHeight;
                        return ["180px", Math.ceil(180 / t) + "px"]
                    }
                }),
                methods: {
                    repositionSeekPreview: function(e, t) {
                        var n = e / t,
                            i = e - 90;
                        i = Math.max(i, 0), i = Math.min(i, t - 180), this.$refs.peek.style.left = i + "px", this.$refs.timeDisplayPeek.innerHTML = Object(Se.b)(n * this.video.duration)
                    }
                },
                watch: {
                    peekSpec: function(e) {
                        e && (this.$refs.storyboard.setProgress(e.progress), this.repositionSeekPreview(e.offsetX, e.width))
                    }
                },
                mounted: function() {
                    var e = this;
                    return c()(r.a.mark(function t() {
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e.unwatchPeekSpec = e.player.$refs.seekBar.$watch("peekSpec", function(t) {
                                        e.peekSpec = t
                                    });
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                },
                beforeDestroy: function() {
                    this.unwatchPeekSpec()
                }
            };
        var Xe = function(e) {
                n("fGdu")
            },
            Ve = Object(F.a)(We, function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("figure", {
                    ref: "peek",
                    class: {
                        preview: !0, hidden: !this.peekSpec
                    },
                    style: {
                        width: this.peekSize[0],
                        height: this.peekSize[1]
                    }
                }, [t("storyboard", {
                    ref: "storyboard",
                    attrs: {
                        level: "L2",
                        player: this.player
                    }
                }), this._v(" "), t("time", {
                    ref: "timeDisplayPeek"
                }, [this._v("-:--")])], 1)
            }, [], !1, Xe, "data-v-733c92a5", null).exports;
        var Ye = function(e) {
                n("ndgF")
            },
            Ge = Object(F.a)({
                computed: {
                    player: function() {
                        return this.$parent.$parent
                    }
                }
            }, function() {
                var e = this.$createElement;
                return (this._self._c || e)("i", {
                    class: "play-control fe-" + (this.player.paused ? "play" : "pause"),
                    on: {
                        click: this.player.togglePlay
                    }
                })
            }, [], !1, Ye, "data-v-211e169c", null).exports,
            Ke = {
                data: function() {
                    return {
                        volumeControlHovering: !1,
                        volumeSliderDowned: !1,
                        volumeIcon: null,
                        isMuted: !1
                    }
                },
                computed: j()({}, Object(D.e)({
                    playerConfig: function(e) {
                        return e.playerConfig
                    }
                }), {
                    player: function() {
                        return this.$parent.$parent
                    },
                    video: function() {
                        return this.player.video
                    }
                }),
                methods: j()({}, Object(D.b)(["updatePlayerConfig"]), {
                    onVolumeControlMouseEnter: function() {
                        this.volumeControlHovering = !0
                    },
                    onVolumeControlMouseLeave: function() {
                        this.volumeControlHovering = !1
                    },
                    onVolumeSliderMouseDown: function() {
                        this.volumeSliderDowned = !0, this.var__volumeSliderRect = this.$refs.volumeSlider.getBoundingClientRect(), document.addEventListener("mousemove", this.onDocumentMouseMove), document.addEventListener("mouseup", this.onDocumentMouseUp)
                    },
                    updateOnSliderChange: function(e) {
                        e.preventDefault();
                        var t = (e.pageX - this.var__volumeSliderRect.left) / 60;
                        t = Math.max(0, t), t = Math.min(1, t), this.video.volume = t, 0 === t ? (this.isMuted = !0, this.savedVolume = .5) : this.isMuted = !1
                    },
                    onDocumentMouseMove: function(e) {
                        this.updateOnSliderChange(e)
                    },
                    onDocumentMouseUp: function(e) {
                        this.updateOnSliderChange(e), this.volumeSliderDowned = !1, document.removeEventListener("mousemove", this.onDocumentMouseMove), document.removeEventListener("mouseup", this.onDocumentMouseUp)
                    },
                    onVolumeChangeListener: function() {
                        var e = this.video.volume,
                            t = 60 * e - 6;
                        t = Math.max(t, 0), t = Math.min(t, 48), this.$refs.volumeHandle.style.left = t + "px", this.volumeIcon = 0 === e ? "volume-off" : e < .5 ? "volume-1" : "volume-2", this.updatePlayerConfig({
                            key: "volume",
                            value: e
                        })
                    },
                    toggleMute: function() {
                        this.isMuted ? (this.isMuted = !1, this.video.volume = this.savedVolume) : (this.isMuted = !0, this.savedVolume = this.video.volume, this.video.volume = 0)
                    }
                }),
                mounted: function() {
                    this.player.$on("signal-toggle-mute", this.toggleMute), this.video.addEventListener("volumechange", this.onVolumeChangeListener), this.video.volume !== this.playerConfig.volume ? this.video.volume = this.playerConfig.volume : this.onVolumeChangeListener()
                },
                beforeDestroy: function() {
                    this.video.removeEventListener("volumechange", this.onVolumeChangeListener)
                }
            };
        var Qe = function(e) {
                n("P/5B")
            },
            Ze = Object(F.a)(Ke, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    class: {
                        "volume-control": !0, hovering: e.volumeControlHovering || e.volumeSliderDowned
                    },
                    on: {
                        mouseenter: e.onVolumeControlMouseEnter,
                        mouseleave: e.onVolumeControlMouseLeave
                    }
                }, [n("i", {
                    class: "fe-" + e.volumeIcon,
                    on: {
                        click: e.toggleMute
                    }
                }), e._v(" "), n("div", {
                    ref: "volumeSlider",
                    staticClass: "volume-slider",
                    on: {
                        mousedown: e.onVolumeSliderMouseDown
                    }
                }, [n("div", {
                    ref: "volumeHandle",
                    staticClass: "volume-slider-handle"
                })])])
            }, [], !1, Qe, "data-v-99923714", null).exports,
            Je = {
                data: function() {
                    return {
                        currentRect: null,
                        settingsExpanded: !1,
                        currentMenu: null,
                        menuList: {
                            Speed: {
                                "0.25x": .25,
                                "0.5x": .5,
                                "0.75x": .75,
                                "1x": 1,
                                "1.25x": 1.25,
                                "1.5x": 1.5,
                                "2x": 2
                            }
                        },
                        playbackRate: 1
                    }
                },
                computed: j()({}, Object(D.e)({
                    playerConfig: function(e) {
                        return e.playerConfig
                    }
                }), {
                    video: function() {
                        return this.$parent.$parent.video
                    },
                    menuListInverted: function() {
                        var e = this,
                            t = {};
                        return a()(this.menuList).forEach(function(n) {
                            t[n] = h.a.invert(e.menuList[n])
                        }), t
                    }
                }),
                methods: j()({}, Object(D.b)(["updatePlayerConfig"]), {
                    onClickAnywhereListener: function(e) {
                        for (var t = e.target, n = 0; n < 5 && t && t !== this.$refs.settings;) t = t.parentNode, n += 1;
                        t !== this.$refs.settings && (e.stopPropagation(), this.settingsExpanded = !1)
                    },
                    onRateChangeListener: function() {
                        this.playbackRate = this.video.playbackRate
                    },
                    getMenuValue: function(e) {
                        return "Speed" === e ? this.menuListInverted[e][this.playbackRate] : null
                    },
                    calculateRect: function() {
                        var e = this;
                        return c()(r.a.mark(function t() {
                            var n, i;
                            return r.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = void 0, e.$refs.settings && (n = e.$refs.settings.getBoundingClientRect()), t.next = 4, e.$nextTick();
                                    case 4:
                                        if (i = e.$refs.settings) {
                                            t.next = 8;
                                            break
                                        }
                                        return e.currentRect = null, t.abrupt("return");
                                    case 8:
                                        return i.removeAttribute("style"), e.currentRect = null, t.next = 12, e.$nextTick();
                                    case 12:
                                        if (e.currentRect = i.getBoundingClientRect(), !n) {
                                            t.next = 21;
                                            break
                                        }
                                        return i.setAttribute("style", "width: " + n.width + "px; height: " + n.height + "px"), t.next = 17, Object(Se.f)(0);
                                    case 17:
                                        return i.setAttribute("style", "width: " + e.currentRect.width + "px; height: " + e.currentRect.height + "px"), t.next = 20, Object(Se.f)(200);
                                    case 20:
                                        i.removeAttribute("style");
                                    case 21:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e)
                        }))()
                    },
                    updatePlayerSettings: function(e, t) {
                        switch (e) {
                            case "Speed":
                                this.playbackRate = t
                        }
                        this.currentMenu = null
                    }
                }),
                watch: {
                    settingsExpanded: function(e) {
                        e ? (this.calculateRect(), this.$parent.$parent.stayAwake = !0, document.addEventListener("click", this.onClickAnywhereListener, !0)) : (this.currentMenu = null, this.$parent.$parent.stayAwake = !1, document.removeEventListener("click", this.onClickAnywhereListener, !0))
                    },
                    currentMenu: function() {
                        this.calculateRect()
                    },
                    playbackRate: function(e) {
                        this.video.playbackRate = e, this.updatePlayerConfig({
                            key: "rate",
                            value: e
                        })
                    }
                },
                mounted: function() {
                    this.video.addEventListener("ratechange", this.onRateChangeListener), this.video.playbackRate !== this.playerConfig.rate ? this.video.playbackRate = this.playerConfig.rate : this.onRateChangeListener()
                },
                beforeDestroy: function() {
                    this.video.removeEventListener("ratechange", this.onRateChangeListener)
                }
            };
        var et = function(e) {
                n("fxLM")
            },
            tt = Object(F.a)(Je, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("i", {
                    class: {
                        "player-settings": !0, "fe-settings": !0, expanded: e.settingsExpanded
                    },
                    on: {
                        click: function(t) {
                            e.settingsExpanded = !e.settingsExpanded
                        }
                    }
                }), e._v(" "), n("portal", {
                    attrs: {
                        to: "player-settings"
                    }
                }, [e.settingsExpanded ? n("div", {
                    ref: "settings",
                    class: {
                        settings: !0, prepared: e.currentRect
                    }
                }, [e.currentMenu ? n("div", {
                    staticClass: "menu"
                }, [n("div", {
                    staticClass: "menu-back",
                    on: {
                        click: function(t) {
                            e.currentMenu = null
                        }
                    }
                }, [n("i", {
                    staticClass: "fe-chevron-left"
                }), e._v("\n          " + e._s(e.currentMenu) + "\n        ")]), e._v(" "), e._l(e.menuList[e.currentMenu], function(t, i) {
                    return n("div", {
                        key: i,
                        staticClass: "menu-item",
                        on: {
                            click: function(n) {
                                e.updatePlayerSettings(e.currentMenu, t)
                            }
                        }
                    }, [n("div", {
                        staticClass: "menu-option"
                    }, [e.getMenuValue(e.currentMenu) === i ? n("i", {
                        staticClass: "menu-option-selected fe-check"
                    }) : e._e(), e._v("\n            " + e._s(i) + "\n          ")])])
                })], 2) : n("div", {
                    staticClass: "menu"
                }, e._l(e.menuList, function(t, i) {
                    return n("div", {
                        key: i,
                        staticClass: "menu-item",
                        on: {
                            click: function(t) {
                                e.currentMenu = i
                            }
                        }
                    }, [n("div", {
                        staticClass: "menu-title"
                    }, [e._v(e._s(i))]), e._v(" "), n("div", {
                        staticClass: "menu-value"
                    }, [e._v(e._s(e.getMenuValue(i)))])])
                }))]) : e._e()])], 1)
            }, [], !1, et, "data-v-63227349", null).exports,
            nt = {
                data: function() {
                    return {
                        snapshotImage: null
                    }
                },
                computed: {
                    player: function() {
                        return this.$parent.$parent
                    },
                    video: function() {
                        return this.player.video
                    }
                },
                methods: {
                    snapshot: function() {
                        var e = this;
                        return c()(r.a.mark(function t() {
                            var n, i, a, s, o, c, u, l;
                            return r.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = document.createElement("canvas"), i = n.getContext("2d"), n.width = e.video.videoWidth, n.height = e.video.videoHeight, a = 0, s = 0, o = 4, i.beginPath(), i.moveTo(a + o, s), i.lineTo(a + (n.width - o), s), i.quadraticCurveTo(a + n.width, s, a + n.width, s + o), i.lineTo(a + n.width, s + (n.height - o)), i.quadraticCurveTo(a + n.width, s + n.height, a + (n.width - o), s + n.height), i.lineTo(a + o, s + n.height), i.quadraticCurveTo(a, s + n.height, a, s + (n.height - o)), i.lineTo(a, s + o), i.quadraticCurveTo(a, s, a + o, s), i.closePath(), i.clip(), i.drawImage(e.video, 0, 0, n.width, n.height), t.next = 22, window.fetch(n.toDataURL("image/png"));
                                    case 22:
                                        return c = t.sent, t.next = 25, c.blob();
                                    case 25:
                                        if (!((u = t.sent).size < 1)) {
                                            t.next = 28;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 28:
                                        e.resumeVideo = !e.video.paused, e.video.pause(), e.snapshotImage = URL.createObjectURL(u), l = Object(Se.b)(e.video.currentTime), window.ga("send", "event", "Playback", "capture", e.player.vdata.title + " @ " + l);
                                    case 33:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e)
                        }))()
                    },
                    resetSnapshotImage: function() {
                        this.snapshotImage = null, this.resumeVideo && this.video.play()
                    }
                }
            };
        var it = function(e) {
                n("AFwT")
            },
            at = Object(F.a)(nt, function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "snapshot-control"
                }, [t("i", {
                    staticClass: "fe-camera",
                    on: {
                        click: this.snapshot
                    }
                }), this._v(" "), t("portal", {
                    attrs: {
                        to: "nav-level"
                    }
                }, [this.snapshotImage ? t("div", {
                    staticClass: "snapshot"
                }, [t("i", {
                    staticClass: "fe-x",
                    on: {
                        click: this.resetSnapshotImage
                    }
                }), this._v(" "), t("img", {
                    attrs: {
                        "data-playback-capture": "",
                        alt: "",
                        src: this.snapshotImage
                    }
                })]) : this._e()])], 1)
            }, [], !1, it, "data-v-2eeff343", null).exports;
        var st = function(e) {
                n("PKq6")
            },
            rt = Object(F.a)({
                computed: {
                    player: function() {
                        return this.$parent.$parent
                    }
                }
            }, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "lighting-control"
                }, [n("i", {
                    class: "fe-" + (e.player.isLightOff ? "sun" : "moon"),
                    on: {
                        click: function(t) {
                            e.player.isLightOff = !e.player.isLightOff
                        }
                    }
                }), e._v(" "), n("portal", {
                    attrs: {
                        to: "curtain"
                    }
                }, [e.player.isLightOff ? n("div", {
                    staticClass: "curtain"
                }) : e._e()])], 1)
            }, [], !1, st, "data-v-ac9e60d0", null).exports,
            ot = {
                computed: j()({}, Object(D.e)({
                    showDanmaku: function(e) {
                        return e.playerConfig.danmaku
                    }
                })),
                methods: j()({}, Object(D.b)(["updatePlayerConfig"]), {
                    toggleDanmaku: function() {
                        this.updatePlayerConfig({
                            key: "danmaku",
                            value: !this.showDanmaku
                        })
                    }
                })
            };
        var ct = function(e) {
                n("9DBc")
            },
            ut = Object(F.a)(ot, function() {
                var e = this.$createElement;
                return (this._self._c || e)("i", {
                    class: "danmaku-control fe-" + (this.showDanmaku ? "comment-outline-off" : "comment-outline"),
                    on: {
                        click: this.toggleDanmaku
                    }
                })
            }, [], !1, ct, "data-v-e36d2d14", null).exports,
            lt = /iPad|iPhone|iPod/.test(navigator.platform),
            dt = {
                computed: {
                    player: function() {
                        return this.$parent.$parent
                    }
                },
                methods: {
                    toggleFullscreen: function() {
                        if (lt) this.player.video.webkitEnterFullscreen();
                        else {
                            var e = void 0,
                                t = void 0;
                            (e = this.player.isFullscreen ? (t = document).exitFullscreen || t.webkitExitFullscreen || t.mozCancelFullScreen || t.msExitFullscreen : (t = this.player.$el).requestFullscreen || t.webkitRequestFullscreen || t.mozRequestFullScreen || t.msRequestFullscreen) && e.call(t)
                        }
                    },
                    onFullscreenChangeListener: function() {
                        document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement ? (this.player.isFullscreen = !0, this.player.$el.setAttribute("style", "width: 100vw; height: 100vh")) : (this.player.isFullscreen = !1, this.player.$el.removeAttribute("style"))
                    }
                },
                mounted: function() {
                    this.player.$on("signal-toggle-fullscreen", this.toggleFullscreen), document.addEventListener("fullscreenchange", this.onFullscreenChangeListener), document.addEventListener("webkitfullscreenchange", this.onFullscreenChangeListener), document.addEventListener("mozfullscreenchange", this.onFullscreenChangeListener), document.addEventListener("MSFullscreenChange", this.onFullscreenChangeListener)
                },
                beforeDestroy: function() {
                    document.removeEventListener("fullscreenchange", this.onFullscreenChangeListener), document.removeEventListener("webkitfullscreenchange", this.onFullscreenChangeListener), document.removeEventListener("mozfullscreenchange", this.onFullscreenChangeListener), document.removeEventListener("MSFullscreenChange", this.onFullscreenChangeListener)
                }
            };
        var ht = function(e) {
                n("dGjB")
            },
            ft = {
                components: {
                    PlayControl: Ge,
                    VolumeControl: Ze,
                    PlayerSettings: tt,
                    SnapshotControl: at,
                    LightingControl: rt,
                    DanmakuControl: ut,
                    FullscreenControl: Object(F.a)(dt, function() {
                        var e = this.$createElement;
                        return (this._self._c || e)("i", {
                            class: "fullscreen-control fe-" + (this.player.isFullscreen ? "minimize" : "maximize") + "-2",
                            on: {
                                click: this.toggleFullscreen
                            }
                        })
                    }, [], !1, ht, "data-v-8ef88cb8", null).exports,
                    Storyboard: Ne
                },
                data: function() {
                    return {
                        isSeekProgressOverride: !1,
                        seekAreaDowned: !1,
                        resumeVideoOnMouseUp: !1,
                        peekSpec: null
                    }
                },
                computed: j()({}, Object(D.e)({
                    isMobile: function(e) {
                        return e.isMobile
                    }
                }), {
                    player: function() {
                        return this.$parent
                    },
                    video: function() {
                        return this.player.video
                    }
                }),
                methods: {
                    updateSpec: function(e) {
                        var t = this.$refs.seekArea;
                        this.var__seekAreaRect || (this.var__seekAreaRect = t.getBoundingClientRect());
                        var n = this.var__seekAreaRect,
                            i = n.left,
                            a = n.width,
                            s = e - i,
                            r = s / a;
                        this.seekAreaDowned && (this.$refs.progressBarPlayed.style.width = 100 * r + "%"), this.peekSpec = {
                            offsetX: s,
                            width: a,
                            progress: r
                        }
                    },
                    onSeekAreaMouseDown: function(e) {
                        var t = this,
                            n = e.pageX;
                        return c()(r.a.mark(function e() {
                            return r.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.seekAreaDowned = !0, t.video.paused || (t.video.pause(), t.resumeVideoOnMouseUp = !0), e.next = 4, t.$nextTick();
                                    case 4:
                                        t.updateSpec(n);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t)
                        }))()
                    },
                    onDocumentMouseMove2: function(e) {
                        var t = e.target,
                            n = e.pageX;
                        this.seekAreaDowned || t === this.$refs.seekArea ? this.updateSpec(n) : this.peekSpec = null
                    },
                    onDocumentMouseUp2: function() {
                        if (this.seekAreaDowned) {
                            var e = this.peekSpec.progress * this.video.duration;
                            this.video.currentTime = e, this.player.syncWatchHistory(!0), delete this.var__seekAreaRect, this.seekAreaDowned = !1, this.peekSpec = null, this.resumeVideoOnMouseUp && (this.video.play(), this.resumeVideoOnMouseUp = !1)
                        }
                    },
                    onTimeUpdateListener: function() {
                        var e = this.video,
                            t = e.currentTime,
                            n = e.duration;
                        this.$refs.timeDisplayCurrentTime.innerHTML = Object(Se.b)(t), this.$refs.timeDisplayDuration.innerHTML = Object(Se.b)(n), this.isSeekProgressOverride || (this.$refs.progressBarPlayed.style.width = t / n * 100 + "%")
                    },
                    onProgressListener: function() {
                        for (var e = this.video, t = e.buffered, n = e.currentTime, i = e.duration, a = null, s = 0; s < t.length; s += 1) {
                            var r = t.start(s),
                                o = t.end(s);
                            r <= n && n <= o && (a = {
                                start: r,
                                end: o
                            })
                        }
                        if (a) {
                            var c = a,
                                u = (c.start, c.end / i * 100);
                            this.$refs.progressBarBuffered.style.width = u + "%"
                        } else this.$refs.progressBarBuffered.style.width = "0%"
                    }
                },
                watch: {
                    peekSpec: function(e) {
                        e && this.$refs.storyboard.setProgress(e.progress)
                    }
                },
                mounted: function() {
                    document.addEventListener("mousemove", this.onDocumentMouseMove2), document.addEventListener("mouseup", this.onDocumentMouseUp2), this.video.addEventListener("timeupdate", this.onTimeUpdateListener), this.video.addEventListener("progress", this.onProgressListener)
                },
                beforeDestroy: function() {
                    document.removeEventListener("mousemove", this.onDocumentMouseMove2), document.removeEventListener("mouseup", this.onDocumentMouseUp2), this.video.removeEventListener("timeupdate", this.onTimeUpdateListener), this.video.removeEventListener("progress", this.onProgressListener)
                }
            };
        var mt = function(e) {
                n("YJfw")
            },
            pt = Object(F.a)(ft, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "seek-bar"
                }, [n("div", {
                    class: {
                        "seek-preview": !0, hidden: !e.seekAreaDowned
                    }
                }, [n("storyboard", {
                    ref: "storyboard",
                    attrs: {
                        level: "L2",
                        player: e.player
                    }
                })], 1), e._v(" "), n("div", {
                    staticClass: "bar"
                }, [n("span", {
                    ref: "progressBarPlayed",
                    staticClass: "played"
                }), e._v(" "), n("span", {
                    ref: "progressBarBuffered",
                    staticClass: "buffered"
                })]), e._v(" "), n("div", {
                    ref: "seekArea",
                    staticClass: "seek-area",
                    on: {
                        mousedown: e.onSeekAreaMouseDown
                    }
                }), e._v(" "), n("div", {
                    staticClass: "chrome-controls"
                }, [n("div", {
                    staticClass: "left"
                }, [n("play-control"), e._v(" "), e.isMobile ? e._e() : n("volume-control"), e._v(" "), n("span", {
                    staticClass: "time-display"
                }, [n("time", {
                    ref: "timeDisplayCurrentTime"
                }, [e._v("-:--")]), e._v("\n        " + e._s(" / ") + "\n        "), n("time", {
                    ref: "timeDisplayDuration"
                }, [e._v("-:--")])])], 1), e._v(" "), n("div", {
                    staticClass: "right"
                }, [e.isMobile ? e._e() : n("player-settings"), e._v(" "), e.isMobile ? e._e() : n("snapshot-control"), e._v(" "), n("danmaku-control"), e._v(" "), e.isMobile ? e._e() : n("lighting-control"), e._v(" "), n("fullscreen-control")], 1)])])
            }, [], !1, mt, "data-v-6cad2d66", null).exports;
        var vt = {
            name: "player-x",
            components: {
                Loader: A.a,
                BigPlayButton: Oe,
                PlayerAds: Pe,
                UpNextOverlay: ze,
                OverlayControls: Be,
                PeekPreview: Ve,
                SeekBar: pt,
                NerdStats: function() {
                    return n.e(1).then(n.bind(null, "RTD2"))
                }
            },
            props: {
                onReference: {
                    type: Function,
                    required: !0
                },
                vdata: {
                    type: Object,
                    required: !1
                }
            },
            data: function() {
                return {
                    player: null,
                    engine: null,
                    storyboards: null,
                    resourceLoading: !1,
                    sourceLoader: null,
                    hasPlayed: !1,
                    isFullscreen: !1,
                    isLightOff: !1,
                    isBuffering: !1,
                    paused: !1,
                    isIdle: !1,
                    stayAwake: !1,
                    lastHistorySynced: Date.now() + 3e4,
                    showUpNextOverlay: !1,
                    pageComponent: null,
                    autoPlay: !1,
                    startTime: null
                }
            },
            computed: j()({}, Object(D.e)({
                isMobile: function(e) {
                    return e.isMobile
                }
            }), {
                video: function() {
                    return this.$refs.video
                },
                idleClassActive: function() {
                    var e = this.isIdle,
                        t = this.paused,
                        n = this.stayAwake,
                        i = this.showUpNextOverlay;
                    return e && !t && !i && !n
                },
                enableNerdStats: function() {
                    return "yes" === window.localStorage.nerdStats
                }
            }),
            methods: j()({}, Object(D.b)(["enqueueNotification"]), {
                initSourceLoader: function() {
                    var e, t = this;
                    return new l.a((e = c()(r.a.mark(function e(n, i) {
                        var a, s, o;
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a = void 0, !(window.Promise && window.Uint8Array && Array.prototype.forEach && window.MediaSource && window.MediaSource.isTypeSupported)) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 4, new l.a(function(e) {
                                        if (window.shaka) e();
                                        else {
                                            var t = document.createElement("script");
                                            t.onload = function() {
                                                window.shaka.polyfill.installAll(), e()
                                            }, t.src = "https://cdnjs.cloudflare.com/ajax/libs/shaka-player/2.4.5/shaka-player.compiled.js", document.head.appendChild(t)
                                        }
                                    });
                                case 4:
                                    if (void 0, !(u = je()()) || void 0 === u.RTCPeerConnection.prototype.createDataChannel) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 7, new l.a(function(e) {
                                        if (window.p2pml) e();
                                        else {
                                            var t = document.createElement("script");
                                            t.onload = function() {
                                                (t = document.createElement("script")).onload = e, t.src = "https://cdn.jsdelivr.net/npm/p2p-media-loader-shaka@latest/build/p2p-media-loader-shaka.min.js", document.head.appendChild(t)
                                            }, t.src = "https://cdn.jsdelivr.net/npm/p2p-media-loader-core@latest/build/p2p-media-loader-core.min.js", document.head.appendChild(t)
                                        }
                                    });
                                case 7:
                                    s = 25, o = 80, t.engine = new window.p2pml.shaka.Engine({
                                        loader: {
                                            cachedSegmentExpiration: 9e5,
                                            cachedSegmentsCount: o,
                                            requiredSegmentsPriority: 4,
                                            simultaneousP2PDownloads: 4,
                                            httpDownloadProbability: .2,
                                            bufferedSegmentsCount: s,
                                            trackerAnnounce: ["wss://tracker.openwebtorrent.com", "wss://tracker.fastcast.nz"]
                                        },
                                        segments: {
                                            forwardSegmentCount: s,
                                            maxHistorySegments: o
                                        }
                                    });
                                case 10:
                                    a = function(e) {
                                        return new l.a((n = c()(r.a.mark(function n(i) {
                                            var a;
                                            return r.a.wrap(function(n) {
                                                for (;;) switch (n.prev = n.next) {
                                                    case 0:
                                                        return t.player && t.player.destroy(), t.player = new window.shaka.Player(t.video), t.engine && t.engine.initShakaPlayer(t.player), t.player.configure({
                                                            streaming: {
                                                                bufferingGoal: 60,
                                                                retryParameters: {
                                                                    timeout: 3e3,
                                                                    maxAttempts: 5,
                                                                    backoffFactor: 1,
                                                                    fuzzFactor: .25
                                                                }
                                                            }
                                                        }), t.player.addEventListener("buffering", function(e) {
                                                            t.isBuffering = e.buffering
                                                        }), a = function e() {
                                                            t.video.removeEventListener("canplay", e), t.resourceLoading = !1, i()
                                                        }, t.video.currentTime = 0, t.video.addEventListener("canplay", a), n.prev = 8, t.resourceLoading = !0, n.next = 12, t.player.load(e);
                                                    case 12:
                                                        n.next = 18;
                                                        break;
                                                    case 14:
                                                        n.prev = 14, n.t0 = n.catch(8), t.enqueueNotification({
                                                            type: "alert",
                                                            text: "讀取影片時發生未知錯誤<br>請嘗試重新載入網頁<br>如問題持續，請向我們反映",
                                                            duration: 5e3
                                                        }), console.error(n.t0);
                                                    case 18:
                                                    case "end":
                                                        return n.stop()
                                                }
                                            }, n, t, [
                                                [8, 14]
                                            ])
                                        })), function(e) {
                                            return n.apply(this, arguments)
                                        }));
                                        var n
                                    }, e.next = 14;
                                    break;
                                case 13:
                                    "" !== t.video.canPlayType("application/x-mpegurl") && (a = function(e) {
                                        return new l.a(function(n) {
                                            t.video.onseeking = function() {
                                                t.isBuffering = !0
                                            }, t.video.onseeked = function() {
                                                t.isBuffering = !1
                                            };
                                            t.video.currentTime = 0, t.video.addEventListener("canplay", function e() {
                                                t.video.removeEventListener("canplay", e), t.resourceLoading = !1, n()
                                            }), t.video.src = e, t.video.load(), t.resourceLoading = !0
                                        })
                                    });
                                case 14:
                                    a ? n(a) : i(new Error("請先升級您的瀏覽器，然後重新載入頁面"));
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                            var u
                        }, e, t)
                    })), function(t, n) {
                        return e.apply(this, arguments)
                    }))
                },
                lazyInitialization: function() {
                    var e = this;
                    return c()(r.a.mark(function t() {
                        var n;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return (n = [])[0] = new l.a(function(t) {
                                        var n = e.$watch("vdata", function(e) {
                                            e && (n(), t())
                                        })
                                    }), n[1] = new l.a(function(t) {
                                        var n = e.$watch("sourceLoader", function() {
                                            n(), t()
                                        })
                                    }), t.next = 5, l.a.all(n);
                                case 5:
                                    e.unwatchVdata = e.$watch("vdata", e.onSourceChanged, {
                                        immediate: !0
                                    });
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                },
                onSourceChanged: function(e) {
                    var t = this,
                        n = e.src;
                    return c()(r.a.mark(function e() {
                        var i, a, s;
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.hasPlayed = !1, e.next = 3, t.sourceLoader(n);
                                case 3:
                                    return e.next = 5, Me()(n.replace("/s/", "/sb/").replace("/master.csv", ""));
                                case 5:
                                    i = e.sent, a = i.data, t.storyboards = a, t.video.currentTime = t.startTime, t.autoPlay && t.video.play(), s = function e() {
                                        t.idleTimeout = setTimeout(function() {
                                            t.isIdle = !0
                                        }, 3e3), t.initialIdleFlag = !0, setTimeout(function() {
                                            t.initialIdleFlag = !1
                                        }, 3e3), t.syncWatchHistory(!0), t.video.removeEventListener("play", e)
                                    }, t.video.addEventListener("play", s);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }, e, t)
                    }))()
                },
                handleContextMenu: function(e) {
                    e.target.hasAttribute("data-playback-capture") || e.preventDefault()
                },
                syncWatchHistory: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = this.pageComponent.watchHistory;
                    if (t) {
                        var n = Date.now();
                        if (e || n - this.lastHistorySynced >= 3e4) {
                            var i = t.seasonId,
                                a = t.title;
                            this.pageComponent.updateWatchHistory(i, a, this.video.currentTime), this.lastHistorySynced = n
                        }
                    }
                },
                onPlayListener: function() {
                    this.hasPlayed || (this.hasPlayed = !0), this.paused = !1
                },
                onPauseListener: function() {
                    this.paused = !0
                },
                onTimeUpdateListener: function() {
                    var e = this.video,
                        t = e.currentTime,
                        n = e.duration;
                    this.showUpNextOverlay = t >= n, this.syncWatchHistory()
                },
                onKeydownListener: function(e) {
                    if ("INPUT" !== e.target.nodeName) {
                        var t = this.$refs.video;
                        switch (e.which) {
                            case 32:
                                e.preventDefault(), t.paused ? t.play() : t.pause();
                                break;
                            case 37:
                                e.preventDefault(), t.currentTime = Math.max(0, t.currentTime - 10);
                                break;
                            case 39:
                                e.preventDefault(), t.currentTime = Math.min(t.duration, t.currentTime + 10);
                                break;
                            case 70:
                                e.preventDefault(), this.$emit("signal-toggle-fullscreen");
                                break;
                            case 77:
                                e.preventDefault(), this.$emit("signal-toggle-mute")
                        }
                    }
                },
                onMouseMoveListener: function() {
                    var e = this;
                    this.isIdle = !1, clearTimeout(this.idleTimeout), this.idleTimeout = setTimeout(function() {
                        e.isIdle = !0
                    }, 3e3)
                },
                onMouseLeaveListener: function() {
                    this.initialIdleFlag || (clearTimeout(this.idleTimeout), this.isIdle = !0)
                },
                togglePlay: function() {
                    this.paused ? this.video.play() : this.video.pause()
                }
            }),
            watch: {
                isIdle: function(e) {
                    e && this.isFullscreen ? document.body.setAttribute("style", "cursor: none") : document.body.removeAttribute("style")
                }
            },
            mounted: function() {
                var e = this;
                return c()(r.a.mark(function t() {
                    var n;
                    return r.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e.onReference(e), e.video.crossOrigin = "anonymous", e.video.playsInline = !0, e.video.addEventListener("play", e.onPlayListener), e.video.addEventListener("pause", e.onPauseListener), e.video.addEventListener("timeupdate", e.onTimeUpdateListener), window.addEventListener("keydown", e.onKeydownListener), t.prev = 7, e.lazyInitialization(), t.next = 11, e.initSourceLoader();
                            case 11:
                                e.sourceLoader = t.sent, t.next = 18;
                                break;
                            case 14:
                                t.prev = 14, t.t0 = t.catch(7), n = t.t0.message, alert(n);
                            case 18:
                            case "end":
                                return t.stop()
                        }
                    }, t, e, [
                        [7, 14]
                    ])
                }))()
            },
            beforeDestroy: function() {
                this.unwatchVdata && this.unwatchVdata(), this.video.removeEventListener("play", this.onPlayListener), this.video.removeEventListener("pause", this.onPauseListener), this.video.removeEventListener("timeupdate", this.onTimeUpdateListener), window.removeEventListener("keydown", this.onKeydownListener)
            }
        };
        var gt = function(e) {
                n("9FGH")
            },
            yt = Object(F.a)(vt, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "container",
                    attrs: {
                        id: "coral-root"
                    },
                    on: {
                        contextmenu: e.handleContextMenu
                    }
                }, [n("video", {
                    ref: "video"
                }), e._v(" "), e.resourceLoading ? n("div", {
                    staticClass: "resource-loading"
                }, [n("div", {
                    staticClass: "caption"
                }, [e._v("全速載入中⋯")]), e._v(" "), e._m(0)]) : e._e(), e._v(" "), e.isBuffering ? n("div", {
                    staticClass: "loading"
                }, [n("loader")], 1) : e._e(), e._v(" "), e.hasPlayed ? [n("div", {
                    class: {
                        controls: !0, idle: e.idleClassActive
                    },
                    on: {
                        mousemove: e.onMouseMoveListener,
                        mouseleave: e.onMouseLeaveListener
                    }
                }, [n("player-ads"), e._v(" "), n("overlay-controls"), e._v(" "), !e.isMobile && e.showUpNextOverlay ? n("up-next-overlay") : e._e(), e._v(" "), e.isMobile ? e._e() : n("peek-preview"), e._v(" "), n("seek-bar", {
                    ref: "seekBar"
                }), e._v(" "), n("portal-target", {
                    attrs: {
                        name: "player-settings"
                    }
                })], 1)] : [n("big-play-button", {
                    on: {
                        click: function(t) {
                            e.$refs.video.play()
                        }
                    }
                })], e._v(" "), n("portal-target", {
                    attrs: {
                        slim: "",
                        name: "danmaku"
                    }
                }), e._v(" "), e.engine && e.enableNerdStats && !e.isMobile ? n("nerd-stats") : e._e()], 2)
            }, [function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "longfazers"
                }, [t("span"), this._v(" "), t("span"), this._v(" "), t("span"), this._v(" "), t("span")])
            }], !1, gt, "data-v-9951e5fe", null).exports,
            bt = n("UHKw"),
            _t = n("b/Al"),
            wt = n.n(_t),
            kt = {
                props: {
                    data: [Boolean, Object]
                },
                methods: {
                    onClose: function() {
                        this.$emit("close")
                    }
                }
            };
        var Ct = function(e) {
                n("8EGg")
            },
            xt = Object(F.a)(kt, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [n("div", {
                    staticClass: "modal-wrapper"
                }, [n("ins", {
                    staticClass: "modal-overlay",
                    on: {
                        click: e.onClose
                    }
                }), e._v(" "), n("div", {
                    staticClass: "modal"
                }, [n("div", {
                    staticClass: "inner"
                }, [n("div", {
                    staticClass: "header"
                }, [e._t("title", [e._v("\n            Modal title\n          ")], {
                    data: e.data
                })], 2), e._v(" "), e._t("body", [e._v("\n          Modal body\n        ")], {
                    data: e.data
                })], 2)])])])
            }, [], !1, Ct, "data-v-a9797ea4", null).exports,
            Et = {
                name: "report-comment-form",
                props: {
                    comment: Object
                },
                data: function() {
                    return {
                        reason: ""
                    }
                },
                methods: j()({}, Object(D.b)(["enqueueNotification"]), {
                    getFormattedTime: Se.b,
                    reportAbuse: function() {
                        var e = this;
                        return c()(r.a.mark(function t() {
                            var n, i, a, s, o;
                            return r.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ((n = e.reason.trim()).length) {
                                            t.next = 4;
                                            break
                                        }
                                        return e.enqueueNotification({
                                            type: "alert",
                                            text: "請填寫檢舉原因",
                                            duration: 3e3
                                        }), t.abrupt("return");
                                    case 4:
                                        return t.next = 6, e.$recaptcha("report_comment");
                                    case 6:
                                        return i = t.sent, a = e.comment.id, t.next = 10, x.b.reportCommentAbuse({
                                            id: a,
                                            reason: n,
                                            token: i
                                        });
                                    case 10:
                                        s = t.sent, 412 === (o = s.status) ? alert("無法通過 reCAPTCHA 測試，請重新載入頁面後重試") : 200 === o && e.enqueueNotification({
                                            type: "info",
                                            text: "感謝你的回報<br>我們會盡快檢查相關的評論<br>如發現有不當內容會盡快刪除",
                                            duration: 1e4
                                        }), e.$emit("submitted");
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e)
                        }))()
                    }
                })
            };
        var St = function(e) {
                n("DGRE")
            },
            Lt = Object(F.a)(Et, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "report-form"
                }, [n("div", {
                    staticClass: "row"
                }, [e._v("\n    評論內容："), n("span", {
                    domProps: {
                        innerHTML: e._s(e.comment.text)
                    }
                })]), e._v(" "), n("div", {
                    staticClass: "row"
                }, [e._v("\n    出現時間：" + e._s(e.getFormattedTime(e.comment.time)) + "\n  ")]), e._v(" "), n("div", {
                    staticClass: "row"
                }, [e._v("\n    檢舉原因："), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.reason,
                        expression: "reason"
                    }],
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: e.reason
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.reason = t.target.value)
                        }
                    }
                })]), e._v(" "), n("div", {
                    staticClass: "button",
                    on: {
                        click: e.reportAbuse
                    }
                }, [n("i", {
                    staticClass: "fe-chevron-right"
                })]), e._v(" "), e._m(0)])
            }, [function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "recaptcha-terms"
                }, [this._v("\n    This site is protected by reCAPTCHA and the Google\n    "), t("a", {
                    attrs: {
                        href: "https://policies.google.com/privacy",
                        target: "_blank"
                    }
                }, [this._v("Privacy Policy")]), this._v(" and\n    "), t("a", {
                    attrs: {
                        href: "https://policies.google.com/terms",
                        target: "_blank"
                    }
                }, [this._v("Terms of Service")]), this._v(" apply.\n  ")])
            }], !1, St, "data-v-3ac3875a", null).exports,
            Mt = document.createElement("div"),
            Tt = {
                name: "comments",
                components: {
                    Modal: xt,
                    ReportCommentForm: Lt,
                    MarqueeText: wt.a
                },
                props: {
                    vdata: {
                        type: Object,
                        required: !0
                    },
                    player: {
                        type: Object,
                        required: !1
                    },
                    danmakuRef: {
                        type: Object,
                        required: !1
                    }
                },
                sockets: {
                    purgeMessage: function(e) {
                        this.messageList = this.messageList.filter(function(t) {
                            return t.id !== e
                        })
                    },
                    newMessage: function(e) {
                        var t = this.normalizeMessage(e),
                            n = this.getIndexForInsert(t.time);
                        this.messageList.splice(n, 0, t), this.emitDanmaku(t)
                    }
                },
                data: function() {
                    return {
                        showComments: !1,
                        isSendingMessage: !1,
                        isCollapsed: !1,
                        reportModalData: null,
                        messageList: [],
                        marqueePaused: !0
                    }
                },
                computed: j()({}, Object(D.e)(["user", "isCommentsSided"]), {
                    isMobileCollapsed: function() {
                        return !this.showComments && !this.isCommentsSided
                    },
                    roomId: function() {
                        return this.vdata.roomId
                    },
                    epLength: function() {
                        return this.vdata.epLength
                    }
                }),
                methods: j()({}, Object(D.b)(["enqueueNotification"]), {
                    getFormattedTime: Se.b,
                    getFullDate: Se.c,
                    getRelativeDate2: Se.e,
                    sendMessage: function() {
                        var e = this;
                        if (!this.isSendingMessage) {
                            var t = this.$refs.textInput,
                                n = t.value.slice(0, 60).trim(),
                                i = parseFloat((this.player.video.currentTime / this.epLength).toFixed(8));
                            if (!(i <= 0 || i >= 1)) {
                                var a = function() {
                                    t.className = "", window.requestAnimationFrame(function() {
                                        t.className = "invalid", clearTimeout(t.ito), t.ito = setTimeout(function() {
                                            t.className = "", delete t.ito
                                        }, 600)
                                    })
                                };
                                n.length < 1 ? a() : (this.isSendingMessage = !0, this.$socket.emit("send-message", {
                                    text: n,
                                    offset: i,
                                    length: this.epLength
                                }, function(n) {
                                    var i = n.status;
                                    406 === i ? (e.enqueueNotification({
                                        type: "alert",
                                        text: "請稍候再試",
                                        duration: 2e3
                                    }), a()) : (403 === i ? e.enqueueNotification({
                                        type: "alert",
                                        text: "你的帳號曾發表不當評論<br>因此不能再發表評論<br>如有問題，請與我們聯絡",
                                        duration: 8e3
                                    }) : 429 === i ? (e.enqueueNotification({
                                        type: "alert",
                                        text: "評論發送太頻繁",
                                        duration: 2500
                                    }), a()) : 200 !== i && console.log("cannot send message", i), t.value = ""), e.isSendingMessage = !1
                                }))
                            }
                        }
                    },
                    getIndexForInsert: function(e) {
                        for (var t = 0, n = this.messageList.length; t < n;) {
                            var i = t + n >>> 1;
                            this.messageList[i].time < e ? t = i + 1 : n = i
                        }
                        return t
                    },
                    setInitialMessages: function(e) {
                        this.messageList = e.map(this.normalizeMessage), this.messageList.forEach(this.emitDanmaku)
                    },
                    emitDanmaku: function(e) {
                        var t = e.text,
                            n = e.time;
                        this.danmakuRef.emit(n, t)
                    },
                    onDateClick: function(e) {
                        try {
                            window.dmtool(this.roomId, e)
                        } catch (e) {}
                    },
                    normalizeMessage: function(e) {
                        return e.text = bt.a.parse(e.text, {
                            callback: function(e) {
                                switch (e) {
                                    case "a9":
                                    case "ae":
                                    case "2122":
                                    case "2642":
                                    case "2640":
                                        return !1;
                                    default:
                                        return "/static/emoji/" + e + ".png"
                                }
                            }
                        }), e.text = e.text.replace(/((\d:)?(\d{1,2}:\d{1,2}))/g, function(e, t) {
                            return '<a href="#seekToTime">' + t + "</a>"
                        }), Mt.innerHTML = e.text, e.title = Mt.textContent, e.time = this.epLength * e.offset, e
                    },
                    jumpTo: function(e) {
                        this.player.video.currentTime = Math.max(0, e - .5)
                    },
                    handleCommentTimeSeek: function(e) {
                        if ("A" === e.target.nodeName && "#seekToTime" === e.target.hash) {
                            e.preventDefault();
                            for (var t = e.target.textContent.split(":"), n = 0, i = 1; t.length > 0;) n += i * +t.pop(), i *= 60;
                            this.jumpTo(n)
                        }
                    }
                }),
                watch: {
                    roomId: function(e, t) {
                        var n = this;
                        this.$socket.emit("leave-chatroom", t, function() {
                            n.setInitialMessages([]), n.$socket.emit("join-chatroom", e, function(e) {
                                var t = e.messages;
                                n.setInitialMessages(t)
                            })
                        })
                    }
                },
                beforeDestroy: function() {
                    this.$socket.emit("leave-chatroom", this.roomId, function() {}), document.removeEventListener("click", this.handleCommentTimeSeek)
                },
                mounted: function() {
                    var e = this;
                    ! function t() {
                        setTimeout(function() {
                            e.marqueePaused = !1, setTimeout(function() {
                                e.marqueePaused = !0, t()
                            }, 2e4)
                        }, 2500)
                    }(), this.$socket.emit("join-chatroom", this.roomId, function(t) {
                        var n = t.messages;
                        e.setInitialMessages(n)
                    }), document.addEventListener("click", this.handleCommentTimeSeek)
                }
            };
        var jt = function(e) {
                n("69wS")
            },
            Dt = Object(F.a)(Tt, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    class: {
                        comments: !0, "collapsed-mobile": e.isMobileCollapsed
                    }
                }, [n("div", {
                    staticClass: "chat-block"
                }, [n("div", {
                    class: {
                        inner: !0, collapsed: e.isCollapsed
                    }
                }, [n("recycle-scroller", {
                    staticClass: "scroller",
                    attrs: {
                        items: e.messageList,
                        "item-height": 35,
                        buffer: 800
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            var i = t.item;
                            return n("div", {
                                staticClass: "chat-row"
                            }, [n("span", {
                                staticClass: "time"
                            }, [n("time", {
                                on: {
                                    click: function(t) {
                                        e.jumpTo(i.time)
                                    }
                                }
                            }, [e._v(e._s(e.getFormattedTime(i.time)))])]), e._v(" "), n("span", {
                                staticClass: "text",
                                attrs: {
                                    title: i.title
                                },
                                domProps: {
                                    innerHTML: e._s(i.text)
                                }
                            }), e._v(" "), n("span", {
                                staticClass: "date",
                                attrs: {
                                    title: e.getFullDate(i.date)
                                }
                            }, [n("time", [e._v(e._s(e.getRelativeDate2(i.date)))]), e._v(" "), n("span", {
                                staticClass: "actions"
                            }, [n("i", {
                                staticClass: "fe-flag",
                                on: {
                                    click: function(t) {
                                        e.reportModalData = i
                                    }
                                }
                            })])])])
                        }
                    }])
                }), e._v(" "), n("form", {
                    on: {
                        submit: function(t) {
                            return t.preventDefault(), e.sendMessage(t)
                        }
                    }
                }, [n("input", {
                    ref: "textInput",
                    attrs: {
                        type: "text"
                    }
                }), e._v(" "), e.user ? n("div", {
                    staticClass: "send-tips"
                }, [n("marquee-text", {
                    attrs: {
                        paused: e.marqueePaused,
                        duration: 20,
                        repeat: 2
                    }
                }, [n("span", [e._v("請勿發送罵戰/劇透/洗版/廣告等評論，一經發現或被檢舉核實後，將會刪除相關評論甚至封鎖帳號。如發現不當評論，點擊右方的時間即可檢舉。　　　　")])])], 1) : n("div", {
                    staticClass: "guest-padding"
                }), e._v(" "), e.user ? e._e() : n("div", {
                    staticClass: "guest-message"
                }, [n("router-link", {
                    attrs: {
                        to: {
                            name: "account"
                        }
                    }
                }, [e._v("登入後即可發表評論 ( ´･ω･)")])], 1)])], 1), e._v(" "), e.isCommentsSided && e.isCollapsed ? n("div", {
                    staticClass: "comments-collapsed"
                }, [e._m(0)]) : e._e(), e._v(" "), e.isCommentsSided ? n("div", {
                    staticClass: "collapse-toggle",
                    on: {
                        click: function(t) {
                            e.isCollapsed = !e.isCollapsed
                        }
                    }
                }, [e._v("\n      " + e._s(e.isCollapsed ? "顯示評論 (" + e.messageList.length + ")" : "隱藏評論") + "\n    ")]) : e._e()]), e._v(" "), e.isMobileCollapsed ? n("div", {
                    staticClass: "expand",
                    on: {
                        click: function(t) {
                            e.showComments = !0
                        }
                    }
                }, [e._v("顯示留言")]) : e._e(), e._v(" "), e.reportModalData ? n("modal", {
                    attrs: {
                        data: e.reportModalData
                    },
                    on: {
                        close: function(t) {
                            e.reportModalData = null
                        }
                    }
                }, [n("template", {
                    slot: "title"
                }, [n("span", {
                    on: {
                        click: function(t) {
                            e.onDateClick(e.reportModalData)
                        }
                    }
                }, [e._v("檢舉評論")])]), e._v(" "), n("template", {
                    slot: "body"
                }, [n("report-comment-form", {
                    attrs: {
                        comment: e.reportModalData
                    },
                    on: {
                        submitted: function(t) {
                            e.reportModalData = null
                        }
                    }
                })], 1)], 2) : e._e()], 1)
            }, [function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", [t("i", {
                    staticClass: "fe-bell-off"
                }), this._v(" "), t("h1", [this._v("評論已隱藏")]), this._v(" "), t("span", [this._v("需要專心看動畫嗎？ ( ´ω` )")])])
            }], !1, jt, "data-v-eebac5c2", null).exports,
            Ot = n("zm4s"),
            Rt = {
                name: "danmaku",
                props: {
                    onReference: {
                        type: Function,
                        required: !0
                    },
                    player: {
                        type: Object,
                        required: !1
                    },
                    vdata: {
                        type: Object,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        danmaku: null,
                        resizeListener: null
                    }
                },
                computed: j()({}, Object(D.e)({
                    showDanmaku: function(e) {
                        return e.playerConfig.danmaku
                    }
                })),
                methods: {
                    recreate: function() {
                        var e = this;
                        return c()(r.a.mark(function t() {
                            return r.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e.danmaku && (e.$refs.danmakuContainer.removeChild(e.danmaku.stage), e.danmaku.destroy(), e.danmaku = null), t.next = 3, e.$nextTick();
                                    case 3:
                                        e.danmaku = new Ot.a({
                                            container: e.$refs.danmakuContainer,
                                            video: e.player.video
                                        });
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e)
                        }))()
                    },
                    emit: function(e, t) {
                        this.danmaku && this.danmaku.emit({
                            time: e,
                            render: function() {
                                var e = document.createElement("div");
                                return e.className = "danmaku", e.innerHTML = t, e
                            }
                        })
                    }
                },
                watch: {
                    vdata: function() {
                        this.recreate()
                    }
                },
                mounted: function() {
                    var e = this;
                    this.onReference(this), this.recreate(), this.resizeListener = R()(function() {
                        e.danmaku && e.danmaku.resize()
                    }, 100), window.addEventListener("resize", this.resizeListener)
                },
                beforeDestroy: function() {
                    window.removeEventListener("resize", this.resizeListener)
                }
            };
        var It = function(e) {
                n("utDo")
            },
            Pt = Object(F.a)(Rt, function() {
                var e = this.$createElement;
                return (this._self._c || e)("div", {
                    ref: "danmakuContainer",
                    staticClass: "danmaku-container",
                    style: {
                        display: this.showDanmaku ? "block" : "none"
                    }
                })
            }, [], !1, It, "data-v-3f411ecb", null).exports,
            At = {
                name: "anime-page",
                components: {
                    Ads: I.a,
                    Loader: A.a,
                    Playerx: yt,
                    Comments: Dt,
                    Danmaku: Pt
                },
                data: function() {
                    return {
                        playerRef: null,
                        danmakuRef: null,
                        vdata: null,
                        activeSeasonId: null,
                        activeEpisodeId: null,
                        playlist: null,
                        loaded: !1,
                        isSafari: navigator.userAgent.indexOf("Safari") > 0 && navigator.userAgent.indexOf("Chrome") < 0,
                        hasPlayedAnEpisode: !1,
                        watchHistoryEntries: []
                    }
                },
                computed: j()({}, Object(D.e)(["user", "isCommentsSided", "isMobile"]), {
                    watchHistory: function() {
                        var e = this;
                        return this.watchHistoryEntries.find(function(t) {
                            return t.seasonId === e.activeSeason.id
                        })
                    },
                    activeSeason: function() {
                        var e = this;
                        if (!this.playlist || !this.activeSeasonId) return {};
                        var t = this.playlist.seasons.find(function(t) {
                            return t.id === e.activeSeasonId
                        });
                        return t = j()({}, t, {
                            poster: "https://seaside.ebb.io/" + t.anime_id + "x" + t.id + ".jpg"
                        }), t
                    },
                    activeEpisode: function() {
                        var e = this;
                        return this.activeSeason.episodes.find(function(t) {
                            return t.id === e.activeEpisodeId
                        })
                    },
                    nextEpisode: function() {
                        var e = this,
                            t = this.activeSeason.episodes.findIndex(function(t) {
                                return t.id === e.activeEpisodeId
                            });
                        return this.activeSeason.episodes[t - 1]
                    },
                    activeSeasonStudios: function() {
                        return this.activeSeason.studio.split(/\r?\n/)
                    },
                    shareUrl: function() {
                        var e = this.playlist.anime.name_chi + " " + this.activeSeason.season_title;
                        return e = (e = e.replace(/((?![\sa-z0-9\u3000\u3400-\u4DBF\u4E00-\u9FFF]).)/gi, " ")).trim().replace(/\s{1,}/g, "-"), "https://ebb.io/anime/" + this.playlist.anime.id + "x" + this.activeSeason.id + "/" + e
                    }
                }),
                methods: j()({}, Object(D.b)(["enqueueNotification"]), {
                    spliddit: Ee.a,
                    getFormattedDate: Se.a,
                    hexToRgb: function(e) {
                        var t = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)].join(",")
                    },
                    linkPlayerRef: function(e) {
                        this.playerRef = e, this.playerRef.pageComponent = this
                    },
                    linkDanmakuRef: function(e) {
                        this.danmakuRef = e
                    },
                    play: function(e) {
                        var t = e.id,
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.activeEpisode && this.activeEpisode.id === t || (this.activeEpisodeId = t, this.vdata = {
                            src: this.activeEpisode.sl,
                            roomId: Ce()(this.activeSeason.id + ":" + this.activeEpisode.title),
                            epLength: this.activeEpisode.duration,
                            title: this.playlist.anime.name_chi + " " + this.activeSeason.season_title + " " + this.activeEpisode.title
                        }, this.watchHistory && this.watchHistory.title === this.activeEpisode.title ? this.playerRef.startTime = this.watchHistory.time : (this.updateWatchHistory(this.activeSeason.id, this.activeEpisode.title, 0), this.playerRef.startTime = 0), !n || this.isSafari && !this.hasPlayedAnEpisode ? this.playerRef.autoPlay = !1 : this.playerRef.autoPlay = !0, this.hasPlayedAnEpisode || (this.hasPlayedAnEpisode = !0))
                    },
                    routeChange: function() {
                        var e = this;
                        return c()(r.a.mark(function t() {
                            var n, i;
                            return r.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.playlist.anime, i = document.title.split(" - ")[1], e.activeSeasonId = +e.$route.params.seasonId, document.title = n.name_chi + " " + e.activeSeason.season_title + " - " + i, document.querySelector('meta[name="description"]').content = "ebb 提供 " + n.name_chi + " " + e.activeSeason.season_title + " 的全集動畫，" + (new Date).getFullYear() + " 年線上新番及已完結舊番隨你點播。 作品介紹：" + n.description, t.next = 7, e.$nextTick();
                                    case 7:
                                        e.$root.$emit("pageload");
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, e)
                        }))()
                    },
                    restoreWatchHistory: function() {
                        if (this.watchHistory) {
                            var e = this.watchHistory.title,
                                t = this.activeSeason.episodes.find(function(t) {
                                    return t.title === e
                                });
                            this.play(t, this.$route.params.autoPlay || !1)
                        }
                    },
                    updateWatchHistory: function(e, t, n) {
                        var i = this;
                        return c()(r.a.mark(function a() {
                            var s;
                            return r.a.wrap(function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (i.user) {
                                            a.next = 2;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 2:
                                        return a.next = 4, x.b.updateWatchHistory({
                                            seasonId: e,
                                            title: t,
                                            time: n
                                        });
                                    case 4:
                                        if (s = a.sent, 200 === s.status) {
                                            a.next = 9;
                                            break
                                        }
                                        return i.enqueueNotification({
                                            type: "alert",
                                            text: "同步播放記錄時發生錯誤",
                                            duration: 3e3
                                        }), a.abrupt("return");
                                    case 9:
                                        i.watchHistoryEntries = i.watchHistoryEntries.filter(function(t) {
                                            return t.seasonId !== e
                                        }).concat({
                                            seasonId: e,
                                            title: t,
                                            time: n
                                        });
                                    case 10:
                                    case "end":
                                        return a.stop()
                                }
                            }, a, i)
                        }))()
                    },
                    removeWatchHistory: function(e) {
                        var t = this;
                        return c()(r.a.mark(function n() {
                            var i;
                            return r.a.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, x.b.removeWatchHistory({
                                            seasonId: e
                                        });
                                    case 2:
                                        if (i = n.sent, 200 === i.status) {
                                            n.next = 7;
                                            break
                                        }
                                        return t.enqueueNotification({
                                            type: "alert",
                                            text: "同步播放記錄時發生錯誤",
                                            duration: 3e3
                                        }), n.abrupt("return");
                                    case 7:
                                        t.watchHistoryEntries = t.watchHistoryEntries.filter(function(t) {
                                            return t.seasonId !== e
                                        });
                                    case 8:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, t)
                        }))()
                    },
                    actionShare: function(e) {
                        var t = e.currentTarget;
                        window.ga("send", "event", "Share", "method", t.parentNode.className), window.ga("send", "event", "Share", "season", this.playlist.anime.name_chi + " " + this.activeSeason.season_title)
                    },
                    copyShareUrl: function() {
                        var e = this.$refs.copyArea;
                        e.focus(), e.setSelectionRange(0, e.value.length), document.execCommand("copy") && (this.enqueueNotification({
                            type: "info",
                            text: "已複製分享連結",
                            duration: 2500
                        }), e.blur())
                    },
                    loadSeason: function(e) {
                        var t = this;
                        return c()(r.a.mark(function n() {
                            var i, a, s, o, c, u, l, d;
                            return r.a.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, x.b.fetchSeason(e);
                                    case 2:
                                        if (i = n.sent, a = i.status, s = i.list, 404 !== a) {
                                            n.next = 7;
                                            break
                                        }
                                        throw new Error("404");
                                    case 7:
                                        if (!t.user) {
                                            n.next = 15;
                                            break
                                        }
                                        return o = s.seasons.map(function(e) {
                                            return e.id
                                        }), n.next = 11, x.b.fetchSeasonsWatchHistory(o);
                                    case 11:
                                        c = n.sent, u = c.status, l = c.data, 200 === u && (t.watchHistoryEntries = l);
                                    case 15:
                                        if (t.playlist = s, !t.watchHistory) {
                                            n.next = 21;
                                            break
                                        }
                                        if (d = t.watchHistory.title, !(t.activeSeason.episodes.map(function(e) {
                                                return e.title
                                            }).indexOf(d) < 0)) {
                                            n.next = 21;
                                            break
                                        }
                                        return n.next = 21, t.removeWatchHistory(t.activeSeason.id);
                                    case 21:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, t)
                        }))()
                    }
                }),
                mounted: function() {
                    var e = this;
                    return c()(r.a.mark(function t() {
                        var n, i, a, s;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.$route.params, t.prev = 1, t.next = 4, e.loadSeason(n.animeId);
                                case 4:
                                    return e.routeChange(), e.loaded = !0, t.next = 8, e.$nextTick();
                                case 8:
                                    return t.next = 10, x.b.fetchPageSpecials(e.activeSeasonId);
                                case 10:
                                    i = t.sent, (a = i.js) && new Function(a)(), e.restoreWatchHistory(), e.isMobile && ((s = document.querySelector(".playlist.seasons > .active")).parentNode.scrollLeft = s.offsetLeft), t.next = 21;
                                    break;
                                case 17:
                                    t.prev = 17, t.t0 = t.catch(1), console.log(t.t0), e.$router.replace({
                                        path: "/404"
                                    });
                                case 21:
                                case "end":
                                    return t.stop()
                            }
                        }, t, e, [
                            [1, 17]
                        ])
                    }))()
                },
                beforeDestroy: function() {
                    this.activeEpisode && (this.updateWatchHistory(this.activeSeasonId, this.activeEpisode.title, this.playerRef.video.currentTime), this.playerRef.video.pause(), this.playerRef.player.destroy(), this.playerRef.engine.destroy()), this.playerRef = null
                },
                watch: {
                    $route: function() {
                        this.routeChange()
                    }
                }
            };
        var $t = function(e) {
                n("uFkZ")
            },
            zt = Object(F.a)(At, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    class: {
                        page: e.loaded
                    }
                }, [e.loaded ? e._e() : n("loader"), e._v(" "), e.loaded ? n("div", [n("var", {
                    attrs: {
                        "data-mark": ""
                    }
                }), e._v(" "), n("div", {
                    staticClass: "player-container"
                }, [n("div", {
                    staticClass: "player-container-inner"
                }, [n("div", {
                    staticClass: "player",
                    style: {
                        opacity: e.activeEpisodeId ? 1 : 0
                    }
                }, [n("playerx", {
                    attrs: {
                        "on-reference": e.linkPlayerRef,
                        vdata: e.vdata
                    }
                }), e._v(" "), e.isCommentsSided ? n("portal-target", {
                    attrs: {
                        slim: "",
                        name: "comments"
                    }
                }) : e._e()], 1), e._v(" "), e.activeEpisodeId ? e._e() : n("div", {
                    staticClass: "message"
                }, [e._v("\n          目前沒有正在播放的項目 "), e._m(0)])])]), e._v(" "), e.isCommentsSided ? e._e() : n("portal-target", {
                    attrs: {
                        slim: "",
                        name: "comments"
                    }
                }), e._v(" "), n("div", {
                    staticClass: "jouhou"
                }, [n("div", {
                    staticClass: "info"
                }, [n("div", {
                    staticClass: "info-inner"
                }, [n("header", [n("div", {
                    staticClass: "image",
                    style: {
                        backgroundImage: "url(" + e.activeSeason.poster + ")"
                    }
                }), e._v(" "), n("div", {
                    staticClass: "titles"
                }, [n("h1", e._l(e.spliddit(e.playlist.anime.name_chi), function(t) {
                    return n("s", [e._v(e._s(t))])
                })), e._v(" "), n("h2", e._l(e.spliddit(e.playlist.anime.name_jpn), function(t) {
                    return n("s", [e._v(e._s(t))])
                }))])]), e._v(" "), n("div", {
                    staticClass: "desc"
                }, [e._v("\n            " + e._s(e.playlist.anime.description) + "\n          ")]), e._v(" "), n("div", {
                    staticClass: "row"
                }, [n("span", [e._v("原　　作")]), e._v(" "), n("ins"), e._v(" "), n("span", [e._v(e._s(e.playlist.anime.author))])]), e._v(" "), n("div", {
                    staticClass: "row"
                }, [n("span", [e._v("動畫製作")]), e._v(" "), n("ins"), e._v(" "), n("div", {
                    staticClass: "tags"
                }, e._l(e.activeSeasonStudios, function(t) {
                    return n("router-link", {
                        key: t,
                        attrs: {
                            to: {
                                path: "/browse/studio/" + t
                            }
                        }
                    }, [e._v(e._s(t))])
                }))]), e._v(" "), n("div", {
                    staticClass: "row"
                }, [n("span", [e._v("最後更新")]), e._v(" "), n("ins"), e._v(" "), n("span", [e._v(e._s(e.getFormattedDate(e.activeSeason.last_updated, "YYYY 年 M 月 D 日")))])]), e._v(" "), n("div", {
                    staticClass: "row"
                }, [n("span", [e._v("作品類別")]), e._v(" "), n("ins"), e._v(" "), n("div", {
                    staticClass: "tags"
                }, e._l(e.playlist.anime.tags, function(t) {
                    return n("router-link", {
                        key: t.id,
                        style: {
                            background: "rgba(" + e.hexToRgb(t.color) + ",.2)",
                            boxShadow: "0 0 0 1px rgba(" + e.hexToRgb(t.color) + ",.7)"
                        },
                        attrs: {
                            to: {
                                path: "/browse/tag/" + t.name
                            }
                        }
                    }, [e._v(e._s(t.name))])
                }))]), e._v(" "), n("div", {
                    staticClass: "row"
                }, [n("span", [e._v("分　　享")]), e._v(" "), n("ins"), e._v(" "), n("div", {
                    staticClass: "sharer"
                }, [n("div", {
                    staticClass: "facebook"
                }, [n("a", {
                    attrs: {
                        href: "https://www.facebook.com/sharer/sharer.php?u=" + e.shareUrl,
                        target: "_blank"
                    },
                    on: {
                        click: e.actionShare
                    }
                }, [n("svg", {
                    staticStyle: {
                        width: "20px",
                        height: "20px"
                    },
                    attrs: {
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
                    }
                })])])]), e._v(" "), n("div", {
                    staticClass: "twitter"
                }, [n("a", {
                    attrs: {
                        href: "https://twitter.com/intent/tweet?text=" + e.shareUrl,
                        target: "_blank"
                    },
                    on: {
                        click: e.actionShare
                    }
                }, [n("svg", {
                    staticStyle: {
                        width: "20px",
                        height: "20px"
                    },
                    attrs: {
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                    }
                })])])]), e._v(" "), n("div", {
                    staticClass: "telegram"
                }, [n("a", {
                    attrs: {
                        href: "tg://msg_url?url=" + e.shareUrl,
                        target: "_blank"
                    },
                    on: {
                        click: e.actionShare
                    }
                }, [n("svg", {
                    staticStyle: {
                        width: "20px",
                        height: "20px"
                    },
                    attrs: {
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z"
                    }
                })])])]), e._v(" "), n("div", {
                    staticClass: "whatsapp"
                }, [n("a", {
                    attrs: {
                        href: "whatsapp://send?text=" + e.shareUrl,
                        target: "_blank"
                    },
                    on: {
                        click: e.actionShare
                    }
                }, [n("svg", {
                    staticStyle: {
                        width: "20px",
                        height: "20px"
                    },
                    attrs: {
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.54 15.3,16.56C14.84,16.58 14.83,16.92 12.34,15.83C9.85,14.74 8.35,12.08 8.23,11.91C8.11,11.74 7.27,10.53 7.31,9.3C7.36,8.08 8,7.5 8.26,7.26C8.5,7 8.77,6.97 8.94,7H9.41C9.56,7 9.77,6.94 9.96,7.45L10.65,9.32C10.71,9.45 10.75,9.6 10.66,9.76L10.39,10.17L10,10.59C9.88,10.71 9.74,10.84 9.88,11.09C10,11.35 10.5,12.18 11.2,12.87C12.11,13.75 12.91,14.04 13.15,14.17C13.39,14.31 13.54,14.29 13.69,14.13L14.5,13.19C14.69,12.94 14.85,13 15.08,13.08L16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.72 4.54,15.31 5.46,16.61L4.5,19.5L7.39,18.54C8.69,19.46 10.28,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"
                    }
                })])])]), e._v(" "), n("div", {
                    staticClass: "copy"
                }, [n("textarea", {
                    ref: "copyArea",
                    staticClass: "hidden",
                    attrs: {
                        readonly: ""
                    }
                }, [e._v(e._s(e.shareUrl))]), e._v(" "), n("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: [function(t) {
                            return t.preventDefault(), e.copyShareUrl(t)
                        }, e.actionShare]
                    }
                }, [n("svg", {
                    staticStyle: {
                        width: "20px",
                        height: "20px"
                    },
                    attrs: {
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
                    }
                })])])])])])])]), e._v(" "), n("ul", {
                    staticClass: "playlist seasons"
                }, e._l(e.playlist.seasons, function(t) {
                    return n("li", {
                        key: t.id,
                        class: {
                            active: t.id === e.activeSeason.id
                        }
                    }, [n("router-link", {
                        attrs: {
                            replace: "",
                            to: {
                                name: "anime",
                                params: {
                                    animeId: e.playlist.anime.id,
                                    seasonId: t.id
                                }
                            }
                        }
                    }, [e._v("\n            " + e._s(t.season_title) + "\n          ")])], 1)
                })), e._v(" "), n("ul", {
                    staticClass: "playlist episodes"
                }, e._l(e.activeSeason.episodes, function(t) {
                    return n("li", {
                        key: t.id,
                        class: {
                            active: t.id === e.activeEpisodeId
                        }
                    }, [n("a", {
                        attrs: {
                            href: "/anime/" + e.playlist.anime.id + "x" + e.activeSeason.id + "?ep=" + t.title
                        },
                        on: {
                            click: function(n) {
                                n.preventDefault(), e.play(t)
                            }
                        }
                    }, [e._v("\n            " + e._s(t.title) + "\n            "), e.watchHistory && e.watchHistory.title === t.title ? n("i", {
                        staticClass: "fe-clock"
                    }) : e._e()])])
                }))]), e._v(" "), n("div", {
                    staticClass: "split-ads"
                }, [n("div", {
                    staticClass: "info-ads"
                }, [n("ads", {
                    attrs: {
                        type: "ucf_leaderboard",
                        size: {
                            width: 728,
                            height: 90
                        }
                    }
                })], 1), e._v(" "), n("div", {
                    staticClass: "shrinked-ads"
                }, [n("ads", {
                    attrs: {
                        type: "iit_banner",
                        size: {
                            width: 440,
                            height: 120
                        }
                    }
                })], 1)])], 1) : e._e(), e._v(" "), n("portal", {
                    attrs: {
                        to: "comments"
                    }
                }, [e.vdata ? n("comments", {
                    attrs: {
                        vdata: e.vdata,
                        player: e.playerRef,
                        "danmaku-ref": e.danmakuRef
                    }
                }) : e._e()], 1), e._v(" "), n("portal", {
                    attrs: {
                        to: "danmaku"
                    }
                }, [e.vdata ? n("danmaku", {
                    attrs: {
                        vdata: e.vdata,
                        "on-reference": e.linkDanmakuRef,
                        player: e.playerRef
                    }
                }) : e._e()], 1)], 1)
            }, [function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("sup", {
                    staticStyle: {
                        "margin-bottom": "1rem"
                    }
                }, [this._v("z"), t("sup", [this._v("z"), t("sup", [this._v("z")])])])
            }], !1, $t, "data-v-1f36f23c", null).exports,
            Ft = {
                name: "not-found-page",
                data: function() {
                    var e = ["https://i.imgur.com/aVF4YLY.png", "https://i.imgur.com/caeXjQK.gif", "https://i.imgur.com/P5hlCVV.png", "https://i.imgur.com/OJvbuFY.png", "https://i.imgur.com/MSRKiJ9.gif", "https://i.imgur.com/pkHGGox.gif", "https://i.imgur.com/Zrtfeac.gif"];
                    return {
                        randomImage: e[Math.floor(Math.random() * e.length)]
                    }
                },
                mounted: function() {
                    var e = this;
                    return c()(r.a.mark(function t() {
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.$nextTick();
                                case 2:
                                    e.$root.$emit("pageload");
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                }
            };
        var Ht = function(e) {
                n("MaZ1")
            },
            Nt = Object(F.a)(Ft, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("var", {
                    attrs: {
                        "data-mark": ""
                    }
                }), e._v(" "), n("div", {
                    staticClass: "image",
                    style: {
                        backgroundImage: "url(" + e.randomImage + ")"
                    }
                }), e._v(" "), n("h1", [e._v("/* error four hundred and four */")]), e._v(" "), n("h2", [e._v("此網頁不存在 (ﾟдﾟ )")]), e._v(" "), n("router-link", {
                    staticClass: "link",
                    attrs: {
                        to: {
                            name: "index"
                        }
                    }
                }, [e._v("返回首頁")])], 1)
            }, [], !1, Ht, "data-v-72b77904", null).exports;
        f.default.use(ie.a);
        var qt = new ie.a({
                mode: "history",
                routes: [{
                    path: "/",
                    name: "index",
                    component: we,
                    meta: {
                        title: "新番連載"
                    }
                }, {
                    path: "/account/login",
                    name: "login",
                    component: function() {
                        return n.e(9).then(n.bind(null, "UmZ3"))
                    },
                    meta: {
                        title: "登入",
                        requiresNoAuth: !0
                    }
                }, {
                    path: "/account",
                    name: "account",
                    component: function() {
                        return n.e(8).then(n.bind(null, "RKqV"))
                    },
                    meta: {
                        title: "帳號",
                        requiresAuth: !0
                    }
                }, {
                    path: "/anime",
                    redirect: "/browse/all"
                }, {
                    path: "/search",
                    name: "search",
                    component: function() {
                        return n.e(6).then(n.bind(null, "gar3"))
                    },
                    meta: {
                        title: "搜尋"
                    }
                }, {
                    path: "/search\\:sbi",
                    name: "what-anime",
                    component: function() {
                        return n.e(3).then(n.bind(null, "bJ1U"))
                    },
                    meta: {
                        title: "以圖搜尋"
                    }
                }, {
                    path: "/watch-history",
                    name: "watch-history",
                    component: function() {
                        return n.e(5).then(n.bind(null, "Mhsm"))
                    },
                    meta: {
                        title: "播放紀錄",
                        requiresAuth: !0
                    }
                }, {
                    path: "/about",
                    name: "about",
                    component: function() {
                        return n.e(7).then(n.bind(null, "lje2"))
                    },
                    meta: {
                        title: "關於"
                    }
                }, {
                    path: "/timeline",
                    name: "timeline",
                    component: function() {
                        return n.e(0).then(n.bind(null, "AVqc"))
                    },
                    meta: {
                        title: "動畫時間軸"
                    }
                }, {
                    path: "/anime/:animeId(\\d+)x:seasonId(\\d+)(/.*)?",
                    name: "anime",
                    component: zt,
                    meta: {
                        title: "讀取中"
                    }
                }, {
                    path: "/article/:title",
                    name: "article",
                    component: function() {
                        return n.e(4).then(n.bind(null, "F+t3"))
                    },
                    meta: {
                        title: "專題介紹"
                    }
                }, {
                    path: "/browse/:path(.*[^/])",
                    name: "directory",
                    component: function() {
                        return n.e(2).then(n.bind(null, "b9lL"))
                    },
                    meta: {
                        title: "動畫列表"
                    }
                }, {
                    path: "*",
                    name: "not-found",
                    component: Nt,
                    meta: {
                        title: "404"
                    }
                }]
            }),
            Ut = (n("89K5"), n("0K64"), n("X8hh"), n("VM32"), this),
            Bt = b.a.connect(x.a.replace("http:", "ws:").replace("https:", "wss:").replace("/_", ""), {
                transports: ["websocket"],
                upgrade: !1
            });
        f.default.use(g.a), f.default.use(new w.a({
            connection: Bt
        })), f.default.use(k.a, {
            siteKey: "6LfNBYIUAAAAALW1i2wUUzoSnggqR4ZHpHttNuVA"
        }), f.default.component("RecycleScroller", C.a), f.default.config.productionTip = !1;
        var Wt, Xt = document.title,
            Vt = document.querySelector('meta[name="description"]').content.replace("2018", (new Date).getFullYear()),
            Yt = void 0,
            Gt = new l.a(function(e) {
                Yt = e
            }),
            Kt = !0,
            Qt = l.a.resolve(),
            Zt = void 0,
            Jt = l.a.resolve(),
            en = void 0;
        qt.beforeEach((Wt = c()(r.a.mark(function e(t, n, i) {
            return r.a.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, Gt;
                    case 2:
                        if (!t.meta.requiresAuth || ne.state.user) {
                            e.next = 7;
                            break
                        }
                        return i("/account/login"), e.abrupt("return");
                    case 7:
                        if (!t.meta.requiresNoAuth || !ne.state.user) {
                            e.next = 10;
                            break
                        }
                        return i("/account"), e.abrupt("return");
                    case 10:
                        return Kt = !("directory" === n.name && "directory" === t.name || "search" === n.name && "search" === t.name || "anime" === n.name && "anime" === t.name), e.next = 13, Jt;
                    case 13:
                        Qt = new l.a(function(e) {
                            Zt = e, Kt && document.querySelector("#app main").classList.add("pageleave"), setTimeout(function() {
                                Kt && (document.querySelector("#app main").classList.remove("pageleave"), document.querySelector("#app main").classList.add("pagehidden")), Zt(), i()
                            }, Kt ? 250 : 0)
                        });
                    case 14:
                    case "end":
                        return e.stop()
                }
            }, e, Ut)
        })), function(e, t, n) {
            return Wt.apply(this, arguments)
        }));
        var tn, nn = void 0,
            an = new l.a(function(e) {
                nn = e
            });
        qt.afterEach((tn = c()(r.a.mark(function e(t) {
            var n, i;
            return r.a.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return an = new l.a(function(e) {
                            nn = e
                        }), n = t.meta.title, document.title = (n ? n + " - " : "") + Xt, document.querySelector('meta[name="description"]').content = Vt, i = t.path + (a()(t.query).length > 0 ? "?" : "") + p.a.stringify(t.query), e.next = 7, l.a.all([an, Qt]);
                    case 7:
                        Jt = new l.a(function(e) {
                            en = e, Kt && (document.querySelector("#app main").classList.remove("pagehidden"), document.querySelector("#app main").classList.add("pageenter")), setTimeout(function() {
                                Kt && document.querySelector("#app main").classList.remove("pageenter"), en()
                            }, Kt ? 250 : 0)
                        }), window.requestAnimationFrame(function() {
                            window.ga("set", "page", i), window.ga("send", "pageview"), window.dispatchEvent(new CustomEvent("routechange"))
                        }, 50);
                    case 9:
                    case "end":
                        return e.stop()
                }
            }, e, Ut)
        })), function(e) {
            return tn.apply(this, arguments)
        }));
        var sn = new f.default({
            el: "#app",
            router: qt,
            store: ne,
            render: function(e) {
                return e(X)
            }
        });
        sn.$on("appload", function() {
            return Yt()
        }), sn.$on("pageload", function() {
            return nn()
        });
        var rn = [];
        document.addEventListener("scroll", h.a.debounce(function() {
            for (var e = .1 * window.innerHeight, t = function(t, n) {
                    var i = n[t],
                        a = i.getAttribute("data-deferred-src");
                    if (rn.indexOf(a) >= 0) return i.style.backgroundImage = "url(" + a + ")", i.style.opacity = 1, "continue";
                    var s = i.getBoundingClientRect();
                    if (!(s.top + e >= 0 && s.top - e <= window.innerHeight)) return "continue";
                    var r = new Image;
                    r.onload = function() {
                        return window.requestAnimationFrame(function() {
                            rn.push(a), i.style.backgroundImage = "url(" + a + ")", i.style.opacity = 1
                        })
                    }, r.onerror = function() {
                        return i.removeAttribute("data-deferred-src")
                    }, r.src = a
                }, n = 0, i = document.querySelectorAll("[data-deferred-src]"); n < i.length; n += 1) t(n, i)
        }, 75), !0);
        if (/applewebkit/i.test(navigator.userAgent) && "ebb.io" === window.location.hostname) {
            var on = new Image;
            on.onload = function() {
                setTimeout(console.log.bind(console, "> [NERvGear] Initializing... 0%"), 0), setTimeout(console.log.bind(console, "> [NERvGear] Initializing... 20%"), 800), setTimeout(console.log.bind(console, "> [NERvGear] Initializing... 40%"), 1800), setTimeout(console.log.bind(console, "> [NERvGear] Initializing... 70%"), 2600), setTimeout(console.log.bind(console, "> [NERvGear] Initializing... 90%"), 3800), setTimeout(function() {
                    var e = console.log;
                    console.log = function() {}, setTimeout(console.clear.bind(console), 0), setTimeout(e.bind(console, "> [NERvGear] Do you want to start linking? (yes/no)"), 0), Object.defineProperty(window, "yes", {
                        get: function() {
                            return function() {
                                setTimeout(e.bind(console, "> [NERvGear] Preparing linkage..."), 0);
                                var t = "background: url(data:image/svg+xml;base64," + btoa('\n        <svg viewBox="0 0 70 16" xmlns="http://www.w3.org/2000/svg">\n          <style>\n            .type { font: 11px monospace; }\n            @keyframes typing {\n              0%, 10% { x: 6; }\n              29.9%, 20% { x: 12; }\n              39.9%, 30% { x: 20; }\n              49.9%, 40% { x: 26; }\n              59.9%, 50% { x: 32; }\n              69.9%, 60% { x: 40; }\n              79.9%, 70% { x: 46; }\n              89.9%, 80% { x: 53; }\n              99.9%, 90% { x: 60; }\n              100% { x: 70; }\n            }\n            .l {\n              animation: typing 1.5s .5s linear;\n              animation-fill-mode: forwards;\n              fill: #fff;\n              x: 0;\n              y: 2;\n              height: 11px;\n              width: 70px;\n            }\n          </style>\n\n          <text x="0" y="11px" class="type">link start</text>\n          <g>\n            <rect class="l" />\n          </g>\n        </svg>\n      ') + ") left top no-repeat; font-size: 1rem";
                                setTimeout(e.bind(console, "%c                   ", t), 500);
                                var n = void 0,
                                    i = new l.a(function(e) {
                                        n = e
                                    });
                                setTimeout(e.bind(console, i), 3e3), setTimeout(e.bind(console, "%c　　", "background: url(https://na.cx/i/4H7WswK.gif) left top no-repeat; background-size: 240px; font: 120px Arial"), 4e3), setTimeout(function() {
                                    n("https://ebb.io/anime/104x147"), setTimeout(e.bind(console, i), 0)
                                }, 7100)
                            }(), !0
                        }
                    }), Object.defineProperty(window, "no", {
                        get: function() {
                            return setTimeout(e.bind(console, "> [NERvGear] Do you want to start linking? (yes/no)"), 0), !1
                        }
                    }), console.log = e
                }, 4300)
            }, on.src = "https://na.cx/i/4H7WswK.gif"
        } else setTimeout(console.log.bind(console, "> [NERvGear] Unsupported Environment"), 0)
    },
    O9Uj: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return c
        }), n.d(t, "a", function() {
            return u
        }), n.d(t, "c", function() {
            return l
        }), n.d(t, "d", function() {
            return d
        }), n.d(t, "e", function() {
            return h
        }), n.d(t, "f", function() {
            return f
        });
        var i = n("//Fk"),
            a = n.n(i),
            s = n("PJh5"),
            r = n.n(s),
            o = n("BbgG");
        n.n(o);
        r.a.locale("zh-tw");
        var c = function(e) {
                return r()().startOf("day").seconds(e).format(e >= 3600 ? "H:mm:ss" : "m:ss")
            },
            u = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD";
                return r()(e).format(t)
            },
            l = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
                return r()(e).format(t)
            },
            d = function(e) {
                return r()(e).fromNow()
            },
            h = function(e) {
                var t = Date.now() - new Date(e);
                return t < 6e4 ? Math.round(t / 1e3) + "s" : t < 36e5 ? Math.round(t / 6e4) + "m" : t < 864e5 ? Math.round(t / 36e5) + "h" : t < 2592e6 ? Math.round(t / 864e5) + "d" : t < 31536e6 ? r()(e).format("MM.DD") : Math.round(t / 31536e6) + "y"
            },
            f = function(e) {
                return new a.a(function(t) {
                    return setTimeout(t, e)
                })
            }
    },
    O9Wa: function(e, t) {},
    OUrN: function(e, t, n) {
        e.exports = n.p + "static/img/ebuko-sprite_2.4f2af3a.png"
    },
    "P/5B": function(e, t) {},
    PKq6: function(e, t) {},
    TuST: function(e, t) {},
    Ty2L: function(e, t, n) {
        "use strict";
        var i = n("M4fF"),
            a = {
                name: "plark",
                data: function() {
                    return {
                        offsetX: 0,
                        previousMouseDownTime: 0,
                        doubleClickDetected: !1,
                        lockingBrowserNavigation: !1,
                        lockBrowserNavigationTimeout: null,
                        dragged: null,
                        dragStartPosition: null,
                        isDragging: null,
                        scrollDirection: null,
                        scrollDirectionResetTimer: null,
                        ticker: null,
                        timestamp: null,
                        frame: null,
                        target: null,
                        amplitude: null,
                        velocity: null
                    }
                },
                methods: {
                    updateOffsetXBy: function(e) {
                        var t = this.$refs.inner,
                            n = t.scrollWidth,
                            i = t.clientWidth,
                            a = this.offsetX - e;
                        a = Math.min(0, a), a = Math.max(-1 * (n - i), a), this.offsetX = a, this.$refs.inner.style.transform = "translateX(" + this.offsetX + "px)"
                    },
                    handleMousewheel: n.n(i).a.throttle(function(e) {
                        var t = this,
                            n = e.deltaX,
                            i = e.deltaY,
                            a = Math.abs(n),
                            s = Math.abs(i) > a ? 1 : -1,
                            r = 1 === s,
                            o = this.$refs.inner,
                            c = o.scrollWidth,
                            u = o.clientWidth,
                            l = e.deltaX < 0 && 0 === this.offsetX,
                            d = e.deltaX > 0 && this.offsetX === -(c - u);
                        if (this.lockingBrowserNavigation || r || !l && !d) {
                            if (!this.scrollDirection) return r || e.preventDefault(), void(this.scrollDirection = s);
                            e.preventDefault(), this.lockingBrowserNavigation = !0, clearTimeout(this.lockBrowserNavigationTimeout), this.lockBrowserNavigationTimeout = setTimeout(function() {
                                t.lockingBrowserNavigation = !1
                            }, 75), clearInterval(this.ticker), this.amplitude = null, clearTimeout(this.scrollDirectionResetTimer), this.scrollDirectionResetTimer = setTimeout(function() {
                                t.scrollDirection = null
                            }, 25), r ? window.scrollBy(0, i) : (this.timestamp = Date.now() - 80, this.amplitude = -n, this.target = Math.round(this.offsetX + this.amplitude), this.autoScroll())
                        }
                    }, 10),
                    track: function() {
                        var e = Date.now(),
                            t = e - this.timestamp;
                        this.timestamp = e;
                        var n = this.offsetX - this.frame;
                        this.frame = this.offsetX;
                        var i = n / (t + 1) * 400;
                        this.velocity = .35 * i + .65 * this.velocity
                    },
                    autoScroll: function() {
                        if (this.amplitude) {
                            var e = Date.now() - this.timestamp,
                                t = -this.amplitude * Math.exp(-e / 125);
                            t > .5 || t < -.5 ? (this.updateOffsetXBy(this.offsetX - (this.target + t)), setTimeout(this.autoScroll, 1e3 / 59)) : (this.updateOffsetXBy(this.offsetX - this.target), this.amplitude = null)
                        }
                    },
                    onDown: function(e) {
                        window.getSelection().removeAllRanges(), this.$el.removeAttribute("data-no-select");
                        var t = "touchstart" === e.type;
                        if (!t) {
                            var n = this.previousMouseDownTime;
                            if (this.previousMouseDownTime = Date.now(), this.previousMouseDownTime - n <= 250) return void(this.doubleClickDetected = !0)
                        }
                        this.$el.setAttribute("data-no-select", ""), this.dragStartPosition = {
                            x: t ? e.touches[0].clientX : e.clientX,
                            y: t ? e.touches[0].clientY : e.clientY
                        }, this.dragged = 0, this.amplitude = null, this.velocity = 0, this.frame = this.offsetX, this.timestamp = Date.now(), this.isDragging = !0, clearInterval(this.ticker), this.ticker = setInterval(this.track, 20)
                    },
                    onTouchMove: function(e) {
                        if (this.isDragging) {
                            var t = e.touches[0].clientX - this.dragStartPosition.x,
                                n = e.touches[0].clientY - this.dragStartPosition.y;
                            this.scrollDirection || (this.scrollDirection = Math.abs(n) > Math.abs(t) ? 1 : -1), 1 !== this.scrollDirection && (this.updateOffsetXBy(-t - this.dragged), this.dragged = -t, e.preventDefault(), e.stopPropagation())
                        }
                    },
                    onMouseMove: function(e) {
                        if (this.isDragging && !this.doubleClickDetected) {
                            var t = e.clientX - this.dragStartPosition.x,
                                n = e.clientY - this.dragStartPosition.y;
                            0 === t && 0 === n || (this.updateOffsetXBy(-t - this.dragged), this.dragged = -t)
                        }
                    },
                    onEnd: function() {
                        this.isDragging && (clearInterval(this.ticker), this.scrollDirection = null, this.isDragging = !1, this.doubleClickDetected = !1, (this.velocity > 10 || this.velocity < -10) && (this.amplitude = .8 * this.velocity, this.target = Math.round(this.offsetX + this.amplitude), this.autoScroll()))
                    }
                },
                mounted: function() {
                    document.addEventListener("touchmove", this.onTouchMove), document.addEventListener("touchend", this.onEnd), document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseup", this.onEnd)
                },
                beforeDestroy: function() {
                    this.amplitude = null, document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseup", this.onEnd)
                }
            },
            s = n("XyMi");
        var r = function(e) {
                n("nr3j")
            },
            o = Object(s.a)(a, function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "plark",
                    on: {
                        mousewheel: this.handleMousewheel,
                        mousedown: this.onDown,
                        touchstart: this.onDown,
                        contextmenu: this.onEnd
                    }
                }, [t("div", {
                    ref: "inner",
                    staticClass: "inner"
                }, [this._t("default")], 2)])
            }, [], !1, r, "data-v-658af8ce", null);
        t.a = o.exports
    },
    Uf11: function(e, t) {},
    WQx6: function(e, t) {},
    WUyN: function(e, t) {},
    WaO5: function(e, t, n) {
        e.exports = n.p + "static/img/ebuko-sprite_1.c0d5afd.png"
    },
    YJfw: function(e, t) {},
    c4Tg: function(e, t, n) {
        "use strict";
        var i = n("M4fF"),
            a = n.n(i),
            s = n("O9Uj"),
            r = {
                name: "anime-list-renderer",
                components: {
                    Ads: n("BB2M").a
                },
                props: {
                    items: {
                        type: Array,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        adSize: null,
                        resizeListener: null,
                        adMod: 7,
                        adStartPos: 1
                    }
                },
                watch: {
                    items: function() {
                        document.dispatchEvent(new window.Event("scroll"))
                    }
                },
                methods: {
                    getFormattedDate: s.a,
                    getPoster: function(e) {
                        return "https://seaside.ebb.io/" + e.anime_id + "x" + e.season_id + ".jpg"
                    },
                    getAdsType: function() {
                        return "iit_hpgrid_native"
                    }
                },
                mounted: function() {
                    var e = this;
                    this.resizeListener = a.a.debounce(function() {
                        var t = e.$el.children[0].getBoundingClientRect(),
                            n = t.width,
                            i = t.height;
                        n = Math.round(n), i = Math.round(i), e.adSize = {
                            width: n,
                            height: i
                        }
                    }, 150), window.addEventListener("resize", this.resizeListener), this.resizeListener(), this.adStartPos = Math.round(Math.random() * this.adMod), document.dispatchEvent(new window.Event("scroll"))
                },
                beforeDestroy: function() {
                    window.removeEventListener("resize", this.resizeListener)
                }
            },
            o = n("XyMi");
        var c = function(e) {
                n("cW+I")
            },
            u = Object(o.a)(r, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("ul", [e._l(e.items, function(t, i) {
                    return [i % e.adMod === e.adStartPos ? n("li", [e.adSize ? n("ads", {
                        attrs: {
                            type: e.getAdsType(),
                            size: e.adSize
                        }
                    }) : e._e()], 1) : e._e(), e._v(" "), n("li", {
                        key: t.anime_id
                    }, [n("router-link", {
                        attrs: {
                            to: {
                                name: "anime",
                                params: {
                                    animeId: t.anime_id,
                                    seasonId: t.season_id
                                }
                            }
                        }
                    }, [n("div", {
                        staticClass: "image-container"
                    }, [n("div", {
                        staticClass: "image",
                        attrs: {
                            "data-deferred-src": e.getPoster(t)
                        }
                    })]), e._v(" "), n("div", {
                        staticClass: "desc"
                    }, [n("h1", {
                        staticClass: "title",
                        attrs: {
                            title: t.name_chi
                        }
                    }, [e._v(e._s(t.name_chi))]), e._v(" "), n("div", {
                        staticClass: "meta"
                    }, [n("div", [e._v("季度：" + e._s(t.season_title))]), e._v(" "), n("div", [e._v("集數：" + e._s(t.episode_title))]), e._v(" "), n("div", [e._v("最後更新：" + e._s(e.getFormattedDate(t.last_updated)))])])])])], 1)]
                })], 2)
            }, [], !1, c, "data-v-3c2f21b0", null);
        t.a = u.exports
    },
    "cW+I": function(e, t) {},
    czzF: function(e, t, n) {
        "use strict";
        var i = n("Xxa5"),
            a = n.n(i),
            s = n("exGp"),
            r = n.n(s),
            o = n("//Fk"),
            c = n.n(o),
            u = n("WaO5"),
            l = n.n(u),
            d = n("OUrN"),
            h = n.n(d),
            f = n("LbrN"),
            m = n.n(f),
            p = n("MCa2"),
            v = n.n(p),
            g = n("pFle"),
            y = n.n(g),
            b = {
                name: "ebuko",
                data: function() {
                    return {
                        context: null,
                        flag: null,
                        disappearing: !1,
                        currentFrameAborting: !1
                    }
                },
                methods: {
                    loadResource: function(e) {
                        var t = e.src,
                            n = e.frameCount,
                            i = e.fps;
                        return new c.a(function(e) {
                            var a = new Image;
                            a.onload = function() {
                                return e({
                                    image: a,
                                    frameCount: n,
                                    fps: i
                                })
                            }, a.src = t
                        })
                    },
                    draw: function(e, t) {
                        var n = this,
                            i = e.image,
                            a = e.frameCount,
                            s = this.$el,
                            r = s.width,
                            o = s.height,
                            c = i.height / a * t,
                            u = i.width / (i.width / r),
                            l = i.height / (i.height / o);
                        window.requestAnimationFrame(function() {
                            n.context.clearRect(0, 0, r, o), n.context.drawImage(i, 0, c, i.width, i.height, 0, 0, u, l * a)
                        })
                    },
                    drawCycle: function(e) {
                        var t = this;
                        return new c.a(function(n) {
                            var i = 0,
                                a = setInterval(function() {
                                    t.draw(e, i), i += 1, (t.currentFrameAborting || i === e.frameCount) && (clearInterval(a), n())
                                }, 1e3 / e.fps)
                        })
                    },
                    onAction: function() {
                        "action" !== this.flag && (this.flag = "action", this.currentFrameAborting = !0)
                    }
                },
                mounted: function() {
                    var e = this;
                    return r()(a.a.mark(function t() {
                        var n, i, s, o, c, u, d, f, p, g;
                        return a.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.$el, e.context = n.getContext("2d"), i = n.width, s = n.height, n.width = i * window.devicePixelRatio, n.height = s * window.devicePixelRatio, n.style.width = i + "px", n.style.height = s + "px", e.context.imageSmoothingQuality = "medium", t.next = 10, e.loadResource({
                                        src: l.a,
                                        frameCount: 18,
                                        fps: 14
                                    });
                                case 10:
                                    return o = t.sent, t.next = 13, e.loadResource({
                                        src: h.a,
                                        frameCount: 19,
                                        fps: 14
                                    });
                                case 13:
                                    return c = t.sent, t.next = 16, e.loadResource({
                                        src: m.a,
                                        frameCount: 18,
                                        fps: 14
                                    });
                                case 16:
                                    return u = t.sent, t.next = 19, e.loadResource({
                                        src: v.a,
                                        frameCount: 39,
                                        fps: 18
                                    });
                                case 19:
                                    return d = t.sent, t.next = 22, e.loadResource({
                                        src: y.a,
                                        frameCount: 36,
                                        fps: 18
                                    });
                                case 22:
                                    f = t.sent, (p = function t(n, i) {
                                        if (!e.disappearing) {
                                            var a = Math.round(400 * Math.random() + n - 200);
                                            setTimeout(function() {
                                                i(), t(n, i)
                                            }, a)
                                        }
                                    })(5e3, function() {
                                        null === e.flag && (e.flag = Math.random() > .6 ? "smile" : "blink")
                                    }), p(3e4, function() {
                                        e.flag = "happy"
                                    }), (g = function() {
                                        var t = r()(a.a.mark(function t() {
                                            return a.a.wrap(function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (!e.disappearing) {
                                                            t.next = 2;
                                                            break
                                                        }
                                                        return t.abrupt("return");
                                                    case 2:
                                                        t.t0 = e.flag, t.next = "blink" === t.t0 ? 5 : "smile" === t.t0 ? 9 : "happy" === t.t0 ? 13 : "action" === t.t0 ? 17 : 21;
                                                        break;
                                                    case 5:
                                                        return t.next = 7, e.drawCycle(c);
                                                    case 7:
                                                        return e.currentFrameAborting || (e.flag = null), t.abrupt("break", 23);
                                                    case 9:
                                                        return t.next = 11, e.drawCycle(u);
                                                    case 11:
                                                        return e.currentFrameAborting || (e.flag = null), t.abrupt("break", 23);
                                                    case 13:
                                                        return t.next = 15, e.drawCycle(d);
                                                    case 15:
                                                        return e.currentFrameAborting || (e.flag = null), t.abrupt("break", 23);
                                                    case 17:
                                                        return t.next = 19, e.drawCycle(f);
                                                    case 19:
                                                        return e.currentFrameAborting || (e.flag = null), t.abrupt("break", 23);
                                                    case 21:
                                                        return t.next = 23, e.drawCycle(o);
                                                    case 23:
                                                        e.currentFrameAborting = !1, g();
                                                    case 25:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }, t, e)
                                        }));
                                        return function() {
                                            return t.apply(this, arguments)
                                        }
                                    }())();
                                case 28:
                                case "end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                },
                beforeDestroy: function() {
                    this.disappearing = !0
                }
            },
            _ = n("XyMi"),
            w = Object(_.a)(b, function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("canvas", {
                    attrs: {
                        "data-ebuko": "",
                        width: "110",
                        height: "176"
                    },
                    on: {
                        contextmenu: function(e) {
                            e.preventDefault()
                        },
                        click: function(t) {
                            return t.preventDefault(), e.onAction(t)
                        }
                    }
                })
            }, [], !1, null, null, null);
        t.a = w.exports
    },
    dGjB: function(e, t) {},
    fGdu: function(e, t) {},
    fxLM: function(e, t) {},
    mO4b: function(e, t) {},
    mqSy: function(e, t) {},
    n5Qe: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return v
        });
        var i = n("Xxa5"),
            a = n.n(i),
            s = n("exGp"),
            r = n.n(s),
            o = n("mvHQ"),
            c = n.n(o),
            u = n("fZjL"),
            l = n.n(u),
            d = n("mtWM"),
            h = n.n(d),
            f = n("TOa9"),
            m = n.n(f),
            p = this,
            v = window.location.origin.replace("8080", "80") + "/_";
        FormData.prototype.appendRecursive = function(e) {
            var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            l()(e).forEach(function(i) {
                var a = n ? n + "[" + i + "]" : i;
                e[i] instanceof File ? t.append(a, e[i]) : e[i] instanceof Array || e[i] instanceof Object ? t.appendRecursive(e[i], a) : t.append(a, c()(e[i]))
            })
        };
        var g, y = {},
            b = (g = r()(a.a.mark(function e(t, n) {
                var i, s, r, o, c, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return a.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (i = null, s = null, y[r = t + " " + n] && y[r].cancel("Operation cancelled by another request."), y[r] = h.a.CancelToken.source(), null === u) {
                                e.next = 15;
                                break
                            }
                            e.t0 = t, e.next = "get" === e.t0 ? 9 : "delete" === e.t0 ? 11 : "patch" === e.t0 ? 11 : "post" === e.t0 ? 11 : "put" === e.t0 ? 11 : 14;
                            break;
                        case 9:
                            return i = u, e.abrupt("break", 15);
                        case 11:
                            return (s = new FormData).appendRecursive(u), e.abrupt("break", 15);
                        case 14:
                            return e.abrupt("break", 15);
                        case 15:
                            return e.prev = 15, e.next = 18, h()({
                                method: t,
                                url: v + n,
                                params: i,
                                data: s,
                                withCredentials: !0,
                                cancelToken: y[r].token
                            });
                        case 18:
                            return o = e.sent, c = o.data, e.abrupt("return", JSON.parse(m.a.decompressFromUTF16(c)));
                        case 23:
                            throw e.prev = 23, e.t1 = e.catch(15), console.log(e.t1), e.t1;
                        case 27:
                            return e.prev = 27, delete y[r], e.finish(27);
                        case 30:
                        case "end":
                            return e.stop()
                    }
                }, e, p, [
                    [15, 23, 27, 30]
                ])
            })), function(e, t) {
                return g.apply(this, arguments)
            });
        t.b = {
            logout: function() {
                return b("post", "/logout")
            },
            fetchUser: function() {
                return b("get", "/user")
            },
            fetchSeasonsWatchHistory: function(e) {
                return b("post", "/seasons_watch_history", e)
            },
            fetchHPData: function() {
                return b("get", "/hpdata")
            },
            fetchAnimeList: function(e) {
                return b("get", "/anime_list", e)
            },
            fetchSeason: function(e) {
                return b("get", "/season_list/" + e)
            },
            fetchPageSpecials: function(e) {
                return b("get", "/anime_page_sp/" + e)
            },
            fetchSearchResults: function(e) {
                return b("post", "/search", {
                    query: e
                })
            },
            fetchTimelineAnimeList: function(e, t) {
                return b("post", "/timeline_anime_list", {
                    year: e,
                    season: t
                })
            },
            fetchArticle: function(e) {
                return b("get", "/article/" + e)
            },
            fetchWatchHistory: function() {
                return b("get", "/watch_history")
            },
            updateWatchHistory: function(e) {
                return b("post", "/update_watch_history", e)
            },
            removeWatchHistory: function(e) {
                return b("post", "/remove_watch_history", e)
            },
            reportCommentAbuse: function(e) {
                return b("post", "/report_comment", e)
            }
        }
    },
    ndgF: function(e, t) {},
    nr3j: function(e, t) {},
    oMza: function(e, t) {},
    pFle: function(e, t, n) {
        e.exports = n.p + "static/img/ebuko-sprite_5.dad6dd8.png"
    },
    qHym: function(e, t) {},
    uFkZ: function(e, t) {},
    uslO: function(e, t, n) {
        var i = {
            "./af": "3CJN",
            "./af.js": "3CJN",
            "./ar": "3MVc",
            "./ar-dz": "tkWw",
            "./ar-dz.js": "tkWw",
            "./ar-kw": "j8cJ",
            "./ar-kw.js": "j8cJ",
            "./ar-ly": "wPpW",
            "./ar-ly.js": "wPpW",
            "./ar-ma": "dURR",
            "./ar-ma.js": "dURR",
            "./ar-sa": "7OnE",
            "./ar-sa.js": "7OnE",
            "./ar-tn": "BEem",
            "./ar-tn.js": "BEem",
            "./ar.js": "3MVc",
            "./az": "eHwN",
            "./az.js": "eHwN",
            "./be": "3hfc",
            "./be.js": "3hfc",
            "./bg": "lOED",
            "./bg.js": "lOED",
            "./bm": "hng5",
            "./bm.js": "hng5",
            "./bn": "aM0x",
            "./bn.js": "aM0x",
            "./bo": "w2Hs",
            "./bo.js": "w2Hs",
            "./br": "OSsP",
            "./br.js": "OSsP",
            "./bs": "aqvp",
            "./bs.js": "aqvp",
            "./ca": "wIgY",
            "./ca.js": "wIgY",
            "./cs": "ssxj",
            "./cs.js": "ssxj",
            "./cv": "N3vo",
            "./cv.js": "N3vo",
            "./cy": "ZFGz",
            "./cy.js": "ZFGz",
            "./da": "YBA/",
            "./da.js": "YBA/",
            "./de": "DOkx",
            "./de-at": "8v14",
            "./de-at.js": "8v14",
            "./de-ch": "Frex",
            "./de-ch.js": "Frex",
            "./de.js": "DOkx",
            "./dv": "rIuo",
            "./dv.js": "rIuo",
            "./el": "CFqe",
            "./el.js": "CFqe",
            "./en-au": "Sjoy",
            "./en-au.js": "Sjoy",
            "./en-ca": "Tqun",
            "./en-ca.js": "Tqun",
            "./en-gb": "hPuz",
            "./en-gb.js": "hPuz",
            "./en-ie": "ALEw",
            "./en-ie.js": "ALEw",
            "./en-il": "QZk1",
            "./en-il.js": "QZk1",
            "./en-nz": "dyB6",
            "./en-nz.js": "dyB6",
            "./eo": "Nd3h",
            "./eo.js": "Nd3h",
            "./es": "LT9G",
            "./es-do": "7MHZ",
            "./es-do.js": "7MHZ",
            "./es-us": "INcR",
            "./es-us.js": "INcR",
            "./es.js": "LT9G",
            "./et": "XlWM",
            "./et.js": "XlWM",
            "./eu": "sqLM",
            "./eu.js": "sqLM",
            "./fa": "2pmY",
            "./fa.js": "2pmY",
            "./fi": "nS2h",
            "./fi.js": "nS2h",
            "./fo": "OVPi",
            "./fo.js": "OVPi",
            "./fr": "tzHd",
            "./fr-ca": "bXQP",
            "./fr-ca.js": "bXQP",
            "./fr-ch": "VK9h",
            "./fr-ch.js": "VK9h",
            "./fr.js": "tzHd",
            "./fy": "g7KF",
            "./fy.js": "g7KF",
            "./gd": "nLOz",
            "./gd.js": "nLOz",
            "./gl": "FuaP",
            "./gl.js": "FuaP",
            "./gom-latn": "+27R",
            "./gom-latn.js": "+27R",
            "./gu": "rtsW",
            "./gu.js": "rtsW",
            "./he": "Nzt2",
            "./he.js": "Nzt2",
            "./hi": "ETHv",
            "./hi.js": "ETHv",
            "./hr": "V4qH",
            "./hr.js": "V4qH",
            "./hu": "xne+",
            "./hu.js": "xne+",
            "./hy-am": "GrS7",
            "./hy-am.js": "GrS7",
            "./id": "yRTJ",
            "./id.js": "yRTJ",
            "./is": "upln",
            "./is.js": "upln",
            "./it": "FKXc",
            "./it.js": "FKXc",
            "./ja": "ORgI",
            "./ja.js": "ORgI",
            "./jv": "JwiF",
            "./jv.js": "JwiF",
            "./ka": "RnJI",
            "./ka.js": "RnJI",
            "./kk": "j+vx",
            "./kk.js": "j+vx",
            "./km": "5j66",
            "./km.js": "5j66",
            "./kn": "gEQe",
            "./kn.js": "gEQe",
            "./ko": "eBB/",
            "./ko.js": "eBB/",
            "./ky": "6cf8",
            "./ky.js": "6cf8",
            "./lb": "z3hR",
            "./lb.js": "z3hR",
            "./lo": "nE8X",
            "./lo.js": "nE8X",
            "./lt": "/6P1",
            "./lt.js": "/6P1",
            "./lv": "jxEH",
            "./lv.js": "jxEH",
            "./me": "svD2",
            "./me.js": "svD2",
            "./mi": "gEU3",
            "./mi.js": "gEU3",
            "./mk": "Ab7C",
            "./mk.js": "Ab7C",
            "./ml": "oo1B",
            "./ml.js": "oo1B",
            "./mn": "CqHt",
            "./mn.js": "CqHt",
            "./mr": "5vPg",
            "./mr.js": "5vPg",
            "./ms": "ooba",
            "./ms-my": "G++c",
            "./ms-my.js": "G++c",
            "./ms.js": "ooba",
            "./mt": "oCzW",
            "./mt.js": "oCzW",
            "./my": "F+2e",
            "./my.js": "F+2e",
            "./nb": "FlzV",
            "./nb.js": "FlzV",
            "./ne": "/mhn",
            "./ne.js": "/mhn",
            "./nl": "3K28",
            "./nl-be": "Bp2f",
            "./nl-be.js": "Bp2f",
            "./nl.js": "3K28",
            "./nn": "C7av",
            "./nn.js": "C7av",
            "./pa-in": "pfs9",
            "./pa-in.js": "pfs9",
            "./pl": "7LV+",
            "./pl.js": "7LV+",
            "./pt": "ZoSI",
            "./pt-br": "AoDM",
            "./pt-br.js": "AoDM",
            "./pt.js": "ZoSI",
            "./ro": "wT5f",
            "./ro.js": "wT5f",
            "./ru": "ulq9",
            "./ru.js": "ulq9",
            "./sd": "fW1y",
            "./sd.js": "fW1y",
            "./se": "5Omq",
            "./se.js": "5Omq",
            "./si": "Lgqo",
            "./si.js": "Lgqo",
            "./sk": "OUMt",
            "./sk.js": "OUMt",
            "./sl": "2s1U",
            "./sl.js": "2s1U",
            "./sq": "V0td",
            "./sq.js": "V0td",
            "./sr": "f4W3",
            "./sr-cyrl": "c1x4",
            "./sr-cyrl.js": "c1x4",
            "./sr.js": "f4W3",
            "./ss": "7Q8x",
            "./ss.js": "7Q8x",
            "./sv": "Fpqq",
            "./sv.js": "Fpqq",
            "./sw": "DSXN",
            "./sw.js": "DSXN",
            "./ta": "+7/x",
            "./ta.js": "+7/x",
            "./te": "Nlnz",
            "./te.js": "Nlnz",
            "./tet": "gUgh",
            "./tet.js": "gUgh",
            "./tg": "5SNd",
            "./tg.js": "5SNd",
            "./th": "XzD+",
            "./th.js": "XzD+",
            "./tl-ph": "3LKG",
            "./tl-ph.js": "3LKG",
            "./tlh": "m7yE",
            "./tlh.js": "m7yE",
            "./tr": "k+5o",
            "./tr.js": "k+5o",
            "./tzl": "iNtv",
            "./tzl.js": "iNtv",
            "./tzm": "FRPF",
            "./tzm-latn": "krPU",
            "./tzm-latn.js": "krPU",
            "./tzm.js": "FRPF",
            "./ug-cn": "To0v",
            "./ug-cn.js": "To0v",
            "./uk": "ntHu",
            "./uk.js": "ntHu",
            "./ur": "uSe8",
            "./ur.js": "uSe8",
            "./uz": "XU1s",
            "./uz-latn": "/bsm",
            "./uz-latn.js": "/bsm",
            "./uz.js": "XU1s",
            "./vi": "0X8Q",
            "./vi.js": "0X8Q",
            "./x-pseudo": "e/KL",
            "./x-pseudo.js": "e/KL",
            "./yo": "YXlc",
            "./yo.js": "YXlc",
            "./zh-cn": "Vz2w",
            "./zh-cn.js": "Vz2w",
            "./zh-hk": "ZUyn",
            "./zh-hk.js": "ZUyn",
            "./zh-tw": "BbgG",
            "./zh-tw.js": "BbgG"
        };

        function a(e) {
            return n(s(e))
        }

        function s(e) {
            var t = i[e];
            if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
            return t
        }
        a.keys = function() {
            return Object.keys(i)
        }, a.resolve = s, e.exports = a, a.id = "uslO"
    },
    utDo: function(e, t) {},
    wd27: function(e, t, n) {
        "use strict";
        var i = {
                name: "loader",
                props: {
                    size: {
                        type: String,
                        required: !1,
                        default: "54px"
                    }
                }
            },
            a = n("XyMi");
        var s = function(e) {
                n("EJjF")
            },
            r = Object(a.a)(i, function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", [t("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: this.size,
                        height: this.size,
                        viewBox: "0 0 66 66"
                    }
                }, [t("g", {
                    attrs: {
                        transform: "rotate(251.552 33 33)"
                    }
                }, [t("animateTransform", {
                    attrs: {
                        attributeName: "transform",
                        type: "rotate",
                        values: "0 33 33;270 33 33",
                        begin: "0s",
                        dur: "1.4s",
                        fill: "freeze",
                        repeatCount: "indefinite"
                    }
                }), this._v(" "), t("circle", {
                    attrs: {
                        fill: "none",
                        "stroke-width": "5",
                        "stroke-linecap": "round",
                        cx: "33",
                        cy: "33",
                        r: "30",
                        "stroke-dasharray": "187",
                        "stroke-dashoffset": "610",
                        transform: "rotate(406.955 33 33)"
                    }
                }, [t("animate", {
                    attrs: {
                        attributeName: "stroke",
                        values: "#4285F4;#DE3E35;#F7C223;#1B9A59;#4285F4",
                        begin: "0s",
                        dur: "5.6s",
                        fill: "freeze",
                        repeatCount: "indefinite"
                    }
                }), this._v(" "), t("animateTransform", {
                    attrs: {
                        attributeName: "transform",
                        type: "rotate",
                        values: "0 33 33;135 33 33;450 33 33",
                        begin: "0s",
                        dur: "1.4s",
                        fill: "freeze",
                        repeatCount: "indefinite"
                    }
                }), this._v(" "), t("animate", {
                    attrs: {
                        attributeName: "stroke-dashoffset",
                        values: "187;46.75;187",
                        begin: "0s",
                        dur: "1.4s",
                        fill: "freeze",
                        repeatCount: "indefinite"
                    }
                })], 1)], 1)])])
            }, [], !1, s, "data-v-5410bb8c", null);
        t.a = r.exports
    },
    x6Cj: function(e, t) {}
}, ["NHnr"]);