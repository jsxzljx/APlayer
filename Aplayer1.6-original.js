!
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("APlayer", [], t) : "object" == typeof exports ? exports.APlayer = t() : e.APlayer = t()
} (this,
function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, t),
            a.l = !0,
            a.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.i = function(e) {
            return e
        },
        t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        },
        t.n = function(e) {
            var n = e && e.__esModule ?
            function() {
                return e.
            default
            }:
            function() {
                return e
            };
            return t.d(n, "a", n),
            n
        },
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        t.p = "",
        t(t.s = 13)
    } ([function(e, t, n) {
        var r = n(3);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        n(10)(r, {});
        r.locals && (e.exports = r.locals)
    },
    function(e, t, n) {
        "use strict";
        function r(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
        }
        function a(e) {
            return 3 * e.length / 4 - r(e)
        }
        function i(e) {
            var t, n, a, i, o, l, s = e.length;
            o = r(e),
            l = new c(3 * s / 4 - o),
            a = o > 0 ? s - 4 : s;
            var u = 0;
            for (t = 0, n = 0; t < a; t += 4, n += 3) i = p[e.charCodeAt(t)] << 18 | p[e.charCodeAt(t + 1)] << 12 | p[e.charCodeAt(t + 2)] << 6 | p[e.charCodeAt(t + 3)],
            l[u++] = i >> 16 & 255,
            l[u++] = i >> 8 & 255,
            l[u++] = 255 & i;
            return 2 === o ? (i = p[e.charCodeAt(t)] << 2 | p[e.charCodeAt(t + 1)] >> 4, l[u++] = 255 & i) : 1 === o && (i = p[e.charCodeAt(t)] << 10 | p[e.charCodeAt(t + 1)] << 4 | p[e.charCodeAt(t + 2)] >> 2, l[u++] = i >> 8 & 255, l[u++] = 255 & i),
            l
        }
        function o(e) {
            return u[e >> 18 & 63] + u[e >> 12 & 63] + u[e >> 6 & 63] + u[63 & e]
        }
        function l(e, t, n) {
            for (var r, a = [], i = t; i < n; i += 3) r = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2],
            a.push(o(r));
            return a.join("")
        }
        function s(e) {
            for (var t, n = e.length,
            r = n % 3,
            a = "",
            i = [], o = 16383, s = 0, p = n - r; s < p; s += o) i.push(l(e, s, s + o > p ? p: s + o));
            return 1 === r ? (t = e[n - 1], a += u[t >> 2], a += u[t << 4 & 63], a += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], a += u[t >> 10], a += u[t >> 4 & 63], a += u[t << 2 & 63], a += "="),
            i.push(a),
            i.join("")
        }
        t.byteLength = a,
        t.toByteArray = i,
        t.fromByteArray = s;
        for (var u = [], p = [], c = "undefined" != typeof Uint8Array ? Uint8Array: Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = 0, d = h.length; f < d; ++f) u[f] = h[f],
        p[h.charCodeAt(f)] = f;
        p["-".charCodeAt(0)] = 62,
        p["_".charCodeAt(0)] = 63
    },
    function(e, t, n) {
        "use strict"; (function(e) {
            function r() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    },
                    42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch(e) {
                    return ! 1
                }
            }
            function a() {
                return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }
            function i(e, t) {
                if (a() < t) throw new RangeError("Invalid typed array length");
                return o.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = o.prototype) : (null === e && (e = new o(t)), e.length = t),
                e
            }
            function o(e, t, n) {
                if (! (o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(e, t, n);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return p(this, e)
                }
                return l(this, e, t, n)
            }
            function l(e, t, n, r) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? f(e, t, n, r) : "string" == typeof t ? c(e, t, n) : d(e, t)
            }
            function s(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }
            function u(e, t, n, r) {
                return s(t),
                t <= 0 ? i(e, t) : void 0 !== n ? "string" == typeof r ? i(e, t).fill(n, r) : i(e, t).fill(n) : i(e, t)
            }
            function p(e, t) {
                if (s(t), e = i(e, t < 0 ? 0 : 0 | y(t)), !o.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
                return e
            }
            function c(e, t, n) {
                if ("string" == typeof n && "" !== n || (n = "utf8"), !o.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | g(t, n);
                e = i(e, r);
                var a = e.write(t, n);
                return a !== r && (e = e.slice(0, a)),
                e
            }
            function h(e, t) {
                var n = t.length < 0 ? 0 : 0 | y(t.length);
                e = i(e, n);
                for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
                return e
            }
            function f(e, t, n, r) {
                if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r),
                o.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = o.prototype) : e = h(e, t),
                e
            }
            function d(e, t) {
                if (o.isBuffer(t)) {
                    var n = 0 | y(t.length);
                    return e = i(e, n),
                    0 === e.length ? e: (t.copy(e, 0, 0, n), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || K(t.length) ? i(e, 0) : h(e, t);
                    if ("Buffer" === t.type && $(t.data)) return h(e, t.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }
            function y(e) {
                if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                return 0 | e
            }
            function m(e) {
                return + e != e && (e = 0),
                o.alloc( + e)
            }
            function g(e, t) {
                if (o.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n) return 0;
                for (var r = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return G(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return Q(e).length;
                default:
                    if (r) return G(e).length;
                    t = ("" + t).toLowerCase(),
                    r = !0
                }
            }
            function v(e, t, n) {
                var r = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if (n >>>= 0, t >>>= 0, n <= t) return "";
                for (e || (e = "utf8");;) switch (e) {
                case "hex":
                    return k(this, t, n);
                case "utf8":
                case "utf-8":
                    return L(this, t, n);
                case "ascii":
                    return S(this, t, n);
                case "latin1":
                case "binary":
                    return N(this, t, n);
                case "base64":
                    return I(this, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return U(this, t, n);
                default:
                    if (r) throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(),
                    r = !0
                }
            }
            function b(e, t, n) {
                var r = e[t];
                e[t] = e[n],
                e[n] = r
            }
            function w(e, t, n, r, a) {
                if (0 === e.length) return - 1;
                if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = a ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                    if (a) return - 1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!a) return - 1;
                    n = 0
                }
                if ("string" == typeof t && (t = o.from(t, r)), o.isBuffer(t)) return 0 === t.length ? -1 : A(e, t, n, r, a);
                if ("number" == typeof t) return t &= 255,
                o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : A(e, [t], n, r, a);
                throw new TypeError("val must be string, number or Buffer")
            }
            function A(e, t, n, r, a) {
                function i(e, t) {
                    return 1 === o ? e[t] : e.readUInt16BE(t * o)
                }
                var o = 1,
                l = e.length,
                s = t.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2) return - 1;
                    o = 2,
                    l /= 2,
                    s /= 2,
                    n /= 2
                }
                var u;
                if (a) {
                    var p = -1;
                    for (u = n; u < l; u++) if (i(e, u) === i(t, p === -1 ? 0 : u - p)) {
                        if (p === -1 && (p = u), u - p + 1 === s) return p * o
                    } else p !== -1 && (u -= u - p),
                    p = -1
                } else for (n + s > l && (n = l - s), u = n; u >= 0; u--) {
                    for (var c = !0,
                    h = 0; h < s; h++) if (i(e, u + h) !== i(t, h)) {
                        c = !1;
                        break
                    }
                    if (c) return u
                }
                return - 1
            }
            function E(e, t, n, r) {
                n = Number(n) || 0;
                var a = e.length - n;
                r ? (r = Number(r)) > a && (r = a) : r = a;
                var i = t.length;
                if (i % 2 != 0) throw new TypeError("Invalid hex string");
                r > i / 2 && (r = i / 2);
                for (var o = 0; o < r; ++o) {
                    var l = parseInt(t.substr(2 * o, 2), 16);
                    if (isNaN(l)) return o;
                    e[n + o] = l
                }
                return o
            }
            function x(e, t, n, r) {
                return V(G(t, e.length - n), e, n, r)
            }
            function T(e, t, n, r) {
                return V(Z(t), e, n, r)
            }
            function B(e, t, n, r) {
                return T(e, t, n, r)
            }
            function M(e, t, n, r) {
                return V(Q(t), e, n, r)
            }
            function R(e, t, n, r) {
                return V(F(t, e.length - n), e, n, r)
            }
            function I(e, t, n) {
                return 0 === t && n === e.length ? W.fromByteArray(e) : W.fromByteArray(e.slice(t, n))
            }
            function L(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], a = t; a < n;) {
                    var i = e[a],
                    o = null,
                    l = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (a + l <= n) {
                        var s, u, p, c;
                        switch (l) {
                        case 1:
                            i < 128 && (o = i);
                            break;
                        case 2:
                            s = e[a + 1],
                            128 == (192 & s) && (c = (31 & i) << 6 | 63 & s) > 127 && (o = c);
                            break;
                        case 3:
                            s = e[a + 1],
                            u = e[a + 2],
                            128 == (192 & s) && 128 == (192 & u) && (c = (15 & i) << 12 | (63 & s) << 6 | 63 & u) > 2047 && (c < 55296 || c > 57343) && (o = c);
                            break;
                        case 4:
                            s = e[a + 1],
                            u = e[a + 2],
                            p = e[a + 3],
                            128 == (192 & s) && 128 == (192 & u) && 128 == (192 & p) && (c = (15 & i) << 18 | (63 & s) << 12 | (63 & u) << 6 | 63 & p) > 65535 && c < 1114112 && (o = c)
                        }
                    }
                    null === o ? (o = 65533, l = 1) : o > 65535 && (o -= 65536, r.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o),
                    r.push(o),
                    a += l
                }
                return C(r)
            }
            function C(e) {
                var t = e.length;
                if (t <= ee) return String.fromCharCode.apply(String, e);
                for (var n = "",
                r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += ee));
                return n
            }
            function S(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var a = t; a < n; ++a) r += String.fromCharCode(127 & e[a]);
                return r
            }
            function N(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var a = t; a < n; ++a) r += String.fromCharCode(e[a]);
                return r
            }
            function k(e, t, n) {
                var r = e.length; (!t || t < 0) && (t = 0),
                (!n || n < 0 || n > r) && (n = r);
                for (var a = "",
                i = t; i < n; ++i) a += _(e[i]);
                return a
            }
            function U(e, t, n) {
                for (var r = e.slice(t, n), a = "", i = 0; i < r.length; i += 2) a += String.fromCharCode(r[i] + 256 * r[i + 1]);
                return a
            }
            function P(e, t, n) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
            }
            function Y(e, t, n, r, a, i) {
                if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > a || t < i) throw new RangeError('"value" argument is out of bounds');
                if (n + r > e.length) throw new RangeError("Index out of range")
            }
            function O(e, t, n, r) {
                t < 0 && (t = 65535 + t + 1);
                for (var a = 0,
                i = Math.min(e.length - n, 2); a < i; ++a) e[n + a] = (t & 255 << 8 * (r ? a: 1 - a)) >>> 8 * (r ? a: 1 - a)
            }
            function q(e, t, n, r) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var a = 0,
                i = Math.min(e.length - n, 4); a < i; ++a) e[n + a] = t >>> 8 * (r ? a: 3 - a) & 255
            }
            function j(e, t, n, r, a, i) {
                if (n + r > e.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }
            function z(e, t, n, r, a) {
                return a || j(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38),
                X.write(e, t, n, r, 23, 4),
                n + 4
            }
            function D(e, t, n, r, a) {
                return a || j(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308),
                X.write(e, t, n, r, 52, 8),
                n + 8
            }
            function J(e) {
                if (e = H(e).replace(te, ""), e.length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }
            function H(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }
            function _(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }
            function G(e, t) {
                t = t || 1 / 0;
                for (var n, r = e.length,
                a = null,
                i = [], o = 0; o < r; ++o) {
                    if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
                        if (!a) {
                            if (n > 56319) { (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (o + 1 === r) { (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            a = n;
                            continue
                        }
                        if (n < 56320) { (t -= 3) > -1 && i.push(239, 191, 189),
                            a = n;
                            continue
                        }
                        n = 65536 + (a - 55296 << 10 | n - 56320)
                    } else a && (t -= 3) > -1 && i.push(239, 191, 189);
                    if (a = null, n < 128) {
                        if ((t -= 1) < 0) break;
                        i.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        i.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (! (n < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return i
            }
            function Z(e) {
                for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t
            }
            function F(e, t) {
                for (var n, r, a, i = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o),
                r = n >> 8,
                a = n % 256,
                i.push(a),
                i.push(r);
                return i
            }
            function Q(e) {
                return W.toByteArray(J(e))
            }
            function V(e, t, n, r) {
                for (var a = 0; a < r && !(a + n >= t.length || a >= e.length); ++a) t[a + n] = e[a];
                return a
            }
            function K(e) {
                return e !== e
            }
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
            var W = n(1),
            X = n(6),
            $ = n(7);
            t.Buffer = o,
            t.SlowBuffer = m,
            t.INSPECT_MAX_BYTES = 50,
            o.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT: r(),
            t.kMaxLength = a(),
            o.poolSize = 8192,
            o._augment = function(e) {
                return e.__proto__ = o.prototype,
                e
            },
            o.from = function(e, t, n) {
                return l(null, e, t, n)
            },
            o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
                value: null,
                configurable: !0
            })),
            o.alloc = function(e, t, n) {
                return u(null, e, t, n)
            },
            o.allocUnsafe = function(e) {
                return p(null, e)
            },
            o.allocUnsafeSlow = function(e) {
                return p(null, e)
            },
            o.isBuffer = function(e) {
                return ! (null == e || !e._isBuffer)
            },
            o.compare = function(e, t) {
                if (!o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var n = e.length,
                r = t.length,
                a = 0,
                i = Math.min(n, r); a < i; ++a) if (e[a] !== t[a]) {
                    n = e[a],
                    r = t[a];
                    break
                }
                return n < r ? -1 : r < n ? 1 : 0
            },
            o.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return ! 0;
                default:
                    return ! 1
                }
            },
            o.concat = function(e, t) {
                if (!$(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return o.alloc(0);
                var n;
                if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                var r = o.allocUnsafe(t),
                a = 0;
                for (n = 0; n < e.length; ++n) {
                    var i = e[n];
                    if (!o.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                    i.copy(r, a),
                    a += i.length
                }
                return r
            },
            o.byteLength = g,
            o.prototype._isBuffer = !0,
            o.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) b(this, t, t + 1);
                return this
            },
            o.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) b(this, t, t + 3),
                b(this, t + 1, t + 2);
                return this
            },
            o.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) b(this, t, t + 7),
                b(this, t + 1, t + 6),
                b(this, t + 2, t + 5),
                b(this, t + 3, t + 4);
                return this
            },
            o.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "": 0 === arguments.length ? L(this, 0, e) : v.apply(this, arguments)
            },
            o.prototype.equals = function(e) {
                if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === o.compare(this, e)
            },
            o.prototype.inspect = function() {
                var e = "",
                n = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")),
                "<Buffer " + e + ">"
            },
            o.prototype.compare = function(e, t, n, r, a) {
                if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length: 0), void 0 === r && (r = 0), void 0 === a && (a = this.length), t < 0 || n > e.length || r < 0 || a > this.length) throw new RangeError("out of range index");
                if (r >= a && t >= n) return 0;
                if (r >= a) return - 1;
                if (t >= n) return 1;
                if (t >>>= 0, n >>>= 0, r >>>= 0, a >>>= 0, this === e) return 0;
                for (var i = a - r,
                l = n - t,
                s = Math.min(i, l), u = this.slice(r, a), p = e.slice(t, n), c = 0; c < s; ++c) if (u[c] !== p[c]) {
                    i = u[c],
                    l = p[c];
                    break
                }
                return i < l ? -1 : l < i ? 1 : 0
            },
            o.prototype.includes = function(e, t, n) {
                return this.indexOf(e, t, n) !== -1
            },
            o.prototype.indexOf = function(e, t, n) {
                return w(this, e, t, n, !0)
            },
            o.prototype.lastIndexOf = function(e, t, n) {
                return w(this, e, t, n, !1)
            },
            o.prototype.write = function(e, t, n, r) {
                if (void 0 === t) r = "utf8",
                n = this.length,
                t = 0;
                else if (void 0 === n && "string" == typeof t) r = t,
                n = this.length,
                t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0,
                    isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                var a = this.length - t;
                if ((void 0 === n || n > a) && (n = a), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var i = !1;;) switch (r) {
                case "hex":
                    return E(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return x(this, e, t, n);
                case "ascii":
                    return T(this, e, t, n);
                case "latin1":
                case "binary":
                    return B(this, e, t, n);
                case "base64":
                    return M(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return R(this, e, t, n);
                default:
                    if (i) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(),
                    i = !0
                }
            },
            o.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var ee = 4096;
            o.prototype.slice = function(e, t) {
                var n = this.length;
                e = ~~e,
                t = void 0 === t ? n: ~~t,
                e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
                t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                t < e && (t = e);
                var r;
                if (o.TYPED_ARRAY_SUPPORT) r = this.subarray(e, t),
                r.__proto__ = o.prototype;
                else {
                    var a = t - e;
                    r = new o(a, void 0);
                    for (var i = 0; i < a; ++i) r[i] = this[i + e]
                }
                return r
            },
            o.prototype.readUIntLE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || P(e, t, this.length);
                for (var r = this[e], a = 1, i = 0; ++i < t && (a *= 256);) r += this[e + i] * a;
                return r
            },
            o.prototype.readUIntBE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || P(e, t, this.length);
                for (var r = this[e + --t], a = 1; t > 0 && (a *= 256);) r += this[e + --t] * a;
                return r
            },
            o.prototype.readUInt8 = function(e, t) {
                return t || P(e, 1, this.length),
                this[e]
            },
            o.prototype.readUInt16LE = function(e, t) {
                return t || P(e, 2, this.length),
                this[e] | this[e + 1] << 8
            },
            o.prototype.readUInt16BE = function(e, t) {
                return t || P(e, 2, this.length),
                this[e] << 8 | this[e + 1]
            },
            o.prototype.readUInt32LE = function(e, t) {
                return t || P(e, 4, this.length),
                (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            },
            o.prototype.readUInt32BE = function(e, t) {
                return t || P(e, 4, this.length),
                16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            },
            o.prototype.readIntLE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || P(e, t, this.length);
                for (var r = this[e], a = 1, i = 0; ++i < t && (a *= 256);) r += this[e + i] * a;
                return a *= 128,
                r >= a && (r -= Math.pow(2, 8 * t)),
                r
            },
            o.prototype.readIntBE = function(e, t, n) {
                e |= 0,
                t |= 0,
                n || P(e, t, this.length);
                for (var r = t,
                a = 1,
                i = this[e + --r]; r > 0 && (a *= 256);) i += this[e + --r] * a;
                return a *= 128,
                i >= a && (i -= Math.pow(2, 8 * t)),
                i
            },
            o.prototype.readInt8 = function(e, t) {
                return t || P(e, 1, this.length),
                128 & this[e] ? (255 - this[e] + 1) * -1 : this[e]
            },
            o.prototype.readInt16LE = function(e, t) {
                t || P(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n: n
            },
            o.prototype.readInt16BE = function(e, t) {
                t || P(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n: n
            },
            o.prototype.readInt32LE = function(e, t) {
                return t || P(e, 4, this.length),
                this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            },
            o.prototype.readInt32BE = function(e, t) {
                return t || P(e, 4, this.length),
                this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            },
            o.prototype.readFloatLE = function(e, t) {
                return t || P(e, 4, this.length),
                X.read(this, e, !0, 23, 4)
            },
            o.prototype.readFloatBE = function(e, t) {
                return t || P(e, 4, this.length),
                X.read(this, e, !1, 23, 4)
            },
            o.prototype.readDoubleLE = function(e, t) {
                return t || P(e, 8, this.length),
                X.read(this, e, !0, 52, 8)
            },
            o.prototype.readDoubleBE = function(e, t) {
                return t || P(e, 8, this.length),
                X.read(this, e, !1, 52, 8)
            },
            o.prototype.writeUIntLE = function(e, t, n, r) {
                if (e = +e, t |= 0, n |= 0, !r) {
                    Y(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
                }
                var a = 1,
                i = 0;
                for (this[t] = 255 & e; ++i < n && (a *= 256);) this[t + i] = e / a & 255;
                return t + n
            },
            o.prototype.writeUIntBE = function(e, t, n, r) {
                if (e = +e, t |= 0, n |= 0, !r) {
                    Y(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
                }
                var a = n - 1,
                i = 1;
                for (this[t + a] = 255 & e; --a >= 0 && (i *= 256);) this[t + a] = e / i & 255;
                return t + n
            },
            o.prototype.writeUInt8 = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || Y(this, e, t, 1, 255, 0),
                o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                this[t] = 255 & e,
                t + 1
            },
            o.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || Y(this, e, t, 2, 65535, 0),
                o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : O(this, e, t, !0),
                t + 2
            },
            o.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || Y(this, e, t, 2, 65535, 0),
                o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : O(this, e, t, !1),
                t + 2
            },
            o.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || Y(this, e, t, 4, 4294967295, 0),
                o.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : q(this, e, t, !0),
                t + 4
            },
            o.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || Y(this, e, t, 4, 4294967295, 0),
                o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : q(this, e, t, !1),
                t + 4
            },
            o.prototype.writeIntLE = function(e, t, n, r) {
                if (e = +e, t |= 0, !r) {
                    var a = Math.pow(2, 8 * n - 1);
                    Y(this, e, t, n, a - 1, -a)
                }
                var i = 0,
                o = 1,
                l = 0;
                for (this[t] = 255 & e; ++i < n && (o *= 256);) e < 0 && 0 === l && 0 !== this[t + i - 1] && (l = 1),
                this[t + i] = (e / o >> 0) - l & 255;
                return t + n
            },
            o.prototype.writeIntBE = function(e, t, n, r) {
                if (e = +e, t |= 0, !r) {
                    var a = Math.pow(2, 8 * n - 1);
                    Y(this, e, t, n, a - 1, -a)
                }
                var i = n - 1,
                o = 1,
                l = 0;
                for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) e < 0 && 0 === l && 0 !== this[t + i + 1] && (l = 1),
                this[t + i] = (e / o >> 0) - l & 255;
                return t + n
            },
            o.prototype.writeInt8 = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || Y(this, e, t, 1, 127, -128),
                o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                e < 0 && (e = 255 + e + 1),
                this[t] = 255 & e,
                t + 1
            },
            o.prototype.writeInt16LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || Y(this, e, t, 2, 32767, -32768),
                o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : O(this, e, t, !0),
                t + 2
            },
            o.prototype.writeInt16BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || Y(this, e, t, 2, 32767, -32768),
                o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : O(this, e, t, !1),
                t + 2
            },
            o.prototype.writeInt32LE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || Y(this, e, t, 4, 2147483647, -2147483648),
                o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : q(this, e, t, !0),
                t + 4
            },
            o.prototype.writeInt32BE = function(e, t, n) {
                return e = +e,
                t |= 0,
                n || Y(this, e, t, 4, 2147483647, -2147483648),
                e < 0 && (e = 4294967295 + e + 1),
                o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : q(this, e, t, !1),
                t + 4
            },
            o.prototype.writeFloatLE = function(e, t, n) {
                return z(this, e, t, !0, n)
            },
            o.prototype.writeFloatBE = function(e, t, n) {
                return z(this, e, t, !1, n)
            },
            o.prototype.writeDoubleLE = function(e, t, n) {
                return D(this, e, t, !0, n)
            },
            o.prototype.writeDoubleBE = function(e, t, n) {
                return D(this, e, t, !1, n)
            },
            o.prototype.copy = function(e, t, n, r) {
                if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length),
                e.length - t < r - n && (r = e.length - t + n);
                var a, i = r - n;
                if (this === e && n < t && t < r) for (a = i - 1; a >= 0; --a) e[a + t] = this[a + n];
                else if (i < 1e3 || !o.TYPED_ARRAY_SUPPORT) for (a = 0; a < i; ++a) e[a + t] = this[a + n];
                else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
                return i
            },
            o.prototype.fill = function(e, t, n, r) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                        var a = e.charCodeAt(0);
                        a < 256 && (e = a)
                    }
                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !o.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                if (n <= t) return this;
                t >>>= 0,
                n = void 0 === n ? this.length: n >>> 0,
                e || (e = 0);
                var i;
                if ("number" == typeof e) for (i = t; i < n; ++i) this[i] = e;
                else {
                    var l = o.isBuffer(e) ? e: G(new o(e, r).toString()),
                    s = l.length;
                    for (i = 0; i < n - t; ++i) this[i + t] = l[i % s]
                }
                return this
            };
            var te = /[^+\/0-9A-Za-z-_]/g
        }).call(t, n(12))
    },
    function(e, t, n) {
        t = e.exports = n(5)()
    },
    function(e, t, n) {
        "use strict"; (function(e) {
            function r(t) {
                return new e(t, "base64").toString()
            }
            function a(e) {
                return e.split(",").pop()
            }
            function i(e, t) {
                u.lastIndex = 0;
                var n = u.exec(e),
                r = n[1] || n[2],
                a = l.resolve(t, r);
                try {
                    return fs.readFileSync(a, "utf8")
                } catch(e) {
                    throw new Error("An error occurred while trying to read the map file at " + a + "\n" + e)
                }
            }
            function o(e, t) {
                t = t || {},
                t.isFileComment && (e = i(e, t.commentFileDir)),
                t.hasComment && (e = a(e)),
                t.isEncoded && (e = r(e)),
                (t.isJSON || t.isEncoded) && (e = JSON.parse(e)),
                this.sourcemap = e
            }
            var l = n(8),
            s = /^\s*\/(?:\/|\*)[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/gm,
            u = /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/){1}[ \t]*$)/gm;
            o.prototype.toJSON = function(e) {
                return JSON.stringify(this.sourcemap, null, e)
            },
            o.prototype.toBase64 = function() {
                return new e(this.toJSON()).toString("base64")
            },
            o.prototype.toComment = function(e) {
                var t = this.toBase64(),
                n = "sourceMappingURL=data:application/json;charset=utf-8;base64," + t;
                return e && e.multiline ? "/*# " + n + " */": "//# " + n
            },
            o.prototype.toObject = function() {
                return JSON.parse(this.toJSON())
            },
            o.prototype.addProperty = function(e, t) {
                if (this.sourcemap.hasOwnProperty(e)) throw new Error("property %s already exists on the sourcemap, use set property instead");
                return this.setProperty(e, t)
            },
            o.prototype.setProperty = function(e, t) {
                return this.sourcemap[e] = t,
                this
            },
            o.prototype.getProperty = function(e) {
                return this.sourcemap[e]
            },
            t.fromObject = function(e) {
                return new o(e)
            },
            t.fromJSON = function(e) {
                return new o(e, {
                    isJSON: !0
                })
            },
            t.fromBase64 = function(e) {
                return new o(e, {
                    isEncoded: !0
                })
            },
            t.fromComment = function(e) {
                return e = e.replace(/^\/\*/g, "//").replace(/\*\/$/g, ""),
                new o(e, {
                    isEncoded: !0,
                    hasComment: !0
                })
            },
            t.fromMapFileComment = function(e, t) {
                return new o(e, {
                    commentFileDir: t,
                    isFileComment: !0,
                    isJSON: !0
                })
            },
            t.fromSource = function(e) {
                var n = e.match(s);
                return n ? t.fromComment(n.pop()) : null
            },
            t.fromMapFileSource = function(e, n) {
                var r = e.match(u);
                return r ? t.fromMapFileComment(r.pop(), n) : null
            },
            t.removeComments = function(e) {
                return e.replace(s, "")
            },
            t.removeMapFileComments = function(e) {
                return e.replace(u, "")
            },
            t.generateMapFileComment = function(e, t) {
                var n = "sourceMappingURL=" + e;
                return t && t.multiline ? "/*# " + n + " */": "//# " + n
            },
            Object.defineProperty(t, "commentRegex", {
                get: function() {
                    return s
                }
            }),
            Object.defineProperty(t, "mapFileCommentRegex", {
                get: function() {
                    return u
                }
            })
        }).call(t, n(2).Buffer)
    },
    function(e, t, n) {
        function r(e) {
            var t = e[1] || "",
            r = e[3];
            if (!r) return t;
            var a = n(4),
            i = a.fromObject(r).toComment({
                multiline: !0
            }),
            o = r.sources.map(function(e) {
                return "/*# sourceURL=" + r.sourceRoot + e + " */"
            });
            return [t].concat(o).concat([i]).join("\n")
        }
        e.exports = function() {
            var e = [];
            return e.toString = function() {
                return this.map(function(e) {
                    const t = r(e);
                    return e[2] ? "@media " + e[2] + "{" + t + "}": t
                }).join("")
            },
            e.i = function(t, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var r = {},
                a = 0; a < this.length; a++) {
                    var i = this[a][0];
                    "number" == typeof i && (r[i] = !0)
                }
                for (a = 0; a < t.length; a++) {
                    var o = t[a];
                    "number" == typeof o[0] && r[o[0]] || (n && !o[2] ? o[2] = n: n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o))
                }
            },
            e
        }
    },
    function(e, t) {
        t.read = function(e, t, n, r, a) {
            var i, o, l = 8 * a - r - 1,
            s = (1 << l) - 1,
            u = s >> 1,
            p = -7,
            c = n ? a - 1 : 0,
            h = n ? -1 : 1,
            f = e[t + c];
            for (c += h, i = f & (1 << -p) - 1, f >>= -p, p += l; p > 0; i = 256 * i + e[t + c], c += h, p -= 8);
            for (o = i & (1 << -p) - 1, i >>= -p, p += r; p > 0; o = 256 * o + e[t + c], c += h, p -= 8);
            if (0 === i) i = 1 - u;
            else {
                if (i === s) return o ? NaN: 1 / 0 * (f ? -1 : 1);
                o += Math.pow(2, r),
                i -= u
            }
            return (f ? -1 : 1) * o * Math.pow(2, i - r)
        },
        t.write = function(e, t, n, r, a, i) {
            var o, l, s, u = 8 * i - a - 1,
            p = (1 << u) - 1,
            c = p >> 1,
            h = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            f = r ? 0 : i - 1,
            d = r ? 1 : -1,
            y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, o = p) : (o = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -o)) < 1 && (o--, s *= 2), t += o + c >= 1 ? h / s: h * Math.pow(2, 1 - c), t * s >= 2 && (o++, s /= 2), o + c >= p ? (l = 0, o = p) : o + c >= 1 ? (l = (t * s - 1) * Math.pow(2, a), o += c) : (l = t * Math.pow(2, c - 1) * Math.pow(2, a), o = 0)); a >= 8; e[n + f] = 255 & l, f += d, l /= 256, a -= 8);
            for (o = o << a | l, u += a; u > 0; e[n + f] = 255 & o, f += d, o /= 256, u -= 8);
            e[n + f - d] |= 128 * y
        }
    },
    function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray ||
        function(e) {
            return "[object Array]" == n.call(e)
        }
    },
    function(e, t, n) { (function(e) {
            function n(e, t) {
                for (var n = 0,
                r = e.length - 1; r >= 0; r--) {
                    var a = e[r];
                    "." === a ? e.splice(r, 1) : ".." === a ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--)
                }
                if (t) for (; n--; n) e.unshift("..");
                return e
            }
            function r(e, t) {
                if (e.filter) return e.filter(t);
                for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
                return n
            }
            var a = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            i = function(e) {
                return a.exec(e).slice(1)
            };
            t.resolve = function() {
                for (var t = "",
                a = !1,
                i = arguments.length - 1; i >= -1 && !a; i--) {
                    var o = i >= 0 ? arguments[i] : e.cwd();
                    if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");
                    o && (t = o + "/" + t, a = "/" === o.charAt(0))
                }
                return t = n(r(t.split("/"),
                function(e) {
                    return !! e
                }), !a).join("/"),
                (a ? "/": "") + t || "."
            },
            t.normalize = function(e) {
                var a = t.isAbsolute(e),
                i = "/" === o(e, -1);
                return e = n(r(e.split("/"),
                function(e) {
                    return !! e
                }), !a).join("/"),
                e || a || (e = "."),
                e && i && (e += "/"),
                (a ? "/": "") + e
            },
            t.isAbsolute = function(e) {
                return "/" === e.charAt(0)
            },
            t.join = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return t.normalize(r(e,
                function(e, t) {
                    if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                    return e
                }).join("/"))
            },
            t.relative = function(e, n) {
                function r(e) {
                    for (var t = 0; t < e.length && "" === e[t]; t++);
                    for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                    return t > n ? [] : e.slice(t, n - t + 1)
                }
                e = t.resolve(e).substr(1),
                n = t.resolve(n).substr(1);
                for (var a = r(e.split("/")), i = r(n.split("/")), o = Math.min(a.length, i.length), l = o, s = 0; s < o; s++) if (a[s] !== i[s]) {
                    l = s;
                    break
                }
                for (var u = [], s = l; s < a.length; s++) u.push("..");
                return u = u.concat(i.slice(l)),
                u.join("/")
            },
            t.sep = "/",
            t.delimiter = ":",
            t.dirname = function(e) {
                var t = i(e),
                n = t[0],
                r = t[1];
                return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : "."
            },
            t.basename = function(e, t) {
                var n = i(e)[2];
                return t && n.substr( - 1 * t.length) === t && (n = n.substr(0, n.length - t.length)),
                n
            },
            t.extname = function(e) {
                return i(e)[3]
            };
            var o = "b" === "ab".substr( - 1) ?
            function(e, t, n) {
                return e.substr(t, n)
            }: function(e, t, n) {
                return t < 0 && (t = e.length + t),
                e.substr(t, n)
            }
        }).call(t, n(9))
    },
    function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }
        function r() {
            throw new Error("clearTimeout has not been defined")
        }
        function a(e) {
            if (p === setTimeout) return setTimeout(e, 0);
            if ((p === n || !p) && setTimeout) return p = setTimeout,
            setTimeout(e, 0);
            try {
                return p(e, 0)
            } catch(t) {
                try {
                    return p.call(null, e, 0)
                } catch(t) {
                    return p.call(this, e, 0)
                }
            }
        }
        function i(e) {
            if (c === clearTimeout) return clearTimeout(e);
            if ((c === r || !c) && clearTimeout) return c = clearTimeout,
            clearTimeout(e);
            try {
                return c(e)
            } catch(t) {
                try {
                    return c.call(null, e)
                } catch(t) {
                    return c.call(this, e)
                }
            }
        }
        function o() {
            y && f && (y = !1, f.length ? d = f.concat(d) : m = -1, d.length && l())
        }
        function l() {
            if (!y) {
                var e = a(o);
                y = !0;
                for (var t = d.length; t;) {
                    for (f = d, d = []; ++m < t;) f && f[m].run();
                    m = -1,
                    t = d.length
                }
                f = null,
                y = !1,
                i(e)
            }
        }
        function s(e, t) {
            this.fun = e,
            this.array = t
        }
        function u() {}
        var p, c, h = e.exports = {}; !
        function() {
            try {
                p = "function" == typeof setTimeout ? setTimeout: n
            } catch(e) {
                p = n
            }
            try {
                c = "function" == typeof clearTimeout ? clearTimeout: r
            } catch(e) {
                c = r
            }
        } ();
        var f, d = [],
        y = !1,
        m = -1;
        h.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            d.push(new s(e, t)),
            1 !== d.length || y || a(l)
        },
        s.prototype.run = function() {
            this.fun.apply(null, this.array)
        },
        h.title = "browser",
        h.browser = !0,
        h.env = {},
        h.argv = [],
        h.version = "",
        h.versions = {},
        h.on = u,
        h.addListener = u,
        h.once = u,
        h.off = u,
        h.removeListener = u,
        h.removeAllListeners = u,
        h.emit = u,
        h.binding = function(e) {
            throw new Error("process.binding is not supported")
        },
        h.cwd = function() {
            return "/"
        },
        h.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        },
        h.umask = function() {
            return 0
        }
    },
    function(e, t) {
        function n(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                a = h[r.id];
                if (a) {
                    a.refs++;
                    for (var i = 0; i < a.parts.length; i++) a.parts[i](r.parts[i]);
                    for (; i < r.parts.length; i++) a.parts.push(s(r.parts[i], t))
                } else {
                    for (var o = [], i = 0; i < r.parts.length; i++) o.push(s(r.parts[i], t));
                    h[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: o
                    }
                }
            }
        }
        function r(e) {
            for (var t = [], n = {},
            r = 0; r < e.length; r++) {
                var a = e[r],
                i = a[0],
                o = a[1],
                l = a[2],
                s = a[3],
                u = {
                    css: o,
                    media: l,
                    sourceMap: s
                };
                n[i] ? n[i].parts.push(u) : t.push(n[i] = {
                    id: i,
                    parts: [u]
                })
            }
            return t
        }
        function a(e, t) {
            var n = y(),
            r = v[v.length - 1];
            if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
            v.push(t);
            else {
                if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }
        function i(e) {
            e.parentNode.removeChild(e);
            var t = v.indexOf(e);
            t >= 0 && v.splice(t, 1)
        }
        function o(e) {
            var t = document.createElement("style");
            return t.type = "text/css",
            a(e, t),
            t
        }
        function l(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet",
            a(e, t),
            t
        }
        function s(e, t) {
            var n, r, a;
            if (t.singleton) {
                var s = g++;
                n = m || (m = o(t)),
                r = u.bind(null, n, s, !1),
                a = u.bind(null, n, s, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), r = c.bind(null, n), a = function() {
                i(n),
                n.href && URL.revokeObjectURL(n.href)
            }) : (n = o(t), r = p.bind(null, n), a = function() {
                i(n)
            });
            return r(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else a()
            }
        }
        function u(e, t, n, r) {
            var a = n ? "": r.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, a);
            else {
                var i = document.createTextNode(a),
                o = e.childNodes;
                o[t] && e.removeChild(o[t]),
                o.length ? e.insertBefore(i, o[t]) : e.appendChild(i)
            }
        }
        function p(e, t) {
            var n = t.css,
            r = t.media;
            if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
        function c(e, t) {
            var n = t.css,
            r = t.sourceMap;
            r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var a = new Blob([n], {
                type: "text/css"
            }),
            i = e.href;
            e.href = URL.createObjectURL(a),
            i && URL.revokeObjectURL(i)
        }
        var h = {},
        f = function(e) {
            var t;
            return function() {
                return void 0 === t && (t = e.apply(this, arguments)),
                t
            }
        },
        d = f(function() {
            return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
        }),
        y = f(function() {
            return document.head || document.getElementsByTagName("head")[0]
        }),
        m = null,
        g = 0,
        v = [];
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            t = t || {},
            void 0 === t.singleton && (t.singleton = d()),
            void 0 === t.insertAt && (t.insertAt = "bottom");
            var a = r(e);
            return n(a, t),
            function(e) {
                for (var i = [], o = 0; o < a.length; o++) {
                    var l = a[o],
                    s = h[l.id];
                    s.refs--,
                    i.push(s)
                }
                if (e) {
                    n(r(e), t)
                }
                for (var o = 0; o < i.length; o++) {
                    var s = i[o];
                    if (0 === s.refs) {
                        for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                        delete h[s.id]
                    }
                }
            }
        };
        var b = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n,
                e.filter(Boolean).join("\n")
            }
        } ()
    },
    function(e, t) {
        e.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE2NjQ3NUZBM0Y4RDExRTY4NzJCRDdCNkZCQTQ0MjNBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NjQ3NUY5M0Y4RDExRTY4NzJCRDdCNkZCQTQ0MjNBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5OENEMEFFRjM0NTI1NjE0NEREQkU4RjkxRjAwNjM3NiIgc3RSZWY6ZG9jdW1lbnRJRD0iOThDRDBBRUYzNDUyNTYxNDREREJFOEY5MUYwMDYzNzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCABkAGQDASIAAhEBAxEB/8QAgwAAAgIDAQAAAAAAAAAAAAAAAAYBBQIDBAcBAQEBAAAAAAAAAAAAAAAAAAABAhAAAQIEBAEJBgMHBQAAAAAAAQIDABEEBSExEgZBUWFxgaGxIhMUkTJCUmIVI0MWwdHh8XKSsvCCojNzEQEBAQEBAQEBAAAAAAAAAAAAAREhMVFBYf/aAAwDAQACEQMRAD8AaJ8vCJEYTjIZxtlIicc40VFZS0idVS6lpP1HE9Aind3dSrWWbdTPVruXgSQn98Awd0SBC+mp3fVYtUjFGk5F5U1S6Me6Mvtu6ncXbo01zNtzl2CJovwZxML/ANl3DwvZn/5fxiPt+72sWbkw/Lg4jTP/AImGhhiYWlXXdlD4q23IqWh7zlOZ/wCGrujpt+7bTWKDTijSvEy0O4CfJqy9sNMXmWMTECRExjzxMUEEEEBxLcbbQXHVBCEialKMgBFBU7jqax/0dmbU64fzJYy+aZwSOcxT7kvdPXVJpU6jTU5IC0HBauKucDhF7tS3ejolVJK51UlJQrCSRkeuJqppdspcV593dNU8cS0kkNjpPvKi8ZaZp2w3TtpabGSUAJHZEgzjXUVdPStebUOBpE5AnieQDieiKjeYyELVVva3ML0IZddI44IHaZxtod52upcDbqV0ylGSVLkUTP1JyibDDBOJxzjTUF8UzqqdIVUBtRZByK9J09seb1lzuKawuIqngRLSorUDMZ6k8DPMSwhaSPTwSDFbd7Bb7s2rzkBupl4KlIksH6vmHTE2GucuNqp6p3/tIKXCOKknST1xYgZDlihPsNxrLTXItFevXTuLU02omZadQZFP9Jw9ohxjz2tfF03GhFKdQXV6kqHINCJ/2tTj0KYJiQow6oIJY5QRR5hYLM5cK9KHkFNO1JbxIImOCeuPREyAAAkAJARyW63s26n8hlSnATqUtZmonnlKOucokhQtxDTa3XTpbbSVrVyJSNRhFq6usvNyap0K0v1JA5mG1YhtPJJOKzxOENG5HS3Yq1ScyhKSOZS0pPZCts8+ZfQtWK/LcUOk/wA4X3FhwoLJbKBgMtMIWZeN1xKVqWecqB9kJm7aKlo7wpulQGm3G0OKbT7qVKmDIcAZTh/LiW0KW4oJQgFS1HAAJEyTHnb6ndxX5XlAgVCwlH0MoEpnoSJwpD5ZFrXZ6JThOtTKJk9GHZCxvZmn9YHkJSh1KGw6QAC4p0uEauUhKIcmW0NNIaQJIbSEp5kpEhHntyqV3q7hlkzFQ/4T9ODSPYhM+uFI7rbZ9zU1EzXWuoGl5Ic9Pq0nH6XPAZ9MY1+6r2hh+3VjKGKojQtwApWlKhjhMjEcYZrzcW7JavMaA1pAZpUn5pSB6EgThT2xaTeLi5U1ZLjLJ8x4qzccUZhJ7zE/g6dlrtNO+t+pfSisUNDKF+EJScyFHCZh5BEpgzB4xR3TaVqr0lTKBR1BEw42JIJ+tvL2ShaZuN62xWejqZuMiRLKjqQtB+JpXD/U4vh69BxnKCK/73Qfa/uus+m0z+rVl5cvmnhBFRsHLyxIkrolGIMhKJSchAcl4pzVWmsYAmtbSijnUjxp7UwibdrEUd4pnlnS2olCycgFjTjHo4VHm9/paeku1QxTKCmtWrSPyyrFTf8AtiX6sW+5dwmtV9st5K2SoJdWnEuqnghP0z9sXe2rCLXTl18A1rwGvj5afkH7YoNov2aneW7WLCK2cmVOYISn6Tlq6Yaau+2mkaLjlU2ogYNtkLWo8JBMJ9GndFzFBanEpMqipmy1ygKHjV1J74odkW4u1blwWPw6ceW0eVxYx9ie+K+oeuG57sA0iXwtozSy1P3lHvh+t1AzbqNqkY9xsYq4qUcVKPSYe0/C9vxp9VPRvAEstqWlZGSVLCdM+mRjn2Xd6KkS9R1K0sqcUFtuKwSrCRSTDg42262pp1CXGljStChqSoHlBigqdk2h5RUyt2mn8CSFo6tePbDO6Ll67W1hOtyrZSn+sHsGMJW6r3S3Z9hukQS3T6gHSJFZXLBIzlhFs3sO3pV+JVPLHIEoR2+KLm32C024hdMwPNGTrh1r6irLqh2pwvfp+4fpPydJ9T5vqfT/ABaJadMvmljKCHLjxnBDDXDPGXGJmTkcogETMshjyxlPhFGqqfVT0b9QMSy2twDnSkkdsJtoomK7cC2KoB1plKtSVfmKT4ST0qUVQ7KbQ62th3xNuJUhY46VDSewwhvqrdvXsPrTqUMZ/C82fCVJP1dhiVYvKjY9vcVqpqhxgH8tQDgHQZpMRT7EokkF+qccHyISlufX4oubddKG5shymWCvNbRwWk84jtBMgeSGRNaKOgo7eyWaNoNIPvEYqUfqUcTHVOMRIxOKscooyBxg5eSIM5T48IkY/vgJOPVBOXOIBM80aKqspaNvzap1LaRlM4noGZgOjVBC5+sqX1ejyj6aUp6vxf6tGUuac4ImwxbAkKlEzBywjHGUgermiRPLhFGYJ48Y01tDSXBg09Y2HG5+E5KSZZoUMo2AgZRkDiBLDiIBQq9n3ClcL9pf80JxSkny3k9fuqjBvcu4bYfLuDBWBh+MgoV/eMDDoMyZ4RIM0kETT8pxETPi6WmN9UKhJ+ncQTnpIUP2R1p3jZCMVOJ5igxYu2q1vmbtGwvn0JB7JRznbthOJoW8eQqHcqHU40K3nZAMFOKllJB/bHI9vuiTMU9M44o/MQkdk4tUbdsaDMUTXXNXeY6maChp5eTTNI5ClCQe6HThWN+3Rc/Bb6UtIV8SUH/NeEZ02zrhWOefdqognNKT5izzajgIbpz7gIkfzhhqs/TFk9J6b0w05+ZM+ZPl1wRay9kEUV4y+qXZGachyc8EEBKeMAnLCf8ACCCAzE5d8ZHMS64IIA7oy+HDqgggIEpYdUZJnpE84IICeScSJYwQQE8IIIID/9k="
    },
    function(e, t) {
        var n;
        n = function() {
            return this
        } ();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch(e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    function(e, t, n) {
        "use strict";
        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0,
                n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        function a(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        } ();
        console.log("\n %c APlayer 1.6.0 %c http://aplayer.js.org \n\n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;"),
        n(0);
        var o = [],
        l = function() {
            function e(t) {
                function n(e) {
                    for (var t = e.offsetLeft,
                    n = e.offsetParent,
                    r = void 0; null !== n;) t += n.offsetLeft,
                    n = n.offsetParent;
                    return r = document.body.scrollLeft + document.documentElement.scrollLeft,
                    t - r
                }
                function r(e) {
                    for (var t = e.offsetTop,
                    n = e.offsetParent,
                    r = void 0; null !== n;) t += n.offsetTop,
                    n = n.offsetParent;
                    return r = document.body.scrollTop + document.documentElement.scrollTop,
                    t - r
                }
                var i = this;
                a(this, e);
                var l = {
                    play: ["0 0 24 24", "M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"],
                    pause: ["0 0 24 24", "M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"],
                    "volume-up": ["0 0 28 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"],
                    "volume-down": ["0 0 28 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"],
                    "volume-off": ["0 0 28 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"],
                    circulation: ["0 0 29 32", "M25.6 9.92q1.344 0 2.272 0.928t0.928 2.272v9.28q0 1.28-0.928 2.24t-2.272 0.96h-22.4q-1.28 0-2.24-0.96t-0.96-2.24v-9.28q0-1.344 0.96-2.272t2.24-0.928h8v-3.52l6.4 5.76-6.4 5.76v-3.52h-6.72v6.72h19.84v-6.72h-4.8v-4.48h6.080z"],
                    random: ["0 0 33 31", "M29.867 9.356l-5.003 5.003c-0.094 0.094-0.235 0.141-0.36 0.141-0.266 0-0.5-0.219-0.5-0.5v-3.002h-4.002c-2.079 0-3.064 1.423-3.94 3.111-0.453 0.875-0.844 1.782-1.219 2.673-1.735 4.033-3.768 8.223-8.849 8.223h-3.502c-0.281 0-0.5-0.219-0.5-0.5v-3.002c0-0.281 0.219-0.5 0.5-0.5h3.502c2.079 0 3.064-1.423 3.94-3.111 0.453-0.875 0.844-1.782 1.219-2.673 1.735-4.033 3.768-8.223 8.849-8.223h4.002v-3.002c0-0.281 0.219-0.5 0.5-0.5 0.141 0 0.266 0.063 0.375 0.156l4.987 4.987c0.094 0.094 0.141 0.235 0.141 0.36s-0.047 0.266-0.141 0.36zM10.262 14.781c-0.907-1.892-1.907-3.783-4.268-3.783h-3.502c-0.281 0-0.5-0.219-0.5-0.5v-3.002c0-0.281 0.219-0.5 0.5-0.5h3.502c2.783 0 4.831 1.298 6.41 3.518-0.876 1.344-1.517 2.798-2.142 4.268zM29.867 23.363l-5.003 5.003c-0.094 0.094-0.235 0.141-0.36 0.141-0.266 0-0.5-0.235-0.5-0.5v-3.002c-4.643 0-7.504 0.547-10.396-3.518 0.86-1.344 1.501-2.798 2.126-4.268 0.907 1.892 1.907 3.783 4.268 3.783h4.002v-3.002c0-0.281 0.219-0.5 0.5-0.5 0.141 0 0.266 0.063 0.375 0.156l4.987 4.987c0.094 0.094 0.141 0.235 0.141 0.36s-0.047 0.266-0.141 0.36z"],
                    order: ["0 0 32 32", "M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"],
                    single: ["0 0 38 32", "M2.072 21.577c0.71-0.197 1.125-0.932 0.928-1.641-0.221-0.796-0.333-1.622-0.333-2.457 0-5.049 4.108-9.158 9.158-9.158h5.428c0.056-0.922 0.221-1.816 0.482-2.667h-5.911c-3.158 0-6.128 1.23-8.361 3.463s-3.463 5.203-3.463 8.361c0 1.076 0.145 2.143 0.431 3.171 0.164 0.59 0.7 0.976 1.284 0.976 0.117 0 0.238-0.016 0.357-0.049zM21.394 25.613h-12.409v-2.362c0-0.758-0.528-1.052-1.172-0.652l-5.685 3.522c-0.644 0.4-0.651 1.063-0.014 1.474l5.712 3.69c0.637 0.411 1.158 0.127 1.158-0.63v-2.374h12.409c3.158 0 6.128-1.23 8.361-3.463 1.424-1.424 2.44-3.148 2.99-5.029-0.985 0.368-2.033 0.606-3.125 0.691-1.492 3.038-4.619 5.135-8.226 5.135zM28.718 0c-4.985 0-9.026 4.041-9.026 9.026s4.041 9.026 9.026 9.026 9.026-4.041 9.026-9.026-4.041-9.026-9.026-9.026zM30.392 13.827h-1.728v-6.822c-0.635 0.576-1.433 1.004-2.407 1.285v-1.713c0.473-0.118 0.975-0.325 1.506-0.62 0.532-0.325 0.975-0.665 1.329-1.034h1.3v8.904z"],
                    menu: ["0 0 22 32", "M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"]
                };
                this.getSVG = function(e) {
                    return '\n                <svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="' + l[e][0] + '" width="100%">\n<path class="aplayer-fill" d="' + l[e][1] + '" id="aplayer-' + e + '"></path>\n                </svg>\n            '
                },
                this.isMobile = /mobile/i.test(window.navigator.userAgent),
                this.isMobile && (t.autoplay = !1);
                var s = {
                    element: document.getElementsByClassName("aplayer")[0],
                    narrow: !1,
                    autoplay: !1,
                    mutex: !0,
                    showlrc: 0,
                    theme: "#b7daff",
                    mode: "circulation"
                };
                for (var u in s) s.hasOwnProperty(u) && !t.hasOwnProperty(u) && (t[u] = s[u]);
                if (this.option = t, this.audios = [], this.mode = t.mode, this.secondToTime = function(e) {
                    if (isNaN(e)) return "00:00";
                    var t = function(e) {
                        return e < 10 ? "0" + e: "" + e
                    },
                    n = parseInt(e / 60),
                    r = parseInt(e - 60 * n),
                    a = parseInt(n / 60),
                    i = parseInt(e / 60 - 60 * parseInt(e / 60 / 60));
                    return e >= 3600 ? t(a) + ":" + t(i) + ":" + t(r) : t(n) + ":" + t(r)
                },
                this.element = this.option.element, 2 === this.option.showlrc || this.option.showlrc === !0) {
                    this.savelrc = [];
                    for (var p = 0; p < this.element.getElementsByClassName("aplayer-lrc-content").length; p++) this.savelrc.push(this.element.getElementsByClassName("aplayer-lrc-content")[p].innerHTML)
                }
                this.lrcs = [],
                this.updateBar = function(e, t, n) {
                    t = t > 0 ? t: 0,
                    t = t < 1 ? t: 1,
                    y[e + "Bar"].style[n] = 100 * t + "%"
                },
                this.updateLrc = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.audio.currentTime;
                    if (i.lrcIndex > i.lrc.length - 1 || e < i.lrc[i.lrcIndex][0] || !i.lrc[i.lrcIndex + 1] || e >= i.lrc[i.lrcIndex + 1][0]) for (var t = 0; t < i.lrc.length; t++) e >= i.lrc[t][0] && (!i.lrc[t + 1] || e < i.lrc[t + 1][0]) && (i.lrcIndex = t, i.lrcContents.style.transform = "translateY(" + 48 * -i.lrcIndex + "px)", i.lrcContents.style.webkitTransform = "translateY(" + 48 * -i.lrcIndex + "px)", i.lrcContents.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"), i.lrcContents.getElementsByTagName("p")[t].classList.add("aplayer-lrc-current"))
                };
                var c = ["play", "pause", "canplay", "playing", "ended", "error"];
                this.event = {};
                for (var h = 0; h < c.length; h++) this.event[c[h]] = [];
                this.trigger = function(e) {
                    for (var t = 0; t < i.event[e].length; t++) i.event[e][t]()
                },
                this.playIndex = 0,
                this.multiple = "[object Array]" === Object.prototype.toString.call(t.music),
                this.multiple || (this.option.music = [this.option.music]),
                this.music = this.option.music[this.playIndex],
                this.option.showlrc && this.element.classList.add("aplayer-withlrc"),
                this.option.music.length > 1 && this.element.classList.add("aplayer-withlist"),
                this.multiple || "circulation" === this.mode || "order" === this.mode || (this.mode = "circulation"),
                this.getRandomOrder();
                for (var f = '\n            <div class="aplayer-pic" ' + (this.music.pic ? "style=\"background-image: url('" + this.music.pic + "');\"": "") + '>\n </div>\n            <div class="aplayer-info">\n     <div style="position:absolute;">\n <div class="aplayer-button aplayer-play">\n                    <button type="button" class="aplayer-icon aplayer-icon-play">' + this.getSVG("play") + '     </button>\n      </div>\n  </div>\n           <div class="aplayer-music">\n                    <span class="aplayer-title"></span>\n                    <span class="aplayer-author"></span>\n                </div>\n                <div class="aplayer-lrc">\n                    <div class="aplayer-lrc-contents" style="transform: translateY(0px); -webkit-transform: translateY(0px);"></div>\n                </div>\n                <div class="aplayer-controller">\n                    <div class="aplayer-bar-wrap">\n                        <div class="aplayer-bar">\n                            <div class="aplayer-loaded" style="width: 0"></div>\n                            <div class="aplayer-played" style="width: 0; background: ' + this.option.theme + ';">\n                                <span class="aplayer-thumb" style="border: 1px solid ' + this.option.theme + ';"></span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="aplayer-time">\n                        <span class="aplayer-time-inner">\n <span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span>\n                        </span>\n                        <div class="aplayer-volume-wrap">\n                            <button type="button" class="aplayer-icon aplayer-icon-volume-down" ' + (this.isMobile ? 'style="display: none;"': "") + ">" + this.getSVG("volume-down") + '             </button>\n                            <div class="aplayer-volume-bar-wrap">\n                                <div class="aplayer-volume-bar">\n                                    <div class="aplayer-volume" style="height: 80%; background: ' + this.option.theme + ';"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <button type="button" class="aplayer-icon aplayer-icon-mode">' + this.getSVG(this.mode) + '         </button>\n                        <button type="button" class="aplayer-icon aplayer-icon-menu">' + this.getSVG("menu") + '         </button>\n                    </div>\n                </div>\n            </div>\n            <div class="aplayer-list" ' + (this.option.listmaxheight ? 'style="max-height: ' + this.option.listmaxheight: "") + '">\n                <ol>', d = 0; d < this.option.music.length; d++) f += '\n                    <li>\n                        <span class="aplayer-list-cur" style="background: ' + this.option.theme + ';"></span>\n                        <span class="aplayer-list-index">' + (d + 1) + '</span>\n                        <span class="aplayer-list-title">' + this.option.music[d].title + '</span>\n                        <span class="aplayer-list-author">' + this.option.music[d].author + "</span>\n                    </li>";
                f += "\n                </ol>\n            </div>",
                this.element.innerHTML = f,
                this.element.offsetWidth < 300 && (this.element.getElementsByClassName("aplayer-icon-mode")[0].style.display = "none"),
                this.ptime = this.element.getElementsByClassName("aplayer-ptime")[0],
                this.element.getElementsByClassName("aplayer-info")[0].offsetWidth < 200 && this.element.getElementsByClassName("aplayer-time")[0].classList.add("aplayer-time-narrow");
                var y = {};
                y.barWrap = this.element.getElementsByClassName("aplayer-bar-wrap")[0],
                this.option.narrow && this.element.classList.add("aplayer-narrow"),
                this.button = this.element.getElementsByClassName("aplayer-button")[0],
                this.button.addEventListener("click",
                function(e) {
                    i.toggle()
                });
                var m = this.element.getElementsByClassName("aplayer-list")[0];
                m.addEventListener("click",
                function(e) {
                    var t = void 0;
                    t = "LI" === e.target.tagName.toUpperCase() ? e.target: e.target.parentElement;
                    var n = parseInt(t.getElementsByClassName("aplayer-list-index")[0].innerHTML) - 1;
                    n !== i.playIndex ? (i.setMusic(n), i.play()) : i.toggle()
                }),
                y.playedBar = this.element.getElementsByClassName("aplayer-played")[0],
                y.loadedBar = this.element.getElementsByClassName("aplayer-loaded")[0];
                var g = this.element.getElementsByClassName("aplayer-thumb")[0],
                v = void 0;
                y.barWrap.addEventListener("click",
                function(e) {
                    var t = e || window.event;
                    v = y.barWrap.clientWidth;
                    var r = (t.clientX - n(y.barWrap)) / v;
                    isNaN(i.audio.duration) ? i.updateBar("played", 0, "width") : (i.updateBar("played", r, "width"), i.element.getElementsByClassName("aplayer-ptime")[0].innerHTML = i.secondToTime(r * i.audio.duration), i.audio.currentTime = parseFloat(y.playedBar.style.width) / 100 * i.audio.duration)
                }),
                g.addEventListener("mouseover",
                function() {
                    g.style.background = i.option.theme
                }),
                g.addEventListener("mouseout",
                function() {
                    g.style.background = "#fff"
                });
                var b = function(e) {
                    var t = e || window.event,
                    r = (t.clientX - n(y.barWrap)) / v;
                    r = r > 0 ? r: 0,
                    r = r < 1 ? r: 1,
                    i.updateBar("played", r, "width"),
                    i.option.showlrc && i.updateLrc(parseFloat(y.playedBar.style.width) / 100 * i.audio.duration),
                    i.element.getElementsByClassName("aplayer-ptime")[0].innerHTML = i.secondToTime(r * i.audio.duration)
                },
                w = function e() {
                    document.removeEventListener("mouseup", e),
                    document.removeEventListener("mousemove", b),
                    isNaN(i.audio.duration) ? i.updateBar("played", 0, "width") : (i.audio.currentTime = parseFloat(y.playedBar.style.width) / 100 * i.audio.duration, i.playedTime = setInterval(function() {
                        i.updateBar("played", i.audio.currentTime / i.audio.duration, "width"),
                        i.option.showlrc && i.updateLrc(),
                        i.element.getElementsByClassName("aplayer-ptime")[0].innerHTML = i.secondToTime(i.audio.currentTime),
                        i.trigger("playing")
                    },
                    100))
                };
                g.addEventListener("mousedown",
                function() {
                    v = y.barWrap.clientWidth,
                    clearInterval(i.playedTime),
                    document.addEventListener("mousemove", b),
                    document.addEventListener("mouseup", w)
                }),
                y.volumeBar = this.element.getElementsByClassName("aplayer-volume")[0];
                var A = this.element.getElementsByClassName("aplayer-volume-bar")[0];
                this.volumeicon = this.element.getElementsByClassName("aplayer-time")[0].getElementsByTagName("button")[0];
                var E = 35;
                this.element.getElementsByClassName("aplayer-volume-bar-wrap")[0].addEventListener("click",
                function(e) {
                    var t = e || window.event,
                    n = (E - t.clientY + r(A)) / E;
                    n = n > 0 ? n: 0,
                    n = n < 1 ? n: 1,
                    i.volume(n)
                }),
                this.volumeicon.addEventListener("click",
                function() {
                    i.audio.muted ? (i.audio.muted = !1, i.volumeicon.className = 1 === i.audio.volume ? "aplayer-icon aplayer-icon-volume-up": "aplayer-icon aplayer-icon-volume-down", 1 === i.audio.volume ? (i.volumeicon.className = "aplayer-icon aplayer-icon-volume-up", i.volumeicon.innerHTML = i.getSVG("volume-up")) : (i.volumeicon.className = "aplayer-icon aplayer-icon-volume-down", i.volumeicon.innerHTML = i.getSVG("volume-down")), i.updateBar("volume", i.audio.volume, "height")) : (i.audio.muted = !0, i.volumeicon.className = "aplayer-icon aplayer-icon-volume-off", i.volumeicon.innerHTML = i.getSVG("volume-off"), i.updateBar("volume", 0, "height"))
                });
                var x = this.element.getElementsByClassName("aplayer-icon-mode")[0];
                x.addEventListener("click",
                function() {
                    i.multiple ? "random" === i.mode ? i.mode = "single": "single" === i.mode ? i.mode = "order": "order" === i.mode ? i.mode = "circulation": "circulation" === i.mode && (i.mode = "random") : "circulation" === i.mode ? i.mode = "order": i.mode = "circulation",
                    x.innerHTML = i.getSVG(i.mode),
                    i.audio.loop = !(i.multiple || "order" === i.mode)
                }),
                m.style.height = m.offsetHeight + "px",
                this.element.getElementsByClassName("aplayer-icon-menu")[0].addEventListener("click",
                function() {
                    m.classList.contains("aplayer-list-hide") ? m.classList.remove("aplayer-list-hide") : m.classList.add("aplayer-list-hide")
                }),
                "random" === this.mode ? this.setMusic(this.randomOrder[0]) : this.setMusic(0),
                o.push(this)
            }
            return i(e, [{
                key: "setMusic",
                value: function(e) {
                    var t = this;
                    void 0 !== e && (this.playIndex = e);
                    var n = this.playIndex;
                    this.music = this.option.music[n],
                    this.music.pic && (this.element.getElementsByClassName("aplayer-pic")[0].style.backgroundImage = "url('" + this.music.pic + "')"),
                    this.element.getElementsByClassName("aplayer-title")[0].innerHTML = this.music.title,
                    this.element.getElementsByClassName("aplayer-author")[0].innerHTML = " - " + this.music.author,
                    this.element.getElementsByClassName("aplayer-list-light")[0] && this.element.getElementsByClassName("aplayer-list-light")[0].classList.remove("aplayer-list-light"),
                    this.element.getElementsByClassName("aplayer-list")[0].getElementsByTagName("li")[n].classList.add("aplayer-list-light"),
                    this.audio && (this.pause(), this.audio.currentTime = 0),
                    this.element.getElementsByClassName("aplayer-list")[0].scrollTop = 33 * n,
                    this.audios[n] ? (this.audio = this.audios[n], this.audio.volume = 1, this.audio.currentTime = 0) : (this.audio = document.createElement("audio"), this.audio.src = this.music.url, this.audio.preload = this.option.preload ? this.option.preload: "auto", this.audio.addEventListener("play",
                    function() {
                        if (t.button.classList.contains("aplayer-play")) {
                            if (t.button.classList.remove("aplayer-play"), t.button.classList.add("aplayer-pause"), t.button.innerHTML = "", setTimeout(function() {
                                t.button.innerHTML = '\n                                    <button type="button" class="aplayer-icon aplayer-icon-pause">' + t.getSVG("pause") + "     </button>"
                            },
                            100), t.option.mutex) for (var e = 0; e < o.length; e++) t != o[e] && o[e].pause();
                            t.playedTime && clearInterval(t.playedTime),
                            t.playedTime = setInterval(function() {
                                t.updateBar("played", t.audio.currentTime / t.audio.duration, "width"),
                                t.option.showlrc && t.updateLrc(),
                                t.ptime.innerHTML = t.secondToTime(t.audio.currentTime),
                                t.trigger("playing")
                            },
                            100),
                            t.trigger("play")
                        }
                    }), this.audio.addEventListener("pause",
                    function() {
                        t.button && (t.button.classList.contains("aplayer-pause") || t.ended) && (t.ended = !1, t.button.classList.remove("aplayer-pause"), t.button.classList.add("aplayer-play"), t.button.innerHTML = "", setTimeout(function() {
                            t.button.innerHTML = '\n                                    <button type="button" class="aplayer-icon aplayer-icon-play">' + t.getSVG("play") + "     </button>"
                        },
                        100), clearInterval(t.playedTime), t.trigger("pause"))
                    }), this.audio.addEventListener("durationchange",
                    function() {
                        1 !== t.audio.duration && (t.element.getElementsByClassName("aplayer-dtime")[0].innerHTML = t.secondToTime(t.audio.duration))
                    }), this.audio.addEventListener("progress",
                    function() {
                        var e = t.audio.buffered.length ? t.audio.buffered.end(t.audio.buffered.length - 1) / t.audio.duration: 0;
                        t.updateBar("loaded", e, "width")
                    }), this.audio.addEventListener("error",
                    function() {
                        t.element.getElementsByClassName("aplayer-author")[0].innerHTML = " - Error happens",
                        t.trigger("pause")
                    }), this.audio.addEventListener("canplay",
                    function() {
                        t.trigger("canplay")
                    }), this.ended = !1, this.audio.addEventListener("ended",
                    function() {
                        if (t.multiple) {
                            if (t.isMobile) return t.ended = !0,
                            void t.pause();
                            0 !== t.audio.currentTime && ("random" === t.mode ? t.setMusic(t.nextRandomNum()) : "single" === t.mode ? t.setMusic(t.playIndex) : "order" === t.mode ? t.playIndex < t.option.music.length - 1 ? t.setMusic(++t.playIndex) : (t.ended = !0, t.pause(), t.trigger("ended")) : "circulation" === t.mode && (t.playIndex < t.option.music.length - 1 ? t.setMusic(++t.playIndex) : t.setMusic(0)))
                        } else "order" === t.mode && (t.ended = !0, t.pause(), t.trigger("ended"))
                    }), this.audio.volume = 1, this.audio.loop = !(this.multiple || "order" === this.mode), this.audios[n] = this.audio);
                    var r = function(e) {
                        for (var t = e.split("\n"), n = [], r = t.length, a = 0; a < r; a++) {
                            var i = t[a].match(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g),
                            o = t[a].replace(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g, "").replace(/^\s+|\s+$/g, "");
                            if (null != i) for (var l = i.length,
                            s = 0; s < l; s++) {
                                var u = /\[(\d{2}):(\d{2})\.(\d{2,3})]/.exec(i[s]),
                                p = 60 * u[1] + parseInt(u[2]) + parseInt(u[3]) / (2 === (u[3] + "").length ? 100 : 1e3);
                                n.push([p, o])
                            }
                        }
                        return n.sort(function(e, t) {
                            return e[0] - t[0]
                        }),
                        n
                    };
                    if (this.option.showlrc) {
                        var a = n;
                        if (!this.lrcs[a]) {
                            var i = "";
                            if (1 === this.option.showlrc) i = this.option.music[a].lrc;
                            else if (2 === this.option.showlrc || this.option.showlrc === !0) i = this.savelrc[a];
                            else if (3 === this.option.showlrc) {
                                var l = new XMLHttpRequest;
                                l.onreadystatechange = function() {
                                    if (4 === l.readyState) {
                                        l.status >= 200 && l.status < 300 || 304 === l.status ? (i = l.responseText, t.lrcs[a] = r(i)) : (console.log("Request was unsuccessful: " + l.status), t.lrcs[a] = [["00:00", "Not available"]]),
                                        t.lrc = t.lrcs[a];
                                        var e = "";
                                        t.lrcContents = t.element.getElementsByClassName("aplayer-lrc-contents")[0];
                                        for (var n = 0; n < t.lrc.length; n++) e += "<p>" + t.lrc[n][1] + "</p>";
                                        t.lrcContents.innerHTML = e,
                                        t.lrcIndex || (t.lrcIndex = 0),
                                        t.lrcContents.getElementsByTagName("p")[0].classList.add("aplayer-lrc-current"),
                                        t.lrcContents.style.transform = "translateY(0px)",
                                        t.lrcContents.style.webkitTransform = "translateY(0px)"
                                    }
                                };
                                var s = void 0;
                                s = this.option.music[a].lrc,
                                l.open("get", s, !0),
                                l.send(null)
                            }
                            i ? this.lrcs[a] = r(i) : 3 === this.option.showlrc ? this.lrcs[a] = [["00:00", "Loading"]] : this.lrcs[a] = [["00:00", "Not available"]]
                        }
                        this.lrc = this.lrcs[a];
                        var u = "";
                        this.lrcContents = this.element.getElementsByClassName("aplayer-lrc-contents")[0];
                        for (var p = 0; p < this.lrc.length; p++) u += "<p>" + this.lrc[p][1] + "</p>";
                        this.lrcContents.innerHTML = u,
                        this.lrcIndex || (this.lrcIndex = 0),
                        this.lrcContents.getElementsByTagName("p")[0].classList.add("aplayer-lrc-current"),
                        this.lrcContents.style.transform = "translateY(0px)",
                        this.lrcContents.style.webkitTransform = "translateY(0px)"
                    }
                    1 !== this.audio.duration && (this.element.getElementsByClassName("aplayer-dtime")[0].innerHTML = this.audio.duration ? this.secondToTime(this.audio.duration) : "00:00"),
                    this.option.autoplay && !this.isMobile && this.play(),
                    this.option.autoplay = !0,
                    this.isMobile && this.pause()
                }
            },
            {
                key: "play",
                value: function(e) {
                    "[object Number]" === Object.prototype.toString.call(e) && (this.audio.currentTime = e),
                    this.audio.paused && this.audio.play()
                }
            },
            {
                key: "pause",
                value: function() {
                    this.audio.paused || this.audio.pause()
                }
            },
            {
                key: "volume",
                value: function(e) {
                    this.updateBar("volume", e, "height"),
                    this.audio.volume = e,
                    this.audio.muted && (this.audio.muted = !1),
                    1 === e ? (this.volumeicon.className = "aplayer-icon aplayer-icon-volume-up", this.volumeicon.innerHTML = this.getSVG("volume-up")) : (this.volumeicon.className = "aplayer-icon aplayer-icon-volume-down", this.volumeicon.innerHTML = this.getSVG("volume-down"))
                }
            },
            {
                key: "on",
                value: function(e, t) {
                    "function" == typeof t && this.event[e].push(t)
                }
            },
            {
                key: "toggle",
                value: function() {
                    this.button.classList.contains("aplayer-play") ? this.play() : this.button.classList.contains("aplayer-pause") && this.pause()
                }
            },
            {
                key: "getRandomOrder",
                value: function() {
                    function e(e, t) {
                        return null == t && (t = e, e = 0),
                        e + Math.floor(Math.random() * (t - e + 1))
                    }
                    function t(t) {
                        for (var n, r = t.length,
                        a = new Array(r), i = 0; i < r; i++) n = e(0, i),
                        n !== i && (a[i] = a[n]),
                        a[n] = t[i];
                        return a
                    }
                    this.multiple && (this.randomOrder = t([].concat(r(Array(this.option.music.length))).map(function(e, t) {
                        return t
                    })))
                }
            },
            {
                key: "nextRandomNum",
                value: function() {
                    if (this.multiple) {
                        var e = this.randomOrder.indexOf(this.playIndex);
                        return e === this.randomOrder.length - 1 ? this.randomOrder[0] : this.randomOrder[e + 1]
                    }
                    return 0
                }
            },
            {
                key: "destroy",
                value: function() {
                    o.splice(o.indexOf(this), 1),
                    this.pause(),
                    this.element.innerHTML = "",
                    clearInterval(this.playedTime);
                    for (var e in this) this.hasOwnProperty(e) && delete this[e]
                }
            },
            {
                key: "addMusic",
                value: function(e) {
                    this.option.music = this.option.music.concat(e);
                    for (var t = this.element.getElementsByClassName("aplayer-list")[0], n = t.getElementsByTagName("ol")[0], r = "", a = 0; a < e.length; a++) r += '\n                <li>\n                    <span class="aplayer-list-cur" style="background: ' + this.option.theme + ';"></span>\n                    <span class="aplayer-list-index">' + (this.option.music.length - e.length + a + 1) + '</span>\n                    <span class="aplayer-list-title">' + e[a].title + '</span>\n                    <span class="aplayer-list-author">' + e[a].author + "</span>\n                </li>";
                    n.innerHTML += r,
                    this.multiple || (this.multiple = !0, this.element.classList.add("aplayer-withlist"), this.audio.loop = !1),
                    t.style.height = "auto",
                    t.style.height = t.offsetHeight + "px",
                    this.getRandomOrder()
                }
            }]),
            e
        } ();
        e.exports = l
    }])
});