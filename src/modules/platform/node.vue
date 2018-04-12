<template>
    <div class="clear">
        <div class="left fl">
            <div class="left_top publicBox">
                <header class="header clear"><span class="fl">GY</span>GY-{{currentEquipment.NODE_ID}}</header>
                <ul>
                    <li class="clear"><span class="fl">节点类型</span><b></b><i>{{getNodeType(currentEquipment.NODE_TYPE)}}</i></li>
                    <li class="clear"><span class="fl">所在机房</span><b></b><i>{{currentEquipment.NODE_ADDR}}</i></li>
                    <li class="clear"><span class="fl">所属单位</span><b></b><i>{{currentEquipment.NODE_COMPANY}}</i></li>
                    <li class="clear"><span class="fl">节点IP</span><b></b><i>{{currentEquipment.NODE_IP}}</i></li>
                    <li class="clear"><span class="fl">CPU</span><b></b><i>{{currentEquipment.CPU}}</i></li>
                    <li class="clear"><span class="fl">内存</span><b></b><i>{{currentEquipment.HD}}</i></li>
                    <li class="clear"><span class="fl">硬盘</span><b></b><i>{{currentEquipment.TAPE_SPAN}}</i></li>
                    <li class="clear"><span class="fl">带宽</span><b></b><i>{{currentEquipment.NODE_TYPE}}</i></li>
                    <li class="clear"><span class="fl">操作系统</span><b></b><i>{{currentEquipment.OPERATE_SYS}}</i></li>
                </ul>
            </div>
            <div class="left_bottom publicBox">
                <header class="header clear"><span class="fl">新</span>新申请接入设备</header>
                <VuePerfectScrollbar class="newEquipment">
                    <ul>
                        <li v-for="i in newEquipments" :class="{current: currentEquipmentNode === i.NODE_ID}"><span>{{i.NODE_ID}}</span><b></b><i>{{i.NODE_COMPANY}}</i></li>
                    </ul>
                </VuePerfectScrollbar>
            </div>
        </div>
        <div class="right fr publicBox">
            <header class="header clear"><span class="fl"></span>区块同步态势</header>
            <div class="chart" ref="chart"></div>
            <div class="title"><h1>当前记账节点</h1><p>{{JZNode.NODE_ID}}</p></div>
        </div>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import { node_getNewEquipment } from "~/api/apiFactory"
    import { node_getJZNode } from "~/api/apiFactory"
    import { node_getAllNode } from "~/api/apiFactory"
    import 'echarts/map/js/china.js';

    export default {
        name: "node",
        components: {VuePerfectScrollbar},
        data() {
            return{
                currentEquipment: {
                    NODE_ID: null,
                    NODE_TYPE: null,
                    NODE_ADDR: null,
                    NODE_COMPANY: null,
                    NODE_IP: null,
                    CPU: null,
                    INTERNAL: null,
                    HD: null,
                    TAPE_SPAN: null,
                    OPERATE_SYS: null,
                },
                currentEquipmentNode: null,
                newEquipments: null,
                allNodes: null,
                JZNode: {
                    NODE_ID: null,
                    COORDINATE: null,
                    NODE_COMPANY: null
                }
            }
        },
        methods: {
            getNodeType(type) {
                let nodeType;
                switch (type){
                    case 1 : nodeType = '顶级授信中心服务器';break;
                    case 2 : nodeType = '骨干区块记账服务器';break;
                    case 3 : nodeType = '主备份区块链服务器';break;
                    case 4 : nodeType = '企业区块链联盟记账服务器';break;
                    case 5 : nodeType = '中小型企业记账服务器';break;
                    case 6 : nodeType = '国内IDC普通服务器';break;
                    case 7 : nodeType = '家用/民用志愿服务区';break;
                    default : nodeType = null;
                }
                return nodeType;
            },
            mapChart(response) {
                let allNodes = response.data.data,
                    data1 = [],
                    data2 = [],
                    data3 = [],
                    data4 = [],
                    data5 = [],
                    data6 = [],
                    data7 = [],
                    lineData = [],
                    myChart,
                    option;
                for(let i=0;i<allNodes.length;i++){
                    lineData.push({coords : [this.JZNode.COORDINATE.split(','),allNodes[i].COORDINATE.split(',')]});
                    switch (allNodes[i].NODE_TYPE){
                        case 1 : data1.push({value: allNodes[i].COORDINATE.split(',')});break;
                        case 2 : data2.push({value: allNodes[i].COORDINATE.split(',')});break;
                        case 3 : data3.push({value: allNodes[i].COORDINATE.split(',')});break;
                        case 4 : data4.push({value: allNodes[i].COORDINATE.split(',')});break;
                        case 5 : data5.push({value: allNodes[i].COORDINATE.split(',')});break;
                        case 6 : data6.push({value: allNodes[i].COORDINATE.split(',')});break;
                        case 7 : data7.push({value: allNodes[i].COORDINATE.split(',')});break;
                    }
                }
                // 基于准备好的dom，初始化echarts实例
                myChart = this.$echarts.init(this.$refs.chart);
                // 图标配置项
                option = {
                    backgroundColor: '#fff',
                    title : {
                        text: '城市节点分布图',
                        left: 456,
                        textStyle : {
                            color: '#007be6',
                            fontSize : 24
                        },
                        top : 50
                    },
                    legend: {
                        orient: 'vertical',
                        bottom : 20,
                        left: 20,
                        itemWidth : 33,
                        itemHeight : 33,
                        data:[
                            {name : '顶级授信中心服务器' , textStyle : {color : '#fa151f'}},
                            {name : '骨干区块记账服务器' , textStyle : {color : '#ff827f'}},
                            {name : '国内IDC普通服务器' , textStyle : {color : '#f5935b'}},
                            {name : '中小型企业记账服务器' , textStyle : {color : '#5d20cf'}},
                            {name : '企业区块链联盟记账服务器' , textStyle : {color : '#01a8de'}},
                            {name : '家用/民用志愿服务区' , textStyle : {color : '#c851ea'}},
                            {name : '主备份区块链服务器' , textStyle : {color : '#2186ed'} , left : 50}
                        ],
                        textStyle: {
                            fontSize : 14
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        extraCssText : 'background-color : #0051bd;'
                    },
                    geo: {
                        map: 'china',
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        left : 100,
                        roam: false,
                        itemStyle: {
                            normal: {
                                areaColor: '#c3c7cb',
                                borderColor: '#fff'
                            },
                            emphasis: {
                                areaColor: '#abbccc'
                            }
                        }
                    },
                    series : []
                };

                lineData.length !== 0 && (option.series.push({
                    type: 'lines',
                    zlevel: 1,
                    symbol: ['none', 'arrow'],
                    symbolSize: 10,
                    tooltip : {
                        show : false
                    },
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: 'image://static/img/aa.png',
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: '#2186ED',
                            width: 2,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: lineData
                }));
                data1.length !== 0 && (option.series.push({
                    name: '国内IDC普通服务器',
                    type: 'graph',
                    animation : false,
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    symbol : 'image://static/img/IDC.png',
                    symbolSize : 30,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#e4393c'
                        }
                    },
                    data: data1
                }));
                data2.length !== 0 && (option.series.push({
                    name: '顶级授信中心服务器',
                    type: 'graph',
                    animation : false,
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    symbol : 'image://static/img/top.png',
                    symbolSize : 30,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#e4393c'
                        }
                    },
                    data: data2
                }));
                data3.length !== 0 && (option.series.push({
                    name: '中小型企业记账服务器',
                    type: 'graph',
                    animation : false,
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    symbol : 'image://static/img/small.png',
                    symbolSize : 30,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#e4393c'
                        }
                    },
                    data: data3
                }));
                data4.length !== 0 && (option.series.push({
                    name: '企业区块链联盟记账服务器',
                    type: 'graph',
                    animation : false,
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    symbol : 'image://static/img/union.png',
                    symbolSize : 30,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#e4393c'
                        }
                    },
                    data: data4
                }));
                data5.length !== 0 && (option.series.push({
                    name: '家用/民用志愿服务区',
                    type: 'graph',
                    animation : false,
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    symbol : 'image://static/img/volunteer.png',
                    symbolSize : 30,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#e4393c'
                        }
                    },
                    data: data5
                }));
                data6.length !== 0 && (option.series.push({
                    name: '骨干区块记账服务器',
                    type: 'graph',
                    animation : false,
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    symbol : 'image://static/img/backbone.png',
                    symbolSize : 30,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#e4393c'
                        }
                    },
                    data: data6
                }));
                data7.length !== 0 && (option.series.push({
                    name: '主备份区块链服务器',
                    type: 'graph',
                    animation : false,
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'fill'
                    },
                    symbol : 'image://static/img/main.png',
                    symbolSize : 30,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#e4393c'
                        }
                    },
                    data: data7
                }));
                // 绘制图表
                myChart.setOption(option);
            },
            async getNewEquipment(id) {
                let data = await node_getNewEquipment(id);
                if(id){
                    this.currentEquipment = data.data.data[0];
                }else{
                    this.newEquipments = data.data.data;
                    this.currentEquipmentNode = this.newEquipments[0].NODE_ID;
                    this.getNewEquipment(this.currentEquipmentNode);
                }
            },
            async getJZNode() {
                let data = await node_getJZNode();
                this.JZNode = data.data.data[0];
                this.getAllNode();
            },
            async getAllNode() {
                let data = await node_getAllNode();
                console.log(data);
                this.mapChart(data);
            }
        },
        mounted() {
            this.getNewEquipment();
            this.getJZNode();
        }
    }
</script>

<style lang="scss" scoped>
    .left {
        width: 330px;
        b {
            display: inline-block;
            width: 8px;
            height: 2px;
            vertical-align: middle;
            margin: 0 10px;
            background-color: #0377ff;
        }
        .left_top {
            height: 500px;
            margin-bottom: 30px;
            ul {
                margin-top: 20px;
                font-size: 14px;
                li {
                    height: 40px;
                    line-height: 40px;
                    padding: 0 4px;
                    span {
                        width: 66px;
                        color: #0377ff;
                    }
                    i {
                        font-style: normal;
                    }
                }
                li:nth-child(odd){
                    background-color: #f5f7fc;
                }
            }
        }
        .left_bottom {
            height: 390px;
            font-size: 14px;
            .newEquipment{
                margin-top: 20px;
                height: 280px;
                li {
                    height: 40px;
                    line-height: 40px;
                    padding: 0 4px;
                    cursor: pointer;
                    border-radius: 2px;
                    span {
                        color: #2186ed;
                    }
                    i {
                        font-style: normal;
                    }
                }
                li:hover, li.current {
                    background-color: #0377ff;
                    color: #fff;
                    span{
                        color: #fff;
                    }
                }
            }
        }
    }
    .right {
        width: calc(100% - 410px);
        height: 920px;
        position: relative;
        .chart{
            height: calc(100% - 51px);
        }
        .title {
            position: absolute;
            top: 75px;
            left: 40px;
            width: 150px;
            h1 {
                font-size: 16px;
                background-color: #3ad296;
                color: #fff;
                height: 30px;
                line-height: 30px;
                text-align: center;
            }
            p {
                color: #3ad296;
                text-align: center;
                height: 50px;
                line-height: 50px;
                font-size: 24px;
            }
        }
    }
</style>
