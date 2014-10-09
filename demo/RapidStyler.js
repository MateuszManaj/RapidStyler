/**
 * Created by MateuszManaj on 27.05.14.
 */

(function ($)
{
    $.RapidStyler = function(options) { $("body").RapidStyler(options); };

    $.fn.RapidStyler = function(options)
    {
        var defaults =
        {
            prefix: '_'
        };

        $.fn.RapidStyler.settings = $.extend(defaults, options);

        var RapidStylerDictionary =
        [
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "m([0-9\\-]+)(!?)",
                "style" : "margin: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "mB([0-9\\-]+)(!?)",
                "style" : "margin-bottom: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "mT([0-9\\-]+)(!?)",
                "style" : "margin-top: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "mL([0-9\\-]+)(!?)",
                "style" : "margin-left: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "mR([0-9\\-]+)(!?)",
                "style" : "margin-right: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "taL(!?)",
                "style" : "text-align: left"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "taJ(!?)",
                "style" : "text-align: justify"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "taC(!?)",
                "style" : "text-align: center"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "taR(!?)",
                "style" : "text-align: right"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "fL(!?)",
                "style" : "float: left"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "fR(!?)",
                "style" : "float: right"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "cB(!?)",
                "style" : "clear: both"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "dB(!?)",
                "style" : "display: block"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "dN(!?)",
                "style" : "display: none"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "dIb(!?)",
                "style" : "display: inline-block"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "vH(!?)",
                "style" : "visibility: hidden"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "vV(!?)",
                "style" : "visibility: visible"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "m0a(!?)",
                "style" : "margin: 0 auto"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "p([0-9\\-]+)(!?)",
                "style" : "padding: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "pB([0-9\\-]+)(!?)",
                "style" : "padding-bottom: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "pT([0-9\\-]+)(!?)",
                "style" : "padding-top: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "pL([0-9\\-]+)(!?)",
                "style" : "padding-left: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "pR([0-9\\-]+)(!?)",
                "style" : "padding-right: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "minwdt([0-9]+)(!?)",
                "style" : "min-width: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "maxwdt([0-9]+)(!?)",
                "style" : "max-width: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "wdt([0-9]+)(!?)",
                "style" : "width: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "minwdt([0-9]+)p(!?)",
                "style" : "min-width: $1%"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "maxwdt([0-9]+)p(!?)",
                "style" : "max-width: $1%"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "wdt([0-9]+)p(!?)",
                "style" : "width: $1%"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "minhgt([0-9]+)(!?)",
                "style" : "min-height: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "maxhgt([0-9]+)(!?)",
                "style" : "max-height: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "hgt([0-9]+)(!?)",
                "style" : "height: $1px"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "minhgt([0-9]+)p(!?)",
                "style" : "min-height: $1%"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "maxhgt([0-9]+)p(!?)",
                "style" : "max-height: $1%"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "hgt([0-9]+)p(!?)",
                "style" : "height: $1%"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "oA(!?)",
                "style" : "overflow: auto"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "c([a-f0-9]+)(!?)",
                "style" : "color: #$1"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "fn([a-fA-Z0-9]+)(!?)",
                "style" : "font-family: $1"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "fs([0-9\.]+)(px|em)(!?)",
                "style" : "font-size: $1$2"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "fw([0-9a-z\.]+)(!?)",
                "style" : "font-weight: $1"
            },
            {
                "pattern" : $.fn.RapidStyler.settings.prefix + "bgC([a-f0-9]+)(!?)",
                "style" : "background-color: #$1"
            }
        ];

        var cssrules = $("<style type='text/css'> </style>").appendTo("head");
        cssrules.append("." + $.fn.RapidStyler.settings.prefix + "sMobile,." + $.fn.RapidStyler.settings.prefix + "sTablet,." + $.fn.RapidStyler.settings.prefix + "sDesktop,." + $.fn.RapidStyler.settings.prefix + "sDesktopBig {display: none !important;}");
        cssrules.append("@media (max-width: 767px) {." + $.fn.RapidStyler.settings.prefix + "sMobile {display: block !important;}}");
        cssrules.append("@media (min-width: 768px) and (max-width: 991px) {." + $.fn.RapidStyler.settings.prefix + "sTablet {display: block !important;}}");
        cssrules.append("@media (min-width: 992px) and (max-width: 1199px) {." + $.fn.RapidStyler.settings.prefix + "sDesktop {display: block !important;}}");
        cssrules.append("@media (min-width: 1200px) {." + $.fn.RapidStyler.settings.prefix + "sDesktopBig {display: block !important;}}");

        cssrules.append("@media (max-width: 767px) {." + $.fn.RapidStyler.settings.prefix + "hMobile {display: none !important;}}");
        cssrules.append("@media (min-width: 768px) and (max-width: 991px) {." + $.fn.RapidStyler.settings.prefix + "hTablet {display: none !important;}}");
        cssrules.append("@media (min-width: 992px) and (max-width: 1199px) {." + $.fn.RapidStyler.settings.prefix + "hDesktop {display: none !important;}}");
        cssrules.append("@media (min-width: 1200px) {." + $.fn.RapidStyler.settings.prefix + "hDesktopBig {display: none !important;}}");

        var cssrules_buff = [];
//        var start = new Date().getTime();

        $(this).find('*[class*="' +$.fn.RapidStyler.settings.prefix+ '"]').each(function(k,v)
        {
            var classes = $(v).attr("class");
            classes = classes.split(" ");

            $.each(RapidStylerDictionary, function(dk,dv)
            {
                $.each(classes, function(ck, cv)
                {
                    var reg = new RegExp(dv.pattern);
                    if(reg.test(cv))
                    {
                        var style = cv.replace(reg, dv.style);
                        style = style.split(":");

                        // If style property value [property: value;] has unexpected ! in the end
                        if(style[1].substr(-1) == "!") style[1] = style[1].substr(0, style[1].length-1);

                        if(cv.endsWith("!"))
                        {
                            if(jQuery.inArray(cv.substr(0, cv.length-1), cssrules_buff) < 0)
                            {
                                cssrules.append("[class *= \"" + cv.substr(0, cv.length-1) + "\"] { " + style[0] + ": " + style[1] + " !important; }");
                                cssrules_buff.push(cv.substr(0, cv.length-1));
                            }
                        }
                        else
                        {
                            $(v).css(style[0], style[1]);
                        }
                    }
                });
            });
        });

//        var end = new Date().getTime();
//        var time = end - start;
//        alert('Wykonano w ' + time/60 + ' sekund');
    };

})(jQuery);

String.prototype.endsWith = function(suffix)
{
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
