<template>
    <div class="contract publicBox">
        <header class="header clear"><span class="fl"></span>区块链合约详情</header>
        <section class="container clear">
            <VerticalSlider class="fl" :sliderImg="sliderImg"/>
            <div class="hasVerticalSliderContent fl">
                <div class="left fl">
                    <div class="left_top">
                        <div class="clear">
                            <ul class="fl">
                                <li><span>数据名称</span><b></b></li>
                                <li><span>区块链账户</span><b></b></li>
                                <li><span>大小</span><b></b></li>
                                <li><span>流通次数</span><b></b></li>
                                <li><span>数据领域</span><b></b></li>
                            </ul>
                            <ul class="fl">
                                <li><span>摘要</span><b></b></li>
                                <li><span>关键字</span><b></b></li>
                                <li><span>开放属性</span><b></b></li>
                            </ul>
                        </div>
                        <div class="clear">
                            <ul class="fl">
                                <li><p>数据使用方</p></li>
                                <li><span>区块链账户</span><b></b></li>
                                <li><span>企业名</span><b></b></li>
                            </ul>
                            <ul class="fl">
                                <li><p>密钥</p></li>
                                <li><span>加密算法</span><b></b></li>
                                <li><span>公钥密码体系</span><b></b></li>
                                <li><span>密钥有效周期</span><b></b></li>
                                <li><span>密钥空间</span><b></b></li>
                            </ul>
                        </div>
                    </div>
                    <div class="left_bottom">
                        <header>限制条件与智能合约</header>
                        <ul>
                            <li class="clear"><span>用户网络IP</span><b></b><button class="fr" type="button">网络环境监测</button></li>
                            <li><span>使用开始时间</span><b></b></li>
                            <li class="clear"><span>使用截至时间</span><b></b><button class="fr" type="button">时间监测</button></li>
                            <li><span>使用时长</span><b></b></li>
                            <li class="clear"><span>使用环境</span><b></b><button class="fr" type="button">数据环境监测</button></li>
                            <li class="clear"><span>禁止行为</span><b></b><button class="fr" type="button">防爬取</button></li>
                        </ul>
                    </div>
                </div>
                <div class="right fr">
                    <VuePerfectScrollbar class="right_top">
                        <h1>合同条款</h1>
                        <p>本网站依据本服务协议提供服务，您需要阅读、了解并自愿遵守本服务协议的所有内容，是您使用本网站的前提。本服务协议具有合同效力。本服务协议可由本网站随时修订，并将修订后的服务协议公告于本网站之上，修订后的条款内容自公告时起生效。您若在本服务协议修改之后，仍继续使用本网站，则视为您接受和自愿遵守修订后的服务协议。</p>
                        <p>1． 定义和释义</p>
                        <p>在本服务协议（包括、《用户注册程序与规则》、《用户评价制度规则》、《商品刊登和发布规则》、《限制与禁止出售规则》、《隐私权保护规则》、《虚假出价规则》及本网站其它相关规定中所使用的下列词语，除非另有定义，应具有以下含义：</p>
                        <p>1．1  “用户”指符合本服务协议所规定的条件，已根据本服务协议在本网站注册，同意遵守本网站各种规则、条款（包括但不限于本服务协议），并使用本网站的个人或机构。</p>
                        <p>1．2  “本服务协议”指本网站根据本服务协议而提供的网上交易服务协议以及《用户注册程序与规则》、《用户评价制度规则》、《商品刊登和发布规则》、《限制与禁止出售规则》、《隐私权保护规则》、《虚假出价规则》及本网站其他相关规定。同时，本网站有权随时变更和修改以上规定。</p>
                        <p>1．3  “BtoC”指经营者（指利用本网站从事网上交易活动的企业或其它经济组织）利用互联网与消费者进行的商品交易和交易信息发布活动的交易方式。</p>
                        <p>1．4  “成交”指买方根据卖方所刊登的交易要求，在特定时间内提出最优的交易条件，因而取得依其提出的条件购买该交易商品的权利。</p>
                    </VuePerfectScrollbar>
                    <div class="right_bottom clear">
                        <div class="fl">
                            <h1>数字签名</h1>
                            <p></p>
                            <h1>时间戳</h1>
                            <p></p>
                            <p>GMT+08:00</p>
                        </div>
                        <div class="fr">
                            <h1>数字签名</h1>
                            <p></p>
                            <h1>时间戳</h1>
                            <p></p>
                            <p>GMT+08:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import VerticalSlider from '~/component/verticalSlider'
    import Image from '~/assets/img/platform/blockChainMsg/sliderImg.png'

    export default {
        name: "contract",
        components: {VuePerfectScrollbar,VerticalSlider},
        data() {
            return{
                sliderImg: {background : 'url('+ Image +') no-repeat center'}
            }
        }
    }
</script>

<style lang="scss" scoped>
    .contract{
        height: 920px;
        .hasVerticalSliderContent{
            padding: 30px;
            height: calc(100% - 60px);
            .left{
                .left_top{
                    margin-bottom: 26px;
                    div:nth-child(1) {
                        padding-left: 50px;
                        background: url('../../assets/img/platform/contract/data_source.png') no-repeat 0 center;
                        margin-bottom: 40px;
                    }
                    li{
                        width: 300px;
                        line-height: 36px;
                        p{
                            height: 30px;
                            line-height: 30px;
                            background-color: #0377ff;
                            width: 182px;
                            text-align: center;
                            color: #fff;
                            margin-bottom: 20px;
                            font-size: 16px;
                        }
                    }
                }
                .left_bottom{
                    header {
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        background-color: #0377ff;
                        color: #fff;
                        font-size: 18px;
                    }
                    li {
                        line-height: 40px;
                        height: 40px;
                        padding: 0 20px;
                        button {
                            height: 24px;
                            width: 150px;
                            color: #fff;
                            background-color: #1ac372;
                            border: none;
                            border-radius: 4px;
                            margin-top: 8px;
                            cursor: pointer;
                        }
                    }
                }
            }
            .right{
                .right_top {
                    width: 604px;
                    height: 398px;
                    border: 2px solid #5d20cf;
                    margin-bottom: 26px;
                    padding: 6px;
                    overflow: auto;
                    font-size: 12px;
                    h1 {
                        font-size: 24px;
                        margin-bottom: 10px;
                        text-align: center;
                    }
                    p {
                        text-indent: 2em;
                        line-height: 24px;
                    }
                }
                .right_bottom{
                    div {
                        width: 264px;
                        height: 230px;
                        line-height: 30px;
                        padding: 60px 18px 0 18px;
                        background: url('../../assets/img/platform/contract/contract_person.png') no-repeat center;
                        h1 {
                            font-size: 16px;
                            color: #5d20cf;
                        }
                        p {
                            word-break: break-all;
                        }
                    }
                }
            }
        }
    }
</style>
