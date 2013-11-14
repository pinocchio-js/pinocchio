/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      version: '<%= pkg.version %>',
      core_banner: '// Pinocchio\n' + '// ----------------------------------\n' + '// v<%= pkg.version %>\n' + '//\n' + '// Copyright (c)<%= grunt.template.today("yyyy") %> Jorge Dias, Jean Carlos Meninno, Richard Barton, XING AG.\n' + '// Distributed under MIT license\n',
      banner: '<%= meta.core_banner %>\n'
    },

    lint: {
      files: ['src/pinocchio.*.js']
    },

    preprocess: {
      pinocchio: {
        files: {
          'lib/backbone.pinocchio.js' : 'src/build/pinocchio.core.js'
        }
      }
    },

    jasmine: {
      options: {
        helpers: 'spec/javascripts/helpers/*.js',
        specs: 'spec/javascripts/**/*_spec.js',
        vendor: ['public/javascripts/jquery.js', 'public/javascripts/json2.js', 'public/javascripts/underscore.js', 'public/javascripts/backbone.js', 'public/javascripts/backbone.marionette.js']
      },
      pinocchio: {
        src: ['src/**/*.js']
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      pinocchio: ['src/*.js']
    },

    watch: {
      pinocchio: {
        files: ['src/**/*.js', 'spec/**/*.js'],
        tasks: ['jshint', 'jasmine:pinocchio']
      }
    },

    connect: {
      server: {
        options: {
          port: 8888
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('test', ['jshint', 'jasmine:pinocchio']);

  grunt.registerTask('dev', ['test', 'watch:pinocchio']);

  // Default task.
  grunt.registerTask('default', ['jshint', 'preprocess']);
};
