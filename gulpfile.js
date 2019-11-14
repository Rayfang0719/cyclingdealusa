const { src, dest, watch } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const minicss = require('gulp-clean-css');

const VendorJSBasePath="src/vendors/scripts/"
const VendorCSSBasePath="src/vendors/css/"
const VenusSCSSBasePath="src/scss/"

function VendorJs(){
    return src([
        VendorJSBasePath+'jquery-1.11.0.min.js',
        VendorJSBasePath+'jquery-migrate-1.2.1.min.js',
        VendorJSBasePath+'slick.min.js'
        ])
        .pipe(uglify())
        .pipe(concat('vendors.min.js'))
        .pipe(dest('assets/'));
}
function VendorCss(){
    return src([
        VendorCSSBasePath+'pure-min.css',
        VendorCSSBasePath+'grids-responsive-min.css',
        VendorCSSBasePath+'slick.css',
        VendorCSSBasePath+'fontawesome.min.css'
    ])
        .pipe(minicss())
        .pipe(concat('vendors.min.css'))
        .pipe(dest('assets/'));
}

function VenusScss(){
    //return src('src/scss/*.scss')
    return src([
        VenusSCSSBasePath+'slick-theme.scss',
        VenusSCSSBasePath+"_functions.scss",
        VenusSCSSBasePath+"_variables.scss",
        VenusSCSSBasePath+"_mixins.scss",

        VenusSCSSBasePath+"_site.scss",
        VenusSCSSBasePath+"_image.scss",

        VenusSCSSBasePath+"_top-bar.scss",
        VenusSCSSBasePath+"_header.scss",
        VenusSCSSBasePath+"_menu.scss",
        VenusSCSSBasePath+"_product-item.scss",

        VenusSCSSBasePath+"_home-featured-collections.scss",
        VenusSCSSBasePath+"_home-featured-products.scss",
        VenusSCSSBasePath+"_home-brands.scss",
        VenusSCSSBasePath+"_template-collection.scss",
        VenusSCSSBasePath+"_template-product.scss",
        VenusSCSSBasePath+"_template-page.scss",

        VenusSCSSBasePath+"_other.scss",

        VenusSCSSBasePath+"_utilities.scss"

    ])
        //.pipe(sass())
        //.pipe(minicss())
        .pipe(concat('venus.scss.liquid'))
        //.pipe(rename('venus.scss'))
        .pipe(dest('assets/'));
}
function VenusJS(){
    return src('src/scripts/*.js')
    .pipe(babel())
        .pipe(uglify())
        .pipe(concat('venus.min.js'))
        .pipe(dest('assets/'));
}


watch('src/vendors/scripts/*.js', VendorJs);
watch('src/vendors/css/*.css', VendorCss);
watch('src/scss/*.scss', VenusScss);
watch('src/scripts/*.js', VenusJS);

function defaultTask(cb) {
   cb();
}

exports.default = defaultTask

exports.vendorjs = VendorJs
exports.vendorcss = VendorCss
exports.venusjs = VenusJS
exports.venusscss = VenusScss