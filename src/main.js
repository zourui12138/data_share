// 作者：小丶张学友
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

//引入jQuery
import $ from 'jquery'

//时间处理
import moment from 'moment/moment'
Vue.filter('moment', function (value, formatString) {
    formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
    // return moment(value).format(formatString); // value可以是普通日期 20170723
    return moment.unix(value).format(formatString); // 这是时间戳转时间
});

Vue.directive('scroll', {
    // 当组件完成一次更新时调用 还有其它的钩子函数 自行选择合适的
    componentUpdated:  (el) => {el.scrollTop = 0;}
});

Vue.directive('animate', {
    bind: (el,binding) => {
        let len = binding.value.len;
        let distance = binding.value.distance;
        let callback = binding.value.callback;
        $(el).click(function () {
            let times = 0, index = binding.value.index, id = binding.value.id;
            if(index <= 3){
                times = 0;
            }else if(index >= len-4){
                times = len-7;
            }else{
                times = index - 3;
            }
            $(el).parent().animate({left : -(distance*times) +'px'},'fast');
            $(el).parent().find('.current').removeClass('current');
            $(el).addClass('current');
            callback(id);
        });
    }
});

Vue.directive('verticalAnimate', {
    bind: (el,binding) => {
        let len = binding.value.len;
        let distance = binding.value.distance;
        let callback = binding.value.callback;
        $(el).click(function () {
            let times = 0, index = binding.value.index, id = binding.value.id;
            if(index <= 2){
                times = 0;
            }else if(index >= len-3){
                times = len-5;
            }else{
                times = index - 2;
            }
            $(el).parent().animate({top : -(distance*times) +'px'},'fast');
            $(el).parent().find('.current').removeClass('current');
            $(el).addClass('current');
            callback(id);
        });
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
