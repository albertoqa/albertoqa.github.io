module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //grunt task configuration will go here
    concat: {
      js: { //target
        src: [
          './js/app.js',
          './home/home.controller.js',
          './about/about.controller.js',
          './common/directive/headerGeneric/headerGeneric.directive.js',
          './common/directive/footerGeneric/footerGeneric.directive.js'
        ],
        dest: './tmp/app.js'
      }
    },
    uglify: {
      options: {
        compress: false
      },
      js: { //target
        src: ['./tmp/app.js'],
        dest: './app.min.js'
      }
    }
  });

  //load grunt tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //register grunt default task
  grunt.registerTask('default', ['concat', 'uglify']);

}
