import httpRequest from "./axios";

/**
 * @InterfaceName: 歌单分类
 * @Description: 调用此接口,可获取歌单分类,包含 category 信息
 * @param
 */
export function getPlaylistCatlist() {
  return httpRequest({
    url: "/playlist/catlist",
    method: "get",
  });
}

/**
 * @InterfaceName:热门歌单分类
 * @Description: 调用此接口,可获取热门歌单分类
 * @param:
 */
export function getPlaylistHot() {
  return httpRequest({
    url: "/playlist/hot",
    method: "get",
  });
}
