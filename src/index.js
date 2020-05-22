import {wxSdkInit,getOriginWx,shareInit} from './utils/weixin'
class WeChat{
    constructor(appId,shareObj) {
        WeChat.#sdkInit(appId)
        shareObj &&this.share(shareObj)
    }

    static #sdkInit(appId) {
        wxSdkInit(appId)
    }

    static getWx() {
        return getOriginWx()
    }

    share({title,desc,imgUrl}) {
        shareInit({title,desc,imgUrl})
    }
}

export default WeChat