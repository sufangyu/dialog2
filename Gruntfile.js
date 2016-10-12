var banner = '/**\n'+
             ' * <%= app.name %>  v<%= app.version %>\n'+
             ' * @date  <%= grunt.template.today("yyyy-mm-dd") %>\n'+
             ' * @author  <%= app.author.name %>\n'+
             ' * @home  <%= app.homepage %>\n'+
             ' * @bugs  <%= app.bugs %>\n'+
             ' * Licensed under <%= app.license %>\n'+
             ' */\n';


module.exports = function(grunt) {

    // 根据 package.json 文件, 自动加载 grunt 模块
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        app: grunt.file.readJSON('_config.json'),
        
        // 语法检查
        jshint: {
            options: {
                jshintrc: '.jshintrc'    // 语法检查配置文件, 与 Gruntfile.js 同一级目录                
            },
            dist: {
				src: ['<%= app.dist.dir %>/**/*.js', 'Gruntfile.js']
			},
			src: {
                src: ['<%= app.src.dir %>/**/*.js', 'Gruntfile.js', '!<%= app.src.dir %>/**/jquery-1.9.1.min.js', '!<%= app.src.dir %>/**/zepto.min.js', '!<%= app.src.dir %>/**/highlight.js']
            }
        },

        // HTML 页面的路径替换
        usemin: { 
            html: ['<%= app.dist.dir %>/demos/**/*.html'],
            options: {
                assetsDirs: ['<%= app.dist.dir %>/js']
            }
        },

        // CSS 文件压缩 
        cssmin: {
            dist: {
                options: {
                    report: 'min'
                },
                files: {
                    '<%= app.dist.dir %>/css/<%= app.name %>.min.css': ['<%= app.dist.dir %>/css/<%= app.name %>.css']
                }
            }
        },

        // 图片压缩
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.dist.dir %>/images/',
                    src: ['**/*.{png, jpg, jpeg, gif, svg}'],
                    dest: '<%= app.dist.dir %>/images/'
                }]
            }
        },
        

        // JS 文件压缩 
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            dist: {
                options: {
                    banner: banner
                },
                files: {
                    '<%= app.dist.dir %>/js/<%= app.name %>.min.js': '<%= app.dist.dir %>/js/<%= app.name %>.js'
                }
            },            
        },


        // 删除文件夹与文件
        clean: {
            dist: [ '<%= app.dist.dir %>' ]
        },


        // 复制文件与文件夹
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= app.src.dir %>',
                        src: ['**/images/**/*', '**/demos/**/*', '!**/demos/scroll.html', '!**/demos/tap.html', '!templates/**/*'],
                        dest: '<%= app.dist.dir %>'
                    }               
                ]
            },
            call: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= app.src.dir %>',
                        src: '<%= app.src.call %>',
                        dest: '<%= app.dist.dir %>'
                    }               
                ]
            },
            lib: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= app.src.dir %>',
                        src: '<%= app.src.lib %>',
                        dest: '<%= app.dist.dir %>'
                    }               
                ]
            },
            templates: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= app.templates.dir %>',
                        src: [ '**/*.*', '!**/*.html', '!**/scss/style.scss', '!**/js/example.js', '!**/css/**/*', '!**/back/**/*'],    // '!**/css/**/*': 排除css文件夹；'!**/*.css': 排除css文件
                        dest: '<%= app.src.dir %>'
                    }
                ]
            }
        },

        // sass 编辑成 CSS
        sass: {
            dist: {
                options: {
                    trace: true,
                    noCache: true,
                    sourcemap: 'none',
                    style: 'expanded'
                },
                files: {
                    '<%= app.dist.dir %>/css/tmpl.css': '<%= app.src.dir %>/scss/tmpl.scss',
                    '<%= app.dist.dir %>/css/dialog.css': '<%= app.src.dir %>/scss/dialog.scss'
                }
            },
        	src: {
                options: {
                	trace: true,
                    noCache: true,
                    sourcemap: 'none',
                    style: 'expanded'
                },
                files: {
                    '<%= app.src.dir %>/css/tmpl.css': '<%= app.src.dir %>/scss/tmpl.scss',
                    '<%= app.src.dir %>/css/dialog.css': '<%= app.src.dir %>/scss/dialog.scss'
                }
            },
            templates: {
                options: {
                	trace: true,          // 错误提示                    
                    noCache: true,        // 不缓存 sass 文件
                    sourcemap: 'none',    // 不生成 map 文件
                    style: 'expanded'     // css文件编译方式: nested, compact, compressed, expanded
                },
                files: {
                    '<%= app.templates.dir %>/css/style.css': '<%= app.templates.dir %>/scss/style.scss',
                    '<%= app.templates.dir %>/css/dialog.css': '<%= app.templates.dir %>/scss/dialog.scss'
                }
            }
        },

        // 文件拼接
        concat: {
            dist: {
                files: {
                    '<%= app.dist.dir %>/js/<%= app.name %>.js': '<%= app.src.scripts %>'
                }
            }
        },

        // autoprefixer 自动补全浏览器前缀
        autoprefixer: {
			options: {
                browsers: ['last 8 versions']
			},
            dist: {
                expand: true,
                cwd: '<%= app.dist.dir %>/css/',
                src: [ '**/*.css' ],
                dest: '<%= app.dist.dir %>/css/'
            },
            src: {
                expand: true,
                cwd: '<%= app.src.dir %>/css/',
                src: [ '**/*.css' ],
                dest: '<%= app.src.dir %>/css/'
                /*files: {
                    '<%= app.src.dir %>/css/tmpl.css': '<%= app.src.dir %>/css/tmpl.css',
                    '<%= app.src.dir %>/css/dialog.css': '<%= app.src.dir %>/css/dialog.css'
                }*/
            },
			templates: {
                expand: true,
                cwd: '<%= app.templates.dir %>/css/',
                src: [ '**/*.css' ],
                dest: '<%= app.templates.dir %>/css/'
			}
		},


        // connect 本地服务器
        connect: {
            options: {
                port: 9000,
                hostname: '*',
                open: true,
                livereload: true,
            },
            dist: {
                options: {
                    base: ['<%= app.dist.dir %>']
                }
            },            
            src: {
                options: {                    
                    base: ['<%= app.src.dir %>']
                }
            },            
            templates: {
                options: {
                    port: 9090,
                    base: ['<%= app.templates.dir %>']
                }
            }
        },

        // watch 监听文件变化
        watch: {
            options: {
                livereload: true
            },            
            // 发布
            dist: {
                files: [
                    '<%= app.dist.dir %>/*.html',
                    '<%= app.dist.dir %>/js/*.js',
                    '<%= app.dist.dir %>/css/*.css',
                    '<%= app.dist.dir %>/images/*.{png, jpg, gif, svg}',
                    '<%= app.dist.dir %>/demos/*.html'
                ],
                tasks: ['jshint:dist', 'autoprefixer:dist']
            },
            // 开发
            src: {
            	files: [
            	    '<%= app.src.dir %>/*.html',
            	    '<%= app.src.dir %>/js/*.js',
            	    '<%= app.src.dir %>/scss/*.scss',
                    '<%= app.src.dir %>/images/*.{png, jpg, gif, svg}',
                    '<%= app.src.dir %>/demos/*.html'
            	],
            	tasks: ['jshint:src', 'sass:src', 'autoprefixer:src']
            },
            // 静态模板
            templates: {
            	files: [
            	    '<%= app.templates.dir %>/*.html',
            	    '<%= app.templates.dir %>/js/*.js',
            	    '<%= app.templates.dir %>/css/*.css',
            	    '<%= app.templates.dir %>/scss/*.scss',
                    '<%= app.templates.dir %>/images/*.{png, jpg, gif, svg}'
            	],
            	tasks: ['sass:templates', 'autoprefixer:templates']
            },
        },


    });

    
    // 执行任务
    grunt.registerTask('serve', ['dist', 'connect:dist', 'watch:dist']);
    grunt.registerTask('dist', ['clean:dist', 'sass:dist', 'autoprefixer:dist', 'concat:dist', 'uglify:dist', 'copy:lib', 'copy:dist', 'copy:call', 'imagemin', 'usemin']);
    grunt.registerTask('src', ['sass:src', 'autoprefixer:src', 'connect:src', 'watch:src']);    
    grunt.registerTask('copytmpl', ['copy:templates']);
    grunt.registerTask('templates', ['sass:templates', 'autoprefixer:templates', 'connect:templates', 'watch:templates']);

    /**
     * @Task:
     *     serve  => 浏览Demo: 本地服务器
     *     dist   => 开发环境: 生产实际项目使用代码 
     *     src    => 开发环境: 本地服务器; 实时刷新
     *     copytmpl  => 拷贝静态模板资源
     *     templates => 静态模板: 本地服务器; 实时刷新
     *  
     * @todo: 
     *     test   => 代码测试：检查代码发布目录的 js 语法
     *     zip    => 代码打包：把发布的代码打包成压缩文件
     */
};