# Aria2-Api

base on axios

# Usage

```js
    //token 如果配置了的话
let token = "token"
let aria2 = new Aria2(this.instance, token);
// let aria2 = new Aria2(this.instance);

//原生用法
aria2.call(Aria2Method.GET_GLOBAL_STAT, []).then(res => {
    console.log(res)
})
//预定义方法
aria2.getGlobalStat().then(res => {
    console.log(res)
})
//添加下载
let url = "https://i.pximg.net/img-original/img/2022/06/19/04/30/30/99147997_p0.jpg"
aria2.addUri([url], {dir: "D:\\pixiv", out: undefined, referer: "*", cookie: undefined}).then(res => {
    console.log(res)
})

```