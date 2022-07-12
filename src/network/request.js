import axios from 'axios'

export function request(config){
    // 1---创建axios实例（一定不要创建全局的，要创建这种实例）
    const instance = axios.create({
        baseURL:'http://152.136.185.210:7878/api/hy66',
        timeout:5000
    })

    // 2---axios拦截器
    // 如果拦截的是全局的话，就直接用 axios.aaaaa
    // 我们在这里要拦截的是instance，所以要用下面的形式
    instance.interceptors.request.use(config=>{
        // 拦截的目的是：config中有一些信息可能不符合服务器的要求
        // 或者在每次发送请求的时候，都希望在界面显示一个发送请求的图标
        // 某些网络请求(比如登录（token）)，必须携带一些特殊信息
        // 拦截后记得返回出去，否则别人就拿不到这个数据
        return config
    },err=>{
        // console.log(err);
    });  //拦截请求

    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err);
    })  //拦截回应


    // 3---发送真正的网络请求
    // 别人传进来的config要传到实例中去，才可以进行真正的网络请求
    // 创建实例后，进行返回
    return  instance(config)
}
