import vjs from 'video.js'

const Plugin = vjs.getPlugin('plugin')

type VjsQuickSeekOptions = {
    gesture: boolean; // support mobile device touch gesture
    forward: number;  // forward time
    backward: number; // backward time
}

const defaultOptions: VjsQuickSeekOptions = {
    gesture: true,
    forward: 10,
    backward: 10
}

class VjsQuickSeek extends Plugin {
    static version: string = '0.0.1'
    options: VjsQuickSeekOptions
    constructor(player: vjs.Player, options: VjsQuickSeekOptions) {
        super(player)

        this.options = vjs.mergeOptions(defaultOptions, options)

        this.on('ready', this._ready)
    }
    _ready() {

    }

}

vjs.registerPlugin('vjsQuickSeek', VjsQuickSeek)
