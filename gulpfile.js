var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
  var paths = {
    'jquery': '../../vendor/bower_components/jquery/',
    'bootstrap': '../../vendor/bower_components/bootstrap/dist/',
    'theme': '../../vendor/ace_template/',
    'customjs': '../../resources/assets/javascript/'
  }
 
  mix.less(['app.less','site.less'])
    .copy('vendor/bower_components/bootstrap/dist/fonts/**', 'public/fonts')
    .copy('vendor/ace_template/fonts/**', 'public/fonts')
    .copy('vendor/ace_template/img/**', 'public/img')
    .copy('vendor/ace_template/avatars/**', 'public/avatars')
    .copy('vendor/ace_template/images/**', 'public/images')
    .copy('vendor/ace_template/css/**', 'public/css')
    .copy('vendor/ace_template/js/**', 'public/js')
    .scripts([
      paths.bootstrap + "js/bootstrap.js",
      paths.customjs + "app.js",
     ], 'public/js/app.js');
});
