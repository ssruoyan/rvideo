import RVideoSource from './RVideoSource'
import vjs from 'video.js'

type RVideoProps = {
    lang: string;
    src: string;
    poster: string;
    loop: boolean;
    muted: boolean;
    volume: number;
    fluid: boolean;
    aspectRatio: string;
    playsinline: boolean;
    sources: RVideoSource[];
    preload: 'none' | 'metadata' | 'auto';
    autoplay: boolean;
    controls: boolean;
    isLive: boolean;
    height: number;
    width: number;
    children: [] | object;
    nativeFullscreen: boolean;
    vjsOptions: vjs.PlayerOptions;
    onReady: (p: vjs.Player) => void;
}

export default RVideoProps