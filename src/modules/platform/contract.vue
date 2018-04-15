<template>
    <div class="contract publicBox">
        <header class="header clear"><span class="fl">约</span>区块链合约详情</header>
        <section class="container clear">
            <VerticalSlider class="fl" :sliderImg="sliderImg" :sliderData="contractList" :callback="toggleData" @listenChildEvent="getContractList"/>
            <div class="hasVerticalSliderContent fl">
                <div class="top clear">
                    <div class="top_left fl">
                        <ul class="fl">
                            <li><h1>数据来源</h1></li>
                            <li class="clear"><span class="fl">数据名称</span><b class="fl">{{contractData.DATA_NAME}}</b></li>
                            <li class="clear"><span class="fl">区块链账户</span><b class="fl">{{contractData.ACCOUNT_ID}}</b></li>
                            <li class="clear"><span class="fl">大小</span><b class="fl">{{contractData.DATA_SIZE}}</b></li>
                            <li class="clear"><span class="fl">流通次数</span><b class="fl">{{contractData.DOWN_TIMES}}</b></li>
                            <li class="clear"><span class="fl">数据领域</span><b class="fl">{{contractData.DATA_AREA}}</b></li>
                            <li class="clear"><span class="fl">摘要</span><b class="fl">{{contractData.DATA_DESC}}</b></li>
                            <li class="clear"><span class="fl">关键字</span><b class="fl">{{contractData.KEYWORDS}}</b></li>
                            <li class="clear"><span class="fl">开放属性</span><b class="fl">{{contractData.OPEN_ATTRIBUTE}}</b></li>
                        </ul>
                        <ul class="fl">
                            <li><h1>数据使用方</h1></li>
                            <li class="clear"><span class="fl">区块链账户</span><b class="fl">{{contractData.ACCOUNT_ID}}</b></li>
                            <li class="clear"><span class="fl">企业名</span><b class="fl">{{contractData.COMPANY_NAME}}</b></li>
                            <li class="clear"><span class="fl">购买价格</span><b class="fl">{{300+'UEC'}}</b></li>
                            <li><h1>数据密钥</h1></li>
                            <li class="clear"><span class="fl">加密算法</span><b class="fl">{{contractData.ENCRYPTION_ALGORITHM}}</b></li>
                            <li class="clear"><span class="fl">公钥密码体系</span><b class="fl">{{contractData.PUBLIC_KEY_SYSTEM}}</b></li>
                            <li class="clear"><span class="fl">密钥有效周期</span><b class="fl">{{contractData.PRIVATE_KEY_VALID_PERIOD}}</b></li>
                            <li class="clear"><span class="fl">密钥空间</span><b class="fl">{{contractData.KEY_SPACE}}</b></li>
                        </ul>
                    </div>
                    <div class="top_right fr">
                        <header>限制条件与智能合约</header>
                        <ul>
                            <li class="clear"><span class="fl">用户网络IP</span><b>{{contractData.ACCOUNT_IP}}</b><button class="fr" type="button">网络环境监测</button></li>
                            <li class="clear"><span class="fl">使用开始时间</span><b>{{contractData.START_TIME | moment }}</b></li>
                            <li class="clear"><span class="fl">使用截至时间</span><b>{{contractData.END_TIME | moment }}</b><button class="fr" type="button">时间监测</button></li>
                            <li class="clear"><span class="fl">使用时长</span><b>{{contractData.DAY_TIME+'天'}}</b></li>
                            <li class="clear"><span class="fl">使用环境</span><b>{{contractData.USE_ENVIRONMENT}}</b><button class="fr" type="button">数据环境监测</button></li>
                            <li class="clear"><span class="fl">禁止行为</span><b>{{contractData.PROHIBITED_BEHAVIOR}}</b><button class="fr" type="button">防爬取</button></li>
                        </ul>
                    </div>
                </div>
                <div class="bottom clear">
                    <div class="bottom_left fl">
                        <h1>合同条款</h1>
                        <VuePerfectScrollbar class="bottom_left_content">
                            <p>本网站依据本服务协议提供服务，您需要阅读、了解并自愿遵守本服务协议的所有内容，是您使用本网站的前提。本服务协议具有合同效力。本服务协议可由本网站随时修订，并将修订后的服务协议公告于本网站之上，修订后的条款内容自公告时起生效。您若在本服务协议修改之后，仍继续使用本网站，则视为您接受和自愿遵守修订后的服务协议。</p>
                            <p>1． 定义和释义</p>
                            <p>在本服务协议（包括、《用户注册程序与规则》、《用户评价制度规则》、《商品刊登和发布规则》、《限制与禁止出售规则》、《隐私权保护规则》、《虚假出价规则》及本网站其它相关规定中所使用的下列词语，除非另有定义，应具有以下含义：</p>
                            <p>1．1  “用户”指符合本服务协议所规定的条件，已根据本服务协议在本网站注册，同意遵守本网站各种规则、条款（包括但不限于本服务协议），并使用本网站的个人或机构。</p>
                            <p>1．2  “本服务协议”指本网站根据本服务协议而提供的网上交易服务协议以及《用户注册程序与规则》、《用户评价制度规则》、《商品刊登和发布规则》、《限制与禁止出售规则》、《隐私权保护规则》、《虚假出价规则》及本网站其他相关规定。同时，本网站有权随时变更和修改以上规定。</p>
                            <p>1．3  “BtoC”指经营者（指利用本网站从事网上交易活动的企业或其它经济组织）利用互联网与消费者进行的商品交易和交易信息发布活动的交易方式。</p>
                            <p>1．4  “成交”指买方根据卖方所刊登的交易要求，在特定时间内提出最优的交易条件，因而取得依其提出的条件购买该交易商品的权利。</p>
                        </VuePerfectScrollbar>
                    </div>
                    <div class="bottom_right fr">
                        <div class="fl">
                            <header>甲方</header>
                            <h1>数字签名</h1>
                            <p>{{contractData.SELL_DIGITAL_SIGNATURE}}</p>
                            <h1>时间戳</h1>
                            <p>{{contractData.INSERT_TIME | moment}}</p>
                            <p>GMT+08:00</p>
                        </div>
                        <div class="fr">
                            <header>已方</header>
                            <h1>数字签名</h1>
                            <p>{{contractData.BUY_DIGITAL_SIGNATURE}}</p>
                            <h1>时间戳</h1>
                            <p>{{contractData.SIGNING_TIME | moment}}</p>
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
    import sliderImg from '~/assets/img/platform/blockChainMsg/sliderImg.png'
    import { contract_getContractList } from '~/api/apiFactory'
    import { contract_getContractData } from '~/api/apiFactory'

    export default {
        name: "contract",
        components: {VuePerfectScrollbar,VerticalSlider},
        data() {
            return{
                sliderImg: {background: 'url("'+ sliderImg +'") no-repeat center'},
                contractList: null,
                contractData: {},
                id: null
            }
        },
        methods: {
            async getContractList(autoAnimate) {
                let data = await contract_getContractList();
                this.contractList = [];
                for(let i=0; i<data.data.data.length; i++){
                    let currentData = data.data.data[i];
                    this.contractList.push({id:currentData.CONTRACT_BUY_ID,name: currentData.CONTRACT_BUY_ID});
                }
                // 触发轮播动画
                autoAnimate(data.data.total);
                this.id = this.contractList[0].id;
                this.getContractData();
            },
            async getContractData() {
                let data = await contract_getContractData(this.id);
                this.contractData = data.data.data[0];
            },
            toggleData(id) {
                this.id = id;
                this.getContractData();
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
            .top{
                .top_left{
                    background-color: #fff;
                    border-left: 8px solid #3ad296;
                    padding: 10px;
                    ul{
                        line-height: 30px;
                        li{
                            width: 365px;
                            padding: 0 10px;
                            h1{
                                color: #5a8bff;
                            }
                            span{
                                width: 90px;
                            }
                            b {
                                font-weight: normal;
                                color: #0077e6;
                            }
                        }
                    }
                }
                .top_right{
                    border-left: 8px solid #ffdd67;
                    background-color: #fff;
                    width: 494px;
                    header {
                        height: 50px;
                        line-height: 50px;
                        color: #5a8bff;
                        font-size: 18px;
                        padding-left: 20px;
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
                        span{
                            width: 120px;
                        }
                        b {
                            font-weight: normal;
                            color: #0077e6;
                        }
                    }
                }
            }
            .bottom{
                margin-top: 20px;
                .bottom_left{
                    width: 798px;
                    background-color: #fff;
                    h1 {
                        font-size: 24px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        background-color: #5a8bff;
                        color: #fff;
                    }
                    .bottom_left_content{
                        padding: 10px;
                        overflow: auto;
                        font-size: 12px;
                        height: 350px;
                        p {
                            text-indent: 2em;
                            line-height: 24px;
                        }
                    }
                }
                .bottom_right{
                    width: calc(100% - 828px);
                    background-color: #fff;
                    height: 420px;
                    div{
                        width: calc(50% - 40px);
                        height: calc(100% - 100px);
                        padding: 50px 20px;
                        line-height: 30px;
                        background: url('../../assets/img/platform/contract/entry.png') no-repeat center;
                        header{
                            height: 50px;
                            line-height: 50px;
                            font-size: 20px;
                            color: #5a8bff;
                            text-align: center;
                            background: url('../../assets/img/platform/contract/lock.png') no-repeat 60px center;
                        }
                        h1{
                            color: #5a8bff;
                            font-size: 16px;
                            line-height: 40px;
                        }
                        p{
                            word-break: break-all;
                        }
                    }
                    div:first-child{
                        border-right: 1px solid #f5f7fc;
                        width: calc(50% - 41px);
                    }
                }
            }
        }
    }
</style>
