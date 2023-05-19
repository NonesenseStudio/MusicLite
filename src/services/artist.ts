import httpRequest from "./axios";

/**
 * @InterfaceName: 歌手分类列表
 * @Description: 调用此接口,可获取歌手分类列表
 * @param limit ( 返回数量, 默认30)
 * @param offset (偏移数量，用于分页)
 * @param type (取值:-1:全部 1:男歌手 2:女歌手 3:乐队)
 * @param area (取值: -1:全部 7华语 96欧美 8:日本 16韩国 0:其他)
 */
export function getQrKey() {
    return httpRequest({
        url: "/login/qr/key",
        method: "get",
    });
}