module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      imagemin: {	            
        dynamic: {	                
            files: [{	                    
                expand: true,	                    
                cwd: 'public/img',	                    
                src: ['**/*.{png,gif,jpg}'],	                    
                dest: 'public/img/min'	                
            }]	            
        }	        
    },
    watch: {	                        
        images: {	                
            files: 'scr/img/**/*.{png,gif,jpg}',	                
            tasks: ['imagemin']	            
        }	        
    }	    
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');	    
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['imagemin', 'watch']);
}