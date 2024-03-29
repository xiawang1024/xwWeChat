import { postData } from './fetch'
const wx = require('weixin-js-sdk')

export const getOriginWx = () => wx

export const wxSdkInit = (appid) => {
    let url = encodeURIComponent(window.location.href)
    let data = appid ? { url, appid } : { url }
    postData(data).then(res => {
        let { code, data } = res
        if (code === 0) {
            console.log('获取api配置信息成功！')
            wx.config({
                debug: false,
                appId: data.appId,
                timestamp: data.timestamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: [
                    'updateAppMessageShareData',
                    'updateTimelineShareData',
                    'onMenuShareWeibo',
                    'onMenuShareQZone',
                    'chooseImage',
                    'previewImage',
                    'getNetworkType',
                    'openLocation',
                    'getLocation',
                    'hideOptionMenu',
                    'showOptionMenu',
                    'hideMenuItems',
                    'showMenuItems',
                    'hideAllNonBaseMenuItem',
                    'showAllNonBaseMenuItem',
                    'scanQRCode',
                    'chooseWXPay',
                    'openProductSpecificView'
                ]
            })
            wx.error(() => {
                console.log('SDK config信息验证失败！')
            })
        } else {
            console.log('获取api配置信息失败！')
        }
    })
}

export const shareInit = ({ title, desc, imgUrl, link }) => {
    let { origin, pathname } = window.location
    let originLink = `${origin}${pathname}`
    if (!link) {
        link = originLink
    }
    wx.ready(() => {
        console.log('SDK config信息验证成功！')
        wx.updateAppMessageShareData({
            title,
            desc,
            link,
            imgUrl,
            success: () => {
                console.log(`“分享给朋友”及“分享到QQ”设置成功！`)
            }
        })
        wx.updateTimelineShareData({
            title,
            link,
            imgUrl,
            success: () => {
                console.log(`“分享到朋友圈”及“分享到QQ空间”设置成功！`)
            }
        })
    })
}