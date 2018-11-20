var newNameObj = {};
var memberFullName = '';
var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var DataHolder;
        (function(DataHolder) {
            var DatosBasicos = (function() {
                function DatosBasicos() {}
                return DatosBasicos;
            }());
            DatosBasicos.tags = [];
            DatosBasicos.artists = [];
            DatosBasicos.particles = [];
            DatosBasicos.particlesCircle = [];
            DatosBasicos.debug = false;
            DatosBasicos.isMobile = false;
            DatosBasicos.cookiesAccepted = false;
            //==============================================    ====================================================================
            //          URL
            //==================================================================================================================
            DatosBasicos.id = "Okela201612";
            //==================================================================================================================
            //          FONTS
            //==================================================================================================================
            DatosBasicos.GOOGLE_FONTS = {};
            DatosBasicos.FONTSCOM_FONTS = {};
            DatosBasicos.CUSTOM_FONTS = { families: ['Georgia W01:n4,i4', 'Neue Helvetica W01:n2,n5,n7,i2'], urls: ["../resources/css/fonts.css"] };
            //==================================================================================================================
            //          SIZES
            //==================================================================================================================
            DatosBasicos.HEIGHT = 0;
            DatosBasicos.WIDTH = 0;
            DatosBasicos.CANVAS_HEIGHT = 750;
            DatosBasicos.CANVAS_WIDTH = 750;
            DatosBasicos.WIDTH_INSIDE = 0;
            DatosBasicos.SCROLL_WIDTH = 0;
            DatosBasicos.HEIGHT_SCROLL = 0;
            DatosBasicos.SMARTPHONE = 480;
            DatosBasicos.TABLET_PORTRAIT = 800;
            DatosBasicos.TABLET_LANDSCAPE = 1024;
            DatosBasicos.DESKTOP = 1174;
            DatosBasicos.LARGE_SCREEN = 1400;
            DatosBasicos.TOUCH_DEVICE = false;
            //==================================================================================================================
            //          HEADER
            //==================================================================================================================
            DatosBasicos.HEADER_HEIGHT = 120;
            DatosBasicos.HEADER_HEIGHT_SMALL = 80;
            //==================================================================================================================
            //          PATHS
            //==================================================================================================================
            DatosBasicos.PATH_ASSETS = "../assets/";
            DatosBasicos.PATH_IMAGES = "../assets/images/";
            DataHolder.DatosBasicos = DatosBasicos;
        })(DataHolder = cuchillo.DataHolder || (cuchillo.DataHolder = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Utils;
        (function(Utils) {
            var Animation;
            (function(Animation) {
                var Engine = (function() {
                    function Engine() {}
                    //private static _call:Function = null;
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    Engine.animate = function() {
                        if (!Engine.active)
                            return;
                        cuchillo.Main.getInstance().loop();
                        requestAnimationFrame(Engine.animate);
                    };
                    //==================================================================================================================
                    //          INIT
                    //==================================================================================================================
                    Engine.start = function(__call) {
                        //Engine._call = __call;
                        Engine.active = true;
                        requestAnimationFrame(Engine.animate);
                    };
                    Engine.stop = function() {
                        Engine.active = false;
                    };
                    return Engine;
                }());
                Engine.active = false;
                Animation.Engine = Engine;
            })(Animation = Utils.Animation || (Utils.Animation = {}));
        })(Utils = cuchillo.Utils || (cuchillo.Utils = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Utils;
        (function(Utils) {
            var Callback = (function() {
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function Callback(__target, __call, __id, __autoDispose) {
                    if (__id === void 0) { __id = ""; }
                    if (__autoDispose === void 0) { __autoDispose = false; }
                    this.target = __target;
                    this.call = __call;
                    this.id = __id;
                    this.autodispose = __autoDispose;
                }
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                Callback.prototype.doCall = function(__e) {
                    if (__e === void 0) { __e = null; }
                    if (__e == null)
                        __e = this.id;
                    this.target[this.call](__e);
                };
                return Callback;
            }());
            Utils.Callback = Callback;
        })(Utils = cuchillo.Utils || (cuchillo.Utils = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Utils;
        (function(Utils) {
            var UrlManager = (function() {
                function UrlManager() {}
                Object.defineProperty(UrlManager, "language", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() {
                        var lang = UrlManager.withLanguage ? UrlManager._section[0] : UrlManager._section[1];
                        return lang;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UrlManager, "url", {
                    get: function() {
                        return UrlManager._history.getState().url;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UrlManager, "pageId", {
                    get: function() {
                        var pId = "index";
                        UrlManager._section = UrlManager._history.getState().url.split("/");
                        UrlManager._section.splice(0, 3);
                        if (!UrlManager.withLanguage)
                            pId = UrlManager._section[0];
                        else if (UrlManager._section.length > 3 && UrlManager._section[3] != "") {
                            pId = "project_detail";
                        } else if (UrlManager._section.length > 2 && UrlManager._section[2] != "")
                            pId = UrlManager._section[1] + "_detail"; // + UrlManager._section[2];
                        else if (UrlManager._section.length > 1)
                            pId = UrlManager._section[1] == "" ? pId : pId = UrlManager._section[1];
                        return pId.split("?")[0];
                    },
                    enumerable: true,
                    configurable: true
                });
                UrlManager.getVar = function(__var) {
                    return decodeURIComponent((new RegExp('[?|&]' + __var + '=' + '([^&;]+?)(&|#|;|$)').exec(UrlManager._history.getState().url) || [null, ''])[1].replace(/\+/g, '%20')) || null;
                };
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                UrlManager.setup = function(__callback) {
                    UrlManager._callback = __callback;
                    UrlManager._history = History;
                    UrlManager._history.enabled = true;
                    UrlManager._history.Adapter.bind(window, 'statechange', function() {
                        var State = UrlManager._history.getState();
                        UrlManager._history.log(State.data, State.title, State.url);
                    });
                    $(window).on("statechange", function(e) {
                        UrlManager.stateChanged(e);
                    });
                };
                UrlManager.pushState = function(__data, __title, __url, __doAction) {
                    if (__doAction === void 0) { __doAction = true; }
                    UrlManager._doAction = __doAction;
                    UrlManager._history.pushState(__data, __title, __url);
                    if (__url.indexOf("#") > -1)
                        UrlManager.fakeStateChanged({ data: __data, title: __title, url: __url });
                };
                UrlManager.changeState = function(__data, __title, __url, __doAction) {
                    if (__doAction === void 0) { __doAction = true; }
                    UrlManager._doAction = __doAction;
                    UrlManager._history.replaceState(__data, __title, __url);
                    if (__url.indexOf("#") > -1)
                        UrlManager.fakeStateChanged({ data: __data, title: __title, url: __url });
                };
                //==================================================================================================================
                //          INIT
                //==================================================================================================================
                UrlManager.stateChanged = function(e) {
                    if (UrlManager._doAction)
                        UrlManager._callback();
                };
                UrlManager.fakeStateChanged = function(__data) {
                    if (UrlManager._doAction)
                        UrlManager._callback();
                };
                return UrlManager;
            }());
            UrlManager.withLanguage = true;
            UrlManager._doAction = true;
            Utils.UrlManager = UrlManager;
        })(Utils = cuchillo.Utils || (cuchillo.Utils = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Utils;
        (function(Utils) {
            var Functions = (function() {
                function Functions() {}
                //==================================================================================================================
                //          COOKIES
                //==================================================================================================================
                Functions.setupCookies = function() {
                    if (document.cookie.indexOf(cuchillo.DataHolder.DatosBasicos.id + "_cookie_policy") < 0) {
                        cuchillo.Windows.Cookies.getInstance().dispose();
                        cuchillo.Windows.Cookies.getInstance().show();
                    } else {
                        cuchillo.Windows.Cookies.getInstance().dispose();
                        cuchillo.DataHolder.DatosBasicos.cookiesAccepted = true;
                    }
                };
                //==================================================================================================================
                //          MOBILE
                //==================================================================================================================
                Functions.isAndroid = function() { return navigator.userAgent.match(/Android/i) != null; };
                Functions.isBlackberry = function() { return navigator.userAgent.match(/BlackBerry/i) != null; };
                Functions.isIOS = function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) != null; };
                Functions.isOperaMini = function() { return navigator.userAgent.match(/Opera Mini/i) != null; };
                Functions.isWinPhone = function() { return navigator.userAgent.match(/IEMobile/i) != null; };
                Functions.isMobile = function() {
                    return (Functions.isAndroid() || Functions.isBlackberry() || Functions.isIOS() || Functions.isOperaMini() || Functions.isWinPhone());
                };
                //==================================================================================================================
                //          SIZES
                //==================================================================================================================
                Functions.getSizePrefix = function() {
                    var _prefix = "xlarge";
                    if (cuchillo.DataHolder.DatosBasicos.WIDTH_INSIDE <= 480)
                        _prefix = "small";
                    else if (cuchillo.DataHolder.DatosBasicos.WIDTH_INSIDE <= 780)
                        _prefix = "medium";
                    else if (cuchillo.DataHolder.DatosBasicos.WIDTH_INSIDE <= 1200)
                        _prefix = "large";
                    else if (cuchillo.DataHolder.DatosBasicos.WIDTH_INSIDE > 1200)
                        _prefix = "xlarge";
                    return _prefix;
                };
                Functions.fulHeight = function(__holder, __h) {
                    __holder.css("height", __h + "px");
                };
                Functions.fulHeightPadding = function(__holder, __h) {
                    __holder.css("padding-top", __h + "px");
                };
                Functions.fulHeightIfNeccesary = function(__holder, __h, __content, __padding) {
                    if (__content === void 0) { __content = null; }
                    if (__padding === void 0) { __padding = 0; }
                    var n = Math.max(__holder.children().innerHeight() + __padding * 2, __h);
                    __holder.css("height", n + "px");
                    if (__content != null) {
                        var y = ((n - __padding * 2) - __content.innerHeight()) / 2;
                        __content.css({
                            '-webkit-transform': 'translateY(' + y + 'px)',
                            '-moz-transform': 'translateY(' + y + 'px)',
                            '-ms-transform': 'translateY(' + y + 'px)',
                            '-o-transform': 'translateY(' + y + 'px)',
                            'transform': 'translateY(' + y + 'px)'
                        });
                    }
                };
                Functions.fitAllImage = function(__img, __offset) {
                    if (__offset === void 0) { __offset = 0; }
                    var img = __img;
                    var wReal = img.width();
                    var hReal = img.height();
                    var wDestino = img.parent().outerWidth() + __offset;
                    var hDestino = img.parent().outerHeight() + __offset;
                    var scale = Math.max(wDestino / wReal, hDestino / hReal);
                    var w = wReal * scale;
                    var h = hReal * scale; //(wDestino * hReal)/wReal;
                    img.css("width", w);
                    img.css("height", h);
                    var left = 0;
                    var top = 0;
                    switch (img.attr("data-align-image")) {
                        case "C":
                            left = (wDestino - __offset - img.width()) / 2;
                            img.css("left", Math.round(left));
                            break;
                        case "L":
                            left = 0;
                            img.css("left", Math.round(left));
                            break;
                        case "R":
                            left = (wDestino - __offset - img.width());
                            img.css("left", Math.round(left));
                            break;
                    }
                    switch (img.attr("data-v-align-image")) {
                        case "C":
                            top = (hDestino - __offset - img.height()) / 2;
                            img.css("top", Math.round(top));
                            break;
                        case "T":
                            top = 0;
                            img.css("top", Math.round(top));
                            break;
                        case "B":
                            top = (hDestino - __offset - img.height());
                            img.css("top", Math.round(top));
                            break;
                    }
                };
                Functions.fitInside = function(__item, __width, __height, __realWidth, __realHeight, __insideWidth, __insideHeight, __align, __valign) {
                    if (__align === void 0) { __align = "C"; }
                    if (__valign === void 0) { __valign = "C"; }
                    var left = 0;
                    var top = 0;
                    var s = Math.min(__width / __realWidth, __height / __realHeight);
                    var w = __realWidth * s;
                    var h = __realHeight * s;
                    switch (__align) {
                        case "C":
                            left = (__insideWidth - w) / 2;
                            break;
                        case "L":
                            left = 0;
                            break;
                        case "R":
                            left = (__insideWidth - w);
                            break;
                    }
                    switch (__valign) {
                        case "C":
                            top = (__insideHeight - h) / 2;
                            break;
                        case "T":
                            top = 0;
                            break;
                        case "B":
                            top = (__insideHeight - h);
                            break;
                    }
                    __item.css({
                        width: w + "px",
                        height: h + "px",
                        top: top + "px",
                        left: left + "px",
                    });
                };
                //==================================================================================================================
                //          DIVS
                //==================================================================================================================
                Functions.getSelector = function(__item) {
                    var selector = __item
                        .parents()
                        .map(function() { return this.tagName; })
                        .get()
                        .reverse()
                        .concat([__item[0].nodeName])
                        .join(">");
                    var id = __item.attr("id");
                    if (id) {
                        selector += "#" + id;
                    }
                    var classNames = __item.attr("class");
                    if (classNames) {
                        selector += "." + $.trim(classNames).replace(/\s/gi, ".");
                    }
                    return selector;
                };
                //==================================================================================================================
                //          MATHS
                //==================================================================================================================
                Functions.getColorMid = function(__c1, __c2, __ratio) {
                    var r = Math.ceil(parseInt(__c1.substring(2, 4), 16) * __ratio + parseInt(__c2.substring(2, 4), 16) * (1 - __ratio));
                    var g = Math.ceil(parseInt(__c1.substring(4, 6), 16) * __ratio + parseInt(__c2.substring(4, 6), 16) * (1 - __ratio));
                    var b = Math.ceil(parseInt(__c1.substring(6, 8), 16) * __ratio + parseInt(__c2.substring(6, 8), 16) * (1 - __ratio));
                    return Number("0x" + this.toHex(r) + this.toHex(g) + this.toHex(b));
                };
                Functions.toHex = function(x) {
                    x = x.toString(16);
                    return (x.length == 1) ? '0' + x : x;
                };
                Functions.maxminRandom = function(__max, __min) {
                    if (__min === void 0) { __min = 1; }
                    return Math.floor(Math.random() * (__max - __min + 1)) + __min;
                };
                Functions.lineDistance = function(point1, point2) {
                    var xs = 0;
                    var ys = 0;
                    xs = point2.x - point1.x;
                    xs = xs * xs;
                    ys = point2.y - point1.y;
                    ys = ys * ys;
                    return Math.sqrt(xs + ys);
                };
                Functions.getAngle = function(p1, p2) {
                    return Math.atan2(p2.y - p1.y, p2.x - p1.x);
                };
                Functions.doMrCorrales = function() {

                };
                Functions.doCuchillo = function() {

                };
                Functions.monthName = function(__index) {
                    if (window.location.href.indexOf("/es") > -1)
                        return Functions._monthsNamesEs[__index];
                    else
                        return Functions._monthsNamesEus[__index];
                };
                Functions.getNumberOfDays = function(__month, __year) {
                    if (__year === void 0) { __year = 2016; }
                    var days = 31;
                    switch (__month) {
                        case 2:
                            if (this.es_bisiesto(__year))
                                days = 29;
                            else
                                days = 28;
                            break;
                        case 4:
                            days = 30;
                            break;
                        case 6:
                            days = 30;
                            break;
                        case 9:
                            days = 30;
                            break;
                        case 11:
                            days = 30;
                            break;
                    }
                    return days;
                };
                Functions.es_bisiesto = function(__year) {
                    return ((__year % 4 == 0 && __year % 100 != 0) || __year % 400 == 0) ? true : false;
                };
                return Functions;
            }());
            Functions.toRadians = function(degrees) {
                return degrees * Math.PI / 180;
            };
            Functions.toDegrees = function(radians) {
                return radians * 180 / Math.PI;
            };
            //==================================================================================================================
            //          PROMISE
            //==================================================================================================================
            /*public static loadImage(__item:JQuery, __src: string): Promise<any> {
                return new Promise((resolve,reject)=>{
                    __item.attr("src", __src).load(()=>{
                       resolve();
                    });
                });
            }
    
            public static loadPoster(__item:JQuery, __src: string): Promise<any> {
                return new Promise((resolve,reject)=>{
                    __item.attr("poster", __src).load(()=>{
                        resolve();
                    });
                });
            }*/
            Functions._monthsNamesEs = [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre"
            ];
            Functions._monthsNamesEus = [
                "Urtarrila",
                "Otsaila",
                "Martxoa",
                "Apirila",
                "Maiatza",
                "Ekaina",
                "Uztaila",
                "Abuztua",
                "Iraila",
                "Urria",
                "Azaroa",
                "Abendua"
            ];
            Utils.Functions = Functions;
        })(Utils = cuchillo.Utils || (cuchillo.Utils = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Utils;
        (function(Utils) {
            var Animation;
            (function(Animation) {
                var EIVController = (function() {
                    function EIVController() {}
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    EIVController.add = function(__element, __type, __callback) {
                        if (__type === void 0) { __type = "show-anim"; }
                        if (__callback === void 0) { __callback = null; }
                        this._limit = this._elements.push(new AnimElement(__element, __type, __callback));
                    };
                    EIVController.reset = function() {
                        this._elements = [];
                        this._limit = 0;
                    };
                    EIVController.start = function() {
                        if (!this._isActive) {
                            this._isActive = true;
                        }
                    };
                    EIVController.stop = function() {
                        if (this._isActive) {
                            this._isActive = false;
                        }
                    };
                    EIVController.loop = function() {
                        if (this._fpsCont < this.LIMIT_FPS) {
                            this._fpsCont += 1;
                        } else {
                            this._fpsCont = 1;
                            //CHECK SCROLL
                            if (cuchillo.Scroll.MrScroll.direction < 0) {
                                for (var i = 0; i < this._limit; i++) {
                                    if (verge.inY(this._elements[i].element[0], -20)) {
                                        this._elements[i].element.addClass(this._elements[i].type);
                                        if (this._elements[i].callback)
                                            this._elements[i].callback.doCall();
                                        this._elements.splice(i, 1);
                                        this._limit = this._limit - 1;
                                        i = i - 1;
                                    }
                                }
                            }
                        }
                    };
                    return EIVController;
                }());
                EIVController._elements = [];
                EIVController._limit = 0;
                EIVController._isActive = false;
                EIVController._fpsCont = 0;
                EIVController.LIMIT_FPS = 30;
                Animation.EIVController = EIVController;
                var AnimElement = (function() {
                    function AnimElement(__element, __type, __callback) {
                        if (__type === void 0) { __type = ""; }
                        if (__callback === void 0) { __callback = null; }
                        this.element = __element;
                        this.type = __type;
                        this.callback = __callback;
                    }
                    return AnimElement;
                }());
                Animation.AnimElement = AnimElement;
            })(Animation = Utils.Animation || (Utils.Animation = {}));
        })(Utils = cuchillo.Utils || (cuchillo.Utils = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Utils;
        (function(Utils) {
            var SVGJs;
            (function(SVGJs) {
                var SVGElement = (function() {
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    function SVGElement(__svg) {
                        this._svg = __svg;
                    }
                    Object.defineProperty(SVGElement.prototype, "x", {
                        get: function() { return this._svg.x(); },
                        //==================================================================================================================
                        //          GETTER SETTER
                        //==================================================================================================================
                        set: function(__n) { this._svg.x(__n); },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SVGElement.prototype, "y", {
                        get: function() { return this._svg.y(); },
                        set: function(__n) { this._svg.y(__n); },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SVGElement.prototype, "width", {
                        get: function() { return this._svg.width(); },
                        set: function(__n) { this._svg.width(__n); },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(SVGElement.prototype, "height", {
                        get: function() { return this._svg.height(); },
                        set: function(__n) { this._svg.height(__n); },
                        enumerable: true,
                        configurable: true
                    });
                    return SVGElement;
                }());
                SVGJs.SVGElement = SVGElement;
            })(SVGJs = Utils.SVGJs || (Utils.SVGJs = {}));
        })(Utils = cuchillo.Utils || (cuchillo.Utils = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Loaders;
        (function(Loaders) {
            var Preloader = (function() {
                function Preloader() {}
                Object.defineProperty(Preloader, "progress", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() {
                        return Preloader.cont / Preloader.total;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Preloader, "mode", {
                    get: function() { return Preloader._mode; },
                    set: function(__mode) {
                        Preloader._mode = __mode;
                    },
                    enumerable: true,
                    configurable: true
                });
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                Preloader.setup = function(__callback, __limit) {
                    if (__callback === void 0) { __callback = null; }
                    if (__limit === void 0) { __limit = 100; }
                    Preloader._callback = __callback;
                    Preloader._limit = __limit;
                    Preloader._manifest = [];
                    Preloader.cont = 0;
                    Preloader.errors = 0;
                    Preloader.total = 0;
                    Preloader.nLoads = 0;
                    Preloader.initiated = true;
                };
                Preloader.add = function(__item) {
                    if (!Preloader.initiated)
                        Preloader.setup();
                    Preloader._manifest.push(__item);
                    if (Preloader._mode == Preloader.LOAD_PROGRESSIVE) {
                        Preloader.next();
                    }
                    Preloader.total = Preloader.total + 1;
                };
                Preloader.init = function() {
                    if (Preloader._mode == Preloader.LOAD_PROGRESSIVE)
                        return;
                    if (cuchillo.DataHolder.DatosBasicos.debug)
                        Preloader.initLoad();
                    else
                        com.cuchillo.InterfaceItems.PreloadBar.getInstance().show(com.cuchillo.InterfaceItems.PreloadBar.FILES, Preloader._limit);
                };
                Preloader.initLoad = function() {
                    if (Preloader._manifest.length == 0) {
                        if (cuchillo.DataHolder.DatosBasicos.debug)
                            Preloader.end();
                        else
                            com.cuchillo.InterfaceItems.PreloadBar.getInstance().progress(100);
                    } else {
                        while (Preloader.nLoads < Preloader.maxLoads && Preloader._manifest.length > 0) {
                            Preloader.next();
                        }
                    }
                };
                Preloader.next = function() {
                    if (Preloader.nLoads == Preloader.maxLoads)
                        return;
                    Preloader._manifest.shift().load(this.fileLoaded.bind(this));
                    Preloader.nLoads = Preloader.nLoads + 1;
                };
                Preloader.cancel = function() {
                    /*if (Preloader._preload != null) {
                        Preloader._preload.removeAll();
                        Preloader._manifest = [];
                    }*/
                };
                Preloader.stop = function() {
                    /*if (Preloader._preload != null) {
                        Preloader._preload.close();
        
                        com.cuchillo.InterfaceItems.PreloadBar.getInstance().hide();
                        Preloader._callback();
                    }*/
                };
                Preloader.end = function() {
                    if (Preloader._callback) {
                        Preloader._callback();
                        Preloader._callback = null;
                    }
                };
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                Preloader.fileLoaded = function() {
                    Preloader.cont = Preloader.cont + 1;
                    Preloader.nLoads = Preloader.nLoads - 1;
                    if (Preloader._manifest.length > 0)
                        Preloader.next();
                    else if (Preloader.mode == Preloader.LOAD_FIRSTSHOW)
                        Preloader.checkEnd();
                };
                Preloader.checkEnd = function() {
                    if (Preloader.cont === Preloader.total)
                        com.cuchillo.InterfaceItems.PreloadBar.getInstance().progress(100);
                };
                //PROGRESO ARCHIVO EN CURSO
                Preloader.doProgress = function(event) {
                    if (Preloader._mode == Preloader.LOAD_PROGRESSIVE)
                        return;
                    if (cuchillo.DataHolder.DatosBasicos.debug) {
                        if (Preloader.progress == 1) {
                            Preloader.end();
                        }
                    } else {
                        com.cuchillo.InterfaceItems.PreloadBar.getInstance().progress(Math.floor(Preloader.progress * 99));
                    }
                };
                // An error happened on a file
                Preloader.doError = function(event) {
                    Preloader.errors = Preloader.errors + 1;
                };
                return Preloader;
            }());
            Preloader.LOAD_PROGRESSIVE = "PROGRESSIVE";
            Preloader.LOAD_FIRSTSHOW = "FIRST_SHOW";
            Preloader.initiated = false;
            Preloader.total = 0;
            Preloader.maxLoads = 5;
            Preloader.nLoads = 0;
            Preloader._limit = 100;
            Loaders.Preloader = Preloader;
        })(Loaders = cuchillo.Loaders || (cuchillo.Loaders = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Loaders;
        (function(Loaders) {
            var FontLoader = (function() {
                function FontLoader() {}
                /*
                 classes: false,
                 events: true,
                 loading: function(): void { alert("loading") },
                 active: function(): void { alert("active") },
                 fontloading: function(familyName, fvd): void { alert("FLoading " + familyName + " " + fvd) },
                 fontactive: function(familyName, fvd): void { alert("FActive " + familyName + " " + fvd) },
                 fontinactive: function(familyName, fvd): void { alert("FInactive " + familyName + " " + fvd) },
                 google: { families: ['Roboto+Slab:400,700,300:latin'] },
                 monotype: { projectId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', version: 12345  },
                 custom: { families: ['My Font', 'My Other Font:n4,i4,n7'], urls: ['/fonts.css'] }
                */
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                FontLoader.setup = function(__data /*WebFont.Config*/ , __total, __callback, __limit) {
                    if (__callback === void 0) { __callback = null; }
                    if (__limit === void 0) { __limit = 10; }
                    FontLoader._callback = __callback;
                    FontLoader._manifest = __data;
                    FontLoader._limit = __limit;
                    FontLoader.itemsTotal = __total;
                    FontLoader.itemsLoaded = 0;
                    FontLoader.progress = 0;
                    FontLoader.errors = 0;
                    FontLoader._manifest.classes = false;
                    FontLoader._manifest.events = true;
                    FontLoader._manifest.fontactive = FontLoader.fontActive;
                    FontLoader._manifest.active = FontLoader.allActive;
                };
                FontLoader.init = function() {
                    if (!cuchillo.DataHolder.DatosBasicos.debug)
                        com.cuchillo.InterfaceItems.PreloadBar.getInstance().show(com.cuchillo.InterfaceItems.PreloadBar.FONTS, FontLoader._limit);
                    else
                        WebFont.load(FontLoader._manifest);
                };
                FontLoader.initLoad = function() {
                    if (FontLoader.itemsTotal == FontLoader.itemsLoaded) {
                        com.cuchillo.InterfaceItems.PreloadBar.getInstance().progress(100);
                    } else {
                        WebFont.load(FontLoader._manifest);
                    }
                };
                FontLoader.end = function() {
                    FontLoader._callback();
                    FontLoader._callback = null;
                };
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                FontLoader.fontActive = function(e) {
                    if (cuchillo.DataHolder.DatosBasicos.debug)
                        return;
                    FontLoader.itemsLoaded++;
                    FontLoader.progress = FontLoader.itemsLoaded / FontLoader.itemsTotal;
                    com.cuchillo.InterfaceItems.PreloadBar.getInstance().progress(Math.round(FontLoader.progress * 100));
                };
                FontLoader.allActive = function() {
                    if (cuchillo.DataHolder.DatosBasicos.debug) {
                        FontLoader._callback();
                        FontLoader._callback = null;
                    }
                };
                // An error happened on a file
                FontLoader.doError = function(event) {
                    FontLoader.errors = FontLoader.errors + 1;
                };
                return FontLoader;
            }());
            FontLoader._limit = 100;
            Loaders.FontLoader = FontLoader;
        })(Loaders = cuchillo.Loaders || (cuchillo.Loaders = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Loaders;
        (function(Loaders) {
            var PixiPreloader = (function() {
                function PixiPreloader() {}
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                PixiPreloader.setup = function(__data, __callback, __limit) {
                    if (__limit === void 0) { __limit = 100; }
                    PixiPreloader._callback = __callback;
                    PixiPreloader._limit = __limit;
                    for (var i = 0; i < __data.length; i++) {
                        PIXI.loader.add(__data[i].id, __data[i].url);
                    }
                    PIXI.loader.on('progress', PixiPreloader.doProgress);
                    PIXI.loader.on('error', PixiPreloader.doError);
                    PixiPreloader.total = __data.length;
                    PixiPreloader.cont = 0;
                    PixiPreloader.errors = 0;
                };
                PixiPreloader.init = function() {
                    com.cuchillo.InterfaceItems.PreloadBar.getInstance().show(com.cuchillo.InterfaceItems.PreloadBar.PIXI, PixiPreloader._limit);
                };
                PixiPreloader.initLoad = function() {
                    PIXI.loader.load(function(loader, resources) {
                        PixiPreloader.resources = resources;
                        PixiPreloader.allLoaded();
                    });
                };
                PixiPreloader.end = function() {
                    PixiPreloader._callback();
                    PixiPreloader._callback = null;
                };
                PixiPreloader.stop = function() {};
                PixiPreloader.doProgress = function(event) {
                    if (event.progress == 100)
                        com.cuchillo.InterfaceItems.PreloadBar.getInstance().progress(99);
                    else
                        com.cuchillo.InterfaceItems.PreloadBar.getInstance().progress(Math.round(event.progress));
                };
                PixiPreloader.allLoaded = function(event) {
                    if (event === void 0) { event = null; }
                    com.cuchillo.InterfaceItems.PreloadBar.getInstance().progress(100);
                };
                // An error happened on a file
                PixiPreloader.doError = function(event) {
                    alert("Error en la carga");
                    console.log(event);
                    PixiPreloader.errors = PixiPreloader.errors + 1;
                };
                return PixiPreloader;
            }());
            PixiPreloader.resources = null;
            PixiPreloader._limit = 100;
            Loaders.PixiPreloader = PixiPreloader;
        })(Loaders = cuchillo.Loaders || (cuchillo.Loaders = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Loaders;
        (function(Loaders) {
            var ItemToLoad = (function() {
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function ItemToLoad(__item, __callback, __showAtEnd) {
                    if (__callback === void 0) { __callback = null; }
                    if (__showAtEnd === void 0) { __showAtEnd = true; }
                    this.videoCanPlay = false;
                    this.isLoaded = false;
                    this.isImportant = false;
                    this.item = __item;
                    this._callback = __callback;
                    this.showAtEnd = __showAtEnd;
                    if (this.item.hasClass("bg"))
                        this._type = ItemToLoad.TYPE_BG;
                    else if (this.item.hasClass("video"))
                        this._type = ItemToLoad.TYPE_VIDEO;
                    else
                        this._type = ItemToLoad.TYPE_IMG;
                    this.isImportant = this.item.attr("data-preload") == "true" ? true : false;
                    this.width = this.item.attr("data-width") != undefined ? Number(this.item.attr("data-width")) : Number(this.item.attr("width"));
                    this.height = this.item.attr("data-height") != undefined ? Number(this.item.attr("data-height")) : Number(this.item.attr("height"));
                    this.aspectRatio = (this.height / this.width) * 100;
                    if (this.item.parent().hasClass("media-holder")) {
                        this.item.parent().css("padding-top", this.aspectRatio + "%");
                    }
                    TweenMax.set(this.item, { css: { opacity: 0 }, force3D: true });
                }
                Object.defineProperty(ItemToLoad.prototype, "src", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() {
                        /*switch(this.typeContent) {
                            case ItemToLoad.TYPE_BG: return this.item.attr("data-src-" + Utils.Functions.getSizePrefix());
                                break;
                            case ItemToLoad.TYPE_IMG: return this.item.attr("data-src-" + Utils.Functions.getSizePrefix());
                                break;
                            case ItemToLoad.TYPE_VIDEO: return this.item.attr("data-src");
                                break;
                        }*/
                        return this.item.attr("data-src-" + cuchillo.Utils.Functions.getSizePrefix());
                    },
                    set: function(__s) {},
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ItemToLoad.prototype, "typeContent", {
                    get: function() {
                        return this._type;
                    },
                    enumerable: true,
                    configurable: true
                });
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                ItemToLoad.prototype.setup = function(__callback) {
                    if (__callback === void 0) { __callback = null; }
                    var tClass = this;
                    switch (this._type) {
                        case ItemToLoad.TYPE_IMG:
                            this.item.attr("src", this.src).load(function() {
                                cuchillo.DataHolder.DatosBasicos.HEIGHT_SCROLL = $("main").innerHeight() + $(".main-footer").innerHeight() - cuchillo.DataHolder.DatosBasicos.HEIGHT;
                                tClass.item.removeClass("load-indicator");
                                if (tClass.showAtEnd) {
                                    if (tClass.isImportant) {
                                        TweenMax.set(tClass.item, { css: { opacity: 1 }, force3D: true });
                                    } else {
                                        TweenLite.to(tClass.item, 1, { css: { opacity: 1 }, ease: Power3.easeOut, force3D: true });
                                    }
                                }
                                tClass.isLoaded = true;
                                if (__callback != null)
                                    __callback();
                                if (tClass._callback != null)
                                    tClass._callback(tClass);
                            });
                            break;
                        case ItemToLoad.TYPE_BG:
                            var bgsize = this.item.css("background-size");
                            var bgpos = this.item.css("background-position");
                            this.item.css("background-image", "url(" + this.src + ")");
                            this.item.css("background-size", bgsize);
                            this.item.css("background-position", bgpos);
                            this.item.removeClass("load-indicator");
                            if (tClass.showAtEnd) {
                                if (tClass.isImportant) {
                                    TweenMax.set(tClass.item, { css: { opacity: 1 }, force3D: true });
                                } else {
                                    TweenLite.to(tClass.item, 1, { css: { opacity: 1 }, ease: Power3.easeOut, force3D: true });
                                }
                            }
                            this.isLoaded = true;
                            if (__callback != null)
                                __callback();
                            if (this._callback != null)
                                this._callback(this);
                            break;
                        case ItemToLoad.TYPE_VIDEO:
                            if (!this.videoCanPlay) {
                                this.item.attr("poster", this.src);
                                cuchillo.DataHolder.DatosBasicos.HEIGHT_SCROLL = $("main").innerHeight() + $(".main-footer").innerHeight() - cuchillo.DataHolder.DatosBasicos.HEIGHT;
                                if (tClass.showAtEnd) {
                                    if (tClass.isImportant) {
                                        TweenMax.set(tClass.item, { css: { opacity: 1 }, force3D: true });
                                    } else {
                                        TweenLite.to(tClass.item, 1, {
                                            css: { opacity: 1 },
                                            ease: Power3.easeOut,
                                            force3D: true
                                        });
                                    }
                                }
                                if (__callback != null)
                                    __callback();
                                if (tClass._callback != null)
                                    tClass._callback(tClass);
                                tClass.loadVideo();
                            } else {
                                this.isLoaded = true;
                                cuchillo.DataHolder.DatosBasicos.HEIGHT_SCROLL = $("main").innerHeight() + $(".main-footer").innerHeight() - cuchillo.DataHolder.DatosBasicos.HEIGHT;
                                this.item.trigger("play");
                                if (this.item.attr("data-button-id") != undefined) {
                                    new cuchillo.InterfaceItems.ToggleButtons.TogglePause($('#' + this.item.attr("data-button-id")), this.item);
                                }
                            }
                            break;
                    }
                    this.item.removeAttr("data-preload");
                    this.item.removeAttr("data-item-load");
                    this.item.removeAttr("data-src");
                };
                ItemToLoad.prototype.loadVideo = function(__callback) {
                    if (__callback === void 0) { __callback = null; }
                    var tClass = this;
                    this.item[0].oncanplay = function() {
                        $(this)[0].oncanplay = null;
                        tClass.videoCanPlay = true;
                        tClass.setup();
                        if (__callback != null)
                            __callback();
                    };
                    this.item.load();
                };
                return ItemToLoad;
            }());
            ItemToLoad.TYPE_BG = "BG";
            ItemToLoad.TYPE_IMG = "IMG";
            ItemToLoad.TYPE_VIDEO = "VIDEO";
            Loaders.ItemToLoad = ItemToLoad;
        })(Loaders = cuchillo.Loaders || (cuchillo.Loaders = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Display;
        (function(Display) {
            var MediaObject = (function() {
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function MediaObject(__item, __showAtEnd, __showEffect) {
                    if (__showAtEnd === void 0) { __showAtEnd = true; }
                    if (__showEffect === void 0) { __showEffect = true; }
                    this.videoCanPlay = false;
                    this.isLoaded = false;
                    this.isImportant = false;
                    this.item = __item;
                    this.showAtEnd = __showAtEnd;
                    this.showEffect = __showEffect;
                    if (this.item.hasClass("bg"))
                        this._type = MediaObject.TYPE_BG;
                    else if (this.item.hasClass("video"))
                        this._type = MediaObject.TYPE_VIDEO;
                    else if (this.item.hasClass("pixi"))
                        this._type = MediaObject.TYPE_PIXI;
                    else
                        this._type = MediaObject.TYPE_IMG;
                    this.isImportant = this.item.attr("data-preload") == "true" ? true : false;
                    this.width = this.item.attr("data-width") != undefined ? Number(this.item.attr("data-width")) : Number(this.item.attr("width"));
                    this.height = this.item.attr("data-height") != undefined ? Number(this.item.attr("data-height")) : Number(this.item.attr("height"));
                    this.aspectRatio = (this.height / this.width) * 100;
                    if (this.item.parent().hasClass("media-holder")) {
                        this.item.parent().css("padding-top", this.aspectRatio + "%");
                    }
                    /*if(!__showAtEnd || (__showAtEnd && __showEffect)) {
                        TweenMax.set(this.item,{css: {opacity: 0}, force3D:true});
                    }*/
                }
                Object.defineProperty(MediaObject.prototype, "src", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() {
                        return this.item.attr("data-src");
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MediaObject.prototype, "typeContent", {
                    get: function() {
                        return this._type;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MediaObject.prototype, "showEffect", {
                    get: function() { return this._showEffect; },
                    set: function(__bol) {
                        this._showEffect = __bol;
                        if (this._showEffect) {
                            TweenMax.set(this.item, { css: { opacity: 0 }, force3D: true });
                        } else {
                            if (this._showAtEnd)
                                TweenMax.set(this.item, { css: { opacity: 1 }, force3D: true });
                            else
                                TweenMax.set(this.item, { css: { opacity: 0 }, force3D: true });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MediaObject.prototype, "showAtEnd", {
                    get: function() { return this._showAtEnd; },
                    set: function(__bol) {
                        this._showAtEnd = __bol;
                        if (this._showAtEnd) {
                            TweenMax.set(this.item, { css: { opacity: 1 }, force3D: true });
                        } else {
                            TweenMax.set(this.item, { css: { opacity: 0 }, force3D: true });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                MediaObject.prototype.load = function(__callback) {
                    if (__callback === void 0) { __callback = null; }
                    if (__callback != null)
                        __callback();
                };
                MediaObject.prototype.setup = function(__callback) {
                    if (__callback === void 0) { __callback = null; }
                    this.isLoaded = true;
                    this.item.removeAttr("data-preload");
                    this.item.removeAttr("data-item-load");
                    this.item.removeAttr("data-src");
                    if (__callback != null)
                        __callback();
                };
                MediaObject.prototype.show = function() {
                    if (this.showEffect) {
                        TweenLite.to(this.item, 1, { css: { opacity: 1 }, ease: Power3.easeOut, force3D: true, onComplete: this.afterShow.bind(this) });
                    }
                };
                MediaObject.prototype.afterShow = function() {
                    this.item.parent().removeClass("load-indicator-bg");
                };
                MediaObject.prototype.loadVideo = function(__callback) {
                    if (__callback === void 0) { __callback = null; }
                    console.log("NO ES UN VIDEO");
                };
                return MediaObject;
            }());
            MediaObject.TYPE_BG = "BG";
            MediaObject.TYPE_IMG = "IMG";
            MediaObject.TYPE_VIDEO = "VIDEO";
            MediaObject.TYPE_PIXI = "VIDEO";
            Display.MediaObject = MediaObject;
        })(Display = cuchillo.Display || (cuchillo.Display = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Display;
        (function(Display) {
            var ImageObject = (function(_super) {
                __extends(ImageObject, _super);
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function ImageObject(__item, __showAtEnd, __showEffect) {
                    if (__showAtEnd === void 0) { __showAtEnd = true; }
                    if (__showEffect === void 0) { __showEffect = true; }
                    return _super.call(this, __item, __showAtEnd, __showEffect) || this;
                }
                Object.defineProperty(ImageObject.prototype, "src", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() {
                        return this.item.attr("data-src-" + cuchillo.Utils.Functions.getSizePrefix());
                    },
                    enumerable: true,
                    configurable: true
                });
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                ImageObject.prototype.load = function(__callback) {
                    var tClass = this;
                    this.item.attr("src", this.src).on('load', function() {
                        tClass.setup();
                        tClass.show();
                        if (__callback != null)
                            __callback();
                    });
                };
                ImageObject.prototype.setup = function() {
                    _super.prototype.setup.call(this);
                    return;
                };
                ImageObject.prototype.show = function() {
                    _super.prototype.show.call(this);
                    return;
                };
                return ImageObject;
            }(Display.MediaObject));
            Display.ImageObject = ImageObject;
        })(Display = cuchillo.Display || (cuchillo.Display = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Display;
        (function(Display) {
            var BGObject = (function(_super) {
                __extends(BGObject, _super);
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function BGObject(__item, __showAtEnd, __showEffect) {
                    if (__showAtEnd === void 0) { __showAtEnd = true; }
                    if (__showEffect === void 0) { __showEffect = true; }
                    var _this = _super.call(this, __item, __showAtEnd, __showEffect) || this;
                    _this.bgSize = _this.item.css("background-size");
                    _this.bgPos = _this.item.css("background-position");
                    return _this;
                }
                Object.defineProperty(BGObject.prototype, "src", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() {
                        return this.item.attr("data-src-" + cuchillo.Utils.Functions.getSizePrefix());
                    },
                    enumerable: true,
                    configurable: true
                });
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                BGObject.prototype.load = function(__callback) {
                    var tClass = this;
                    $("<img/>").appendTo(this.item)
                        .css("display", "none")
                        .attr("src", this.src).on('load', function() {
                            $(this).remove();
                            tClass.item.css("background-image", "url(" + tClass.src + ")");
                            tClass.item.css("background-size", tClass.bgSize);
                            tClass.item.css("background-position", tClass.bgPos);
                            tClass.setup();
                            tClass.show();
                            if (__callback != null)
                                __callback();
                        });
                };
                BGObject.prototype.setup = function() {
                    _super.prototype.setup.call(this);
                    return;
                };
                BGObject.prototype.show = function() {
                    _super.prototype.show.call(this);
                    return;
                };
                return BGObject;
            }(Display.MediaObject));
            Display.BGObject = BGObject;
        })(Display = cuchillo.Display || (cuchillo.Display = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Display;
        (function(Display) {
            var VideoObject = (function(_super) {
                __extends(VideoObject, _super);
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function VideoObject(__item, __showAtEnd, __showEffect) {
                    if (__showAtEnd === void 0) { __showAtEnd = true; }
                    if (__showEffect === void 0) { __showEffect = true; }
                    var _this = _super.call(this, __item, __showAtEnd, __showEffect) || this;
                    _this.isLoaded = false;
                    return _this;
                }
                Object.defineProperty(VideoObject.prototype, "src", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() {
                        return this.item.attr("data-src-" + cuchillo.Utils.Functions.getSizePrefix());
                    },
                    enumerable: true,
                    configurable: true
                });
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                VideoObject.prototype.load = function(__callback) {
                    if (__callback === void 0) { __callback = null; }
                    var tClass = this;
                    if (this.typeContent === Display.MediaObject.TYPE_VIDEO && this.src === "") {
                        this.loadVideo(__callback);
                    } else {
                        $("<img/>").appendTo($("body"))
                            .css("display", "none")
                            .attr("src", this.src).on('load', function() {
                                $(this).remove();
                                tClass.item.attr("poster", this.src);
                                tClass.setup();
                                tClass.show();
                                tClass.loadVideo();
                            });
                    }
                };
                VideoObject.prototype.loadVideo = function(__callback) {
                    if (__callback === void 0) { __callback = null; }
                    var tClass = this;
                    this.item[0].oncanplay = function() {
                        $(this)[0].oncanplay = null;
                        tClass.videoCanPlay = true;
                        tClass.setupVideo();
                        if (__callback != null)
                            __callback();
                    };
                    //this.item.load();
                };
                VideoObject.prototype.setup = function() {
                    _super.prototype.setup.call(this);
                    return;
                };
                VideoObject.prototype.show = function() {
                    _super.prototype.show.call(this);
                    return;
                };
                VideoObject.prototype.setupVideo = function() {
                    this.item.trigger("play");
                    if (this.item.attr("data-button-id") != undefined) {
                        new cuchillo.InterfaceItems.ToggleButtons.TogglePause($('#' + this.item.attr("data-button-id")), this.item);
                    }
                };
                return VideoObject;
            }(Display.MediaObject));
            Display.VideoObject = VideoObject;
        })(Display = cuchillo.Display || (cuchillo.Display = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Display;
        (function(Display) {
            var PixiObject = (function(_super) {
                __extends(PixiObject, _super);
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function PixiObject(__item, __showAtEnd, __showEffect) {
                    if (__showAtEnd === void 0) { __showAtEnd = true; }
                    if (__showEffect === void 0) { __showEffect = true; }
                    var _this = _super.call(this, __item, __showAtEnd, __showEffect) || this;
                    _this._id = "";
                    _this._id = "img_" + new Date().getTime();
                    _this.stage = new cuchillo.InterfaceItems.PixiStage(__item.outerWidth(), __item.outerHeight(), false, true, 0xFFFFFF, "BG_STAGE", __item.outerWidth(), __item.outerHeight());
                    __item.append(_this.stage.view);
                    return _this;
                }
                Object.defineProperty(PixiObject.prototype, "src", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() {
                        return this.item.attr("data-src-" + cuchillo.Utils.Functions.getSizePrefix());
                    },
                    enumerable: true,
                    configurable: true
                });
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                PixiObject.prototype.load = function() {
                    var tClass = this;
                    PIXI.loader.add(this._id, this.src).load(function(loader, resources) {
                        tClass.setup(resources[tClass._id].texture);
                    });
                };
                PixiObject.prototype.setup = function(__texture) {
                    // This creates a texture from a 'bunny.png' image.
                    this._container = new PIXI.Container();
                    this.imageSprite = new PIXI.Sprite(__texture);
                    this._bg = new PIXI.Graphics();
                    this._bg.beginFill(0xF94343);
                    this._bg.lineStyle(0, 0xF94343);
                    this._bg.drawRect(0, 0, this.item.outerWidth(), this.item.outerHeight());
                    //this.renderRexture   =   new PIXI.RenderTexture(this.stage._renderer, this.item.outerWidth(), this.item.outerHeight(), PIXI.SCALE_MODES.LINEAR, 1);
                    this.spriteRenderer = new PIXI.Sprite(this.renderRexture);
                    this.spriteRenderer.position.x = 0;
                    this.spriteRenderer.position.y = 0;
                    this._container.addChild(this.imageSprite);
                    this.fitImage();
                    this.stage.addChild(this._bg);
                    this.stage.addChild(this.spriteRenderer);
                    this.stage.activate();
                    // -- FILTRO
                    var colorMatrix = [
                        0.7, 0.609, 0.082, 0, 0, 0.7, 0.609, 0.082, 0, 0, 0.7, 0.609, 0.082, 0, 0, 0, 0, 0, 1, 0
                    ];
                    var filter = new PIXI.filters.ColorMatrixFilter();
                    filter.matrix = colorMatrix;
                    this.imageSprite.filters = [filter];
                    this.spriteRenderer.blendMode = PIXI.BLEND_MODES.ADD;
                    // --
                    this.loop();
                    _super.prototype.setup.call(this);
                    this.show();
                };
                PixiObject.prototype.loop = function() {
                    // this.renderRexture.render(this._container, null, true);
                    this.stage.loop();
                };
                PixiObject.prototype.show = function() {
                    _super.prototype.show.call(this);
                    return;
                };
                PixiObject.prototype.fitImage = function() {
                    var wDestino = this.item.outerWidth();
                    var hDestino = this.item.outerHeight();
                    this.imageSprite.anchor.x = 0.5;
                    this.imageSprite.anchor.y = 0.5;
                    this.imageSprite.position.x = (wDestino) / 2;
                    this.imageSprite.position.y = (hDestino) / 2;
                    var scale = Math.max(wDestino / this.imageSprite.width, hDestino / this.imageSprite.height);
                    this.imageSprite.scale.x = this.imageSprite.scale.y = scale;
                };
                return PixiObject;
            }(Display.MediaObject));
            Display.PixiObject = PixiObject;
        })(Display = cuchillo.Display || (cuchillo.Display = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Forms;
        (function(Forms) {
            var FormValidator = (function() {
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function FormValidator(__form) {
                    this._fields = [];
                    this._dataSend = {};
                    this._files = null;
                    var tClass = this;
                    this._form = __form;
                    this._form.submit(function(e) {
                        e.preventDefault();
                        if (tClass.check())
                            tClass.parseToSend();
                    });
                    this._form.find("input").each(function() {
                        if ($(this).attr("type") != "button" && $(this).attr("type") != "submit") {
                            tClass._fields.push($(this));
                        }
                    });
                    this._form.find("textarea").each(function() {
                        tClass._fields.push($(this));
                    });
                    for (var i = 0; i < this._fields.length; i++) {
                        this.setupFocus(this._fields[i]);
                    }
                }
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                FormValidator.prototype.setupFocus = function(__item) {
                    var tClass = this;
                    __item.focus(function(e) {
                        $(this).removeClass("error");
                    });
                    switch (__item.attr("type")) {
                        case "file":
                            if (this._files == null)
                                this._files = {};
                            var reader = new FileReader();
                            __item.change(function(e) {
                                var file = $(this).prop('files')[0];
                                reader.readAsDataURL($(this).prop('files')[0]);
                            });
                            reader.addEventListener("load", function() {
                                __item.parent().find(".bg").css({
                                    "background-image": "url(" + reader.result + ")",
                                    "background-size": "cover",
                                    "background-position": "center center"
                                });
                                tClass._files[__item.attr("name")] = reader.result;
                            });
                            break;
                    }
                };
                FormValidator.prototype.check = function() {
                    var bolContinuar = true;
                    var field;
                    for (var i = 0, j = this._fields.length; i < j; i++) {
                        field = this._fields[i];
                        switch (field.attr("type")) {
                            case "text":
                                this._dataSend[field.attr("name")] = "";
                                if (field.val().split(" ").join("") == "" && field.attr("required")) {
                                    bolContinuar = false;
                                    field.addClass("error");
                                } else {
                                    this._dataSend[field.attr("name")] = field.val();
                                }
                                break;
                            case "email":
                                this._dataSend[field.attr("name")] = "";
                                var filter = /^([a-zA-Z0-9_\.\ñ\Ñ\-])+\@(([a-zA-Z0-9\-\ñ\Ñ])+\.)+([a-zA-Z0-9]{2,4})+$/;
                                if (field.val().split(" ").join("") == "" && field.attr("required")) {
                                    bolContinuar = false;
                                    field.addClass("error");
                                } else if (!filter.test(field.val())) {
                                    bolContinuar = false;
                                    field.addClass("error");
                                } else {
                                    this._dataSend[field.attr("name")] = field.val();
                                }
                                break;
                                /*case "mail-multiple":
                                var filter = /^([a-zA-Z0-9_\.\ñ\Ñ\-])+\@(([a-zA-Z0-9\-\ñ\Ñ])+\.)+([a-zA-Z0-9]{2,4})+$/;
                                var lista   =   field.val().split(" ").join("").split(",");
        
        
                                for(var j:number = 0; j<lista.length; j++) {
                                    if (!filter.test(lista[j])) {
                                        bolContinuar    =   false;
                                        field.addClass("error");
                                    }
                                }
        
                                break;*/
                            case "tel":
                                this._dataSend[field.attr("name")] = "";
                                var filter = /^([0-9]+){9}$/; //<--- con esto vamos a validar el numero
                                if (field.val().split(" ").join("") == "" && field.attr("required") == "required") {
                                    bolContinuar = false;
                                    field.addClass("error");
                                } else if (!filter.test(field.val().split(" ").join(""))) {
                                    bolContinuar = false;
                                    field.addClass("error");
                                } else {
                                    this._dataSend[field.attr("name")] = field.val();
                                }
                                break;
                            case "file":
                                {
                                    if (field.attr("data-form-required") == "true" && field.prop('files').length < 1) {
                                        bolContinuar = false;
                                        field.addClass("error");
                                    }
                                    break;
                                }
                            default:
                                this._dataSend[field.attr("name")] = "";
                                if (field.val().split(" ").join("") == "" && field.attr("required")) {
                                    bolContinuar = false;
                                    field.addClass("error");
                                } else {
                                    this._dataSend[field.attr("name")] = field.val();
                                }
                                break;
                        }
                    }
                    return bolContinuar;
                };
                FormValidator.prototype.reset = function() {
                    this._dataSend = {};
                    for (var i = 0, j = this._fields.length; i < j; i++) {
                        if (this._fields[i].attr("type") == "file") {
                            this._fields[i].parent().find(".bg").css({
                                "background-image": "url(../assets/images/placeholder.png)",
                                "background-size": "cover",
                                "background-position": "center center"
                            });
                            this._files[this._fields[i].attr("name")] = null;
                        } else {
                            this._fields[i].val("");
                        }
                    }
                };
                FormValidator.prototype.parseToSend = function() {
                    Forms.FormSender.send(this, this._dataSend, this._form, this._files);
                };
                return FormValidator;
            }());
            Forms.FormValidator = FormValidator;
        })(Forms = cuchillo.Forms || (cuchillo.Forms = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Forms;
        (function(Forms) {
            var FormSender = (function() {
                function FormSender() {}
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                FormSender.send = function(__formValidator, __data, __form, __files) {
                    if (__files === void 0) { __files = null; }
                    $(".__submit").addClass("button-loading");
                    var data = {};
                    if (__form.attr("data-type") == "newsletter-subscriptions") {
                        data = {
                            "data": {
                                "type": __form.attr("data-type"),
                                "attributes": __data
                            }
                        };
                    } else {
                        data = {
                            "data": {
                                "subject": __form.attr("data-subject"),
                                "attributes": __data,
                                "attachments": __files
                            }
                        };
                    }
                    var settings = {
                        async: true,
                        url: __form.attr("data-href"),
                        method: "POST",
                        data: JSON.stringify(data),
                        headers: {
                            "accept-language": "es",
                            "content-type": "application/vnd.api+json",
                        }
                    };
                    var mssg_ok = __form.attr("data-mssg-ok") == undefined ? "El mensaje ha sido envíado, nos pondremos en contacto contigo" : __form.attr("data-mssg-ok");
                    $.ajax(settings)
                        .done(function() {
                            alert(mssg_ok);
                            $(".__submit").removeClass("button-loading");
                            __formValidator.reset();
                        })
                        .fail(function(jqXHR, textStatus) {
                            if (jqXHR.responseJSON.errors[0].code == "100") {
                                alert(mssg_ok);
                                $(".__submit").removeClass("button-loading");
                                __formValidator.reset();
                            } else {
                                alert("Ha ocurrido un error. Revisa los datos y vuelve a intentarlo");
                                $(".__submit").removeClass("button-loading");
                            }
                        });
                };
                return FormSender;
            }());
            Forms.FormSender = FormSender;
        })(Forms = cuchillo.Forms || (cuchillo.Forms = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
/*

 <!-- <script type="text/javascript">
 document.addEventListener("DOMContentLoaded", function(event) {
 $("#<%= item.name %>").submit(function(e) {
 e.preventDefault();
 var name = $("#offer-form-<%= offer.id %>-name").val();
 var surname = $("#offer-form-<%= offer.id %>-surname").val();
 var dni = $("#offer-form-<%= offer.id %>-dni").val();
 var address = $("#offer-form-<%= offer.id %>-address").val();
 var city = $("#offer-form-<%= offer.id %>-city").val();
 var state = $("#offer-form-<%= offer.id %>-state").val();
 var postalCode = $("#offer-form-<%= offer.id %>-postal-code").val();
 var phoneNumber = $("#offer-form-<%= offer.id %>-phone-number").val();
 var email = $("#offer-form-<%= offer.id %>-email").val();
 var description = $("#offer-form-<%= offer.id %>-description").val();

 var reader = new FileReader();
 var file = $("#offer-form-<%= offer.id %>-file")[0].files[0];

 reader.readAsDataURL(file);

 reader.addEventListener("load", function () {

 var data = {
 "data": {
 "type": "job-offer-applications",
 "attributes": {
 "name": name,
 "surname": surname,
 "dni": dni,
 "address": address,
 "city": city,
 "state": state,
 "postal-code": postalCode,
 "phone-number": phoneNumber,
 "email": email,
 "description": description,
 "file": reader.result
 },
 "relationships": {
 "group": {
 "data": {
 "type": "job-offer-forms",
 "id": "<%= offer.id %>"
 }
 }
 }
 }
 };

 var settings = {
 async: true,
 url: "/api/v1/job-offer-applications.json",
 method: "POST",
 data: JSON.stringify(data),
 headers: {
 "accept-language": "es",
 "content-type": "application/vnd.api+json",
 }
 };

 $.ajax(settings)
 .done(function() {
 alert("Perfect! :)");
 })
 .fail(function(jqXHR, textStatus) {
 alert("Ha ocurrido un error. Revisa los datos y vuelve a intentarlo")
 });

 }, false);
 });
 });
 </script> -->



 */
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Scroll;
        (function(Scroll) {
            var MrScroll = (function() {
                function MrScroll() {}
                //==================================================================================================================
                //      GETTER & SETTERS
                //==================================================================================================================
                //==================================================================================================================
                //          INIT
                //==================================================================================================================
                MrScroll.init = function(__element) {
                    this._element = __element;
                    MrScroll.positionNow = $(window).scrollTop();
                };
                //==================================================================================================================
                //      PUBLIC
                //==================================================================================================================
                MrScroll.loop = function() {
                    MrScroll.delta = MrScroll._element.scrollTop() - MrScroll.positionNow;
                    MrScroll.positionNow = MrScroll._element.scrollTop();
                    if (MrScroll.delta > 0)
                        MrScroll.direction = -1;
                    else if (MrScroll.delta < 0)
                        MrScroll.direction = 1;
                    else
                        MrScroll.direction = 0;
                    //DO SCROLL
                    MrScroll.positionMomentum0 = -MrScroll.positionNow;
                    if (!cuchillo.DataHolder.DatosBasicos.isMobile) {
                        /*if(DataHolder.DatosBasicos.TOUCH_DEVICE)    MrScroll.positionMomentum1 = MrScroll.positionMomentum0;
                        else*/
                        TweenMax.to(this, 0.6, { positionMomentum1: -MrScroll.positionNow, ease: Quad.easeOut, force3D: true });
                        TweenMax.to(this, 1, { positionMomentum2: -MrScroll.positionNow, ease: Quad.easeOut, force3D: true });
                        TweenMax.to(this, 1.4, { positionMomentum3: -MrScroll.positionNow, ease: Quad.easeOut, force3D: true });
                        TweenMax.to(this, 2, { positionMomentum4: -MrScroll.positionNow, ease: Sine.easeOut, force3D: true });
                    } else {
                        MrScroll.positionMomentum1 = MrScroll.positionMomentum2 = MrScroll.positionMomentum3 = -MrScroll.positionNow;
                    }
                };
                MrScroll.doScrollTo = function(__n) {
                    this._element.scrollTo(__n, 0);
                };
                return MrScroll;
            }());
            MrScroll.delta = 0;
            MrScroll.positionNow = 0;
            MrScroll.direction = 0;
            MrScroll.positionMomentum0 = 0;
            MrScroll.positionMomentum1 = 0;
            MrScroll.positionMomentum2 = 0;
            MrScroll.positionMomentum3 = 0;
            MrScroll.positionMomentum4 = 0;
            Scroll.MrScroll = MrScroll;
        })(Scroll = cuchillo.Scroll || (cuchillo.Scroll = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            //import WinMenu   =   Windows.WinMenu;
            var Header = (function() {
                function Header() {
                    this.LIMIT_FPS = 2;
                    this.POS_Y_BG = 50;
                    this.POS_Y_HIDE = 100;
                    this._isShow = true;
                    this._fpsCont = 0;
                    var tClass = this;
                    this._container = $("#headerMain");
                    this._content = $("#headerMain .content");
                    this.btnOpen = new InterfaceItems.ToggleButtons.ToggleButton($("#btnToggle"), cuchillo.Windows.Sidemenu.getInstance().toogleState.bind(cuchillo.Windows.Sidemenu.getInstance()));
                    this.btnClose = new InterfaceItems.ToggleButtons.ToggleButton($("#btnToggleClose"), cuchillo.Windows.Sidemenu.getInstance().toogleState.bind(cuchillo.Windows.Sidemenu.getInstance()));
                    this.btnRight = new InterfaceItems.ToggleButtons.RightButton($("#btnRight"), cuchillo.Windows.Calendar.getInstance().toogleState.bind(cuchillo.Windows.Calendar.getInstance()));
                    this.btnRightClose = new InterfaceItems.ToggleButtons.RightButton($("#btnRightClose"), cuchillo.Windows.Calendar.getInstance().toogleState.bind(cuchillo.Windows.Calendar.getInstance()));
                    this.btnOpen.directShow();
                    this.btnRight.directShow();
                    this.btnClose.directShow();
                    this.btnRightClose.directShow();
                }
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                Header.getInstance = function() {
                    if (com.cuchillo.InterfaceItems.Header._instance === null) {
                        com.cuchillo.InterfaceItems.Header._instance = new com.cuchillo.InterfaceItems.Header();
                    }
                    return com.cuchillo.InterfaceItems.Header._instance;
                };
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                Header.prototype.hide = function() {
                    this._isShow = false;
                    TweenLite.to(this._container, 0.3, { opacity: 0, ease: Quad.easeOut, delay: 0, force3D: true });
                };
                Header.prototype.show = function() {
                    this._isShow = true;
                    TweenLite.set(this._container, { opacity: 1 });
                    this.btnOpen.directHide();
                    this.btnRight.directHide();
                    this.btnOpen.show();
                    this.btnRight.show();
                    //TweenLite.to(this._container, 0.3, {opacity:1, ease:Quad.easeOut, delay:0, force3D:true});
                    //TweenLite.to(this._container, 0.6, {css:{y:"0%", height:DataHolder.DatosBasicos.HEADER_HEIGHT + "px"}, ease:Power2.easeOut, delay:0, force3D:true});
                };
                Header.prototype.showBg = function() {
                    /* this._isBgShow = true;
                     TweenMax.to(this._bg, 0.3, {autoAlpha:1, ease: Quad.easeOut, delay:0, force3D:true});*/
                };
                Header.prototype.hideBg = function() {
                    /* this._isBgShow = false;
                     TweenMax.to(this._bg, 0.3, {autoAlpha:0, ease: Quad.easeOut, delay:0, force3D:true}); */
                };
                /*private goShow():void {
                    var tClass = this;
        
        
                    this._state = Header.STATE_SMALL;
                    this.btnOpen.directHide();
                    this.btnRight.directHide();
                    this.btnOpen.show();
                    this.btnRight.show();
                    TweenLite.to(this._container, 0.3, {opacity:1, ease:Quad.easeOut, delay:0, force3D:true});
                  //  TweenLite.to(this._bg, 0.4, {opacity:1, ease: Quad.easeOut, delay:0, force3D:true});
                }*/
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                /*public show() : void {
        
                }*/
                Header.prototype.resize = function() {
                    var tClass = this;
                    //this._yNormal = 50;//DataHolder.DatosBasicos.HEIGHT - DataHolder.DatosBasicos.HEADER_HEIGHT;
                    this._container.width(cuchillo.DataHolder.DatosBasicos.WIDTH_INSIDE);
                };
                Header.prototype.enable = function(__enable) {
                    if (__enable === void 0) { __enable = true; }
                };
                Header.prototype.loop = function() {
                    //PROGRESS BAR
                    var pos = cuchillo.Scroll.MrScroll.positionNow / cuchillo.DataHolder.DatosBasicos.HEIGHT_SCROLL * 100;
                    $("#mainProgress").css("width", pos + "%");
                    if (this._fpsCont < this.LIMIT_FPS) {
                        this._fpsCont += 1;
                    } else {
                        this._fpsCont = 1;
                        if (cuchillo.Scroll.MrScroll.direction < 0) {
                            if (cuchillo.Scroll.MrScroll.positionNow > this.POS_Y_HIDE && this._isShow) {
                                this.hide();
                                this.hideBg();
                            }
                        } else if (cuchillo.Scroll.MrScroll.direction > 0) {
                            if (!this._isShow) {
                                this.show();
                            }
                        }
                    }
                };
                return Header;
            }());
            Header._instance = null;
            InterfaceItems.Header = Header;
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var PageHeader;
            (function(PageHeader_1) {
                var DatosBasicos = com.cuchillo.DataHolder.DatosBasicos;
                var PageHeader = (function() {
                    function PageHeader() {
                        this._title = null;
                        this._image = null;
                        this._projectInfo = null;
                        this._sidesVisible = true;
                        this.yHide1 = 0;
                        this.yHide2 = 0;
                        var tClass = this;
                        this._container = $("#pageHeader");
                        this._sideL = $(".side-left");
                        this._sideR = $(".side-right");
                        this._titleHolder = $("#pageHeaderTitle");
                        if (DatosBasicos.isMobile) {
                            /*$(".fixed-header-h1-holder").appendTo($("#mainHolder"));
                            $(".fixed-header-h1-holder").addClass("fullHeight");*/
                            this._sideL.remove();
                            this._sideR.remove();
                        } else {
                            this._sideL.children(".side").css("width", cuchillo.DataHolder.DatosBasicos.HEIGHT);
                            this._sideR.children(".side").css("width", cuchillo.DataHolder.DatosBasicos.HEIGHT);
                            TweenLite.set(this._sideL, { css: { y: -30, opacity: 0 }, force3D: true });
                            TweenLite.set(this._sideR, { css: { y: -30, opacity: 0 }, force3D: true });
                        }
                    }
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    PageHeader.getInstance = function() {
                        if (com.cuchillo.InterfaceItems.PageHeader.PageHeader._instance === null) {
                            com.cuchillo.InterfaceItems.PageHeader.PageHeader._instance = new com.cuchillo.InterfaceItems.PageHeader.PageHeader();
                        }
                        return com.cuchillo.InterfaceItems.PageHeader.PageHeader._instance;
                    };
                    //==================================================================================================================
                    //          PRIVATE
                    //==================================================================================================================
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    PageHeader.prototype.checkInfo = function() {
                        var textTitle = $(".info-header-h1").html();
                        var textL = $(".info-sideL").html();
                        var textR = $(".info-sideR").html();
                        //SETUP TITLE
                        if (textTitle === undefined) {} else {
                            switch ($(".info-header-h1").attr("data-type-title")) {
                                case "rotated":
                                    this._title = new PageHeader_1.RotatedTitle(this._titleHolder, textTitle);
                                    break;
                                case "mask_lines":
                                    this._title = new PageHeader_1.HeaderLineTitle(this._titleHolder, textTitle);
                                    break;
                                case "mask_lines_no_line":
                                    this._title = new PageHeader_1.MaskLinesTitle(this._titleHolder, textTitle);
                                    break;
                                case "lines":
                                    this._title = new PageHeader_1.LinesTitle(this._titleHolder, textTitle);
                                    break;
                            }
                            $(".info-header-h1").remove();
                        }
                        //SETUP SIDES
                        if (textL === undefined || DatosBasicos.isMobile) {} else {
                            TweenLite.set(this._sideL, { css: { y: 30, opacity: 0 }, force3D: true });
                            TweenLite.set(this._sideR, { css: { y: 30, opacity: 0 }, force3D: true });
                            $(".info-sideL").appendTo(this._sideL);
                            $(".info-sideR").appendTo(this._sideR);
                        }
                        //SETUP IMAGE
                        if ($(".info-image").length > 0) {
                            if ($(".fixed-header-line").length > 0) {
                                this._image = new PageHeader_1.HeaderImageWithLine($(".info-image"));
                            } else {
                                this._image = new PageHeader_1.HeaderImage($(".info-image"));
                            }
                        }
                        //SETUP INFO
                        if ($(".info-project").length > 0) {
                            this._projectInfo = new PageHeader_1.HeaderInfoProject($(".info-project"));
                        }
                    };
                    PageHeader.prototype.show = function() {
                        if (this._title)
                            this._title.show();
                        if (this._projectInfo) {
                            this._idTimeOut = setTimeout(this._projectInfo.show.bind(this._projectInfo), 500);
                        }
                    };
                    PageHeader.prototype.hide = function() {
                        if (!DatosBasicos.isMobile) {
                            TweenLite.to(this._sideL, 0.4, { css: { y: -30, opacity: 0 }, ease: Quad.easeIn, delay: 0, force3D: true });
                            TweenLite.to(this._sideR, 0.4, { css: { y: -30, opacity: 0 }, ease: Quad.easeIn, delay: 0, force3D: true });
                        }
                    };
                    PageHeader.prototype.dispose = function() {
                        if (this._title)
                            this._title.dispose();
                        if (this._image)
                            this._image.dispose();
                        if (this._projectInfo)
                            this._projectInfo.dispose();
                        if (this._idTimeOut != null)
                            clearTimeout(this._idTimeOut);
                        if (!DatosBasicos.isMobile) {
                            this._sideL.empty();
                            this._sideR.empty();
                        }
                        this._idTimeOut = null;
                        this._title = null;
                        this._image = null;
                        this._projectInfo = null;
                    };
                    PageHeader.prototype.resize = function() {
                        var tClass = this;
                        if (this._title)
                            this._title.resize();
                        if (this._image)
                            this._image.resize();
                        if (!DatosBasicos.isMobile) {
                            this._sideL.children(".side").css("width", cuchillo.DataHolder.DatosBasicos.HEIGHT);
                            this._sideR.children(".side").css("width", cuchillo.DataHolder.DatosBasicos.HEIGHT);
                            this._sideL.css("left", Math.max(((DatosBasicos.WIDTH_INSIDE - 1700) / 2), 5) + "px");
                            this._sideR.css("right", Math.max(((DatosBasicos.WIDTH_INSIDE - 1700) / 2), 5) + "px");
                        }
                        this.yHide1 = -cuchillo.DataHolder.DatosBasicos.HEIGHT / 2;
                        this.yHide2 = -(cuchillo.DataHolder.DatosBasicos.HEIGHT_SCROLL - cuchillo.DataHolder.DatosBasicos.HEIGHT);
                    };
                    PageHeader.prototype.enable = function(__enable) {
                        if (__enable === void 0) { __enable = true; }
                    };
                    PageHeader.prototype.loop = function() {
                        if (this._title /* && !DataHolder.DatosBasicos.isMobile*/ )
                            this._title.loop();
                        if (this._image)
                            this._image.loop();
                        if (this._projectInfo)
                            this._projectInfo.loop();
                        if (!cuchillo.DataHolder.DatosBasicos.isMobile) {
                            if (cuchillo.Scroll.MrScroll.positionMomentum1 < this.yHide1 && cuchillo.Scroll.MrScroll.positionMomentum1 > this.yHide2) {
                                TweenLite.to(this._sideL, 0.6, { css: { y: 0, opacity: 1 }, ease: Quad.easeOut, force3D: true });
                                TweenLite.to(this._sideR, 0.6, { css: { y: 0, opacity: 1 }, ease: Quad.easeOut, force3D: true });
                                this._sidesVisible = true;
                            } else if (cuchillo.Scroll.MrScroll.positionMomentum1 >= this.yHide1 && cuchillo.Scroll.MrScroll.positionMomentum1 > this.yHide2) {
                                TweenLite.to(this._sideL, 0.6, { css: { y: 30, opacity: 0 }, ease: Quad.easeOut, force3D: true });
                                TweenLite.to(this._sideR, 0.6, { css: { y: 30, opacity: 0 }, ease: Quad.easeOut, force3D: true });
                                this._sidesVisible = false;
                            } else if (cuchillo.Scroll.MrScroll.positionMomentum1 < this.yHide2) {
                                TweenLite.to(this._sideL, 0.6, { css: { y: -30, opacity: 0 }, ease: Quad.easeOut, force3D: true });
                                TweenLite.to(this._sideR, 0.6, { css: { y: -30, opacity: 0 }, ease: Quad.easeOut, force3D: true });
                                this._sidesVisible = false;
                            }
                        }
                    };
                    return PageHeader;
                }());
                PageHeader._instance = null;
                PageHeader_1.PageHeader = PageHeader;
            })(PageHeader = InterfaceItems.PageHeader || (InterfaceItems.PageHeader = {}));
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var PageHeader;
            (function(PageHeader) {
                var HeaderItem = (function() {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    function HeaderItem() {}
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    HeaderItem.prototype.show = function() {};
                    HeaderItem.prototype.hide = function() {};
                    HeaderItem.prototype.loop = function() {};
                    HeaderItem.prototype.dispose = function() {};
                    HeaderItem.prototype.resize = function() {};
                    return HeaderItem;
                }());
                PageHeader.HeaderItem = HeaderItem;
            })(PageHeader = InterfaceItems.PageHeader || (InterfaceItems.PageHeader = {}));
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var PageHeader;
            (function(PageHeader) {
                var RotatedTitle = (function(_super) {
                    __extends(RotatedTitle, _super);
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    function RotatedTitle(__container, __text) {
                        var _this = _super.call(this) || this;
                        _this._isVisible = true;
                        _this._yHide = 0;
                        _this._container = __container;
                        _this._h1 = $("<h1 class='rotated-h1'>" + __text + "</h1>");
                        _this._container.append(_this._h1);
                        _this._item = new InterfaceItems.RotatedItem(_this._h1);
                        _this.setup();
                        return _this;
                    }
                    //==================================================================================================================
                    //          PRIVATE
                    //==================================================================================================================
                    RotatedTitle.prototype.setup = function() {
                        var tClass = this;
                        this._item.beforeShow();
                    };
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    RotatedTitle.prototype.show = function() {
                        this._item.show();
                    };
                    RotatedTitle.prototype.hide = function() {};
                    RotatedTitle.prototype.dispose = function() {
                        this._item.dispose();
                        this._item = null;
                        this._container.empty();
                        this._container = null;
                        this._h1 = null;
                        this._isVisible = null;
                        this._yHide = null;
                    };
                    RotatedTitle.prototype.resize = function() {
                        this._item.resize();
                        this._yHide = (cuchillo.DataHolder.DatosBasicos.HEIGHT - this._h1.outerHeight()) / 2;
                    };
                    RotatedTitle.prototype.loop = function() {
                        if (cuchillo.Scroll.MrScroll.positionNow < this._yHide && !this._isVisible) {
                            TweenLite.to(this._h1, 0.4, { css: { opacity: 1 }, ease: Quad.easeOut, force3D: true });
                            this._isVisible = true;
                        } else if (cuchillo.Scroll.MrScroll.positionNow >= this._yHide && this._isVisible) {
                            TweenLite.to(this._h1, 0.4, { css: { opacity: 0 }, ease: Quad.easeOut, force3D: true });
                            this._isVisible = false;
                        }
                    };
                    return RotatedTitle;
                }(PageHeader.HeaderItem));
                PageHeader.RotatedTitle = RotatedTitle;
            })(PageHeader = InterfaceItems.PageHeader || (InterfaceItems.PageHeader = {}));
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var PageHeader;
            (function(PageHeader) {
                var LinesTitle = (function(_super) {
                    __extends(LinesTitle, _super);
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    function LinesTitle(__container, __text) {
                        var _this = _super.call(this) || this;
                        _this._isVisible = true;
                        _this._yHide = 0;
                        _this._container = __container;
                        _this._h1 = $("<h1 class='page-title-lines'>_" + __text.split(" ").join("_") + "_</h1>");
                        _this._container.append(_this._h1);
                        TweenLite.set(_this._h1, { css: { y: 200, opacity: 0 }, force3D: true });
                        return _this;
                    }
                    //==================================================================================================================
                    //          PRIVATE
                    //==================================================================================================================
                    LinesTitle.prototype.setup = function() {
                        var tClass = this;
                    };
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    LinesTitle.prototype.show = function() {
                        TweenLite.to(this._h1, 1, { css: { y: 0, opacity: 1 }, ease: Quint.easeOut, force3D: true });
                    };
                    LinesTitle.prototype.hide = function() {};
                    LinesTitle.prototype.dispose = function() {
                        this._container.empty();
                        this._container = null;
                        this._h1 = null;
                        this._isVisible = null;
                        this._yHide = null;
                    };
                    LinesTitle.prototype.resize = function() {
                        this._yHide = (cuchillo.DataHolder.DatosBasicos.HEIGHT) / 2 - this._h1.outerHeight() * 2;
                    };
                    LinesTitle.prototype.loop = function() {
                        if (cuchillo.Scroll.MrScroll.positionNow < this._yHide && !this._isVisible) {
                            TweenLite.to(this._h1, 0.4, { css: { opacity: 1 }, ease: Quad.easeOut, force3D: true });
                            this._isVisible = true;
                        } else if (cuchillo.Scroll.MrScroll.positionNow >= this._yHide && this._isVisible) {
                            TweenLite.to(this._h1, 0.4, { css: { opacity: 0 }, ease: Quad.easeOut, force3D: true });
                            this._isVisible = false;
                        }
                    };
                    return LinesTitle;
                }(PageHeader.HeaderItem));
                PageHeader.LinesTitle = LinesTitle;
            })(PageHeader = InterfaceItems.PageHeader || (InterfaceItems.PageHeader = {}));
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var PageHeader;
            (function(PageHeader) {
                var MaskLinesTitle = (function(_super) {
                    __extends(MaskLinesTitle, _super);
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    function MaskLinesTitle(__container, __text) {
                        var _this = _super.call(this) || this;
                        _this._items = [];
                        _this._isShow = false;
                        _this._speed1 = 0;
                        _this._speed2 = 0;
                        _this._len = 0;
                        _this._container = __container;
                        _this._header = $("<header class='header-line container-sm-padding'>");
                        _this._h1 = $("<h1 id='mask-lines-title'>" + __text + "</h1>");
                        _this._container.append(_this._header);
                        _this._header.append(_this._h1);
                        _this._header.css("min-height", "0");
                        _this.setup();
                        return _this;
                    }
                    //==================================================================================================================
                    //          PRIVATE
                    //==================================================================================================================
                    MaskLinesTitle.prototype.setup = function() {
                        var tClass = this;
                        this._splitText = new SplitText("#mask-lines-title", { type: "lines", linesClass: "__l" });
                        this._splitText = null;
                        $(".__l").each(function() {
                            var __i = $("<div>" + $(this).html() + "</div>");
                            $(this).empty();
                            tClass._items.push(__i);
                            $(this).append(__i);
                            TweenMax.set(__i, { y: "100%" });
                        });
                        this._len = this._items.length;
                    };
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    MaskLinesTitle.prototype.show = function() {
                        var tClass = this;
                        for (var i = 0; i < this._len; i++) {
                            TweenMax.to(this._items[i], 1, { y: "0%", ease: Expo.easeOut, force3D: true });
                        }
                    };
                    MaskLinesTitle.prototype.hide = function() {
                        this._isShow = false;
                        for (var i = 0; i < this._len; i++) {
                            TweenMax.to(this._items[i], 0.4, { y: "-100%", ease: Quad.easeIn, force3D: true });
                        }
                    };
                    MaskLinesTitle.prototype.dispose = function() {
                        this._container.empty();
                        this._h1 = null;
                        this._header = null;
                        this._items.length = 0;
                        this._container = null;
                        this._speed1 = null;
                        this._speed2 = null;
                    };
                    MaskLinesTitle.prototype.loop = function() {
                        this._speed1 = cuchillo.Scroll.MrScroll.positionMomentum2;
                        if (cuchillo.DataHolder.DatosBasicos.isMobile) {
                            TweenMax.set(this._container, { y: this._speed1, force3D: true });
                        } else {
                            for (var i = 0; i < this._len; i++) {
                                //if(Scroll.MrScroll.positionMomentum2 <=0) {
                                this._speed2 = (cuchillo.Scroll.MrScroll.positionMomentum2) * (0.1 * i);
                                this._items[this._len - (i + 1)].parent().css({
                                    transform: "translate3d(0," + this._speed2 + "px,0)"
                                });
                            }
                            TweenMax.set(this._h1, { y: this._speed1, force3D: true });
                        }
                    };
                    return MaskLinesTitle;
                }(PageHeader.HeaderItem));
                PageHeader.MaskLinesTitle = MaskLinesTitle;
            })(PageHeader = InterfaceItems.PageHeader || (InterfaceItems.PageHeader = {}));
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var PageHeader;
            (function(PageHeader) {
                var HeaderLineTitle = (function(_super) {
                    __extends(HeaderLineTitle, _super);
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    function HeaderLineTitle(__container, __text) {
                        var _this = _super.call(this) || this;
                        _this._items = [];
                        _this._isShow = false;
                        _this._speed1 = 0;
                        _this._speed2 = 0;
                        _this._len = 0;
                        _this._container = __container;
                        _this._header = $("<header class='header-line container-sm-padding'>");
                        _this._h1 = $("<h1 id='mask-lines-title'>" + __text + "</h1>");
                        _this._container.append(_this._header);
                        _this._header.append(_this._h1);
                        _this._header.append($('<div id="lineHolder" class="line-holder"><div class="diagonal-line"><svg width="100%" height="100%"><line class="" id="line1" x1="5%" y1="95%" x2="5%" y2="95%"></line><line class="stroke-assertive" id="line2" x1="5%" y1="95%" x2="5%" y2="95%"></line></svg></div></div>'));
                        _this._line1 = $("#line1");
                        _this._line2 = $("#line2");
                        _this._lineHolder = $("#lineHolder");
                        _this.setup();
                        return _this;
                    }
                    //==================================================================================================================
                    //          PRIVATE
                    //==================================================================================================================
                    HeaderLineTitle.prototype.setup = function() {
                        var tClass = this;
                        this._splitText = new SplitText("#mask-lines-title", { type: "lines", linesClass: "__l" });
                        this._splitText = null;
                        $(".__l").each(function() {
                            var __i = $("<div>" + $(this).html() + "</div>");
                            $(this).empty();
                            tClass._items.push(__i);
                            $(this).append(__i);
                            TweenMax.set(__i, { y: "100%" });
                        });
                        this._len = this._items.length;
                    };
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    HeaderLineTitle.prototype.show = function() {
                        var tClass = this;
                        this._timelineShow = new TimelineMax();
                        this._timelineShow.clear();
                        this._timelineShow.pause();
                        for (var i = 0; i < this._len; i++) {
                            this._timelineShow.to(this._items[i], 1, { y: "0%", ease: Expo.easeOut, force3D: true }, .5);
                        }
                        this._timelineShow.to(this._line1, 0.4, { attr: { x2: "60%", y2: "40%" }, ease: Expo.easeInOut, force3D: true }, 0.);
                        this._timelineShow.to(this._line2, 0.4, { attr: { x2: "60%", y2: "40%" }, ease: Expo.easeInOut, force3D: true }, 0.);
                        this._timelineShow.to(this._line2, 0.3, { attr: { x1: "40%", y1: "60%" }, ease: Expo.easeOut, force3D: true }, 0.4);
                        this._timelineShow.to(this._line1, 0.6, { attr: { x1: "40%", y1: "60%" }, ease: Expo.easeOut, force3D: true }, 0.5);
                        this._timelineShow.play();
                    };
                    HeaderLineTitle.prototype.hide = function() {
                        this._isShow = false;
                        for (var i = 0; i < this._len; i++) {
                            TweenMax.to(this._items[i], 0.4, { y: "-100%", ease: Quad.easeIn, force3D: true });
                        }
                    };
                    HeaderLineTitle.prototype.dispose = function() {
                        this._container.empty();
                        this._h1 = null;
                        this._header = null;
                        this._line1 = null;
                        this._line2 = null;
                        this._lineHolder = null;
                        this._items.length = 0;
                        this._container = null;
                        this._timelineShow.kill();
                        this._timelineShow = null;
                        this._speed1 = null;
                        this._speed2 = null;
                    };
                    HeaderLineTitle.prototype.loop = function() {
                        this._speed1 = cuchillo.Scroll.MrScroll.positionMomentum2;
                        /*if(DataHolder.DatosBasicos.isMobile) {
            
                            TweenMax.set(this._container, {y: this._speed1, force3D: true});
            
                        } else {*/
                        for (var i = 0; i < this._len; i++) {
                            this._speed2 = (cuchillo.Scroll.MrScroll.positionMomentum2) * (0.1 * i);
                            this._items[this._len - (i + 1)].parent().css({
                                "-webkit-transform": "translate3d(0," + this._speed2 + "px,0)",
                                "-ms-transform": "translate3d(0," + this._speed2 + "px,0)",
                                "transform": "translate3d(0," + this._speed2 + "px,0)"
                            });
                        }
                        this._speed2 = cuchillo.Scroll.MrScroll.positionMomentum3;
                        TweenMax.set(this._h1, { y: this._speed1, force3D: true });
                        TweenMax.set(this._lineHolder, { y: this._speed2, force3D: true });
                    };
                    return HeaderLineTitle;
                }(PageHeader.HeaderItem));
                PageHeader.HeaderLineTitle = HeaderLineTitle;
            })(PageHeader = InterfaceItems.PageHeader || (InterfaceItems.PageHeader = {}));
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var PageHeader;
            (function(PageHeader) {
                var HeaderImage = (function(_super) {
                    __extends(HeaderImage, _super);
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    function HeaderImage(__item) {
                        var _this = _super.call(this) || this;
                        _this.MAX_WIDTH = 600;
                        _this.PADDING = 120;
                        _this._speed = 0;
                        _this._width = 0;
                        _this._height = 0;
                        _this._container = $("#fixed-header-image-holder");
                        _this._mask = $("<div class='fixed-header-image-mascara'/>");
                        _this._item = __item;
                        _this._item.appendTo(_this._container);
                        _this._mask.appendTo(_this._container);
                        _this._width = Number(_this._item.children("img").attr("width"));
                        _this._height = Number(_this._item.children("img").attr("height"));
                        _this.setup();
                        return _this;
                    }
                    //==================================================================================================================
                    //          PRIVATE
                    //==================================================================================================================
                    HeaderImage.prototype.setup = function() {
                        var tClass = this;
                        this.resize();
                    };
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    HeaderImage.prototype.show = function() {
                        this._item.show();
                    };
                    HeaderImage.prototype.hide = function() {};
                    HeaderImage.prototype.dispose = function() {
                        this._item.remove();
                        this._item = null;
                        this._container.empty();
                        this._container = null;
                        this._mask.empty();
                        this._mask = null;
                    };
                    HeaderImage.prototype.resize = function() {
                        cuchillo.Utils.Functions.fitInside(this._container, Math.min(this.MAX_WIDTH, cuchillo.DataHolder.DatosBasicos.WIDTH_INSIDE - this.PADDING), cuchillo.DataHolder.DatosBasicos.HEIGHT - this.PADDING, this._width, this._height, cuchillo.DataHolder.DatosBasicos.WIDTH_INSIDE, cuchillo.DataHolder.DatosBasicos.HEIGHT);
                        this._mask.css("top", this._container.height());
                    };
                    HeaderImage.prototype.loop = function() {
                        this._speed = cuchillo.Scroll.MrScroll.positionMomentum1 * 0.3;
                        if (-this._mask.height() > this._speed) {
                            this._speed = -this._mask.height() + 10;
                        }
                        this._mask.css({
                            transform: "translate3d(0," + this._speed + "px,0)",
                            "-webkit-transform": "translate3d(0," + this._speed + "px,0)",
                            "-ms-transform": "translate3d(0," + this._speed + "px,0)"
                        });
                    };
                    return HeaderImage;
                }(PageHeader.HeaderItem));
                PageHeader.HeaderImage = HeaderImage;
            })(PageHeader = InterfaceItems.PageHeader || (InterfaceItems.PageHeader = {}));
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var PageHeader;
            (function(PageHeader) {
                var HeaderImageWithLine = (function(_super) {
                    __extends(HeaderImageWithLine, _super);
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    function HeaderImageWithLine(__item) {
                        var _this = _super.call(this) || this;
                        _this.MAX_WIDTH = 600;
                        _this.PADDING = 120;
                        _this._line = null;
                        _this._speed = 0;
                        _this._width = 0;
                        _this._height = 0;
                        _this._container = $("#fixed-header-image-holder");
                        _this._mask = $("<div class='fixed-header-image-mascara'/>");
                        _this._item = __item;
                        _this._item.appendTo(_this._container);
                        _this._mask.appendTo(_this._container);
                        if ($(".fixed-header-line").length > 0) {
                            _this._line = $(".fixed-header-line");
                            _this._line.appendTo(_this._container);
                        };
                        _this._width = Number(_this._item.children("img").attr("width"));
                        _this._height = Number(_this._item.children("img").attr("height"));
                        _this.setup();
                        return _this;
                    }
                    //==================================================================================================================
                    //          PRIVATE
                    //==================================================================================================================
                    HeaderImageWithLine.prototype.setup = function() {
                        var tClass = this;
                        this.resize();
                    };
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    HeaderImageWithLine.prototype.show = function() {
                        this._item.show();
                    };
                    HeaderImageWithLine.prototype.hide = function() {};
                    HeaderImageWithLine.prototype.dispose = function() {
                        this._item.remove();
                        this._item = null;
                        this._container.empty();
                        this._container = null;
                        this._mask.empty();
                        this._mask = null;
                        this._line = null;
                    };
                    HeaderImageWithLine.prototype.resize = function() {
                        cuchillo.Utils.Functions.fitInside(this._container, Math.min(this.MAX_WIDTH, cuchillo.DataHolder.DatosBasicos.WIDTH_INSIDE - this.PADDING), cuchillo.DataHolder.DatosBasicos.HEIGHT - this.PADDING, this._width, this._height, cuchillo.DataHolder.DatosBasicos.WIDTH_INSIDE, cuchillo.DataHolder.DatosBasicos.HEIGHT);
                        this._mask.css("top", this._container.height());
                    };
                    HeaderImageWithLine.prototype.loop = function() {
                        this._speed = cuchillo.Scroll.MrScroll.positionMomentum1 * 0.3;
                        if (-this._mask.height() > this._speed) {
                            this._speed = -this._mask.height() + 10;
                        } else {
                            TweenMax.set(this._line, { y: cuchillo.Scroll.MrScroll.positionMomentum3, force3D: true });
                        }
                        this._mask.css({
                            transform: "translate3d(0," + this._speed + "px,0)",
                            "-webkit-transform": "translate3d(0," + this._speed + "px,0)",
                            "-ms-transform": "translate3d(0," + this._speed + "px,0)"
                        });
                    };
                    return HeaderImageWithLine;
                }(PageHeader.HeaderItem));
                PageHeader.HeaderImageWithLine = HeaderImageWithLine;
            })(PageHeader = InterfaceItems.PageHeader || (InterfaceItems.PageHeader = {}));
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var PageHeader;
            (function(PageHeader) {
                var HeaderInfoProject = (function() {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    function HeaderInfoProject(__item) {
                        this._strTitle = "";
                        this._items = [];
                        this._isShow = true;
                        this._yHide = 0;
                        this._speed1 = 0;
                        this._speed2 = 0;
                        this._container = $("#pageHeaderInfo");
                        this._item = __item;
                        this._item.appendTo(this._container);
                        this._strTitle = $("#fixed-header-info-title").html();
                        this.setup();
                    }
                    //==================================================================================================================
                    //          PRIVATE
                    //==================================================================================================================
                    HeaderInfoProject.prototype.setup = function() {
                        var tClass = this;
                        this.splitText = new SplitText("#fixed-header-info-title", { type: "lines", linesClass: "__l" });
                        $(".__l").each(function() {
                            var __i = $("<div>" + $(this).html() + "</div>");
                            $(this).empty();
                            tClass._items.push(__i);
                            $(this).append(__i);
                            TweenMax.set(__i, { y: "100%" });
                        });
                        $("#fixed-header-info-title").css("max-width", "100%");
                        this._yHide = 100; //(DataHolder.DatosBasicos.HEIGHT-this._item.outerHeight()-100)/2;
                    };
                    HeaderInfoProject.prototype.reset = function() {
                        this.splitText.revert();
                        $("#fixed-header-info-title").empty();
                        $("#fixed-header-info-title").html(this._strTitle);
                        this._items = [];
                    };
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    HeaderInfoProject.prototype.show = function() {
                        var tClass = this;
                        this._isShow = true;
                        for (var i = 0, j = this._items.length; i < j; i++) {
                            TweenMax.to(this._items[i], 1, { y: "0%", ease: Expo.easeOut, force3D: true });
                        }
                    };
                    HeaderInfoProject.prototype.hide = function() {
                        this._isShow = false;
                        for (var i = 0, j = this._items.length; i < j; i++) {
                            TweenMax.to(this._items[i], 0.8, { y: "-130%", ease: Quad.easeOut, force3D: true });
                        }
                    };
                    HeaderInfoProject.prototype.dispose = function() {
                        this._item.remove();
                        this._item = null;
                        this._container.empty();
                        this._container = null;
                    };
                    HeaderInfoProject.prototype.resize = function() {
                        this._yHide = (cuchillo.DataHolder.DatosBasicos.HEIGHT - this._item.outerHeight()) / 2;
                    };
                    HeaderInfoProject.prototype.loop = function() {
                        if (cuchillo.Scroll.MrScroll.positionNow < this._yHide && !this._isShow) {
                            this.show();
                        } else if (cuchillo.Scroll.MrScroll.positionNow >= this._yHide && this._isShow) {
                            this.hide();
                        }
                        /* if(this._isShow) {
             
             
                             this._speed1 = Scroll.MrScroll.positionMomentum1 * 0.3;
                             this._speed2 = Scroll.MrScroll.positionMomentum2 * 0.1;
             
                             for (var i:number = 0, j = this._items.length; i < j; i++) {
             
                                 this._items[i].css({
                                     transform: "translate3d(0," + this._speed1 + "px,0)",
                                     "-webkit-transform": "translate3d(0," + this._speed1 + "px,0)",
                                     "-moz-transform": "translate3d(0," + this._speed1 + "px,0)",
                                     "-ms-transform": "translate3d(0," + this._speed1 + "px,0)"
                                 });
             
                             }*/
                        /*    $("#fixed-header-info-title").css({
                                transform: "translate3d(0," + this._speed1 + "px,0)",
                                "-webkit-transform": "translate3d(0," + this._speed1 + "px,0)",
                                "-moz-transform": "translate3d(0," + this._speed1 + "px,0)",
                                "-o-transform": "translate3d(0," + this._speed1 + "px,0)",
                                "-ms-transform": "translate3d(0," + this._speed1 + "px,0)"
                            });*/
                        //  }
                        //}
                    };
                    return HeaderInfoProject;
                }());
                PageHeader.HeaderInfoProject = HeaderInfoProject;
            })(PageHeader = InterfaceItems.PageHeader || (InterfaceItems.PageHeader = {}));
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var Slider = (function() {
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                // new CustomButton("ico_powerdream.png", 160, 160, 0xFFFFFF, 1, 0x67666b, 1, 1.5);
                function Slider(__slider) {
                    this._selector = ".__slide";
                    this._actual = 0;
                    this._nItems = 0;
                    this._nSlides = 0;
                    this.duration = 4000;
                    this._width = 0;
                    this._slideWidth = 0;
                    this._slideHeight = 0;
                    this._itemWidth = 0;
                    this._itemHeight = 0;
                    this._aspect = 0;
                    this._idTimeResize = 0;
                    var tClass = this;
                    this._slider = __slider;
                    this._holder = this._slider.find(".__holder");
                    this._nItems = this._holder.find(this._selector).length;
                    this.id = "__" + new Date().getTime();
                    this._holder = this._holder.attr('id', this.id);
                    this.id = "#" + this.id;
                    this.setup();
                }
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                Slider.prototype.setup = function() {
                    var tClass = this;
                    this.disposeDrag();
                    this._width = this._slider.outerWidth();
                    this._slider.find(this._selector).each(function() {
                        tClass._itemWidth = Math.max(tClass._itemWidth, $(this).outerWidth());
                        tClass._itemHeight = Math.max(tClass._itemHeight, $(this).outerHeight());
                        var aspectratio = isNaN(Number($(this).attr("data-aspect"))) ? 0 : Number($(this).attr("data-aspect"));
                        tClass._aspect = Math.max(tClass._aspect, aspectratio);
                    });
                    switch (this._slider.attr("data-slide-width")) {
                        case "auto":
                            var nS = Math.floor(this._width / this._itemWidth);
                            this._slideWidth = this._itemWidth * nS;
                            this._nSlides = Math.ceil(this._nItems * this._itemWidth / this._slideWidth);
                            this._slider.find(this._selector).css("width", this._itemWidth + "px");
                            this._slider.find(this._selector).css("height", this._itemHeight + "px");
                            break;
                        case "full":
                            this._nSlides = this._nItems;
                            this._slideWidth =
                                this._itemWidth =
                                this._width;
                            this._slideHeight = Math.max(this._itemHeight, this._slideWidth * tClass._aspect);
                            this._slider.find(this._selector).css({
                                "width": this._slideWidth + "px",
                                "height": this._slideHeight + "px"
                            });
                            break;
                        default:
                            this._nSlides = this._nItems;
                            this._slideWidth =
                                this._itemWidth =
                                this._width;
                            this._slideHeight = Math.max(this._itemHeight, this._slideWidth * tClass._aspect);
                            this._slider.find(this._selector).css({
                                "width": this._slideWidth + "px",
                                "height": this._slideHeight + "px"
                            });
                            break;
                    }
                    this._holder.css({
                        "width": Number(this._nItems * this._itemWidth) + "px"
                    });
                    if (this._nSlides > 1) {
                        var __w = this._holder.outerWidth() - this._slider.outerWidth();
                        Draggable.create(this.id, {
                            type: "x",
                            edgeResistance: 0.5,
                            bounds: {
                                top: 0,
                                left: -__w,
                                width: this._holder.outerWidth() + __w,
                                height: this._holder.outerHeight()
                            },
                            throwProps: true,
                            foce3D: true,
                            snap: {
                                x: function(endValue) {
                                    var end = Math.round(endValue / tClass._slideWidth) * tClass._slideWidth;
                                    if (end > 0)
                                        tClass._actual = 0;
                                    else if (end <= -(tClass._itemWidth * tClass._nItems))
                                        tClass._actual = tClass._nSlides - 1;
                                    else
                                        tClass._actual = (Math.round(end / tClass._slideWidth) * -1);
                                    tClass.updateSelectors();
                                    return end;
                                },
                            }
                        });
                        if (this._slider.find(".__btnL").length > 0) {
                            this.disposeButtons();
                            this._slider.find(".__btnL").css("display", "block");
                            this._slider.find(".__btnR").css("display", "block");
                            this._slider.find(".__btnL").click(function(e) {
                                tClass.moveL();
                            });
                            this._slider.find(".__btnR").click(function(e) {
                                tClass.moveR();
                            });
                        }
                        if (this._slider.find(".__selectors").length > 0) {
                            this.disposeSelectors();
                            this._slider.find(".__selectors").css("display", "block");
                            for (var i = 0; i < this._nSlides; i++) {
                                this._slider.find(".__selectors").append("<button></button>");
                            }
                            this._slider.find(".__selectors button").click(function() {
                                tClass.moveTo($(this).index());
                            });
                            this.updateSelectors();
                        }
                    } else {
                        if (this._slider.find(".__btnL").length > 0) {
                            this._slider.find(".__btnL").css("display", "none");
                            this._slider.find(".__btnR").css("display", "none");
                        }
                        if (this._slider.find(".__selectors").length > 0) {
                            this._slider.find(".__selectors").css("display", "none");
                        }
                    }
                };
                Slider.prototype.moveTo = function(__index) {
                    this._actual = __index;
                    this.move();
                };
                Slider.prototype.moveR = function() {
                    if (this._actual + 1 < this._nSlides) {
                        this._actual++;
                        this.move();
                    }
                };
                Slider.prototype.moveL = function() {
                    if (this._actual - 1 >= 0) {
                        this._actual--;
                        this.move();
                    }
                };
                Slider.prototype.move = function() {
                    var nIr = Math.max(-this._slideWidth * this._actual, this._slider.outerWidth() - this._holder.outerWidth());
                    TweenLite.to(this._holder, 0.8, { x: nIr + "px", ease: Expo.easeOut, force3D: true });
                    this.updateSelectors();
                };
                Slider.prototype.updateSelectors = function() {
                    this._slider.find(".__selectors button").removeClass("active");
                    this._slider.find(".__selectors button").eq(this._actual).addClass("active");
                };
                Slider.prototype.directShow = function(__direction) {
                    //clearTimeout(this._idInterval);
                    this.show(__direction);
                };
                Slider.prototype.show = function(__direction) {
                    if (__direction === void 0) { __direction = 1; }
                };
                Slider.prototype.showEnded = function() {};
                Slider.prototype.disposeSelectors = function() {
                    if (this._slider.find(".__selectors").length > 0) {
                        this._slider.find(".__selectors button").off('click');
                        this._slider.find(".__selectors").empty();
                    }
                };
                Slider.prototype.disposeButtons = function() {
                    if (this._slider.find(".__btnL").length > 0) {
                        this._slider.find(".__btnL").off('click');
                        this._slider.find(".__btnR").off('click');
                    }
                };
                Slider.prototype.disposeDrag = function() {
                    if (this._nSlides > 1) {
                        Draggable.get(this.id).kill();
                    }
                };
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                Slider.prototype.resize = function() {
                    var tClass = this;
                    clearTimeout(this._idTimeResize);
                    this._idTimeResize = setTimeout(function() {
                        tClass._slider.find(tClass._selector).removeAttr("style");
                        tClass._holder.removeAttr("style");
                        TweenLite.set(tClass._holder, { x: "0px", force3D: true });
                        tClass._itemWidth = 0;
                        tClass._itemHeight = 0;
                        tClass._slideWidth = 0;
                        tClass._slideHeight = 0;
                        tClass._actual = 0;
                        tClass.setup();
                    }, 100);
                };
                Slider.prototype.dispose = function() {
                    this.disposeDrag();
                    this.disposeButtons();
                    this.disposeSelectors();
                    this._slider = null;
                    this._holder = null;
                };
                return Slider;
            }());
            InterfaceItems.Slider = Slider;
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            //import WinMenu   =   Windows.WinMenu;
            var Footer = (function() {
                function Footer() {}
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                Footer.getInstance = function() {
                    if (com.cuchillo.InterfaceItems.Footer._instance === null) {
                        com.cuchillo.InterfaceItems.Footer._instance = new com.cuchillo.InterfaceItems.Footer();
                    }
                    return com.cuchillo.InterfaceItems.Footer._instance;
                };
                return Footer;
            }());
            Footer._instance = null;
            InterfaceItems.Footer = Footer;
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var PreloadBar = (function() {
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function PreloadBar() {
                    this._progressReal = 0;
                    this._progress = 0;
                    this._acumulado = 0;
                    this._limit = 100;
                    if (com.cuchillo.InterfaceItems.PreloadBar._instance) {
                        throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
                    }
                    this.container = $("#mainLoader");
                }
                Object.defineProperty(PreloadBar.prototype, "doProgress", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() { return this._progress; },
                    set: function(__n) {
                        this._progress = __n;
                        if (this._progressReal == 100 && this._progress == this._limit + this._acumulado)
                            this.progressComplete();
                    },
                    enumerable: true,
                    configurable: true
                });
                PreloadBar.getInstance = function() {
                    if (com.cuchillo.InterfaceItems.PreloadBar._instance === null) {
                        com.cuchillo.InterfaceItems.PreloadBar._instance = new com.cuchillo.InterfaceItems.PreloadBar();
                    }
                    return com.cuchillo.InterfaceItems.PreloadBar._instance;
                };
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                PreloadBar.prototype.progress = function(__n) {
                    this._progressReal = __n;
                    this.doProgress = this._acumulado + (__n * this._limit / 100);
                };
                PreloadBar.prototype.progressComplete = function() {
                    var tClass = this;
                    switch (this._typeLoader) {
                        case PreloadBar.FONTS:
                            cuchillo.Loaders.FontLoader.end();
                            break;
                        case PreloadBar.PIXI:
                            cuchillo.Loaders.PixiPreloader.end();
                            break;
                        case PreloadBar.FILES:
                            cuchillo.Loaders.Preloader.end();
                            break;
                    }
                };
                PreloadBar.prototype.show = function(__typeLoader, __limit) {
                    if (__limit === void 0) { __limit = 100; }
                    this._typeLoader = __typeLoader;
                    this._limit = __limit;
                    this._progressReal = 0;
                    if (this._progress === 0) {
                        this._acumulado = 0;
                        this.doProgress = 0;
                        this.showFirst();
                    } else if (this._progress < 100) {
                        this._acumulado = this._progress;
                        this.initLoad();
                    } else {
                        this._acumulado = 0;
                        this.doProgress = 0;
                        this.showFirst();
                    }
                };
                PreloadBar.prototype.showFirst = function() {
                    var tClass = this;
                    this.container.css("display", "block");
                    this.initLoad();
                };
                PreloadBar.prototype.initLoad = function() {
                    switch (this._typeLoader) {
                        case PreloadBar.FONTS:
                            cuchillo.Loaders.FontLoader.initLoad();
                            break;
                        case PreloadBar.PIXI:
                            cuchillo.Loaders.PixiPreloader.initLoad();
                            break;
                        case PreloadBar.FILES:
                            cuchillo.Loaders.Preloader.initLoad();
                            break;
                    }
                };
                PreloadBar.prototype.hideToLink = function() {
                    this.container.css("display", "block");
                    TweenLite.to(this.container, 0.4, {
                        opacity: 1,
                        ease: Power3.easeIn,
                        force3D: true,
                        onComplete: function() {
                            cuchillo.Pages.PageController.directLink();
                        }
                    });
                };
                PreloadBar.prototype.hideToCallback = function(__call) {
                    this.container.css("display", "block");
                    TweenLite.to(this.container, 0.4, {
                        opacity: 1,
                        ease: Sine.easeIn,
                        force3D: true,
                        onComplete: function() {
                            __call();
                        }
                    });
                };
                PreloadBar.prototype.hide = function(__call) {
                    if (__call === void 0) { __call = null; }
                    var tClass = this;
                    TweenLite.to(this.container, 0.6, {
                        opacity: 0,
                        ease: Sine.easeIn,
                        force3D: true,
                        onComplete: function() {
                            tClass.container.css("display", "none");
                            if (__call != null)
                                __call();
                        }
                    });
                };
                PreloadBar.prototype.dispose = function() {
                    TweenLite.killTweensOf(this.container);
                    this.container.css("display", "none");
                };
                return PreloadBar;
            }());
            PreloadBar._instance = null;
            PreloadBar.FONTS = "FONTS";
            PreloadBar.FILES = "FILES";
            PreloadBar.PIXI = "PIXI";
            InterfaceItems.PreloadBar = PreloadBar;
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var ToggleButtons;
            (function(ToggleButtons) {
                var ToggleButton = (function() {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    function ToggleButton(__container, __callback) {
                        this._state = "normal";
                        this._container = __container;
                        this._callback = __callback;
                        this._line1 = this._container.children('svg').children('.line1');
                        this._line2 = this._container.children('svg').children('.line2');
                        //BUTTON
                        var tClass = this;
                        /*this._container.click(function(e) {
                            if(!tClass.running || (tClass.running && tClass._state == ToggleButton.STATE_NORMAL)) {
                                tClass._callback.doCall();
                            }
                        });*/
                        //BUTTON
                        var tClass = this;
                        this._container.mousedown(function(e) {
                            tClass.press();
                        });
                        this._container.mouseup(function(e) {});
                        this._container.mouseover(function(e) {
                            tClass.over();
                        });
                        this._container.mouseout(function(e) {
                            tClass.out();
                        });
                        this._container.bind("touchstart", function(e) {

                            tClass.press();
                        });
                        this._container.bind("touchend", function(e) {});
                        this._container.click(function(e) {
                            tClass._callback();
                        });
                        //TIMELINES
                        TweenLite.set(this._line1, { drawSVG: '0% 0%', force3D: true });
                        TweenLite.set(this._line2, { drawSVG: '0% 0%', force3D: true });
                        this._timelineShow = new TimelineMax();
                        this._timelineShow.clear();
                        this._timelineShow.pause();
                        this._timelineShow.to(this._line1, 0.2, { drawSVG: '0% 65%', ease: Power4.easeIn, force3D: true }, .0);
                        this._timelineShow.to(this._line2, 0.4, { drawSVG: '0% 65%', ease: Power4.easeIn, force3D: true }, .0);
                        this._timelineShow.to(this._line2, 0.3, { drawSVG: '35% 65%', ease: Power4.easeOut, force3D: true }, 0.4);
                        this._timelineShow.to(this._line1, 0.6, { drawSVG: '35% 65%', ease: Power4.easeOut, force3D: true }, 0.5);
                    }
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    ToggleButton.prototype.show = function() {
                        TweenLite.killTweensOf(this._line1);
                        TweenLite.killTweensOf(this._line2);
                        TweenLite.set(this._line1, { drawSVG: '0 0', force3D: true });
                        TweenLite.set(this._line2, { drawSVG: '0 0', force3D: true });
                        TweenLite.to(this._line1, 0.4, { drawSVG: '0% 65%', ease: Power4.easeIn, delay: 0, force3D: true });
                        TweenLite.to(this._line2, 0.4, { drawSVG: '0% 65%', ease: Power4.easeIn, delay: 0, force3D: true });
                        TweenLite.to(this._line2, 0.3, { drawSVG: '35% 65%', ease: Power4.easeOut, delay: .4, force3D: true });
                        TweenLite.to(this._line1, 0.6, { drawSVG: '35% 65%', ease: Power4.easeOut, delay: .5, force3D: true });
                    };
                    ToggleButton.prototype.hide = function() {
                        this._state == "HIDE";
                        TweenLite.to(this._container, 0.4, { css: { opacity: 0 }, ease: Sine.easeOut, force3D: true });
                    };
                    ToggleButton.prototype.open = function() {
                        this._state = ToggleButton.STATE_NORMAL;
                    };
                    ToggleButton.prototype.directShow = function() {
                        TweenLite.killTweensOf(this._line1);
                        TweenLite.killTweensOf(this._line2);
                        TweenLite.set(this._line1, { drawSVG: '35% 65%', force3D: true });
                        TweenLite.set(this._line2, { drawSVG: '35% 65%', force3D: true });
                    };
                    ToggleButton.prototype.close = function() {
                        this._state = ToggleButton.STATE_CLOSE;
                    };
                    ToggleButton.prototype.over = function() {
                        TweenLite.to(this._line2, 0.4, { drawSVG: '65% 65%', ease: Power4.easeOut, force3D: true });
                    };
                    ToggleButton.prototype.out = function() {
                        TweenLite.killTweensOf(this._line2);
                        TweenLite.set(this._line2, { drawSVG: '0% 0%', force3D: true });
                        TweenLite.to(this._line2, 0.6, { drawSVG: '35% 65%', ease: Power4.easeOut, force3D: true });
                    };
                    ToggleButton.prototype.directHide = function() {
                        TweenLite.killTweensOf(this._line1);
                        TweenLite.killTweensOf(this._line2);
                        TweenLite.set(this._line1, { drawSVG: '0 0', force3D: true });
                        TweenLite.set(this._line2, { drawSVG: '0 0', force3D: true });
                    };
                    ToggleButton.prototype.press = function() {};
                    ToggleButton.prototype.toogleState = function() {
                        if (this._state != ToggleButton.STATE_CLOSE) {
                            this.close();
                        } else {
                            this.open();
                        }
                    };
                    return ToggleButton;
                }());
                ToggleButton.STATE_NORMAL = "normal";
                ToggleButton.STATE_CLOSE = "close";
                ToggleButtons.ToggleButton = ToggleButton;
            })(ToggleButtons = InterfaceItems.ToggleButtons || (InterfaceItems.ToggleButtons = {}));
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var ToggleButtons;
            (function(ToggleButtons) {
                var RightButton = (function() {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    function RightButton(__container, __callback) {
                        this.running = false;
                        this._state = "normal";
                        this._container = __container;
                        this._callback = __callback;
                        this._line1 = this._container.children('svg').children('.line1');
                        this._line2 = this._container.children('svg').children('.line2');
                        //BUTTON
                        var tClass = this;
                        /*this._container.click(function(e) {
                            if(!tClass.running || (tClass.running && tClass._state == RightButton.STATE_NORMAL)) {
                                tClass._callback.doCall();
                            }
                        });*/
                        //BUTTON
                        var tClass = this;
                        this._container.mousedown(function(e) {
                            tClass.press();
                        });
                        this._container.mouseup(function(e) {});
                        this._container.mouseover(function(e) {
                            tClass.over();
                        });
                        this._container.mouseout(function(e) {
                            tClass.out();
                        });
                        this._container.bind("touchstart", function(e) {

                            tClass.press();
                        });
                        this._container.bind("touchend", function(e) {});
                        this._container.click(function(e) {
                            tClass._callback();
                        });
                        //TIMELINES
                        TweenLite.set(this._line1, { drawSVG: '0% 0%', force3D: true });
                        TweenLite.set(this._line2, { drawSVG: '0% 0%', force3D: true });
                    }
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    RightButton.prototype.show = function() {
                        TweenLite.killTweensOf(this._line1);
                        TweenLite.killTweensOf(this._line2);
                        TweenLite.set(this._line1, { drawSVG: '0 0', force3D: true });
                        TweenLite.set(this._line2, { drawSVG: '0 0', force3D: true });
                        TweenLite.to(this._line1, 0.4, { drawSVG: '0% 100%', ease: Power4.easeIn, delay: 0, force3D: true });
                        TweenLite.to(this._line2, 0.4, { drawSVG: '0% 100%', ease: Power4.easeIn, delay: 0, force3D: true });
                        TweenLite.to(this._line2, 0.3, { drawSVG: '30% 100%', ease: Power4.easeOut, delay: .4, force3D: true });
                        TweenLite.to(this._line1, 0.6, { drawSVG: '30% 100%', ease: Power4.easeOut, delay: .5, force3D: true });
                    };
                    RightButton.prototype.hide = function() {
                        TweenLite.to(this._container, 0.4, { css: { opacity: 0 }, ease: Sine.easeOut, force3D: true });
                    };
                    RightButton.prototype.open = function() {
                        this._state = RightButton.STATE_NORMAL;
                    };
                    RightButton.prototype.close = function() {
                        this._state = RightButton.STATE_CLOSE;
                    };
                    RightButton.prototype.over = function() {
                        TweenLite.to(this._line2, 0.4, { drawSVG: '100% 100%', ease: Power4.easeOut, force3D: true });
                    };
                    RightButton.prototype.out = function() {
                        TweenLite.killTweensOf(this._line2);
                        TweenLite.set(this._line2, { drawSVG: '0% 0%', force3D: true });
                        TweenLite.to(this._line2, 0.6, { drawSVG: '30% 100%', ease: Power4.easeOut, force3D: true });
                    };
                    RightButton.prototype.directShow = function() {
                        TweenLite.killTweensOf(this._line1);
                        TweenLite.killTweensOf(this._line2);
                        TweenLite.set(this._line1, { drawSVG: '30% 100%', force3D: true });
                        TweenLite.set(this._line2, { drawSVG: '30% 100%', force3D: true });
                    };
                    RightButton.prototype.directHide = function() {
                        TweenLite.killTweensOf(this._line1);
                        TweenLite.killTweensOf(this._line2);
                        TweenLite.set(this._line1, { drawSVG: '0 0', force3D: true });
                        TweenLite.set(this._line2, { drawSVG: '0 0', force3D: true });
                    };
                    RightButton.prototype.press = function() {};
                    RightButton.prototype.toogleState = function() {
                        if (this._state != RightButton.STATE_CLOSE) {
                            this.close();
                        } else {
                            this.open();
                        }
                    };
                    return RightButton;
                }());
                RightButton.STATE_NORMAL = "normal";
                RightButton.STATE_CLOSE = "close";
                ToggleButtons.RightButton = RightButton;
            })(ToggleButtons = InterfaceItems.ToggleButtons || (InterfaceItems.ToggleButtons = {}));
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var ToggleButtons;
            (function(ToggleButtons) {
                var TogglePause = (function() {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    function TogglePause(__container, __video) {
                        this.state = "PLAY";
                        this.isShow = false;
                        this._container = __container;
                        this._video = __video;
                        this.circleHover = this._container.find(".circle-hover");
                        this.ico1Hover = this._container.find(".pause-1-hover");
                        this.ico2Hover = this._container.find(".pause-2-hover");
                        //BUTTON
                        var tClass = this;
                        this._container.mousedown(function(e) {
                            tClass.pauseVideo();
                        });
                        this._container.mouseup(function(e) {});
                        this._container.mouseover(function(e) {
                            tClass.over();
                        });
                        this._container.mouseout(function(e) {
                            tClass.out();
                        });
                        this._container.bind("touchstart", function(e) {

                            tClass.pauseVideo();
                        });
                        this._container.bind("touchend", function(e) {});
                        this._container.click(function(e) {
                            //tClass._callback();
                        });
                        //TIMELINE
                        TweenLite.set(this.circleHover, { drawSVG: 0 });
                        TweenLite.set(this.ico1Hover, { drawSVG: 0 });
                        TweenLite.set(this.ico2Hover, { drawSVG: 0 });
                        this._container.css("visibility", "visible");
                    }
                    //==================================================================================================================
                    //          PRIVATE
                    //==================================================================================================================
                    TogglePause.prototype.pauseVideo = function() {
                        if (this.state === InterfaceItems.ToggleButtons.TogglePause.STATE_PAUSE) {
                            this._video.trigger("play");
                            this.state = InterfaceItems.ToggleButtons.TogglePause.STATE_PLAY;
                            this.hide();
                        } else if (this.state === InterfaceItems.ToggleButtons.TogglePause.STATE_PLAY) {
                            this._video.trigger("pause");
                            this.state = InterfaceItems.ToggleButtons.TogglePause.STATE_PAUSE;
                            this.show();
                        }
                    };
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    TogglePause.prototype.show = function() {
                        if (!this.isShow) {
                            TweenLite.set(this.circleHover, { drawSVG: '0 0', force3D: true });
                            TweenLite.set(this.ico1Hover, { drawSVG: '0 0', force3D: true });
                            TweenLite.set(this.ico2Hover, { drawSVG: '0 0', force3D: true });
                            TweenLite.to(this.circleHover, 1, { drawSVG: '100%', ease: Power4.easeInOut, force3D: true });
                            TweenLite.to(this.ico1Hover, 1, { drawSVG: '100%', ease: Power4.easeInOut, force3D: true });
                            TweenLite.to(this.ico2Hover, 1, { drawSVG: '100%', ease: Power4.easeInOut, force3D: true });
                            this.isShow = true;
                        }
                    };
                    TogglePause.prototype.hide = function() {
                        if (this.isShow) {
                            TweenLite.to(this.circleHover, 1, { drawSVG: '100% 100%', ease: Power4.easeInOut, force3D: true });
                            TweenLite.to(this.ico1Hover, 1, { drawSVG: '100% 100%', ease: Power4.easeInOut, force3D: true, delay: 0.2 });
                            TweenLite.to(this.ico2Hover, 1, { drawSVG: '100% 100%', ease: Power4.easeInOut, force3D: true, delay: 0.2 });
                            this.isShow = false;
                        }
                    };
                    TogglePause.prototype.over = function() {
                        if (this.state == TogglePause.STATE_PLAY) {
                            this.show();
                        }
                    };
                    TogglePause.prototype.out = function() {
                        if (this.state == TogglePause.STATE_PLAY) {
                            this.hide();
                        }
                    };
                    return TogglePause;
                }());
                TogglePause.STATE_PLAY = "PLAY";
                TogglePause.STATE_PAUSE = "PAUSE";
                TogglePause.STATE_LOADING = "LOADING";
                ToggleButtons.TogglePause = TogglePause;
            })(ToggleButtons = InterfaceItems.ToggleButtons || (InterfaceItems.ToggleButtons = {}));
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var ArrowButtons;
            (function(ArrowButtons) {
                var ArrowButton = (function() {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    function ArrowButton(__container, __callback) {
                        this.isOpen = false;
                        this._container = __container;
                        this._callback = __callback;
                        this.circle = this._container.find(".circle");
                        this.circleHover = this._container.find(".circle-hover");
                        this.arrow = this._container.find(".arrow");
                        this.arrowHover = this._container.find(".arrow-hover");
                        //BUTTON
                        var tClass = this;
                        this._container.mousedown(function(e) {
                            tClass.press();
                        });
                        this._container.mouseup(function(e) {});
                        this._container.mouseover(function(e) {
                            tClass.over();
                        });
                        this._container.mouseout(function(e) {
                            tClass.out();
                        });
                        this._container.bind("touchstart", function(e) {

                            tClass.press();
                        });
                        this._container.bind("touchend", function(e) {});
                        this._container.click(function(e) {
                            tClass._callback();
                        });
                        //TIMELINE
                        this._timeline = new TimelineLite();
                        this._timeline.clear();
                        this._timeline.pause();
                        TweenLite.set(this.circleHover, { drawSVG: 0 });
                        TweenLite.set(this.arrowHover, { drawSVG: 0 });
                        TweenLite.set(this.arrow, { drawSVG: 0 });
                        TweenLite.set(this.circle, { drawSVG: 0 });
                        this._timeline.to(this.circleHover, 0.8, { drawSVG: '100%', ease: Power4.easeOut, force3D: true }, 0);
                        this._timeline.to(this.arrowHover, 0.8, { drawSVG: '100%', ease: Power4.easeOut, force3D: true }, 0);
                    }
                    //==================================================================================================================
                    //          PRIVATE
                    //==================================================================================================================
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    ArrowButton.prototype.show = function() {
                        if (!this.isOpen) {
                            TweenLite.killTweensOf(this.circle);
                            TweenLite.killTweensOf(this.arrow);
                            TweenLite.set(this.circle, { drawSVG: '0 0', force3D: true });
                            TweenLite.set(this.arrow, { drawSVG: '0 0', force3D: true });
                            TweenLite.to(this.circle, 1, { drawSVG: '100%', ease: Power4.easeInOut, force3D: true });
                            TweenLite.to(this.arrow, 1, { drawSVG: '100%', ease: Power4.easeInOut, force3D: true });
                            this.isOpen = true;
                        }
                    };
                    ArrowButton.prototype.hide = function() {
                        if (this.isOpen) {
                            TweenLite.to(this.circle, 1, { drawSVG: '100% 100%', ease: Power4.easeInOut, force3D: true });
                            TweenLite.to(this.arrow, 1, { drawSVG: '100% 100%', ease: Power4.easeInOut, force3D: true, delay: 0.2 });
                            this._timeline.reverse();
                            this.isOpen = false;
                        }
                    };
                    ArrowButton.prototype.over = function() {
                        if (this.isOpen) {
                            this._timeline.restart();
                        }
                    };
                    ArrowButton.prototype.out = function() {
                        if (this.isOpen) {
                            this._timeline.reverse();
                        }
                    };
                    ArrowButton.prototype.press = function() {};
                    return ArrowButton;
                }());
                ArrowButtons.ArrowButton = ArrowButton;
            })(ArrowButtons = InterfaceItems.ArrowButtons || (InterfaceItems.ArrowButtons = {}));
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var Carrousel = (function() {
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                // new CustomButton("ico_powerdream.png", 160, 160, 0xFFFFFF, 1, 0x67666b, 1, 1.5);
                function Carrousel(__carrousel) {
                    this._selector = ".carrousel-item";
                    this._items = [];
                    this._actual = -1;
                    this._next = -1;
                    this.duration = 4000;
                    var tClass = this;
                    this._items = [];
                    this._imgs = [];
                    this._carrousel = __carrousel;
                    this.duration = Number(this._carrousel.attr("data-milliseconds"));
                    var item;
                    var aspectRatio = 0;
                    this._carrousel.find(this._selector).each(function() {
                        item = new cuchillo.Loaders.ItemToLoad($(this), tClass.imageLoaded.bind(tClass), false);
                        tClass._items.push(item);
                        cuchillo.Loaders.Preloader.mode = cuchillo.Loaders.Preloader.LOAD_PROGRESSIVE;
                        cuchillo.Loaders.Preloader.add(item);
                        aspectRatio = Math.max(aspectRatio, item.aspectRatio);
                    });
                    this._carrousel.css("padding-top", aspectRatio + "%");
                    if (tClass._items.length == 0)
                        return;
                    new InterfaceItems.ArrowButtons.ArrowButton(this._carrousel.find(".btn-carrousel-left"), this.moveL.bind(this)).show();
                    new InterfaceItems.ArrowButtons.ArrowButton(this._carrousel.find(".btn-carrousel-right"), this.moveR.bind(this)).show();
                }
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                Carrousel.prototype.imageLoaded = function(__item) {
                    this._imgs.push(__item.item);
                    if (this._imgs.length === 1)
                        this.show(1);
                };
                Carrousel.prototype.moveL = function() { this.directShow(-1); };
                Carrousel.prototype.moveR = function() { this.directShow(1); };
                Carrousel.prototype.directShow = function(__direction) {
                    clearTimeout(this._idInterval);
                    this.show(__direction);
                };
                Carrousel.prototype.show = function(__direction) {
                    if (__direction === void 0) { __direction = 1; }
                    var tClass = this;
                    if (this._actual > -1) {
                        TweenLite.to(this._imgs[this._actual], 1, { opacity: 0, ease: Power4.easeOut, force3D: true });
                    }
                    this._next += __direction;
                    if (this._next < 0)
                        this._next = this._imgs.length - 1;
                    else if (this._next >= this._imgs.length)
                        this._next = 0;
                    this._actual = this._next;
                    TweenLite.to(this._imgs[this._next], 1, {
                        opacity: 1,
                        ease: Power4.easeOut,
                        force3D: true,
                        onComplete: function() {
                            tClass.showEnded();
                        }
                    });
                };
                Carrousel.prototype.showEnded = function() {
                    var tClass = this;
                    clearTimeout(this._idInterval);
                    this._idInterval = setTimeout(function() { tClass.show(1); }, this.duration);
                };
                return Carrousel;
            }());
            InterfaceItems.Carrousel = Carrousel;
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var ProgramItemList = (function() {
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function ProgramItemList(__container, __index) {
                    this.index = 0;
                    this._container = __container;
                    this.index = __index;
                    this.id = "#previewPrograma" + this.index;
                    __container.attr("id", "previewPrograma" + this.index);
                    this._h1 = $(this.id + " .list-item-programa-h1-holder .list-item-programa-h1");
                    this._link = $(this.id + " .list-item-programa-link");
                    this.setup();
                    this.setupButton();
                }
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                ProgramItemList.prototype.setup = function() {
                    var tClass = this;
                    var textArray = this._h1.html().split(" ");
                    this._h1.html("");
                    this._lines = [];
                    var max = 0;
                    var lineHolder;
                    var line;
                    for (var i = 0, len = textArray.length; i < len; i += 1) {
                        lineHolder = $("<div class='list-item-programa-h1-line-holder'>");
                        line = $("<div class='list-item-programa-h1-line'>" + textArray[i] + "</div>");
                        lineHolder.append(line);
                        this._h1.append(lineHolder);
                        max = Math.max(max, line[0].getBoundingClientRect().height);
                        tClass._lines.push(line);
                    }
                    var ancho = this.getSeparacion() * (this._lines.length - 1) + this._lines[this._lines.length - 1][0].getBoundingClientRect().width + 80;
                    this._h1.css("width", ancho + "px");
                    this._h1.css("height", Math.round(max) + "px");
                    this._h1.css("top", ((this._h1.parent().height() - Math.round(max)) / 2) + "px");
                };
                ProgramItemList.prototype.getSeparacion = function() {
                    if (cuchillo.DataHolder.DatosBasicos.WIDTH > 1250)
                        return 150;
                    if (cuchillo.DataHolder.DatosBasicos.WIDTH > 1000)
                        return 120;
                    else
                        return 80;
                };
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                ProgramItemList.prototype.show = function() {};
                ProgramItemList.prototype.hide = function() {};
                ProgramItemList.prototype.resize = function() {};
                //==================================================================================================================
                //          BUTTON ACTIONS
                //==================================================================================================================
                ProgramItemList.prototype.setupButton = function() {
                    var tClass = this;
                    var tClass = this;
                    this._link.mousedown(function(e) {
                        tClass.press();
                    });
                    this._link.mouseup(function(e) {});
                    this._link.mouseover(function(e) {
                        tClass.over();
                    });
                    this._link.mouseout(function(e) {
                        tClass.out();
                    });
                    this._link.bind("touchstart", function(e) {

                        tClass.press();
                    });
                    this._link.bind("touchend", function(e) {});
                    this._link.click(function(e) {});
                };
                ProgramItemList.prototype.over = function() {
                    this._h1.addClass("hover");
                };
                ProgramItemList.prototype.out = function() {
                    this._h1.removeClass("hover");
                };
                ProgramItemList.prototype.press = function() {};
                return ProgramItemList;
            }());
            InterfaceItems.ProgramItemList = ProgramItemList;
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var RotatedItem = (function() {
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function RotatedItem(__container) {
                    this.fontSize = 0;
                    this._container = __container;
                    //
                    this.setup();
                }
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                RotatedItem.prototype.setup = function() {
                    var tClass = this;
                    var textArray = this._container.html().split(" ");
                    this._container.html("");
                    this._lines = [];
                    var lineHolder;
                    var line;
                    for (var i = 0, len = textArray.length; i < len; i += 1) {
                        lineHolder = $("<span class='rotated-line-holder'>");
                        line = $("<span class='rotated-line'>" + textArray[i] + "</span>");
                        lineHolder.append(line);
                        this._container.append(lineHolder);
                        tClass._lines.push(lineHolder);
                    }
                    this.setupSize();
                };
                RotatedItem.prototype.setupSize = function() {
                    this.fontSize = parseInt(this._container.css('font-size'), 10);
                    var max = 0;
                    var lineHolder;
                    var line;
                    var left = this.fontSize;
                    for (var i = 0, len = this._lines.length; i < len; i += 1) {
                        lineHolder = this._lines[i];
                        line = lineHolder.children(".rotated-line");
                        max = Math.max(max, line[0].getBoundingClientRect().height);
                        lineHolder.css("left", left + "px");
                        left += this.getSeparacion();
                    }
                    var ancho = this.getSeparacion() * (this._lines.length - 1) + this._lines[this._lines.length - 1][0].getBoundingClientRect().width;
                    this._container.css("width", ancho + "px");
                    this._container.css("height", Math.round(max) + "px");
                };
                RotatedItem.prototype.getSeparacion = function() {
                    return this.fontSize + (this.fontSize * 0.9);
                };
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                RotatedItem.prototype.beforeShow = function() {
                    var line;
                    var moveTo = 150;
                    this._timeLine = new TimelineMax();
                    this._timeLine.pause();
                    for (var i = 0, len = this._lines.length; i < len; i += 1) {
                        line = this._lines[i].children(".rotated-line");
                        TweenLite.set(line, { css: { x: moveTo, opacity: 0 }, force3D: true });
                        moveTo *= -1;
                        this._timeLine.to(line, 1, { css: { x: 0, opacity: 1 }, ease: Quint.easeOut, force3D: true }, .0);
                    }
                };
                RotatedItem.prototype.show = function() {
                    this._timeLine.timeScale(1);
                    this._timeLine.restart();
                };
                RotatedItem.prototype.hide = function() {
                    this._timeLine.timeScale(2);
                    this._timeLine.reverse();
                };
                RotatedItem.prototype.dispose = function() {
                    this._timeLine.clear();
                    this.fontSize = null;
                    this._container = null;
                    this._lines = [];
                    this._timeLine = null;
                };
                RotatedItem.prototype.resize = function() {
                    this.setupSize();
                };
                return RotatedItem;
            }());
            InterfaceItems.RotatedItem = RotatedItem;
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var InterfaceItems;
        (function(InterfaceItems) {
            var PixiStage = (function() {
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function PixiStage(__w, __h, __interactive, __transparent, __color, __id, __maxW, __maxH, __positionType, __type) {
                    if (__w === void 0) { __w = 100; }
                    if (__h === void 0) { __h = 100; }
                    if (__interactive === void 0) { __interactive = false; }
                    if (__transparent === void 0) { __transparent = false; }
                    if (__color === void 0) { __color = 0xFFFFFF; }
                    if (__id === void 0) { __id = ""; }
                    if (__maxW === void 0) { __maxW = 0; }
                    if (__maxH === void 0) { __maxH = 0; }
                    if (__positionType === void 0) { __positionType = "FIXED"; }
                    if (__type === void 0) { __type = "AUTO"; }
                    this.rendererTexture = null;
                    this.enabled = false;
                    this._stage = new PIXI.Container();
                    this.id = __id;
                    this._maxW = __maxW;
                    this._maxH = __maxH;
                    this._positionType = __positionType;
                    var rendererOptions = {
                        antialiasing: false,
                        transparent: __transparent,
                        autoResize: true,
                        antialias: true,
                        roundPixels: false,
                        resolution: 1,
                        backgroundColor: __color
                    };
                    var sprite = PIXI.Sprite.fromImage("/media/images/01.jpg");
                    //this._renderer = new PIXI.WebGLRenderer(Math.min(this._maxW==0?__w:this._maxW, __w), Math.min(this._maxH==0?__h:this._maxH, __h), rendererOptions);
                    this._renderer = new PIXI.WebGLRenderer(__w, __h, rendererOptions);
                }
                Object.defineProperty(PixiStage.prototype, "view", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() {
                        return this._renderer.view;
                    },
                    enumerable: true,
                    configurable: true
                });
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                PixiStage.prototype.loop = function() {
                    if (this.enabled) {
                        this._renderer.render(this._stage);
                    }
                };
                PixiStage.prototype.end = function() {
                    this.enabled = false;
                    this._stage = null;
                    this._renderer = null;
                };
                PixiStage.prototype.activate = function() {
                    this.enabled = true;
                };
                PixiStage.prototype.hide = function() {
                    this.end();
                };
                PixiStage.prototype.addChild = function(__s) {
                    this._stage.addChild(__s);
                };
                PixiStage.prototype.addChildAt = function(__s, __n) {
                    this._stage.addChildAt(__s, __n);
                };
                PixiStage.prototype.resize = function(__w, __h) {
                    /*var wIr:number = Math.min(__w, this._maxW);
                    var hIr:number = Math.min(__h, this._maxH);
                    var sIr:number = Math.max(__w/wIr, __h/hIr);
                    var secureW:number = wIr*sIr;
                    var secureH:number = hIr*sIr;
        
                    this._renderer.resize(wIr, hIr);
        
                    switch(this._positionType) {
                        case "FULL":
                            this._renderer.view.style.width = "" + secureW + "px";
                            this._renderer.view.style.height = "" + secureH + "px";
                            this._renderer.view.style.left = "" + Number(__w/2 - secureW/2) + "px";
                            this._renderer.view.style.top = "" + Number(__h/2 - secureH/2) + "px";
                            break;
        
                        case "CENTER":
                            this._renderer.view.style.width = "" + wIr + "px";
                            this._renderer.view.style.height = "" + hIr + "px";
                            this._renderer.view.style.left = "" + Number(__w/2 - wIr/2) + "px";
                            this._renderer.view.style.top = "" + Number(__h/2 - hIr/2) + "px";
                            break;
        
                    }*/
                    this._renderer.resize(__w, __h);
                    this._renderer.view.style.width = "" + __w + "px";
                    this._renderer.view.style.height = "" + __h + "px";
                    /*if((__w > this._maxW && this._maxW > 0) || (__h > this._maxH && this._maxH > 0)) {
        
        
        
        
        
                        var scale:number = Math.min(this._maxW/__w, this._maxH/__h);
                        this._renderer.resize(__w*scale, __h*scale);
        
                        scale = Math.max(this._maxW/__w, this._maxH/__h);
                        this._renderer.view.style.width = "" + Number(__w*scale) + "px";
                        this._renderer.view.style.height = "" + Number(__h*scale) + "px";
                    } else {
                        this._renderer.resize(__w, __h);
                        this._renderer.view.style.width = "" + __w + "px";
                        this._renderer.view.style.height = "" + __h + "px";
                    }*/
                };
                PixiStage.prototype.position = function(__x, __y) {
                    this._renderer.view.style.left = "" + __x + "px";
                    this._renderer.view.style.top = "" + __y + "px";
                };
                return PixiStage;
            }());
            InterfaceItems.PixiStage = PixiStage;
        })(InterfaceItems = cuchillo.InterfaceItems || (cuchillo.InterfaceItems = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Windows;
        (function(Windows) {
            var Sidemenu = (function() {
                function Sidemenu() {
                    this._items = [];
                    this.heightSidemenu = 0;
                    this._state = "CLOSE";
                    var tClass = this;
                    this._container = $("#sidemenu");
                    this._holder = $('.sidemenu-content-holder');
                    this._mainNav = $(".sidemenu-main-nav");
                    this._subNav = $(".sidemenu-sub-nav");
                    $(".sidemenu-main-nav a").each(function() {
                        tClass._items.push($(this));
                    });
                    TweenLite.set(this._container, { autoAlpha: 0, force3D: true });
                    TweenLite.set(this._holder, { css: { height: "0px" }, force3D: true });
                    TweenLite.set(this._mainNav, { css: { y: "200px" }, force3D: true });
                    this.setupSizes();
                    $('#sidemenuFakeButton').click(function(e) {
                        tClass.toogleState();
                    });
                    //SETUP LINKS
                    var tClass = this;
                    $("#sidemenu a[data-type-link='link-interno']").each(function() {
                        var ttClass = tClass;
                        $(this).click(function(e) {
                            e.preventDefault();
                            tClass.hideFast();
                            cuchillo.Pages.PageController.changePage($(this).attr("href"));
                        });
                    });
                }
                Object.defineProperty(Sidemenu.prototype, "isOpen", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() { return this._state == Sidemenu.STATE_OPEN; },
                    enumerable: true,
                    configurable: true
                });
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                Sidemenu.getInstance = function() {
                    if (com.cuchillo.Windows.Sidemenu._instance === null) {
                        com.cuchillo.Windows.Sidemenu._instance = new com.cuchillo.Windows.Sidemenu();
                    }
                    return com.cuchillo.Windows.Sidemenu._instance;
                };
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                Sidemenu.prototype.getSeparacion = function() {
                    if (cuchillo.DataHolder.DatosBasicos.WIDTH > 1500)
                        return 170;
                    if (cuchillo.DataHolder.DatosBasicos.WIDTH > 1200)
                        return 130;
                    if (cuchillo.DataHolder.DatosBasicos.WIDTH > cuchillo.DataHolder.DatosBasicos.TABLET_PORTRAIT)
                        return 100;
                    if (cuchillo.DataHolder.DatosBasicos.WIDTH > cuchillo.DataHolder.DatosBasicos.SMARTPHONE)
                        return 170;
                    else
                        return 120;
                };
                Sidemenu.prototype.setupSizes = function() {
                    var tClass = this;
                    var left = 0;
                    var lastWidth = 0;
                    this.heightSidemenu = cuchillo.DataHolder.DatosBasicos.HEIGHT / 3;
                    for (var i = 0, j = this._items.length; i < j; i += 1) {
                        if (this._items[i].hasClass("sub-link"))
                            left -= 40;
                        lastWidth = this._items[i].width();
                        this.heightSidemenu = Math.max(tClass.heightSidemenu, lastWidth + 20);
                        this._items[i].css("left", left + "px");
                        left += this._items[i].hasClass("sub-link") ? 100 : tClass.getSeparacion();
                    }
                    $(".sidemenu-subnav-holder").css("padding-top", this.heightSidemenu + "px");
                    this._subNav.height(cuchillo.DataHolder.DatosBasicos.HEIGHT - this.heightSidemenu);
                    // TweenLite.set(this._subNav, {css:{y:Number(DataHolder.DatosBasicos.HEIGHT - this.heightSidemenu)}, force3D:true});
                    var holderWidth = (left - this.getSeparacion()) + lastWidth;
                    $('.sidemenu-nav-holder').css("height", this.heightSidemenu + "px");
                    this._mainNav.css("width", holderWidth + "px");
                    if (!this.isOpen)
                        this._holder.css("height", "0px");
                    else
                        this._holder.css("height", this.heightSidemenu + "px");
                };
                Sidemenu.prototype.show = function() {
                    TweenLite.set(this._container, { autoAlpha: 1, force3D: true });
                    TweenMax.to(this._holder, 1, { css: { height: this.heightSidemenu }, ease: Quint.easeOut, force3D: true });
                    TweenMax.to(this._mainNav, 1, { css: { y: "0px" }, ease: Quint.easeOut, force3D: true });
                };
                Sidemenu.prototype.hide = function() {
                    var tClass = this;
                    TweenMax.to(this._holder, 0.5, {
                        css: { height: "0px" },
                        ease: Quad.easeOut,
                        force3D: true,
                        onComplete: function() {
                            TweenLite.set(tClass._container, { autoAlpha: 0, force3D: true });
                        }
                    });
                    TweenMax.to(this._mainNav, 1, { css: { y: "200px" }, ease: Quint.easeOut, force3D: true });
                };
                Sidemenu.prototype.hideFast = function() {
                    var tClass = this;
                    $(window).unbind("keydown");
                    TweenMax.to(this._holder, 0.4, { css: { height: "0px" }, ease: Quad.easeOut, force3D: true });
                    TweenMax.to(this._mainNav, 1, {
                        css: { y: "200px" },
                        ease: Quint.easeOut,
                        force3D: true,
                        onComplete: function() {
                            TweenLite.set(tClass._container, { autoAlpha: 0, force3D: true });
                        }
                    });
                    this._state = Sidemenu.STATE_CLOSE;
                };
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                Sidemenu.prototype.toogleState = function() {
                    if (!this.isOpen) {
                        this.show();
                        this._state = Sidemenu.STATE_OPEN;
                        $(window).bind("keydown", function(e) {
                            switch (e.which) {
                                case 27:
                                    Sidemenu.getInstance().toogleState();
                                    break;
                            }
                        });
                    } else {
                        $(window).unbind("keydown");
                        this.hide();
                        this._state = Sidemenu.STATE_CLOSE;
                    }
                };
                Sidemenu.prototype.directHide = function() {
                    this._state = Sidemenu.STATE_CLOSE;
                    TweenLite.set(this._container, { autoAlpha: 0, force3D: true });
                    TweenLite.set(this._holder, { css: { height: "0px" }, force3D: true });
                    TweenLite.set(this._mainNav, { css: { y: "200px" }, force3D: true });
                };
                Sidemenu.prototype.resize = function() {
                    this._container.width(cuchillo.DataHolder.DatosBasicos.WIDTH_INSIDE);
                    this.setupSizes();
                };
                return Sidemenu;
            }());
            Sidemenu._instance = null;
            Sidemenu.STATE_OPEN = "OPEN";
            Sidemenu.STATE_CLOSE = "CLOSE";
            Windows.Sidemenu = Sidemenu;
        })(Windows = cuchillo.Windows || (cuchillo.Windows = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Windows;
        (function(Windows) {
            var Cookies = (function() {
                function Cookies() {
                    this.heightCookies = 0;
                    this._state = "CLOSE";
                    var tClass = this;
                    this._container = $("#cookies-alert");
                    this._holder = $(".cookies-alert-holder");
                    this.setupSizes();
                }
                Object.defineProperty(Cookies.prototype, "isOpen", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() { return this._state == Cookies.STATE_OPEN; },
                    enumerable: true,
                    configurable: true
                });
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                Cookies.getInstance = function() {
                    if (com.cuchillo.Windows.Cookies._instance === null) {
                        com.cuchillo.Windows.Cookies._instance = new com.cuchillo.Windows.Cookies();
                    }
                    return com.cuchillo.Windows.Cookies._instance;
                };
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                Cookies.prototype.setupSizes = function() {
                    this.heightCookies = this._holder.height();
                    this._container.css("height", this.heightCookies + "px");
                };
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                Cookies.prototype.setup = function() {
                    $(".btn-accept-cookies").click(function(e) {
                        e.preventDefault();
                        var now = new Date();
                        var time = now.getTime();
                        var expireTime = time + 999999999999;
                        now.setTime(expireTime);
                        document.cookie = cuchillo.DataHolder.DatosBasicos.id + "_cookie_policy=accepted; expires=" + now.toUTCString() + "; path=/";
                        Windows.Cookies.getInstance().hide();
                    });
                };
                Cookies.prototype.show = function() {
                    this.setup();
                    this._state = Cookies.STATE_OPEN;
                };
                Cookies.prototype.hide = function() {
                    this._state = Cookies.STATE_CLOSE;
                    cuchillo.DataHolder.DatosBasicos.cookiesAccepted = true;
                    TweenMax.to(this._container, 0.6, { css: { height: "0px" }, ease: Quad.easeOut, force3D: true });
                    TweenMax.to(this._holder, 1, { css: { y: "200px" }, ease: Quad.easeOut, force3D: true });
                };
                Cookies.prototype.dispose = function() {
                    this._container.remove();
                };
                Cookies.prototype.resize = function() {
                    this.setupSizes();
                };
                return Cookies;
            }());
            Cookies._instance = null;
            Cookies.STATE_OPEN = "OPEN";
            Cookies.STATE_CLOSE = "CLOSE";
            Windows.Cookies = Cookies;
        })(Windows = cuchillo.Windows || (cuchillo.Windows = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Windows;
        (function(Windows) {
            var Calendar = (function() {
                function Calendar() {
                    this.heightCalendar = 310;
                    this._hideY = 310;
                    this._state = "CLOSE";
                    this._monthsNamesEs = [
                        "Enero",
                        "Febrero",
                        "Marzo",
                        "Abril",
                        "Mayo",
                        "Junio",
                        "Julio",
                        "Agosto",
                        "Septiembre",
                        "Octubre",
                        "Noviembre",
                        "Diciembre"
                    ];
                    this._monthsNamesEus = [
                        "Urtarrila",
                        "Otsaila",
                        "Martxoa",
                        "Apirila",
                        "Maiatza",
                        "Ekaina",
                        "Uztaila",
                        "Abuztua",
                        "Iraila",
                        "Urria",
                        "Azaroa",
                        "Abendua"
                    ];
                    this._months = [];
                    //private _days:JQuery[] = [];
                    this.month = 0;
                    //public day:number = 0;
                    this.year = 0;
                    this._width = 1200;
                    this._first = true;
                    var tClass = this;
                    if (window.location.href.indexOf("/es") > -1)
                        this._monthsNames = this._monthsNamesEs;
                    else
                        this._monthsNames = this._monthsNamesEus;
                    this._container = $("#calendar");
                    this._navHolder = $('.calendar-nav-holder');
                    this._linksHolder = $(".calendar-links-holder");
                    TweenLite.set(this._container, { css: { height: "0px" }, force3D: true });
                    TweenLite.set(this._navHolder, { css: { height: "0px" }, force3D: true });
                    TweenLite.set(this._linksHolder, { css: { y: "200px" }, force3D: true });
                    if (cuchillo.DataHolder.DatosBasicos.WIDTH < 500)
                        this.heightCalendar = 170;
                    //SETUP MONTHS
                    var btn;
                    var cont = 0;
                    var wTotal = 0;
                    $(".link-month").each(function() {
                        $(this).children("a").html(tClass._monthsNames[cont]);
                        cont = cont + 1;
                        wTotal = wTotal + $(this).outerWidth();
                        tClass._months.push($(this));
                    });
                    var offset = this._width - (((this._width / 12) * 11) + tClass._months[tClass._months.length - 1]);
                    var step = (this._width + offset) / 12; // - (((wTotal)/12)-((this._width)/12));
                    for (var i = 0, j = this._months.length; i < j; i += 1) {
                        btn = this._months[i];
                        btn.css("left", Number(step * i) + "px");
                        btn.children("a").click(function(e) {
                            e.preventDefault();
                            tClass.pressMonth($(this));
                        });
                    }
                    /*$(".link-day").each(function(){
                        btn = $(this);
        
                        tClass._days.push(btn);
        
                        btn.click(function(e) {
                            e.preventDefault();
                            tClass.pressDay($(this));
                        });
                    });
        */
                    $(".link-year").each(function() {
                        btn = $(this);
                        if (Number(btn.attr("data-value")) > new Date().getFullYear()) {
                            btn.addClass("disabled");
                        } else {
                            //tClass._days.push(btn);
                            btn.click(function(e) {
                                e.preventDefault();
                                tClass.pressYear($(this));
                            });
                        }
                    });
                }
                Object.defineProperty(Calendar.prototype, "isOpen", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() { return this._state == Calendar.STATE_OPEN; },
                    enumerable: true,
                    configurable: true
                });
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                Calendar.getInstance = function() {
                    if (com.cuchillo.Windows.Calendar._instance === null) {
                        com.cuchillo.Windows.Calendar._instance = new com.cuchillo.Windows.Calendar();
                    }
                    return com.cuchillo.Windows.Calendar._instance;
                };
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                Calendar.prototype.pressMonth = function(__btn, __continuar) {
                    if (__continuar === void 0) { __continuar = true; }
                    if (__btn == this._btnMonthActive)
                        return;
                    /*var n:number = Number(__btn.attr("data-value"));
                    var days:number = Utils.Functions.getNumberOfDays((n+1),2016);
        
                    for(var i = 27; i<31; i+=1) {
                        if(i<days) {
                            this._days[i].removeClass("disabled");
                        } else {
                            if(!this._days[i].hasClass("disabled")) {
                                this._days[i].removeClass("link-active");
                                this._days[i].addClass("disabled");
                            }
                        }
                    }*/
                    if (this._btnMonthActive != null) {
                        this._btnMonthActive.removeClass("link-active");
                    }
                    this._btnMonthActive = __btn;
                    this._btnMonthActive.addClass("link-active");
                    if (__continuar)
                        this.setupDate();
                };
                Calendar.prototype.checkMonths = function(__months) {
                    $(".link-month a").addClass("disabled");
                    for (var i = 0; i < __months.length; i++) {
                        this._months[__months[i]].children("a").removeClass("disabled");
                    }
                    $(".link-month .disabled").removeClass("link-active");
                };
                Calendar.prototype.pressDay = function(__btn, __continuar) {
                    if (__continuar === void 0) { __continuar = true; }
                    /*if(__btn == this._btnDayActive)   return;
        
                    var n:number = Number(__btn.attr("data-value"));
        
                    if(this._btnDayActive != null) {
                        this._btnDayActive.removeClass("link-active");
                    }
        
                    this._btnDayActive = __btn;
                    this._btnDayActive.addClass("link-active");
        
                    if(__continuar) this.setupDate();*/
                };
                Calendar.prototype.pressYear = function(__btn, __continuar) {
                    if (__continuar === void 0) { __continuar = true; }
                    if (__btn == this._btnYearActive)
                        return;
                    var n = Number(__btn.attr("data-value"));
                    if (this._btnYearActive != null) {
                        this._btnYearActive.removeClass("link-active");
                    }
                    this._btnYearActive = __btn;
                    this._btnYearActive.addClass("link-active");
                    if (__continuar)
                        this.setupDate();
                };
                Calendar.prototype.setupDate = function() {
                    var today = new Date();
                    var dd = 1;
                    var mm = 1;
                    var yyyy = today.getFullYear();
                    if (this._btnYearActive != null)
                        yyyy = Number(this._btnYearActive.attr("data-value"));
                    else
                        this.pressYear($("#y" + yyyy), false);
                    if (this._btnMonthActive != null)
                        mm = Number(this._btnMonthActive.attr("data-value"));
                    else
                        this.pressMonth($("#m" + mm), false);
                    /*if(this._btnDayActive!=null)   dd = Number(this._btnDayActive.attr("data-value"));
                    else    this.pressDay($("#d" + dd), false);*/
                    //alert(yyyy + " " + mm + " " + dd );
                    Windows.Agenda.getInstance().gotoDate(new Date(yyyy, mm, dd, 0, 0, 0, 0));
                };
                //==================================================================================================================
                //          SHOW HIDE
                //==================================================================================================================
                Calendar.prototype.show = function() {
                    if (this._first) {
                        this._navHolder.css("display", "block");
                        var btn;
                        var tClass = this;
                        var offset = this._width - (((this._width / 12) * 11) + tClass._months[tClass._months.length - 1].outerWidth());
                        var step = (this._width + offset) / 12; // - (((wTotal)/12)-((this._width)/12));
                        for (var i = 0, j = this._months.length; i < j; i += 1) {
                            btn = this._months[i];
                            btn.css("left", Number(step * i) + "px");
                            btn.children("a").click(function(e) {
                                e.preventDefault();
                                tClass.pressMonth($(this));
                            });
                        }
                    }
                    TweenMax.to(this._container, 1, { css: { height: this.heightCalendar }, ease: Quint.easeOut, force3D: true });
                    TweenMax.to(this._navHolder, 1, { css: { height: this.heightCalendar }, ease: Quint.easeOut, force3D: true });
                    TweenMax.to(this._linksHolder, 1, { css: { y: "0px" }, ease: Quint.easeOut, force3D: true });
                    if (Windows.Agenda.getInstance()._date != null)
                        Windows.Agenda.getInstance().show();
                    this._state = Calendar.STATE_OPEN;
                };
                Calendar.prototype.hide = function() {
                    TweenMax.to(this._container, 0.5, { css: { height: "0px" }, ease: Quad.easeOut, force3D: true });
                    TweenMax.to(this._navHolder, 0.5, { css: { height: "0px" }, ease: Quad.easeOut, force3D: true });
                    TweenMax.to(this._linksHolder, 1, { css: { y: "100px" }, ease: Quint.easeOut, force3D: true });
                    Windows.Agenda.getInstance().hide();
                    this._state = Calendar.STATE_CLOSE;
                };
                Calendar.prototype.hideFast = function() {
                    // $(window).unbind("keydown");
                    TweenMax.to(this._container, 0.4, { css: { height: "0px" }, ease: Quad.easeOut, force3D: true });
                    TweenMax.to(this._navHolder, 0.4, { css: { height: "0px" }, ease: Quad.easeOut, force3D: true });
                    TweenMax.to(this._linksHolder, 1, { css: { y: "200px" }, ease: Quint.easeOut, force3D: true });
                    this._state = Calendar.STATE_CLOSE;
                };
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                Calendar.prototype.toogleState = function() {
                    if (!this.isOpen) {
                        this.show();
                    } else {
                        this.hide();
                    }
                };
                Calendar.prototype.directHide = function() {
                    this._state = Calendar.STATE_CLOSE;
                    TweenLite.set(this._container, { css: { height: "0px" }, force3D: true });
                    TweenLite.set(this._navHolder, { css: { height: "0px" }, force3D: true });
                    TweenLite.set(this._linksHolder, { css: { y: "200px" }, force3D: true });
                };
                Calendar.prototype.resize = function() {
                    this._container.width(cuchillo.DataHolder.DatosBasicos.WIDTH_INSIDE);
                    if (cuchillo.DataHolder.DatosBasicos.WIDTH < 500)
                        this.heightCalendar = 170;
                    else
                        this.heightCalendar = 310;
                };
                return Calendar;
            }());
            Calendar._instance = null;
            Calendar.STATE_OPEN = "OPEN";
            Calendar.STATE_CLOSE = "CLOSE";
            Windows.Calendar = Calendar;
        })(Windows = cuchillo.Windows || (cuchillo.Windows = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Windows;
        (function(Windows) {
            var Agenda = (function() {
                function Agenda() {
                    this._state = "CLOSE";
                    this._data = null;
                    var tClass = this;
                    this._container = $("#agenda");
                    this._linksHolder = $(".agenda-previews");
                    this.directHide();
                    this._data = null;
                    this._limit = cuchillo.DataHolder.DatosBasicos.WIDTH <= cuchillo.DataHolder.DatosBasicos.SMARTPHONE ? 200 : 360;
                }
                Object.defineProperty(Agenda.prototype, "isOpen", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() { return this._state == Agenda.STATE_OPEN; },
                    enumerable: true,
                    configurable: true
                });
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                Agenda.getInstance = function() {
                    if (com.cuchillo.Windows.Agenda._instance === null) {
                        com.cuchillo.Windows.Agenda._instance = new com.cuchillo.Windows.Agenda();
                    }
                    return com.cuchillo.Windows.Agenda._instance;
                };
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                Agenda.prototype.loadData = function() {
                    var tClass = this;
                    $.ajax({
                        type: 'GET',
                        url: "../api/v1/projects.json?fields[projects]=title,scheduled-at,url&sort=scheduled-at",
                        headers: {
                            'Content-Type': 'application/vnd.api+json',
                            'Accept-Language': document.documentElement.lang
                        },
                        success: function(data) {
                            tClass.setupRecords(data.data);
                        }
                    });
                };
                Agenda.prototype.setupRecords = function(__data) {
                    var year = 0;
                    var offset = 0;
                    $("#results-agenda").empty();
                    this._data = [];
                    for (var i = 0; i < __data.length; i++) {
                        var item = {
                            date: new Date(__data[i].attributes["scheduled-at"]),
                            dateEnd: __data[i].attributes["scheduled-end"] ? new Date(__data[i].attributes["scheduled-end"]) : new Date(__data[i].attributes["scheduled-at"]),
                            year: new Date(__data[i].attributes["scheduled-at"]).getFullYear(),
                            month: new Date(__data[i].attributes["scheduled-at"]).getUTCMonth(),
                            id: __data[i].id,
                            title: __data[i].attributes.title,
                            subtitle: __data[i].attributes.url,
                            url: __data[i].attributes.url
                        };
                        this._data.push(item);
                        if (year != item.date.getFullYear()) {
                            year = item.date.getFullYear();
                            offset = 220;
                            $('<span class="agenda-separador">' + year + '</span>').appendTo($("#results-agenda"));
                        } else {
                            offset = 0;
                        }
                        $('<article class="preview-article table" id="' + item.id + '" data-offset="' + offset + '">' +
                                '<div class="date-holder">' +
                                '<div class="aux-holder">' +
                                '<div class="day">' + item.date.getUTCDate() + '</div>' +
                                '<div class="month">' + cuchillo.Utils.Functions.monthName(item.date.getUTCMonth()) + '</div>' +
                                '</div>' +
                                '<div class="diagonal-line-assertive">' +
                                '<svg width="100%" height="100%">' +
                                '<line x1="95%" y1="5%" x2="5%" y2="95%"></line>' +
                                '</svg>' +
                                '</div>' +
                                '</div>' +
                                '<div class="info-holder">' +
                                '<h3>' + item.subtitle + '</h3>' +
                                '<h2 class="__u">' + item.title + '</h2>' +
                                '<div class="fecha_fin">' + this.endDate(item.dateEnd) + '</div>' +
                                '</div>' +
                                '<a data-type-link="link-interno" href="' + item.url + '" target="_self"></a>' +
                                '</article>')
                            .appendTo($("#results-agenda"));
                    }
                    this._limit = $("#results-agenda").outerHeight() - (cuchillo.DataHolder.DatosBasicos.HEIGHT - this._limit);
                    this.gotoDate(this._date);
                };
                Agenda.prototype.endDate = function(__date) {
                    if (window.location.href.indexOf("/es") > -1)
                        return "fin: " + this.n10(__date.getUTCDate()) + "/" + this.n10(Number(__date.getUTCMonth() + 1)) + "/" + __date.getFullYear();
                    else
                        return "amaiera: " + this.n10(__date.getUTCDate()) + "/" + this.n10(Number(__date.getUTCMonth() + 1)) + "/" + __date.getFullYear();
                };
                Agenda.prototype.n10 = function(__n) {
                    if (__n < 10)
                        return "0" + __n;
                    else
                        return __n;
                };
                //==================================================================================================================
                //          SHOW HIDE
                //==================================================================================================================
                Agenda.prototype.gotoDate = function(__date) {
                    this._date = __date;
                    if (this._data == null || this._data == undefined)
                        this.loadData();
                    else {
                        var y = this._limit; //Math.min(this._limit, document.getElementById(this._data[this._data.length-1].id).offsetTop - Number($("#" + this._data[this._data.length-1].id).attr("data-offset")));
                        for (var i = 0, j = this._data.length; i < j; i++) {
                            if (__date <= this._data[i].date) {
                                if (i == 0)
                                    y = 0;
                                else {
                                    y = Math.min($("#results-agenda").outerHeight() - (cuchillo.DataHolder.DatosBasicos.HEIGHT - 360), document.getElementById(this._data[i].id).offsetTop - Number($("#" + this._data[i].id).attr("data-offset")));
                                }
                                break;
                            }
                        }
                        TweenMax.to($("#agenda"), 1, { scrollTo: y, ease: Expo.easeOut });
                        Windows.Calendar.getInstance().checkMonths(this.activeMonths(this._date.getFullYear()));
                    }
                    if (this._state == Agenda.STATE_CLOSE)
                        this.show();
                };
                Agenda.prototype.activeMonths = function(__year) {
                    var months = [];
                    for (var i = 0; i < this._data.length; i++) {
                        if (this._data[i].year === __year) {
                            if (i === 0) {
                                months.push(this._data[i].month);
                            } else {
                                if (this._data[i].month != months[i - 1]) {
                                    months.push(this._data[i].month);
                                }
                            }
                        }
                    }
                    return months;
                };
                Agenda.prototype.show = function() {
                    $("body").css("overflow-y", "hidden");
                    this._container.css("display", "block");
                    TweenMax.to(this._container, 0.4, { css: { opacity: 1 }, ease: Quint.easeOut, force3D: true });
                    TweenMax.to(this._linksHolder, 1, { css: { y: "0px" }, ease: Quint.easeOut, force3D: true });
                    this._state = Agenda.STATE_OPEN;
                };
                Agenda.prototype.hide = function() {
                    var tClass = this;
                    TweenMax.to(this._container, 0.2, {
                        css: { opacity: 0 },
                        ease: Quad.easeOut,
                        force3D: true,
                        onComplete: function() {
                            tClass._container.css("display", "none");
                            $("body").css("overflow-y", "scroll");
                        }
                    });
                    TweenMax.to(this._linksHolder, 0.4, { css: { y: "-200px" }, ease: Quad.easeOut, force3D: true });
                    this._state = Agenda.STATE_CLOSE;
                };
                Agenda.prototype.hideFast = function() {
                    var tClass = this;
                    TweenMax.to(this._container, 0.4, {
                        css: { opacity: 0 },
                        ease: Quad.easeOut,
                        force3D: true,
                        onComplete: function() {
                            tClass._container.css("height", "0px");
                        }
                    });
                    TweenMax.to(this._linksHolder, 1, { css: { y: "-200px" }, ease: Quint.easeOut, force3D: true });
                    this._state = Agenda.STATE_CLOSE;
                };
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                Agenda.prototype.toogleState = function() {
                    if (!this.isOpen) {
                        this.show();
                    } else {
                        this.hide();
                    }
                };
                Agenda.prototype.directHide = function() {
                    this._state = Agenda.STATE_CLOSE;
                    this._container.css("display", "none");
                    $("body").css("overflow-y", "scroll");
                    TweenLite.set(this._container, { css: { opacity: 0 }, force3D: true });
                    TweenLite.set(this._linksHolder, { css: { y: "-200px" }, force3D: true });
                };
                Agenda.prototype.resize = function() {
                    this._container.width(cuchillo.DataHolder.DatosBasicos.WIDTH_INSIDE);
                };
                return Agenda;
            }());
            Agenda._instance = null;
            Agenda.STATE_OPEN = "OPEN";
            Agenda.STATE_CLOSE = "CLOSE";
            Windows.Agenda = Agenda;
        })(Windows = cuchillo.Windows || (cuchillo.Windows = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Pages;
        (function(Pages) {
            var PageController = (function() {
                function PageController() {}
                //==================================================================================================================
                //          INIT
                //==================================================================================================================
                PageController.init = function(__element) {
                    PageController.container = __element;
                    PageController.containerAux = $("#auxHolder");
                    cuchillo.Utils.UrlManager.setup(PageController.hidePage.bind(PageController));
                };
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                PageController.changePage = function(__href, __isAll, __selector) {
                    if (__href === void 0) { __href = ""; }
                    if (__isAll === void 0) { __isAll = true; }
                    if (__selector === void 0) { __selector = "main"; }
                    PageController._userAction = true;
                    PageController._directHref = __href;
                    PageController._isAll = __isAll;
                    PageController._selector = __selector;
                    cuchillo.Utils.UrlManager.pushState({}, document.title, PageController._directHref);
                };
                PageController.directLink = function() {
                    //window.location.href    =   PageController._directHref;
                };
                PageController.hidePage = function() {
                    if (PageController._isAll) {
                        var pageId = cuchillo.Utils.UrlManager.pageId == undefined ? "" : cuchillo.Utils.UrlManager.pageId;
                        PageController._pageNext = pageId;
                        if (PageController._firsTime)
                            PageController.loadPage();
                        else
                            PageController._page.hide();
                    } else {
                        var __c = $(PageController._selector).parent();
                        if (PageController.jqXHR != null) {
                            PageController.jqXHR.abort();
                        } else {
                            __c.addClass("__loading");
                        }
                        PageController.jqXHR = $.ajax({
                                dataType: 'html',
                                url: cuchillo.Utils.UrlManager.url
                            })
                            .done(function(data) {
                                PageController.jqXHR = null;
                                $(PageController._selector).replaceWith($(data).find(PageController._selector));
                                __c.removeClass("__loading");
                            })
                            .fail(function(fail) {
                                PageController.jqXHR = null;
                            });
                    }
                };
                PageController.loadPage = function() {
                    cuchillo.Main.getInstance()._scrollable.scrollTop(0);
                    cuchillo.Scroll.MrScroll.positionMomentum1 = 0;
                    cuchillo.Scroll.MrScroll.positionMomentum2 = 0;
                    cuchillo.Scroll.MrScroll.positionMomentum3 = 0;
                    PageController._pageNow = (PageController._pageNext == "") ? cuchillo.Utils.UrlManager.pageId : PageController._pageNext;
                    PageController._pageNext = "";
                    if (PageController._firsTime) {
                        PageController.continueLoad();
                        PageController._firsTime = false;
                    } else {
                        if (PageController.jqXHR != null) {
                            PageController.jqXHR.abort();
                        }
                        PageController.jqXHR = $.ajax({
                                dataType: 'html',
                                url: cuchillo.Utils.UrlManager.url
                            })
                            .done(function(data) {
                                PageController.jqXHR = null;
                                $("#contentHolder").replaceWith($(data).find("#contentHolder"));
                                $("#languageSelector").replaceWith($(data).find("#languageSelector"));
                                cuchillo.InterfaceItems.PreloadBar.getInstance().hideToCallback(PageController.continueLoad.bind(PageController));
                            })
                            .fail(function(fail) {
                                PageController.jqXHR = null;
                            });
                    }
                };
                PageController.continueLoad = function() {
                    $("body").removeAttr('class');
                    if ($("#programs").length > 0) {
                        PageController._page = new Pages.Program();
                        $("body").addClass('scheme-red');
                    } else if ($("#announcements").length > 0) {
                        PageController._page = new Pages.Program();
                        $("body").addClass('scheme-grey');
                    } else if ($("#announcement_detail").length > 0) {
                        PageController._page = new Pages.Page();
                        $("body").addClass('scheme-grey');
                    } else if ($("#red_mapa").length > 0) {
                        PageController._page = new Pages["RedAmp"]();
                    } else {
                        PageController._page = new Pages.Page();
                        $("body").addClass('scheme-white');
                    }
                    /*if(!PageController._firsTime) {
                        PageController.container.parent().scrollTo(0, 0);
                        PageController.container.children("main").remove();
                        PageController.containerAux.children("main").prependTo(PageController.container);
                    }*/
                    PageController._page.load();
                };
                return PageController;
            }());
            PageController._pageNow = "";
            PageController._pageNext = "";
            PageController._firsTime = true;
            PageController._isAll = true;
            PageController.jqXHR = null;
            Pages.PageController = PageController;
        })(Pages = cuchillo.Pages || (cuchillo.Pages = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Pages;
        (function(Pages) {
            var Page = (function() {
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function Page() {
                    this.itemsToLoad = [];
                    this.numberPreload = 0;
                    this._itemsToDispose = [];
                    this._itemsToLoop = [];
                    this._itemsToResize = [];
                }
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                Page.prototype.checkScroll = function() {};
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                Page.prototype.contentLoaded = function() {
                    var manifest = [];
                    cuchillo.Loaders.Preloader.mode = cuchillo.Loaders.Preloader.LOAD_PROGRESSIVE;
                    for (var i = 0, j = this.itemsToLoad.length; i < j; i += 1) {
                        if (this.itemsToLoad[i].isImportant) {
                            this.itemsToLoad.splice(i, 1);
                            i -= 1;
                            j = this.itemsToLoad.length;
                        } else {
                            cuchillo.Loaders.Preloader.add(this.itemsToLoad[i]);
                        }
                    }
                    this.activate();
                };
                Page.prototype.load = function() {
                    var tClass = this;
                    var item;
                    //PAGE HEADER
                    cuchillo.InterfaceItems.PageHeader.PageHeader.getInstance().checkInfo();
                    //
                    cuchillo.Loaders.Preloader.setup(this.contentLoaded.bind(this));
                    cuchillo.Loaders.Preloader.mode = cuchillo.Loaders.Preloader.LOAD_FIRSTSHOW;
                    $("[data-item-load]").each(function() {
                        var _continue = true;
                        if (cuchillo.DataHolder.DatosBasicos.isMobile) {
                            if ($(this).attr("data-item-mobile") == "false") {
                                $(this).remove();
                                _continue = false;
                            }
                        } else {
                            if ($(this).attr("data-item-mobile") == "only") {
                                $(this).remove();
                                _continue = false;
                            }
                        }
                        if (_continue) {
                            if ($(this).hasClass("bg"))
                                item = new cuchillo.Display.BGObject($(this));
                            else if ($(this).hasClass("video"))
                                item = new cuchillo.Display.VideoObject($(this));
                            else
                                item = new cuchillo.Display.ImageObject($(this));
                            if (cuchillo.Loaders.Preloader.total < tClass.numberPreload) {
                                item.isImportant = true;
                                item.showEffect = false;
                            }
                            tClass.itemsToLoad.push(item);
                            if (item.isImportant)
                                cuchillo.Loaders.Preloader.add(item);
                        }
                    });
                    cuchillo.Loaders.Preloader.init();
                };
                Page.prototype.activate = function() {
                    //SETUP LINKS
                    var tClass = this;
                    $("#mainHolder a[data-type-link='link-interno']").each(function() {
                        var ttClass = tClass;
                        $(this).click(function(e) {
                            e.preventDefault();
                            Pages.PageController.changePage($(this).attr("href"));
                        });
                    });
                    //SETUP LINES EFFECT
                    //RESIZE
                    cuchillo.Main.getInstance().resize();
                    //SLIDER
                    $(".__slider").each(function() {
                        var item = new cuchillo.InterfaceItems.Slider($(this));
                        tClass._itemsToDispose.push(item);
                        tClass._itemsToResize.push(item);
                    });
                    //Previews
                    if ($(".__u").length > 0) {
                        var s = new SplitText(".__u", { type: "lines", linesClass: "__l" });
                        $(".__u .__l:last-child")
                            .addClass("__l_effect")
                            .css("display", "inline");
                    }
                    //FORMS
                    $("form").each(function() {
                        if ($(this).attr("data-href") != undefined) {
                            new cuchillo.Forms.FormValidator($(this));
                        }
                    });
                    //RESIZE
                    cuchillo.Main.getInstance().resize();
                    //SHOW
                    cuchillo.InterfaceItems.PreloadBar.getInstance().hide(this.show.bind(this));
                };
                Page.prototype.show = function() {
                    com.cuchillo.InterfaceItems.PageHeader.PageHeader.getInstance().show();
                };
                Page.prototype.hide = function() {
                    cuchillo.Loaders.Preloader.cancel();
                    cuchillo.InterfaceItems.PreloadBar.getInstance().hideToCallback(this.dispose.bind(this));
                };
                Page.prototype.dispose = function() {
                    cuchillo.InterfaceItems.PageHeader.PageHeader.getInstance().dispose();
                    for (var i = 0, j = this._itemsToDispose.length; i < j; i++) {
                        this._itemsToDispose[i].dispose();
                    }
                    this._itemsToDispose = [];
                    this._itemsToResize = [];
                    Pages.PageController.loadPage();
                };
                Page.prototype.resize = function() {
                    for (var i = 0, j = this._itemsToResize.length; i < j; i++) {
                        this._itemsToResize[i].resize();
                    }
                };
                Page.prototype.loop = function() {};
                return Page;
            }());
            Pages.Page = Page;
        })(Pages = cuchillo.Pages || (cuchillo.Pages = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Pages;
        (function(Pages) {
            var PageHeader = com.cuchillo.InterfaceItems.PageHeader.PageHeader;
            var Program = (function(_super) {
                __extends(Program, _super);
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function Program() {
                    var _this = _super.call(this) || this;
                    _this.numberPreload = 0;
                    return _this;
                }
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                Program.prototype.setup = function() {
                    //this._mainH1 = new InterfaceItems.RotatedItem($(".rotated-h1"));
                    //PROGRAM
                    if (!cuchillo.DataHolder.DatosBasicos.isMobile) {
                        this.items = [];
                        var cont = 0;
                        $(".list-item-programa").each(function() {
                            new cuchillo.InterfaceItems.ProgramItemList($(this), cont);
                            cont += 1;
                        });
                    }
                };
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                Program.prototype.load = function() {
                    _super.prototype.load.call(this);
                };
                Program.prototype.contentLoaded = function() {
                    _super.prototype.contentLoaded.call(this);
                };
                Program.prototype.activate = function() {
                    this.setup();
                    _super.prototype.activate.call(this);
                };
                Program.prototype.show = function() {
                    PageHeader.getInstance().show();
                    _super.prototype.show.call(this);
                };
                Program.prototype.hide = function() {
                    _super.prototype.hide.call(this);
                };
                Program.prototype.dispose = function() {
                    _super.prototype.dispose.call(this);
                };
                Program.prototype.resize = function() {
                    _super.prototype.resize.call(this);
                };
                //==================================================================================================================
                //          ANIMATE
                //==================================================================================================================
                Program.prototype.loop = function() {};
                return Program;
            }(Pages.Page));
            Pages.Program = Program;
        })(Pages = cuchillo.Pages || (cuchillo.Pages = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Pages;
        (function(Pages) {
            var RedAmp = (function(_super) {
                __extends(RedAmp, _super);
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function RedAmp() {
                    var _this = _super.call(this) || this;
                    _this._enabled = false;
                    _this.textureParticle = PIXI.Texture.fromImage("../assets/images/punto-2.png");
                    return _this;
                }
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                RedAmp.prototype.loadData = function() {
                    var tClass = this;
                    $.ajax({
                        type: 'GET',
                        url: "../api/v1/artists.json?include=tags&sort=name",
                        headers: {
                            'Content-Type': 'application/vnd.api+json',
                            'Accept-Language': document.documentElement.lang
                        },
                        success: function(data) {
                            cuchillo.DataHolder.DatosBasicos.artists = [];
                            for (var i = 0, j = data.data.length; i < j; i++) {
                                var tags = [];
                                var tagsData = data.data[i].relationships.tags.data;
                                for (var k = 0; k < tagsData.length; k++) {
                                    tags.push(Number(tagsData[k].id));
                                }
                                cuchillo.DataHolder.DatosBasicos.artists.push({ id: data.data[i].id, attributes: data.data[i].attributes, tags: tags });
                            }
                            tClass.loadTags();
                        }
                    });
                };
                RedAmp.prototype.loadTags = function() {
                    var tClass = this;
                    $.ajax({
                        type: 'GET',
                        url: "../api/v1/tags.json?sort=title",
                        headers: {
                            'Content-Type': 'application/vnd.api+json',
                            'Accept-Language': document.documentElement.lang
                        },
                        success: function(data) {
                            cuchillo.DataHolder.DatosBasicos.tags = [];
                            for (var i = 0, j = data.data.length; i < j; i++) {
                                cuchillo.DataHolder.DatosBasicos.tags.push({ id: data.data[i].id, attributes: data.data[i].attributes });
                            }

                            tClass.setup();
                        }
                    });
                };
                RedAmp.prototype.setup = function() {
                    // if(!DataHolder.DatosBasicos.isMobile) {
                    /*
    
                        BORRAR
    
                     */
                    //SETUP LINKS
                    var tClass = this;
                    //RESIZE
                    /*
    
                        BORRAR
    
                     */
                    cuchillo.DataHolder.DatosBasicos.CANVAS_WIDTH = 850;
                    cuchillo.DataHolder.DatosBasicos.CANVAS_HEIGHT = 850;
                    //STAGE
                    this._stage = new cuchillo.Pixi.Stage(cuchillo.DataHolder.DatosBasicos.CANVAS_WIDTH, cuchillo.DataHolder.DatosBasicos.CANVAS_HEIGHT, false, false, 0xFFFFFF, "redAMP");
                    $("#canvas-holder").append(this._stage.view);
                    PIXI.GC_MODES.DEFAULT = PIXI.GC_MODES.AUTO;
                    this._mainContainer = new PIXI.Container();
                    this._spriteRenderer = new cuchillo.Pixi.Renderer("RENDERER_TV", this._stage, cuchillo.DataHolder.DatosBasicos.CANVAS_WIDTH, cuchillo.DataHolder.DatosBasicos.CANVAS_HEIGHT, this._mainContainer);
                    $(".artistHolder").css("display", "none");
                    $(".artistHolder").css("opacity", "0");
                    cuchillo.Red.ParticlesEngine.setup(this.textureParticle);
                    cuchillo.Red.TagsController.getInstance().setup(this.graphics);
                    cuchillo.Red.ArtistsController.getInstance().setup();
                    this._mainContainer.addChild(cuchillo.Red.ParticlesEngine.container);
                    this._stage.addChild(this._mainContainer);
                    /* } else {
                         $("#canvas-holder").remove();
                         Red.ArtistsController.getInstance().setupMobile();
                     }*/
                    this.init();
                };
                RedAmp.prototype.init = function() {
                    //if(!DataHolder.DatosBasicos.isMobile) {
                    this._stage.activate();
                    cuchillo.Red.ParticlesEngine.init();
                    this._enabled = true;
                    //}
                    //SHOW
                    cuchillo.Main.getInstance().resize();
                    cuchillo.InterfaceItems.PreloadBar.getInstance().hide(this.preshow.bind(this));
                };
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                //==================================================================================================================
                //          OVERRIDE
                //==================================================================================================================
                RedAmp.prototype.activate = function() {
                    this.loadData();
                };
                RedAmp.prototype.preshow = function() {
                    var tClass = this;
                    requestAnimationFrame(function() { tClass.show(); });
                };
                RedAmp.prototype.show = function() {
                    _super.prototype.show.call(this);
                };
                RedAmp.prototype.resize = function() {
                    //if(!DataHolder.DatosBasicos.isMobile) {
                    var scale = Math.min(1, Math.min(cuchillo.DataHolder.DatosBasicos.HEIGHT / 1100, cuchillo.DataHolder.DatosBasicos.WIDTH_INSIDE / 1100));
                    $("#canvas-holder")[0].style.transform = "scale(" + scale + "," + scale + ")";
                    $("#canvas-main-holder").css("height", (1100 * scale) + "px");
                    //}
                };
                //==================================================================================================================
                //          ANIMATE
                //==================================================================================================================
                RedAmp.prototype.loop = function() {
                    if (this._enabled) {
                        cuchillo.Red.ParticlesEngine.loop();
                        cuchillo.Red.TagsController.getInstance().loop();
                        cuchillo.Red.ArtistsController.getInstance().loop();
                        this._spriteRenderer.loop();
                        this._stage.loop();
                    }
                };
                return RedAmp;
            }(Pages.Page));
            Pages.RedAmp = RedAmp;
        })(Pages = cuchillo.Pages || (cuchillo.Pages = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Pixi;
        (function(Pixi) {
            var Stage = (function() {
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function Stage(__w, __h, __interactive, __transparent, __color, __id, __maxW, __maxH, __positionType, __type) {
                    if (__w === void 0) { __w = 100; }
                    if (__h === void 0) { __h = 100; }
                    if (__interactive === void 0) { __interactive = true; }
                    if (__transparent === void 0) { __transparent = false; }
                    if (__color === void 0) { __color = 0xFFFFFF; }
                    if (__id === void 0) { __id = ""; }
                    if (__maxW === void 0) { __maxW = 0; }
                    if (__maxH === void 0) { __maxH = 0; }
                    if (__positionType === void 0) { __positionType = "FIXED"; }
                    if (__type === void 0) { __type = "AUTO"; }
                    this.rendererTexture = null;
                    this.enabled = false;
                    this._stage = new PIXI.Container();
                    this.id = __id;
                    this._maxW = __maxW;
                    this._maxH = __maxH;
                    this._positionType = __positionType;
                    var rendererOptions = {
                        transparent: __transparent,
                        autoResize: true,
                        antialias: true,
                        roundPixels: true,
                        resolution: 1,
                        backgroundColor: __color
                    };
                    this._renderer = PIXI.autoDetectRenderer(__w, __h, rendererOptions);
                }
                Object.defineProperty(Stage.prototype, "view", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() {
                        return this._renderer.view;
                    },
                    enumerable: true,
                    configurable: true
                });
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                Stage.prototype.loop = function() {
                    if (this.enabled) {
                        this._renderer.render(this._stage);
                    }
                };
                Stage.prototype.dispose = function() {
                    this.enabled = false;
                    this._renderer.destroy();
                    this._stage = null;
                    this._renderer = null;
                };
                Stage.prototype.activate = function() {
                    this.enabled = true;
                };
                Stage.prototype.hide = function() {
                    this.dispose();
                };
                Stage.prototype.addChild = function(__s) {
                    this._stage.addChild(__s);
                };
                Stage.prototype.addChildAt = function(__s, __n) {
                    this._stage.addChildAt(__s, __n);
                };
                Stage.prototype.resize = function(__w, __h) {
                    /*var wIr:number = Math.min(__w, this._maxW);
                    var hIr:number = Math.min(__h, this._maxH);
                    var sIr:number = Math.max(__w/wIr, __h/hIr);
                    var secureW:number = wIr*sIr;
                    var secureH:number = hIr*sIr;
        
                    this._renderer.resize(wIr, hIr);
        
                    switch(this._positionType) {
                        case "FULL":
                            this._renderer.view.style.width = "" + secureW + "px";
                            this._renderer.view.style.height = "" + secureH + "px";
                            this._renderer.view.style.left = "" + Number(__w/2 - secureW/2) + "px";
                            this._renderer.view.style.top = "" + Number(__h/2 - secureH/2) + "px";
                            break;
        
                        case "CENTER":
                            this._renderer.view.style.width = "" + wIr + "px";
                            this._renderer.view.style.height = "" + hIr + "px";
                            this._renderer.view.style.left = "" + Number(__w/2 - wIr/2) + "px";
                            this._renderer.view.style.top = "" + Number(__h/2 - hIr/2) + "px";
                            break;
        
                    }*/
                    this._renderer.resize(__w, __h);
                    this._renderer.view.style.width = "" + __w + "px";
                    this._renderer.view.style.height = "" + __h + "px";
                    /*if((__w > this._maxW && this._maxW > 0) || (__h > this._maxH && this._maxH > 0)) {
        
        
        
        
        
                        var scale:number = Math.min(this._maxW/__w, this._maxH/__h);
                        this._renderer.resize(__w*scale, __h*scale);
        
                        scale = Math.max(this._maxW/__w, this._maxH/__h);
                        this._renderer.view.style.width = "" + Number(__w*scale) + "px";
                        this._renderer.view.style.height = "" + Number(__h*scale) + "px";
                    } else {
                        this._renderer.resize(__w, __h);
                        this._renderer.view.style.width = "" + __w + "px";
                        this._renderer.view.style.height = "" + __h + "px";
                    }*/
                };
                Stage.prototype.position = function(__x, __y) {
                    this._renderer.view.style.left = "" + __x + "px";
                    this._renderer.view.style.top = "" + __y + "px";
                };
                return Stage;
            }());
            Pixi.Stage = Stage;
        })(Pixi = cuchillo.Pixi || (cuchillo.Pixi = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Pixi;
        (function(Pixi) {
            var Renderer = (function() {
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                function Renderer(__id, __stage, __w, __h, __container) {
                    this.id = "";
                    this.id = __id;
                    //this._baseRenderRexture     =   new PIXI.BaseRenderTexture(__w, __h, PIXI.SCALE_MODES.LINEAR, 1);
                    this._renderRexture = PIXI.RenderTexture.create(__w, __h); //new RenderTexture(this._baseRenderRexture);
                    this._sprite = new PIXI.Sprite(this._renderRexture);
                    this._stage = __stage;
                    this._itemToRender = __container;
                }
                Object.defineProperty(Renderer.prototype, "sprite", {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    get: function() {
                        return this._sprite;
                    },
                    enumerable: true,
                    configurable: true
                });
                Renderer.prototype.loop = function() {
                    this._stage._renderer.render(this._itemToRender, this._renderRexture, true);
                    this._sprite.texture = this._renderRexture;
                };
                Renderer.prototype.resize = function(__w, __h) {
                    //this._sprite.texture.destroy();
                    //this._renderRexture         =   new PIXI.RenderTexture(this._stage._renderer, __w, __h, PIXI.SCALE_MODES.LINEAR, 2);
                    //this._sprite.texture        =   this._renderRexture;
                };
                return Renderer;
            }());
            Pixi.Renderer = Renderer;
        })(Pixi = cuchillo.Pixi || (cuchillo.Pixi = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Pixi;
        (function(Pixi) {
            var Particles;
            (function(Particles) {
                var Emitter = (function() {
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    function Emitter(__container) {
                        this.POINT_NUMBER = 1;
                        this.MAX = 300;
                        this.SCALE = new PIXI.Point(10, 5);
                        this.LIFE = new PIXI.Point(500, 200);
                        this.ANGLE = new PIXI.Point(120, 80);
                        this.SPEED = new PIXI.Point(120, 10);
                        this.OFFSET = new PIXI.Point(0, 0);
                        this.isStart = false;
                        this.particles = [];
                        this.containerParticles = new PIXI.Container();
                        this.MAX = Math.max(100, Math.min(300, 300 * (cuchillo.DataHolder.DatosBasicos.WIDTH / 1800)));
                        this.rect = new PIXI.Rectangle(-100, -400, cuchillo.DataHolder.DatosBasicos.WIDTH + 200, cuchillo.DataHolder.DatosBasicos.HEIGHT + 800);
                        var radius = 0;
                        for (var i = 0; i < 20; i++) {
                            var centerX = cuchillo.DataHolder.DatosBasicos.WIDTH / 2;
                            var centerY = cuchillo.DataHolder.DatosBasicos.HEIGHT / 2;
                            var radian = 2 * Math.PI / this.POINT_NUMBER;
                            var _rc;
                            var _d;
                            var texture = PIXI.Texture.fromImage("../assets/images/punto.png");
                            for (var j = 0; j < this.POINT_NUMBER; j++) {
                                _d = (radian * (j + 1)) - (radian * j);
                                _rc = radius / Math.cos(_d * .5);
                                var p = new Particles.BasicParticle(texture, new PIXI.Point(centerX + _rc * Math.cos(radian * (j + 1) - _d * .5), centerY + _rc * Math.sin(radian * (j + 1) - _d * .5)));
                                this.particles.push(p);
                                this.containerParticles.addChild(p);
                            }
                            radius = radius + 20;
                            this.POINT_NUMBER = this.POINT_NUMBER + 8;
                        }
                        /*var circle = new PIXI.Graphics();
                        circle.lineStyle(5, 0xFFFFFF, 1);
                        circle.drawCircle(centerX,centerY,15);
                        __container.addChild(circle);*/
                        __container.addChild(this.containerParticles);
                        this.container = __container;
                    }
                    //==================================================================================================================
                    //          PRIVATE
                    //==================================================================================================================
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    Emitter.prototype.init = function() {
                        this.isStart = true;
                    };
                    /*public changeVelocidad(__x:number):void {
                        this.OFFSET_Y   =   -15;
                        //TweenLite.to(this, 0.4, {SPEED_Y:__x, ease:Quad.easeIn, delay: 0.3});
                    }*/
                    Emitter.prototype.hide = function() {
                        var tClass = this;
                        this.container.alpha = 0;
                        TweenLite.to(this.container, 1, {
                            alpha: 0,
                            ease: Quad.easeIn,
                            onComplete: function() {
                                tClass.stop();
                            }
                        });
                    };
                    Emitter.prototype.show = function() {
                        var tClass = this;
                        this.start();
                        TweenLite.to(this.container, 1, { alpha: 1, ease: Quad.easeIn });
                    };
                    Emitter.prototype.start = function() {
                        this.isStart = true;
                    };
                    Emitter.prototype.stop = function() {
                        this.isStart = false;
                    };
                    Emitter.prototype.loop = function() {
                        if (!this.isStart)
                            return;
                        //this.OFFSET_Y   =   Math.min(10,Math.max(-10, -(Scroll.MrScroll.delta*0.4)));
                        /*if(this.OFFSET_X > 0 && this.OFFSET_X<0.1 || this.OFFSET_X < 0 && this.OFFSET_X>-0.1) this.OFFSET_X  =   0;
                        else    this.OFFSET_X   =   this.OFFSET_X * 0.98;
            
                        if(this.OFFSET_Y > 0 && this.OFFSET_Y<0.1 || this.OFFSET_Y < 0 && this.OFFSET_Y>-0.1) this.OFFSET_Y  =   0;
                        else    this.OFFSET_Y   =   this.OFFSET_Y * 0.98;*/
                        /*if(Math.round(this.OFFSET_X) == 0)  this.OFFSET_X  =   0;
                        else                                this.OFFSET_X   =   this.OFFSET_X * 0.98;
            
                        if(Math.round(this.OFFSET_Y) == 0)  this.OFFSET_Y  =   0;
                        else                                 this.OFFSET_Y  =   this.OFFSET_Y * 0.98;*/
                        /* var p:PIXI.Point    =   new PIXI.Point(0,0);
                         var alpha:number    =   0;
                         var distance:number =   0;
                         var cont:number     =   0;
                         var vertices = [];*/
                        for (var i = 0; i < this.MAX; i++) {
                            this.particles[i].loop();
                        }
                    };
                    Emitter.prototype.getPosition = function() {
                        return new PIXI.Point(cuchillo.Utils.Functions.maxminRandom(this.rect.x, this.rect.width), cuchillo.Utils.Functions.maxminRandom(this.rect.x, this.rect.height));
                    };
                    Emitter.prototype.getScale = function() {
                        return cuchillo.Utils.Functions.maxminRandom(this.SCALE.x, this.SCALE.y) / 10;
                    };
                    Emitter.prototype.getLifetime = function() {
                        return cuchillo.Utils.Functions.maxminRandom(this.LIFE.x, this.LIFE.y);
                    };
                    Emitter.prototype.getSpeed = function(__angle, __speed) {
                        if (__angle === void 0) { __angle = null; }
                        if (__speed === void 0) { __speed = null; }
                        var angle = __angle == null ? cuchillo.Utils.Functions.maxminRandom(this.ANGLE.x, this.ANGLE.y) / (Math.PI / 180) : __angle;
                        var speed = __speed == null ? cuchillo.Utils.Functions.maxminRandom(this.SPEED.x, this.SPEED.y) / 100 : __speed;
                        return new PIXI.Point(speed * Math.cos(angle), speed * Math.sin(angle));
                    };
                    Emitter.prototype.getAngle = function(__p1, __p2) {
                        var xDiff = __p2.x - __p1.x;
                        var yDiff = __p2.y - __p1.y;
                        return Math.atan2(yDiff, xDiff) * (180 / Math.PI);
                    };
                    Emitter.prototype.resize = function(__w, __h) {
                        this.rect = new PIXI.Rectangle(-100, -400, __w + 200, __h + 800);
                    };
                    return Emitter;
                }());
                Particles.Emitter = Emitter;
            })(Particles = Pixi.Particles || (Pixi.Particles = {}));
        })(Pixi = cuchillo.Pixi || (cuchillo.Pixi = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Pixi;
        (function(Pixi) {
            var Particles;
            (function(Particles) {
                var BasicParticle = (function(_super) {
                    __extends(BasicParticle, _super);
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    // new CustomButton("ico_powerdream.png", 160, 160, 0xFFFFFF, 1, 0x67666b, 1, 1.5);
                    function BasicParticle(__texture, __position) {
                        var _this = _super.call(this, __texture) || this;
                        _this.anchor.x = 0.5;
                        _this.anchor.y = 0.5;
                        _this.scale.x = .5;
                        _this.scale.y = .5;
                        _this.position = __position;
                        return _this;
                    }
                    //==================================================================================================================
                    //          PRIVATE
                    //==================================================================================================================
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    BasicParticle.prototype.loop = function() {};
                    BasicParticle.prototype.dispose = function() {};
                    return BasicParticle;
                }(PIXI.Sprite));
                Particles.BasicParticle = BasicParticle;
            })(Particles = Pixi.Particles || (Pixi.Particles = {}));
        })(Pixi = cuchillo.Pixi || (cuchillo.Pixi = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Pixi;
        (function(Pixi) {
            var Particles;
            (function(Particles) {
                var Particle = (function(_super) {
                    __extends(Particle, _super);
                    //==================================================================================================================
                    //          CONSTRUCTOR
                    //==================================================================================================================
                    // new CustomButton("ico_powerdream.png", 160, 160, 0xFFFFFF, 1, 0x67666b, 1, 1.5);
                    function Particle(__t, __p, __i, __c) {
                        var _this = _super.call(this, __t, __p) || this;
                        _this._target = new PIXI.Point(0, 0);
                        _this.targetMin = 3;
                        _this.tintMin = 1;
                        _this._targetSize = 3;
                        _this._targetTint = 1;
                        _this._tintAmount = 1;
                        _this._vel = 0.1;
                        _this.toShow = false;
                        _this.index = 0;
                        _this._circle = 0;
                        _this._bros = [];
                        _this._limit = 0;
                        _this._isArtist = false;
                        _this.idTime = 0;
                        _this.width =
                            _this.height =
                            _this._targetSize = 3;
                        _this.index = __i;
                        _this._circle = __c;
                        return _this;
                    }
                    Particle.prototype.addBro = function(__p) { this._limit = this._bros.push(__p); };
                    //==================================================================================================================
                    //          PRIVATE
                    //==================================================================================================================
                    Particle.prototype.toArtist = function() {
                        this._isArtist = true;
                        this.width =
                            this.height =
                            this._targetSize =
                            this.targetMin = 16;
                    };
                    Particle.prototype.over = function() {
                        this._tintAmount = 0;
                        this.dowave(20, new Date().valueOf(), this._tintAmount);
                    };
                    Particle.prototype.press = function(__v) {
                        if (__v === void 0) { __v = true; }
                        if (__v) {
                            this._tintAmount = -20;
                            this.dowave(40, new Date().valueOf(), this._tintAmount);
                        } else {
                            this._tintAmount = -20;
                            this.dowave(40, new Date().valueOf(), this._tintAmount);
                        }
                    };
                    //==================================================================================================================
                    //          PUBLIC
                    //==================================================================================================================
                    Particle.prototype.show = function() {
                        ///this.dowaveshow(40, new Date().valueOf(), this._tintAmount);
                    };
                    /*public dowaveshow(__n:number, __id:number, __tintAmount:number):void {
            
            
                        this._targetSize = this.targetMin;
                        this._targetTint = this.tintMin;
            
                        if(__id != this.idWave && __n > 3) {
                            var tClass = this;
            
                            this.idWave = __id;
            
                            this.width = this.height = __n;
                            this._tintAmount = __tintAmount;
            
                            clearTimeout(this.idTime);
                            this.idTime = setTimeout(function() {
                                for (var i = 0; i < tClass._limit; i++) {
                                    var p = tClass._bros[i].dowave(20, __id, tClass._tintAmount);
                                }
                            },20);
                        }
                    }*/
                    Particle.prototype.dowave = function(__n, __id, __tintAmount) {
                        if (this.targetMin == 0) {
                            var tClass = this;
                            this.idWave = __id;
                            clearTimeout(this.idTime);
                            this.idTime = setTimeout(function() {
                                for (var i = 0; i < tClass._limit; i++) {
                                    var p = tClass._bros[i].dowave(__n - 0.5, __id, __tintAmount);
                                }
                            }, 20);
                        } else {
                            this._targetSize = this.targetMin;
                            this._targetTint = this.tintMin;
                            if (__id != this.idWave && __n > 3) {
                                var tClass = this;
                                this.idWave = __id;
                                this.width = this.height = __n + this.targetMin;
                                this._tintAmount = __tintAmount;
                                clearTimeout(this.idTime);
                                this.idTime = setTimeout(function() {
                                    for (var i = 0; i < tClass._limit; i++) {
                                        var p = tClass._bros[i].dowave(__n - 0.5, __id, tClass._tintAmount);
                                    }
                                }, 20);
                            }
                        }
                    };
                    /*public doContinousWave(__n:number, __id:number, __tintAmount:number):void {
            
                        if(this.toShow) {
                            this.targetMin = 13;
                        }
                        else            {
                            this.targetMin = 5;
                        }
            
                        this._targetSize = this.targetMin;
            
                        if(__id != this.idWave && __n > 3) {
                            var tClass = this;
            
                            this.idWave = __id;
            
                            this.width = this.height = __n;
                            this._tintAmount = __tintAmount;
            
                            clearTimeout(this.idTime);
                            this.idTime = setTimeout(function() {
                                for (var i = 0; i < tClass._limit; i++) {
                                    var p = tClass._bros[i].doContinousWave(__n-0.5, __id, tClass._tintAmount);
                                }
                            },20);
                        }
                    }*/
                    Particle.prototype.wave = function(__delay) {
                        if (__delay === void 0) { __delay = 0; }
                        var tClass = this;
                        setTimeout(function() {
                            tClass.width = tClass.height = 20;
                        }, __delay);
                    };
                    Particle.prototype.loop = function() {
                        this.height = this.width = (this.width + (this._targetSize - this.width) * this._vel);
                        this._tintAmount = (this._tintAmount + (this._targetTint - this._tintAmount) * this._vel);
                        this.tint = cuchillo.Utils.Functions.getColorMid("0x000000", "0xFF0000", this._tintAmount < 0 ? 0 : this._tintAmount);
                    };
                    Particle.prototype.dispose = function() {};
                    return Particle;
                }(Particles.BasicParticle));
                Particles.Particle = Particle;
            })(Particles = Pixi.Particles || (Pixi.Particles = {}));
        })(Pixi = cuchillo.Pixi || (cuchillo.Pixi = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Red;
        (function(Red) {
            var DatosBasicos = com.cuchillo.DataHolder.DatosBasicos;
            var ParticlesEngine = (function() {
                function ParticlesEngine() {}
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                ParticlesEngine.setup = function(__texture) {
                    this._texture = __texture;
                    DatosBasicos.particles = [];
                    this.container = new PIXI.Container();
                    this.containerParticles = new PIXI.Container();
                    this.container.addChild(this.containerParticles);
                    var centerX = cuchillo.DataHolder.DatosBasicos.CANVAS_WIDTH / 2;
                    var centerY = cuchillo.DataHolder.DatosBasicos.CANVAS_HEIGHT / 2;
                    var radian;
                    var radius = 0;
                    var _rc;
                    var _d;
                    var pNumber = 1;
                    for (var i = 0; i < 20; i++) {
                        radian = 2 * Math.PI / pNumber;
                        for (var j = 0; j < pNumber; j++) {
                            _d = (radian * (j + 1)) - (radian * j);
                            _rc = radius / Math.cos(_d * .5);
                            var po = new PIXI.Point(centerX + _rc * Math.cos(radian * (j + 1) - _d * .5), centerY + _rc * Math.sin(radian * (j + 1) - _d * .5));
                            var p = new cuchillo.Pixi.Particles.Particle(__texture, po, j, DatosBasicos.particlesCircle.length);
                            this.particlesNumber = DatosBasicos.particles.push(p);
                            this.containerParticles.addChild(p);
                        }
                        radius = radius + 20;
                        pNumber = pNumber + 6;
                    }
                    ///SEARCH CERCANOS
                    var p1;
                    var p2;
                    for (var i = 0; i < this.particlesNumber; i++) {
                        this.setupBros(DatosBasicos.particles[i], 25);
                    }
                };
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                ParticlesEngine.setupBros = function(__p, __distancia) {
                    var _p2;
                    for (var j = 0; j < this.particlesNumber; j++) {
                        _p2 = DatosBasicos.particles[j];
                        if (_p2.index != __p.index) {
                            if (cuchillo.Utils.Functions.lineDistance(__p.position, _p2.position) < __distancia) {
                                __p.addBro(_p2);
                            }
                        }
                    }
                };
                ParticlesEngine.addButton = function(__p, __mod) {
                    /*this.containerParticles.addChild(__p);
                    this.particlesNumber = DatosBasicos.particles.push(__p);*/
                    this.setupBros(__p, 30 + (30 * __mod));
                };
                ParticlesEngine.hide = function() {
                    var tClass = this;
                };
                ParticlesEngine.show = function() {
                    var tClass = this;
                    this.init();
                };
                ParticlesEngine.init = function() {
                    this.isStart = true;
                };
                ParticlesEngine.stop = function() {
                    this.isStart = false;
                };
                ParticlesEngine.prototype.doEffect = function() {
                    /*var r:number = this.circles[0].rotation + Utils.Functions.toRadians(Utils.Functions.maxminRandom(100,-100));//this.circles[0].rotation + Utils.Functions.toRadians(30);
        
                    for(var i=0; i<this.nC; i++) {
                        //this.circles[i].rotation = (this.circles[i-1].rotation - this.circles[i].rotation)*0.7;
                        TweenMax.to(this.circles[i],2 + (1*i),{rotation:r, ease:Sine.easeOut, delay:0});
                    }*/
                };
                ParticlesEngine.loop = function() {
                    for (var i = 0; i < this.particlesNumber; i++) {
                        DatosBasicos.particles[i].loop();
                    }
                };
                return ParticlesEngine;
            }());
            ParticlesEngine.isStart = false;
            ParticlesEngine.particlesNumber = 0;
            Red.ParticlesEngine = ParticlesEngine;
        })(Red = cuchillo.Red || (cuchillo.Red = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Red;
        (function(Red) {
            var TagButton = (function() {
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function TagButton(__index, __title, __circle, __position) {
                    this._value = false;
                    this._index = __index;
                    if (__circle > 0)
                        this._button = $('<span class="boton second-line"><span class="name">' + __title + '</span></span>');
                    else
                        this._button = $('<span class="boton"><span class="name">' + __title + '</span></span>');
                    var angle = cuchillo.Utils.Functions.getAngle({ x: cuchillo.DataHolder.DatosBasicos.CANVAS_WIDTH / 2, y: cuchillo.DataHolder.DatosBasicos.CANVAS_HEIGHT / 2 }, { x: __position.x, y: __position.y });
                    angle = cuchillo.Utils.Functions.toDegrees(angle);
                    if (angle > 90 || angle < -90) {
                        this._button.children().css({
                            transform: "rotate(180deg)",
                            "-webkit-transform": "rotate(180degdeg)",
                            "-ms-transform": "rotate(180degdeg)"
                        });
                    }
                    this._button.css({
                        top: __position.y - 10,
                        left: __position.x,
                        transform: "rotate(" + angle + "deg)",
                        "-webkit-transform": "rotate(" + angle + "deg)",
                        "-ms-transform": "rotate(" + angle + "deg)"
                    });
                    this._button.appendTo($("#buttonsHolder"));
                    this._link = $('<a href="#" class="">' + __title + '</a>');
                    this._link.appendTo($(".tags-clud-red"));
                    $(".tags-clud-red").append($("<span> - </span>"));
                    this._particle = new cuchillo.Pixi.Particles.Particle(PIXI.Texture.fromImage("/fayuan/assets/images/punto-2.png"), __position, 40, cuchillo.DataHolder.DatosBasicos.particlesCircle.length);
                    this._particle.targetMin = 0;
                    Red.ParticlesEngine.addButton(this._particle, __circle);
                    //BUTTON
                    var tClass = this;
                    this._link.mouseover(function(e) {
                        tClass.over();
                    });
                    this._button.mouseover(function(e) {
                        tClass.over();
                        console.log(e.target.innerText)

                    });
                    this._link.click(function(e) {
                        tClass.value = !tClass._value;
                        Red.TagsController.getInstance().selectTag(tClass._index, tClass.value);
                    });
                    this._button.click(function(e) {
                        tClass.value = !tClass._value;
                        Red.TagsController.getInstance().selectTag(tClass._index, tClass.value);
                    });
                }
                Object.defineProperty(TagButton.prototype, "position", {
                    get: function() { return this._particle.position; },
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    set: function(__p) {
                        this._particle.position = __p;
                        this._button.css({
                            transform: "translate3d(" + __p.x + "px," + __p.y + "px,0)",
                            "-webkit-transform": "translate3d(" + __p.x + "px," + __p.y + "px,0)",
                            "-ms-transform": "translate3d(" + __p.x + "px," + __p.y + "px,0)"
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TagButton.prototype, "value", {
                    get: function() { return this._value; },
                    set: function(__b) {
                        if (this._value != __b) {
                            this._value = __b;
                            if (this._value) {
                                this._particle.targetMin = 9;
                                this._particle.tintMin = 0;
                                this._button.addClass("active");
                                this._link.addClass("link-active-enabled");
                            } else {
                                this._particle.targetMin = 9;
                                this._particle.tintMin = 1;
                                this._button.removeClass("active");
                                this._link.removeClass("link-active-enabled");
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                TagButton.prototype.over = function() {
                    this._particle.over();
                };
                TagButton.prototype.press = function() {
                    this._particle.press(this.value);
                };
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                TagButton.prototype.hide = function() {};
                TagButton.prototype.show = function(__n) {
                    var tClass = this;
                    setTimeout(function() { tClass._particle.show(); }, __n);
                };
                TagButton.prototype.loop = function() {};
                return TagButton;
            }());
            Red.TagButton = TagButton;
        })(Red = cuchillo.Red || (cuchillo.Red = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Red;
        (function(Red) {
            //import WinMenu   =   Windows.WinMenu;
            var DatosBasicos = com.cuchillo.DataHolder.DatosBasicos;
            var TagsController = (function() {
                function TagsController() {
                    this._rows = 1;
                    this._points = 1;
                    this._total = 0;
                    this.speeds = [1, 1.5, 2, 2.5];
                    this._selectedTags = [];
                    this.enable = false;
                    this._center = new PIXI.Point(cuchillo.DataHolder.DatosBasicos.CANVAS_WIDTH / 2, cuchillo.DataHolder.DatosBasicos.CANVAS_HEIGHT / 2);
                }
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                TagsController.getInstance = function() {
                    if (TagsController._instance === null) {
                        TagsController._instance = new TagsController();
                    }
                    return TagsController._instance;
                };
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                TagsController.prototype.setup = function(__graphics) {
                    if (cuchillo.DataHolder.DatosBasicos.tags.length > 360)
                        this._rows = 4;
                    else if (cuchillo.DataHolder.DatosBasicos.tags.length > 240)
                        this._rows = 3;
                    else if (cuchillo.DataHolder.DatosBasicos.tags.length > 120)
                        this._rows = 2;

                    var n = cuchillo.DataHolder.DatosBasicos.tags.length % this._rows == 0 ? 0 : this._rows - (cuchillo.DataHolder.DatosBasicos.tags.length % this._rows);
                    // console.log(cuchillo.DataHolder.DatosBasicos.tags.length,n ,this._rows)
                    //for(var i:number=0; i<n; i++) DataHolder.DatosBasicos.tags.push("");

                    this._points = cuchillo.DataHolder.DatosBasicos.tags.length / this._rows;
                    this._radian = 2 * Math.PI / this._points;
                    var radius = 400;
                    var _rc;
                    var _d;
                    this._buttons = [];
                    var cont = 0;
                    this._timelineShow = new TimelineMax();
                    this._timelineShow.clear();
                    this._timelineShow.pause();
                    for (var i = 0; i < this._rows; i++) {
                        for (var j = 0; j < this._points; j++) {
                            _d = (this._radian * (j + 1)) - (this._radian * j);
                            _rc = radius / Math.cos(_d * .5);
                            var b = new Red.TagButton(this._buttons.length, DatosBasicos.tags[this._buttons.length].attributes.title, cont, new PIXI.Point(this._center.x + _rc * Math.cos(this._radian * (j + this.speeds[i]) - _d * .5), this._center.y + _rc * Math.sin(this._radian * (j + this.speeds[i]) - _d * .5)));
                            this._total = this._buttons.push(b);
                        }
                        radius = radius + 20;
                        cont++;
                    }
                    this.enable = true;
                };
                TagsController.prototype.selectTag = function(__index, __push) {

                    if (!__push)
                        this._selectedTags.splice(this._selectedTags.indexOf(__index), 1);
                    else
                        this._selectedTags.push(__index);
                    Red.ArtistsController.getInstance().activateByTags(this._selectedTags);
                    for (var i = 0, li = this._selectedTags.length; i < li; i++) {
                        this._buttons[this._selectedTags[i]].press();
                    }
                    this._buttons[__index].press();
                };
                TagsController.prototype.show = function() {
                    for (var i = 0, li = this._buttons.length; i < li; i++) {
                        this._buttons[i].show(i * 50);
                    }
                    var tClass = this;
                    setTimeout(function() {
                        tClass._timelineShow.play();
                    }, (i * 20) + 500);
                };
                TagsController.prototype.loop = function() {
                    /* if(this.enable) {
         
                         var radius:number = 400;
                         var _rc:number;
                         var _d:number;
                         var p1:PIXI.Point = null;
                         var p2:PIXI.Point = null;
         
         
         
                             for (var j:number = 0; j < this._total; j++) {
                                 _d = (this._radian * ( j + 1 ) ) - ( this._radian * j );
                                 _rc = radius / Math.cos(_d * .5);
                                 this._buttons[j].position = new PIXI.Point(this._center.x + _rc * Math.cos(this._radian * ( j + this.speeds[0] ) - _d * .5), this._center.y + _rc * Math.sin(this._radian * ( j + this.speeds[0] ) - _d * .5));
                             }
                             radius = radius + 20;
         
                     }*/
                };
                TagsController.prototype.getY = function(__y) {
                    return __y < this._center.y ? 0 : cuchillo.DataHolder.DatosBasicos.CANVAS_HEIGHT;
                };
                TagsController.prototype.getX = function(__x) {
                    return __x < this._center.x ? 0 : cuchillo.DataHolder.DatosBasicos.CANVAS_WIDTH;
                };
                return TagsController;
            }());
            TagsController._instance = null;
            Red.TagsController = TagsController;
        })(Red = cuchillo.Red || (cuchillo.Red = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Red;
        (function(Red) {
            //import WinMenu   =   Windows.WinMenu;
            var DatosBasicos = com.cuchillo.DataHolder.DatosBasicos;
            var ArtistsController = (function() {
                function ArtistsController() {
                    this._buttons = [];
                    this._nButtons = 0;
                    this.MAX_CONNECTIONS = 10;
                    this.speeds = [1, 1.5, 2, 2.5];
                    this.enable = false;
                    this._pFree = [];
                    this._center = new PIXI.Point(cuchillo.DataHolder.DatosBasicos.CANVAS_WIDTH / 2, cuchillo.DataHolder.DatosBasicos.CANVAS_HEIGHT / 2);
                    this._holder = $("#buttonsHolder");
                }
                //==================================================================================================================
                //          GETTER SETTER
                //==================================================================================================================
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                ArtistsController.getInstance = function() {
                    if (ArtistsController._instance === null) {
                        ArtistsController._instance = new ArtistsController();
                    }
                    return ArtistsController._instance;
                };
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                ArtistsController.prototype.setup = function() {
                    this.resetPositions();
                    this._buttons = [];
                    var l0 = "";
                    var l1 = "";
                    var fullName = '';
                    for (var i = 0, j = DatosBasicos.artists.length; i < j; i++) {
                        var p = this.getRandom();
                        this._nButtons = this._buttons.push(new Red.ArtistButton(p, DatosBasicos.artists[i].attributes, DatosBasicos.artists[i].tags));
                        l1 = DatosBasicos.artists[i].attributes.name.slice(0, 1).toUpperCase();
                        if (l1 != l0) {

                            l0 = l1;
                            /*  $(".red-artist-Holder").append($('<div class="letter-group" id="group-' + l0 + '"><span class="letter">' + l0 + '</span></div>'));*/
                            newNameObj[l1] = [];
                        }
                        /*   $("#group-" + l0).append($('<a href="' + DatosBasicos.artists[i].attributes.url + '">' + DatosBasicos.artists[i].attributes.fullName + '</a>')); */
                        this._buttons[i].value = false;
                        newNameObj[l0].push({
                            url: DatosBasicos.artists[i].attributes.url,
                            id: DatosBasicos.artists[i].tags[1],
                            value: DatosBasicos.artists[i].attributes.fullName
                        })
                    }

                    var newEnglishWord = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
                    for (var z = 0; z < newEnglishWord.length; z++) {
                        var newl0 = newEnglishWord[z];
                        $(".red-artist-Holder").append($('<div class="letter-group" id="group-' + newl0 + '"  onclick="openKeyWordInfo(' + "'" + newl0 + "'" + ')"  ><span class="letter">' + newl0 + '</span></div>'));
                    }



                };
                ArtistsController.prototype.setupMobile = function() {
                    var l0 = "";
                    var l1 = "";
                    for (var i = 0, j = DatosBasicos.artists.length; i < j; i++) {
                        l1 = DatosBasicos.artists[i].attributes.name.slice(0, 1).toUpperCase();
                        if (l1 != l0) {
                            l0 = l1;
                            $(".red-artist-Holder").append($('<div class="letter-group" id="group-' + l0 + '"><span class="letter">' + l0 + '</span></div>'));
                        }
                        var newStrUrl = DatosBasicos.artists[i].attributes.url + '?id=' + DatosBasicos.artists[i].attributes.id + '&name=' + DatosBasicos.artists[i].attributes.fullName;
                        console.log(newStrUrl);
                        $("#group-" + l0).append($('<a href="' + newStrUrl + '">' + DatosBasicos.artists[i].attributes.fullName + '</a>'));
                    }
                };
                ArtistsController.prototype.activateByTags = function(__tags) {
                    for (var i = 0, li = __tags.length; i < li; i++) {
                        for (var j = 0, lj = DatosBasicos.artists.length; j < lj; j++) {
                            var tagid = Number(DatosBasicos.tags[__tags[i]].id);
                            if (i == 0) {
                                this._buttons[j].value = DatosBasicos.artists[j].tags.indexOf(tagid) > 0 ? true : false;
                            } else {
                                this._buttons[j].value = DatosBasicos.artists[j].tags.indexOf(tagid) > 0 ? true : this._buttons[j].value;
                            }
                        }
                    }
                    if (__tags.length == 0) {
                        for (var j = 0, lj = DatosBasicos.artists.length; j < lj; j++) {
                            this._buttons[j].value = false;
                        }
                    }
                };
                ArtistsController.prototype.resetPositions = function() {
                    this._pFree = [];
                    for (var i = 0, j = DatosBasicos.particles.length; i < j; i++) {
                        this._pFree.push(i);
                    }
                };
                ArtistsController.prototype.getRandomPosition = function() {
                    var n = cuchillo.Utils.Functions.maxminRandom(this._pFree.length, 1) - 1;
                    var p = DatosBasicos.particles[this._pFree[n]].position;
                    this._pFree.splice(n, 1);
                    return p;
                };
                ArtistsController.prototype.getRandom = function() {
                    var n = cuchillo.Utils.Functions.maxminRandom(this._pFree.length, 1) - 1;
                    var p = DatosBasicos.particles[this._pFree[n]];
                    this._pFree.splice(n, 1);
                    return p;
                };
                ArtistsController.prototype.doMove = function() {};
                //==================================================================================================================
                //          BUTTON ACTIONS
                //==================================================================================================================
                ArtistsController.prototype.loop = function() {};
                return ArtistsController;
            }());
            ArtistsController._instance = null;
            Red.ArtistsController = ArtistsController;
        })(Red = cuchillo.Red || (cuchillo.Red = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Red;
        (function(Red) {
            var ArtistButton = (function() {
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function ArtistButton(__p, __data, __tags) {
                    this._value = false;
                    this._position = __p.position;
                    this._data = __data;
                    this._tags = __tags;
                    this._particle = __p;
                    this._button = $('<a  class="boton-artist"></a>');
                    this._button.css({
                        transform: "translate3d(" + this._position.x + "px," + this._position.y + "px,0)",
                        "-webkit-transform": "translate3d(" + this._position.x + "px," + this._position.y + "px,0)",
                        "-ms-transform": "translate3d(" + this._position.x + "px," + this._position.y + "px,0)"
                    });
                    this._button.appendTo($("#buttonsHolder"));
                    this._particle.toArtist();
                    this._img = $("<div class='artist-image-holder'></div>");
                    var imgage = $("<img class='artist-image' src=''/>");
                    imgage.attr("src", this._data["image-medium-dark"]).on('load', function() {
                        TweenLite.to(tClass._img, 0.6, { opacity: 1, ease: Sine.easeIn, force3D: true });
                    });
                    this._info = $("<span class='artist-info-holder'>");
                    this._info.css("display", "none");
                    this._button.append(this._info);
                    this._img.appendTo(this._info);
                    imgage.appendTo(this._img);
                    this._name = $('<span class="artist-name">' + __data.fullName + '</span>');
                    this._name.appendTo(this._info);
                    //BUTTON
                    var tClass = this;
                    this._button.mousedown(function(e) {});
                    this._button.mouseup(function(e) {
                        console.log(__data, __p, __tags)
                        if (memberFullName == __data.fullName) {
                            window.location.href = __data.url + '?id=' + __tags[1] + '&name=' + __data.fullName;
                        } else {
                            memberFullName = __data.fullName
                        }

                    });
                    this._button.mouseover(function(e) {
                        tClass.over();
                    });
                    this._button.mouseout(function(e) {
                        tClass.out();
                    });
                }
                Object.defineProperty(ArtistButton.prototype, "position", {
                    get: function() { return this._position; },
                    //==================================================================================================================
                    //          GETTER SETTER
                    //==================================================================================================================
                    set: function(__p) {
                        this._position = __p;
                        this._button.css({
                            transform: "translate3d(" + __p.x + "px," + __p.y + "px,0)",
                            "-webkit-transform": "translate3d(" + __p.x + "px," + __p.y + "px,0)",
                            "-ms-transform": "translate3d(" + __p.x + "px," + __p.y + "px,0)"
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ArtistButton.prototype, "value", {
                    get: function() { return this._value; },
                    set: function(__b) {
                        if (this._value != __b) {
                            this._value = __b;
                            if (this._value) {
                                this._particle.targetMin = 16;
                                this._particle.tintMin = 0;
                            } else {
                                this._particle.targetMin = 16;
                                this._particle.tintMin = 1;
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                ArtistButton.prototype.over = function() {
                    this._particle.over();
                    this._info.css("display", "block");
                    var tClass = this;
                    //TweenMax.set(this._img,{opacity:1,scale:0,force3D:true});
                    //TweenLite.to(this._img, 1, {scale:1, ease:Expo.easeOut, force3D:true, onComplete:function(){
                    //tClass._img.css("display","block");
                    /* }});
                     TweenLite.to(this._name, 0.4, {opacity:1, force3D:true});*/
                };
                ArtistButton.prototype.out = function() {
                    var tClass = this;
                    tClass._info.css("display", "none");
                    /*TweenLite.to(this._img, 0.2, {scale:0.8, ease:Quad.easeIn, force3D:true, onComplete:function(){
                       tClass._info.css("display","none");
                    }});
                    TweenLite.to(this._name, 0.2, {opacity:0, ease:Quad.easeOut, force3D:true});*/
                };
                //==================================================================================================================
                //          PUBLIC
                //==================================================================================================================
                ArtistButton.prototype.hide = function() {};
                ArtistButton.prototype.show = function() {};
                ArtistButton.prototype.loop = function() {};
                return ArtistButton;
            }());
            Red.ArtistButton = ArtistButton;
        })(Red = cuchillo.Red || (cuchillo.Red = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var Red;
        (function(Red) {
            var ArtistInfo = (function() {
                //==================================================================================================================
                //          CONSTRUCTOR
                //==================================================================================================================
                function ArtistInfo(__data, __tags) {
                    this._isShow = false;
                    this._container = $(".artistHolder");
                    this._holder = $("#artistInfo");
                    this._title = $("<h1 class='artistName'>" + __data.name + "<br/>" + __data.surname + "</h1>");
                    this._img = $("<img class='artistImage' src=''/>");
                    this._info = $("<div class='_info'></div>");
                    var _fakeButton = $('<div class="fakeButton"></div>');
                    this._holder.append(this._img);
                    this._holder.append(_fakeButton);
                    this._holder.append(this._info);
                    var _p = $("<p/>");
                    for (var i = 0; i < __tags.length; i++) {
                        var title = "";
                        for (var j = 0; j < cuchillo.DataHolder.DatosBasicos.tags.length; j++) {
                            if (__tags[i] == cuchillo.DataHolder.DatosBasicos.tags[j].id) {
                                title = cuchillo.DataHolder.DatosBasicos.tags[j].attributes.title;
                                break;
                            }
                        }
                        if ((i + 1) < __tags.length) {
                            _p.append(title + ", ");
                        } else {
                            _p.append(title);
                        }
                    }
                    this._info.prepend(_p);
                    this._info.prepend(this._title);
                    var tClass = this;
                    this._img.css("opacity", "0");
                    this._img.attr("src", __data["image-medium-light"]).on('load', function() {
                        TweenLite.to(tClass._img, 0.6, { opacity: 1, ease: Sine.easeIn, force3D: true });
                    });
                    $("#artistLink").attr("href", __data.url);
                    _fakeButton.click(function(e) {
                        if (tClass._isShow)
                            tClass.hide();
                    });
                    this.show();
                }
                //==================================================================================================================
                //          PRIVATE
                //==================================================================================================================
                ArtistInfo.prototype.show = function() {
                    this._isShow = true;
                    this._container.css("display", "table");
                    TweenLite.to(this._container, 0.4, { opacity: 1, ease: Sine.easeOut, force3D: true });
                };
                ArtistInfo.prototype.hide = function() {
                    this._isShow = true;
                    var tClass = this;
                    TweenLite.to(this._container, 0.3, {
                        opacity: 0,
                        ease: Sine.easeOut,
                        force3D: true,
                        onComplete: function() {
                            tClass.dispose();
                        }
                    });
                };
                ArtistInfo.prototype.dispose = function() {
                    this._container.css("display", "none");
                    this._holder.empty();
                    this._container = null;
                    this._holder = null;
                    this._title = null;
                    this._img = null;
                };
                return ArtistInfo;
            }());
            Red.ArtistInfo = ArtistInfo;
        })(Red = cuchillo.Red || (cuchillo.Red = {}));
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
/// <reference path="_definitions/jquery.d.ts" />
/// <reference path="_definitions/history.d.ts" />
/// <reference path="_definitions/greensock.d.ts" />
/// <reference path="_definitions/underscore.d.ts" />
/// <reference path="_definitions/fastclick.d.ts" />
/// <reference path="_definitions/verge.d.ts" />
/// <reference path="_definitions/svgjs.d.ts" />
/// <reference path="_definitions/webfontloader.d.ts" />
/// <reference path="_definitions/createjs/createjs.d.ts" />
/// <reference path="_definitions/pixijs/pixi.js.d.ts" />
/// <reference path="_definitions/pixijs/pixi-filters.d.ts" />
/// <reference path='com/cuchillo/DataHolder/DatosBasicos.ts' />
/// <reference path='com/cuchillo/Utils/Animation/Engine.ts' />
/// <reference path='com/cuchillo/Utils/Callback.ts' />
/// <reference path='com/cuchillo/Utils/UrlManager.ts' />
/// <reference path='com/cuchillo/Utils/Functions.ts' />
/// <reference path='com/cuchillo/Utils/Animation/EIVController.ts' />
/// <reference path='com/cuchillo/Utils/SVGjs/SVGElement.ts' />
/// <reference path='com/cuchillo/Loaders/Preloader.ts' />
/// <reference path='com/cuchillo/Loaders/FontLoader.ts' />
/// <reference path='com/cuchillo/Loaders/PixiPreloader.ts' />
/// <reference path='com/cuchillo/Loaders/ItemToLoad.ts' />
/// <reference path='com/cuchillo/Display/MediaObject.ts' />
/// <reference path='com/cuchillo/Display/ImageObject.ts' />
/// <reference path='com/cuchillo/Display/BGObject.ts' />
/// <reference path='com/cuchillo/Display/VideoObject.ts' />
/// <reference path='com/cuchillo/Display/PixiObject.ts' />
/// <reference path='com/cuchillo/Forms/FormValidator.ts' />
/// <reference path='com/cuchillo/Forms/FormSender.ts' />
/// <reference path='com/cuchillo/Scroll/MrScroll.ts' />
/// <reference path='com/cuchillo/InterfaceItems/Header.ts' />
/// <reference path='com/cuchillo/InterfaceItems/PageHeader/PageHeader.ts' />
/// <reference path='com/cuchillo/InterfaceItems/PageHeader/HeaderItem.ts' />
/// <reference path='com/cuchillo/InterfaceItems/PageHeader/RotatedTitle.ts' />
/// <reference path='com/cuchillo/InterfaceItems/PageHeader/LinesTitle.ts' />
/// <reference path='com/cuchillo/InterfaceItems/PageHeader/MaskLinesTitle.ts' />
/// <reference path='com/cuchillo/InterfaceItems/PageHeader/HeaderLineTitle.ts' />
/// <reference path='com/cuchillo/InterfaceItems/PageHeader/HeaderImage.ts' />
/// <reference path='com/cuchillo/InterfaceItems/PageHeader/HeaderImageWithLine.ts' />
/// <reference path='com/cuchillo/InterfaceItems/PageHeader/HeaderInfoProject.ts' />
/// <reference path='com/cuchillo/InterfaceItems/Slider.ts' />
/// <reference path='com/cuchillo/InterfaceItems/Footer.ts' />
/// <reference path='com/cuchillo/InterfaceItems/PreloadBar.ts' />
/// <reference path='com/cuchillo/InterfaceItems/ToggleButtons/ToggleButton.ts' />
/// <reference path='com/cuchillo/InterfaceItems/ToggleButtons/RightButton.ts' />
/// <reference path='com/cuchillo/InterfaceItems/ToggleButtons/TogglePause.ts' />
/// <reference path='com/cuchillo/InterfaceItems/ArrowButtons/ArrowButton.ts' />
/// <reference path='com/cuchillo/InterfaceItems/Carrousel.ts' />
/// <reference path='com/cuchillo/InterfaceItems/ProgramItemList.ts' />
/// <reference path='com/cuchillo/InterfaceItems/RotatedItem.ts' />
/// <reference path='com/cuchillo/InterfaceItems/PixiStage.ts' />
/// <reference path='com/cuchillo/Windows/Sidemenu.ts' />
/// <reference path='com/cuchillo/Windows/Cookies.ts' />
/// <reference path='com/cuchillo/Windows/Calendar.ts' />
/// <reference path='com/cuchillo/Windows/Agenda.ts' />
/// <reference path='com/cuchillo/Pages/PageController.ts' />
/// <reference path='com/cuchillo/Pages/Page.ts' />
/// <reference path='com/cuchillo/Pages/Program.ts' />
/// <reference path='com/cuchillo/Pages/RedAmp.ts' />
//RED
/// <reference path='com/cuchillo/InterfaceItems/PixiStage.ts' />
/// <reference path='com/cuchillo/Pixi/Stage.ts' />
/// <reference path='com/cuchillo/Pixi/Renderer.ts' />
/// <reference path='com/cuchillo/Pixi/Particles/Emitter.ts' />
/// <reference path='com/cuchillo/Pixi/Particles/BasicParticle.ts' />
/// <reference path='com/cuchillo/Pixi/Particles/Particle.ts' />
/// <reference path='com/cuchillo/Red/ParticlesEngine.ts' />
/// <reference path='com/cuchillo/Red/TagButton.ts' />
/// <reference path='com/cuchillo/Red/TagsController.ts' />
/// <reference path='com/cuchillo/Red/ArtistsController.ts' />
/// <reference path='com/cuchillo/Red/ArtistButton.ts' />
/// <reference path='com/cuchillo/Red/ArtistInfo.ts' />
//tsc --out public/resources/js/MainRed.js public/resources/js/MainRed.ts --target "ES5" --module amd
var com;
(function(com) {
    var cuchillo;
    (function(cuchillo) {
        var MrScroll = com.cuchillo.Scroll.MrScroll;
        var Main = (function() {
            function Main() {
                this._isReady = false;
                this._isLoaded = false;
                if (com.cuchillo.Main._instance) {
                    throw new Error("Error: Instantiation failed: Use getInstance() instead of new.");
                }
                com.cuchillo.Main._instance = this;
            }
            Main.getInstance = function() {
                if (com.cuchillo.Main._instance === null) {
                    com.cuchillo.Main._instance = new com.cuchillo.Main();
                }
                return com.cuchillo.Main._instance;
            };
            Main.prototype.doLoaded = function() {
                this._isLoaded = true;
                if (this._isReady)
                    this.loadFonts();
            };
            Main.prototype.doReady = function() {
                this._isReady = true;
                if (this._isLoaded)
                    this.loadFonts();
            };
            Main.prototype.loadFonts = function() {
                cuchillo.Loaders.FontLoader.setup({
                    custom: cuchillo.DataHolder.DatosBasicos.CUSTOM_FONTS
                }, 6, this.setup.bind(Main.getInstance()), 10);
                cuchillo.Loaders.FontLoader.init();
            };
            Main.prototype.setup = function() {
                var tClass = this;
                //if(DataHolder.DatosBasicos.debug) {
                //    InterfaceItems.PreloadBar.getInstance().dispose();
                //}
                this.mainHolder = $("#mainHolder");
                this.footerHolder = $("#footerMain");
                this._cuchillo = $(".footer-credits");
                /////// UTILS ////////
                cuchillo.DataHolder.DatosBasicos.isMobile = cuchillo.Utils.Functions.isMobile();
                cuchillo.DataHolder.DatosBasicos.WIDTH = $(window).width();
                cuchillo.DataHolder.DatosBasicos.HEIGHT = $(window).height();
                cuchillo.DataHolder.DatosBasicos.WIDTH_INSIDE = $("#helper").innerWidth();
                cuchillo.Utils.Functions.doCuchillo();
                cuchillo.Utils.Functions.setupCookies();
                if (cuchillo.DataHolder.DatosBasicos.isMobile) {
                    FastClick.attach(document.body);
                    this._scrollable = $("#wrap");
                    this._scrollable.addClass("touch-version");
                    this.mainHolder.addClass("touch-version");
                } else {
                    this._scrollable = $(document);
                }
                /////// MENU ////////
                cuchillo.InterfaceItems.Header.getInstance();
                cuchillo.InterfaceItems.PageHeader.PageHeader.getInstance();
                cuchillo.InterfaceItems.Footer.getInstance();
                cuchillo.Windows.Sidemenu.getInstance();
                cuchillo.Windows.Calendar.getInstance();
                cuchillo.Windows.Agenda.getInstance();
                /////// Scroll ////////
                cuchillo.Scroll.MrScroll.init(this._scrollable);
                /////// RESIZE ///////
                this.resize();
                $(window).resize(function() {
                    tClass.resize();
                });
                /////// ANIMATION /////////
                cuchillo.Utils.Animation.Engine.start(Main.getInstance().loop.bind(Main.getInstance()));
                /////// CONTROLLERS ////////
                cuchillo.Pages.PageController.init(this.mainHolder);
                cuchillo.Pages.PageController.loadPage();
            };
            ///// RESIZE ////////
            Main.prototype.resize = function() {
                cuchillo.DataHolder.DatosBasicos.WIDTH = $(window).width();
                cuchillo.DataHolder.DatosBasicos.HEIGHT = $(window).height();
                cuchillo.DataHolder.DatosBasicos.WIDTH_INSIDE = $("#helper").innerWidth();
                cuchillo.DataHolder.DatosBasicos.SCROLL_WIDTH = window.innerWidth - cuchillo.DataHolder.DatosBasicos.WIDTH;
                cuchillo.DataHolder.DatosBasicos.TOUCH_DEVICE = cuchillo.DataHolder.DatosBasicos.SCROLL_WIDTH == 0 ? true : false;
                cuchillo.InterfaceItems.Header.getInstance().resize();
                cuchillo.InterfaceItems.PageHeader.PageHeader.getInstance().resize();
                cuchillo.Windows.Sidemenu.getInstance().resize();
                cuchillo.Windows.Calendar.getInstance().resize();
                if (cuchillo.Pages.PageController._page)
                    cuchillo.Pages.PageController._page.resize();
                $(".fullHeight").each(function() {
                    cuchillo.Utils.Functions.fulHeight($(this), cuchillo.DataHolder.DatosBasicos.HEIGHT);
                });
                $(".fullHeightPadding").each(function() {
                    cuchillo.Utils.Functions.fulHeightPadding($(this), 0);
                });
                if (!cuchillo.DataHolder.DatosBasicos.cookiesAccepted) {
                    cuchillo.Windows.Cookies.getInstance().resize();
                }
                $("#helper").height(this.mainHolder.outerHeight()); // + this.footerHolder.outerHeight());
                cuchillo.DataHolder.DatosBasicos.HEIGHT_SCROLL = this.mainHolder.outerHeight() - cuchillo.DataHolder.DatosBasicos.HEIGHT;
            };
            ///// LOOP ////////
            Main.prototype.loop = function() {
                if (!cuchillo.DataHolder.DatosBasicos.isMobile) {
                    this.mainHolder.css({
                        "-webkit-transform": "translate3d(0," + MrScroll.positionMomentum1 + "px,10px)",
                        "-ms-transform": "translate3d(0," + MrScroll.positionMomentum1 + "px,10px)",
                        transform: "translate3d(0," + MrScroll.positionMomentum1 + "px,10px)"
                    });
                    this._cuchillo.css({ transform: "translate3d(0," + -(MrScroll.positionMomentum1 - MrScroll.positionMomentum2) + "px,0px)" });
                }
                MrScroll.loop();
                cuchillo.InterfaceItems.Header.getInstance().loop();
                cuchillo.InterfaceItems.PageHeader.PageHeader.getInstance().loop();
                if (cuchillo.Pages.PageController._page)
                    cuchillo.Pages.PageController._page.loop();
            };
            return Main;
        }());
        Main._instance = null;
        cuchillo.Main = Main;
    })(cuchillo = com.cuchillo || (com.cuchillo = {}));
})(com || (com = {}));
$(document).ready(function() {
    com.cuchillo.Main.getInstance().doReady();
    com.cuchillo.Main.getInstance().doLoaded();
});
window.onpageshow = function(event) {
    if (event.persisted) {
        com.cuchillo.InterfaceItems.PreloadBar.getInstance().hide();
        com.cuchillo.Windows.Sidemenu.getInstance().directHide();
    }
};