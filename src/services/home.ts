import httpRequest from "./axios";

/**
 * @InterfaceName: 首页-发现
 * @Description:
 * @param
 */
export function getHomepage() {
  return httpRequest({
    url: "/homepage/block/page",
    method: "get",
  });
}

/**
 * @InterfaceName: banner
 * @Description: 调用此接口, 可获取 banner( 轮播图 ) 数据
 * @param
 */
export function getBanner() {
  return httpRequest({
    url: "/banner",
    method: "get",
  });
}

/**
 * @InterfaceName: 推荐歌单
 * @Description: 调用此接口 , 可获取推荐歌单
 * @param limit
 */
export function getPersonalized(limit: any) {
  return httpRequest({
    url: "/personalized?limit=" + limit,
    method: "get",
  });
}

/**
 * @InterfaceName: 推荐新音乐
 * @Description: 调用此接口 , 可获取推荐新音乐
 * @param limit
 */
export function getPersonalizedNew(limit: any) {
  return httpRequest({
    url: "/personalized/newsong?limit=" + limit,
    method: "get",
  });
}
