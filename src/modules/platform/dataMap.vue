<template>
    <div class="clear">
        <div class="left fl publicBox">
            <header class="header clear">
                <span class="fl"></span>区块数据
                <div class="fr">
                    <input type="text" placeholder="请输入查询信息" v-model="newKeywords"><button type="button" @click="addKeywords(newKeywords)">查询</button>
                </div>
            </header>
            <section class="container">
                <div class="keywords clear">
                    <h1 class="fl">关键词</h1>
                    <ul class="fl">
                        <li class="fl" v-show="keywords"><span>{{keywords}}</span><b class="fr" @click="clearKeywords"></b></li>
                    </ul>
                </div>
                <div class="blockChain">
                    <header>所含信息区块链</header>
                    <div class="slider">
                        <div>
                            <ul class="clear" ref="elem" :style="containerWidth">
                                <li class="fl" v-for="(i,index) in dataList" :class="{current : index === currentIndex}" @click="toggleData(i.ID,index)"><s>{{i.ID}}</s></li>
                            </ul>
                        </div>
                        <b class="left_icon" @click="prevToggleCurrent"></b>
                        <b class="right_icon" @click="nextToggleCurrent"></b>
                    </div>
                </div>
                <div class="dataMsg">
                    <div class="dataContainer">
                        <div class="dataBox">
                            <header>数据拥有方-{{sellData.COMPANY_NAME}}</header>
                            <section class="clear">
                                <ul class="fl">
                                    <li class="clear"><span class="fl">公钥指纹</span><b class="fl">{{sellData.PUBLIC_KEY_FINGERPRINT}}</b></li>
                                    <li class="clear"><span class="fl">系统评分</span><b class="fl">{{sellData.SYSTEM_SCORE+' 分'}}</b></li>
                                    <li class="clear"><span class="fl">数据共享次</span><b class="fl">{{sellData.DATA_SHARES_TIMES+' 次'}}</b></li>
                                    <li class="clear"><span class="fl">数据共享总量</span><b class="fl">{{sellData.DATA_SHARING_TOTAL+' 次'}}</b></li>
                                </ul>
                                <footer class="fl"></footer>
                            </section>
                        </div>
                    </div>
                    <div class="dataContainer clear">
                        <div class="dataBox fl" v-for="i in buyData">
                            <header>数据使用方-{{i.COMPANY_NAME}}</header>
                            <section class="clear">
                                <ul class="fl">
                                    <li class="clear"><span class="fl">公钥指纹</span><b class="fl">{{i.PUBLIC_KEY_FINGERPRINT}}</b></li>
                                    <li class="clear"><span class="fl">系统评分</span><b class="fl">{{i.SYSTEM_SCORE+' 分'}}</b></li>
                                    <li class="clear"><span class="fl">数据共享次</span><b class="fl">{{i.DATA_SHARES_TIMES+' 次'}}</b></li>
                                    <li class="clear"><span class="fl">数据共享总量</span><b class="fl">{{i.DATA_SHARING_TOTAL+' 次'}}</b></li>
                                </ul>
                                <footer class="fl"></footer>
                            </section>
                        </div>
                        <div class="left_icon" @click="prevBuyUser"></div>
                        <div class="right_icon" @click="nextBuyUser"></div>
                    </div>
                </div>
            </section>
        </div>
        <div class="right fr publicBox">
            <header class="header clear"><span class="fl">热</span>近期热搜数据</header>
            <h1>数据集</h1>
            <ul>
                <li v-for="i in hotData">{{i.DATA_NAME}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { dataMap_getHotData } from '~/api/apiFactory'
    import { dataMap_getDataList } from '~/api/apiFactory'
    import { dataMap_getSellUser } from '~/api/apiFactory'
    import { dataMap_getBuyUser } from '~/api/apiFactory'
    export default {
        name: "data-map",
        data() {
            return{
                hotData: null,
                dataList: null,
                sellData: {},
                buyData: null,
                buyPage: 1,
                buyTotalPage: null,
                currentDataId: 1,
                isAnimate: false,
                currentIndex: 0,
                keywords: null,
                newKeywords: null
            }
        },
        computed: {
            containerWidth() {return this.dataList && {width : this.dataList.length*140+'px'};},
            dataTotalIndex() {return this.dataList && this.dataList.length-1;}
        },
        methods: {
            async getHotData() {
                let data = await dataMap_getHotData();
                this.hotData = data.data.data;
            },
            async getDataList() {
                let data = await dataMap_getDataList(this.keywords);
                this.dataList = data.data.data;
                this.currentDataId = this.dataList[0].ID;
                this.getSellUser();
                this.getBuyUser();
            },
            async getSellUser() {
                let data = await dataMap_getSellUser(this.currentDataId);
                this.sellData = data.data.data[0];
            },
            async getBuyUser() {
                let data = await dataMap_getBuyUser(this.currentDataId,this.buyPage);
                this.buyData = data.data.data;
                this.buyTotalPage = Math.ceil(data.data.total/2);
            },
            nextBuyUser() {
                if(this.buyPage < this.buyTotalPage){
                    this.buyPage++;
                    this.getBuyUser();
                }else{
                    console.log(123);
                }
            },
            prevBuyUser() {
                if(this.buyPage > 1){
                    this.buyPage--;
                    this.getBuyUser();
                }else{
                    console.log(123);
                }
            },
            toggleData(id,index) {
                if(!this.isAnimate){
                    this.currentDataId = id;
                    this.currentIndex = index;
                    this.buyPage = 1;
                    this.getSellUser();
                    this.getBuyUser();
                    let step;
                    this.isAnimate = true;
                    if(this.currentIndex - 3 > 0){
                        step = this.currentIndex - 3;
                        this.currentIndex + 3 >= this.dataTotalIndex && (step = this.dataTotalIndex - 6);
                    }else{
                        step = 0;
                    }
                    $(this.$refs.elem).animate({left : -(140*step) +'px'},'fast',() => {this.isAnimate = false;});
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
            clearKeywords() {
                this.keywords = null;
                this.getDataList();
            },
            addKeywords(keywords) {
                this.keywords = keywords;
                this.newKeywords = null;
                this.getDataList();
            }
        },
        mounted() {
            this.getHotData();
            this.getDataList();
        }
    }
</script>

<style lang="scss" scoped>
    .left{
        width: calc(100% - 480px);
        height: 920px;
        .header{
            input{
                height: 28px;
                line-height: 28px;
                border: 1px solid #aaa;
                padding-left: 8px;
                border-radius: 2px;
                font-size: 14px;
                width: 300px;
            }
            button{
                height: 30px;
                width: 60px;
                background-color: #0377ff;
                color: #fff;
                border-radius: 2px;
                margin-left: 20px;
            }
        }
        .container{
            padding: 20px 0;
            height: calc(100% - 90px);
            .keywords {
                height: 40px;
                border: 1px solid #4877e6;
                margin-bottom: 20px;
                h1 {
                    background-color: #4877e6;
                    color: #fff;
                    font-size: 16px;
                    text-align: center;
                    line-height: 40px;
                    width: 98px;
                    font-weight: normal;
                }
                ul {
                    padding: 5px 0;
                    height: 30px;
                    line-height: 30px;
                    color: #fff;
                    li {
                        height: 30px;
                        border-radius: 4px;
                        background-color: #3ad296;
                        text-align: center;
                        margin-left: 10px;
                        span {
                            padding-left: 10px;
                        }
                        b {
                            width: 30px;
                            height: 30px;
                            border-radius: 4px;
                            background: #3ad296 url('../../assets/img/platform/dataMap/close.png') no-repeat center;
                            cursor: pointer;
                        }
                    }
                }
            }
            .blockChain{
                height: 190px;
                border: 2px solid #2186ed;
                margin-bottom: 36px;
                header {
                    background-color: #2186ed;
                    height: 50px;
                    line-height: 50px;
                    color: #fff;
                    padding-left: 20px;
                    font-size: 16px;
                }
                .slider{
                    height: 140px;
                    position: relative;
                    div{
                        width: 980px;
                        height: 120px;
                        margin: auto;
                        padding: 10px 0;
                        overflow: hidden;
                        position: relative;
                        ul{
                            position: absolute;
                            top: 10px;
                            left: 0;
                            li{
                                width: 100px;
                                height: 100px;
                                padding: 10px;
                                cursor: pointer;
                                margin: 0 10px;
                                border-radius: 4px;
                                background: url('../../assets/img/platform/dataMap/sliderImg.png') no-repeat center;
                                position: relative;
                                s{
                                    color: #fff;
                                    text-decoration: none;
                                    font-size: 20px;
                                    position: absolute;
                                    right: 12px;
                                    bottom: 12px;
                                }
                            }
                            li:hover,li.current{
                                background:#3ad296 url('../../assets/img/platform/dataMap/sliderImg_hover.png') no-repeat center;
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
                        background: url('../../assets/img/platform/dataMap/left.png') no-repeat center;
                        left: 18px;
                    }
                    b.right_icon{
                        background: url('../../assets/img/platform/dataMap/right.png') no-repeat center;
                        right: 18px;
                    }
                }
            }
            .dataMsg{
                border: 2px solid #2186ed;
                padding: 10px 0;
                .dataContainer{
                    width: 1000px;
                    height: 242px;
                    margin: 10px auto;
                    position: relative;
                    .dataBox{
                        width: 476px;
                        border: 2px solid #d2d2d2;
                        margin: 0 10px;
                        header {
                            background-color: #f5f7fc;
                            text-align: center;
                            font-size: 18px;
                            height: 50px;
                            line-height: 50px;
                            padding: 0 20px;
                            color: #5a8bff;
                            border-bottom: 1px solid #d2d2d2;
                        }
                        section{
                            margin: 10px;
                            ul {
                                width: 316px;
                                word-break: break-all;
                                padding: 9px 10px 8px;
                                line-height: 30px;
                                li{
                                    span {
                                        width: 100px;
                                    }
                                    b {
                                        width: 210px;
                                        color: #5a8bff;
                                        font-weight: normal;
                                    }
                                }
                            }
                            footer {
                                width: 120px;
                                height: 167px;
                                background: url('../../assets/img/platform/dataMap/encry.png') no-repeat center;
                            }
                        }
                    }
                    .left_icon,.right_icon{
                        position: absolute;
                        width: 24px;
                        height: 48px;
                        top: calc(50% - 24px);
                        cursor: pointer;
                    }
                    .left_icon{
                        background: url('../../assets/img/platform/dataMap/left.png') no-repeat center;
                        left: -30px;
                    }
                    .right_icon{
                        background: url('../../assets/img/platform/dataMap/right.png') no-repeat center;
                        right: -30px;
                    }
                }
            }
        }
    }
    .right{
        width: 350px;
        height: 920px;
        line-height: 39px;
        h1 {
            color: #0377ff;
            font-weight: bold;
            border-bottom: 1px solid #aaa;
            font-size: 14px;
        }
        li{
            border-bottom: 1px dashed #aaa;
            font-size: 14px;
        }
    }
</style>
