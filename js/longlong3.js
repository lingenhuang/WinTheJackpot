        var template = function(t) {
            "use strict";

            function u(t) {
                return "function" == typeof t || "[object Function]" === e.call(t)
            }

            function f(t) {
                var e = function(t) {
                    var e = Number(t);
                    return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (0 < e ? 1 : -1) * Math.floor(Math.abs(e)) : e
                }(t);
                return Math.min(Math.max(e, 0), n)
            }
            var e, n;
            Array.from || (Array.from = (e = Object.prototype.toString, n = Math.pow(2, 53) - 1, function(t, e, n) {
                var r = Object(t);
                if (null == t) throw new TypeError("Array.from requires an array-like object - not null or undefined");
                var i, a = 1 < arguments.length ? e : void 0;
                if (void 0 !== a) {
                    if (!u(a)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                    2 < arguments.length && (i = n)
                }
                for (var o, c = f(r.length), s = u(this) ? Object(new this(c)) : new Array(c), l = 0; l < c;) o = r[l], s[l] = a ? void 0 === i ? a(o, l) : a.call(i, o, l) : o, l += 1;
                return s.length = c, s
            }));
            var d = {},
                _ = {
                    height_mode: "auto",
                    margin_right: 1,
                    margin_right_mobile: .5,
                    margin_bottom: 0,
                    margin_left: 1,
                    zoom_enabled: !1,
                    zoom_steps_to_show: 3,
                    zoom_y_axis: !1,
                    zoom_y_padding: 20,
                    color: {},
                    start_circle_r: .3,
                    end_circle_r: 1.5,
                    end_circle_stroke: .3,
                    end_circle_stroke_bg: !0,
                    circle_space_between: 2,
                    horse_images: !0,
                    hide_labels: !1,
                    label_font_size: 1,
                    label_color_mode: "auto",
                    label_color: null,
                    animate_scores: !0,
                    rank_font_size: 1,
                    rank_outside_picture: !0,
                    line_opacity: 1,
                    line_width: .3,
                    curve: "curveLinear",
                    shade: !0,
                    shade_opacity: .1,
                    shade_width: 1,
                    missing: !1,
                    missing_opacity: 1,
                    missing_stroke_dash: .2,
                    missing_width: 1.5,
                    stage_duration: 1500,
                    update_duration: 500,
                    value_type: "scores",
                    higher_scores_win: !0,
                    ties_mode: "competition",
                    target_position: null,
                    selected_horse: null,
                    mouseover_horse: null,
                    x_axis_label_color: null,
                    x_axis_label_size: .75,
                    x_axis_rotate: "45",
                    x_axis_show_hidden: !1,
                    y_axis_min: null,
                    y_axis_max: null,
                    y_axis_min_rank: null,
                    y_axis_max_rank: null,
                    y_axis_label_colors: null,
                    y_axis_label_size: .75,
                    y_axis_stroke_color: "#e0e1e1",
                    y_axis_stroke_dash: null,
                    y_axis_format: {
                        suffix: "%"
                    },
                    show_buttons: !0,
                    toggle_control: {
                        control_type: "buttons",
                        button_group_width_mode: "auto"
                    },
                    show_replay: !0,
                    filter_control: {},
                    filter_include_all: !0,
                    filter_all_label: "All",
                    filter_value: null,
                    label_ranks: "Ranks",
                    label_scores: "Scores",
                    label_replay: "Replay",
                    controls_style: {},
                    button_style: {
                        background_hover: "#eeeeee"
                    },
                    dropdown_style: {},
                    localization: {},
                    label_format: {},
                    layout: {}
                },
                r = "http://www.w3.org/1999/xhtml",
                i = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: r,
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                };

            function a(t) {
                var e = t += "",
                    n = e.indexOf(":");
                return 0 <= n && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), i.hasOwnProperty(e) ? {
                    space: i[e],
                    local: t
                } : t
            }

            function o(t) {
                var e = a(t);
                return (e.local ? function(t) {
                    return function() {
                        return this.ownerDocument.createElementNS(t.space, t.local)
                    }
                } : function(n) {
                    return function() {
                        var t = this.ownerDocument,
                            e = this.namespaceURI;
                        return e === r && t.documentElement.namespaceURI === r ? t.createElement(n) : t.createElementNS(e, n)
                    }
                })(e)
            }

            function c() {}

            function p(t) {
                return null == t ? c : function() {
                    return this.querySelector(t)
                }
            }

            function s() {
                return []
            }

            function y(t) {
                return null == t ? s : function() {
                    return this.querySelectorAll(t)
                }
            }

            function h(t) {
                return function() {
                    return this.matches(t)
                }
            }

            function l(t) {
                return new Array(t.length)
            }

            function b(t, e) {
                this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e
            }
            b.prototype = {
                constructor: b,
                appendChild: function(t) {
                    return this._parent.insertBefore(t, this._next)
                },
                insertBefore: function(t, e) {
                    return this._parent.insertBefore(t, e)
                },
                querySelector: function(t) {
                    return this._parent.querySelector(t)
                },
                querySelectorAll: function(t) {
                    return this._parent.querySelectorAll(t)
                }
            };
            var g = "$";

            function x(t, e, n, r, i, a) {
                for (var o, c = 0, s = e.length, l = a.length; c < l; ++c)(o = e[c]) ? (o.__data__ = a[c], r[c] = o) : n[c] = new b(t, a[c]);
                for (; c < s; ++c)(o = e[c]) && (i[c] = o)
            }

            function w(t, e, n, r, i, a, o) {
                var c, s, l, u = {},
                    f = e.length,
                    h = a.length,
                    d = new Array(f);
                for (c = 0; c < f; ++c)(s = e[c]) && (d[c] = l = g + o.call(s, s.__data__, c, e), l in u ? i[c] = s : u[l] = s);
                for (c = 0; c < h; ++c)(s = u[l = g + o.call(t, a[c], c, a)]) ? ((r[c] = s).__data__ = a[c], u[l] = null) : n[c] = new b(t, a[c]);
                for (c = 0; c < f; ++c)(s = e[c]) && u[d[c]] === s && (i[c] = s)
            }

            function m(t, e) {
                return t < e ? -1 : e < t ? 1 : e <= t ? 0 : NaN
            }

            function v(t) {
                return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
            }

            function M(t, e) {
                return t.style.getPropertyValue(e) || v(t).getComputedStyle(t, null).getPropertyValue(e)
            }

            function k(t) {
                return t.trim().split(/^|\s+/)
            }

            function T(t) {
                return t.classList || new A(t)
            }

            function A(t) {
                this._node = t, this._names = k(t.getAttribute("class") || "")
            }

            function C(t, e) {
                for (var n = T(t), r = -1, i = e.length; ++r < i;) n.add(e[r])
            }

            function N(t, e) {
                for (var n = T(t), r = -1, i = e.length; ++r < i;) n.remove(e[r])
            }

            function S() {
                this.textContent = ""
            }

            function E() {
                this.innerHTML = ""
            }

            function z() {
                this.nextSibling && this.parentNode.appendChild(this)
            }

            function D() {
                this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
            }

            function F() {
                return null
            }

            function L() {
                var t = this.parentNode;
                t && t.removeChild(this)
            }

            function P() {
                return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
            }

            function H() {
                return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
            }
            A.prototype = {
                add: function(t) {
                    this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
                },
                remove: function(t) {
                    var e = this._names.indexOf(t);
                    0 <= e && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")))
                },
                contains: function(t) {
                    return 0 <= this._names.indexOf(t)
                }
            };
            var U = {},
                O = null;
            "undefined" != typeof document && ("onmouseenter" in document.documentElement || (U = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }));

            function R(n, t, e) {
                return n = q(n, t, e),
                    function(t) {
                        var e = t.relatedTarget;
                        e && (e === this || 8 & e.compareDocumentPosition(this)) || n.call(this, t)
                    }
            }

            function q(n, r, i) {
                return function(t) {
                    var e = O;
                    O = t;
                    try {
                        n.call(this, this.__data__, r, i)
                    } finally {
                        O = e
                    }
                }
            }

            function Y(a) {
                return function() {
                    var t = this.__on;
                    if (t) {
                        for (var e, n = 0, r = -1, i = t.length; n < i; ++n) e = t[n], a.type && e.type !== a.type || e.name !== a.name ? t[++r] = e : this.removeEventListener(e.type, e.listener, e.capture);
                        ++r ? t.length = r : delete this.__on
                    }
                }
            }

            function B(s, l, u) {
                var f = U.hasOwnProperty(s.type) ? R : q;
                return function(t, e, n) {
                    var r, i = this.__on,
                        a = f(l, e, n);
                    if (i)
                        for (var o = 0, c = i.length; o < c; ++o)
                            if ((r = i[o]).type === s.type && r.name === s.name) return this.removeEventListener(r.type, r.listener, r.capture), this.addEventListener(r.type, r.listener = a, r.capture = u), void(r.value = l);
                    this.addEventListener(s.type, a, u), r = {
                        type: s.type,
                        name: s.name,
                        value: l,
                        listener: a,
                        capture: u
                    }, i ? i.push(r) : this.__on = [r]
                }
            }

            function j(t, e, n) {
                var r = v(t),
                    i = r.CustomEvent;
                "function" == typeof i ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i)
            }
            var I = [null];

            function X(t, e) {
                this._groups = t, this._parents = e
            }

            function V() {
                return new X([
                    [document.documentElement]
                ], I)
            }

            function W(t) {
                return "string" == typeof t ? new X([
                    [document.querySelector(t)]
                ], [document.documentElement]) : new X([
                    [t]
                ], I)
            }

            function Z(t) {
                var e = function() {
                    for (var t, e = O; t = e.sourceEvent;) e = t;
                    return e
                }();
                return e.changedTouches && (e = e.changedTouches[0]),
                    function(t, e) {
                        var n = t.ownerSVGElement || t;
                        if (n.createSVGPoint) {
                            var r = n.createSVGPoint();
                            return r.x = e.clientX, r.y = e.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
                        }
                        var i = t.getBoundingClientRect();
                        return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop]
                    }(t, e)
            }

            function $(t) {
                return "string" == typeof t ? new X([document.querySelectorAll(t)], [document.documentElement]) : new X([null == t ? [] : t], I)
            }
            X.prototype = V.prototype = {
                constructor: X,
                select: function(t) {
                    "function" != typeof t && (t = p(t));
                    for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
                        for (var a, o, c = e[i], s = c.length, l = r[i] = new Array(s), u = 0; u < s; ++u)(a = c[u]) && (o = t.call(a, a.__data__, u, c)) && ("__data__" in a && (o.__data__ = a.__data__), l[u] = o);
                    return new X(r, this._parents)
                },
                selectAll: function(t) {
                    "function" != typeof t && (t = y(t));
                    for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
                        for (var o, c = e[a], s = c.length, l = 0; l < s; ++l)(o = c[l]) && (r.push(t.call(o, o.__data__, l, c)), i.push(o));
                    return new X(r, i)
                },
                filter: function(t) {
                    "function" != typeof t && (t = h(t));
                    for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
                        for (var a, o = e[i], c = o.length, s = r[i] = [], l = 0; l < c; ++l)(a = o[l]) && t.call(a, a.__data__, l, o) && s.push(a);
                    return new X(r, this._parents)
                },
                data: function(t, e) {
                    if (!t) return d = new Array(this.size()), l = -1, this.each(function(t) {
                        d[++l] = t
                    }), d;
                    var n = e ? w : x,
                        r = this._parents,
                        i = this._groups;
                    "function" != typeof t && (t = function(t) {
                        return function() {
                            return t
                        }
                    }(t));
                    for (var a = i.length, o = new Array(a), c = new Array(a), s = new Array(a), l = 0; l < a; ++l) {
                        var u = r[l],
                            f = i[l],
                            h = f.length,
                            d = t.call(u, u && u.__data__, l, r),
                            _ = d.length,
                            p = c[l] = new Array(_),
                            b = o[l] = new Array(_);
                        n(u, f, p, b, s[l] = new Array(h), d, e);
                        for (var y, g, m = 0, v = 0; m < _; ++m)
                            if (y = p[m]) {
                                for (v <= m && (v = m + 1); !(g = b[v]) && ++v < _;);
                                y._next = g || null
                            }
                    }
                    return (o = new X(o, r))._enter = c, o._exit = s, o
                },
                enter: function() {
                    return new X(this._enter || this._groups.map(l), this._parents)
                },
                exit: function() {
                    return new X(this._exit || this._groups.map(l), this._parents)
                },
                join: function(t, e, n) {
                    var r = this.enter(),
                        i = this,
                        a = this.exit();
                    return r = "function" == typeof t ? t(r) : r.append(t + ""), null != e && (i = e(i)), null == n ? a.remove() : n(a), r && i ? r.merge(i).order() : i
                },
                merge: function(t) {
                    for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), c = 0; c < a; ++c)
                        for (var s, l = e[c], u = n[c], f = l.length, h = o[c] = new Array(f), d = 0; d < f; ++d)(s = l[d] || u[d]) && (h[d] = s);
                    for (; c < r; ++c) o[c] = e[c];
                    return new X(o, this._parents)
                },
                order: function() {
                    for (var t = this._groups, e = -1, n = t.length; ++e < n;)
                        for (var r, i = t[e], a = i.length - 1, o = i[a]; 0 <= --a;)(r = i[a]) && (o && 4 ^ r.compareDocumentPosition(o) && o.parentNode.insertBefore(r, o), o = r);
                    return this
                },
                sort: function(n) {
                    function t(t, e) {
                        return t && e ? n(t.__data__, e.__data__) : !t - !e
                    }
                    n = n || m;
                    for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
                        for (var o, c = e[a], s = c.length, l = i[a] = new Array(s), u = 0; u < s; ++u)(o = c[u]) && (l[u] = o);
                        l.sort(t)
                    }
                    return new X(i, this._parents).order()
                },
                call: function() {
                    var t = arguments[0];
                    return arguments[0] = this, t.apply(null, arguments), this
                },
                nodes: function() {
                    var t = new Array(this.size()),
                        e = -1;
                    return this.each(function() {
                        t[++e] = this
                    }), t
                },
                node: function() {
                    for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
                        for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
                            var o = r[i];
                            if (o) return o
                        }
                    return null
                },
                size: function() {
                    var t = 0;
                    return this.each(function() {
                        ++t
                    }), t
                },
                empty: function() {
                    return !this.node()
                },
                each: function(t) {
                    for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
                        for (var i, a = e[n], o = 0, c = a.length; o < c; ++o)(i = a[o]) && t.call(i, i.__data__, o, a);
                    return this
                },
                attr: function(t, e) {
                    var n = a(t);
                    if (arguments.length < 2) {
                        var r = this.node();
                        return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n)
                    }
                    return this.each((null == e ? n.local ? function(t) {
                        return function() {
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function(t) {
                        return function() {
                            this.removeAttribute(t)
                        }
                    } : "function" == typeof e ? n.local ? function(e, n) {
                        return function() {
                            var t = n.apply(this, arguments);
                            null == t ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, t)
                        }
                    } : function(e, n) {
                        return function() {
                            var t = n.apply(this, arguments);
                            null == t ? this.removeAttribute(e) : this.setAttribute(e, t)
                        }
                    } : n.local ? function(t, e) {
                        return function() {
                            this.setAttributeNS(t.space, t.local, e)
                        }
                    } : function(t, e) {
                        return function() {
                            this.setAttribute(t, e)
                        }
                    })(n, e))
                },
                style: function(t, e, n) {
                    return 1 < arguments.length ? this.each((null == e ? function(t) {
                        return function() {
                            this.style.removeProperty(t)
                        }
                    } : "function" == typeof e ? function(e, n, r) {
                        return function() {
                            var t = n.apply(this, arguments);
                            null == t ? this.style.removeProperty(e) : this.style.setProperty(e, t, r)
                        }
                    } : function(t, e, n) {
                        return function() {
                            this.style.setProperty(t, e, n)
                        }
                    })(t, e, null == n ? "" : n)) : M(this.node(), t)
                },
                property: function(t, e) {
                    return 1 < arguments.length ? this.each((null == e ? function(t) {
                        return function() {
                            delete this[t]
                        }
                    } : "function" == typeof e ? function(e, n) {
                        return function() {
                            var t = n.apply(this, arguments);
                            null == t ? delete this[e] : this[e] = t
                        }
                    } : function(t, e) {
                        return function() {
                            this[t] = e
                        }
                    })(t, e)) : this.node()[t]
                },
                classed: function(t, e) {
                    var n = k(t + "");
                    if (arguments.length < 2) {
                        for (var r = T(this.node()), i = -1, a = n.length; ++i < a;)
                            if (!r.contains(n[i])) return !1;
                        return !0
                    }
                    return this.each(("function" == typeof e ? function(t, e) {
                        return function() {
                            (e.apply(this, arguments) ? C : N)(this, t)
                        }
                    } : e ? function(t) {
                        return function() {
                            C(this, t)
                        }
                    } : function(t) {
                        return function() {
                            N(this, t)
                        }
                    })(n, e))
                },
                text: function(t) {
                    return arguments.length ? this.each(null == t ? S : ("function" == typeof t ? function(e) {
                        return function() {
                            var t = e.apply(this, arguments);
                            this.textContent = null == t ? "" : t
                        }
                    } : function(t) {
                        return function() {
                            this.textContent = t
                        }
                    })(t)) : this.node().textContent
                },
                html: function(t) {
                    return arguments.length ? this.each(null == t ? E : ("function" == typeof t ? function(e) {
                        return function() {
                            var t = e.apply(this, arguments);
                            this.innerHTML = null == t ? "" : t
                        }
                    } : function(t) {
                        return function() {
                            this.innerHTML = t
                        }
                    })(t)) : this.node().innerHTML
                },
                raise: function() {
                    return this.each(z)
                },
                lower: function() {
                    return this.each(D)
                },
                append: function(t) {
                    var e = "function" == typeof t ? t : o(t);
                    return this.select(function() {
                        return this.appendChild(e.apply(this, arguments))
                    })
                },
                insert: function(t, e) {
                    var n = "function" == typeof t ? t : o(t),
                        r = null == e ? F : "function" == typeof e ? e : p(e);
                    return this.select(function() {
                        return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null)
                    })
                },
                remove: function() {
                    return this.each(L)
                },
                clone: function(t) {
                    return this.select(t ? H : P)
                },
                datum: function(t) {
                    return arguments.length ? this.property("__data__", t) : this.node().__data__
                },
                on: function(t, e, n) {
                    var r, i, a = function(t) {
                            return t.trim().split(/^|\s+/).map(function(t) {
                                var e = "",
                                    n = t.indexOf(".");
                                return 0 <= n && (e = t.slice(n + 1), t = t.slice(0, n)), {
                                    type: t,
                                    name: e
                                }
                            })
                        }(t + ""),
                        o = a.length;
                    if (!(arguments.length < 2)) {
                        for (c = e ? B : Y, null == n && (n = !1), r = 0; r < o; ++r) this.each(c(a[r], e, n));
                        return this
                    }
                    var c = this.node().__on;
                    if (c)
                        for (var s, l = 0, u = c.length; l < u; ++l)
                            for (r = 0, s = c[l]; r < o; ++r)
                                if ((i = a[r]).type === s.type && i.name === s.name) return s.value
                },
                dispatch: function(t, e) {
                    return this.each(("function" == typeof e ? function(t, e) {
                        return function() {
                            return j(this, t, e.apply(this, arguments))
                        }
                    } : function(t, e) {
                        return function() {
                            return j(this, t, e)
                        }
                    })(t, e))
                }
            };
            var G = {
                value: function() {}
            };

            function Q() {
                for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
                    if (!(t = arguments[e] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
                    r[t] = []
                }
                return new J(r)
            }

            function J(t) {
                this._ = t
            }

            function K(t, e) {
                for (var n, r = 0, i = t.length; r < i; ++r)
                    if ((n = t[r]).name === e) return n.value
            }

            function tt(t, e, n) {
                for (var r = 0, i = t.length; r < i; ++r)
                    if (t[r].name === e) {
                        t[r] = G, t = t.slice(0, r).concat(t.slice(r + 1));
                        break
                    }
                return null != n && t.push({
                    name: e,
                    value: n
                }), t
            }
            J.prototype = Q.prototype = {
                constructor: J,
                on: function(t, e) {
                    var n, r = this._,
                        i = function(t, r) {
                            return t.trim().split(/^|\s+/).map(function(t) {
                                var e = "",
                                    n = t.indexOf(".");
                                if (0 <= n && (e = t.slice(n + 1), t = t.slice(0, n)), t && !r.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                                return {
                                    type: t,
                                    name: e
                                }
                            })
                        }(t + "", r),
                        a = -1,
                        o = i.length;
                    if (!(arguments.length < 2)) {
                        if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);
                        for (; ++a < o;)
                            if (n = (t = i[a]).type) r[n] = tt(r[n], t.name, e);
                            else if (null == e)
                            for (n in r) r[n] = tt(r[n], t.name, null);
                        return this
                    }
                    for (; ++a < o;)
                        if ((n = (t = i[a]).type) && (n = K(r[n], t.name))) return n
                },
                copy: function() {
                    var t = {},
                        e = this._;
                    for (var n in e) t[n] = e[n].slice();
                    return new J(t)
                },
                call: function(t, e) {
                    if (0 < (n = arguments.length - 2))
                        for (var n, r, i = new Array(n), a = 0; a < n; ++a) i[a] = arguments[a + 2];
                    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    for (a = 0, n = (r = this._[t]).length; a < n; ++a) r[a].value.apply(e, i)
                },
                apply: function(t, e, n) {
                    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n)
                }
            };
            var et, nt, rt = 0,
                it = 0,
                at = 0,
                ot = 1e3,
                ct = 0,
                st = 0,
                lt = 0,
                ut = "object" == typeof performance && performance.now ? performance : Date,
                ft = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                    setTimeout(t, 17)
                };

            function ht() {
                return st || (ft(dt), st = ut.now() + lt)
            }

            function dt() {
                st = 0
            }

            function _t() {
                this._call = this._time = this._next = null
            }

            function pt(t, e, n) {
                var r = new _t;
                return r.restart(t, e, n), r
            }

            function bt() {
                st = (ct = ut.now()) + lt, rt = it = 0;
                try {
                    ! function() {
                        ht(), ++rt;
                        for (var t, e = et; e;) 0 <= (t = st - e._time) && e._call.call(null, t), e = e._next;
                        --rt
                    }()
                } finally {
                    rt = 0,
                        function() {
                            var t, e, n = et,
                                r = 1 / 0;
                            for (; n;) n = n._call ? (r > n._time && (r = n._time), (t = n)._next) : (e = n._next, n._next = null, t ? t._next = e : et = e);
                            nt = t, gt(r)
                        }(), st = 0
                }
            }

            function yt() {
                var t = ut.now(),
                    e = t - ct;
                ot < e && (lt -= e, ct = t)
            }

            function gt(t) {
                rt || (it = it && clearTimeout(it), 24 < t - st ? (t < 1 / 0 && (it = setTimeout(bt, t - ut.now() - lt)), at = at && clearInterval(at)) : (at || (ct = ut.now(), at = setInterval(yt, ot)), rt = 1, ft(bt)))
            }

            function mt(e, n, t) {
                var r = new _t;
                return n = null == n ? 0 : +n, r.restart(function(t) {
                    r.stop(), e(t + n)
                }, n, t), r
            }
            _t.prototype = pt.prototype = {
                constructor: _t,
                restart: function(t, e, n) {
                    if ("function" != typeof t) throw new TypeError("callback is not a function");
                    n = (null == n ? ht() : +n) + (null == e ? 0 : +e), this._next || nt === this || (nt ? nt._next = this : et = this, nt = this), this._call = t, this._time = n, gt()
                },
                stop: function() {
                    this._call && (this._call = null, this._time = 1 / 0, gt())
                }
            };
            var vt = Q("start", "end", "cancel", "interrupt"),
                xt = [],
                wt = 0,
                Mt = 1,
                kt = 2,
                Tt = 3,
                At = 4,
                Ct = 5,
                Nt = 6;

            function St(t, e, n, r, i, a) {
                var o = t.__transition;
                if (o) {
                    if (n in o) return
                } else t.__transition = {};
                ! function(a, o, c) {
                    var s, l = a.__transition;

                    function u(t) {
                        var e, n, r, i;
                        if (c.state !== Mt) return h();
                        for (e in l)
                            if ((i = l[e]).name === c.name) {
                                if (i.state === Tt) return mt(u);
                                i.state === At ? (i.state = Nt, i.timer.stop(), i.on.call("interrupt", a, a.__data__, i.index, i.group), delete l[e]) : +e < o && (i.state = Nt, i.timer.stop(), i.on.call("cancel", a, a.__data__, i.index, i.group), delete l[e])
                            }
                        if (mt(function() {
                                c.state === Tt && (c.state = At, c.timer.restart(f, c.delay, c.time), f(t))
                            }), c.state = kt, c.on.call("start", a, a.__data__, c.index, c.group), c.state === kt) {
                            for (c.state = Tt, s = new Array(r = c.tween.length), e = 0, n = -1; e < r; ++e)(i = c.tween[e].value.call(a, a.__data__, c.index, c.group)) && (s[++n] = i);
                            s.length = n + 1
                        }
                    }

                    function f(t) {
                        for (var e = t < c.duration ? c.ease.call(null, t / c.duration) : (c.timer.restart(h), c.state = Ct, 1), n = -1, r = s.length; ++n < r;) s[n].call(a, e);
                        c.state === Ct && (c.on.call("end", a, a.__data__, c.index, c.group), h())
                    }

                    function h() {
                        for (var t in c.state = Nt, c.timer.stop(), delete l[o], l) return;
                        delete a.__transition
                    }(l[o] = c).timer = pt(function(t) {
                        c.state = Mt, c.timer.restart(u, c.delay, c.time), c.delay <= t && u(t - c.delay)
                    }, 0, c.time)
                }(t, n, {
                    name: e,
                    index: r,
                    group: i,
                    on: vt,
                    tween: xt,
                    time: a.time,
                    delay: a.delay,
                    duration: a.duration,
                    ease: a.ease,
                    timer: null,
                    state: wt
                })
            }

            function Et(t, e) {
                var n = Dt(t, e);
                if (n.state > wt) throw new Error("too late; already scheduled");
                return n
            }

            function zt(t, e) {
                var n = Dt(t, e);
                if (n.state > Tt) throw new Error("too late; already running");
                return n
            }

            function Dt(t, e) {
                var n = t.__transition;
                if (!n || !(n = n[e])) throw new Error("transition not found");
                return n
            }

            function Ft(t, e, n) {
                t.prototype = e.prototype = n, n.constructor = t
            }

            function Lt(t, e) {
                var n = Object.create(t.prototype);
                for (var r in e) n[r] = e[r];
                return n
            }

            function Pt() {}
            var Ht = 1 / .7,
                Ut = "\\s*([+-]?\\d+)\\s*",
                Ot = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                Rt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                qt = /^#([0-9a-f]{3,8})$/,
                Yt = new RegExp("^rgb\\(" + [Ut, Ut, Ut] + "\\)$"),
                Bt = new RegExp("^rgb\\(" + [Rt, Rt, Rt] + "\\)$"),
                jt = new RegExp("^rgba\\(" + [Ut, Ut, Ut, Ot] + "\\)$"),
                It = new RegExp("^rgba\\(" + [Rt, Rt, Rt, Ot] + "\\)$"),
                Xt = new RegExp("^hsl\\(" + [Ot, Rt, Rt] + "\\)$"),
                Vt = new RegExp("^hsla\\(" + [Ot, Rt, Rt, Ot] + "\\)$"),
                Wt = {
                    aliceblue: 15792383,
                    antiquewhite: 16444375,
                    aqua: 65535,
                    aquamarine: 8388564,
                    azure: 15794175,
                    beige: 16119260,
                    bisque: 16770244,
                    black: 0,
                    blanchedalmond: 16772045,
                    blue: 255,
                    blueviolet: 9055202,
                    brown: 10824234,
                    burlywood: 14596231,
                    cadetblue: 6266528,
                    chartreuse: 8388352,
                    chocolate: 13789470,
                    coral: 16744272,
                    cornflowerblue: 6591981,
                    cornsilk: 16775388,
                    crimson: 14423100,
                    cyan: 65535,
                    darkblue: 139,
                    darkcyan: 35723,
                    darkgoldenrod: 12092939,
                    darkgray: 11119017,
                    darkgreen: 25600,
                    darkgrey: 11119017,
                    darkkhaki: 12433259,
                    darkmagenta: 9109643,
                    darkolivegreen: 5597999,
                    darkorange: 16747520,
                    darkorchid: 10040012,
                    darkred: 9109504,
                    darksalmon: 15308410,
                    darkseagreen: 9419919,
                    darkslateblue: 4734347,
                    darkslategray: 3100495,
                    darkslategrey: 3100495,
                    darkturquoise: 52945,
                    darkviolet: 9699539,
                    deeppink: 16716947,
                    deepskyblue: 49151,
                    dimgray: 6908265,
                    dimgrey: 6908265,
                    dodgerblue: 2003199,
                    firebrick: 11674146,
                    floralwhite: 16775920,
                    forestgreen: 2263842,
                    fuchsia: 16711935,
                    gainsboro: 14474460,
                    ghostwhite: 16316671,
                    gold: 16766720,
                    goldenrod: 14329120,
                    gray: 8421504,
                    green: 32768,
                    greenyellow: 11403055,
                    grey: 8421504,
                    honeydew: 15794160,
                    hotpink: 16738740,
                    indianred: 13458524,
                    indigo: 4915330,
                    ivory: 16777200,
                    khaki: 15787660,
                    lavender: 15132410,
                    lavenderblush: 16773365,
                    lawngreen: 8190976,
                    lemonchiffon: 16775885,
                    lightblue: 11393254,
                    lightcoral: 15761536,
                    lightcyan: 14745599,
                    lightgoldenrodyellow: 16448210,
                    lightgray: 13882323,
                    lightgreen: 9498256,
                    lightgrey: 13882323,
                    lightpink: 16758465,
                    lightsalmon: 16752762,
                    lightseagreen: 2142890,
                    lightskyblue: 8900346,
                    lightslategray: 7833753,
                    lightslategrey: 7833753,
                    lightsteelblue: 11584734,
                    lightyellow: 16777184,
                    lime: 65280,
                    limegreen: 3329330,
                    linen: 16445670,
                    magenta: 16711935,
                    maroon: 8388608,
                    mediumaquamarine: 6737322,
                    mediumblue: 205,
                    mediumorchid: 12211667,
                    mediumpurple: 9662683,
                    mediumseagreen: 3978097,
                    mediumslateblue: 8087790,
                    mediumspringgreen: 64154,
                    mediumturquoise: 4772300,
                    mediumvioletred: 13047173,
                    midnightblue: 1644912,
                    mintcream: 16121850,
                    mistyrose: 16770273,
                    moccasin: 16770229,
                    navajowhite: 16768685,
                    navy: 128,
                    oldlace: 16643558,
                    olive: 8421376,
                    olivedrab: 7048739,
                    orange: 16753920,
                    orangered: 16729344,
                    orchid: 14315734,
                    palegoldenrod: 15657130,
                    palegreen: 10025880,
                    paleturquoise: 11529966,
                    palevioletred: 14381203,
                    papayawhip: 16773077,
                    peachpuff: 16767673,
                    peru: 13468991,
                    pink: 16761035,
                    plum: 14524637,
                    powderblue: 11591910,
                    purple: 8388736,
                    rebeccapurple: 6697881,
                    red: 16711680,
                    rosybrown: 12357519,
                    royalblue: 4286945,
                    saddlebrown: 9127187,
                    salmon: 16416882,
                    sandybrown: 16032864,
                    seagreen: 3050327,
                    seashell: 16774638,
                    sienna: 10506797,
                    silver: 12632256,
                    skyblue: 8900331,
                    slateblue: 6970061,
                    slategray: 7372944,
                    slategrey: 7372944,
                    snow: 16775930,
                    springgreen: 65407,
                    steelblue: 4620980,
                    tan: 13808780,
                    teal: 32896,
                    thistle: 14204888,
                    tomato: 16737095,
                    turquoise: 4251856,
                    violet: 15631086,
                    wheat: 16113331,
                    white: 16777215,
                    whitesmoke: 16119285,
                    yellow: 16776960,
                    yellowgreen: 10145074
                };

            function Zt() {
                return this.rgb().formatHex()
            }

            function $t() {
                return this.rgb().formatRgb()
            }

            function Gt(t) {
                var e, n;
                return t = (t + "").trim().toLowerCase(), (e = qt.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), 6 === n ? Qt(e) : 3 === n ? new ee(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === n ? new ee(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === n ? new ee(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = Yt.exec(t)) ? new ee(e[1], e[2], e[3], 1) : (e = Bt.exec(t)) ? new ee(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = jt.exec(t)) ? Jt(e[1], e[2], e[3], e[4]) : (e = It.exec(t)) ? Jt(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = Xt.exec(t)) ? ae(e[1], e[2] / 100, e[3] / 100, 1) : (e = Vt.exec(t)) ? ae(e[1], e[2] / 100, e[3] / 100, e[4]) : Wt.hasOwnProperty(t) ? Qt(Wt[t]) : "transparent" === t ? new ee(NaN, NaN, NaN, 0) : null
            }

            function Qt(t) {
                return new ee(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
            }

            function Jt(t, e, n, r) {
                return r <= 0 && (t = e = n = NaN), new ee(t, e, n, r)
            }

            function Kt(t) {
                return t instanceof Pt || (t = Gt(t)), t ? new ee((t = t.rgb()).r, t.g, t.b, t.opacity) : new ee
            }

            function te(t, e, n, r) {
                return 1 === arguments.length ? Kt(t) : new ee(t, e, n, null == r ? 1 : r)
            }

            function ee(t, e, n, r) {
                this.r = +t, this.g = +e, this.b = +n, this.opacity = +r
            }

            function ne() {
                return "#" + ie(this.r) + ie(this.g) + ie(this.b)
            }

            function re() {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
            }

            function ie(t) {
                return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
            }

            function ae(t, e, n, r) {
                return r <= 0 ? t = e = n = NaN : n <= 0 || 1 <= n ? t = e = NaN : e <= 0 && (t = NaN), new se(t, e, n, r)
            }

            function oe(t) {
                if (t instanceof se) return new se(t.h, t.s, t.l, t.opacity);
                if (t instanceof Pt || (t = Gt(t)), !t) return new se;
                if (t instanceof se) return t;
                var e = (t = t.rgb()).r / 255,
                    n = t.g / 255,
                    r = t.b / 255,
                    i = Math.min(e, n, r),
                    a = Math.max(e, n, r),
                    o = NaN,
                    c = a - i,
                    s = (a + i) / 2;
                return c ? (o = e === a ? (n - r) / c + 6 * (n < r) : n === a ? (r - e) / c + 2 : (e - n) / c + 4, c /= s < .5 ? a + i : 2 - a - i, o *= 60) : c = 0 < s && s < 1 ? 0 : o, new se(o, c, s, t.opacity)
            }

            function ce(t, e, n, r) {
                return 1 === arguments.length ? oe(t) : new se(t, e, n, null == r ? 1 : r)
            }

            function se(t, e, n, r) {
                this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
            }

            function le(t, e, n) {
                return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
            }
            Ft(Pt, Gt, {
                copy: function(t) {
                    return Object.assign(new this.constructor, this, t)
                },
                displayable: function() {
                    return this.rgb().displayable()
                },
                hex: Zt,
                formatHex: Zt,
                formatHsl: function() {
                    return oe(this).formatHsl()
                },
                formatRgb: $t,
                toString: $t
            }), Ft(ee, te, Lt(Pt, {
                brighter: function(t) {
                    return t = null == t ? Ht : Math.pow(Ht, t), new ee(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                darker: function(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new ee(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                rgb: function() {
                    return this
                },
                displayable: function() {
                    return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
                },
                hex: ne,
                formatHex: ne,
                formatRgb: re,
                toString: re
            })), Ft(se, ce, Lt(Pt, {
                brighter: function(t) {
                    return t = null == t ? Ht : Math.pow(Ht, t), new se(this.h, this.s, this.l * t, this.opacity)
                },
                darker: function(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new se(this.h, this.s, this.l * t, this.opacity)
                },
                rgb: function() {
                    var t = this.h % 360 + 360 * (this.h < 0),
                        e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                        n = this.l,
                        r = n + (n < .5 ? n : 1 - n) * e,
                        i = 2 * n - r;
                    return new ee(le(240 <= t ? t - 240 : 120 + t, i, r), le(t, i, r), le(t < 120 ? 240 + t : t - 120, i, r), this.opacity)
                },
                displayable: function() {
                    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
                },
                formatHsl: function() {
                    var t = this.opacity;
                    return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
                }
            }));
            var ue = Math.PI / 180,
                fe = 180 / Math.PI,
                he = .96422,
                de = 1,
                _e = .82521,
                pe = 4 / 29,
                be = 6 / 29,
                ye = 3 * be * be,
                ge = be * be * be;

            function me(t) {
                if (t instanceof xe) return new xe(t.l, t.a, t.b, t.opacity);
                if (t instanceof Ce) return Ne(t);
                t instanceof ee || (t = Kt(t));
                var e, n, r = Te(t.r),
                    i = Te(t.g),
                    a = Te(t.b),
                    o = we((.2225045 * r + .7168786 * i + .0606169 * a) / de);
                return r === i && i === a ? e = n = o : (e = we((.4360747 * r + .3850649 * i + .1430804 * a) / he), n = we((.0139322 * r + .0971045 * i + .7141733 * a) / _e)), new xe(116 * o - 16, 500 * (e - o), 200 * (o - n), t.opacity)
            }

            function ve(t, e, n, r) {
                return 1 === arguments.length ? me(t) : new xe(t, e, n, null == r ? 1 : r)
            }

            function xe(t, e, n, r) {
                this.l = +t, this.a = +e, this.b = +n, this.opacity = +r
            }

            function we(t) {
                return ge < t ? Math.pow(t, 1 / 3) : t / ye + pe
            }

            function Me(t) {
                return be < t ? t * t * t : ye * (t - pe)
            }

            function ke(t) {
                return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
            }

            function Te(t) {
                return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
            }

            function Ae(t, e, n, r) {
                return 1 === arguments.length ? function(t) {
                    if (t instanceof Ce) return new Ce(t.h, t.c, t.l, t.opacity);
                    if (t instanceof xe || (t = me(t)), 0 === t.a && 0 === t.b) return new Ce(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
                    var e = Math.atan2(t.b, t.a) * fe;
                    return new Ce(e < 0 ? 360 + e : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
                }(t) : new Ce(t, e, n, null == r ? 1 : r)
            }

            function Ce(t, e, n, r) {
                this.h = +t, this.c = +e, this.l = +n, this.opacity = +r
            }

            function Ne(t) {
                if (isNaN(t.h)) return new xe(t.l, 0, 0, t.opacity);
                var e = t.h * ue;
                return new xe(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity)
            }
            Ft(xe, ve, Lt(Pt, {
                brighter: function(t) {
                    return new xe(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                },
                darker: function(t) {
                    return new xe(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                },
                rgb: function() {
                    var t = (this.l + 16) / 116,
                        e = isNaN(this.a) ? t : t + this.a / 500,
                        n = isNaN(this.b) ? t : t - this.b / 200;
                    return new ee(ke(3.1338561 * (e = he * Me(e)) - 1.6168667 * (t = de * Me(t)) - .4906146 * (n = _e * Me(n))), ke(-.9787684 * e + 1.9161415 * t + .033454 * n), ke(.0719453 * e - .2289914 * t + 1.4052427 * n), this.opacity)
                }
            })), Ft(Ce, Ae, Lt(Pt, {
                brighter: function(t) {
                    return new Ce(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
                },
                darker: function(t) {
                    return new Ce(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
                },
                rgb: function() {
                    return Ne(this).rgb()
                }
            }));
            var Se = 1.78277,
                Ee = -.29227,
                ze = -.90649,
                De = 1.97294,
                Fe = De * ze,
                Le = De * Se,
                Pe = Se * Ee - -.14861 * ze;

            function He(t, e, n, r) {
                return 1 === arguments.length ? function(t) {
                    if (t instanceof Ue) return new Ue(t.h, t.s, t.l, t.opacity);
                    t instanceof ee || (t = Kt(t));
                    var e = t.r / 255,
                        n = t.g / 255,
                        r = t.b / 255,
                        i = (Pe * r + Fe * e - Le * n) / (Pe + Fe - Le),
                        a = r - i,
                        o = (De * (n - i) - Ee * a) / ze,
                        c = Math.sqrt(o * o + a * a) / (De * i * (1 - i)),
                        s = c ? Math.atan2(o, a) * fe - 120 : NaN;
                    return new Ue(s < 0 ? s + 360 : s, c, i, t.opacity)
                }(t) : new Ue(t, e, n, null == r ? 1 : r)
            }

            function Ue(t, e, n, r) {
                this.h = +t, this.s = +e, this.l = +n, this.opacity = +r
            }

            function Oe(t) {
                return function() {
                    return t
                }
            }

            function Re(e, n) {
                return function(t) {
                    return e + t * n
                }
            }

            function qe(t, e) {
                var n = e - t;
                return n ? Re(t, 180 < n || n < -180 ? n - 360 * Math.round(n / 360) : n) : Oe(isNaN(t) ? e : t)
            }

            function Ye(n) {
                return 1 == (n = +n) ? Be : function(t, e) {
                    return e - t ? function(e, n, r) {
                        return e = Math.pow(e, r), n = Math.pow(n, r) - e, r = 1 / r,
                            function(t) {
                                return Math.pow(e + t * n, r)
                            }
                    }(t, e, n) : Oe(isNaN(t) ? e : t)
                }
            }

            function Be(t, e) {
                var n = e - t;
                return n ? Re(t, n) : Oe(isNaN(t) ? e : t)
            }
            Ft(Ue, He, Lt(Pt, {
                brighter: function(t) {
                    return t = null == t ? Ht : Math.pow(Ht, t), new Ue(this.h, this.s, this.l * t, this.opacity)
                },
                darker: function(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new Ue(this.h, this.s, this.l * t, this.opacity)
                },
                rgb: function() {
                    var t = isNaN(this.h) ? 0 : (this.h + 120) * ue,
                        e = +this.l,
                        n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
                        r = Math.cos(t),
                        i = Math.sin(t);
                    return new ee(255 * (e + n * (-.14861 * r + Se * i)), 255 * (e + n * (Ee * r + ze * i)), 255 * (e + De * r * n), this.opacity)
                }
            }));
            var je = function t(e) {
                var o = Ye(e);

                function n(e, t) {
                    var n = o((e = te(e)).r, (t = te(t)).r),
                        r = o(e.g, t.g),
                        i = o(e.b, t.b),
                        a = Be(e.opacity, t.opacity);
                    return function(t) {
                        return e.r = n(t), e.g = r(t), e.b = i(t), e.opacity = a(t), e + ""
                    }
                }
                return n.gamma = t, n
            }(1);
            var Ie, Xe = (Ie = function(o) {
                var c = o.length - 1;
                return function(t) {
                    var e = t <= 0 ? t = 0 : 1 <= t ? c - (t = 1) : Math.floor(t * c),
                        n = o[e],
                        r = o[e + 1],
                        i = 0 < e ? o[e - 1] : 2 * n - r,
                        a = e < c - 1 ? o[e + 2] : 2 * r - n;
                    return function(t, e, n, r, i) {
                        var a = t * t,
                            o = a * t;
                        return ((1 - 3 * t + 3 * a - o) * e + (4 - 6 * a + 3 * o) * n + (1 + 3 * t + 3 * a - 3 * o) * r + o * i) / 6
                    }((t - e / c) * c, i, n, r, a)
                }
            }, function(t) {
                var e, n, r = t.length,
                    i = new Array(r),
                    a = new Array(r),
                    o = new Array(r);
                for (e = 0; e < r; ++e) n = te(t[e]), i[e] = n.r || 0, a[e] = n.g || 0, o[e] = n.b || 0;
                return i = Ie(i), a = Ie(a), o = Ie(o), n.opacity = 1,
                    function(t) {
                        return n.r = i(t), n.g = a(t), n.b = o(t), n + ""
                    }
            });

            function Ve(e, n) {
                return n -= e = +e,
                    function(t) {
                        return e + n * t
                    }
            }
            var We = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                Ze = new RegExp(We.source, "g");

            function $e(t, r) {
                var e, n, i, a = We.lastIndex = Ze.lastIndex = 0,
                    o = -1,
                    c = [],
                    s = [];
                for (t += "", r += "";
                    (e = We.exec(t)) && (n = Ze.exec(r));)(i = n.index) > a && (i = r.slice(a, i), c[o] ? c[o] += i : c[++o] = i), (e = e[0]) === (n = n[0]) ? c[o] ? c[o] += n : c[++o] = n : (c[++o] = null, s.push({
                    i: o,
                    x: Ve(e, n)
                })), a = Ze.lastIndex;
                return a < r.length && (i = r.slice(a), c[o] ? c[o] += i : c[++o] = i), c.length < 2 ? s[0] ? function(e) {
                    return function(t) {
                        return e(t) + ""
                    }
                }(s[0].x) : function(t) {
                    return function() {
                        return t
                    }
                }(r) : (r = s.length, function(t) {
                    for (var e, n = 0; n < r; ++n) c[(e = s[n]).i] = e.x(t);
                    return c.join("")
                })
            }

            function Ge(t, e) {
                var n, r = typeof e;
                return null == e || "boolean" == r ? Oe(e) : ("number" == r ? Ve : "string" == r ? (n = Gt(e)) ? (e = n, je) : $e : e instanceof Gt ? je : e instanceof Date ? function(e, n) {
                    var r = new Date;
                    return n -= e = +e,
                        function(t) {
                            return r.setTime(e + n * t), r
                        }
                } : Array.isArray(e) ? function(t, e) {
                    var n, r = e ? e.length : 0,
                        i = t ? Math.min(r, t.length) : 0,
                        a = new Array(i),
                        o = new Array(r);
                    for (n = 0; n < i; ++n) a[n] = Ge(t[n], e[n]);
                    for (; n < r; ++n) o[n] = e[n];
                    return function(t) {
                        for (n = 0; n < i; ++n) o[n] = a[n](t);
                        return o
                    }
                } : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? function(t, e) {
                    var n, r = {},
                        i = {};
                    for (n in null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}), e) n in t ? r[n] = Ge(t[n], e[n]) : i[n] = e[n];
                    return function(t) {
                        for (n in r) i[n] = r[n](t);
                        return i
                    }
                } : Ve)(t, e)
            }

            function Qe(e, n) {
                return n -= e = +e,
                    function(t) {
                        return Math.round(e + n * t)
                    }
            }
            var Je, Ke, tn, en, nn = 180 / Math.PI,
                rn = {
                    translateX: 0,
                    translateY: 0,
                    rotate: 0,
                    skewX: 0,
                    scaleX: 1,
                    scaleY: 1
                };

            function an(t, e, n, r, i, a) {
                var o, c, s;
                return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (s = t * n + e * r) && (n -= t * s, r -= e * s), (c = Math.sqrt(n * n + r * r)) && (n /= c, r /= c, s /= c), t * r < e * n && (t = -t, e = -e, s = -s, o = -o), {
                    translateX: i,
                    translateY: a,
                    rotate: Math.atan2(e, t) * nn,
                    skewX: Math.atan(s) * nn,
                    scaleX: o,
                    scaleY: c
                }
            }

            function on(n, c, s, o) {
                function l(t) {
                    return t.length ? t.pop() + " " : ""
                }
                return function(t, e) {
                    var i = [],
                        a = [];
                    return t = n(t), e = n(e),
                        function(t, e, n, r, i, a) {
                            if (t !== n || e !== r) {
                                var o = i.push("translate(", null, c, null, s);
                                a.push({
                                    i: o - 4,
                                    x: Ve(t, n)
                                }, {
                                    i: o - 2,
                                    x: Ve(e, r)
                                })
                            } else(n || r) && i.push("translate(" + n + c + r + s)
                        }(t.translateX, t.translateY, e.translateX, e.translateY, i, a),
                        function(t, e, n, r) {
                            t !== e ? (180 < t - e ? e += 360 : 180 < e - t && (t += 360), r.push({
                                i: n.push(l(n) + "rotate(", null, o) - 2,
                                x: Ve(t, e)
                            })) : e && n.push(l(n) + "rotate(" + e + o)
                        }(t.rotate, e.rotate, i, a),
                        function(t, e, n, r) {
                            t !== e ? r.push({
                                i: n.push(l(n) + "skewX(", null, o) - 2,
                                x: Ve(t, e)
                            }) : e && n.push(l(n) + "skewX(" + e + o)
                        }(t.skewX, e.skewX, i, a),
                        function(t, e, n, r, i, a) {
                            if (t !== n || e !== r) {
                                var o = i.push(l(i) + "scale(", null, ",", null, ")");
                                a.push({
                                    i: o - 4,
                                    x: Ve(t, n)
                                }, {
                                    i: o - 2,
                                    x: Ve(e, r)
                                })
                            } else 1 === n && 1 === r || i.push(l(i) + "scale(" + n + "," + r + ")")
                        }(t.scaleX, t.scaleY, e.scaleX, e.scaleY, i, a), t = e = null,
                        function(t) {
                            for (var e, n = -1, r = a.length; ++n < r;) i[(e = a[n]).i] = e.x(t);
                            return i.join("")
                        }
                }
            }
            var cn = on(function(t) {
                    return "none" === t ? rn : (Je || (Je = document.createElement("DIV"), Ke = document.documentElement, tn = document.defaultView), Je.style.transform = t, t = tn.getComputedStyle(Ke.appendChild(Je), null).getPropertyValue("transform"), Ke.removeChild(Je), an(+(t = t.slice(7, -1).split(","))[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
                }, "px, ", "px)", "deg)"),
                sn = on(function(t) {
                    return null == t ? rn : ((en = en || document.createElementNS("http://www.w3.org/2000/svg", "g")).setAttribute("transform", t), (t = en.transform.baseVal.consolidate()) ? an((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : rn)
                }, ", ", ")", ")");
            var ln, un = (ln = qe, function(e, t) {
                var n = ln((e = ce(e)).h, (t = ce(t)).h),
                    r = Be(e.s, t.s),
                    i = Be(e.l, t.l),
                    a = Be(e.opacity, t.opacity);
                return function(t) {
                    return e.h = n(t), e.s = r(t), e.l = i(t), e.opacity = a(t), e + ""
                }
            });

            function fn(e, t) {
                var n = Be((e = ve(e)).l, (t = ve(t)).l),
                    r = Be(e.a, t.a),
                    i = Be(e.b, t.b),
                    a = Be(e.opacity, t.opacity);
                return function(t) {
                    return e.l = n(t), e.a = r(t), e.b = i(t), e.opacity = a(t), e + ""
                }
            }
            var hn, dn = (hn = qe, function(e, t) {
                var n = hn((e = Ae(e)).h, (t = Ae(t)).h),
                    r = Be(e.c, t.c),
                    i = Be(e.l, t.l),
                    a = Be(e.opacity, t.opacity);
                return function(t) {
                    return e.h = n(t), e.c = r(t), e.l = i(t), e.opacity = a(t), e + ""
                }
            });

            function _n(c) {
                return function t(o) {
                    function e(e, t) {
                        var n = c((e = He(e)).h, (t = He(t)).h),
                            r = Be(e.s, t.s),
                            i = Be(e.l, t.l),
                            a = Be(e.opacity, t.opacity);
                        return function(t) {
                            return e.h = n(t), e.s = r(t), e.l = i(Math.pow(t, o)), e.opacity = a(t), e + ""
                        }
                    }
                    return o = +o, e.gamma = t, e
                }(1)
            }
            _n(qe);
            var pn = _n(Be);

            function bn(t, e, n) {
                var r = t._id;
                return t.each(function() {
                        var t = zt(this, r);
                        (t.value || (t.value = {}))[e] = n.apply(this, arguments)
                    }),
                    function(t) {
                        return Dt(t, r).value[e]
                    }
            }

            function yn(t, e) {
                var n;
                return ("number" == typeof e ? Ve : e instanceof Gt ? je : (n = Gt(e)) ? (e = n, je) : $e)(t, e)
            }
            var gn = V.prototype.constructor;

            function mn(t) {
                return function() {
                    this.style.removeProperty(t)
                }
            }
            var vn = 0;

            function xn(t, e, n, r) {
                this._groups = t, this._parents = e, this._name = n, this._id = r
            }

            function wn() {
                return ++vn
            }
            var Mn = V.prototype;
            xn.prototype = function(t) {
                return V().transition(t)
            }.prototype = {
                constructor: xn,
                select: function(t) {
                    var e = this._name,
                        n = this._id;
                    "function" != typeof t && (t = p(t));
                    for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
                        for (var c, s, l = r[o], u = l.length, f = a[o] = new Array(u), h = 0; h < u; ++h)(c = l[h]) && (s = t.call(c, c.__data__, h, l)) && ("__data__" in c && (s.__data__ = c.__data__), f[h] = s, St(f[h], e, n, h, f, Dt(c, n)));
                    return new xn(a, this._parents, e, n)
                },
                selectAll: function(t) {
                    var e = this._name,
                        n = this._id;
                    "function" != typeof t && (t = y(t));
                    for (var r = this._groups, i = r.length, a = [], o = [], c = 0; c < i; ++c)
                        for (var s, l = r[c], u = l.length, f = 0; f < u; ++f)
                            if (s = l[f]) {
                                for (var h, d = t.call(s, s.__data__, f, l), _ = Dt(s, n), p = 0, b = d.length; p < b; ++p)(h = d[p]) && St(h, e, n, p, d, _);
                                a.push(d), o.push(s)
                            }
                    return new xn(a, o, e, n)
                },
                filter: function(t) {
                    "function" != typeof t && (t = h(t));
                    for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
                        for (var a, o = e[i], c = o.length, s = r[i] = [], l = 0; l < c; ++l)(a = o[l]) && t.call(a, a.__data__, l, o) && s.push(a);
                    return new xn(r, this._parents, this._name, this._id)
                },
                merge: function(t) {
                    if (t._id !== this._id) throw new Error;
                    for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), c = 0; c < a; ++c)
                        for (var s, l = e[c], u = n[c], f = l.length, h = o[c] = new Array(f), d = 0; d < f; ++d)(s = l[d] || u[d]) && (h[d] = s);
                    for (; c < r; ++c) o[c] = e[c];
                    return new xn(o, this._parents, this._name, this._id)
                },
                selection: function() {
                    return new gn(this._groups, this._parents)
                },
                transition: function() {
                    for (var t = this._name, e = this._id, n = wn(), r = this._groups, i = r.length, a = 0; a < i; ++a)
                        for (var o, c = r[a], s = c.length, l = 0; l < s; ++l)
                            if (o = c[l]) {
                                var u = Dt(o, e);
                                St(o, t, n, l, c, {
                                    time: u.time + u.delay + u.duration,
                                    delay: 0,
                                    duration: u.duration,
                                    ease: u.ease
                                })
                            }
                    return new xn(r, this._parents, t, n)
                },
                call: Mn.call,
                nodes: Mn.nodes,
                node: Mn.node,
                size: Mn.size,
                empty: Mn.empty,
                each: Mn.each,
                on: function(t, e) {
                    var n = this._id;
                    return arguments.length < 2 ? Dt(this.node(), n).on.on(t) : this.each(function(n, r, i) {
                        var a, o, c = function(t) {
                            return (t + "").trim().split(/^|\s+/).every(function(t) {
                                var e = t.indexOf(".");
                                return 0 <= e && (t = t.slice(0, e)), !t || "start" === t
                            })
                        }(r) ? Et : zt;
                        return function() {
                            var t = c(this, n),
                                e = t.on;
                            e !== a && (o = (a = e).copy()).on(r, i), t.on = o
                        }
                    }(n, t, e))
                },
                attr: function(t, e) {
                    var n = a(t),
                        r = "transform" === n ? sn : yn;
                    return this.attrTween(t, "function" == typeof e ? (n.local ? function(r, i, a) {
                        var o, c, s;
                        return function() {
                            var t, e, n = a(this);
                            if (null != n) return (t = this.getAttributeNS(r.space, r.local)) === (e = n + "") ? null : t === o && e === c ? s : (c = e, s = i(o = t, n));
                            this.removeAttributeNS(r.space, r.local)
                        }
                    } : function(r, i, a) {
                        var o, c, s;
                        return function() {
                            var t, e, n = a(this);
                            if (null != n) return (t = this.getAttribute(r)) === (e = n + "") ? null : t === o && e === c ? s : (c = e, s = i(o = t, n));
                            this.removeAttribute(r)
                        }
                    })(n, r, bn(this, "attr." + t, e)) : null == e ? (n.local ? function(t) {
                        return function() {
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function(t) {
                        return function() {
                            this.removeAttribute(t)
                        }
                    })(n) : (n.local ? function(e, n, r) {
                        var i, a, o = r + "";
                        return function() {
                            var t = this.getAttributeNS(e.space, e.local);
                            return t === o ? null : t === i ? a : a = n(i = t, r)
                        }
                    } : function(e, n, r) {
                        var i, a, o = r + "";
                        return function() {
                            var t = this.getAttribute(e);
                            return t === o ? null : t === i ? a : a = n(i = t, r)
                        }
                    })(n, r, e))
                },
                attrTween: function(t, e) {
                    var n = "attr." + t;
                    if (arguments.length < 2) return (n = this.tween(n)) && n._value;
                    if (null == e) return this.tween(n, null);
                    if ("function" != typeof e) throw new Error;
                    var r = a(t);
                    return this.tween(n, (r.local ? function(e, n) {
                        var r, i;

                        function t() {
                            var t = n.apply(this, arguments);
                            return t !== i && (r = (i = t) && function(e, n) {
                                return function(t) {
                                    this.setAttributeNS(e.space, e.local, n.call(this, t))
                                }
                            }(e, t)), r
                        }
                        return t._value = n, t
                    } : function(e, n) {
                        var r, i;

                        function t() {
                            var t = n.apply(this, arguments);
                            return t !== i && (r = (i = t) && function(e, n) {
                                return function(t) {
                                    this.setAttribute(e, n.call(this, t))
                                }
                            }(e, t)), r
                        }
                        return t._value = n, t
                    })(r, e))
                },
                style: function(t, e, n) {
                    var r = "transform" == (t += "") ? cn : yn;
                    return null == e ? this.styleTween(t, function(n, r) {
                        var i, a, o;
                        return function() {
                            var t = M(this, n),
                                e = (this.style.removeProperty(n), M(this, n));
                            return t === e ? null : t === i && e === a ? o : o = r(i = t, a = e)
                        }
                    }(t, r)).on("end.style." + t, mn(t)) : "function" == typeof e ? this.styleTween(t, function(r, i, a) {
                        var o, c, s;
                        return function() {
                            var t = M(this, r),
                                e = a(this),
                                n = e + "";
                            return null == e && (this.style.removeProperty(r), n = e = M(this, r)), t === n ? null : t === o && n === c ? s : (c = n, s = i(o = t, e))
                        }
                    }(t, r, bn(this, "style." + t, e))).each(function(r, i) {
                        var a, o, c, s, l = "style." + i,
                            u = "end." + l;
                        return function() {
                            var t = zt(this, r),
                                e = t.on,
                                n = null == t.value[l] ? s = s || mn(i) : void 0;
                            e === a && c === n || (o = (a = e).copy()).on(u, c = n), t.on = o
                        }
                    }(this._id, t)) : this.styleTween(t, function(e, n, r) {
                        var i, a, o = r + "";
                        return function() {
                            var t = M(this, e);
                            return t === o ? null : t === i ? a : a = n(i = t, r)
                        }
                    }(t, r, e), n).on("end.style." + t, null)
                },
                styleTween: function(t, e, n) {
                    var r = "style." + (t += "");
                    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                    if (null == e) return this.tween(r, null);
                    if ("function" != typeof e) throw new Error;
                    return this.tween(r, function(e, n, r) {
                        var i, a;

                        function t() {
                            var t = n.apply(this, arguments);
                            return t !== a && (i = (a = t) && function(e, n, r) {
                                return function(t) {
                                    this.style.setProperty(e, n.call(this, t), r)
                                }
                            }(e, t, r)), i
                        }
                        return t._value = n, t
                    }(t, e, null == n ? "" : n))
                },
                text: function(t) {
                    return this.tween("text", "function" == typeof t ? function(e) {
                        return function() {
                            var t = e(this);
                            this.textContent = null == t ? "" : t
                        }
                    }(bn(this, "text", t)) : function(t) {
                        return function() {
                            this.textContent = t
                        }
                    }(null == t ? "" : t + ""))
                },
                textTween: function(t) {
                    var e = "text";
                    if (arguments.length < 1) return (e = this.tween(e)) && e._value;
                    if (null == t) return this.tween(e, null);
                    if ("function" != typeof t) throw new Error;
                    return this.tween(e, function(e) {
                        var n, r;

                        function t() {
                            var t = e.apply(this, arguments);
                            return t !== r && (n = (r = t) && function(e) {
                                return function(t) {
                                    this.textContent = e.call(this, t)
                                }
                            }(t)), n
                        }
                        return t._value = e, t
                    }(t))
                },
                remove: function() {
                    return this.on("end.remove", function(n) {
                        return function() {
                            var t = this.parentNode;
                            for (var e in this.__transition)
                                if (+e !== n) return;
                            t && t.removeChild(this)
                        }
                    }(this._id))
                },
                tween: function(t, e) {
                    var n = this._id;
                    if (t += "", arguments.length < 2) {
                        for (var r, i = Dt(this.node(), n).tween, a = 0, o = i.length; a < o; ++a)
                            if ((r = i[a]).name === t) return r.value;
                        return null
                    }
                    return this.each((null == e ? function(i, a) {
                        var o, c;
                        return function() {
                            var t = zt(this, i),
                                e = t.tween;
                            if (e !== o)
                                for (var n = 0, r = (c = o = e).length; n < r; ++n)
                                    if (c[n].name === a) {
                                        (c = c.slice()).splice(n, 1);
                                        break
                                    }
                            t.tween = c
                        }
                    } : function(a, o, c) {
                        var s, l;
                        if ("function" != typeof c) throw new Error;
                        return function() {
                            var t = zt(this, a),
                                e = t.tween;
                            if (e !== s) {
                                l = (s = e).slice();
                                for (var n = {
                                        name: o,
                                        value: c
                                    }, r = 0, i = l.length; r < i; ++r)
                                    if (l[r].name === o) {
                                        l[r] = n;
                                        break
                                    }
                                r === i && l.push(n)
                            }
                            t.tween = l
                        }
                    })(n, t, e))
                },
                delay: function(t) {
                    var e = this._id;
                    return arguments.length ? this.each(("function" == typeof t ? function(t, e) {
                        return function() {
                            Et(this, t).delay = +e.apply(this, arguments)
                        }
                    } : function(t, e) {
                        return e = +e,
                            function() {
                                Et(this, t).delay = e
                            }
                    })(e, t)) : Dt(this.node(), e).delay
                },
                duration: function(t) {
                    var e = this._id;
                    return arguments.length ? this.each(("function" == typeof t ? function(t, e) {
                        return function() {
                            zt(this, t).duration = +e.apply(this, arguments)
                        }
                    } : function(t, e) {
                        return e = +e,
                            function() {
                                zt(this, t).duration = e
                            }
                    })(e, t)) : Dt(this.node(), e).duration
                },
                ease: function(t) {
                    var e = this._id;
                    return arguments.length ? this.each(function(t, e) {
                        if ("function" != typeof e) throw new Error;
                        return function() {
                            zt(this, t).ease = e
                        }
                    }(e, t)) : Dt(this.node(), e).ease
                },
                end: function() {
                    var i, a, o = this,
                        c = o._id,
                        s = o.size();
                    return new Promise(function(t, e) {
                        var n = {
                                value: e
                            },
                            r = {
                                value: function() {
                                    0 == --s && t()
                                }
                            };
                        o.each(function() {
                            var t = zt(this, c),
                                e = t.on;
                            e !== i && ((a = (i = e).copy())._.cancel.push(n), a._.interrupt.push(n), a._.end.push(r)), t.on = a
                        })
                    })
                }
            };
            var kn = {
                time: null,
                delay: 0,
                duration: 250,
                ease: function(t) {
                    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
                }
            };

            function Tn(t, e) {
                for (var n; !(n = t.__transition) || !(n = n[e]);)
                    if (!(t = t.parentNode)) return kn.time = ht(), kn;
                return n
            }

            function An(t, e) {
                return t < e ? -1 : e < t ? 1 : e <= t ? 0 : NaN
            }
            V.prototype.interrupt = function(t) {
                return this.each(function() {
                    ! function(t, e) {
                        var n, r, i, a = t.__transition,
                            o = !0;
                        if (a) {
                            for (i in e = null == e ? null : e + "", a)(n = a[i]).name === e ? (r = n.state > kt && n.state < Ct, n.state = Nt, n.timer.stop(), n.on.call(r ? "interrupt" : "cancel", t, t.__data__, n.index, n.group), delete a[i]) : o = !1;
                            o && delete t.__transition
                        }
                    }(this, t)
                })
            }, V.prototype.transition = function(t) {
                var e, n;
                t = t instanceof xn ? (e = t._id, t._name) : (e = wn(), (n = kn).time = ht(), null == t ? null : t + "");
                for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
                    for (var o, c = r[a], s = c.length, l = 0; l < s; ++l)(o = c[l]) && St(o, t, e, l, c, n || Tn(o, e));
                return new xn(r, this._parents, t, e)
            };
            var Cn, Nn, Sn = (1 === (Nn = An).length && (Cn = Nn, Nn = function(t, e) {
                return An(Cn(t), e)
            }), {
                left: function(t, e, n, r) {
                    for (null == n && (n = 0), null == r && (r = t.length); n < r;) {
                        var i = n + r >>> 1;
                        Nn(t[i], e) < 0 ? n = 1 + i : r = i
                    }
                    return n
                },
                right: function(t, e, n, r) {
                    for (null == n && (n = 0), null == r && (r = t.length); n < r;) {
                        var i = n + r >>> 1;
                        0 < Nn(t[i], e) ? r = i : n = 1 + i
                    }
                    return n
                }
            }).right;
            var En = Math.sqrt(50),
                zn = Math.sqrt(10),
                Dn = Math.sqrt(2);

            function Fn(t, e, n) {
                var r, i, a, o, c = -1;
                if (n = +n, (t = +t) === (e = +e) && 0 < n) return [t];
                if ((r = e < t) && (i = t, t = e, e = i), 0 === (o = Ln(t, e, n)) || !isFinite(o)) return [];
                if (0 < o)
                    for (t = Math.ceil(t / o), e = Math.floor(e / o), a = new Array(i = Math.ceil(e - t + 1)); ++c < i;) a[c] = (t + c) * o;
                else
                    for (t = Math.floor(t * o), e = Math.ceil(e * o), a = new Array(i = Math.ceil(t - e + 1)); ++c < i;) a[c] = (t - c) / o;
                return r && a.reverse(), a
            }

            function Ln(t, e, n) {
                var r = (e - t) / Math.max(0, n),
                    i = Math.floor(Math.log(r) / Math.LN10),
                    a = r / Math.pow(10, i);
                return 0 <= i ? (En <= a ? 10 : zn <= a ? 5 : Dn <= a ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (En <= a ? 10 : zn <= a ? 5 : Dn <= a ? 2 : 1)
            }

            function Pn(t, e, n) {
                var r = Math.abs(e - t) / Math.max(0, n),
                    i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
                    a = r / i;
                return En <= a ? i *= 10 : zn <= a ? i *= 5 : Dn <= a && (i *= 2), e < t ? -i : i
            }

            function Hn(t, e) {
                var n, r, i = t.length,
                    a = -1;
                if (null == e) {
                    for (; ++a < i;)
                        if (null != (n = t[a]) && n <= n)
                            for (r = n; ++a < i;) null != (n = t[a]) && r < n && (r = n)
                } else
                    for (; ++a < i;)
                        if (null != (n = e(t[a], a, t)) && n <= n)
                            for (r = n; ++a < i;) null != (n = e(t[a], a, t)) && r < n && (r = n); return r
            }

            function Un(t, e) {
                var n, r, i = t.length,
                    a = -1;
                if (null == e) {
                    for (; ++a < i;)
                        if (null != (n = t[a]) && n <= n)
                            for (r = n; ++a < i;) null != (n = t[a]) && n < r && (r = n)
                } else
                    for (; ++a < i;)
                        if (null != (n = e(t[a], a, t)) && n <= n)
                            for (r = n; ++a < i;) null != (n = e(t[a], a, t)) && n < r && (r = n); return r
            }
            var On = Math.PI,
                Rn = 2 * On,
                qn = 1e-6,
                Yn = Rn - qn;

            function Bn() {
                this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
            }

            function jn() {
                return new Bn
            }

            function In(t) {
                return function() {
                    return t
                }
            }
            Bn.prototype = jn.prototype = {
                constructor: Bn,
                moveTo: function(t, e) {
                    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e)
                },
                closePath: function() {
                    null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
                },
                lineTo: function(t, e) {
                    this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e)
                },
                quadraticCurveTo: function(t, e, n, r) {
                    this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r)
                },
                bezierCurveTo: function(t, e, n, r, i, a) {
                    this._ += "C" + +t + "," + +e + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a)
                },
                arcTo: function(t, e, n, r, i) {
                    t = +t, e = +e, n = +n, r = +r, i = +i;
                    var a = this._x1,
                        o = this._y1,
                        c = n - t,
                        s = r - e,
                        l = a - t,
                        u = o - e,
                        f = l * l + u * u;
                    if (i < 0) throw new Error("negative radius: " + i);
                    if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
                    else if (qn < f)
                        if (Math.abs(u * c - s * l) > qn && i) {
                            var h = n - a,
                                d = r - o,
                                _ = c * c + s * s,
                                p = h * h + d * d,
                                b = Math.sqrt(_),
                                y = Math.sqrt(f),
                                g = i * Math.tan((On - Math.acos((_ + f - p) / (2 * b * y))) / 2),
                                m = g / y,
                                v = g / b;
                            Math.abs(m - 1) > qn && (this._ += "L" + (t + m * l) + "," + (e + m * u)), this._ += "A" + i + "," + i + ",0,0," + +(l * d < u * h) + "," + (this._x1 = t + v * c) + "," + (this._y1 = e + v * s)
                        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
                    else;
                },
                arc: function(t, e, n, r, i, a) {
                    t = +t, e = +e, a = !!a;
                    var o = (n = +n) * Math.cos(r),
                        c = n * Math.sin(r),
                        s = t + o,
                        l = e + c,
                        u = 1 ^ a,
                        f = a ? r - i : i - r;
                    if (n < 0) throw new Error("negative radius: " + n);
                    null === this._x1 ? this._ += "M" + s + "," + l : (Math.abs(this._x1 - s) > qn || Math.abs(this._y1 - l) > qn) && (this._ += "L" + s + "," + l), n && (f < 0 && (f = f % Rn + Rn), Yn < f ? this._ += "A" + n + "," + n + ",0,1," + u + "," + (t - o) + "," + (e - c) + "A" + n + "," + n + ",0,1," + u + "," + (this._x1 = s) + "," + (this._y1 = l) : qn < f && (this._ += "A" + n + "," + n + ",0," + +(On <= f) + "," + u + "," + (this._x1 = t + n * Math.cos(i)) + "," + (this._y1 = e + n * Math.sin(i))))
                },
                rect: function(t, e, n, r) {
                    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z"
                },
                toString: function() {
                    return this._
                }
            };
            var Xn = Math.abs,
                Vn = Math.atan2,
                Wn = Math.cos,
                Zn = Math.max,
                $n = Math.min,
                Gn = Math.sin,
                Qn = Math.sqrt,
                Jn = 1e-12,
                Kn = Math.PI,
                tr = Kn / 2,
                er = 2 * Kn;

            function nr(t) {
                return 1 <= t ? tr : t <= -1 ? -tr : Math.asin(t)
            }

            function rr(t) {
                return t.innerRadius
            }

            function ir(t) {
                return t.outerRadius
            }

            function ar(t) {
                return t.startAngle
            }

            function or(t) {
                return t.endAngle
            }

            function cr(t) {
                return t && t.padAngle
            }

            function sr(t, e, n, r, i, a, o) {
                var c = t - n,
                    s = e - r,
                    l = (o ? a : -a) / Qn(c * c + s * s),
                    u = l * s,
                    f = -l * c,
                    h = t + u,
                    d = e + f,
                    _ = n + u,
                    p = r + f,
                    b = (h + _) / 2,
                    y = (d + p) / 2,
                    g = _ - h,
                    m = p - d,
                    v = g * g + m * m,
                    x = i - a,
                    w = h * p - _ * d,
                    M = (m < 0 ? -1 : 1) * Qn(Zn(0, x * x * v - w * w)),
                    k = (w * m - g * M) / v,
                    T = (-w * g - m * M) / v,
                    A = (w * m + g * M) / v,
                    C = (-w * g + m * M) / v,
                    N = k - b,
                    S = T - y,
                    E = A - b,
                    z = C - y;
                return E * E + z * z < N * N + S * S && (k = A, T = C), {
                    cx: k,
                    cy: T,
                    x01: -u,
                    y01: -f,
                    x11: k * (i / x - 1),
                    y11: T * (i / x - 1)
                }
            }

            function lr(t) {
                this._context = t
            }

            function ur(t) {
                return new lr(t)
            }

            function fr(t) {
                return t[0]
            }

            function hr(t) {
                return t[1]
            }

            function dr() {
                var o = fr,
                    c = hr,
                    s = In(!0),
                    l = null,
                    u = ur,
                    f = null;

                function e(t) {
                    var e, n, r, i = t.length,
                        a = !1;
                    for (null == l && (f = u(r = jn())), e = 0; e <= i; ++e) !(e < i && s(n = t[e], e, t)) === a && ((a = !a) ? f.lineStart() : f.lineEnd()), a && f.point(+o(n, e, t), +c(n, e, t));
                    if (r) return f = null, r + "" || null
                }
                return e.x = function(t) {
                    return arguments.length ? (o = "function" == typeof t ? t : In(+t), e) : o
                }, e.y = function(t) {
                    return arguments.length ? (c = "function" == typeof t ? t : In(+t), e) : c
                }, e.defined = function(t) {
                    return arguments.length ? (s = "function" == typeof t ? t : In(!!t), e) : s
                }, e.curve = function(t) {
                    return arguments.length ? (u = t, null != l && (f = u(l)), e) : u
                }, e.context = function(t) {
                    return arguments.length ? (null == t ? l = f = null : f = u(l = t), e) : l
                }, e
            }

            function _r() {
                var u = fr,
                    f = null,
                    h = In(0),
                    d = hr,
                    _ = In(!0),
                    p = null,
                    b = ur,
                    y = null;

                function e(t) {
                    var e, n, r, i, a, o = t.length,
                        c = !1,
                        s = new Array(o),
                        l = new Array(o);
                    for (null == p && (y = b(a = jn())), e = 0; e <= o; ++e) {
                        if (!(e < o && _(i = t[e], e, t)) === c)
                            if (c = !c) n = e, y.areaStart(), y.lineStart();
                            else {
                                for (y.lineEnd(), y.lineStart(), r = e - 1; n <= r; --r) y.point(s[r], l[r]);
                                y.lineEnd(), y.areaEnd()
                            }
                        c && (s[e] = +u(i, e, t), l[e] = +h(i, e, t), y.point(f ? +f(i, e, t) : s[e], d ? +d(i, e, t) : l[e]))
                    }
                    if (a) return y = null, a + "" || null
                }

                function t() {
                    return dr().defined(_).curve(b).context(p)
                }
                return e.x = function(t) {
                    return arguments.length ? (u = "function" == typeof t ? t : In(+t), f = null, e) : u
                }, e.x0 = function(t) {
                    return arguments.length ? (u = "function" == typeof t ? t : In(+t), e) : u
                }, e.x1 = function(t) {
                    return arguments.length ? (f = null == t ? null : "function" == typeof t ? t : In(+t), e) : f
                }, e.y = function(t) {
                    return arguments.length ? (h = "function" == typeof t ? t : In(+t), d = null, e) : h
                }, e.y0 = function(t) {
                    return arguments.length ? (h = "function" == typeof t ? t : In(+t), e) : h
                }, e.y1 = function(t) {
                    return arguments.length ? (d = null == t ? null : "function" == typeof t ? t : In(+t), e) : d
                }, e.lineX0 = e.lineY0 = function() {
                    return t().x(u).y(h)
                }, e.lineY1 = function() {
                    return t().x(u).y(d)
                }, e.lineX1 = function() {
                    return t().x(f).y(h)
                }, e.defined = function(t) {
                    return arguments.length ? (_ = "function" == typeof t ? t : In(!!t), e) : _
                }, e.curve = function(t) {
                    return arguments.length ? (b = t, null != p && (y = b(p)), e) : b
                }, e.context = function(t) {
                    return arguments.length ? (null == t ? p = y = null : y = b(p = t), e) : p
                }, e
            }

            function pr(t, e) {
                return e < t ? -1 : t < e ? 1 : t <= e ? 0 : NaN
            }

            function br(t) {
                return t
            }
            lr.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, e) {
                    switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                            break;
                        case 1:
                            this._point = 2;
                        default:
                            this._context.lineTo(t, e)
                    }
                }
            };
            var yr = mr(ur);

            function gr(t) {
                this._curve = t
            }

            function mr(e) {
                function t(t) {
                    return new gr(e(t))
                }
                return t._curve = e, t
            }

            function vr(t) {
                var e = t.curve;
                return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function(t) {
                    return arguments.length ? e(mr(t)) : e()._curve
                }, t
            }

            function xr() {
                return vr(dr().curve(yr))
            }

            function wr() {
                var t = _r().curve(yr),
                    e = t.curve,
                    n = t.lineX0,
                    r = t.lineX1,
                    i = t.lineY0,
                    a = t.lineY1;
                return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function() {
                    return vr(n())
                }, delete t.lineX0, t.lineEndAngle = function() {
                    return vr(r())
                }, delete t.lineX1, t.lineInnerRadius = function() {
                    return vr(i())
                }, delete t.lineY0, t.lineOuterRadius = function() {
                    return vr(a())
                }, delete t.lineY1, t.curve = function(t) {
                    return arguments.length ? e(mr(t)) : e()._curve
                }, t
            }

            function Mr(t, e) {
                return [(e = +e) * Math.cos(t -= Math.PI / 2), e * Math.sin(t)]
            }
            gr.prototype = {
                areaStart: function() {
                    this._curve.areaStart()
                },
                areaEnd: function() {
                    this._curve.areaEnd()
                },
                lineStart: function() {
                    this._curve.lineStart()
                },
                lineEnd: function() {
                    this._curve.lineEnd()
                },
                point: function(t, e) {
                    this._curve.point(e * Math.sin(t), e * -Math.cos(t))
                }
            };
            var kr = Array.prototype.slice;

            function Tr(t) {
                return t.source
            }

            function Ar(t) {
                return t.target
            }

            function Cr(i) {
                var a = Tr,
                    o = Ar,
                    c = fr,
                    s = hr,
                    l = null;

                function e() {
                    var t, e = kr.call(arguments),
                        n = a.apply(this, e),
                        r = o.apply(this, e);
                    if (l = l || (t = jn()), i(l, +c.apply(this, (e[0] = n, e)), +s.apply(this, e), +c.apply(this, (e[0] = r, e)), +s.apply(this, e)), t) return l = null, t + "" || null
                }
                return e.source = function(t) {
                    return arguments.length ? (a = t, e) : a
                }, e.target = function(t) {
                    return arguments.length ? (o = t, e) : o
                }, e.x = function(t) {
                    return arguments.length ? (c = "function" == typeof t ? t : In(+t), e) : c
                }, e.y = function(t) {
                    return arguments.length ? (s = "function" == typeof t ? t : In(+t), e) : s
                }, e.context = function(t) {
                    return arguments.length ? (l = null == t ? null : t, e) : l
                }, e
            }

            function Nr(t, e, n, r, i) {
                t.moveTo(e, n), t.bezierCurveTo(e = (e + r) / 2, n, e, i, r, i)
            }

            function Sr(t, e, n, r, i) {
                t.moveTo(e, n), t.bezierCurveTo(e, n = (n + i) / 2, r, n, r, i)
            }

            function Er(t, e, n, r, i) {
                var a = Mr(e, n),
                    o = Mr(e, n = (n + i) / 2),
                    c = Mr(r, n),
                    s = Mr(r, i);
                t.moveTo(a[0], a[1]), t.bezierCurveTo(o[0], o[1], c[0], c[1], s[0], s[1])
            }
            var zr = {
                    draw: function(t, e) {
                        var n = Math.sqrt(e / Kn);
                        t.moveTo(n, 0), t.arc(0, 0, n, 0, er)
                    }
                },
                Dr = {
                    draw: function(t, e) {
                        var n = Math.sqrt(e / 5) / 2;
                        t.moveTo(-3 * n, -n), t.lineTo(-n, -n), t.lineTo(-n, -3 * n), t.lineTo(n, -3 * n), t.lineTo(n, -n), t.lineTo(3 * n, -n), t.lineTo(3 * n, n), t.lineTo(n, n), t.lineTo(n, 3 * n), t.lineTo(-n, 3 * n), t.lineTo(-n, n), t.lineTo(-3 * n, n), t.closePath()
                    }
                },
                Fr = Math.sqrt(1 / 3),
                Lr = 2 * Fr,
                Pr = {
                    draw: function(t, e) {
                        var n = Math.sqrt(e / Lr),
                            r = n * Fr;
                        t.moveTo(0, -n), t.lineTo(r, 0), t.lineTo(0, n), t.lineTo(-r, 0), t.closePath()
                    }
                },
                Hr = Math.sin(Kn / 10) / Math.sin(7 * Kn / 10),
                Ur = Math.sin(er / 10) * Hr,
                Or = -Math.cos(er / 10) * Hr,
                Rr = {
                    draw: function(t, e) {
                        var n = Math.sqrt(.8908130915292852 * e),
                            r = Ur * n,
                            i = Or * n;
                        t.moveTo(0, -n), t.lineTo(r, i);
                        for (var a = 1; a < 5; ++a) {
                            var o = er * a / 5,
                                c = Math.cos(o),
                                s = Math.sin(o);
                            t.lineTo(s * n, -c * n), t.lineTo(c * r - s * i, s * r + c * i)
                        }
                        t.closePath()
                    }
                },
                qr = {
                    draw: function(t, e) {
                        var n = Math.sqrt(e),
                            r = -n / 2;
                        t.rect(r, r, n, n)
                    }
                },
                Yr = Math.sqrt(3),
                Br = {
                    draw: function(t, e) {
                        var n = -Math.sqrt(e / (3 * Yr));
                        t.moveTo(0, 2 * n), t.lineTo(-Yr * n, -n), t.lineTo(Yr * n, -n), t.closePath()
                    }
                },
                jr = -.5,
                Ir = Math.sqrt(3) / 2,
                Xr = 1 / Math.sqrt(12),
                Vr = 3 * (Xr / 2 + 1),
                Wr = {
                    draw: function(t, e) {
                        var n = Math.sqrt(e / Vr),
                            r = n / 2,
                            i = n * Xr,
                            a = r,
                            o = n * Xr + n,
                            c = -a,
                            s = o;
                        t.moveTo(r, i), t.lineTo(a, o), t.lineTo(c, s), t.lineTo(jr * r - Ir * i, Ir * r + jr * i), t.lineTo(jr * a - Ir * o, Ir * a + jr * o), t.lineTo(jr * c - Ir * s, Ir * c + jr * s), t.lineTo(jr * r + Ir * i, jr * i - Ir * r), t.lineTo(jr * a + Ir * o, jr * o - Ir * a), t.lineTo(jr * c + Ir * s, jr * s - Ir * c), t.closePath()
                    }
                },
                Zr = [zr, Dr, Pr, qr, Rr, Br, Wr];

            function $r() {}

            function Gr(t, e, n) {
                t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + n) / 6)
            }

            function Qr(t) {
                this._context = t
            }

            function Jr(t) {
                this._context = t
            }

            function Kr(t) {
                this._context = t
            }

            function ti(t, e) {
                this._basis = new Qr(t), this._beta = e
            }
            Qr.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 3:
                            Gr(this, this._x1, this._y1);
                        case 2:
                            this._context.lineTo(this._x1, this._y1)
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, e) {
                    switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                        default:
                            Gr(this, t, e)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
                }
            }, Jr.prototype = {
                areaStart: $r,
                areaEnd: $r,
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x2, this._y2), this._context.closePath();
                            break;
                        case 2:
                            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                    }
                },
                point: function(t, e) {
                    switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._x2 = t, this._y2 = e;
                            break;
                        case 1:
                            this._point = 2, this._x3 = t, this._y3 = e;
                            break;
                        case 2:
                            this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
                            break;
                        default:
                            Gr(this, t, e)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
                }
            }, Kr.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, e) {
                    switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3;
                            var n = (this._x0 + 4 * this._x1 + t) / 6,
                                r = (this._y0 + 4 * this._y1 + e) / 6;
                            this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            Gr(this, t, e)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
                }
            }, ti.prototype = {
                lineStart: function() {
                    this._x = [], this._y = [], this._basis.lineStart()
                },
                lineEnd: function() {
                    var t = this._x,
                        e = this._y,
                        n = t.length - 1;
                    if (0 < n)
                        for (var r, i = t[0], a = e[0], o = t[n] - i, c = e[n] - a, s = -1; ++s <= n;) r = s / n, this._basis.point(this._beta * t[s] + (1 - this._beta) * (i + r * o), this._beta * e[s] + (1 - this._beta) * (a + r * c));
                    this._x = this._y = null, this._basis.lineEnd()
                },
                point: function(t, e) {
                    this._x.push(+t), this._y.push(+e)
                }
            };
            var ei = function e(n) {
                function t(t) {
                    return 1 === n ? new Qr(t) : new ti(t, n)
                }
                return t.beta = function(t) {
                    return e(+t)
                }, t
            }(.85);

            function ni(t, e, n) {
                t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - e), t._y2 + t._k * (t._y1 - n), t._x2, t._y2)
            }

            function ri(t, e) {
                this._context = t, this._k = (1 - e) / 6
            }
            ri.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x2, this._y2);
                            break;
                        case 3:
                            ni(this, this._x1, this._y1)
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, e) {
                    switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                            break;
                        case 1:
                            this._point = 2, this._x1 = t, this._y1 = e;
                            break;
                        case 2:
                            this._point = 3;
                        default:
                            ni(this, t, e)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
                }
            };
            var ii = function e(n) {
                function t(t) {
                    return new ri(t, n)
                }
                return t.tension = function(t) {
                    return e(+t)
                }, t
            }(0);

            function ai(t, e) {
                this._context = t, this._k = (1 - e) / 6
            }
            ai.prototype = {
                areaStart: $r,
                areaEnd: $r,
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 2:
                            this._context.lineTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                    }
                },
                point: function(t, e) {
                    switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._x3 = t, this._y3 = e;
                            break;
                        case 1:
                            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
                            break;
                        case 2:
                            this._point = 3, this._x5 = t, this._y5 = e;
                            break;
                        default:
                            ni(this, t, e)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
                }
            };
            var oi = function e(n) {
                function t(t) {
                    return new ai(t, n)
                }
                return t.tension = function(t) {
                    return e(+t)
                }, t
            }(0);

            function ci(t, e) {
                this._context = t, this._k = (1 - e) / 6
            }
            ci.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, e) {
                    switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            ni(this, t, e)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
                }
            };
            var si = function e(n) {
                function t(t) {
                    return new ci(t, n)
                }
                return t.tension = function(t) {
                    return e(+t)
                }, t
            }(0);

            function li(t, e, n) {
                var r = t._x1,
                    i = t._y1,
                    a = t._x2,
                    o = t._y2;
                if (t._l01_a > Jn) {
                    var c = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                        s = 3 * t._l01_a * (t._l01_a + t._l12_a);
                    r = (r * c - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / s, i = (i * c - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / s
                }
                if (t._l23_a > Jn) {
                    var l = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                        u = 3 * t._l23_a * (t._l23_a + t._l12_a);
                    a = (a * l + t._x1 * t._l23_2a - e * t._l12_2a) / u, o = (o * l + t._y1 * t._l23_2a - n * t._l12_2a) / u
                }
                t._context.bezierCurveTo(r, i, a, o, t._x2, t._y2)
            }

            function ui(t, e) {
                this._context = t, this._alpha = e
            }
            ui.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x2, this._y2);
                            break;
                        case 3:
                            this.point(this._x2, this._y2)
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, e) {
                    if (t = +t, e = +e, this._point) {
                        var n = this._x2 - t,
                            r = this._y2 - e;
                        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3;
                        default:
                            li(this, t, e)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
                }
            };
            var fi = function e(n) {
                function t(t) {
                    return n ? new ui(t, n) : new ri(t, 0)
                }
                return t.alpha = function(t) {
                    return e(+t)
                }, t
            }(.5);

            function hi(t, e) {
                this._context = t, this._alpha = e
            }
            hi.prototype = {
                areaStart: $r,
                areaEnd: $r,
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 2:
                            this._context.lineTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                    }
                },
                point: function(t, e) {
                    if (t = +t, e = +e, this._point) {
                        var n = this._x2 - t,
                            r = this._y2 - e;
                        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._x3 = t, this._y3 = e;
                            break;
                        case 1:
                            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = e);
                            break;
                        case 2:
                            this._point = 3, this._x5 = t, this._y5 = e;
                            break;
                        default:
                            li(this, t, e)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
                }
            };
            var di = function e(n) {
                function t(t) {
                    return n ? new hi(t, n) : new ai(t, 0)
                }
                return t.alpha = function(t) {
                    return e(+t)
                }, t
            }(.5);

            function _i(t, e) {
                this._context = t, this._alpha = e
            }
            _i.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, e) {
                    if (t = +t, e = +e, this._point) {
                        var n = this._x2 - t,
                            r = this._y2 - e;
                        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            li(this, t, e)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e
                }
            };
            var pi = function e(n) {
                function t(t) {
                    return n ? new _i(t, n) : new ci(t, 0)
                }
                return t.alpha = function(t) {
                    return e(+t)
                }, t
            }(.5);

            function bi(t) {
                this._context = t
            }

            function yi(t) {
                return t < 0 ? -1 : 1
            }

            function gi(t, e, n) {
                var r = t._x1 - t._x0,
                    i = e - t._x1,
                    a = (t._y1 - t._y0) / (r || i < 0 && -0),
                    o = (n - t._y1) / (i || r < 0 && -0),
                    c = (a * i + o * r) / (r + i);
                return (yi(a) + yi(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(c)) || 0
            }

            function mi(t, e) {
                var n = t._x1 - t._x0;
                return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e
            }

            function vi(t, e, n) {
                var r = t._x0,
                    i = t._y0,
                    a = t._x1,
                    o = t._y1,
                    c = (a - r) / 3;
                t._context.bezierCurveTo(r + c, i + c * e, a - c, o - c * n, a, o)
            }

            function xi(t) {
                this._context = t
            }

            function wi(t) {
                this._context = new Mi(t)
            }

            function Mi(t) {
                this._context = t
            }

            function ki(t) {
                this._context = t
            }

            function Ti(t) {
                var e, n, r = t.length - 1,
                    i = new Array(r),
                    a = new Array(r),
                    o = new Array(r);
                for (a[i[0] = 0] = 2, o[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e) i[e] = 1, a[e] = 4, o[e] = 4 * t[e] + 2 * t[e + 1];
                for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * t[r - 1] + t[r], e = 1; e < r; ++e) n = i[e] / a[e - 1], a[e] -= n, o[e] -= n * o[e - 1];
                for (i[r - 1] = o[r - 1] / a[r - 1], e = r - 2; 0 <= e; --e) i[e] = (o[e] - i[e + 1]) / a[e];
                for (a[r - 1] = (t[r] + i[r - 1]) / 2, e = 0; e < r - 1; ++e) a[e] = 2 * t[e + 1] - i[e + 1];
                return [i, a]
            }

            function Ai(t, e) {
                this._context = t, this._t = e
            }

            function Ci(t, e) {
                if (1 < (i = t.length))
                    for (var n, r, i, a = 1, o = t[e[0]], c = o.length; a < i; ++a)
                        for (r = o, o = t[e[a]], n = 0; n < c; ++n) o[n][1] += o[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1]
            }

            function Ni(t) {
                for (var e = t.length, n = new Array(e); 0 <= --e;) n[e] = e;
                return n
            }

            function Si(t, e) {
                return t[e]
            }

            function Ei(t) {
                var n = t.map(zi);
                return Ni(t).sort(function(t, e) {
                    return n[t] - n[e]
                })
            }

            function zi(t) {
                for (var e, n = -1, r = 0, i = t.length, a = -1 / 0; ++n < i;)(e = +t[n][1]) > a && (a = e, r = n);
                return r
            }

            function Di(t) {
                var n = t.map(Fi);
                return Ni(t).sort(function(t, e) {
                    return n[t] - n[e]
                })
            }

            function Fi(t) {
                for (var e, n = 0, r = -1, i = t.length; ++r < i;)(e = +t[r][1]) && (n += e);
                return n
            }
            bi.prototype = {
                areaStart: $r,
                areaEnd: $r,
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    this._point && this._context.closePath()
                },
                point: function(t, e) {
                    t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e))
                }
            }, xi.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x1, this._y1);
                            break;
                        case 3:
                            vi(this, this._t0, mi(this, this._t0))
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, e) {
                    var n = NaN;
                    if (e = +e, (t = +t) !== this._x1 || e !== this._y1) {
                        switch (this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3, vi(this, mi(this, n = gi(this, t, e)), n);
                                break;
                            default:
                                vi(this, this._t0, n = gi(this, t, e))
                        }
                        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n
                    }
                }
            }, (wi.prototype = Object.create(xi.prototype)).point = function(t, e) {
                xi.prototype.point.call(this, e, t)
            }, Mi.prototype = {
                moveTo: function(t, e) {
                    this._context.moveTo(e, t)
                },
                closePath: function() {
                    this._context.closePath()
                },
                lineTo: function(t, e) {
                    this._context.lineTo(e, t)
                },
                bezierCurveTo: function(t, e, n, r, i, a) {
                    this._context.bezierCurveTo(e, t, r, n, a, i)
                }
            }, ki.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x = [], this._y = []
                },
                lineEnd: function() {
                    var t = this._x,
                        e = this._y,
                        n = t.length;
                    if (n)
                        if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), 2 === n) this._context.lineTo(t[1], e[1]);
                        else
                            for (var r = Ti(t), i = Ti(e), a = 0, o = 1; o < n; ++a, ++o) this._context.bezierCurveTo(r[0][a], i[0][a], r[1][a], i[1][a], t[o], e[o]);
                        (this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
                },
                point: function(t, e) {
                    this._x.push(+t), this._y.push(+e)
                }
            }, Ai.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x = this._y = NaN, this._point = 0
                },
                lineEnd: function() {
                    0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), 0 <= this._line && (this._t = 1 - this._t, this._line = 1 - this._line)
                },
                point: function(t, e) {
                    switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                            break;
                        case 1:
                            this._point = 2;
                        default:
                            if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                            else {
                                var n = this._x * (1 - this._t) + t * this._t;
                                this._context.lineTo(n, this._y), this._context.lineTo(n, e)
                            }
                    }
                    this._x = t, this._y = e
                }
            };
            var Li = Object.freeze({
                    __proto__: null,
                    arc: function() {
                        var O = rr,
                            R = ir,
                            q = In(0),
                            Y = null,
                            B = ar,
                            j = or,
                            I = cr,
                            X = null;

                        function e() {
                            var t, e, n = +O.apply(this, arguments),
                                r = +R.apply(this, arguments),
                                i = B.apply(this, arguments) - tr,
                                a = j.apply(this, arguments) - tr,
                                o = Xn(a - i),
                                c = i < a;
                            if (X = X || (t = jn()), r < n && (e = r, r = n, n = e), Jn < r)
                                if (er - Jn < o) X.moveTo(r * Wn(i), r * Gn(i)), X.arc(0, 0, r, i, a, !c), Jn < n && (X.moveTo(n * Wn(a), n * Gn(a)), X.arc(0, 0, n, a, i, c));
                                else {
                                    var s, l, u = i,
                                        f = a,
                                        h = i,
                                        d = a,
                                        _ = o,
                                        p = o,
                                        b = I.apply(this, arguments) / 2,
                                        y = Jn < b && (Y ? +Y.apply(this, arguments) : Qn(n * n + r * r)),
                                        g = $n(Xn(r - n) / 2, +q.apply(this, arguments)),
                                        m = g,
                                        v = g;
                                    if (Jn < y) {
                                        var x = nr(y / n * Gn(b)),
                                            w = nr(y / r * Gn(b));
                                        (_ -= 2 * x) > Jn ? (h += x *= c ? 1 : -1, d -= x) : (_ = 0, h = d = (i + a) / 2), (p -= 2 * w) > Jn ? (u += w *= c ? 1 : -1, f -= w) : (p = 0, u = f = (i + a) / 2)
                                    }
                                    var M = r * Wn(u),
                                        k = r * Gn(u),
                                        T = n * Wn(d),
                                        A = n * Gn(d);
                                    if (Jn < g) {
                                        var C, N = r * Wn(f),
                                            S = r * Gn(f),
                                            E = n * Wn(h),
                                            z = n * Gn(h);
                                        if (o < Kn && (C = function(t, e, n, r, i, a, o, c) {
                                                var s = n - t,
                                                    l = r - e,
                                                    u = o - i,
                                                    f = c - a,
                                                    h = f * s - u * l;
                                                if (!(h * h < Jn)) return [t + (h = (u * (e - a) - f * (t - i)) / h) * s, e + h * l]
                                            }(M, k, E, z, N, S, T, A))) {
                                            var D = M - C[0],
                                                F = k - C[1],
                                                L = N - C[0],
                                                P = S - C[1],
                                                H = 1 / Gn(function(t) {
                                                    return 1 < t ? 0 : t < -1 ? Kn : Math.acos(t)
                                                }((D * L + F * P) / (Qn(D * D + F * F) * Qn(L * L + P * P))) / 2),
                                                U = Qn(C[0] * C[0] + C[1] * C[1]);
                                            m = $n(g, (n - U) / (H - 1)), v = $n(g, (r - U) / (1 + H))
                                        }
                                    }
                                    Jn < p ? Jn < v ? (s = sr(E, z, M, k, r, v, c), l = sr(N, S, T, A, r, v, c), X.moveTo(s.cx + s.x01, s.cy + s.y01), v < g ? X.arc(s.cx, s.cy, v, Vn(s.y01, s.x01), Vn(l.y01, l.x01), !c) : (X.arc(s.cx, s.cy, v, Vn(s.y01, s.x01), Vn(s.y11, s.x11), !c), X.arc(0, 0, r, Vn(s.cy + s.y11, s.cx + s.x11), Vn(l.cy + l.y11, l.cx + l.x11), !c), X.arc(l.cx, l.cy, v, Vn(l.y11, l.x11), Vn(l.y01, l.x01), !c))) : (X.moveTo(M, k), X.arc(0, 0, r, u, f, !c)) : X.moveTo(M, k), Jn < n && Jn < _ ? Jn < m ? (s = sr(T, A, N, S, n, -m, c), l = sr(M, k, E, z, n, -m, c), X.lineTo(s.cx + s.x01, s.cy + s.y01), m < g ? X.arc(s.cx, s.cy, m, Vn(s.y01, s.x01), Vn(l.y01, l.x01), !c) : (X.arc(s.cx, s.cy, m, Vn(s.y01, s.x01), Vn(s.y11, s.x11), !c), X.arc(0, 0, n, Vn(s.cy + s.y11, s.cx + s.x11), Vn(l.cy + l.y11, l.cx + l.x11), c), X.arc(l.cx, l.cy, m, Vn(l.y11, l.x11), Vn(l.y01, l.x01), !c))) : X.arc(0, 0, n, d, h, c) : X.lineTo(T, A)
                                }
                            else X.moveTo(0, 0);
                            if (X.closePath(), t) return X = null, t + "" || null
                        }
                        return e.centroid = function() {
                            var t = (+O.apply(this, arguments) + +R.apply(this, arguments)) / 2,
                                e = (+B.apply(this, arguments) + +j.apply(this, arguments)) / 2 - Kn / 2;
                            return [Wn(e) * t, Gn(e) * t]
                        }, e.innerRadius = function(t) {
                            return arguments.length ? (O = "function" == typeof t ? t : In(+t), e) : O
                        }, e.outerRadius = function(t) {
                            return arguments.length ? (R = "function" == typeof t ? t : In(+t), e) : R
                        }, e.cornerRadius = function(t) {
                            return arguments.length ? (q = "function" == typeof t ? t : In(+t), e) : q
                        }, e.padRadius = function(t) {
                            return arguments.length ? (Y = null == t ? null : "function" == typeof t ? t : In(+t), e) : Y
                        }, e.startAngle = function(t) {
                            return arguments.length ? (B = "function" == typeof t ? t : In(+t), e) : B
                        }, e.endAngle = function(t) {
                            return arguments.length ? (j = "function" == typeof t ? t : In(+t), e) : j
                        }, e.padAngle = function(t) {
                            return arguments.length ? (I = "function" == typeof t ? t : In(+t), e) : I
                        }, e.context = function(t) {
                            return arguments.length ? (X = null == t ? null : t, e) : X
                        }, e
                    },
                    area: _r,
                    line: dr,
                    pie: function() {
                        var _ = br,
                            p = pr,
                            b = null,
                            y = In(0),
                            g = In(er),
                            m = In(0);

                        function e(n) {
                            var t, e, r, i, a, o = n.length,
                                c = 0,
                                s = new Array(o),
                                l = new Array(o),
                                u = +y.apply(this, arguments),
                                f = Math.min(er, Math.max(-er, g.apply(this, arguments) - u)),
                                h = Math.min(Math.abs(f) / o, m.apply(this, arguments)),
                                d = h * (f < 0 ? -1 : 1);
                            for (t = 0; t < o; ++t) 0 < (a = l[s[t] = t] = +_(n[t], t, n)) && (c += a);
                            for (null != p ? s.sort(function(t, e) {
                                    return p(l[t], l[e])
                                }) : null != b && s.sort(function(t, e) {
                                    return b(n[t], n[e])
                                }), t = 0, r = c ? (f - o * d) / c : 0; t < o; ++t, u = i) e = s[t], i = u + (0 < (a = l[e]) ? a * r : 0) + d, l[e] = {
                                data: n[e],
                                index: t,
                                value: a,
                                startAngle: u,
                                endAngle: i,
                                padAngle: h
                            };
                            return l
                        }
                        return e.value = function(t) {
                            return arguments.length ? (_ = "function" == typeof t ? t : In(+t), e) : _
                        }, e.sortValues = function(t) {
                            return arguments.length ? (p = t, b = null, e) : p
                        }, e.sort = function(t) {
                            return arguments.length ? (b = t, p = null, e) : b
                        }, e.startAngle = function(t) {
                            return arguments.length ? (y = "function" == typeof t ? t : In(+t), e) : y
                        }, e.endAngle = function(t) {
                            return arguments.length ? (g = "function" == typeof t ? t : In(+t), e) : g
                        }, e.padAngle = function(t) {
                            return arguments.length ? (m = "function" == typeof t ? t : In(+t), e) : m
                        }, e
                    },
                    areaRadial: wr,
                    radialArea: wr,
                    lineRadial: xr,
                    radialLine: xr,
                    pointRadial: Mr,
                    linkHorizontal: function() {
                        return Cr(Nr)
                    },
                    linkVertical: function() {
                        return Cr(Sr)
                    },
                    linkRadial: function() {
                        var t = Cr(Er);
                        return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t
                    },
                    symbol: function() {
                        var e = In(zr),
                            n = In(64),
                            r = null;

                        function i() {
                            var t;
                            if (r = r || (t = jn()), e.apply(this, arguments).draw(r, +n.apply(this, arguments)), t) return r = null, t + "" || null
                        }
                        return i.type = function(t) {
                            return arguments.length ? (e = "function" == typeof t ? t : In(t), i) : e
                        }, i.size = function(t) {
                            return arguments.length ? (n = "function" == typeof t ? t : In(+t), i) : n
                        }, i.context = function(t) {
                            return arguments.length ? (r = null == t ? null : t, i) : r
                        }, i
                    },
                    symbols: Zr,
                    symbolCircle: zr,
                    symbolCross: Dr,
                    symbolDiamond: Pr,
                    symbolSquare: qr,
                    symbolStar: Rr,
                    symbolTriangle: Br,
                    symbolWye: Wr,
                    curveBasisClosed: function(t) {
                        return new Jr(t)
                    },
                    curveBasisOpen: function(t) {
                        return new Kr(t)
                    },
                    curveBasis: function(t) {
                        return new Qr(t)
                    },
                    curveBundle: ei,
                    curveCardinalClosed: oi,
                    curveCardinalOpen: si,
                    curveCardinal: ii,
                    curveCatmullRomClosed: di,
                    curveCatmullRomOpen: pi,
                    curveCatmullRom: fi,
                    curveLinearClosed: function(t) {
                        return new bi(t)
                    },
                    curveLinear: ur,
                    curveMonotoneX: function(t) {
                        return new xi(t)
                    },
                    curveMonotoneY: function(t) {
                        return new wi(t)
                    },
                    curveNatural: function(t) {
                        return new ki(t)
                    },
                    curveStep: function(t) {
                        return new Ai(t, .5)
                    },
                    curveStepAfter: function(t) {
                        return new Ai(t, 1)
                    },
                    curveStepBefore: function(t) {
                        return new Ai(t, 0)
                    },
                    stack: function() {
                        var f = In([]),
                            h = Ni,
                            d = Ci,
                            _ = Si;

                        function e(t) {
                            var e, n, r = f.apply(this, arguments),
                                i = t.length,
                                a = r.length,
                                o = new Array(a);
                            for (e = 0; e < a; ++e) {
                                for (var c, s = r[e], l = o[e] = new Array(i), u = 0; u < i; ++u) l[u] = c = [0, +_(t[u], s, u, t)], c.data = t[u];
                                l.key = s
                            }
                            for (e = 0, n = h(o); e < a; ++e) o[n[e]].index = e;
                            return d(o, n), o
                        }
                        return e.keys = function(t) {
                            return arguments.length ? (f = "function" == typeof t ? t : In(kr.call(t)), e) : f
                        }, e.value = function(t) {
                            return arguments.length ? (_ = "function" == typeof t ? t : In(+t), e) : _
                        }, e.order = function(t) {
                            return arguments.length ? (h = null == t ? Ni : "function" == typeof t ? t : In(kr.call(t)), e) : h
                        }, e.offset = function(t) {
                            return arguments.length ? (d = null == t ? Ci : t, e) : d
                        }, e
                    },
                    stackOffsetExpand: function(t, e) {
                        if (0 < (r = t.length)) {
                            for (var n, r, i, a = 0, o = t[0].length; a < o; ++a) {
                                for (i = n = 0; n < r; ++n) i += t[n][a][1] || 0;
                                if (i)
                                    for (n = 0; n < r; ++n) t[n][a][1] /= i
                            }
                            Ci(t, e)
                        }
                    },
                    stackOffsetDiverging: function(t, e) {
                        if (0 < (c = t.length))
                            for (var n, r, i, a, o, c, s = 0, l = t[e[0]].length; s < l; ++s)
                                for (a = o = 0, n = 0; n < c; ++n) 0 < (i = (r = t[e[n]][s])[1] - r[0]) ? (r[0] = a, r[1] = a += i) : i < 0 ? (r[1] = o, r[0] = o += i) : (r[0] = 0, r[1] = i)
                    },
                    stackOffsetNone: Ci,
                    stackOffsetSilhouette: function(t, e) {
                        if (0 < (n = t.length)) {
                            for (var n, r = 0, i = t[e[0]], a = i.length; r < a; ++r) {
                                for (var o = 0, c = 0; o < n; ++o) c += t[o][r][1] || 0;
                                i[r][1] += i[r][0] = -c / 2
                            }
                            Ci(t, e)
                        }
                    },
                    stackOffsetWiggle: function(t, e) {
                        if (0 < (i = t.length) && 0 < (r = (n = t[e[0]]).length)) {
                            for (var n, r, i, a = 0, o = 1; o < r; ++o) {
                                for (var c = 0, s = 0, l = 0; c < i; ++c) {
                                    for (var u = t[e[c]], f = u[o][1] || 0, h = (f - (u[o - 1][1] || 0)) / 2, d = 0; d < c; ++d) {
                                        var _ = t[e[d]];
                                        h += (_[o][1] || 0) - (_[o - 1][1] || 0)
                                    }
                                    s += f, l += h * f
                                }
                                n[o - 1][1] += n[o - 1][0] = a, s && (a -= l / s)
                            }
                            n[o - 1][1] += n[o - 1][0] = a, Ci(t, e)
                        }
                    },
                    stackOrderAppearance: Ei,
                    stackOrderAscending: Di,
                    stackOrderDescending: function(t) {
                        return Di(t).reverse()
                    },
                    stackOrderInsideOut: function(t) {
                        var e, n, r = t.length,
                            i = t.map(Fi),
                            a = Ei(t),
                            o = 0,
                            c = 0,
                            s = [],
                            l = [];
                        for (e = 0; e < r; ++e) n = a[e], o < c ? (o += i[n], s.push(n)) : (c += i[n], l.push(n));
                        return l.reverse().concat(s)
                    },
                    stackOrderNone: Ni,
                    stackOrderReverse: function(t) {
                        return Ni(t).reverse()
                    }
                }),
                Pi = Object.freeze({
                    transform_labels: !1,
                    transform: "multiply",
                    multiply_divide_constant: 1,
                    exponentiate_constant: 0,
                    multiplier: 1,
                    prefix: "",
                    n_dec: 2,
                    suffix: "",
                    strip_zeros: !0,
                    strip_separator: !0,
                    negative_sign: "-$nk"
                });

            function Hi(o, t) {
                var c = 0 <= o.n_dec ? Math.floor(o.n_dec) : Math.ceil(o.n_dec),
                    s = t(",." + (0 < c ? c : "0") + "f"),
                    e = t.decimal,
                    l = t.thousands,
                    u = o.strip_zeros && 0 < c ? new RegExp("\\" + e + "?0+$") : null,
                    f = o.strip_separator && l,
                    h = o.negative_sign,
                    d = function(t) {
                        var e = 1;
                        return t.transform_labels && (e = "multiply" === t.transform ? t.multiply_divide_constant : "divide" === t.transform ? 1 / t.multiply_divide_constant : Math.pow(10, t.exponentiate_constant)),
                            function(t) {
                                return t * e
                            }
                    }(o);
                return function(t) {
                    var e = 0 <= c ? d(t) : function(t, e) {
                            if (!(e = 0 < e ? Math.floor(e) : Math.ceil(e))) return Math.round(t);
                            var n = Math.pow(10, Math.abs(e));
                            return 0 < e ? Math.round(t * n) / n : Math.round(t / n) * n
                        }(d(t), c),
                        n = e < 0,
                        r = Math.abs(e),
                        i = f && l && 1e3 <= r && r < 1e4,
                        a = s(r);
                    return u && (a = a.replace(u, "")), i && (a = a.replace(l, "")), n && "none" !== h ? "-$nk" === h ? "-" + o.prefix + a + o.suffix : "$-nk" === h ? o.prefix + "-" + a + o.suffix : "($nk)" === h ? "(" + o.prefix + a + o.suffix + ")" : o.prefix + "(" + a + ")" + o.suffix : o.prefix + a + o.suffix
                }
            }

            function Ui(e) {
                for (var t in Pi) void 0 === e[t] && (e[t] = Pi[t]);
                return function(t) {
                    return Hi(e, t)
                }
            }

            function Oi(t, e) {
                if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
                var n, r = t.slice(0, n);
                return [1 < r.length ? r[0] + r.slice(2) : r, +t.slice(n + 1)]
            }

            function Ri(t) {
                return (t = Oi(Math.abs(t))) ? t[1] : NaN
            }
            var qi, Yi = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

            function Bi(t) {
                if (!(e = Yi.exec(t))) throw new Error("invalid format: " + t);
                var e;
                return new ji({
                    fill: e[1],
                    align: e[2],
                    sign: e[3],
                    symbol: e[4],
                    zero: e[5],
                    width: e[6],
                    comma: e[7],
                    precision: e[8] && e[8].slice(1),
                    trim: e[9],
                    type: e[10]
                })
            }

            function ji(t) {
                this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + ""
            }

            function Ii(t, e) {
                var n = Oi(t, e);
                if (!n) return t + "";
                var r = n[0],
                    i = n[1];
                return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
            }
            Bi.prototype = ji.prototype, ji.prototype.toString = function() {
                return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
            };
            var Xi = {
                "%": function(t, e) {
                    return (100 * t).toFixed(e)
                },
                b: function(t) {
                    return Math.round(t).toString(2)
                },
                c: function(t) {
                    return t + ""
                },
                d: function(t) {
                    return Math.round(t).toString(10)
                },
                e: function(t, e) {
                    return t.toExponential(e)
                },
                f: function(t, e) {
                    return t.toFixed(e)
                },
                g: function(t, e) {
                    return t.toPrecision(e)
                },
                o: function(t) {
                    return Math.round(t).toString(8)
                },
                p: function(t, e) {
                    return Ii(100 * t, e)
                },
                r: Ii,
                s: function(t, e) {
                    var n = Oi(t, e);
                    if (!n) return t + "";
                    var r = n[0],
                        i = n[1],
                        a = i - (qi = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                        o = r.length;
                    return a === o ? r : o < a ? r + new Array(a - o + 1).join("0") : 0 < a ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Oi(t, Math.max(0, e + a - 1))[0]
                },
                X: function(t) {
                    return Math.round(t).toString(16).toUpperCase()
                },
                x: function(t) {
                    return Math.round(t).toString(16)
                }
            };

            function Vi(t) {
                return t
            }
            var Wi, Zi, $i, Gi = Array.prototype.map,
                Qi = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

            function Ji(t) {
                var w = void 0 === t.grouping || void 0 === t.thousands ? Vi : function(c, s) {
                        return function(t, e) {
                            for (var n = t.length, r = [], i = 0, a = c[0], o = 0; 0 < n && 0 < a && (e < o + a + 1 && (a = Math.max(1, e - o)), r.push(t.substring(n -= a, n + a)), !((o += a + 1) > e));) a = c[i = (i + 1) % c.length];
                            return r.reverse().join(s)
                        }
                    }(Gi.call(t.grouping, Number), t.thousands + ""),
                    r = void 0 === t.currency ? "" : t.currency[0] + "",
                    i = void 0 === t.currency ? "" : t.currency[1] + "",
                    M = void 0 === t.decimal ? "." : t.decimal + "",
                    k = void 0 === t.numerals ? Vi : function(e) {
                        return function(t) {
                            return t.replace(/[0-9]/g, function(t) {
                                return e[+t]
                            })
                        }
                    }(Gi.call(t.numerals, String)),
                    a = void 0 === t.percent ? "%" : t.percent + "",
                    T = void 0 === t.minus ? "-" : t.minus + "",
                    A = void 0 === t.nan ? "NaN" : t.nan + "";

                function o(t) {
                    var l = (t = Bi(t)).fill,
                        u = t.align,
                        f = t.sign,
                        e = t.symbol,
                        h = t.zero,
                        d = t.width,
                        _ = t.comma,
                        p = t.precision,
                        b = t.trim,
                        y = t.type;
                    "n" === y ? (_ = !0, y = "g") : Xi[y] || (void 0 === p && (p = 12), b = !0, y = "g"), (h || "0" === l && "=" === u) && (h = !0, l = "0", u = "=");
                    var g = "$" === e ? r : "#" === e && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "",
                        m = "$" === e ? i : /[%p]/.test(y) ? a : "",
                        v = Xi[y],
                        x = /[defgprs%]/.test(y);

                    function n(t) {
                        var e, n, r, i = g,
                            a = m;
                        if ("c" === y) a = v(t) + a, t = "";
                        else {
                            var o = (t = +t) < 0;
                            if (t = isNaN(t) ? A : v(Math.abs(t), p), b && (t = function(t) {
                                    t: for (var e, n = t.length, r = 1, i = -1; r < n; ++r) switch (t[r]) {
                                        case ".":
                                            i = e = r;
                                            break;
                                        case "0":
                                            0 === i && (i = r), e = r;
                                            break;
                                        default:
                                            if (0 < i) {
                                                if (!+t[r]) break t;
                                                i = 0
                                            }
                                    }
                                    return 0 < i ? t.slice(0, i) + t.slice(e + 1) : t
                                }(t)), o && 0 == +t && (o = !1), i = (o ? "(" === f ? f : T : "-" === f || "(" === f ? "" : f) + i, a = ("s" === y ? Qi[8 + qi / 3] : "") + a + (o && "(" === f ? ")" : ""), x)
                                for (e = -1, n = t.length; ++e < n;)
                                    if ((r = t.charCodeAt(e)) < 48 || 57 < r) {
                                        a = (46 === r ? M + t.slice(e + 1) : t.slice(e)) + a, t = t.slice(0, e);
                                        break
                                    }
                        }
                        _ && !h && (t = w(t, 1 / 0));
                        var c = i.length + t.length + a.length,
                            s = c < d ? new Array(d - c + 1).join(l) : "";
                        switch (_ && h && (t = w(s + t, s.length ? d - a.length : 1 / 0), s = ""), u) {
                            case "<":
                                t = i + t + a + s;
                                break;
                            case "=":
                                t = i + s + t + a;
                                break;
                            case "^":
                                t = s.slice(0, c = s.length >> 1) + i + t + a + s.slice(c);
                                break;
                            default:
                                t = s + i + t + a
                        }
                        return k(t)
                    }
                    return p = void 0 === p ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, p)) : Math.max(0, Math.min(20, p)), n.toString = function() {
                        return t + ""
                    }, n
                }
                return {
                    format: o,
                    formatPrefix: function(t, e) {
                        var n = o(((t = Bi(t)).type = "f", t)),
                            r = 3 * Math.max(-8, Math.min(8, Math.floor(Ri(e) / 3))),
                            i = Math.pow(10, -r),
                            a = Qi[8 + r / 3];
                        return function(t) {
                            return n(i * t) + a
                        }
                    }
                }
            }

            function Ki(t) {
                return Math.max(0, -Ri(Math.abs(t)))
            }

            function ta(t, e) {
                return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Ri(e) / 3))) - Ri(Math.abs(t)))
            }

            function ea(t, e) {
                return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Ri(e) - Ri(t)) + 1
            }
            Wi = Ji({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""],
                minus: "-"
            }), Zi = Wi.format, $i = Wi.formatPrefix;
            var na = Object.freeze({
                input_decimal_separator: ".",
                output_separators: ",."
            });
            var ra = "$";

            function ia() {}

            function aa(t, e) {
                var n = new ia;
                if (t instanceof ia) t.each(function(t, e) {
                    n.set(e, t)
                });
                else if (Array.isArray(t)) {
                    var r, i = -1,
                        a = t.length;
                    if (null == e)
                        for (; ++i < a;) n.set(i, t[i]);
                    else
                        for (; ++i < a;) n.set(e(r = t[i], i, t), r)
                } else if (t)
                    for (var o in t) n.set(o, t[o]);
                return n
            }

            function oa() {}
            ia.prototype = aa.prototype = {
                constructor: ia,
                has: function(t) {
                    return ra + t in this
                },
                get: function(t) {
                    return this[ra + t]
                },
                set: function(t, e) {
                    return this[ra + t] = e, this
                },
                remove: function(t) {
                    var e = ra + t;
                    return e in this && delete this[e]
                },
                clear: function() {
                    for (var t in this) t[0] === ra && delete this[t]
                },
                keys: function() {
                    var t = [];
                    for (var e in this) e[0] === ra && t.push(e.slice(1));
                    return t
                },
                values: function() {
                    var t = [];
                    for (var e in this) e[0] === ra && t.push(this[e]);
                    return t
                },
                entries: function() {
                    var t = [];
                    for (var e in this) e[0] === ra && t.push({
                        key: e.slice(1),
                        value: this[e]
                    });
                    return t
                },
                size: function() {
                    var t = 0;
                    for (var e in this) e[0] === ra && ++t;
                    return t
                },
                empty: function() {
                    for (var t in this)
                        if (t[0] === ra) return !1;
                    return !0
                },
                each: function(t) {
                    for (var e in this) e[0] === ra && t(this[e], e.slice(1), this)
                }
            };
            var ca = aa.prototype;

            function sa(t, e) {
                var n = new oa;
                if (t instanceof oa) t.each(function(t) {
                    n.add(t)
                });
                else if (t) {
                    var r = -1,
                        i = t.length;
                    if (null == e)
                        for (; ++r < i;) n.add(t[r]);
                    else
                        for (; ++r < i;) n.add(e(t[r], r, t))
                }
                return n
            }

            function la() {
                return parseFloat
            }

            function ua() {
                return function(t) {
                    return t.toString()
                }
            }
            oa.prototype = sa.prototype = {
                constructor: oa,
                has: ca.has,
                add: function(t) {
                    return this[ra + (t += "")] = t, this
                },
                remove: ca.remove,
                clear: ca.clear,
                values: ca.keys,
                size: ca.size,
                empty: ca.empty,
                each: ca.each
            };
            var fa = new Date,
                ha = new Date;

            function da(a, o, n, r) {
                function c(t) {
                    return a(t = 0 === arguments.length ? new Date : new Date(+t)), t
                }
                return c.floor = function(t) {
                    return a(t = new Date(+t)), t
                }, c.ceil = function(t) {
                    return a(t = new Date(t - 1)), o(t, 1), a(t), t
                }, c.round = function(t) {
                    var e = c(t),
                        n = c.ceil(t);
                    return t - e < n - t ? e : n
                }, c.offset = function(t, e) {
                    return o(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
                }, c.range = function(t, e, n) {
                    var r, i = [];
                    if (t = c.ceil(t), n = null == n ? 1 : Math.floor(n), !(t < e && 0 < n)) return i;
                    for (; i.push(r = new Date(+t)), o(t, n), a(t), r < t && t < e;);
                    return i
                }, c.filter = function(n) {
                    return da(function(t) {
                        if (t <= t)
                            for (; a(t), !n(t);) t.setTime(t - 1)
                    }, function(t, e) {
                        if (t <= t)
                            if (e < 0)
                                for (; ++e <= 0;)
                                    for (; o(t, -1), !n(t););
                            else
                                for (; 0 <= --e;)
                                    for (; o(t, 1), !n(t););
                    })
                }, n && (c.count = function(t, e) {
                    return fa.setTime(+t), ha.setTime(+e), a(fa), a(ha), Math.floor(n(fa, ha))
                }, c.every = function(e) {
                    return e = Math.floor(e), isFinite(e) && 0 < e ? 1 < e ? c.filter(r ? function(t) {
                        return r(t) % e == 0
                    } : function(t) {
                        return c.count(0, t) % e == 0
                    }) : c : null
                }), c
            }
            var _a = da(function(t) {
                t.setHours(0, 0, 0, 0)
            }, function(t, e) {
                t.setDate(t.getDate() + e)
            }, function(t, e) {
                return (e - t - 6e4 * (e.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5
            }, function(t) {
                return t.getDate() - 1
            });

            function pa(e) {
                return da(function(t) {
                    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0)
                }, function(t, e) {
                    t.setDate(t.getDate() + 7 * e)
                }, function(t, e) {
                    return (e - t - 6e4 * (e.getTimezoneOffset() - t.getTimezoneOffset())) / 6048e5
                })
            }
            var ba = pa(0),
                ya = pa(1),
                ga = (pa(2), pa(3), pa(4)),
                ma = (pa(5), pa(6), da(function(t) {
                    t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
                }, function(t, e) {
                    t.setFullYear(t.getFullYear() + e)
                }, function(t, e) {
                    return e.getFullYear() - t.getFullYear()
                }, function(t) {
                    return t.getFullYear()
                }));
            ma.every = function(n) {
                return isFinite(n = Math.floor(n)) && 0 < n ? da(function(t) {
                    t.setFullYear(Math.floor(t.getFullYear() / n) * n), t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
                }, function(t, e) {
                    t.setFullYear(t.getFullYear() + e * n)
                }) : null
            };
            var va = da(function(t) {
                t.setUTCHours(0, 0, 0, 0)
            }, function(t, e) {
                t.setUTCDate(t.getUTCDate() + e)
            }, function(t, e) {
                return (e - t) / 864e5
            }, function(t) {
                return t.getUTCDate() - 1
            });

            function xa(e) {
                return da(function(t) {
                    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0)
                }, function(t, e) {
                    t.setUTCDate(t.getUTCDate() + 7 * e)
                }, function(t, e) {
                    return (e - t) / 6048e5
                })
            }
            var wa = xa(0),
                Ma = xa(1),
                ka = (xa(2), xa(3), xa(4)),
                Ta = (xa(5), xa(6), da(function(t) {
                    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
                }, function(t, e) {
                    t.setUTCFullYear(t.getUTCFullYear() + e)
                }, function(t, e) {
                    return e.getUTCFullYear() - t.getUTCFullYear()
                }, function(t) {
                    return t.getUTCFullYear()
                }));

            function Aa(t) {
                if (0 <= t.y && t.y < 100) {
                    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                    return e.setFullYear(t.y), e
                }
                return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
            }

            function Ca(t) {
                if (0 <= t.y && t.y < 100) {
                    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                    return e.setUTCFullYear(t.y), e
                }
                return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
            }

            function Na(t, e, n) {
                return {
                    y: t,
                    m: e,
                    d: n,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0
                }
            }
            Ta.every = function(n) {
                return isFinite(n = Math.floor(n)) && 0 < n ? da(function(t) {
                    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / n) * n), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
                }, function(t, e) {
                    t.setUTCFullYear(t.getUTCFullYear() + e * n)
                }) : null
            };
            var Sa, Ea, za, Da, Fa, La, Pa, Ha, Ua, Oa, Ra, qa, Ya, Ba, ja, Ia, Xa, Va, Wa, Za, $a, Ga, Qa, Ja, Ka = {
                    "-": "",
                    _: " ",
                    0: "0"
                },
                to = /^\s*\d+/,
                eo = /^%/,
                no = /[\\^$*+?|[\]().{}]/g;

            function ro(t, e, n) {
                var r = t < 0 ? "-" : "",
                    i = (r ? -t : t) + "",
                    a = i.length;
                return r + (a < n ? new Array(n - a + 1).join(e) + i : i)
            }

            function io(t) {
                return t.replace(no, "\\$&")
            }

            function ao(t) {
                return new RegExp("^(?:" + t.map(io).join("|") + ")", "i")
            }

            function oo(t) {
                for (var e = {}, n = -1, r = t.length; ++n < r;) e[t[n].toLowerCase()] = n;
                return e
            }

            function co(t, e, n) {
                var r = to.exec(e.slice(n, n + 1));
                return r ? (t.w = +r[0], n + r[0].length) : -1
            }

            function so(t, e, n) {
                var r = to.exec(e.slice(n, n + 1));
                return r ? (t.u = +r[0], n + r[0].length) : -1
            }

            function lo(t, e, n) {
                var r = to.exec(e.slice(n, n + 2));
                return r ? (t.U = +r[0], n + r[0].length) : -1
            }

            function uo(t, e, n) {
                var r = to.exec(e.slice(n, n + 2));
                return r ? (t.V = +r[0], n + r[0].length) : -1
            }

            function fo(t, e, n) {
                var r = to.exec(e.slice(n, n + 2));
                return r ? (t.W = +r[0], n + r[0].length) : -1
            }

            function ho(t, e, n) {
                var r = to.exec(e.slice(n, n + 4));
                return r ? (t.y = +r[0], n + r[0].length) : -1
            }

            function _o(t, e, n) {
                var r = to.exec(e.slice(n, n + 2));
                return r ? (t.y = +r[0] + (68 < +r[0] ? 1900 : 2e3), n + r[0].length) : -1
            }

            function po(t, e, n) {
                var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
                return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1
            }

            function bo(t, e, n) {
                var r = to.exec(e.slice(n, n + 1));
                return r ? (t.q = 3 * r[0] - 3, n + r[0].length) : -1
            }

            function yo(t, e, n) {
                var r = to.exec(e.slice(n, n + 2));
                return r ? (t.m = r[0] - 1, n + r[0].length) : -1
            }

            function go(t, e, n) {
                var r = to.exec(e.slice(n, n + 2));
                return r ? (t.d = +r[0], n + r[0].length) : -1
            }

            function mo(t, e, n) {
                var r = to.exec(e.slice(n, n + 3));
                return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1
            }

            function vo(t, e, n) {
                var r = to.exec(e.slice(n, n + 2));
                return r ? (t.H = +r[0], n + r[0].length) : -1
            }

            function xo(t, e, n) {
                var r = to.exec(e.slice(n, n + 2));
                return r ? (t.M = +r[0], n + r[0].length) : -1
            }

            function wo(t, e, n) {
                var r = to.exec(e.slice(n, n + 2));
                return r ? (t.S = +r[0], n + r[0].length) : -1
            }

            function Mo(t, e, n) {
                var r = to.exec(e.slice(n, n + 3));
                return r ? (t.L = +r[0], n + r[0].length) : -1
            }

            function ko(t, e, n) {
                var r = to.exec(e.slice(n, n + 6));
                return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1
            }

            function To(t, e, n) {
                var r = eo.exec(e.slice(n, n + 1));
                return r ? n + r[0].length : -1
            }

            function Ao(t, e, n) {
                var r = to.exec(e.slice(n));
                return r ? (t.Q = +r[0], n + r[0].length) : -1
            }

            function Co(t, e, n) {
                var r = to.exec(e.slice(n));
                return r ? (t.s = +r[0], n + r[0].length) : -1
            }

            function No(t, e) {
                return ro(t.getDate(), e, 2)
            }

            function So(t, e) {
                return ro(t.getHours(), e, 2)
            }

            function Eo(t, e) {
                return ro(t.getHours() % 12 || 12, e, 2)
            }

            function zo(t, e) {
                return ro(1 + _a.count(ma(t), t), e, 3)
            }

            function Do(t, e) {
                return ro(t.getMilliseconds(), e, 3)
            }

            function Fo(t, e) {
                return Do(t, e) + "000"
            }

            function Lo(t, e) {
                return ro(t.getMonth() + 1, e, 2)
            }

            function Po(t, e) {
                return ro(t.getMinutes(), e, 2)
            }

            function Ho(t, e) {
                return ro(t.getSeconds(), e, 2)
            }

            function Uo(t) {
                var e = t.getDay();
                return 0 === e ? 7 : e
            }

            function Oo(t, e) {
                return ro(ba.count(ma(t) - 1, t), e, 2)
            }

            function Ro(t) {
                var e = t.getDay();
                return 4 <= e || 0 === e ? ga(t) : ga.ceil(t)
            }

            function qo(t, e) {
                return t = Ro(t), ro(ga.count(ma(t), t) + (4 === ma(t).getDay()), e, 2)
            }

            function Yo(t) {
                return t.getDay()
            }

            function Bo(t, e) {
                return ro(ya.count(ma(t) - 1, t), e, 2)
            }

            function jo(t, e) {
                return ro(t.getFullYear() % 100, e, 2)
            }

            function Io(t, e) {
                return ro((t = Ro(t)).getFullYear() % 100, e, 2)
            }

            function Xo(t, e) {
                return ro(t.getFullYear() % 1e4, e, 4)
            }

            function Vo(t, e) {
                var n = t.getDay();
                return ro((t = 4 <= n || 0 === n ? ga(t) : ga.ceil(t)).getFullYear() % 1e4, e, 4)
            }

            function Wo(t) {
                var e = t.getTimezoneOffset();
                return (0 < e ? "-" : (e *= -1, "+")) + ro(e / 60 | 0, "0", 2) + ro(e % 60, "0", 2)
            }

            function Zo(t, e) {
                return ro(t.getUTCDate(), e, 2)
            }

            function $o(t, e) {
                return ro(t.getUTCHours(), e, 2)
            }

            function Go(t, e) {
                return ro(t.getUTCHours() % 12 || 12, e, 2)
            }

            function Qo(t, e) {
                return ro(1 + va.count(Ta(t), t), e, 3)
            }

            function Jo(t, e) {
                return ro(t.getUTCMilliseconds(), e, 3)
            }

            function Ko(t, e) {
                return Jo(t, e) + "000"
            }

            function tc(t, e) {
                return ro(t.getUTCMonth() + 1, e, 2)
            }

            function ec(t, e) {
                return ro(t.getUTCMinutes(), e, 2)
            }

            function nc(t, e) {
                return ro(t.getUTCSeconds(), e, 2)
            }

            function rc(t) {
                var e = t.getUTCDay();
                return 0 === e ? 7 : e
            }

            function ic(t, e) {
                return ro(wa.count(Ta(t) - 1, t), e, 2)
            }

            function ac(t) {
                var e = t.getUTCDay();
                return 4 <= e || 0 === e ? ka(t) : ka.ceil(t)
            }

            function oc(t, e) {
                return t = ac(t), ro(ka.count(Ta(t), t) + (4 === Ta(t).getUTCDay()), e, 2)
            }

            function cc(t) {
                return t.getUTCDay()
            }

            function sc(t, e) {
                return ro(Ma.count(Ta(t) - 1, t), e, 2)
            }

            function lc(t, e) {
                return ro(t.getUTCFullYear() % 100, e, 2)
            }

            function uc(t, e) {
                return ro((t = ac(t)).getUTCFullYear() % 100, e, 2)
            }

            function fc(t, e) {
                return ro(t.getUTCFullYear() % 1e4, e, 4)
            }

            function hc(t, e) {
                var n = t.getUTCDay();
                return ro((t = 4 <= n || 0 === n ? ka(t) : ka.ceil(t)).getUTCFullYear() % 1e4, e, 4)
            }

            function dc() {
                return "+0000"
            }

            function _c() {
                return "%"
            }

            function pc(t) {
                return +t
            }

            function bc(t) {
                return Math.floor(+t / 1e3)
            }

            function yc(s, l) {
                return function(t) {
                    var e, n, r, i = [],
                        a = -1,
                        o = 0,
                        c = s.length;
                    for (t instanceof Date || (t = new Date(+t)); ++a < c;) 37 === s.charCodeAt(a) && (i.push(s.slice(o, a)), null != (n = Ka[e = s.charAt(++a)]) ? e = s.charAt(++a) : n = "e" === e ? " " : "0", (r = l[e]) && (e = r(t, n)), i.push(e), o = a + 1);
                    return i.push(s.slice(o, a)), i.join("")
                }
            }

            function gc(i, a) {
                return function(t) {
                    var e, n, r = Na(1900, void 0, 1);
                    if (mc(r, i, t += "", 0) != t.length) return null;
                    if ("Q" in r) return new Date(r.Q);
                    if ("s" in r) return new Date(1e3 * r.s + ("L" in r ? r.L : 0));
                    if (!a || "Z" in r || (r.Z = 0), "p" in r && (r.H = r.H % 12 + 12 * r.p), void 0 === r.m && (r.m = "q" in r ? r.q : 0), "V" in r) {
                        if (r.V < 1 || 53 < r.V) return null;
                        "w" in r || (r.w = 1), "Z" in r ? (e = 4 < (n = (e = Ca(Na(r.y, 0, 1))).getUTCDay()) || 0 === n ? Ma.ceil(e) : Ma(e), e = va.offset(e, 7 * (r.V - 1)), r.y = e.getUTCFullYear(), r.m = e.getUTCMonth(), r.d = e.getUTCDate() + (r.w + 6) % 7) : (e = 4 < (n = (e = Aa(Na(r.y, 0, 1))).getDay()) || 0 === n ? ya.ceil(e) : ya(e), e = _a.offset(e, 7 * (r.V - 1)), r.y = e.getFullYear(), r.m = e.getMonth(), r.d = e.getDate() + (r.w + 6) % 7)
                    } else("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : "W" in r ? 1 : 0), n = "Z" in r ? Ca(Na(r.y, 0, 1)).getUTCDay() : Aa(Na(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + 7 * r.W - (n + 5) % 7 : r.w + 7 * r.U - (n + 6) % 7);
                    return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, Ca(r)) : Aa(r)
                }
            }

            function mc(t, e, n, r) {
                for (var i, a, o = 0, c = e.length, s = n.length; o < c;) {
                    if (s <= r) return -1;
                    if (37 === (i = e.charCodeAt(o++))) {
                        if (i = e.charAt(o++), !(a = Ja[i in Ka ? e.charAt(o++) : i]) || (r = a(t, n, r)) < 0) return -1
                    } else if (i != n.charCodeAt(r++)) return -1
                }
                return r
            }

            function vc(t) {
                return t.toLowerCase()
            }

            function xc() {
                return this.declarations = [], this
            }

            function wc(t) {
                return this.selector = t, this.styles = [], this
            }
            Da = (za = {
                dateTime: "%x, %X",
                date: "%-m/%-d/%Y",
                time: "%-I:%M:%S %p",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            }).dateTime, Fa = za.date, La = za.time, Pa = za.periods, Ha = za.days, Ua = za.shortDays, Oa = za.months, Ra = za.shortMonths, qa = ao(Pa), Ya = oo(Pa), Ba = ao(Ha), ja = oo(Ha), Ia = ao(Ua), Xa = oo(Ua), Va = ao(Oa), Wa = oo(Oa), Za = ao(Ra), $a = oo(Ra), Qa = {
                a: function(t) {
                    return Ua[t.getUTCDay()]
                },
                A: function(t) {
                    return Ha[t.getUTCDay()]
                },
                b: function(t) {
                    return Ra[t.getUTCMonth()]
                },
                B: function(t) {
                    return Oa[t.getUTCMonth()]
                },
                c: null,
                d: Zo,
                e: Zo,
                f: Ko,
                g: uc,
                G: hc,
                H: $o,
                I: Go,
                j: Qo,
                L: Jo,
                m: tc,
                M: ec,
                p: function(t) {
                    return Pa[+(12 <= t.getUTCHours())]
                },
                q: function(t) {
                    return 1 + ~~(t.getUTCMonth() / 3)
                },
                Q: pc,
                s: bc,
                S: nc,
                u: rc,
                U: ic,
                V: oc,
                w: cc,
                W: sc,
                x: null,
                X: null,
                y: lc,
                Y: fc,
                Z: dc,
                "%": _c
            }, Ja = {
                a: function(t, e, n) {
                    var r = Ia.exec(e.slice(n));
                    return r ? (t.w = Xa[r[0].toLowerCase()], n + r[0].length) : -1
                },
                A: function(t, e, n) {
                    var r = Ba.exec(e.slice(n));
                    return r ? (t.w = ja[r[0].toLowerCase()], n + r[0].length) : -1
                },
                b: function(t, e, n) {
                    var r = Za.exec(e.slice(n));
                    return r ? (t.m = $a[r[0].toLowerCase()], n + r[0].length) : -1
                },
                B: function(t, e, n) {
                    var r = Va.exec(e.slice(n));
                    return r ? (t.m = Wa[r[0].toLowerCase()], n + r[0].length) : -1
                },
                c: function(t, e, n) {
                    return mc(t, Da, e, n)
                },
                d: go,
                e: go,
                f: ko,
                g: _o,
                G: ho,
                H: vo,
                I: vo,
                j: mo,
                L: Mo,
                m: yo,
                M: xo,
                p: function(t, e, n) {
                    var r = qa.exec(e.slice(n));
                    return r ? (t.p = Ya[r[0].toLowerCase()], n + r[0].length) : -1
                },
                q: bo,
                Q: Ao,
                s: Co,
                S: wo,
                u: so,
                U: lo,
                V: uo,
                w: co,
                W: fo,
                x: function(t, e, n) {
                    return mc(t, Fa, e, n)
                },
                X: function(t, e, n) {
                    return mc(t, La, e, n)
                },
                y: _o,
                Y: ho,
                Z: po,
                "%": To
            }, (Ga = {
                a: function(t) {
                    return Ua[t.getDay()]
                },
                A: function(t) {
                    return Ha[t.getDay()]
                },
                b: function(t) {
                    return Ra[t.getMonth()]
                },
                B: function(t) {
                    return Oa[t.getMonth()]
                },
                c: null,
                d: No,
                e: No,
                f: Fo,
                g: Io,
                G: Vo,
                H: So,
                I: Eo,
                j: zo,
                L: Do,
                m: Lo,
                M: Po,
                p: function(t) {
                    return Pa[+(12 <= t.getHours())]
                },
                q: function(t) {
                    return 1 + ~~(t.getMonth() / 3)
                },
                Q: pc,
                s: bc,
                S: Ho,
                u: Uo,
                U: Oo,
                V: qo,
                w: Yo,
                W: Bo,
                x: null,
                X: null,
                y: jo,
                Y: Xo,
                Z: Wo,
                "%": _c
            }).x = yc(Fa, Ga), Ga.X = yc(La, Ga), Ga.c = yc(Da, Ga), Qa.x = yc(Fa, Qa), Qa.X = yc(La, Qa), Qa.c = yc(Da, Qa), Sa = {
                format: function(t) {
                    var e = yc(t += "", Ga);
                    return e.toString = function() {
                        return t
                    }, e
                },
                parse: function(t) {
                    var e = gc(t += "", !1);
                    return e.toString = function() {
                        return t
                    }, e
                },
                utcFormat: function(t) {
                    var e = yc(t += "", Qa);
                    return e.toString = function() {
                        return t
                    }, e
                },
                utcParse: function(t) {
                    var e = gc(t += "", !0);
                    return e.toString = function() {
                        return t
                    }, e
                }
            }, Ea = Sa.parse, Sa.utcFormat, Sa.utcParse, xc.prototype.select = function(t) {
                if (!t) return this;
                var e = new wc(t, this);
                return (e.parent = this).addDeclaration(e), e
            }, xc.prototype.addDeclaration = function(t) {
                return this.declarations.push(t), this
            }, xc.prototype.print = function() {
                var e = "";
                return this.declarations.forEach(function(t) {
                    e += t.selector + " {\n", t.styles.forEach(function(t) {
                        e += "\t" + t[0] + ": " + t[1] + ";\n"
                    }), e += "}\n\n"
                }), e
            }, xc.prototype.clear = function() {
                return this.declarations = [], this
            }, wc.prototype.style = function(t, e) {
                var n = "function" == typeof value_ ? e() : e;
                return "" !== n && null != n && this.styles.push([t, n]), this
            };
            var Mc = !(wc.prototype.select = function(t) {
                return this.parent.select(this.selector + " " + t)
            });

            function kc() {
                if (!Mc && "undefined" != typeof document) {
                    var t = function() {
                            var t = new xc;
                            return t.select(".fl-controls-container").style("display", "inline-block").style("line-height", "0"), t.select(".fl-controls-container, .fl-controls-container *").style("box-sizing", "border-box"), t.select(".slider-holder").style("margin-bottom", "20px"), t.select(".fl-controls-slider, .slider-play").style("pointer-events", "all").style("display", "inline-block").style("vertical-align", "middle"), t.select(".slider-play svg").style("height", "100%").style("width", "100%").style("cursor", " pointer", ""), t.select(".slider-play:hover").style("opacity", "0.6"), t.select(".fl-control-slider").style("width", "100%").style("bottom", "0"), t.select(".fl-control").style("position", "relative"), t.select(".fl-control.hidden").style("display", "none"), t.select(".fl-control .button").style("display", "inline-block").style("background", "#eee").style("padding", "0.5em").style("margin-right", "0.25em").style("margin-bottom", "0.25em").style("line-height", "1em"), t.select(".fl-control.grouped:not(.hidden)").style("display", "table").style("table-layout", "fixed").select(".button").style("display", "table-cell").style("margin", "0").style("text-align", "center"), t.select(".fl-control .button.selected").style("background", "#ddd"), t.select(".fl-control-dropdown").style("line-height", "1em").select(".list").style("display", "none").style("position", "absolute").style("background-color", "white").style("z-index", "100").style("border", "1px solid #eee").select(".list-item").style("cursor", "pointer").style("padding", "0.5rem"), t.select(".fl-control-dropdown.open .list").style("display", "block"), t.select(".fl-control-dropdown .main").style("position", "relative"), t.select(".fl-control-dropdown .symbol").style("float", "right").select("div").style("border-top-color", "#333333"), t.print()
                        }(),
                        e = document.head || document.getElementsByTagName("head")[0],
                        n = document.createElement("style");
                    n.type = "text/css", n.className = "flourish-controls", e.appendChild(n), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)), Mc = !0
                }
            }
            var Tc, Ac, Cc = (Tc = document.createElement("canvas").getContext("2d"), function(t, e) {
                return Tc.font = e || "10px sans-serif", Tc.measureText(t).width
            });

            function Nc(a, o, n) {
                var c = {},
                    s = W(n).append("div").attr("class", "fl-control fl-control-dropdown"),
                    r = s.node(),
                    t = s.append("div").attr("class", "main"),
                    l = t.append("span").attr("class", "current");
                t.append("span").attr("class", "symbol").style("width", "10px").append("div").style("border-left", "5px solid transparent").style("border-right", "5px solid transparent").style("border-bottom", "5px solid transparent").style("border-top-style", "solid").style("border-top-width", "5px").style("top", "50%").style("position", "absolute").style("margin-top", "-2.5px");

                function u() {
                    s.classed("open", !1), f.style("right", null), f.style("max-height", null), f.style("display", "none")
                }

                function e() {
                    s.classed("open") ? u() : (s.classed("open", !0), f.style("top", "100%"), f.style("bottom", null), f.style("display", null), f.node().getBoundingClientRect().bottom > window.innerHeight && f.style("max-height", window.innerHeight - f.node().getBoundingClientRect().top - 30 + "px"), f.node().getBoundingClientRect().right > window.innerWidth && f.style("right", 0))
                }
                var f = s.append("div").attr("class", "list");
                t.on("click", function() {
                    e()
                });

                function i() {
                    if (s.classed("open")) {
                        for (var t = event.target, e = t.parentElement; e;) {
                            if (t === r) return;
                            e = (t = e).parentElement
                        }
                        u()
                    }
                }

                function h(t) {
                    var e = "100%";
                    "auto" == o.dropdown_width_mode ? e = Math.min(t + 40, Ac(20)) + "px" : "fixed" == o.dropdown_width_mode && (e = Ac(o.dropdown_width_fixed) + "px"), n.style.width = "full" == o.dropdown_width_mode ? e : "", s.style("width", e).style("display", "full" !== o.dropdown_width_mode ? "inline-table" : null), s.select(".main").style("width", e)
                }

                function d() {
                    u(), s.style("display", "none")
                }
                return c.appendedToDOM = function() {
                    return document.querySelector("body").addEventListener("click", i, !1), c
                }, c.removedFromDOM = function() {
                    return document.querySelector("body").removeEventListener("click", i), c
                }, c.show = h, c.hide = d, c.update = function(t) {
                    f.text("");
                    var e = window.getComputedStyle(s.node()).fontSize;
                    if (!a.n_options || "dropdown" !== o.control_type) return d(), c;
                    var n = "";
                    f.text("").selectAll(".list-item").data(t).enter().append("div").attr("class", "list-item").text(function(t) {
                        return t.display.length > n.length && (n = t.display), t.display
                    }).on("click", function(t) {
                        u();
                        var e = t.options_index;
                        e !== a.index() && (a.index(e), l.text(t.display).attr("title", t.display), a.trigger("change"))
                    });
                    var r = Cc(n, e + " sans-serif"),
                        i = t[a.getSortedIndex()].display;
                    return l.text(i).attr("title", i), h(r), c
                }, c
            }
            var Sc = Array.prototype.slice;

            function Ec(t) {
                return t
            }
            var zc = 1,
                Dc = 2,
                Fc = 3,
                Lc = 4,
                Pc = 1e-6;

            function Hc(t) {
                return "translate(" + (t + .5) + ",0)"
            }

            function Uc(t) {
                return "translate(0," + (t + .5) + ")"
            }

            function Oc() {
                return !this.__axis
            }

            function Rc(p, b) {
                var y = [],
                    g = null,
                    m = null,
                    v = 6,
                    x = 6,
                    w = 3,
                    M = p === zc || p === Lc ? -1 : 1,
                    k = p === Lc || p === Dc ? "x" : "y",
                    T = p === zc || p === Fc ? Hc : Uc;

                function e(t) {
                    var e = null == g ? b.ticks ? b.ticks.apply(b, y) : b.domain() : g,
                        n = null == m ? b.tickFormat ? b.tickFormat.apply(b, y) : Ec : m,
                        r = Math.max(v, 0) + w,
                        i = b.range(),
                        a = +i[0] + .5,
                        o = +i[i.length - 1] + .5,
                        c = (b.bandwidth ? function(e) {
                            var n = Math.max(0, e.bandwidth() - 1) / 2;
                            return e.round() && (n = Math.round(n)),
                                function(t) {
                                    return +e(t) + n
                                }
                        } : function(e) {
                            return function(t) {
                                return +e(t)
                            }
                        })(b.copy()),
                        s = t.selection ? t.selection() : t,
                        l = s.selectAll(".domain").data([null]),
                        u = s.selectAll(".tick").data(e, b).order(),
                        f = u.exit(),
                        h = u.enter().append("g").attr("class", "tick"),
                        d = u.select("line"),
                        _ = u.select("text");
                    l = l.merge(l.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), u = u.merge(h), d = d.merge(h.append("line").attr("stroke", "currentColor").attr(k + "2", M * v)), _ = _.merge(h.append("text").attr("fill", "currentColor").attr(k, M * r).attr("dy", p === zc ? "0em" : p === Fc ? "0.71em" : "0.32em")), t !== s && (l = l.transition(t), u = u.transition(t), d = d.transition(t), _ = _.transition(t), f = f.transition(t).attr("opacity", Pc).attr("transform", function(t) {
                        return isFinite(t = c(t)) ? T(t) : this.getAttribute("transform")
                    }), h.attr("opacity", Pc).attr("transform", function(t) {
                        var e = this.parentNode.__axis;
                        return T(e && isFinite(e = e(t)) ? e : c(t))
                    })), f.remove(), l.attr("d", p === Lc || p == Dc ? x ? "M" + M * x + "," + a + "H0.5V" + o + "H" + M * x : "M0.5," + a + "V" + o : x ? "M" + a + "," + M * x + "V0.5H" + o + "V" + M * x : "M" + a + ",0.5H" + o), u.attr("opacity", 1).attr("transform", function(t) {
                        return T(c(t))
                    }), d.attr(k + "2", M * v), _.attr(k, M * r).text(n), s.filter(Oc).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", p === Dc ? "start" : p === Lc ? "end" : "middle"), s.each(function() {
                        this.__axis = c
                    })
                }
                return e.scale = function(t) {
                    return arguments.length ? (b = t, e) : b
                }, e.ticks = function() {
                    return y = Sc.call(arguments), e
                }, e.tickArguments = function(t) {
                    return arguments.length ? (y = null == t ? [] : Sc.call(t), e) : y.slice()
                }, e.tickValues = function(t) {
                    return arguments.length ? (g = null == t ? null : Sc.call(t), e) : g && g.slice()
                }, e.tickFormat = function(t) {
                    return arguments.length ? (m = t, e) : m
                }, e.tickSize = function(t) {
                    return arguments.length ? (v = x = +t, e) : v
                }, e.tickSizeInner = function(t) {
                    return arguments.length ? (v = +t, e) : v
                }, e.tickSizeOuter = function(t) {
                    return arguments.length ? (x = +t, e) : x
                }, e.tickPadding = function(t) {
                    return arguments.length ? (w = +t, e) : w
                }, e
            }
            var qc = Array.prototype,
                Yc = qc.map,
                Bc = qc.slice;

            function jc(t) {
                return +t
            }
            var Ic = [0, 1];

            function Xc(e, n) {
                return (n -= e = +e) ? function(t) {
                    return (t - e) / n
                } : function(t) {
                    return function() {
                        return t
                    }
                }(n)
            }

            function Vc(t, e, n, r) {
                var i = t[0],
                    a = t[1],
                    o = e[0],
                    c = e[1];
                return o = a < i ? (i = n(a, i), r(c, o)) : (i = n(i, a), r(o, c)),
                    function(t) {
                        return o(i(t))
                    }
            }

            function Wc(n, t, e, r) {
                var i = Math.min(n.length, t.length) - 1,
                    a = new Array(i),
                    o = new Array(i),
                    c = -1;
                for (n[i] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++c < i;) a[c] = e(n[c], n[c + 1]), o[c] = r(t[c], t[c + 1]);
                return function(t) {
                    var e = Sn(n, t, 1, i) - 1;
                    return o[e](a[e](t))
                }
            }

            function Zc(c) {
                var s = c.domain;
                return c.ticks = function(t) {
                    var e = s();
                    return Fn(e[0], e[e.length - 1], null == t ? 10 : t)
                }, c.tickFormat = function(t, e) {
                    return function(t, e, n) {
                        var r, i = t[0],
                            a = t[t.length - 1],
                            o = Pn(i, a, null == e ? 10 : e);
                        switch ((n = Bi(null == n ? ",f" : n)).type) {
                            case "s":
                                var c = Math.max(Math.abs(i), Math.abs(a));
                                return null != n.precision || isNaN(r = ta(o, c)) || (n.precision = r), $i(n, c);
                            case "":
                            case "e":
                            case "g":
                            case "p":
                            case "r":
                                null != n.precision || isNaN(r = ea(o, Math.max(Math.abs(i), Math.abs(a)))) || (n.precision = r - ("e" === n.type));
                                break;
                            case "f":
                            case "%":
                                null != n.precision || isNaN(r = Ki(o)) || (n.precision = r - 2 * ("%" === n.type))
                        }
                        return Zi(n)
                    }(s(), t, e)
                }, c.nice = function(t) {
                    null == t && (t = 10);
                    var e, n = s(),
                        r = 0,
                        i = n.length - 1,
                        a = n[r],
                        o = n[i];
                    return o < a && (e = a, a = o, o = e, e = r, r = i, i = e), 0 < (e = Ln(a, o, t)) ? e = Ln(a = Math.floor(a / e) * e, o = Math.ceil(o / e) * e, t) : e < 0 && (e = Ln(a = Math.ceil(a * e) / e, o = Math.floor(o * e) / e, t)), 0 < e ? (n[r] = Math.floor(a / e) * e, n[i] = Math.ceil(o / e) * e, s(n)) : e < 0 && (n[r] = Math.ceil(a * e) / e, n[i] = Math.floor(o * e) / e, s(n)), c
                }, c
            }

            function $c() {
                var t = function(e, n) {
                    var r, i, a, o = Ic,
                        c = Ic,
                        s = Ge,
                        l = !1;

                    function u() {
                        return r = 2 < Math.min(o.length, c.length) ? Wc : Vc, i = a = null, t
                    }

                    function t(t) {
                        return (i = i || r(o, c, l ? function(t) {
                            return function(e, n) {
                                var r = t(e = +e, n = +n);
                                return function(t) {
                                    return t <= e ? 0 : n <= t ? 1 : r(t)
                                }
                            }
                        }(e) : e, s))(+t)
                    }
                    return t.invert = function(t) {
                        return (a = a || r(c, o, Xc, l ? function(t) {
                            return function(e, n) {
                                var r = t(e = +e, n = +n);
                                return function(t) {
                                    return t <= 0 ? e : 1 <= t ? n : r(t)
                                }
                            }
                        }(n) : n))(+t)
                    }, t.domain = function(t) {
                        return arguments.length ? (o = Yc.call(t, jc), u()) : o.slice()
                    }, t.range = function(t) {
                        return arguments.length ? (c = Bc.call(t), u()) : c.slice()
                    }, t.rangeRound = function(t) {
                        return c = Bc.call(t), s = Qe, u()
                    }, t.clamp = function(t) {
                        return arguments.length ? (l = !!t, u()) : l
                    }, t.interpolate = function(t) {
                        return arguments.length ? (s = t, u()) : s
                    }, u()
                }(Xc, Ve);
                return t.copy = function() {
                    return function(t, e) {
                        return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
                    }(t, $c())
                }, Zc(t)
            }

            function Gc(t) {
                this.container = W(t), this._width = null, this._height = null, this._handleRadius = 15, this._channelHeight = 5, this._channelRadius = null, this._handleFill = "black", this._channelFill = "#eee", this._margin = {
                    top: null,
                    left: null,
                    right: null
                }, this._domain = [0, 1], this._value = null, this._snap = !1, this._scale = null, this._axis = !1, this._ticks = null, this._tickFormat = null, this._tickSize = null, this._label = null, this._labelSize = 18, this._startLabel = null, this._startLabelBelow = !1, this._endLabel = null, this._endLabelBelow = !1, this._startEndLabelSize = 16, this.handlers = {
                    change: []
                }
            }

            function Qc(e) {
                0 < e.length && "_" == e.charAt(0) && (Gc.prototype[e.substr(1)] = function(t) {
                    return void 0 === t ? this[e] : (this[e] = t, this)
                })
            }
            var Jc = new Gc;
            for (var Kc in Jc) Qc(Kc);

            function ts(t, e) {
                return "boolean" == typeof t ? t ? Math.round(e) : e : function t(e, n, r, i) {
                    if (void 0 === r && (r = 0), void 0 === i && (i = e.length), i - r == 0) return n;
                    if (i - r == 1) return e[r];
                    if (i - r == 2) return Math.abs(e[r] - n) <= Math.abs(e[r + 1] - n) ? e[r] : e[r + 1];
                    var a = r + Math.floor((i - r) / 2),
                        o = e[a],
                        c = e[a - 1];
                    return c <= n && n <= o ? Math.abs(c - n) <= Math.abs(o - n) ? c : o : o <= n ? t(e, n, a, i) : t(e, n, r, a)
                }(t, e)
            }

            function es(t) {
                return new Gc(t)
            }

            function ns(a, o, t) {
                function n() {
                    clearTimeout(g), g = null
                }

                function i(t) {
                    var e = u[t];
                    e.options_index !== a.index() && (a.index(e.options_index), a.trigger("change"))
                }

                function c() {
                    n(), p.classed("playing", !1), b.html(e), a._isPlaying_(!1), d = !1
                }

                function s() {
                    p.classed("playing", !0), b.html(r), v(), a._isPlaying_(!0), d = !0
                }
                var e, r, l, u, f, h, d, _ = {},
                    p = W(t).append("div").attr("class", "fl-control fl-control-slider animatable"),
                    b = p.append("div").attr("class", "slider-play"),
                    y = p.append("div").attr("class", "fl-controls-slider"),
                    g = null,
                    m = es(y.node()).snap(!0).on("change", function(t) {
                        var e = null !== g;
                        e && n(), i(t), e && v()
                    }),
                    v = function() {
                        var t = a.getSortedIndex(),
                            e = f[t],
                            n = a.n_options - 1,
                            r = t < n ? t + 1 : 0;
                        g = setTimeout(function() {
                            i(r), o.slider_loop || r < n ? v() : c()
                        }, e)
                    };
                b.on("click", function() {
                    null === g ? s() : c()
                });

                function x() {
                    return p.style("display", "inline-block"),
                        function() {
                            var t = Math.round(Ac(o.slider_handle_height) / 2);
                            p.style("width", Math.round(Ac(o.slider_width)) + "px"), b.style("height", 2 * t + "px").style("width", 2 * t + "px").style("display", o.slider_play_button ? null : "none");
                            var e = p.node().getBoundingClientRect().width,
                                n = b.node().getBoundingClientRect().width;
                            y.style("width", Math.max(e - n, 1) + "px").style("height", 2 * t + "px"), m.handleRadius(t).margin({
                                left: t + 5,
                                right: t + Ac(o.slider_margin),
                                top: t
                            })
                        }(), o.slider_play_button ? p.classed("animatable", !0) : (c(), p.classed("animatable", !1)), l !== o.slider_handle_color && (m.update(), l = o.slider_handle_color || "currentColor", p.select(".slider-handle").style("fill", l), e = function(t) {
                            return '<svg width="25px" height="30px" viewBox="0 0 25 30"> <polygon fill="' + t + '" stroke="none" points="25 15 0 30 0 0"></polygon> </svg>'
                        }(l), r = function(t) {
                            return '<svg width="26px" height="30px" viewBox="0 0 26 30"> <g stroke="none" stroke-width="1" fill="' + t + '"><rect x="2" y="2" width="9" height="26"></rect> <rect x="15" y="2" width="9" height="26"></rect> </g> </svg>'
                        }(l), b.html(g ? r : e)), _
                }

                function w() {
                    return c(), p.style("display", "none"), _
                }
                return _.show = x, _.hide = w, _.update = function(t) {
                    if (u = t, !a.n_options || "slider" !== o.control_type) return w(), _;
                    x();
                    var n = a.n_options,
                        r = o.slider_loop;
                    f = u.map(function(t, e) {
                        return 1e3 * (o.slider_step_time + (r && e === n - 1 ? o.slider_restart_pause : 0))
                    });
                    var e = a.getSortedIndex(),
                        i = u[e];
                    return m.domain([0, n - 1]).value(e).endLabel(i.display).channelHeight(Math.round(Ac(o.slider_track_height))).channelFill(o.slider_background_color).update(), m.container.select("svg").attr("fill", "currentColor"), (h = h || y.select("text.slider-end-labels")).style("fill", o.slider_font_color).attr("y", "0").attr("dy", "0.25em"), a._isPlaying_() && !d ? s() : !a._isPlaying_() && d && c(), _
                }, _
            }
            Gc.prototype.margin = function(t) {
                if (!t) return this._margin;
                for (Kc in t) {
                    if (!(Kc in this._margin)) throw "Slider.margin: unrecognised option " + Kc;
                    this._margin[Kc] = t[Kc]
                }
                return this
            }, Gc.prototype.on = function(t, e) {
                if (!(t in this.handlers)) throw "Slider.on: No such event: " + t;
                return this.handlers[t].push(e), this
            }, Gc.prototype.fire = function(t, e) {
                if (!(t in this.handlers)) throw "Slider.fire: No such event: " + t;
                for (var n = this.handlers[t], r = 0; r < n.length; r++) n[r].call(this, e);
                return this
            }, Gc.prototype.update = Gc.prototype.draw = function() {
                var i = this,
                    t = this._width,
                    e = this._height,
                    n = this.container.node();
                if (!t) {
                    var r = n.getBoundingClientRect();
                    if (!r || 0 == r.width) return this;
                    t = r.width, e = r.height
                }
                var a, o = null == this._channelRadius ? this._channelHeight / 2 : this._channelRadius,
                    c = null == this._margin.left ? Math.max(this._handleRadius, o) : this._margin.left,
                    s = null == this._margin.right ? Math.max(this._handleRadius, o) : this._margin.right,
                    l = null == this._margin.top ? Math.max(this._handleRadius, this._channelHeight / 2) : this._margin.top,
                    u = t - c - s,
                    f = u + 2 * o,
                    h = 1.5 * this._labelSize;
                null != this._label && null == this._margin.top && (l += h), "http://www.w3.org/2000/svg" == n.namespaceURI ? a = this.container : ((a = this.container.selectAll("svg").data([{
                    width: t,
                    height: e
                }])).exit().remove(), (a = a.enter().append("svg").merge(a)).attr("width", function(t) {
                    return t.width
                }).attr("height", function(t) {
                    return t.height
                }));
                var d = a.selectAll("g.slider-container").data([{
                    left: c,
                    top: l,
                    id: this._id
                }]);
                d.exit().remove(), (d = d.enter().append("g").attr("class", "slider-container").merge(d)).attr("transform", function(t) {
                    return "translate(" + t.left + "," + t.top + ")"
                }).attr("id", function(t) {
                    return t.id
                }), this.scale = (this._scale ? this._scale() : $c()).domain(this._domain).range([0, u]), null == this._value || this._value < this._domain[0] ? this._value = this._domain[0] : this._value > this._domain[1] && (this._value = this._domain[1]), this._snap && (this._value = ts(this._snap, this._value));
                var _, p = [];
                this._axis && (_ = "boolean" != typeof this._axis ? this._axis(this.scale) : function(t) {
                    return Rc(Fc, t)
                }().scale(this.scale).tickPadding(6), this._ticks && _.ticks(this._ticks), this._tickFormat && _.tickFormat(this._tickFormat), this._tickSize ? _.tickSize(this._tickSize) : _.tickSize(Math.max(5, this._handleRadius - this._channelHeight - 2)), p.push(_));
                var b, y, g, m, v = d.selectAll(".slider-axis").data(p).enter();

                function x() {
                    document.removeEventListener("mouseup", x, !1), document.removeEventListener("mousemove", w, !1)
                }

                function w(t) {
                    T(t.clientX - g)
                }

                function M() {
                    document.removeEventListener("touchend", M, !1), document.removeEventListener("touchmove", k, !1)
                }

                function k(t) {
                    1 == t.touches.length && T(t.touches[0].clientX - g)
                }

                function T(t) {
                    var e = m + t,
                        n = Math.max(0, Math.min(u, e)),
                        r = i.scale.invert(n);
                    i._snap && (r = ts(i._snap, r)), y.attr("cx", i.scale(r)), r != i._value && (i._value = r, i.fire("change", i._value))
                }
                v.append("g").attr("class", "slider-axis").attr("transform", "translate(0," + this._channelHeight / 2 + ")").each(function(t) {
                    t(W(this))
                }), v.select(".domain").attr("fill", "none"), v.selectAll(".tick line").attr("stroke", "black"), v.exit().remove(), (b = d.selectAll(".slider-channel").data([{
                    width: f,
                    height: this._channelHeight,
                    channel_r: o
                }])).exit().remove(), (b = b.enter().append("rect").attr("class", "slider-channel").attr("cursor", "pointer").on("click", function() {
                    var t = Math.max(0, Math.min(u, Z(this)[0]));
                    i._value = i.scale.invert(t), i._snap && (i._value = ts(i._snap, i._value)), y.attr("cx", i.scale(i._value)), i.fire("change", i._value)
                }).merge(b)).attr("width", function(t) {
                    return t.width
                }).attr("fill", this._channelFill).attr("height", function(t) {
                    return t.height
                }).attr("y", function(t) {
                    return -t.height / 2
                }).attr("x", function(t) {
                    return -t.channel_r
                }).attr("rx", function(t) {
                    return t.channel_r
                }), (y = (y = d.selectAll(".slider-handle").data([{
                    v: this._value,
                    x: this.scale(this._value)
                }])).enter().append("circle").attr("class", "slider-handle").attr("cursor", "col-resize").merge(y)).attr("cx", function(t) {
                    return t.x
                }).attr("r", this._handleRadius).attr("fill", this._handleFill).on("mousedown", function() {
                    O.preventDefault(),
                        function(t) {
                            document.addEventListener("mouseup", x, !1), document.addEventListener("mousemove", w, !1), g = t.clientX, m = i.scale(i._value)
                        }(O)
                }).on("touchstart", function() {
                    O.preventDefault(),
                        function(t) {
                            1 == t.touches.length && (document.addEventListener("touchend", M, !1), document.addEventListener("touchmove", k, !1), g = t.touches[0].clientX, m = i.scale(i._value))
                        }(O)
                });
                var A = [];
                this._label && A.push({
                    label: this._label,
                    x: u / 2,
                    y: -h,
                    font_size: this._labelSize
                });
                var C = d.selectAll(".slider-label").data(A);
                C.exit().remove(), (C = C.enter().append("text").attr("class", "slider-label").attr("text-anchor", "middle").attr("cursor", "default").merge(C)).text(function(t) {
                    return t.label
                }).attr("x", function(t) {
                    return t.x
                }).attr("y", function(t) {
                    return t.y
                }).attr("font-size", this._labelSize);
                var N = [];
                this._startLabel && N.push({
                    label: this._startLabel,
                    x: this._startLabelBelow ? 0 : -(o + 5 + Math.max(0, this._handleRadius - o)),
                    y: this._startLabelBelow ? o + 15 : this._startEndLabelSize / 1.75 - o / 2,
                    anchor: this._startLabelBelow ? "middle" : "end",
                    font_size: this._startEndLabelSize
                }), this._endLabel && N.push({
                    label: this._endLabel,
                    x: this._endLabelBelow ? u : u + (o + Math.max(0, this._handleRadius - o) + 5),
                    y: this._startLabelBelow ? o + 15 : this._startEndLabelSize / 1.75 - o / 2,
                    anchor: this._endLabelBelow ? "middle" : "start",
                    font_size: this._startEndLabelSize
                });
                var S = d.selectAll(".slider-end-labels").data(N);
                return S.exit().remove(), (S = S.enter().append("text").attr("class", "slider-end-labels").attr("pointer-events", "none").merge(S)).text(function(t) {
                    return t.label
                }).attr("font-size", function(t) {
                    return t.font_size
                }).attr("x", function(t) {
                    return t.x
                }).attr("y", function(t) {
                    return t.y
                }).attr("text-anchor", function(t) {
                    return t.anchor
                }), this
            }, es.version = "1.3.2";
            var rs = Object.freeze({
                control_type: "dropdown",
                dropdown_width_mode: "auto",
                dropdown_width_fixed: 20,
                button_group: !0,
                button_group_width_mode: "fixed",
                button_group_width_fixed: 20,
                slider_width: 15,
                slider_handle_color: null,
                slider_font_color: null,
                slider_background_color: "#dddddd",
                slider_handle_height: 1,
                slider_track_height: .2,
                slider_margin: 4.5,
                slider_play_button: !0,
                slider_step_time: 2,
                slider_loop: !0,
                slider_restart_pause: 0,
                sort: "unsorted",
                sort_temporal_format: "%Y",
                _index_: null,
                _is_playing_: !1
            });

            function is(e, t, n) {
                var r = {};
                t = t || la, n = n || ua;
                var i = [],
                    a = [],
                    o = [],
                    c = document.createElement("div");
                c.setAttribute("class", "fl-controls-container");
                var s = Nc(r, e, c),
                    l = function(r, i, t) {
                        function a() {
                            s.classed("hidden", !1)
                        }

                        function o() {
                            s.classed("hidden", !0)
                        }
                        var c = {},
                            s = W(t).append("div").attr("class", "fl-control fl-control-buttons");
                        return c.show = a, c.hide = o, c.update = function(t) {
                            if (s.text(""), !r.n_options || "buttons" !== i.control_type) return o(), c;
                            var e = r.index();
                            s.classed("grouped", i.button_group), s.classed("fixed-width", "fixed" == i.button_group_width_mode || "full" == i.button_group_width_mode), s.style("width", i.button_group && "fixed" == i.button_group_width_mode ? Ac(i.button_group_width_fixed) + "px" : "full" == i.button_group_width_mode ? "100%" : null);
                            var n = s.selectAll(".button").data(t).enter().append("div");
                            n.attr("class", "button").style("cursor", "pointer").classed("selected", function(t) {
                                return t.options_index === e
                            }).on("click", function(t) {
                                var e = t.options_index;
                                e !== r.index() && (r.index(e), n.classed("selected", function(t) {
                                    return t.options_index === e
                                }), r.trigger("change"))
                            }).append("span").text(function(t) {
                                return t.display
                            }), a()
                        }, c
                    }(r, e, c),
                    u = ns(r, e, c);
                for (var f in rs) void 0 === e[f] && (e[f] = rs[f]);
                var h = e._index_;
                r.appendTo = function(t) {
                    return kc(), W(t).node().appendChild(c), s.appendedToDOM(), r
                };
                r.remove = function() {
                    return c.parentElement && c.parentElement.removeChild(c), s.removedFromDOM(), r
                }, r.options = function(t) {
                    if (void 0 === t) return i.slice();
                    if (!Array.isArray(t)) return r;
                    var e = (i = t.slice()).length,
                        n = d();
                    return e ? (null === n || e <= n) && d(0) : d(null), r
                }, Object.defineProperty(r, "n_options", {
                    get: function() {
                        return i.length
                    }
                });
                var d = function(t) {
                    return void 0 === t ? (e._is_playing_ || (h = e._index_), h) : (null === t || function(t) {
                        return i.length && 0 <= t && t < i.length
                    }(t) ? (h = t, e._is_playing_ || (e._index_ = h)) : console.warn("Invalid index, ignoring update call"), r)
                };
                r.index = d, r.getSortedIndex = function() {
                    var n, r = d();
                    return "unsorted" == e.sort ? r : (a.some(function(t, e) {
                        if (t.options_index === r) return n = e, !0
                    }), n)
                }, r.value = function(t) {
                    if (void 0 === t) return i[d()];
                    var e = i.indexOf(t);
                    return -1 !== e && d(e), r
                }, r.on = function(t, e) {
                    return "change" === t && o.push(e.bind(r)), r
                }, r.update = function() {
                    return function() {
                            var e = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
                            Ac = function(t) {
                                return t * e
                            }
                        }(),
                        function(t) {
                            c.style.display = 1 < t.length ? null : "none", c.style.width = "", u.update(t), s.update(t), l.update(t)
                        }(a = function(t, e, n, r) {
                            var i = "numeric" === e.sort,
                                a = "temporal" === e.sort,
                                o = vc;
                            i ? o = n : a && (o = Ea(e.sort_temporal_format));
                            var c = t.map(function(t, e) {
                                var n = o(t);
                                return {
                                    value: t,
                                    options_index: e,
                                    parsed: n,
                                    display: i && !isNaN(n) ? r(n) : t
                                }
                            });
                            return "unsorted" == e.sort ? c : c.sort(function(t, e) {
                                return function(t, e) {
                                    return t < e ? -1 : e < t ? 1 : e <= t ? 0 : NaN
                                }(t.parsed, e.parsed)
                            })
                        }(i, e, t(), n())), r
                }, r.trigger = function(t) {
                    return "change" === t && function() {
                        var e = d(),
                            n = i[e];
                        o.forEach(function(t) {
                            t(n, e)
                        })
                    }(), r
                };
                return r._isPlaying_ = function(t) {
                    if (void 0 === t) return e._is_playing_;
                    e._is_playing_ = !!t, t || d(h)
                }, r
            }

            function as() {
                return this.declarations = [], this
            }

            function os(t) {
                return this.selector = t, this.styles = [], this
            }
            as.prototype.select = function(t) {
                if (!t) return this;
                var e = new os(t, this);
                return (e.parent = this).addDeclaration(e), e
            }, as.prototype.addDeclaration = function(t) {
                return this.declarations.push(t), this
            }, as.prototype.print = function() {
                var e = "";
                return this.declarations.forEach(function(t) {
                    e += t.selector + " {\n", t.styles.forEach(function(t) {
                        e += "\t" + t[0] + ": " + t[1] + ";\n"
                    }), e += "}\n\n"
                }), e
            }, as.prototype.clear = function() {
                return this.declarations = [], this
            }, os.prototype.style = function(t, e) {
                var n = "function" == typeof value_ ? e() : e;
                return "" !== n && null != n && this.styles.push([t, n]), this
            }, os.prototype.select = function(t) {
                return this.parent.select(this.selector + " " + t)
            };
            var cs = Object.freeze({
                font_size: 1,
                font_weight: "bold",
                padding: .4
            });

            function ss(t, e, n) {
                for (var r in this._state = t, cs) void 0 === this._state[r] && (this._state[r] = cs[r]);
                return this._layout = n || {}, this._styles = new as, this._selector = e, this._createStylesheet(), this
            }
            ss.prototype._createStylesheet = function() {
                this._stylesheet = document.createElement("style"), this._stylesheet.className = "fl-ui-styles-controls", document.head.appendChild(this._stylesheet)
            }, ss.prototype.update = function() {
                this._styles.clear(), this._styles.select(this._selector + ".hidden").style("display", "none"), this._styles.select(this._selector).style("vertical-align", "middle").style("position", "relative").style("font-size", this._state.font_size + "rem").style("font-weight", this._state.font_weight), this._styles.select(this._selector + ".fl-control .button").style("padding", this._state.padding + "rem " + 2 * this._state.padding + "rem"), this._styles.select(this._selector + " .list-item").style("padding", Math.max(this._state.padding, .5) + "rem"), this._styles.select(this._selector + "-dropdown .main").style("padding", this._state.padding + "rem " + 1.5 * this._state.padding + "rem"), this._styles.select(this._selector + "-slider .slider-end-labels").style("font-size", this._state.font_size + "rem").style("font-weight", this._state.font_weight), this._styles.select(this._selector + "-slider").style("padding", this._state.padding + "rem 0"), this._stylesheet.innerHTML = this._styles.print()
            };
            var ls;
            ls = document.createElement("canvas").getContext("2d");

            function us(t) {
                return "string" == typeof t && null != t.match(/^(https?:\/\/|data:)/i)
            }

            function fs(t, e) {
                var n = function(t, e) {
                    if ("string" != typeof t) return !1;
                    var n = Gt(t);
                    return n.opacity = void 0 !== e ? e : 1, n
                }(t, e);
                return !!n && n.toString()
            }
            var hs = Object.freeze({
                background: null,
                font_color: null,
                background_selected: "#2886b2",
                font_color_selected: "#ffffff",
                background_hover: null,
                font_color_hover: null,
                border_width: 1,
                border_transparency: .25,
                border_color: null,
                border_radius: 3
            });

            function ds(t, e, n) {
                for (var r in this._state = t, hs) void 0 === this._state[r] && (this._state[r] = hs[r]);
                return this._layout = n || {}, this._styles = new as, this._selector = e, this._createStylesheet(), this
            }
            ds.prototype._createStylesheet = function() {
                this._stylesheet = document.createElement("style"), this._stylesheet.className = "fl-ui-styles-button", document.head.appendChild(this._stylesheet)
            }, ds.prototype.update = function() {
                this._styles.clear();
                var t = this._state.background || this._layout.background_color || "#ffffff",
                    e = this._state.font_color || this._layout.font_color || "#333333",
                    n = fs(this._state.border_color || e, this._state.border_transparency);
                this._styles.select(this._selector + ".fl-control.hidden").style("display", "none"), this._styles.select(this._selector + ".fl-control .button").style("overflow", "hidden").style("white-space", "nowrap").style("box-sizing", "content-box").style("margin", "0 2px 0 0 !important").style("background-color", t).style("color", e).style("border", this._state.border_width + "px solid " + n).style("border-radius", this._state.border_radius + "px"), this._styles.select(this._selector + ".fl-control .button:hover").style("background-color", this._state.background_hover || t).style("color", this._state.font_color_hover || e), this._styles.select(this._selector + ".fl-control .button.selected").style("background-color", this._state.background_selected).style("color", this._state.font_color_selected), this._styles.select(this._selector + ".grouped.fl-control .button").style("border-right", "none").style("border-radius", "0").style("margin", "0"), this._styles.select(this._selector + ".grouped.fl-control .button:first-child").style("border-radius", this._state.border_radius + "px 0 0 " + this._state.border_radius + "px"), this._styles.select(this._selector + ".grouped.fl-control .button:last-child").style("border-radius", "0 " + this._state.border_radius + "px " + this._state.border_radius + "px 0").style("border-right", this._state.border_width + "px solid " + n), this._styles.select(this._selector + ".grouped.fl-control.fixed-width:not(.hidden)").style("width", this._state.grouped_width + "%"), this._stylesheet.innerHTML = this._styles.print()
            };
            var _s, ps = Object.freeze({
                background: null,
                font_color: null,
                border_style: "bottom",
                border_width: 1,
                border_color: null,
                border_transparency: .25,
                border_radius: 3
            });

            function bs(t, e, n) {
                for (var r in this._state = t, ps) void 0 === this._state[r] && (this._state[r] = ps[r]);
                return this._layout = n || {}, this._styles = new as, this._selector = e, this._createStylesheet(), this
            }
            bs.prototype._createStylesheet = function() {
                this._stylesheet = document.createElement("style"), this._stylesheet.className = "fl-ui-styles-dropdown", document.head.appendChild(this._stylesheet)
            }, bs.prototype.update = function() {
                this._styles.clear();
                var t = this._state.background || this._layout.background_color || "#ffffff",
                    e = this._state.font_color || this._layout.font_color || "#333333",
                    n = fs(this._state.border_color || e, this._state.border_transparency);
                this._styles.select(this._selector + " .heading").style("margin-bottom", "0.4em"), this._styles.select(this._selector).style("pointer-events", "all"), this._styles.select(this._selector + " .main").style("display", "inline-block").style("cursor", "pointer").style("overflow", "hidden").style("white-space", "nowrap").style("position", "relative").style("background-color", t).style("color", e).style("border", "bottom" == this._state.border_style ? this._state.border_width + "px solid transparent" : this._state.border_width + "px solid " + n).style("border-bottom", "bottom" == this._state.border_style ? this._state.border_width + "px solid " + n : null).style("border-radius", "bottom" == this._state.border_style ? null : this._state.border_radius + "px"), this._styles.select(this._selector + " .main .symbol").style("float", "right").select("div").style("border-top-color", e + " !important"), this._styles.select(this._selector + " .main .current").style("line-height", "1em").style("height", "100%").style("max-width", "88%").style("display", "inline-block").style("overflow", "hidden").style("vertical-align", "top"), this._styles.select(this._selector + " .list").style("top", "2px").style("min-width", "100%").style("padding", "2px").style("display", "none").style("max-height", "200px").style("overflow-y", "auto").style("box-shadow", "0 1px 4px rgba(0, 0, 0, .1)").style("margin-top", "2px").select(".list-item").style("line-height", "1em").style("cursor", "pointer").style("font-weight", "normal").style("color", e), this._styles.select(this._selector + ".open .list").style("display", "block").style("border", this._state.border_width + "px solid " + n).style("background-color", t).style("z-index", "1").style("animation", "dropdown-out 200ms"), this._styles.select(this._selector + " .list-item:hover").style("opacity", "0.6"), this._styles.select(this._selector + " .list-item.selected, " + this._selector + " .list-item.selected:hover").style("opacity", "1").style("cursor", "default"), "bottom" == this._state.border_style && this._styles.select(this._selector + " .main").style("padding-left", 0).style("padding-right", "0.1rem"), this._stylesheet.innerHTML = this._styles.print()
            };
            var ys, gs, ms, vs, xs, ws, Ms, ks, Ts, As = Object.freeze({
                "stack-default": ["header", "controls", "primary", "footer"],
                "stack-2": ["primary", "header", "controls", "footer"],
                "stack-3": ["header", "primary", "controls", "footer"],
                "stack-4": ["controls", "primary", "header", "footer"]
            });
            var Cs = !1;

            function Ns(t) {
                return 0 !== t.indexOf("http://") && 0 !== t.indexOf("https://") ? "http://" + t : t
            }

            function Ss() {
                return function() {
                    var t = document.createElement("style");
                    t.type = "text/css", t.innerHTML = ".flourish-footer { margin: 0; } .flourish-footer p { margin: 0; display: inline; } .flourish-footer p:empty { height: 0; } .flourish-footer a { color: inherit; }", document.head.appendChild(t)
                }(), (ws = document.createElement("footer")).className = "flourish-footer", (Ms = document.createElement("div")).className = "flourish-footer-text", (Ts = document.createElement("a")).target = "_blank", (ks = document.createElement("img")).className = "flourish-footer-logo", Ts.appendChild(ks), ws.appendChild(Ms), ws.appendChild(Ts), ws
            }

            function Es() {
                return Us.background_color_enabled && ! function(t) {
                    if (t) {
                        var e = Gt(t);
                        return 195 < Math.round(299 * e.r + 587 * e.g + 114 * e.b) / 1e3
                    }
                    console.warn("No valid color", t)
                }(Us.background_color)
            }

            function zs() {
                var t = us(Us.footer_logo_src) ? Us.footer_logo_src : "";
                return us(Us.footer_logo_src_light) && Es() && (t = Us.footer_logo_src_light), t
            }

            function Ds() {
                return Us.footer_logo_enabled && zs()
            }

            function Fs() {
                ! function() {
                    var i = "";
                    ["mobile_small", "mobile_big", "tablet", "desktop", "big_screen"].forEach(function(t, e) {
                        var n = "@media(min-width: " + Us["breakpoint_" + t] + "px) {\n",
                            r = "html { font-size:" + Us["font_size_" + t] + "%; }";
                        i += (0 == e ? "" : n) + r + (0 == e ? "" : "\n}") + "\n\n"
                    }), _s.innerHTML = i;
                    var t = [Us.body_font, Us.title_font, Us.subtitle_font, Us.footer_font];
                    t.forEach(function(t) {
                        if (t) {
                            for (var e = !1, n = document.head.querySelectorAll("link.layout-font"), r = 0; r < n.length; r++) {
                                n[r].href == t.url && (e = !0)
                            }
                            if (!e) {
                                var i = document.createElement("link");
                                i.setAttribute("rel", "stylesheet"), i.setAttribute("href", t.url), i.className = "layout-font", document.head.appendChild(i)
                            }
                        }
                    });
                    for (var e = document.head.querySelectorAll("link.layout-font"), n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = !1;
                        t.forEach(function(t) {
                            t && t.url == r.href && (a = !0)
                        }), a || r.parentElement.removeChild(r)
                    }
                    document.body.style.fontFamily = Us.body_font.name
                }(), ys.style.textAlign = Us.header_align, ys.style.margin = 0, ys.style.borderTop = "top" == Us.header_border ? Us.header_border_width + "px " + Us.header_border_style + " " + Us.header_border_color : null, ys.style.borderBottom = "bottom" == Us.header_border ? Us.header_border_width + "px " + Us.header_border_style + " " + Us.header_border_color : null, ys.style.paddingTop = "top" == Us.header_border ? Us.header_border_space + "rem" : "", ys.style.paddingBottom = "bottom" == Us.header_border ? Us.header_border_space + "rem" : "", gs.innerHTML = Us.title ? Us.title : "", gs.style.fontFamily = Us.title_font ? Us.title_font.name : "inherit", gs.style.fontSize = ("custom" != Us.title_size ? Us.title_size : Us.title_size_custom) + "rem", gs.style.lineHeight = Us.title_line_height, gs.style.fontWeight = Us.title_weight, gs.style.color = Us.title_color || Us.font_color, gs.style.margin = 0, gs.style.paddingTop = Us.title ? ("custom" == Us.title_space_above ? Us.title_space_above_custom : Us.title_space_above) + "rem" : 0, ms.innerHTML = Us.subtitle ? Us.subtitle : "", ms.style.fontFamily = Us.subtitle_font ? Us.subtitle_font.name : "inherit", ms.style.fontSize = ("custom" != Us.subtitle_size ? Us.subtitle_size : Us.subtitle_size_custom) + "rem", ms.style.lineHeight = Us.subtitle_line_height, ms.style.fontWeight = Us.subtitle_weight, ms.style.color = Us.subtitle_color || Us.font_color, ms.style.margin = 0, ms.style.paddingTop = Us.subtitle ? ("custom" == Us.subtitle_space_above ? Us.subtitle_space_above_custom : Us.subtitle_space_above) + "rem" : 0, vs.innerHTML = Us.header_text ? Us.header_text : "", vs.style.fontSize = ("custom" != Us.header_text_size ? Us.header_text_size : Us.header_text_size_custom) + "rem", vs.style.lineHeight = Us.header_text_line_height, vs.style.fontWeight = Us.header_text_weight, vs.style.margin = 0, vs.style.color = Us.header_text_color || Us.font_color, vs.style.paddingTop = Us.header_text ? ("custom" == Us.header_text_space_above ? Us.header_text_space_above_custom : Us.header_text_space_above) + "rem" : 0, xs.style.display = Us.header_logo_enabled && us(Us.header_logo_src) ? "" : "none", xs.style.position = "inside" == Us.header_logo_align ? "" : "fixed", xs.style.height = Us.header_logo_height + "rem", xs.style.top = "outside" == Us.header_logo_align ? 0 : "", xs.style.left = "outside" == Us.header_logo_align && "left" == Us.header_logo_position_outside ? 0 : "", xs.style.right = "outside" == Us.header_logo_align && "right" == Us.header_logo_position_outside ? 0 : "", xs.style.marginTop = Us.header_logo_margin_top + "rem", xs.style.marginBottom = Us.header_logo_margin_bottom + "rem", xs.style.marginLeft = Us.header_logo_margin_left + "rem", xs.style.marginRight = Us.header_logo_margin_right + "rem", xs.style.float = "top" == Us.header_logo_position_inside || "outside" == Us.header_logo_align ? "" : Us.header_logo_position_inside, xs.style.width = "auto", xs.src = us(Us.header_logo_src) ? Us.header_logo_src : "",
                    function() {
                        var t = [{
                            name: Us.source_name,
                            url: Us.source_url
                        }, {
                            name: Us.multiple_sources ? Us.source_name_2 : "",
                            url: Us.multiple_sources ? Us.source_url_2 : ""
                        }, {
                            name: Us.multiple_sources ? Us.source_name_3 : "",
                            url: Us.multiple_sources ? Us.source_url_3 : ""
                        }].filter(function(t) {
                            return t.name || t.url
                        });
                        Cs = 0 < t.length || Us.footer_note || Us.footer_note_secondary || Ds(), ws.style.display = "flex", ws.style.height = Cs ? null : 0, ws.style.width = "100%", ws.style.paddingTop = "top" == Us.footer_border ? Us.footer_border_space + "rem" : "", ws.style.paddingBottom = "bottom" == Us.footer_border ? Us.footer_border_space + "rem" : "", ws.style.borderTop = "top" == Us.footer_border ? Us.footer_border_width + "px " + Us.footer_border_style + " " + Us.footer_border_color : "", ws.style.borderBottom = "bottom" == Us.footer_border ? Us.footer_border_width + "px " + Us.footer_border_style + " " + Us.footer_border_color : "", ws.style.fontFamily = Us.footer_font ? Us.footer_font.name : "inherit", "justify" == Us.footer_align ? ws.style.justifyContent = "space-between" : "left" == Us.footer_align ? ws.style.justifyContent = "flex-start" : "right" == Us.footer_align ? ws.style.justifyContent = "flex-end" : "center" == Us.footer_align && (ws.style.justifyContent = "center"), ws.style.fontSize = Us.footer_text_size + "rem", ws.style.color = Us.footer_text_color || Us.font_color, ws.style.alignItems = Us.footer_align_vertical;
                        var i = document.createElement("span");
                        t.forEach(function(t, e) {
                            var n = document.createElement("p");
                            if (0 < e && (n.innerText = ", "), t.url) {
                                var r = document.createElement("a");
                                r.innerText = t.name || t.url, r.href = Ns(t.url), r.target = "_blank", n.appendChild(r)
                            } else n.innerText += t.name || t.url;
                            i.innerHTML += n.innerHTML
                        }), Ms.style.order = "left" == Us.footer_logo_order ? 2 : "", Ms.style.textAlign = "justify" == Us.footer_align ? "" : Us.footer_align;
                        var e = "<p>";
                        e += "" !== i.innerHTML ? Us.source_label + " " + i.innerHTML : "", e += Us.footer_note ? ("" !== i.innerHTML ? " • " : "") + Us.footer_note : "", e += "</p>", e += Us.footer_note_secondary ? "<br /><p>" + Us.footer_note_secondary + "</p>" : "", Ms.innerHTML = e, ks.src = zs(), ks.style.height = Us.footer_logo_height + "rem", ks.style.marginLeft = "right" == Us.footer_logo_order ? Us.footer_logo_margin + "rem" : "", ks.style.marginRight = "left" == Us.footer_logo_order ? Us.footer_logo_margin + "rem" : "", ks.style.verticalAlign = Us.footer_align_vertical, ks.style.display = Ds() ? "" : "none", Ts.href = "" == Us.footer_logo_link_url ? "" : Ns(Us.footer_logo_link_url), Ts.style.cursor = "" == Us.footer_logo_link_url ? "default" : "pointer"
                    }(), document.body.style.backgroundColor = Us.background_color_enabled ? Us.background_color : "transparent", document.body.style.backgroundImage = Us.background_image_enabled ? "url(" + Us.background_image_src + ")" : "", document.body.style.backgroundSize = Us.background_image_size, document.body.style.backgroundRepeat = "no-repeat", document.body.style.backgroundPosition = Us.background_image_position;
                var t = $s.wrapper.style;
                t.height = "100vh", t.color = Us.font_color, t.maxWidth = "wrapper" == Us.max_width_target ? Us.max_width + "px" : "", t.marginLeft = "wrapper" == Us.max_width_target && "left" != Us.max_width_align ? "auto" : "", t.marginRight = "wrapper" == Us.max_width_target && "right" != Us.max_width_align ? "auto" : "", t.padding = Us.margin_top + "rem " + Us.margin_right + "rem " + Us.margin_bottom + "rem " + Us.margin_left + "rem", t.borderTop = Us.border.enabled ? Us.border.top.width + "px " + Us.border.top.style + " " + Us.border.top.color : "", t.borderRight = Us.border.enabled ? Us.border.right.width + "px " + Us.border.right.style + " " + Us.border.right.color : "", t.borderBottom = Us.border.enabled ? Us.border.bottom.width + "px " + Us.border.bottom.style + " " + Us.border.bottom.color : "", t.borderLeft = Us.border.enabled ? Us.border.left.width + "px " + Us.border.left.style + " " + Us.border.left.color : "";
                var e = $s.primary.outer.style,
                    n = $s.legend.outer.style,
                    r = parseFloat(e.order) > parseFloat(n.order) ? "above" : "below";
                As[Us.layout_order].forEach(function(t, e) {
                    $s[t].outer.style.order = 10 * e
                }), e.flex = "1 1 auto", e.height = null, hl(r), n.textAlign = Us.header_align, $s.controls.outer.style.textAlign = Us.header_align, $s.primary.outer.style.maxWidth = "primary" == Us.max_width_target ? Us.max_width + "px" : "", $s.primary.outer.style.marginLeft = "primary" == Us.max_width_target && "left" != Us.max_width_align ? "auto" : "", $s.primary.outer.style.marginRight = "primary" == Us.max_width_target && "right" != Us.max_width_align ? "auto" : "";
                var i = ("custom" == Us.space_between_sections ? Us.space_between_sections_custom : Us.space_between_sections) / 2 + "rem";
                Zs.map(function(t) {
                    var e = $s[t],
                        n = e.outer.style;
                    return {
                        name: t,
                        height: Qs(e.inner),
                        order: parseFloat(n.order),
                        style: n
                    }
                }).sort(function(t, e) {
                    return t.order - e.order
                }).filter(function(t) {
                    if (t.height) return !0;
                    t.style.paddingBottom = "", t.style.paddingTop = ""
                }).forEach(function(t, e, n) {
                    t.style.paddingTop = e ? i : "", t.style.paddingBottom = e < n.length - 1 ? i : ""
                })
            }
            var Ls = Object.freeze({
                body_font: {
                    name: "Source Sans Pro",
                    url: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
                },
                title_font: null,
                subtitle_font: null,
                footer_font: null,
                border: {
                    enabled: !1,
                    top: {
                        width: 1,
                        color: "#dddddd",
                        style: "solid"
                    },
                    right: {
                        width: 1,
                        color: "#dddddd",
                        style: "solid"
                    },
                    bottom: {
                        width: 1,
                        color: "#dddddd",
                        style: "solid"
                    },
                    left: {
                        width: 1,
                        color: "#dddddd",
                        style: "solid"
                    }
                },
                layout_order: "stack-default",
                margin_top: .75,
                margin_right: .75,
                margin_bottom: .75,
                margin_left: .75,
                space_between_sections: 1,
                space_between_sections_custom: 1,
                background_color_enabled: !0,
                background_color: "#ffffff",
                background_image_enabled: !1,
                background_image_src: "",
                background_image_size: "cover",
                background_image_position: "center center",
                max_width: 600,
                max_width_target: "none",
                max_width_align: "center",
                breakpoint_mobile_small: 0,
                breakpoint_mobile_big: 380,
                breakpoint_tablet: 580,
                breakpoint_desktop: 1080,
                breakpoint_big_screen: 1280,
                font_color: "#333333",
                font_size_mobile_small: 62.5,
                font_size_mobile_big: 75,
                font_size_tablet: 87.5,
                font_size_desktop: 100,
                font_size_big_screen: 120,
                header_align: "left",
                header_border: "none",
                header_border_width: 1,
                header_border_color: "#dddddd",
                header_border_style: "solid",
                header_border_space: .5,
                header_logo_enabled: !1,
                header_logo_align: "inside",
                header_logo_src: "",
                header_logo_height: 3,
                header_logo_position_inside: "left",
                header_logo_position_outside: "left",
                header_logo_margin_top: .25,
                header_logo_margin_right: .5,
                header_logo_margin_bottom: 0,
                header_logo_margin_left: 0,
                title: "",
                title_size: 1.6,
                title_size_custom: 1.6,
                title_line_height: 1.2,
                title_color: null,
                title_weight: "bold",
                title_space_above: 0,
                title_space_above_custom: 1.5,
                title_styling: !1,
                subtitle: "",
                subtitle_size: 1.6,
                subtitle_size_custom: 1.6,
                subtitle_line_height: 1.2,
                subtitle_color: null,
                subtitle_weight: "normal",
                subtitle_space_above: 0,
                subtitle_space_above_custom: 1.5,
                subtitle_styling: !1,
                header_text: "",
                header_text_size: 1.2,
                header_text_size_custom: 1.2,
                header_text_line_height: 1.2,
                header_text_color: null,
                header_text_weight: "normal",
                header_text_space_above: .5,
                header_text_space_above_custom: 1.5,
                source_label: "Source: ",
                source_name: "",
                source_url: "",
                source_name_2: "",
                source_url_2: "",
                source_name_3: "",
                source_url_3: "",
                footer_note: "",
                footer_note_secondary: "",
                footer_text_size: 1,
                footer_text_color: null,
                footer_styling: !1,
                footer_align: "justify",
                footer_align_vertical: "center",
                footer_border: "none",
                footer_border_width: 1,
                footer_border_color: "#dddddd",
                footer_border_style: "solid",
                footer_border_space: .5,
                footer_logo_enabled: !1,
                footer_logo_src: "",
                footer_logo_src_light: "",
                footer_logo_link_url: "",
                footer_logo_height: 1.5,
                footer_logo_margin: .25,
                footer_logo_order: "right"
            });
            var Ps, Hs, Us, Os = "Your web browser does not support the features used by this content. Consider updating to a modern browser.";

            function Rs(t) {
                return window.innerWidth !== Ps && (Ps = window.innerWidth, Hs = parseFloat(getComputedStyle(document.documentElement).fontSize)), t * Hs
            }
            var qs, Ys, Bs, js, Is, Xs, Vs, Ws, Zs = ["header", "controls", "legend", "primary", "footer"],
                $s = {};

            function Gs(t) {
                return t.getBoundingClientRect().width
            }

            function Qs(t) {
                return t.getBoundingClientRect().height
            }

            function Js() {
                return $s.wrapper
            }

            function Ks() {
                return $s.sidebar
            }

            function tl(t) {
                return -1 !== Zs.indexOf(t) ? $s[t].inner : null
            }

            function el(t) {
                return $s[t] || void 0 === t ? Gs("wrapper" == t || void 0 === t ? $s.wrapper : $s[t].outer) : null
            }

            function nl(t) {
                return $s[t] || void 0 === t ? "wrapper" == t || void 0 === t ? Gs($s.wrapper) - ll("horizontal") - ul("horizontal") : Gs($s[t].inner) : null
            }

            function rl(t) {
                return $s[t] || void 0 === t ? Qs("wrapper" == t || void 0 === t ? $s.wrapper : $s[t].outer) : null
            }

            function il(t) {
                return $s[t] || void 0 === t ? "wrapper" == t || void 0 === t ? Qs($s.wrapper) - ll("vertical") - ul("vertical") : Qs($s[t].inner) : null
            }

            function al() {
                return Qs($s.primary.outer) - cl($s.primary.outer)
            }

            function ol() {
                return Gs($s.primary.inner)
            }

            function cl(t) {
                return (parseFloat(getComputedStyle(t).paddingTop) || 0) + (parseFloat(getComputedStyle(t).paddingBottom) || 0)
            }

            function sl() {
                return function() {
                    if (Flourish.fixed_height) return window.innerHeight;
                    var t = window.innerWidth;
                    return 999 < t ? 650 : 599 < t ? 575 : 400
                }() - ll("vertical") - ul("vertical") - ["header", "controls", "legend", "footer"].reduce(function(t, e) {
                    return t + rl(e)
                }, 0) - cl($s.primary.outer)
            }

            function ll(t) {
                var e;
                return "left" == t ? e = Us.margin_left : "right" == t ? e = Us.margin_right : "top" == t ? e = Us.margin_top : "bottom" == t ? e = Us.margin_bottom : "horizontal" == t ? e = Us.margin_left + Us.margin_right : "vertical" == t && (e = Us.margin_top + Us.margin_bottom), Rs(e)
            }

            function ul(t) {
                return Us.border.enabled ? "vertical" == t ? Us.border.top.width + Us.border.bottom.width : "horizontal" == t ? Us.border.left.width + Us.border.right.width : null : 0
            }

            function fl(t) {
                if (!Flourish.fixed_height && void 0 !== Flourish.fixed_height) {
                    var e = null === t,
                        n = $s.primary,
                        r = e ? sl() : t;
                    r + cl($s.primary.outer) !== parseFloat(n.outer.style.height) && ($s.wrapper.style.height = "", n.outer.style.flex = "", n.inner.style.height = r + "px", Flourish.setHeight(e ? null : rl()))
                }
            }

            function hl(t) {
                var e = parseFloat($s.primary.outer.style.order);
                $s.legend.outer.style.order = e + 1 * ("below" === t.trim().toLowerCase() ? 1 : -1)
            }

            function dl(t) {
                var e = qs.querySelector(".fl-layout-overlay-message");
                if (t) {
                    qs.style.display = "block";
                    var n = "string" == typeof t ? t : Os;
                    e.innerHTML = n
                } else e.textContent = "", qs.style.display = "none"
            }

            function _l() {
                return qs
            }
            var pl = function(t) {
                for (var e in Us = t, Ls) void 0 === Us[e] && (Us[e] = Ls[e]);
                return (_s = document.createElement("style")).id = "flourish-page-styles", _s.type = "text/css", document.head.appendChild(_s), $s.wrapper = function() {
                        var t = document.createElement("div");
                        t.id = "fl-layout-wrapper-outer", t.style.display = "flex";
                        var e = document.createElement("main");
                        e.id = "fl-layout-wrapper", e.style.display = "flex", e.style.flexGrow = "1", e.style.flexDirection = "column", e.style.boxSizing = "border-box", e.style.overflow = "hidden";
                        var n = document.createElement("aside");
                        return n.id = "fl-layout-sidebar", n.style.position = "relative", $s.sidebar = n, t.appendChild(e), t.appendChild(n), document.body.appendChild(t), e
                    }(), Zs.forEach(function(t, e) {
                        $s[t] = function(t, e) {
                            var n = "fl-layout-" + t,
                                r = document.createElement("section");
                            r.className = "fl-layout-container", r.id = n + "-container", r.style.width = "100%", r.style.position = "relative", r.style.order = e;
                            var i = document.createElement("div");
                            return i.className = "fl-layout-inner", i.id = n, i.style.width = "100%", i.style.position = "relative", "primary" == t && (r.style.display = "flex"), r.appendChild(i), $s.wrapper.appendChild(r), {
                                outer: r,
                                inner: i
                            }
                        }(t, e)
                    }), tl("header").appendChild(function() {
                        (ys = document.createElement("header")).className = "flourish-header";
                        var t = document.createElement("hgroup");
                        return gs = document.createElement("h1"), ms = document.createElement("h2"), vs = document.createElement("p"), xs = document.createElement("img"), ys.appendChild(xs), ys.appendChild(t), t.appendChild(gs), t.appendChild(ms), ys.appendChild(vs), ys
                    }()), tl("footer").appendChild(Ss()), $s.primary.outer.style.overflow = "hidden",
                    function() {
                        var t = $s.primary.outer;
                        t.style.position = "relative", (qs = document.createElement("div")).id = "fl-layout-overlay";
                        var e = qs.style;
                        e.position = "absolute", e.display = "none", e.width = "100%", e.height = "100%", e.top = 0, e.left = 0, e.backgroundColor = "rgb(200,200,200)", e.zIndex = 999999, e.pointerEvents = "none";
                        var n = document.createElement("p");
                        n.className = "fl-layout-overlay-message", (e = n.style).color = "#333333", e.fontSize = "1.5rem", e.paddingLeft = "15%", e.paddingRight = "15%", e.width = "100%", e.boxSizing = "border-box", e.position = "absolute", e.top = "50%", e.transform = "translate(0, -50%)", e.margin = "0", e.textAlign = "center", qs.appendChild(n), t.appendChild(qs)
                    }(), Fs(), {
                        update: Fs,
                        getWrapper: Js,
                        getSidebar: Ks,
                        getSection: tl,
                        getOuterWidth: el,
                        getInnerWidth: nl,
                        getOuterHeight: rl,
                        getInnerHeight: il,
                        getPrimaryHeight: al,
                        getPrimaryWidth: ol,
                        getDefaultPrimaryHeight: sl,
                        setHeight: fl,
                        setLegendPosition: hl,
                        showOverlay: dl,
                        remToPx: Rs,
                        getOverlay: _l
                    }
            }(_.layout);

            function bl() {
                O.target && (O.target.getAttribute("class"), "check-rect" == O.target.getAttribute("class")) || (_.selected_horse = null, Rd())
            }

            function yl() {
                Ws = W(pl.getSection("controls")).append("div").attr("id", "viz-ui"), Ys = W(pl.getSection("primary")).append("svg").on("click", bl), (Bs = Ys.append("g").attr("id", "plot")).append("clipPath").attr("id", "clip").append("rect").attr("width", 0), Bs.append("clipPath").attr("id", "circleClip").append("circle"), Vs = Bs.append("g").attr("class", "g-checks"), Bs.append("g").attr("class", "x axis").style("pointer-events", "none"), Bs.append("g").attr("class", "y axis").style("pointer-events", "none"), Bs.select(".y.axis").append("line").attr("class", "y-axis-edge"), js = Bs.append("g").attr("class", "g-lines").attr("clip-path", "url(#clip)"), Xs = Bs.append("g").attr("class", "g-start-circles"), Is = Bs.append("g").attr("class", "g-labels"), Vf = Ws.append("div").attr("id", "horse-controls"), Zf = Vf.append("div").attr("class", "fl-controls-container").attr("id", "replay-container").append("div").attr("class", "fl-control fl-control-buttons").append("div").attr("class", "button").attr("id", "replay").text(_.label_replay).on("click", Rf), (Wf = is(_.toggle_control)).appendTo(Vf.node()).on("change", function(t) {
                    _.value_type = t === _.label_scores ? "scores" : "ranks", Rd()
                }), Bf = Ws.append("div").attr("id", "filter-control").node(), (jf = is(_.filter_control)).appendTo(Bf).on("change", function(t) {
                    _.filter_value = t, Rd()
                }), $f = function(t, e, n) {
                    return new ss(t, e, n)
                }(_.controls_style, ".fl-control", _.layout), Gf = function(t, e, n) {
                    return new ds(t, e, n)
                }(_.button_style, ".fl-control-buttons", _.layout), Qf = function(t, e, n) {
                    return new bs(t, e, n)
                }(_.dropdown_style, ".fl-control-dropdown", _.layout)
            }

            function gl(t) {
                return +t
            }
            var ml = [0, 1];

            function vl(t) {
                return t
            }

            function xl(e, n) {
                return (n -= e = +e) ? function(t) {
                    return (t - e) / n
                } : function(t) {
                    return function() {
                        return t
                    }
                }(isNaN(n) ? NaN : .5)
            }

            function wl(t, e, n) {
                var r = t[0],
                    i = t[1],
                    a = e[0],
                    o = e[1];
                return a = i < r ? (r = xl(i, r), n(o, a)) : (r = xl(r, i), n(a, o)),
                    function(t) {
                        return a(r(t))
                    }
            }

            function Ml(n, t, e) {
                var r = Math.min(n.length, t.length) - 1,
                    i = new Array(r),
                    a = new Array(r),
                    o = -1;
                for (n[r] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = xl(n[o], n[o + 1]), a[o] = e(t[o], t[o + 1]);
                return function(t) {
                    var e = Sn(n, t, 1, r) - 1;
                    return a[e](i[e](t))
                }
            }

            function kl() {
                var n, r, e, i, a, o, c = ml,
                    s = ml,
                    l = Ge,
                    u = vl;

                function f() {
                    var t = Math.min(c.length, s.length);
                    return u !== vl && (u = function(e, n) {
                        var t;
                        return n < e && (t = e, e = n, n = t),
                            function(t) {
                                return Math.max(e, Math.min(n, t))
                            }
                    }(c[0], c[t - 1])), i = 2 < t ? Ml : wl, a = o = null, h
                }

                function h(t) {
                    return isNaN(t = +t) ? e : (a = a || i(c.map(n), s, l))(n(u(t)))
                }
                return h.invert = function(t) {
                        return u(r((o = o || i(s, c.map(n), Ve))(t)))
                    }, h.domain = function(t) {
                        return arguments.length ? (c = Array.from(t, gl), f()) : c.slice()
                    }, h.range = function(t) {
                        return arguments.length ? (s = Array.from(t), f()) : s.slice()
                    }, h.rangeRound = function(t) {
                        return s = Array.from(t), l = Qe, f()
                    }, h.clamp = function(t) {
                        return arguments.length ? (u = !!t || vl, f()) : u !== vl
                    }, h.interpolate = function(t) {
                        return arguments.length ? (l = t, f()) : l
                    }, h.unknown = function(t) {
                        return arguments.length ? (e = t, h) : e
                    },
                    function(t, e) {
                        return n = t, r = e, f()
                    }
            }

            function Tl(c) {
                var s = c.domain;
                return c.ticks = function(t) {
                    var e = s();
                    return Fn(e[0], e[e.length - 1], null == t ? 10 : t)
                }, c.tickFormat = function(t, e) {
                    var n = s();
                    return function(t, e, n, r) {
                        var i, a = Pn(t, e, n);
                        switch ((r = Bi(null == r ? ",f" : r)).type) {
                            case "s":
                                var o = Math.max(Math.abs(t), Math.abs(e));
                                return null != r.precision || isNaN(i = ta(a, o)) || (r.precision = i), $i(r, o);
                            case "":
                            case "e":
                            case "g":
                            case "p":
                            case "r":
                                null != r.precision || isNaN(i = ea(a, Math.max(Math.abs(t), Math.abs(e)))) || (r.precision = i - ("e" === r.type));
                                break;
                            case "f":
                            case "%":
                                null != r.precision || isNaN(i = Ki(a)) || (r.precision = i - 2 * ("%" === r.type))
                        }
                        return Zi(r)
                    }(n[0], n[n.length - 1], null == t ? 10 : t, e)
                }, c.nice = function(t) {
                    null == t && (t = 10);
                    var e, n = s(),
                        r = 0,
                        i = n.length - 1,
                        a = n[r],
                        o = n[i];
                    return o < a && (e = a, a = o, o = e, e = r, r = i, i = e), 0 < (e = Ln(a, o, t)) ? e = Ln(a = Math.floor(a / e) * e, o = Math.ceil(o / e) * e, t) : e < 0 && (e = Ln(a = Math.ceil(a * e) / e, o = Math.floor(o * e) / e, t)), 0 < e ? (n[r] = Math.floor(a / e) * e, n[i] = Math.ceil(o / e) * e, s(n)) : e < 0 && (n[r] = Math.ceil(a * e) / e, n[i] = Math.floor(o * e) / e, s(n)), c
                }, c
            }

            function Al() {
                var t = kl()(vl, vl);
                return t.copy = function() {
                        return function(t, e) {
                            return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
                        }(t, Al())
                    },
                    function(t, e) {
                        switch (arguments.length) {
                            case 0:
                                break;
                            case 1:
                                this.range(t);
                                break;
                            default:
                                this.range(e).domain(t)
                        }
                        return this
                    }.apply(t, arguments), Tl(t)
            }

            function Cl(t) {
                if (0 <= t.y && t.y < 100) {
                    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                    return e.setFullYear(t.y), e
                }
                return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
            }

            function Nl(t) {
                if (0 <= t.y && t.y < 100) {
                    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                    return e.setUTCFullYear(t.y), e
                }
                return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
            }

            function Sl(t) {
                return {
                    y: t,
                    m: 0,
                    d: 1,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0
                }
            }
            var El, zl, Dl, Fl, Ll, Pl, Hl, Ul, Ol, Rl, ql, Yl, Bl, jl, Il, Xl, Vl, Wl, Zl, $l, Gl, Ql, Jl, Kl, tu, eu = {
                    "-": "",
                    _: " ",
                    0: "0"
                },
                nu = /^\s*\d+/,
                ru = /^%/,
                iu = /[\\^$*+?|[\]().{}]/g;

            function au(t, e, n) {
                var r = t < 0 ? "-" : "",
                    i = (r ? -t : t) + "",
                    a = i.length;
                return r + (a < n ? new Array(n - a + 1).join(e) + i : i)
            }

            function ou(t) {
                return t.replace(iu, "\\$&")
            }

            function cu(t) {
                return new RegExp("^(?:" + t.map(ou).join("|") + ")", "i")
            }

            function su(t) {
                for (var e = {}, n = -1, r = t.length; ++n < r;) e[t[n].toLowerCase()] = n;
                return e
            }

            function lu(t, e, n) {
                var r = nu.exec(e.slice(n, n + 1));
                return r ? (t.w = +r[0], n + r[0].length) : -1
            }

            function uu(t, e, n) {
                var r = nu.exec(e.slice(n, n + 1));
                return r ? (t.u = +r[0], n + r[0].length) : -1
            }

            function fu(t, e, n) {
                var r = nu.exec(e.slice(n, n + 2));
                return r ? (t.U = +r[0], n + r[0].length) : -1
            }

            function hu(t, e, n) {
                var r = nu.exec(e.slice(n, n + 2));
                return r ? (t.V = +r[0], n + r[0].length) : -1
            }

            function du(t, e, n) {
                var r = nu.exec(e.slice(n, n + 2));
                return r ? (t.W = +r[0], n + r[0].length) : -1
            }

            function _u(t, e, n) {
                var r = nu.exec(e.slice(n, n + 4));
                return r ? (t.y = +r[0], n + r[0].length) : -1
            }

            function pu(t, e, n) {
                var r = nu.exec(e.slice(n, n + 2));
                return r ? (t.y = +r[0] + (68 < +r[0] ? 1900 : 2e3), n + r[0].length) : -1
            }

            function bu(t, e, n) {
                var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
                return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1
            }

            function yu(t, e, n) {
                var r = nu.exec(e.slice(n, n + 2));
                return r ? (t.m = r[0] - 1, n + r[0].length) : -1
            }

            function gu(t, e, n) {
                var r = nu.exec(e.slice(n, n + 2));
                return r ? (t.d = +r[0], n + r[0].length) : -1
            }

            function mu(t, e, n) {
                var r = nu.exec(e.slice(n, n + 3));
                return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1
            }

            function vu(t, e, n) {
                var r = nu.exec(e.slice(n, n + 2));
                return r ? (t.H = +r[0], n + r[0].length) : -1
            }

            function xu(t, e, n) {
                var r = nu.exec(e.slice(n, n + 2));
                return r ? (t.M = +r[0], n + r[0].length) : -1
            }

            function wu(t, e, n) {
                var r = nu.exec(e.slice(n, n + 2));
                return r ? (t.S = +r[0], n + r[0].length) : -1
            }

            function Mu(t, e, n) {
                var r = nu.exec(e.slice(n, n + 3));
                return r ? (t.L = +r[0], n + r[0].length) : -1
            }

            function ku(t, e, n) {
                var r = nu.exec(e.slice(n, n + 6));
                return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1
            }

            function Tu(t, e, n) {
                var r = ru.exec(e.slice(n, n + 1));
                return r ? n + r[0].length : -1
            }

            function Au(t, e, n) {
                var r = nu.exec(e.slice(n));
                return r ? (t.Q = +r[0], n + r[0].length) : -1
            }

            function Cu(t, e, n) {
                var r = nu.exec(e.slice(n));
                return r ? (t.Q = 1e3 * +r[0], n + r[0].length) : -1
            }

            function Nu(t, e) {
                return au(t.getDate(), e, 2)
            }

            function Su(t, e) {
                return au(t.getHours(), e, 2)
            }

            function Eu(t, e) {
                return au(t.getHours() % 12 || 12, e, 2)
            }

            function zu(t, e) {
                return au(1 + _a.count(ma(t), t), e, 3)
            }

            function Du(t, e) {
                return au(t.getMilliseconds(), e, 3)
            }

            function Fu(t, e) {
                return Du(t, e) + "000"
            }

            function Lu(t, e) {
                return au(t.getMonth() + 1, e, 2)
            }

            function Pu(t, e) {
                return au(t.getMinutes(), e, 2)
            }

            function Hu(t, e) {
                return au(t.getSeconds(), e, 2)
            }

            function Uu(t) {
                var e = t.getDay();
                return 0 === e ? 7 : e
            }

            function Ou(t, e) {
                return au(ba.count(ma(t), t), e, 2)
            }

            function Ru(t, e) {
                var n = t.getDay();
                return t = 4 <= n || 0 === n ? ga(t) : ga.ceil(t), au(ga.count(ma(t), t) + (4 === ma(t).getDay()), e, 2)
            }

            function qu(t) {
                return t.getDay()
            }

            function Yu(t, e) {
                return au(ya.count(ma(t), t), e, 2)
            }

            function Bu(t, e) {
                return au(t.getFullYear() % 100, e, 2)
            }

            function ju(t, e) {
                return au(t.getFullYear() % 1e4, e, 4)
            }

            function Iu(t) {
                var e = t.getTimezoneOffset();
                return (0 < e ? "-" : (e *= -1, "+")) + au(e / 60 | 0, "0", 2) + au(e % 60, "0", 2)
            }

            function Xu(t, e) {
                return au(t.getUTCDate(), e, 2)
            }

            function Vu(t, e) {
                return au(t.getUTCHours(), e, 2)
            }

            function Wu(t, e) {
                return au(t.getUTCHours() % 12 || 12, e, 2)
            }

            function Zu(t, e) {
                return au(1 + va.count(Ta(t), t), e, 3)
            }

            function $u(t, e) {
                return au(t.getUTCMilliseconds(), e, 3)
            }

            function Gu(t, e) {
                return $u(t, e) + "000"
            }

            function Qu(t, e) {
                return au(t.getUTCMonth() + 1, e, 2)
            }

            function Ju(t, e) {
                return au(t.getUTCMinutes(), e, 2)
            }

            function Ku(t, e) {
                return au(t.getUTCSeconds(), e, 2)
            }

            function tf(t) {
                var e = t.getUTCDay();
                return 0 === e ? 7 : e
            }

            function ef(t, e) {
                return au(wa.count(Ta(t), t), e, 2)
            }

            function nf(t, e) {
                var n = t.getUTCDay();
                return t = 4 <= n || 0 === n ? ka(t) : ka.ceil(t), au(ka.count(Ta(t), t) + (4 === Ta(t).getUTCDay()), e, 2)
            }

            function rf(t) {
                return t.getUTCDay()
            }

            function af(t, e) {
                return au(Ma.count(Ta(t), t), e, 2)
            }

            function of(t, e) {
                return au(t.getUTCFullYear() % 100, e, 2)
            }

            function cf(t, e) {
                return au(t.getUTCFullYear() % 1e4, e, 4)
            }

            function sf() {
                return "+0000"
            }

            function lf() {
                return "%"
            }

            function uf(t) {
                return +t
            }

            function ff(t) {
                return Math.floor(+t / 1e3)
            }

            function hf(s, l) {
                return function(t) {
                    var e, n, r, i = [],
                        a = -1,
                        o = 0,
                        c = s.length;
                    for (t instanceof Date || (t = new Date(+t)); ++a < c;) 37 === s.charCodeAt(a) && (i.push(s.slice(o, a)), null != (n = eu[e = s.charAt(++a)]) ? e = s.charAt(++a) : n = "e" === e ? " " : "0", (r = l[e]) && (e = r(t, n)), i.push(e), o = a + 1);
                    return i.push(s.slice(o, a)), i.join("")
                }
            }

            function df(i, a) {
                return function(t) {
                    var e, n, r = Sl(1900);
                    if (_f(r, i, t += "", 0) != t.length) return null;
                    if ("Q" in r) return new Date(r.Q);
                    if ("p" in r && (r.H = r.H % 12 + 12 * r.p), "V" in r) {
                        if (r.V < 1 || 53 < r.V) return null;
                        "w" in r || (r.w = 1), "Z" in r ? (e = 4 < (n = (e = Nl(Sl(r.y))).getUTCDay()) || 0 === n ? Ma.ceil(e) : Ma(e), e = va.offset(e, 7 * (r.V - 1)), r.y = e.getUTCFullYear(), r.m = e.getUTCMonth(), r.d = e.getUTCDate() + (r.w + 6) % 7) : (e = 4 < (n = (e = a(Sl(r.y))).getDay()) || 0 === n ? ya.ceil(e) : ya(e), e = _a.offset(e, 7 * (r.V - 1)), r.y = e.getFullYear(), r.m = e.getMonth(), r.d = e.getDate() + (r.w + 6) % 7)
                    } else("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : "W" in r ? 1 : 0), n = "Z" in r ? Nl(Sl(r.y)).getUTCDay() : a(Sl(r.y)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + 7 * r.W - (n + 5) % 7 : r.w + 7 * r.U - (n + 6) % 7);
                    return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, Nl(r)) : a(r)
                }
            }

            function _f(t, e, n, r) {
                for (var i, a, o = 0, c = e.length, s = n.length; o < c;) {
                    if (s <= r) return -1;
                    if (37 === (i = e.charCodeAt(o++))) {
                        if (i = e.charAt(o++), !(a = tu[i in eu ? e.charAt(o++) : i]) || (r = a(t, n, r)) < 0) return -1
                    } else if (i != n.charCodeAt(r++)) return -1
                }
                return r
            }
            Ll = (Fl = {
                dateTime: "%x, %X",
                date: "%-m/%-d/%Y",
                time: "%-I:%M:%S %p",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            }).dateTime, Pl = Fl.date, Hl = Fl.time, Ul = Fl.periods, Ol = Fl.days, Rl = Fl.shortDays, ql = Fl.months, Yl = Fl.shortMonths, Bl = cu(Ul), jl = su(Ul), Il = cu(Ol), Xl = su(Ol), Vl = cu(Rl), Wl = su(Rl), Zl = cu(ql), $l = su(ql), Gl = cu(Yl), Ql = su(Yl), Kl = {
                a: function(t) {
                    return Rl[t.getUTCDay()]
                },
                A: function(t) {
                    return Ol[t.getUTCDay()]
                },
                b: function(t) {
                    return Yl[t.getUTCMonth()]
                },
                B: function(t) {
                    return ql[t.getUTCMonth()]
                },
                c: null,
                d: Xu,
                e: Xu,
                f: Gu,
                H: Vu,
                I: Wu,
                j: Zu,
                L: $u,
                m: Qu,
                M: Ju,
                p: function(t) {
                    return Ul[+(12 <= t.getUTCHours())]
                },
                Q: uf,
                s: ff,
                S: Ku,
                u: tf,
                U: ef,
                V: nf,
                w: rf,
                W: af,
                x: null,
                X: null,
                y: of,
                Y: cf,
                Z: sf,
                "%": lf
            }, tu = {
                a: function(t, e, n) {
                    var r = Vl.exec(e.slice(n));
                    return r ? (t.w = Wl[r[0].toLowerCase()], n + r[0].length) : -1
                },
                A: function(t, e, n) {
                    var r = Il.exec(e.slice(n));
                    return r ? (t.w = Xl[r[0].toLowerCase()], n + r[0].length) : -1
                },
                b: function(t, e, n) {
                    var r = Gl.exec(e.slice(n));
                    return r ? (t.m = Ql[r[0].toLowerCase()], n + r[0].length) : -1
                },
                B: function(t, e, n) {
                    var r = Zl.exec(e.slice(n));
                    return r ? (t.m = $l[r[0].toLowerCase()], n + r[0].length) : -1
                },
                c: function(t, e, n) {
                    return _f(t, Ll, e, n)
                },
                d: gu,
                e: gu,
                f: ku,
                H: vu,
                I: vu,
                j: mu,
                L: Mu,
                m: yu,
                M: xu,
                p: function(t, e, n) {
                    var r = Bl.exec(e.slice(n));
                    return r ? (t.p = jl[r[0].toLowerCase()], n + r[0].length) : -1
                },
                Q: Au,
                s: Cu,
                S: wu,
                u: uu,
                U: fu,
                V: hu,
                w: lu,
                W: du,
                x: function(t, e, n) {
                    return _f(t, Pl, e, n)
                },
                X: function(t, e, n) {
                    return _f(t, Hl, e, n)
                },
                y: pu,
                Y: _u,
                Z: bu,
                "%": Tu
            }, (Jl = {
                a: function(t) {
                    return Rl[t.getDay()]
                },
                A: function(t) {
                    return Ol[t.getDay()]
                },
                b: function(t) {
                    return Yl[t.getMonth()]
                },
                B: function(t) {
                    return ql[t.getMonth()]
                },
                c: null,
                d: Nu,
                e: Nu,
                f: Fu,
                H: Su,
                I: Eu,
                j: zu,
                L: Du,
                m: Lu,
                M: Pu,
                p: function(t) {
                    return Ul[+(12 <= t.getHours())]
                },
                Q: uf,
                s: ff,
                S: Hu,
                u: Uu,
                U: Ou,
                V: Ru,
                w: qu,
                W: Yu,
                x: null,
                X: null,
                y: Bu,
                Y: ju,
                Z: Iu,
                "%": lf
            }).x = hf(Pl, Jl), Jl.X = hf(Hl, Jl), Jl.c = hf(Ll, Jl), Kl.x = hf(Pl, Kl), Kl.X = hf(Hl, Kl), Kl.c = hf(Ll, Kl), El = {
                format: function(t) {
                    var e = hf(t += "", Jl);
                    return e.toString = function() {
                        return t
                    }, e
                },
                parse: function(t) {
                    var e = df(t += "", Cl);
                    return e.toString = function() {
                        return t
                    }, e
                },
                utcFormat: function(t) {
                    var e = hf(t += "", Kl);
                    return e.toString = function() {
                        return t
                    }, e
                },
                utcParse: function(t) {
                    var e = df(t, Nl);
                    return e.toString = function() {
                        return t
                    }, e
                }
            }, El.parse, zl = El.utcFormat, Dl = El.utcParse;
            var pf = "%Y-%m-%dT%H:%M:%S.%LZ";
            Date.prototype.toISOString || zl(pf);
            var bf, yf, gf, mf, vf, xf, wf, Mf, kf, Tf, Af, Cf, Nf; + new Date("2000-01-01T00:00:00.000Z") || Dl(pf);
            var Sf = {
                x_axis: {},
                line: {}
            };

            function Ef(t, e, n) {
                var r;
                Sf = {
                    x: {
                        size: 0
                    },
                    line: {
                        size: 0
                    }
                }, d.horserace.forEach(function(t) {
                    t.name.length > Sf.line.size && (Sf.line.text = t.name, Sf.line.size = t.name.length)
                }), Sf.line.el = Ys.append("text").text(Sf.line.text).style("font-size", bf(_.label_font_size) + "px"), Sf.line.width = Sf.line.el.node().getBoundingClientRect().width, Sf.line.el.remove(), d.horserace.column_names.stages.forEach(function(t) {
                    t.length > Sf.x.size && (Sf.x.text = t, Sf.x.size = t.length)
                }), Sf.x.el = Ys.append("text").text(Sf.x.text).style("font-size", bf(_.x_axis_label_size) + "px").attr("transform", "rotate(" + -_.x_axis_rotate + ")"), Sf.x.height = Sf.x.el.node().getBoundingClientRect().height, Sf.x.el.remove(), Nf = Nf || document.getElementById("viz-ui");
                var i, a = pl.getPrimaryWidth();
                mf = bf(_.start_circle_r), yf = bf(_.end_circle_r), gf = bf(_.end_circle_stroke), xf = bf(_.shade_width), vf = bf(_.line_width), wf = Math.max(2 * yf + gf, 2 * mf, vf, xf), i = _.zoom_enabled ? bf(bd ? _.margin_right_mobile : _.margin_right) : bd ? yf + bf(_.margin_right_mobile) : bf(_.margin_right) + Sf.line.width + (_.rank_outside_picture ? 15 : 0) + yf + gf, Mf = bf(.1);
                var o = wf / 2 + bf(_.margin_bottom),
                    c = wf / 2 + Sf.x.height + Mf,
                    s = Math.max(wf / 2, 5) + bf(_.margin_left) + ("ranks" == _.value_type ? 0 : (_.y_axis_format.suffix.length + _.y_axis_format.prefix.length) * (.5 * bf(_.y_axis_label_size))),
                    l = null != _.y_axis_max_rank && "" != _.y_axis_max_rank ? _.y_axis_max_rank : d.horserace.length,
                    u = bf(_.circle_space_between),
                    f = l * wf + (l - 1) * u;
                Flourish.fixed_height ? r = pl.getPrimaryHeight() : "flexible" == _.height_mode || "auto" == _.height_mode && f > pl.getDefaultPrimaryHeight() ? (r = c + o - wf + f, pl.setHeight(r)) : (pl.setHeight(null), r = pl.getPrimaryHeight()), Ys.attr("width", a).attr("height", r), Bs.attr("transform", "translate(" + s + "," + c + ")"), kf = Math.max(0, a - s - i), Tf = Math.max(0, r - c - o), Af = Al().range([0, kf]), zf(t), Cf = Al().range([Tf, 0]), Df(t);
                var h = _.zoom_enabled ? 0 : Math.max(mf, vf / 2, xf / 2) + bf(_.margin_left);
                W("#clip rect").attr("height", Tf + c + o).transition().duration(n).attr("transform", "translate(0,-" + c + ")").attr("width", Af(t) + h).attr("x", -h)
            }

            function zf(t) {
                var e = d.horserace.column_names.stages.length,
                    n = _.zoom_enabled ? Math.max(0, t - _.zoom_steps_to_show) : 0,
                    r = Math.min(e, _.zoom_steps_to_show),
                    i = [n, _.zoom_enabled ? Math.max(t + r, 2 * r) : e - 1];
                Af.domain(i)
            }

            function Df(t) {
                var e, n, r;
                if ("ranks" == _.value_type) e = [_.y_axis_max_rank || pd.max_rank, _.y_axis_min_rank || 1];
                else {
                    if (_.zoom_enabled && _.zoom_y_axis) {
                        var i = Math.floor(t),
                            a = Math.ceil(t),
                            o = pd.timeslices[i].min_score,
                            c = pd.timeslices[i].max_score;
                        n = o + (pd.timeslices[a].min_score - o) * (t - i);
                        var s = (r = c + (pd.timeslices[a].max_score - c) * (t - i)) - n,
                            l = _.zoom_y_padding / 100;
                        n -= s * l, r += s * l
                    } else r = _.zoom_y_axis ? (n = Un(d.horserace, function(t) {
                        return If != _.filter_all_label && If != t.filter ? null : Un(t.stages, function(t) {
                            return ih(t)
                        })
                    }), Hn(d.horserace, function(t) {
                        return If != _.filter_all_label && If != t.filter ? null : Hn(t.stages, function(t) {
                            return ih(t)
                        })
                    })) : (n = Un(d.horserace, function(t) {
                        return Un(t.stages, function(t) {
                            return ih(t)
                        })
                    }), Hn(d.horserace, function(t) {
                        return Hn(t.stages, function(t) {
                            return ih(t)
                        })
                    }));
                    "" !== _.y_axis_min && null !== _.y_axis_min && (n = _.y_axis_min), "" !== _.y_axis_max && null !== _.y_axis_max && (r = _.y_axis_max), e = _.higher_scores_win ? [n, r] : [r, n]
                }
                Cf.domain(e)
            }
            var Ff = Ui(_.y_axis_format);

            function Lf(t) {
                var n, e = d.horserace.column_names.stages.reduce(function(t, e, n) {
                        return e && t.push(n), t
                    }, []),
                    r = function(t) {
                        return Rc(zc, t)
                    }(t).tickValues(e).tickFormat(function(t) {
                        return d.horserace.column_names.stages[t]
                    }),
                    i = wf / 2,
                    a = -_.x_axis_rotate,
                    o = bf(_.x_axis_label_size),
                    c = 1.5 * o;
                "90" == _.x_axis_rotate ? c = o : "0" == _.x_axis_rotate && (c = 6 * o), W(".x.axis").attr("transform", "translate(0, -" + Mf + ")").call(r).selectAll(".tick").select("text").style("text-anchor", "0" == a ? "middle" : "start").style("font-size", o + "px").style("fill", _.x_axis_label_color).attr("data-tick-index", function(t) {
                    return t
                }).attr("dx", function() {
                    return "0" == _.x_axis_rotate ? 0 : "90" == _.x_axis_rotate ? i : .68 * i + 2
                }).attr("dy", function() {
                    return "0" == _.x_axis_rotate ? -i : "90" == _.x_axis_rotate ? "0.25em" : .68 * -i - 2
                }).attr("y", 0).attr("transform", "rotate(" + a + ")").attr("opacity", function() {
                    var t = this.getBoundingClientRect().left,
                        e = n && t < n;
                    return n = e ? n : t + c, e ? 0 : 1
                })
            }

            function Pf(t, e, n) {
                var r = oh.getFormatterFunction(),
                    i = Ff(r),
                    a = function(t) {
                        return Rc(Lc, t)
                    }(t).tickSize(-e).tickFormat(function(t) {
                        return "ranks" == _.value_type ? t % 1 == 0 ? t : "" : i(t)
                    }).tickPadding(5);
                "ranks" == _.value_type && a.ticks(Math.min(d.horserace.length, _.y_axis_max_rank || 1 / 0)), W(".y.axis").transition().duration(n).call(a), $(".y.axis text").attr("dx", -mf).style("font-size", bf(_.y_axis_label_size) + "px").style("fill", _.y_axis_label_colors), W(".y.axis path").style("opacity", 0), W(".y.axis .y-axis-edge").attr("stroke", "red").attr("x1", 0).attr("x2", 0).attr("y1", 0).attr("y2", Tf), $(".y.axis line").style("stroke", _.y_axis_stroke_color).style("stroke-dasharray", _.y_axis_stroke_dash ? _.y_axis_stroke_dash + "," + _.y_axis_stroke_dash : null)
            }

            function Hf(t, e, n, r) {
                Lf(t), Pf(e, n, r)
            }
            var Uf = 0;

            function Of() {
                var n = {},
                    r = Ud();
                for (var t in $(".labels-group").each(function(t) {
                        var e = t.ranks[r];
                        null != e && (e in n ? n[e].push(this) : n[e] = [this])
                    }), n) {
                    var e = n[t].sort(function(t, e) {
                        return An(t.__data__.index, e.__data__.index)
                    });
                    if (1 < e.length)
                        for (var i = 0; i < e.length; i++) {
                            var a = .5 * (yf + gf) * (i - .5);
                            W(e[i]).select(".end-circle-container").attr("transform", "translate(" + a + ",0)"), W(e[i]).classed("tied", !0), W(e[i]).selectAll(".name-bg, .name-fg").attr("x", function() {
                                return !bd || _.zoom_enabled ? e.length * (.5 * (yf + gf)) + yf / 2 : -(yf + gf)
                            })
                        }
                }
            }

            function Rf() {
                _.target_position = 0, Uf = 0, _.target_position = d.horserace.column_names.stages.length, th()
            }
            var qf, Yf, Bf, jf, If, Xf, Vf, Wf, Zf, $f, Gf, Qf, Jf = null;

            function Kf(t) {
                var e, n = Ud();
                if (!qf) return qf = t, Jf = requestAnimationFrame(Kf), void(Yf = Uf < n);
                (e = Yf ? n < (Uf += (t - qf) / _.stage_duration) : (Uf -= (t - qf) / _.stage_duration) < n) && (Uf = n), _.zoom_enabled && (zf(Uf), Df(Uf));
                var r = Uf - Math.floor(Uf),
                    i = e ? null : Yf ? "ahead" : "behind",
                    a = _.zoom_enabled ? 0 : Math.max(mf, vf / 2, xf / 2) + bf(_.margin_left);
                if (W("#clip rect").attr("width", Af(Uf) + a).attr("x", -a), vd.interrupt().attr("transform", Ed).selectAll(".rank-number").text(function(t) {
                        return _.rank_outside_picture ? "" : Nd(t, i, r)
                    }), vd.selectAll(".name-rank").text(function(t) {
                        return _.rank_outside_picture ? Nd(t, i, r) : ""
                    }).each(function() {
                        W(this.parentNode).attr("x", function() {
                            return !bd || _.zoom_enabled ? yf + gf / 2 + 4 : -yf - gf / 2 - 4
                        })
                    }), _.zoom_enabled) {
                    zd(), Ad(0), Cd(0);
                    var o = Math.min(Af(d.horserace.column_names.stages.length - 1), kf);
                    Hf(Af, Cf, o, 0)
                }
                e ? (Jf = null, Of()) : (Jf = requestAnimationFrame(Kf), qf = t)
            }

            function th() {
                qf = null, Jf && cancelAnimationFrame(Jf), Jf = requestAnimationFrame(Kf)
            }

            function eh() {
                (Xf = function() {
                    if (void 0 === d.horserace.column_names.filter) return null;
                    var t = sa(d.horserace, function(t) {
                            return t.filter
                        }),
                        e = [];
                    t.each(function(t) {
                        e.push(t)
                    }), 1 < e.length && _.filter_include_all && e.push(_.filter_all_label);
                    return e
                }()) ? (nh(), jf.options(Xf).value(If).update()) : (nh(), jf.options([]).update())
            }

            function nh() {
                If = _.filter_value ? _.filter_value : _.filter_include_all ? _.filter_all_label : Xf[0]
            }

            function rh() {
                Wf.options(_.show_buttons ? [_.label_scores, _.label_ranks] : []).value(_.value_type).update(), Zf.text(_.label_replay), W("#replay-container").style("display", _.show_replay ? null : "none"), eh(), $f.update(), Gf.update(), Qf.update(), Ws.style("display", _.show_buttons || _.show_replay || Xf ? null : "none")
            }
            var ih, ah, oh = function(t) {
                for (var e in na) void 0 === t[e] && (t[e] = na[e]);
                return {
                    getParser: function() {
                        return function(e) {
                            var n = new RegExp("[^-0-9eE" + e + "]", "g");
                            return function(t) {
                                return "number" == typeof t ? t : "" === t || void 0 === t ? NaN : parseFloat(t.replace(n, "").replace(e, "."))
                            }
                        }(t.input_decimal_separator)
                    },
                    getFormatterFunction: function() {
                        return function(t) {
                            var e = 1 < t.length,
                                n = e ? t.charAt(1) : t.charAt(0),
                                r = e ? t.charAt(0) : "",
                                i = Ji(function(t, e) {
                                    return {
                                        decimal: t,
                                        thousands: e,
                                        grouping: [3],
                                        currency: ["", ""]
                                    }
                                }(n, r)).format;
                            return i.decimal = n, i.thousands = r, i
                        }(t.output_separators)
                    }
                }
            }(_.localization);

            function ch() {
                ih = oh.getParser();
                var r, o = [];
                ah = 0, d.horserace.forEach(function(t, e) {
                    t.unfiltered_index = e
                }), r = If === _.filter_all_label ? d.horserace : d.horserace.filter(function(t) {
                    return t.filter === If
                });
                d.horserace.column_names.stages.forEach(function(t, i) {
                    var a = [];
                    r.forEach(function(t, e) {
                        if (void 0 !== t.stages[i]) {
                            var n = t.stages[i],
                                r = "" == n || isNaN(ih(n)) ? null : ih(n);
                            t.index = e, a.push({
                                name: t.name,
                                index: e,
                                score: r
                            })
                        }
                    }), a.sort(function(t, e) {
                        return _.higher_scores_win ? function(t, e) {
                            return e < t ? -1 : t < e ? 1 : t <= e ? 0 : NaN
                        }(t.score, e.score) : An(t.score, e.score)
                    }), ("dense" === _.ties_mode ? function(t) {
                        var e = void 0,
                            n = 0;
                        t.forEach(function(t) {
                            null == t.score ? t.rank = null : t.score == e ? t.rank = n : t.rank = ++n, e = t.score, ah = Math.max(ah, t.rank)
                        })
                    } : function(t) {
                        var e = void 0,
                            n = 0,
                            r = 0;
                        t.forEach(function(t) {
                            null == t.score ? t.rank = null : t.score == e ? (t.rank = n, r++) : (t.rank = n + r + 1, n = t.rank, r = 0), e = t.score, ah = Math.max(ah, t.rank)
                        })
                    })(a);
                    var e = {};
                    a.forEach(function(t) {
                        e[t.index] = t
                    }), o.push(e);
                    var n = function(t, e) {
                        var n, r, i, a = t.length,
                            o = -1;
                        if (null == e) {
                            for (; ++o < a;)
                                if (null != (n = t[o]) && n <= n)
                                    for (r = i = n; ++o < a;) null != (n = t[o]) && (n < r && (r = n), i < n && (i = n))
                        } else
                            for (; ++o < a;)
                                if (null != (n = e(t[o], o, t)) && n <= n)
                                    for (r = i = n; ++o < a;) null != (n = e(t[o], o, t)) && (n < r && (r = n), i < n && (i = n)); return [r, i]
                    }(a.map(function(t) {
                        return t.score
                    }));
                    o[i].min_score = Math.min(1 / 0, n[0]), o[i].max_score = Math.max(-1 / 0, n[1])
                });
                var t = r.map(function(n, r) {
                    var i = null;
                    return n.ranks = n.stages.map(function(t, e) {
                        return o[e][r].rank
                    }), n.line = n.stages.map(function(t, e) {
                        return {
                            i: e,
                            value: "ranks" == _.value_type ? o[e][r].rank : o[e][r].score
                        }
                    }), n.missing_line = n.line.map(function(t, e) {
                        return null !== t.value || 0 === e ? null !== t.value && i ? (i = null, t) : {
                            i: t.i,
                            value: null
                        } : i ? void 0 : (i = !0, {
                            i: t.i - 1,
                            value: n.line[e - 1].value
                        })
                    }).filter(function(t) {
                        return void 0 !== t
                    }), n.start_circle = n.line.filter(function(t) {
                        return null != t.value
                    })[0], n
                }).filter(function(t) {
                    return t.start_circle
                });
                return t.max_rank = ah, t.timeslices = o, d.horserace.processed ? t.new_data = !1 : (t.new_data = !0, d.horserace.processed = !0), t
            }
            var sh = Object.freeze({
                scale_type: "categorical",
                categorical_type: "palette",
                categorical_palette: ["#1D6996", "#EDAD08", "#73AF48", "#94346E", "#38A6A5", "#E17C05", "#5F4690", "#0F8554", "#6F4070", "#CC503E", "#994E95", "#666666"],
                categorical_extend: !0,
                categorical_seed_color: "#af5f68",
                categorical_rotation_angle: 222.49,
                categorical_color_space: "hcl",
                categorical_custom_palette: "",
                sequential_palette: "Blues",
                sequential_custom_min: "#FFFFFF",
                sequential_custom_max: "#000000",
                sequential_color_space: "rgb",
                sequential_reverse: !1,
                diverging_palette: "RdBu",
                diverging_custom_min: "#67001f",
                diverging_custom_mid: "#f7f7f7",
                diverging_custom_max: "#053061",
                diverging_color_space: "rgb",
                diverging_reverse: !1
            });

            function lh(t) {
                return "string" != typeof t && (t = "" + t), t.toLowerCase().replace(/\s+/g, "")
            }
            var uh = 360 / ((1 + Math.sqrt(5)) / 2),
                fh = "#FF0000";

            function hh(l, u, f) {
                return function(t, e) {
                    Array.isArray(t) || (t = t ? [t] : [fh]), e = void 0 !== e ? e : uh;
                    var n = t.map(function(t) {
                        return l(t)
                    }).filter(function(t) {
                        return !isNaN(t[u]) && !isNaN(t[f])
                    });
                    n.length || (n = [l(fh)]);
                    for (var r, i = n.length, a = n.reduce(function(t, e) {
                            return t + e[u]
                        }, 0) / i, o = n.reduce(function(t, e) {
                            return t + e[f]
                        }, 0) / i, c = i; r = n[--c].h, isNaN(r) && 0 < c;);
                    var s = 0;
                    return function() {
                        var t = ++s * e;
                        return Gt(l((r + t) % 360, a, o)).hex()
                    }
                }
            }
            var dh = {
                hcl: hh(Ae, "c", "l"),
                hsl: hh(ce, "s", "l")
            };

            function _h(t, e) {
                return t < e ? -1 : e < t ? 1 : e <= t ? 0 : NaN
            }
            1 === (bh = _h).length && (ph = bh, bh = function(t, e) {
                return _h(ph(t), e)
            });
            var ph, bh, yh = Math.sqrt(50),
                gh = Math.sqrt(10),
                mh = Math.sqrt(2);

            function vh(t, e, n) {
                var r = (e - t) / Math.max(0, n),
                    i = Math.floor(Math.log(r) / Math.LN10),
                    a = r / Math.pow(10, i);
                return 0 <= i ? (yh <= a ? 10 : gh <= a ? 5 : mh <= a ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (yh <= a ? 10 : gh <= a ? 5 : mh <= a ? 2 : 1)
            }

            function xh(t) {
                return t
            }

            function wh(t, e, n, r) {
                var i, a = function(t, e, n) {
                    var r = Math.abs(e - t) / Math.max(0, n),
                        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
                        a = r / i;
                    return yh <= a ? i *= 10 : gh <= a ? i *= 5 : mh <= a && (i *= 2), e < t ? -i : i
                }(t, e, n);
                switch ((r = Bi(null == r ? ",f" : r)).type) {
                    case "s":
                        var o = Math.max(Math.abs(t), Math.abs(e));
                        return null != r.precision || isNaN(i = ta(a, o)) || (r.precision = i), $i(r, o);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != r.precision || isNaN(i = ea(a, Math.max(Math.abs(t), Math.abs(e)))) || (r.precision = i - ("e" === r.type));
                        break;
                    case "f":
                    case "%":
                        null != r.precision || isNaN(i = Ki(a)) || (r.precision = i - 2 * ("%" === r.type))
                }
                return Zi(r)
            }

            function Mh(c) {
                var s = c.domain;
                return c.ticks = function(t) {
                    var e = s();
                    return function(t, e, n) {
                        var r, i, a, o, c = -1;
                        if (n = +n, (t = +t) === (e = +e) && 0 < n) return [t];
                        if ((r = e < t) && (i = t, t = e, e = i), 0 === (o = vh(t, e, n)) || !isFinite(o)) return [];
                        if (0 < o)
                            for (t = Math.ceil(t / o), e = Math.floor(e / o), a = new Array(i = Math.ceil(e - t + 1)); ++c < i;) a[c] = (t + c) * o;
                        else
                            for (t = Math.floor(t * o), e = Math.ceil(e * o), a = new Array(i = Math.ceil(t - e + 1)); ++c < i;) a[c] = (t - c) / o;
                        return r && a.reverse(), a
                    }(e[0], e[e.length - 1], null == t ? 10 : t)
                }, c.tickFormat = function(t, e) {
                    var n = s();
                    return wh(n[0], n[n.length - 1], null == t ? 10 : t, e)
                }, c.nice = function(t) {
                    null == t && (t = 10);
                    var e, n = s(),
                        r = 0,
                        i = n.length - 1,
                        a = n[r],
                        o = n[i];
                    return o < a && (e = a, a = o, o = e, e = r, r = i, i = e), 0 < (e = vh(a, o, t)) ? e = vh(a = Math.floor(a / e) * e, o = Math.ceil(o / e) * e, t) : e < 0 && (e = vh(a = Math.ceil(a * e) / e, o = Math.floor(o * e) / e, t)), 0 < e ? (n[r] = Math.floor(a / e) * e, n[i] = Math.ceil(o / e) * e, s(n)) : e < 0 && (n[r] = Math.ceil(a * e) / e, n[i] = Math.floor(o * e) / e, s(n)), c
                }, c
            }

            function kh() {
                var t = Mh(function() {
                    var e, n, r, i, a, o = 0,
                        c = 1,
                        s = xh,
                        l = !1;

                    function u(t) {
                        return isNaN(t = +t) ? a : s(0 === r ? .5 : (t = (i(t) - e) * r, l ? Math.max(0, Math.min(1, t)) : t))
                    }
                    return u.domain = function(t) {
                            return arguments.length ? (e = i(o = +t[0]), n = i(c = +t[1]), r = e === n ? 0 : 1 / (n - e), u) : [o, c]
                        }, u.clamp = function(t) {
                            return arguments.length ? (l = !!t, u) : l
                        }, u.interpolator = function(t) {
                            return arguments.length ? (s = t, u) : s
                        }, u.unknown = function(t) {
                            return arguments.length ? (a = t, u) : a
                        },
                        function(t) {
                            return e = (i = t)(o), n = t(c), r = e === n ? 0 : 1 / (n - e), u
                        }
                }()(xh));
                return t.copy = function() {
                        return function(t, e) {
                            return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())
                        }(t, kh())
                    },
                    function(t, e) {
                        switch (arguments.length) {
                            case 0:
                                break;
                            case 1:
                                this.interpolator(t);
                                break;
                            default:
                                this.interpolator(e).domain(t)
                        }
                        return this
                    }.apply(t, arguments)
            }

            function Th(t) {
                for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e;) n[r] = "#" + t.slice(6 * r, 6 * ++r);
                return n
            }

            function Ah(t) {
                return Xe(t[t.length - 1])
            }
            var Ch = Ah(new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Th)),
                Nh = Ah(new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Th)),
                Sh = Ah(new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Th)),
                Eh = Ah(new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Th)),
                zh = Ah(new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Th)),
                Dh = Ah(new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Th)),
                Fh = Ah(new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Th)),
                Lh = Ah(new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Th)),
                Ph = Ah(new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Th)),
                Hh = Ah(new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Th)),
                Uh = Ah(new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Th)),
                Oh = Ah(new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Th)),
                Rh = Ah(new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Th)),
                qh = Ah(new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Th)),
                Yh = Ah(new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Th)),
                Bh = Ah(new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Th)),
                jh = Ah(new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Th)),
                Ih = Ah(new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Th)),
                Xh = Ah(new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Th)),
                Vh = Ah(new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Th)),
                Wh = Ah(new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Th)),
                Zh = Ah(new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Th)),
                $h = Ah(new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Th)),
                Gh = Ah(new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Th)),
                Qh = Ah(new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Th)),
                Jh = Ah(new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Th)),
                Kh = Ah(new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Th)),
                td = pn(He(300, .5, 0), He(-240, .5, 1)),
                ed = pn(He(-100, .75, .35), He(80, 1.5, .8)),
                nd = pn(He(260, .75, .35), He(80, 1.5, .8));
            He();

            function rd(e) {
                var n = e.length;
                return function(t) {
                    return e[Math.max(0, Math.min(n - 1, Math.floor(t * n)))]
                }
            }
            var id = rd(Th("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
                ad = rd(Th("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
                od = rd(Th("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
                cd = rd(Th("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
                sd = Object.freeze(["#efeca4", "#e9e28f", "#dccf64", "#e3b23c", "#e49547", "#e37746", "#dc5b36", "#cb4144", "#bb2244", "#972545", "#6a2c4f"]),
                ld = Object.freeze({
                    Blues: Zh,
                    BuGn: Hh,
                    BuPu: Uh,
                    Carrots: Xe(sd),
                    Cool: nd,
                    CubehelixDefault: td,
                    GnBu: Oh,
                    Greens: $h,
                    Greys: Gh,
                    Inferno: od,
                    Magma: ad,
                    Oranges: Kh,
                    OrRd: Rh,
                    Plasma: cd,
                    PuBu: Yh,
                    PuBuGn: qh,
                    PuRd: Bh,
                    Purples: Qh,
                    RdPu: jh,
                    Reds: Jh,
                    Viridis: id,
                    Warm: ed,
                    YlGn: Xh,
                    YlGnBu: Ih,
                    YlOrBr: Vh,
                    YlOrRd: Wh
                }),
                ud = {
                    hcl: dn,
                    hsl: un,
                    lab: fn,
                    rgb: je
                };

            function fd(t, e) {
                return kh(ld[t.sequential_palette] || function(t) {
                    var e = t.sequential_color_space,
                        n = t.sequential_custom_min,
                        r = t.sequential_custom_max;
                    return ud[e](n, r)
                }(t)).domain(t.sequential_reverse ? e.reverse() : e)
            }
            var hd = Object.freeze({
                    BrBG: Ch,
                    PiYG: Sh,
                    PRGn: Nh,
                    PuOr: Eh,
                    RdBu: zh,
                    RdGy: Dh,
                    RdYlBu: Fh,
                    RdYlGn: Lh,
                    Spectral: Ph
                }),
                dd = {
                    hcl: dn,
                    hsl: un,
                    lab: fn,
                    rgb: je
                };

            function _d(t) {
                var e = t.diverging_color_space,
                    n = t.diverging_custom_min,
                    r = t.diverging_custom_mid,
                    i = t.diverging_custom_max;
                return function(t, e) {
                    for (var n = 0, r = e.length - 1, i = e[0], a = new Array(r < 0 ? 0 : r); n < r;) a[n] = t(i, i = e[++n]);
                    return function(t) {
                        var e = Math.max(0, Math.min(r - 1, Math.floor(t *= r)));
                        return a[e](t - e)
                    }
                }(dd[e], [n, r, i])
            }
            var pd, bd, yd = function(e) {
                var n = null;
                for (var t in sh) void 0 === e[t] && (e[t] = sh[t]);
                var r = lh,
                    i = null;
                return {
                    getColor: function(t) {
                        return n && n(t, r) || i
                    },
                    updateColorScale: function(t) {
                        return t = Array.isArray(t) ? t.slice() : [0, 1], n = "categorical" === e.scale_type ? function(t, e, i) {
                            var a = {},
                                n = sa(e.map(i)).values(),
                                r = "palette" === t.categorical_type ? t.categorical_palette : [t.categorical_seed_color],
                                o = r.length;
                            if (t.categorical_extend || "generated" === t.categorical_type) {
                                var c = "palette" === t.categorical_type ? sh.rotation_angle : t.categorical_rotation_angle,
                                    s = "generated" === t.categorical_type ? t.categorical_color_space : "hcl",
                                    l = dh[s](r, c);
                                n.forEach(function(t, e) {
                                    a[t] = e < o ? r[e] : l()
                                })
                            } else n.forEach(function(t, e) {
                                a[t] = r[e % o]
                            });
                            return t.categorical_custom_palette.split("\n").filter(function(t) {
                                    return t
                                }).forEach(function(t) {
                                    var e = t.lastIndexOf(":");
                                    if (-1 !== e) {
                                        var n = i(t.slice(0, e).trim()),
                                            r = t.slice(e + 1).trim();
                                        n && r && (a[n] = r)
                                    }
                                }),
                                function(t) {
                                    return a[i(t)]
                                }
                        }(e, t, r) : "sequential" === e.scale_type ? fd(e, t) : function(t, e) {
                            return kh(hd[t.diverging_palette] || _d(t)).domain(t.diverging_reverse ? e.reverse() : e)
                        }(e, t), this
                    },
                    fallback: function(t) {
                        return void 0 === t ? i : (i = "default" === t ? null : t, this)
                    },
                    stringNormalizer: function(t) {
                        return void 0 === t ? r : (r = "default" === t ? lh : "function" == typeof t ? t : function(t) {
                            return t
                        }, this)
                    }
                }
            }(_.color);
            var gd, md, vd, xd, wd = null,
                Md = [],
                kd = dr().x(function(t) {
                    return Af(t.i)
                }).y(function(t) {
                    return Cf(t.value)
                }).defined(function(t) {
                    return null != t.value
                }),
                Td = Ui(_.label_format);

            function Ad(t) {
                var e = js.selectAll(".line-group").data(pd, function(t) {
                        return t.name
                    }),
                    n = e.enter().append("g").attr("class", "horse line-group").on("mouseenter", Ld).on("mouseleave", Pd).on("click", Hd).attr("clip-path", "url(#clip)").attr("stroke-linejoin", "round").attr("stroke-linecap", "round").attr("fill", "none");
                n.append("path").attr("class", "missing"), n.append("path").attr("class", "line"), n.append("path").attr("class", "shade"), (xd = e.merge(n)).attr("opacity", Fd).attr("stroke", function(t) {
                    return yd.getColor(t.name)
                }), xd.select(".line").transition().duration(t).attr("d", function(t) {
                    return kd(t.line)
                }).attr("opacity", _.line_opacity).attr("stroke-width", vf), xd.select(".shade").transition().duration(t).attr("d", function(t) {
                    return kd(t.line)
                }).attr("display", _.shade ? "block" : "none").attr("opacity", _.shade_opacity).attr("stroke-width", xf), xd.select(".missing").transition().duration(t).attr("d", function(t) {
                    return kd(t.missing_line)
                }).attr("opacity", _.missing ? _.missing_opacity : 0).attr("stroke-dasharray", _.missing_stroke_dash + "," + _.missing_stroke_dash).attr("stroke-width", bd ? Math.max(Math.round(_.missing_width / 2), 2) : _.missing_width), e.exit().remove()
            }

            function Cd(t) {
                var e = Xs.selectAll(".start-circle").data(pd, function(t) {
                        return t.name
                    }),
                    n = e.enter().append("circle").attr("class", "horse start-circle").attr("cy", function(t) {
                        return Cf(t.start_circle.value)
                    }).attr("cx", function(t) {
                        return Af(t.start_circle.i)
                    }).attr("clip-path", "url(#clip)");
                e.merge(n).attr("opacity", Fd).transition().duration(t).attr("cy", function(t) {
                    return Cf(t.start_circle.value)
                }).attr("cx", function(t) {
                    return Af(t.start_circle.i)
                }).attr("r", mf).attr("fill", function(t) {
                    return yd.getColor(t.name)
                }), e.exit().remove()
            }

            function Nd(t, e, n) {
                var r, i, a = t.line[Math.floor(Uf)],
                    o = null,
                    c = "scores" === _.value_type && _.animate_scores;
                "ahead" == e ? c ? o = t.line[Math.floor(Uf + 1)] : a = t.line[Math.floor(Uf + 1)] : "behind" == e && (c && (o = t.line[Math.floor(Uf)]), a = t.line[Math.floor(Uf + 1)]), o && (r = (o.value - a.value) * n, i = a.value + r);
                var s = (o ? i : a.value) || t.line[Sd(t)].value;
                return "" === s ? "" : ("ranks" === _.value_type ? s : md(s)) + " "
            }

            function Sd(t) {
                for (var e = 0, n = Math.floor(Uf); 0 < n; n--)
                    if (null != t.line[n].value) {
                        e = n;
                        break
                    }
                return e
            }

            function Ed(t) {
                var e = Uf < t.start_circle.i ? 0 : 1,
                    n = Math.floor(Uf),
                    r = t.line[n].value,
                    i = t.line[n + 1] ? t.line[n + 1].value : null,
                    a = Uf - Math.floor(Uf),
                    o = Math.floor(Uf),
                    c = r;
                if (null == r || n < t.stages.length && null == i && 0 < a) {
                    var s = Sd(t);
                    o = s, c = t.line[s].value
                } else o = Uf, c = r + (i - r) * a;
                return "translate(" + Af(o) + "," + Cf(c) + ") scale(" + e + ")"
            }

            function zd() {
                var n = _.zoom_enabled ? Af(Math.max(Uf - _.zoom_steps_to_show + 1, 1)) : Af(1),
                    r = wf / 2,
                    t = Vs.selectAll(".check").data(d.horserace.column_names.stages),
                    e = t.enter().append("g").attr("class", "check");
                e.append("rect").attr("class", "check-rect"), e.append("line"), e.append("circle");
                var i = t.merge(e);
                i.on("mouseenter", function(t, e) {
                    wd = "check-" + e, W(this).select("line").attr("opacity", "1"), W(this).select("circle").attr("opacity", "1"), _.x_axis_show_hidden && W(".x.axis").select("text[data-tick-index='" + e + "']").raise().transition().style("opacity", .75)
                }).on("mouseleave", function(t, e) {
                    wd = null, W(this).select("line").attr("opacity", "0"), W(this).select("circle").attr("opacity", "0"), _.x_axis_show_hidden && W(".x.axis").select("text[data-tick-index='" + e + "']").transition().style("opacity", null)
                }).on("click", function(t, e) {
                    _.target_position = e + 1, Rd()
                }), i.attr("transform", function(t, e) {
                    return "translate(" + (Af(e) - n / 2) + ", -" + r + ")"
                }), i.select("rect").attr("x", 0).attr("y", -100).attr("height", Tf + r + 100).attr("fill", "none").style("pointer-events", "all").attr("width", n), i.select("line").attr("x1", n / 2).attr("x2", n / 2).attr("y1", r).attr("y2", Tf + r).attr("stroke", _.y_axis_stroke_color).attr("opacity", function(t, e) {
                    return "check-" + e === wd ? 1 : 0
                }).style("pointer-events", "none"), i.select("circle").attr("r", 3).attr("cx", n / 2).attr("cy", r).attr("fill", _.y_axis_stroke_color).attr("opacity", function(t, e) {
                    return "check-" + e === wd ? 1 : 0
                }).style("pointer-events", "none"), t.exit().remove()
            }

            function Dd(t) {
                Ys.style("fill", "currentColor"), Ad(t), Cd(t),
                    function(t) {
                        var e = Is.selectAll(".labels-group").data(pd, function(t) {
                                return t.name
                            }),
                            n = e.enter().append("g").attr("class", "horse labels-group").on("mouseenter", Ld).on("mouseleave", Pd).on("click", Hd).attr("transform", Ed),
                            r = !bd || _.zoom_enabled,
                            i = n.append("g").attr("class", "end-circle-container");
                        if (i.append("circle").attr("class", "circle bg"), i.append("circle").attr("class", "end circle"), i.append("image").attr("clip-path", "url(#circleClip)").attr("preserveAspectRatio", "xMidYMid slice"), i.append("text").attr("class", "rank-number").attr("alignment-baseline", "central").attr("fill", "white").attr("dominant-baseline", "central").attr("text-anchor", "middle"), n.append("g").attr("class", "name"), n.select(".name").append("text").attr("class", "name-bg").attr("alignment-baseline", "central").attr("dominant-baseline", "central").attr("stroke-width", "0.25em"), n.select(".name").append("text").attr("class", "name-fg").attr("alignment-baseline", "central").attr("dominant-baseline", "central"), r && n.selectAll(".name-fg, .name-bg").append("tspan").attr("class", "name-label").attr("font-weight", "bold"), n.selectAll(".name-fg, .name-bg").append("tspan").attr("class", "name-rank"), r || n.selectAll(".name-fg, .name-bg").append("tspan").attr("class", "name-label").attr("font-weight", "bold"), (vd = e.merge(n)).attr("fill", function(t) {
                                return "auto" === _.label_color_mode ? yd.getColor(t.name) : _.label_color
                            }).classed("tied", !1).each(function(t) {
                                var e = !1;
                                0 < Md.length && -1 < Md.indexOf(String(t.unfiltered_index)) && (e = !0), 0 == Md.length && null != _.mouseover_horse && t.unfiltered_index == _.mouseover_horse && (e = !0), e && this.parentNode.appendChild(this)
                            }).transition().duration(t).attr("transform", Ed), vd.select(".end-circle-container").attr("transform", null), vd.select(".end.circle").attr("r", yf).attr("fill", function(t) {
                                return yd.getColor(t.name)
                            }).attr("opacity", Fd).attr("stroke-width", gf).attr("stroke", function(t) {
                                return _.end_circle_stroke_bg && _.layout.background_color_enabled ? _.layout.background_color : yd.getColor(t.name)
                            }), vd.select(".bg.circle").attr("r", yf).attr("fill", _.layout.background_color_enabled ? _.layout.background_color : "#ffffff"), vd.select(".name-bg").attr("stroke", _.layout.background_color_enabled ? _.layout.background_color : "#ffffff"), _.horse_images) {
                            var a = 2 * yf - gf;
                            vd.select("image").attr("xlink:href", function(t) {
                                if (t.pic && t.pic.match(/^https:\/\//)) return t.pic
                            }).style("display", "inherit").attr("opacity", Fd).attr("height", a).attr("width", a).attr("x", -a / 2).attr("y", -a / 2), Bs.select("#circleClip circle").attr("r", yf - gf / 2)
                        } else vd.select("image").style("display", "none");
                        var o = bf(_.rank_font_size),
                            c = bf(_.label_font_size);
                        vd.select(".rank-number").attr("font-size", o).text(function(t) {
                            return _.rank_outside_picture ? "" : Nd(t)
                        }), vd.select(".name-bg .name-label").text(function(t) {
                            return t.name + " "
                        }), vd.select(".name-fg .name-label").text(function(t) {
                            return t.name + " "
                        }), vd.select(".name-bg .name-rank").attr("font-size", o).text(function(t) {
                            return _.rank_outside_picture ? Nd(t) : ""
                        }), vd.select(".name-fg .name-rank").attr("font-size", o).text(function(t) {
                            return _.rank_outside_picture ? Nd(t) : ""
                        }), vd.selectAll(".name-fg, .name-bg").attr("font-size", c + "px").attr("text-anchor", !bd || _.zoom_enabled ? null : "end").attr("x", function() {
                            return !bd || _.zoom_enabled ? yf + gf / 2 + 4 : -yf - gf / 2 - 4
                        }).attr("y", 0), vd.select(".name-fg").attr("opacity", Fd), vd.select(".name-bg").attr("opacity", Fd), e.exit().remove()
                    }(t), zd()
            }

            function Fd(t) {
                return 0 < Md.length ? -1 < Md.indexOf(String(t.unfiltered_index)) ? 1 : .1 : null != _.mouseover_horse ? t.unfiltered_index == _.mouseover_horse ? 1 : .1 : _.hide_labels && (W(this).classed("name-bg") || W(this).classed("name-fg")) ? t.unfiltered_index == _.mouseover_horse ? 1 : 0 : 1
            }

            function Ld(t, n) {
                t.unfiltered_index !== _.mouseover_horse && (_.mouseover_horse = t.unfiltered_index, 0 == Md.length && (vd.select(".end.circle").attr("opacity", Fd), vd.select("image").attr("opacity", Fd), vd.select(".name-fg").attr("opacity", Fd), vd.select(".name-bg").attr("opacity", Fd), vd.each(function(t, e) {
                    n === e && this.parentNode.appendChild(this)
                }), xd.attr("opacity", Fd), $(".start-circle").attr("opacity", Fd)))
            }

            function Pd() {
                if (_.mouseover_horse = null, 0 == Md.length) {
                    vd.select(".end.circle").attr("opacity", Fd), vd.select("image").attr("opacity", Fd), vd.select(".name-fg").attr("opacity", Fd), vd.select(".name-bg").attr("opacity", Fd), xd.attr("opacity", Fd);
                    var e = [];
                    vd.each(function(t) {
                        W(this).classed("tied") && e.push([t.index, this])
                    }), e.sort(function(t, e) {
                        return An(t[0], e[0])
                    }).forEach(function(t) {
                        t[1].parentNode.appendChild(t[1])
                    }), $(".start-circle").attr("opacity", Fd)
                }
            }

            function Hd(t) {
                (_.mouseover_horse = null, O.stopPropagation(), null == _.selected_horse) ? Md = [String(t.unfiltered_index)]: -1 < Md.indexOf(String(t.unfiltered_index)) ? 1 < Md.length ? Md.splice(Md.indexOf(String(t.unfiltered_index)), 1) : Md = [] : Md.push(String(t.unfiltered_index));
                _.selected_horse = Md.join(), Rd()
            }

            function Ud() {
                var t = d.horserace.column_names.stages.length;
                return null == _.target_position ? t - 1 : Math.max(0, Math.min(t - 1, _.target_position - 1))
            }

            function Od(t) {
                bd = window.innerWidth <= 420,
                    function() {
                        var e = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
                        bf = function(t) {
                            return t * e
                        }
                    }(), gd = oh.getFormatterFunction(), md = Td(gd), W("#viz-ui").style("margin-top", _.show_buttons || _.show_replay ? null : 0), $(".axis").style("font-family", _.layout.body_font.name), rh(), pl.update(), pd = ch(), Md = _.selected_horse ? _.selected_horse.split(",") : [],
                    function(t) {
                        var e = d.horserace.column_names.stages.length;
                        e - 1 < Uf && (Uf = e - 1), t && (Uf = 1)
                    }(pd.new_data), Ef(Uf, pd.max_rank, t), kd.curve(Li[_.curve]), yd.updateColorScale(d.horserace.map(function(t) {
                        return t.name
                    }));
                var e = _.zoom_enabled ? Math.min(Af(d.horserace.column_names.stages.length - 1), kf) : kf;
                Hf(Af, Cf, e, t), Dd(t), Uf != Ud() ? th() : Of()
            }

            function Rd() {
                Od(_.update_duration)
            }
            return t.data = d, t.draw = function() {
                window.onresize = function() {
                    Od(0)
                }, yl(), Rd()
            }, t.state = _, t.update = Rd, t
        }({});
        //# sourceMappingURL=template.js.map

        function _Flourish_unflattenInto(dest, src) {
            dest = dest || {};
            for (var k in src) {
                var t = dest;
                for (var i = k.indexOf("."), p = 0; i >= 0; i = k.indexOf(".", p = i + 1)) {
                    var s = k.substring(p, i);
                    if (!(s in t)) t[s] = {};
                    t = t[s];

                }
                t[k.substring(p)] = src[k];
            }
            return dest;
        }
        var _Flourish_settings = {
            "animate_scores": true,
            "color.categorical_extend": true,
            "color.categorical_palette": ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
            "curve": "curveMonotoneX",
            "end_circle_stroke_bg": true,
            "filter_control.slider_font_color": null,
            "height_mode": "flexible",
            "hide_labels": false,
            "higher_scores_win": true,
            "horse_images": true,
            "label_color_mode": "auto",
            "layout.background_color": "#4c809a",
            "layout.border.enabled": false,
            "layout.font_color": "#ffffff",
            "layout.footer_align": "left",
            "layout.footer_border": "none",
            "layout.footer_logo_enabled": false,
            "layout.footer_logo_src": "https://public.flourish.studio/uploads/17d3977e-05f2-4d5a-858a-e517d1e8ae38.png",
            "layout.footer_styling": false,
            "layout.header_align": "left",
            "layout.header_border": "bottom",
            "layout.header_border_color": "#fafafa",
            "layout.header_border_space": 0.45,
            "layout.header_border_style": "solid",
            "layout.header_border_width": 3,
            "layout.header_logo_enabled": false,
            "layout.header_text": "",
            "layout.header_text_line_height": 1.1,
            "layout.header_text_styling": false,
            "layout.layout_order": "stack-default",
            "layout.margin_bottom": 1,
            "layout.margin_left": 1,
            "layout.margin_right": 1,
            "layout.margin_top": 1,
            "layout.max_width": 800,
            "layout.max_width_align": "center",
            "layout.max_width_target": "none",
            "layout.space_between_sections": "1",
            "layout.subtitle": "即時推薦最佳投資組合",
            "layout.subtitle_size": "1.4",
            "layout.subtitle_space_above": "0.5",
            "layout.subtitle_styling": true,
            "layout.subtitle_weight": "bold",
            "layout.title": "風險報酬 同時掌握",
            "layout.title_font": {
                "name": "Source Sans Pro",
                "url": "https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
            },
            "layout.title_line_height": 1.6,
            "layout.title_size": "2",
            "layout.title_space_above": "1",
            "layout.title_styling": true,
            "layout.title_weight": "bold",
            "localization.input_decimal_separator": ",",
            "rank_outside_picture": true,
            "shade": true,
            "show_buttons": false,
            "show_replay": false,
            "stage_duration": 1500,
            "ties_mode": "competition",
            "value_type": "scores",
            "x_axis_label_color": "#ffffff",
            "x_axis_label_size": 0.8,
            "x_axis_rotate": "0",
            "x_axis_show_hidden": false,
            "y_axis_format.n_dec": -1,
            "y_axis_format.prefix": "$",
            "y_axis_format.suffix": "",
            "y_axis_label_colors": "#dedede",
            "zoom_enabled": false,
            "zoom_steps_to_show": 3,
            "zoom_y_axis": true
        };
        _Flourish_unflattenInto(window.template.state, _Flourish_settings);

        var _Flourish_data_column_names = {
                "horserace": {
                    "name": "�ѦW",
                    "pic": "",
                    "stages": ["2020/1/31", "2020/2/20", "2020/3/11", "2020/3/31"]
                }
            },
            _Flourish_data = {
                "horserace": [{
                    "name": "USER1",
                    "pic": "https://i.imgur.com/Sxr4TF1.jpg",
                    "stages": ["1000", "2000", "2500", "800"]
                }, {
                    "name": "USER2",
                    "pic": "https://i.imgur.com/PmgFn8p.jpg",
                    "stages": ["1000", "1500", "1000", "1500"]
                }, {
                    "name": "USER3",
                    "pic": "https://i.imgur.com/xZc3erK.jpg",
                    "stages": ["1000", "800", "1200", "2000"]
                }, {
                    "name": "WIN the JACKPOT",
                    "pic": "https://rorubyy.github.io/ruby/BC.png",
                    "stages": ["1000", "1500", "2500", "3500"]
                }]
            };
        for (var _Flourish_dataset in _Flourish_data) {
            window.template.data[_Flourish_dataset] = _Flourish_data[_Flourish_dataset];
            window.template.data[_Flourish_dataset].column_names = _Flourish_data_column_names[_Flourish_dataset];
        }
        window.template.draw();