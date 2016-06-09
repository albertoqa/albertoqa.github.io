module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //grunt task configuration will go here
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: {
          './tmp/min-safe/js/home.js': ['./js/app.js'],
          './tmp/min-safe/js/app.js': ['./home/home.controller.js']
        }
      }
    },
    concat: {
      js: { //target
        src: ['./tmp/min-safe/app.js', './tmp/min-safe/js/*.js'],
        dest: './tmp/app.js'
      }
    },
    uglify: {
      js: { //target
        src: ['./tmp/app.js'],
        dest: './app.min.js'
      }
    }
  });

  //load grunt tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-annotate');

  //register grunt default task
  grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify']);

}
