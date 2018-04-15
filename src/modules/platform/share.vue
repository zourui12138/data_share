<template>
    <div class="clear">
        <div class="left fl publicBox">
            <header class="header clear"><span class="fl">备</span>原始数据备份</header>
            <section class="container">
                <div class="slider">
                    <div>
                        <ul class="clear" ref="elem" :style="containerWidth">
                            <li :class="{current : index === currentIndex}" class="fl" v-for="(i,index) in dataList" @click="toggleData(i.ID,index)">
                                <img src="../../assets/img/platform/share/sliderImg.png" alt=""><p>{{i.COMPANY_NAME}}</p>
                            </li>
                        </ul>
                    </div>
                    <b class="left_icon" @click="prevToggleCurrent"></b>
                    <b class="right_icon" @click="nextToggleCurrent"></b>
                </div>
                <div class="shareDetail clear">
                    <ul class="file fl">
                        <li><h1>文件</h1><i @click="prevFileList"></i><s @click="nextFileList"></s></li>
                        <li v-for="i in fileDataList"><b class="fl"></b><span>{{i.DATA_NAME}}</span><button class="fr" type="button">{{i.REAL_NAME}}</button></li>
                    </ul>
                    <ul class="API fl">
                        <li><h1>API</h1><i @click="prevApiList"></i><s @click="nextApiList"></s></li>
                        <li v-for="i in apiDataList"><b class="fl"></b><span>{{i.DATA_NAME}}</span><button class="fr" type="button">{{i.REAL_NAME}}</button></li>
                    </ul>
                </div>
            </section>
        </div>
        <div class="right fr">
            <div class="top publicBox">
                <header class="header clear"><span class="fl">备</span>数据备份Top10</header>
                <section class="bar" ref="bar"></section>
            </div>
            <div class="bottom publicBox">
                <header class="header clear"><span class="fl"></span>数据上传/下载走势</header>
                <section class="line" ref="line"></section>
            </div>
        </div>
    </div>
</template>

<script>
    import { share_getDataList } from '~/api/apiFactory'
    import { share_getBarData } from '~/api/apiFactory'
    import { share_getLineData } from '~/api/apiFactory'
    import { share_getFileList } from '~/api/apiFactory'
    import { share_getApiList } from '~/api/apiFactory'

    export default {
        name: "share",
        data() {
            return{
                dataList: null,
                barData: null,
                lineData: null,
                fileDataList: null,
                apiDataList: null,
                currentDataId: 1,
                fileDataPage: 1,
                fileDataTotalPage: null,
                apiDataPage: 1,
                apiDataTotalPage: null,
                currentIndex: 0,
                isAnimate: false
            }
        },
        computed: {
            containerWidth() {return this.dataList && {width : this.dataList.length*130+'px'};},
            dataTotalIndex() {return this.dataList && this.dataList.length-1;}
        },
        methods: {
            async getDataList() {
                let data = await share_getDataList();
                this.dataList = data.data.data;
                this.currentDataId = this.dataList[0].ID;
                this.getFileList();
                this.getApiList();
            },
            async getBarData() {
                let data = await share_getBarData();
                this.barData = data.data.data;
            },
            async getLineData() {
                let data = await share_getLineData();
                this.lineData = data.data.data;
            },
            async getFileList() {
                let data = await share_getFileList(this.currentDataId,this.fileDataPage);
                this.fileDataList = data.data.data;
                this.fileDataTotalPage = Math.ceil(data.data.total/10);
            },
            async getApiList() {
                let data = await share_getApiList(this.currentDataId,this.apiDataPage);
                this.apiDataList = data.data.data;
                this.apiDataTotalPage = Math.ceil(data.data.total/10);
            },
            nextFileList() {
                if(this.fileDataPage < this.fileDataTotalPage){
                    this.fileDataPage++;
                    this.getFileList();
                }else{
                    console.log(123);
                }
            },
            prevFileList() {
                if(this.fileDataPage > 1){
                    this.fileDataPage--;
                    this.getFileList();
                }else{
                    console.log(123);
                }
            },
            nextApiList() {
                if(this.apiDataPage < this.apiDataTotalPage){
                    this.apiDataPage++;
                    this.getApiList();
                }else{
                    console.log(123);
                }
            },
            prevApiList() {
                if(this.apiDataPage > 1){
                    this.apiDataPage--;
                    this.getApiList();
                }else{
                    console.log(123);
                }
            },
            toggleData(id,index) {
                if(!this.isAnimate){
                    this.currentDataId = id;
                    this.fileDataPage = 1;
                    this.apiDataPage = 1;
                    this.getFileList();
                    this.getApiList();
                    this.currentIndex = index;
                    if(this.dataTotalIndex > 6){
                        let step;
                        this.isAnimate = true;
                        if(this.currentIndex - 3 > 0){
                            step = this.currentIndex - 3;
                            this.currentIndex + 3 >= this.dataTotalIndex && (step = this.dataTotalIndex - 6);
                        }else{
                            step = 0;
                        }
                        $(this.$refs.elem).animate({left : -(130*step) +'px'},'fast',() => {this.isAnimate = false;});
                    }
                }
            },
            nextToggleCurrent() {
                if(this.currentIndex + 3 < this.dataTotalIndex && this.dataTotalIndex > 6){
                    let index;
                    if(this.currentIndex  >= 3){
                        index = this.currentIndex + 7;
                        this.currentIndex + 7 >= this.dataTotalIndex - 3 && (index = this.dataTotalIndex - 3);
                    }else{
                        index = 10;
                        index > this.dataTotalIndex - 3 && (index = this.dataTotalIndex - 3);
                    }
                    this.toggleData(this.dataList[index].ID,index);
                }
            },
            prevToggleCurrent() {
                if(this.currentIndex > 3  && this.dataTotalIndex > 6) {
                    let index;
                    if(this.currentIndex > this.dataTotalIndex - 3){
                        index = this.dataTotalIndex - 10;
                        index < 3 && (index = 3);
                    }else{
                        index = this.currentIndex - 7;
                        this.currentIndex < 10 && (index = 3);
                    }
                    this.toggleData(this.dataList[index].ID,index);
                }
            },
            bar() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.bar);
                // 图表配置项
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['数据集', 'API'],
                        top : 20,
                        right : 20
                    },
                    grid: {
                        left: 20,
                        right: 30,
                        bottom: 20,
                        containLabel: true,
                        show : false
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        splitLine : {
                            show : false
                        }
                    },
                    yAxis: {
                        type: 'category',
                        data: ['贵阳市统计局','贵阳市交通委','贵阳市生态委','贵阳市人社局','贵阳市公安交管局','贵阳市卫生委', '贵阳市商务局', '贵阳市农委', '贵阳市安监局', '贵阳市教育局']
                    },
                    color : ['#64baff','#FB6360'],
                    series: [
                        {
                            name: '数据集',
                            type: 'bar',
                            stack : 'a',
                            barWidth : 16,
                            data: [27,30,32,37,43,50,82,90,124,201]
                        },
                        {
                            name: 'API',
                            type: 'bar',
                            stack : 'a',
                            barWidth : 16,
                            data: [4,4,5,5,5,6,7,10,10,13]
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            line() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.line);
                // 图表配置项
                let option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['下载量','上传量'],
                        top : 20,
                        right : 20
                    },
                    grid: {
                        left: 20,
                        right: 20,
                        bottom: 20,
                        containLabel: true,
                        show : false
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} GB'
                        },
                        splitLine : {
                            show : false
                        }
                    },
                    color : ['#3ad296', '#64baff'],
                    series: [
                        {
                            name:'下载量',
                            type:'line',
                            data:[11, 11, 15, 13, 12, 13, 10]
                        },
                        {
                            name:'上传量',
                            type:'line',
                            data:[21, 5, 9, 23, 30, 23, 19]
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            }
        },
        mounted() {
            this.getDataList();
            this.getBarData();
            this.getLineData();
            this.bar();
            this.line();
        }
    }
</script>

<style lang="scss" scoped>
    .left{
        height: 920px;
        width: calc(100% - 580px);
        .slider{
            height: 130px;
            background-color: #3689e6;
            position: relative;
            div{
                width: 910px;
                height: 100px;
                margin: auto;
                padding: 15px 0;
                overflow: hidden;
                position: relative;
                ul{
                    position: absolute;
                    top: 15px;
                    left: 0;
                    li{
                        width: 100px;
                        height: 100px;
                        text-align: center;
                        color: #fff;
                        cursor: pointer;
                        margin: 0 15px;
                        border-radius: 4px;
                        img{
                            vertical-align: top;
                            margin-top: 5px;
                            p{
                                height: 30px;
                                line-height: 30px;
                            }
                        }
                    }
                    li:hover,li.current{
                        background-color: #2e68a9;
                    }
                }
            }
            b{
                position: absolute;
                width: 24px;
                height: 48px;
                top: calc(50% - 24px);
                cursor: pointer;
            }
            b.left_icon{
                background: url('../../assets/img/platform/share/left.png') no-repeat center;
                left: 18px;
            }
            b.right_icon{
                background: url('../../assets/img/platform/share/right.png') no-repeat center;
                right: 18px;
            }
        }
        .shareDetail{
            margin-top: 31px;
            height: 629px;
            background: url('../../assets/img/platform/share/border.png') no-repeat center;
            ul {
                padding: 40px 20px 39px;
                position: relative;
                width: 460px;
                li{
                    height: 49px;
                    line-height: 49px;
                    h1 {
                        width: 150px;
                        height: 30px;
                        line-height: 30px;
                        color: #fff;
                        font-size: 16px;
                        text-align: center;
                        font-weight: normal;
                    }
                    i, s {
                        position: absolute;
                        width: 24px;
                        height: 20px;
                        right: 57px;
                        cursor: pointer;
                    }
                    i {
                        background: url('../../assets/img/platform/share/top_arrow.png') no-repeat center;
                        top: 76px;
                    }
                    s {
                        background: url('../../assets/img/platform/share/bottom_arrow.png') no-repeat center;
                        bottom: 16px;
                    }
                    b {
                        width: 16px;
                        height: 16px;
                        margin-top: 17px;
                        margin-right: 20px;
                    }
                    button {
                        width: 96px;
                        height: 30px;
                        line-height: 30px;
                        font-size: 16px;
                        border-radius: 4px;
                        border: none;
                        color: #fff;
                        padding-left: 25px;
                        background: url('../../assets/img/platform/share/btn_bg.png') no-repeat 10px center;
                        margin-top: 10px;
                        position: relative;
                        z-index: 10;
                    }
                    h2 {
                        position: absolute;
                        top: 125px;
                        right: 64px;
                        width: 10px;
                        height: 450px;
                        background: url('../../assets/img/platform/share/chain.png') no-repeat center;
                        z-index: 9;
                    }
                }
                li:nth-child(1) {
                    height: 60px;
                }
            }
            .file {
                h1,button{
                    background-color: #4877e6;
                }
                b {
                    background: url('../../assets/img/platform/share/file.png') no-repeat center;
                }
            }
            .API {
                h1,button{
                    background-color: #64baff;
                }
                b {
                    background: url('../../assets/img/platform/share/api.png') no-repeat center;
                }
            }
        }
    }
    .right{
        width: 500px;
        .top {
            height: 445px;
            margin-bottom: 30px;
            .bar{
                height: 365px;
            }
        }
        .bottom {
            height: 445px;
            .line{
                height: 365px;
            }
        }
    }
</style>
