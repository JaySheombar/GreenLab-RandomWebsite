var vjAcc = "";
var wrUrl = "http://c.wrating.com/";
var wrSv = 0;

function vjTrack(e) {
    var t = vjValidateTrack();
    if (t === false) {
        return
    }
    var r = wrUrl + "a.gif" + vjGetTrackImgUrl(e);
    document.write('<div style="display:none"><img src="' + r + '" id="wrTagImage" width="1" height="1"/></div>');
    vjSurveyCheck()
}

function vjEventTrack(e) {
    var t = vjValidateTrack();
    if (t === false) {
        return
    }
    var r = wrUrl + "a.gif" + vjGetTrackImgUrl(e);
    var i = new Image;
    i.src = r;
    i.onload = function() {}
}

function vjValidateTrack() {
    if (document.location.protocol == "file:") {
        return false
    }
    if (vjAcc == "") {
        return false
    } else {
        if (wrUrl.substr(wrUrl.length - 1, 1) != "/") {
            wrUrl += "/"
        }
    }
    return true
}

function vjGetTrackImgUrl(e) {
    var t = 0;
    var r = "expires=Fri, 1 Jan 2038 00:00:00 GMT;";
    var i = document.location;
    var a = document.referrer.toString();
    var n;
    var o = vjGetDomainFromUrl(i);
    var v;
    var s;
    var f = "";
    var c = vjFlash();
    var l = "";
    var u = "";
    var g = "";
    var d = navigator.appName + " " + navigator.appVersion;
    var m = new Date;
    var h = m.getTimezoneOffset() / -60;
    var p = 0;
    var j = "";
    var w = "";
    if (typeof o[1] != "undefined") {
        s = o[1]
    } else {
        if (typeof o[0] != "undefined") {
            s = o[0]
        }
    }
    if (a != "") {
        f = vjGetKeyword(a)
    } else {
        if (d.indexOf("MSIE") >= 0 && parseInt(d.substr(d.indexOf("MSIE") + 5), 4) >= 5 && d.indexOf("Mac") == -1 && navigator.userAgent.indexOf("Opera") == -1) {
            try {
                document.documentElement.addBehavior("#default#homePage");
                if (document.documentElement.isHomePage(location.href)) {
                    a = "ishomepage"
                }
            } catch (k) {}
        }
    }
    if (navigator.cookieEnabled) {
        t = 1
    }
    if (self.screen) {
        l = screen.width + "x" + screen.height + "x" + screen.colorDepth
    } else {
        if (self.java) {
            var S = java.awt.Toolkit.getDefaultToolkit().getScreenSize();
            l = S.width + "x" + S.height + "x0"
        }
    }
    if (navigator.language) {
        u = navigator.language.toLowerCase()
    } else {
        if (navigator.browserLanguage) {
            u = navigator.browserLanguage.toLowerCase()
        } else {
            u = "-"
        }
    }
    if (navigator.javaEnabled()) {
        p = 1
    }
    if (t == 1) {
        n = document.cookie;
        if (n.indexOf("vjuids=") < 0) {
            v = vjVisitorID();
            document.cookie = "vjuids=" + escape(v) + ";" + r + ";domain=" + s + ";path=/;"
        } else {
            v = vjGetCookie("vjuids")
        }
        if (n.indexOf("vjlast=") < 0) {
            j = "30";
            var T = vjGetTimestamp(m.getTime()).toString();
            w = T + "." + T + ".30"
        } else {
            var y = vjGetCookie("vjlast");
            var b = y.split(".");
            var x = "";
            if (typeof b[0] != "undefined") {
                w = b[0].toString()
            } else {
                w = vjGetTimestamp(m.getTime()).toString()
            }
            if (typeof b[1] != "undefined") {
                var G = new Date(parseInt(b[1]) * 1e3);
                if (G.toDateString() != m.toDateString()) {
                    w += "." + vjGetTimestamp(m.getTime()).toString();
                    if (parseInt(vjGetTimestamp(m.getTime()) - parseInt(b[1])) / 86400 > 30) {
                        j = "2"
                    } else {
                        j = "1"
                    }
                    if (typeof b[2] != "undefined") {
                        j += b[2].substr(0, 1)
                    } else {
                        j += "0"
                    }
                } else {
                    w += "." + b[1].toString();
                    if (typeof b[2] != "undefined") {
                        j += b[2]
                    } else {
                        j = "10"
                    }
                }
            } else {
                w += "." + vjGetTimestamp(m.getTime()).toString();
                if (typeof b[2] != "undefined") {
                    j += b[2]
                } else {
                    j = "10"
                }
            }
            w += "." + j
        }
        document.cookie = "vjlast=" + w + ";" + r + ";domain=" + s + ";path=/;"
    }
    O = "";
    try {
        var O = document.title;
        if (O.length > 40) {
            O = O.substr(0, 40);
            O += "..."
        }
    } catch (I) {}
    g = "?a=" + m.getTime().toString(16) + "&t=" + encodeURIComponent(O) + "&i=" + escape(v);
    g += "&b=" + escape(i) + "&c=" + vjAcc;
    g += "&s=" + l + "&l=" + u;
    g += "&z=" + h + "&j=" + p + "&f=" + escape(c);
    if (a != "") {
        g += "&r=" + escape(a) + "&kw=" + f
    }
    g += "&ut=" + j + "&n=";
    if (typeof e == "undefined") {
        g += "&js="
    } else {
        g += "&js=" + escape(e)
    }
    g += "&ck=" + t;
    return g
}

function vjGetTimestamp(e) {
    return Math.round(e / 1e3)
}

function vjGetKeyword(e) {
    var t = [
        ["baidu", "wd"],
        ["baidu", "q1"],
        ["google", "q"],
        ["google", "as_q"],
        ["yahoo", "p"],
        ["msn", "q"],
        ["live", "q"],
        ["sogou", "query"],
        ["youdao", "q"],
        ["soso", "w"],
        ["zhongsou", "w"],
        ["zhongsou", "w1"]
    ];
    var r = vjGetDomainFromUrl(e.toString().toLowerCase());
    var a = -1;
    var n = "";
    if (typeof r[0] == "undefined") {
        return ""
    }
    for (i = 0; i < t.length; i++) {
        if (r[0].indexOf("." + t[i][0] + ".") >= 0) {
            a = -1;
            a = e.indexOf("&" + t[i][1] + "=");
            if (a < 0) {
                a = e.indexOf("?" + t[i][1] + "=")
            }
            if (a >= 0) {
                n = e.substr(a + t[i][1].length + 2, e.length - (a + t[i][1].length + 2));
                a = n.indexOf("&");
                if (a >= 0) {
                    n = n.substr(0, a)
                }
                if (n == "") {
                    return ""
                } else {
                    return t[i][0] + "|" + n
                }
            }
        }
    }
    return ""
}

function vjGetDomainFromUrl(e) {
    if (e == "") {
        return false
    }
    e = e.toString().toLowerCase();
    var t = [];
    var r = e.indexOf("//") + 2;
    var i = e.substr(r, e.length - r);
    var a = i.indexOf("/");
    if (a >= 0) {
        t[0] = i.substr(0, a)
    } else {
        t[0] = i
    }
    var n = t[0].match(/[^.]+\.(com.cn|net.cn|gov.cn|cn|com|net|org|gov|cc|biz|info)+$/);
    if (n) {
        if (typeof n[0] != "undefined") {
            t[1] = n[0]
        }
    }
    return t
}

function vjVisitorID() {
    var e = vjHash(document.location + document.cookie + document.referrer).toString(16);
    var t = new Date;
    return e + "." + t.getTime().toString(16) + "." + Math.random().toString(16)
}

function vjHash(e) {
    if (!e || e == "") {
        return 0
    }
    var t = 0;
    for (var r = e.length - 1; r >= 0; r--) {
        var i = parseInt(e.charCodeAt(r));
        t = (t << 5) + t + i
    }
    return t
}

function vjGetCookie(e) {
    var t = e + "=";
    var r = t.length;
    var i = document.cookie.length;
    var a = 0;
    while (a < i) {
        var n = a + r;
        if (document.cookie.substring(a, n) == t) {
            return vjGetCookieVal(n)
        }
        a = document.cookie.indexOf(" ", a) + 1;
        if (a == 1) {
            break
        }
    }
    return null
}

function vjGetCookieVal(e) {
    var t = document.cookie.indexOf(";", e);
    if (t == -1) {
        t = document.cookie.length
    }
    return unescape(document.cookie.substring(e, t))
}

function vjFlash() {
    var _flashVer = "-";
    var _navigator = navigator;
    if (_navigator.plugins && _navigator.plugins.length) {
        for (var ii = 0; ii < _navigator.plugins.length; ii++) {
            if (_navigator.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                _flashVer = _navigator.plugins[ii].description.split("Shockwave Flash ")[1];
                break
            }
        }
    } else {
        if (window.ActiveXObject) {
            for (var ii = 10; ii >= 2; ii--) {
                try {
                    var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                    if (fl) {
                        _flashVer = ii + ".0";
                        break
                    }
                } catch (e) {}
            }
        }
    }
    return _flashVer
}

function vjSurveyCheck() {
    if (wrSv <= 0) {
        return
    }
    var e = new Date;
    var t = e.getTime();
    var r = Math.random(t);
    if (r <= parseFloat(1 / wrSv)) {
        var i = document.createElement("script");
        i.type = "text/javascript";
        i.id = "wratingSuevey";
        i.src = "http://tongji.wrating.com/survey/check.php?c=" + vjAcc;
        document.getElementsByTagName("head")[0].appendChild(i)
    }
}