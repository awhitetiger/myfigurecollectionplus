// ==UserScript==
// @name         MyFigureCollection+
// @namespace    https://github.com/awhitetiger/myfigurecollectionplus
// @version      0.1
// @description  Makes MFC Great Again!
// @author       OwO
// @include      https://myfigurecollection.net/*
// ==/UserScript==

(function() {
    if (window.location.href.includes("item"))
        return false;
    var imgs = document.getElementsByTagName("img");
    for (i = 0; i < imgs.length; i++) {
        var slug = imgs[i].src;
        if(slug.includes("/figure/")){
            //var newSlugLarge = [slug.slice(0, 49), "/large", slug.slice(49)].join(''); --Really weird, some figures have a large verison where others don't, however, every product has a "Big" Version.
            var newSlugBig = [slug.slice(0, 49), "/big", slug.slice(49)].join('');
            imgs[i].src = newSlugBig;
        }
    }
})();