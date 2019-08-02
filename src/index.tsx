import React, { useEffect, useLayoutEffect, useRef } from 'react';
import RVideoProps from './types/RVideoProps';
import vjs from 'video.js';
import languages from './lang';

function RVideo(props: RVideoProps ) {
    let $player: vjs.Player;
    const $node = useRef<HTMLVideoElement>(null);
    function ready() {
        const { onReady } = props;
        onReady && onReady($player)
    }
    useEffect(() => {
        const {
            src,
            poster,
            sources,
            loop,
            preload,
            lang,
            autoplay,
            vjsOptions,
            controls } = props;

        window['VIDEOJS_NO_DYNAMIC_STYLE']= true;
        window['VIDEOJS_NO_BASE_THEME'] = true;

        $player = vjs($node.current, {
            languages,
            language: lang,
            src,
            poster,
            sources,
            loop,
            preload,
            autoplay,
            controls,
            ...vjsOptions
        });
        $player.src(src || sources);
        $player.on('ready', ready);

        return () => {
            if ($player) {
                $player.dispose();
            }
        }
    }, []);
    useEffect(() => {
        $player.src(props.src || props.sources)
    }, [props.src, props.sources]);
    useEffect(() => {
        $player.poster(props.poster);
    }, [props.poster]);
    useEffect(() => {
        $player.width(props.width);
        $player.height(props.height);
    }, [props.width, props.height]);
    useEffect(() => {
        $player.loop(props.loop);
    }, [props.loop]);
    useEffect(() => {
        $player.language(props.lang);
    }, [props.lang]);
    useEffect(() => {
        $player.controls(props.controls);
    }, [props.controls]);
    useEffect(() => {
        $player.volume(props.volume);
    }, [props.volume]);
    useEffect(() => {
        $player.autoplay(props.autoplay);
    }, [props.autoplay]);
    useEffect(() => {
        const $video = $node.current;

        if ($video) {
            if (playsinline) {
                $video.setAttribute('webkit-playsinline', 'true');
                $video.setAttribute('playsinline', 'true');
                $video.setAttribute('x5-video-player-type', 'h5');
                $video.setAttribute('x5-video-player-fullscreen', 'true');
            } else {
                $video.removeAttribute('webkit-playsinline');
                $video.removeAttribute('playsinline');
                $video.removeAttribute('x5-video-player-type');
                $video.removeAttribute('x5-video-player-fullscreen');
            }
        }
    }, [props.playsinline]);
    useLayoutEffect(() => {
        $player.fluid(props.fluid);
        $player.aspectRatio(props.aspectRatio);
    }, [props.fluid, props.aspectRatio]);

    const { playsinline } = props;

    return (
        <div className="rvideo">
            <div data-vjs-player>
                <video ref={$node} />
            </div>
        </div>
    )
}
export default RVideo
