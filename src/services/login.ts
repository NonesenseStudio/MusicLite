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
