import httpRequest from "./axios";

/**
 * @InterfaceName: 获取用户详情
 * @Description: 登录后调用此接口。传入用户id，可以获取用户详情
 * @param uid
 */
export function getUserDetail(uid: any) {
  return httpRequest({
    url: "/user/detail/" + uid,
    method: "get",
  });
}

/**
 * @InterfaceName: 获取账号信息
 * @Description: 登录后调用此接口，可获取用户账号信息
 * @param
 */
export function getUserAccount() {
  return httpRequest({
    url: "/user/account",
    method: "get",
  });
}

/**
 * @InterfaceName: 获取用户信息, 歌单，收藏，mv, dj 数量
 * @Description: 登录后调用此接口, 可以获取用户信息
 * @param
 */
export function getUserSubcount() {
  return httpRequest({
    url: "/user/subcount",
    method: "get",
  });
}

/**
 * @InterfaceName: 获取用户等级信息
 * @Description: 登录后调用此接口，可以获取用户等级信息,包含当前登录天数,听歌次数,下一等级需要的登录天数和听歌次数,当前等级进度
 * @param
 */
export function getUserLevel() {
  return httpRequest({
    url: "/user/level",
    method: "get",
  });
}

/**
 * @InterfaceName: 获取用户歌单
 * @Description: 登录后调用此接口 , 传入用户 id, 可以获取用户歌单
 * @param uid
 */
export function getUserPlaylist(uid: any) {
  return httpRequest({
    url: "/user/playlist/"+uid,
    method: "get",
  });
}
