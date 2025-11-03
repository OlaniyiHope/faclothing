(function($) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    var WidgetCMSVideoHandler = function($scope, $) {
        var videoEls       = $scope.find('.cms-evideo-playback');
        var apiProvider    = elementorFrontend.utils['youtube'];
        var videoLink      = getSettings('video_link');
        var videoId        = apiProvider.getVideoIDFromURL(videoLink);
        var lightbox       = getSettings('lightbox');
        var autoplay       = (getSettings('autoplay') === 'yes') ? 1 : 0;
        var play_on_mobile = (getSettings('play_on_mobile') === 'yes') ? 1 : 0;
        var mute           = (getSettings('mute') === 'yes') ? 1 : 0;
        var loop           = (getSettings('loop') === 'yes') ? 1 : 0;
        var controls       = (getSettings('controls') === 'yes') ? 1 : 0;
        var videoFit       = getSettings('video_fit'),
            video_Width    = $(window).outerWidth(),
            video_Height    = video_Width*0.5625; // video 16:9 //$(window).outerHeight();
        if(video_Width < 1366){
            video_Height = videoEls.outerHeight();
            video_Width  = video_Height*1.777777;
        }
        //
        if(videoFit === 'yes'){
            $scope.find('.yt-video').each(function(){
                $(this).css({'width' : video_Width, 'height' : video_Height});
                // Resize
                $(window).on('resize', function() {
                    var video_Width_resize  = $(window).outerWidth(),
                        video_Height_resize = video_Width_resize*0.5625;
                    if(video_Width_resize >= 1366){
                        $scope.find('.yt-video').css({'width' : video_Width_resize, 'height' : video_Height_resize});
                    } else {
                        $(this).css({'width' : video_Width_resize, 'height' : video_Height_resize});
                    }
                });
            });
        }
        //
        onYouTubeIframeAPIReady(function() {
            if (lightbox != 'yes') {
                if(autoplay == 1){
                    videoEls.each(function(index, bgvideoEl) {
                        // Video auto play
                        bgvideoEl = $(bgvideoEl);
                        let ytElBg = videoEls.find('.yt-video');
                        bgvideoEl.html(ytElBg);
                        let ytBgPlayer = {};
                        let BgplayerOptions = {
                                videoId: videoId,
                                events: {
                                    onReady: () => {
                                        if (mute) {
                                            ytBgPlayer.mute();
                                        }
                                        if (autoplay) {
                                            ytBgPlayer.playVideo();
                                        }
                                    },
                                    onStateChange: event => {
                                        if (event.data === YT.PlayerState.ENDED && loop) {
                                          ytBgPlayer.seekTo(0); // loop
                                        }
                                    }
                                },
                                playerVars: {
                                    controls: controls,
                                    // rel: 1,
                                    playsinline: 1,
                                    modestbranding: 0,
                                    autoplay: autoplay,
                                    loop: loop,
                                }
                            };
                        ytBgPlayer = new YT.Player(ytElBg[0], BgplayerOptions);
                    });
                } else {
                    videoEls.each(function(index, videoEl) {
                        // button
                        videoEl = $(videoEl);
                        let videoBtn = videoEl.find('.cms-btn-video-bg');
                        videoBtn.on('click', function(e) {
                            e.preventDefault();
                            //let ytEl = $('<div class="yt-video"></div>');
                            let ytEl = videoEls.find('.yt-video');
                            videoEl.html(ytEl);
                            //let autoplay = 1;
                            //let mute = 1;
                            let ytPlayer = {};
                            let playerOptions = {
                                    videoId: videoId, //iYf3OgEdGmo
                                    events: {
                                        onReady: () => {
                                            if (mute) {
                                                ytPlayer.mute();
                                            }
                                            if (autoplay) {
                                                ytPlayer.playVideo();
                                            }
                                        },
                                    },
                                    playerVars: {
                                        controls: controls,
                                        // rel: 1,
                                        playsinline: 1,
                                        modestbranding: 0,
                                        autoplay: 1,
                                        loop: loop,
                                    }
                                };
                            ytPlayer = new YT.Player(ytEl[0], playerOptions);
                        });
                    });
                }
            }
        });

        function onYouTubeIframeAPIReady(callback) {
            if (YT.loaded == 1) {
                callback();
            } else {
                setTimeout(function() {
                    console.log('Wating for YouTube Iframe API Ready!');
                    onYouTubeIframeAPIReady(callback);
                }, 1000);
            }
        }

        function getSettings(setting) {
            let settings = {};
            const modelCID = $scope.data('model-cid') || '',
                isEdit = $scope.hasClass('elementor-element-edit-mode');
            if (isEdit && modelCID) {
                const data = elementorFrontend.config.elements.data[modelCID],
                    attributes = data.attributes;
                let type = attributes.widgetType || attributes.elType;
                if (attributes.isInner) {
                    type = 'inner-' + type;
                }
                let dataKeys = elementorFrontend.config.elements.keys[type];
                if (!dataKeys) {
                    dataKeys = elementorFrontend.config.elements.keys[type] = [];
                    $.each(data.controls, (name, control) => {
                        if (control.frontend_available) {
                            dataKeys.push(name);
                        }
                    });
                }
                $.each(data.getActiveControls(), function(controlKey) {
                    if (-1 !== dataKeys.indexOf(controlKey)) {
                        let value = attributes[controlKey];
                        if (value.toJSON) {
                            value = value.toJSON();
                        }
                        settings[controlKey] = value;
                    }
                });
            } else {
                settings = $scope.data('settings') || {};
            }
            return getItems(settings, setting);
        }

        function getItems(items, itemKey) {
            if (itemKey) {
                const keyStack = itemKey.split('.'),
                    currentKey = keyStack.splice(0, 1);
                if (!keyStack.length) {
                    return items[currentKey];
                }
                if (!items[currentKey]) {
                    return;
                }
                return this.getItems(items[currentKey], keyStack.join('.'));
            }
            return items;
        }
    };

    // Make sure you run this code under Elementor.
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/cms_video_player.default', WidgetCMSVideoHandler);
    });
})(jQuery);