interface Device {
    isEnabled(): boolean;
    disabled(): void;
    enabled(): void;
    setVolume(volume: number): void;
    getVolume(): number;
    setChannel(channel: number): void;
    getChannel(): number;
}

abstract class RemoteControl {
    protected _device: Device;

    constructor(device: Device) {
        this._device = device;
    }

    public togglePower() {
        if (this._device.isEnabled()) this._device.disabled();
        else this._device.enabled();
    }
    public volumeDown() {
        this._device.setVolume(this._device.getVolume() - 10);
    }
    public volumeUp() {
        this._device.setVolume(this._device.getVolume() + 10)

    }
    public channelDown() {
        this._device.setChannel(this._device.getChannel() - 1)
    }
    public channelUp() {
        this._device.setChannel(this._device.getChannel() + 1)
    }

}

class AdvancedRemoteControl extends RemoteControl {
    public mute() {
        this._device.setVolume(0)
    }
}

export class TV implements Device {
    private _enabled: boolean;
    private _volume: number;
    private _channel: number;

    constructor(enabled: boolean = false, volume: number = 0, channel: number = 1) {
        this._channel = channel;
        this._enabled = enabled;
        this._volume = volume;
    }

    public isEnabled(): boolean {
        return this._enabled;
    }
    public disabled(): void {
        this._enabled = false;
    }
    public enabled(): void {
        this._enabled = true;
    }
    public setVolume(volume: number) {
        this._volume = volume;
    }
    public getVolume(): number {
        return this._volume;
    }
    public setChannel(channel: number) {
        this._channel = channel;
    }
    public getChannel(): number {
        return this._channel;
    }
}

export class Radio implements Device {
    private _enabled: boolean;
    private _volume: number;
    private _channel: number;

    constructor(enabled: boolean = false, volume: number = 0, channel: number = 1) {
        this._channel = channel;
        this._enabled = enabled;
        this._volume = volume;
    }

    public isEnabled(): boolean {
        return this._enabled;
    }
    public disabled(): void {
        this._enabled = false;
    }
    public enabled(): void {
        this._enabled = true;
    }
    public setVolume(volume: number) {
        this._volume = volume;
    }
    public getVolume(): number {
        return this._volume;
    }
    public setChannel(channel: number) {
        this._channel = channel;
    }
    public getChannel(): number {
        return this._channel;
    }
}