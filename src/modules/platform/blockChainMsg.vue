<template>
    <div class="clear">
        <div class="left fl publicBox">
            <header class="header clear"><span class="fl">块</span>区块链详情</header>
            <section class="container clear">
                <VerticalSlider class="fl" :sliderImg="sliderImg" :sliderData="block" :callback="toggleData" @listenChildEvent="getBlock"/>
                <div class="hasVerticalSliderContent fl">
                    <h1>{{blockData.data1.ID}}#</h1>
                    <ul class="message clear">
                        <li class="fl"><p>{{blockData.data1.DATA_NAME}}</p></li>
                        <li class="fl"><p>区块链账户:{{blockData.data1.USERNAME}}</p><p>网络地址:{{blockData.data1.DATA_IP}}</p></li>
                        <li class="fl"><h2>{{blockData.data1.DATA_SIZE}}</h2><p>MB</p></li>
                        <li class="fl"><h2>{{blockData.data2.SELL_TIMES}}</h2><p>次</p></li>
                    </ul>
                    <div class="messageDetail">
                        <header>Block - #政务共享数据区块链详细信息</header>
                        <ol class="clear">
                            <li class="fl">
                                <img src="../../assets/img/platform/blockChainMsg/scene.png" alt="">
                                <div class="clear">
                                    <span class="fl">数据应用的服务平台</span>
                                    <ul class="fr"><li>{{blockData.data2.DATA_PLATFORM}}</li></ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">用户网络地址</span>
                                    <ul class="fr"><li v-for="i in ips">{{i}}</li></ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">开始时间</span>
                                    <ul class="fr"><li>{{blockData.data2.START_TIME}}</li></ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">结束时间</span>
                                    <ul class="fr"><li>{{blockData.data2.END_TIME}}</li></ul>
                                </div>
                            </li>
                            <li class="fl">
                                <img src="../../assets/img/platform/blockChainMsg/contract.png" alt="">
                                <div class="clear">
                                    <span class="fl">用户</span>
                                    <ul class="fr"><li>{{blockData.data2.SELL_COMPANY_NAME}}</li></ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">共享周期</span>
                                    <ul class="fr"><li>{{blockData.data2.SHARING_CYCLE}}</li></ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">共享场景</span>
                                    <ul class="fr"><li>{{blockData.data2.USE_ENVIRONMENT}}</li></ul>
                                </div>
                            </li>
                            <li class="fl">
                                <img src="../../assets/img/platform/blockChainMsg/key.png" alt="">
                                <div class="clear">
                                    <span class="fl">加密算法(国密)</span>
                                    <ul class="fr"><li>{{blockData.data2.ENCRYPTION_ALGORITHM}}</li></ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">公钥密码体系(认证签名)</span>
                                    <ul class="fr"><li>{{blockData.data2.PUBLIC_KEY_SYSTEM}}</li></ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">密钥有效周期</span>
                                    <ul class="fr"><li v-for="i in EVMs">{{i}}</li></ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">密钥空间</span>
                                    <ul class="fr"><li>{{blockData.data2.KEY_SPACE}}</li></ul>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
        <div class="right fr publicBox">
            <header class="header clear"><span class="fl">共</span>近期共享数据的贡献值</header>
            <h1 class="clear"><span class="fl">数据集</span><b class="fr">贡献值</b></h1>
            <h2 class="clear" v-for="i in shareData"><span class="fl">{{i.DATA_NAME}}</span><b class="fr">{{i.CONTRIBUTION_VALUE}}</b></h2>
        </div>
    </div>
</template>

<script>
    import VerticalSlider from '~/component/verticalSlider'
    import sliderImg from '~/assets/img/platform/blockChainMsg/sliderImg.png'
    import { blockChainMsg_getShareData } from '~/api/apiFactory'
    import { blockChainMsg_getBlock } from '~/api/apiFactory'
    import { blockChainMsg_getBlockDataOne } from '~/api/apiFactory'
    import { blockChainMsg_getBlockDataTwo } from '~/api/apiFactory'

    export default {
        name: "block-chain-msg",
        components: {VerticalSlider},
        data() {
            return{
                sliderImg: {background: 'url("'+ sliderImg +'") no-repeat center'},
                shareData: null,
                block: null,
                blockData: {
                    data1: {},
                    data2: {}
                },
                id: 36
            }
        },
        computed: {
            ips() {return  this.blockData.data2.BUY_ACCOUNT_IP && (this.blockData.data2.BUY_ACCOUNT_IP.split(','));},
            EVMs() {return  this.blockData.data2.USE_ENVIRONMENT && (this.blockData.data2.USE_ENVIRONMENT.split(','));}
        },
        methods: {
            async getShareData() {
                let data = await blockChainMsg_getShareData();
                this.shareData = data.data.data;
            },
            async getBlock(autoAnimate) {
                let data = await blockChainMsg_getBlock();
                this.block = [];
                for(let i=0; i<data.data.data.length; i++){
                    let currentData = data.data.data[i];
                    this.block.push({id:currentData.ID,name: currentData.DATA_NAME});
                }
                // 触发轮播动画
                autoAnimate(data.data.total);
                this.id = this.block[0].id;
                this.getBlockData();
            },
            async getBlockData() {
                let data1 = await blockChainMsg_getBlockDataOne(this.id);
                let data2 = await blockChainMsg_getBlockDataTwo(this.id);
                this.blockData.data1 = data1.data.data;
                this.blockData.data2 = data2.data.data[0];
            },
            toggleData(id) {
                this.id = id;
                this.getBlockData();
            }
        },
        mounted() {
            this.getShareData();
        }
    }
</script>

<style lang="scss" scoped>
    .left{
        height: 920px;
        width: calc(100% - 460px);
        .hasVerticalSliderContent{
            h1 {
                height: 76px;
                line-height: 76px;
                font-size: 28px;
                text-align: center;
                font-weight: normal;
                color: #27328b;
                background: url('../../assets/img/platform/blockChainMsg/blockLine.png') no-repeat center;
            }
            .message{
                li {
                    width: 206px;
                    height: 130px;
                    padding-top: 110px;
                    color: #0377ff;
                    p {
                        text-align: center;
                        line-height: 30px;
                    }
                    h2 {
                        text-align: center;
                        font-size: 80px;
                        line-height: 80px;
                    }
                }
                li:not(:last-child){
                    margin-right: 32px;
                }
                li:nth-child(1) {
                    background: url('../../assets/img/platform/blockChainMsg/name.png') no-repeat center;
                }
                li:nth-child(2) {
                    background: url('../../assets/img/platform/blockChainMsg/source.png') no-repeat center;
                }
                li:nth-child(3) {
                    background: url('../../assets/img/platform/blockChainMsg/size.png') no-repeat center;
                }
                li:nth-child(4) {
                    background: url('../../assets/img/platform/blockChainMsg/times.png') no-repeat center;
                }
            }
            .messageDetail{
                height: 420px;
                border: 2px solid #5c71f7;
                margin-top: 20px;
                background-color: #fff;
                header {
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    background-color: #5c71f7;
                    font-size: 22px;
                    color: #fff;
                }
                ol{
                    padding: 20px 0;
                    > li{
                        width: 285px;
                        height: 330px;
                        padding: 0 10px;
                        line-height: 36px;
                        font-size: 14px;
                        img{
                            vertical-align: top;
                            margin: 13px 0;
                        }
                        ul{
                            color: #0377ff;
                        }
                    }
                    > li:nth-child(2){
                        width: 284px;
                        border-left: 1px solid #0377ff;
                        border-right: 1px solid #0377ff;
                    }
                }
            }
        }
    }
    .right{
        height: 920px;
        width: 330px;
        line-height: 39px;
        h1 {
            color: #0377ff;
            font-weight: bold;
            border-bottom: 1px solid #aaa;
            font-size: 14px;
        }
        h2{
            border-bottom: 1px dashed #aaa;
            font-size: 14px;
            b {
                color: #2186ed;
                font-weight: normal;
            }
        }
    }
</style>
