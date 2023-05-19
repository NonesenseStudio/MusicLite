import httpRequest from "./axios";

/**
 * @InterfaceName: 二维码key生成接口
 * @Description: 调用此接口生成一个key
 * @param:
 */
export function getQrKey() {
  return httpRequest({
    url: "/login/qr/key",
    method: "get",
  });
}

/**
 * @InterfaceName: 二维码生成接口
 * @Description: 调用此接口生成一个二维码
 * @param key
 */
export function getQrCreate(key: any) {
  return httpRequest({
    url:
      "/login/qr/create?key=" +
      key +
      "&qrimg=true&timestamp=" +
      new Date().getTime(),
    method: "get",
  });
}

/**
 * @InterfaceName: 二维码检测扫码状态接口
 * @Description: 轮询此接口可获取二维码扫码状态,800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
 * @param key
 */
export function getQrCheck(key: any) {
  return httpRequest({
    url: "/login/qr/check?key=" + key,
    method: "get",
  });
}

/**
 * @InterfaceName: 游客登陆
 * @Description: 直接调用此接口, 可获取游客cookie,如果遇到其他接口未登录状态报400状态码需要验证的错误,可使用此接口获取游客cookie避免报错
 * @param key
 */
export function getRegisterAnonimous(key: any) {
  return httpRequest({
    url: "/register/anonimous",
    method: "get",
  });
}
