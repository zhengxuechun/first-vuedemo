/* 包含多个接口请求函数的模块信息*/
import ajax from '.ajax'
// 1、根据经纬度获取位置详情
export const reqAddress=(geohash)=>ajax('/position/${geohash})')
// 2、获取食品分类列表
export const reqFoodTypes=()=>ajax('/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops=(longitude,latitude )=>ajax('/shops',{longitude,latitude})//如果不传两个参数，可以传一个{} 一个对象的两个属性也是一样的
// 4、根据经纬度和关键字搜索商铺列表]列表
export const reqSearchShop=(geohash,keyword)=>ajax('/search_shops',{geohash,keyword})
// 5、获取一次性验证码
//export const reqAddress=(geohash,keyword)=>ajax('/search_shops',{geohash,keyword})
// 6、用户名密码登陆
//export const reqPwdLogin=(longitude,latitude )=>ajax('/shops',{longitude,latitude})//如果不传两个参数，可以传一个{} 一个对象的两个属性也是一样的
// 7、发送短信验证码
// 8、手机号验证码登陆
// 9、根据会话获取用户信息
// 10、用户登出
