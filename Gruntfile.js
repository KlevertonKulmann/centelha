module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            'basic_and_extras': {
                'files': {
                    'assets/js/app.js': [
                        "assets/src/js/*.js",
                    ],
                }
            }
        },
        sass: {
            'dist':{
                'options':{
                    'style':'compressed',
                    'compass':false,
                    'sourcemap':false
                },
                'files': {
                    'assets/css/app.min.css': [
                        "assets/src/sass/index.scss"
                    ],
                    'assets/css/tema.min.css': [
                        "assets/src/sass/tipografia.scss"
                    ],
                }
            }           
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: 'assets/src/sass/*.scss',
                tasks: ['sass','uglify'],
                
            },
            scripts: {
                files: 'assets/src/js/*.js',
                tasks: ['concat','uglify'],
            }
        },
        uglify:{
            "options":{
                "mangle":false
            },
            "my_target":{
                "files":{
                    'assets/js/app.min.js': ['assets/js/app.js']
                } 
            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Task definitions
    grunt.registerTask('default', ['concat','sass','uglify']);
};