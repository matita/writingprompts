module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.initConfig({
		cssmin: {
			combine: {
				files: {
					'css/style.min.css': ['css/_/*.css']
				}
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
				tasks: ['cssmin']
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