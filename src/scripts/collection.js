if (typeof theme === "undefined") {
    theme = {};
}
theme.collectionSort = function() {
    Shopify.queryParams = {};
    if (location.search.length) {
        for (
            var aKeyValue, i = 0, aCouples = location.search.substr(1).split("&");
            i < aCouples.length;
            i++
        ) {
            aKeyValue = aCouples[i].split("=");
            if (aKeyValue.length > 1) {
                Shopify.queryParams[
                    decodeURIComponent(aKeyValue[0])
                    ] = decodeURIComponent(aKeyValue[1]);
            }
        }
    }

    var defaultSort = $(".js-collection-sort").data("default-sort");
    $("#SortBy")
        .val(defaultSort)
        .bind("change", function() {
            Shopify.queryParams.sort_by = jQuery(this).val();
            location.search = jQuery.param(Shopify.queryParams);
        });
};
$(document).ready(function(){

    theme.collectionSort();
});