<template>
    <div class="clear">
        <div class="left fl publicBox">
            <header class="header clear"><span class="fl"></span>区块链详情</header>
            <section class="container clear">
                <VerticalSlider class="fl" :sliderImg="sliderImg"/>
                <div class="hasVerticalSliderContent fl">
                    <h1>100#</h1>
                    <ul class="message clear">
                        <li class="fl"><p></p></li>
                        <li class="fl"><p>区块链账户:</p><p>网络地址:</p></li>
                        <li class="fl"><h2></h2><p>MB</p></li>
                        <li class="fl"><h2></h2><p>次</p></li>
                    </ul>
                    <div class="messageDetail">
                        <header>Block - #政务共享数据区块链详细信息</header>
                        <ol class="clear">
                            <li class="fl">
                                <img src="../../assets/img/platform/blockChainMsg/scene.png" alt="">
                                <div class="clear">
                                    <span class="fl">数据应用的服务平台</span>
                                    <ul class="fr"><li></li></ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">用户网络地址</span>
                                    <ul class="fr">
                                        <li></li>
                                    </ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">开始时间</span>
                                    <ul class="fr"><li></li></ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">结束时间</span>
                                    <ul class="fr"><li></li></ul>
                                </div>
                            </li>
                            <li class="fl">
                                <img src="../../assets/img/platform/blockChainMsg/contract.png" alt="">
                                <div class="clear">
                                    <span class="fl">用户</span>
                                    <ul class="fr"><li></li></ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">共享周期</span>
                                    <ul class="fr"><li></li></ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">共享场景</span>
                                    <ul class="fr"><li></li></ul>
                                </div>
                            </li>
                            <li class="fl">
                                <img src="../../assets/img/platform/blockChainMsg/key.png" alt="">
                                <div class="clear">
                                    <span class="fl">加密算法(国密)</span>
                                    <ul class="fr"><li></li></ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">公钥密码体系(认证签名)</span>
                                    <ul class="fr"><li></li></ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">密钥有效周期</span>
                                    <ul class="fr"><li></li></ul>
                                </div>
                                <div class="clear">
                                    <span class="fl">密钥空间</span>
                                    <ul class="fr"><li></li></ul>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
        <div class="right fr publicBox">
            <header class="clear"><span class="fl"></span>近期共享数据的贡献值</header>
            <h1 class="clear"><span class="fl">数据集</span><b class="fr">贡献值</b></h1>
            <h2 class="clear" v-for="i in shareData"><span class="fl">{{i.DATA_NAME}}</span><b class="fr">{{i.CONTRIBUTION_VALUE}}</b></h2>
        </div>
    </div>
</template>

<script>
    import VerticalSlider from '~/component/verticalSlider'
    import Image from '~/assets/img/platform/blockChainMsg/sliderImg.png'
    import { blockChainMsg_getShareData } from '~/api/apiFactory'

    export default {
        name: "block-chain-msg",
        components: {VerticalSlider},
        data() {
            return{
                sliderImg: {background : 'url('+ Image +') no-repeat center'},
                shareData: null
            }
        },
        methods: {
            async getShareData() {
                let data = await blockChainMsg_getShareData();
                this.shareData = data.data.data;
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
