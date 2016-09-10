/**
 * Files injected into index.html and app.scss
 */

module.exports = {
  nodeModulesJs: [
    'node_modules/angular/angular.js',
    'node_modules/angular-ui-router/release/angular-ui-router.js',
    'node_modules/satellizer/satellizer.js'
  ],
  clientJs: [
    'client/**/*.js', '!client/**/*.es6.js', '!client/**/*.spec.js', '!client/**/*.e2e.js'
  ],
  clientScss: [
    'views/**/*.scss', 'directives/**/*.scss'
  ]
};

