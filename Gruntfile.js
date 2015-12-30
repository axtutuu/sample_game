module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*',
          base: '/Users/kawasaki-atsushi/workspace/game/game_01/public/src/jade/',
          keepalive: true
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
          src: 'src/jade/*.jade',
          dest: 'public',
          ext: '.html'
        }]
      }
    },
  });

  grunt.registerTask('default', [ 'sass', 'jade', 'connect' ]);

};




// module.exports = function(grunt) {
//   // Gruntの設定
//   grunt.initConfig({
//     pkg: grunt.file.readJSON('package.json')
//   });
// 
//   // 各タスクの設定
//   grunt.initConfig({
//     // Webサーバーの設定
//     connect: {
//       server: {
//         options: {
//           port: 8000,
//           base: '/Users/kawasaki-atsushi/workspace/game/sample_1/public',
//           keepalive: true,
//           hostname: 'localhost'
//         }
//       }
//     },
// 
//     // clean
//     clean: {
//       options: {
//         force: true
//       },
//       publish: {
//         src: 'dist'
//       }
//     },
// 
//     // copy
//     copy: {
//       source: {
//         expand: true,
//         cwd: ''
//       }
//     },
//   });
// }
