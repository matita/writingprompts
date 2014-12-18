module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.initConfig({
		cssmin: {
			combine: {
				files: {
					'css/style-no-pref.min.css': ['css/_/*.css']
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions']
			},
			my_target: {
				src: 'css/style-no-pref.min.css',
				dest: 'css/style.min.css'
			}
		},

		handlebars: {
			compile: {
				options: {
					namespace: 'Tmpl',
					processName: function(filepath) {
						return filepath.split('/').pop().split('.')[0];
					}
				},
				files: {
					'js/_/tmpls.js': ['js/_/tmpl/*.hbs']
				}
			}
		},

		uglify: {
			my_target: {
				files: {
					'js/app.min.js': ['js/_/**/*.js']
				}
			}
		},

		watch: {
			styles: {
				files: ['css/_/*.css'],
				tasks: ['cssmin', 'autoprefixer']
			},
			tmpls: {
				files: ['js/_/**/*.hbs'],
				tasks: ['handlebars']
			},
			scripts: {
				files: ['js/_/**/*.js'],
				tasks: ['uglify']
			}
		}
	});

	grunt.registerTask('default', 'watch');
}