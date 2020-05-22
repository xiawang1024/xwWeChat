const BASE_URL = 'https://weizan.dianzhenkeji.com/api/jssdk.php'
/**
 * post Handler
 * @param {Object} data
 */
export const postData = (data) => {
    return fetch(BASE_URL,{
        body:stringifyParams(data),
        method:'POST',
        headers:{
            'content-type':'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }).then(res => res.json())
}



function stringifyParams(params) {
    return Object.keys(params).map(item => `${item}=${params[item]}`).join('&')

}