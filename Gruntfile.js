module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        
        concat: {
            'basic_and_extras': {
                'files': {
                    'assets/js/app.js': [
                        "assets/src/js/index.js",
                        "assets/src/js/parallax.js",
                        "assets/src/js/slider.js",
                        "assets/src/js/tema.js",
                        "assets/src/js/fix.js",
                    ],
                    'assets/js/dadosHome.js': [
                        "assets/src/js/homeData.js"
                    ],
                    'assets/js/slider.js': [
                        "assets/src/js/slider.js"
                    ]
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
                    'assets/js/app.min.js': ['assets/js/app.js'],
                    'assets/js/dadosHome.min.js': ['assets/js/dadosHome.js'],
                    'assets/js/slider.min.js': ['assets/js/slider.js']
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