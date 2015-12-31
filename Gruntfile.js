module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*',
          base: '/Users/kawasaki-atsushi/workspace/game/game_01/public/src'
        }
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          src: 'src/scss/*.scss',
          dest: 'public',
          ext: '.css'
        }]
      }
    },

    jade: {
      dist: {
        files: [{
          expand: true,
          src: ['src/jade/*.jade', 'src/*.jade'],
          dest: 'public',
          ext: '.html'
        }]
      }
    },

    copy: {
      js: {
        expand: true,
        src: 'src/js/*.js',
        dest: 'public',
        ext: '.js'
      },
      images: {
        expand: true,
        src: 'src/images/*',
        dest: 'public',
      }
    },

    watch: {
      js: {
        files: 'src/js/*.js',
        tasks: 'copy:js'
      },
      jade: {
        files: ['src/jade/*.jade', 'src/*.jade'],
        tasks: 'jade'
      },
      sass: {
        files: 'src/scss/*.scss',
        tasks: 'sass'
      }
    },


  });

  grunt.registerTask('default', [ 'sass', 'jade', 'copy:js', 'copy:images', 'connect','watch'  ]);
};

