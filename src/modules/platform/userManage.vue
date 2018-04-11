<template>
    <div class="userManage publicBox">
        <header class="header clear"><span class="fl"></span>区块链帐户详情</header>
        <section class="container clear">
            <VerticalSlider class="fl" :sliderImg="sliderImg"/>
            <div class="hasVerticalSliderContent fl">
                <ul class="left fl">
                    <li><h3>公开信息</h3></li>
                    <li class="clear"><span class="fl">公钥指纹</span><i class="fl"></i></li>
                    <li class="clear"><span class="fl">系统评分</span><div class="fl"><h1></h1></div><strong class="fl"></strong></li>
                    <li class="clear"><span class="fl">数据共享次</span><i class="fl">次</i></li>
                    <li class="clear"><span class="fl">数据共享总量</span><i class="fl">GB</i></li>
                    <li class="clear"><span class="fl">履约次数</span><i class="fl">次</i></li>
                    <li class="clear"><span class="fl">违约次数</span><i class="fl">次</i></li>
                    <li style="margin-top: 20px"><h3>可公开信息</h3></li>
                    <li class="clear"><span class="fl">姓名</span><i class="fl"></i></li>
                    <li class="clear"><span class="fl">照片</span><img class="fl" src="../../assets/img/platform/userManage/default.jpg" alt=""></li>
                    <li class="clear"><span class="fl">企业名称</span><i class="fl"></i></li>
                    <li class="clear"><span class="fl">企业性质</span><i class="fl"></i></li>
                    <li class="clear"><span class="fl">组织机构代码</span><i class="fl"></i></li>
                    <li class="clear"><span class="fl">统一信用代码</span><i class="fl"></i></li>
                </ul>
                <div class="right fr">
                    <div class="right_top">
                        <header><span>私密信息</span></header>
                        <div class="message">
                            <p class="clear"><span class="fl">区块链账户ID</span><b class="fr"></b></p>
                            <ul class="clear">
                                <li class="fl"><h1>指纹信息</h1><div><img src="../../assets/img/platform/userManage/fingerprint.png" alt=""></div></li>
                                <li class="fl"><h1>人脸信息</h1><div><img src="../../assets/img/platform/userManage/default.jpg" alt=""></div></li>
                                <li class="fl"><h1>虹膜信息</h1><div><img src="../../assets/img/platform/userManage/iris.png" alt=""></div></li>
                            </ul>
                        </div>
                    </div>
                    <div class="right_bottom">
                        <h1>异常数据</h1>
                        <ul>
                            <li class="clear"><span class="fl">1 2017/03/25违反《信息交易规定》相关条约</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import VerticalSlider from '~/component/verticalSlider'
    import Image from '~/assets/img/platform/blockChainMsg/sliderImg.png'

    export default {
        name: "user-manage",
        components: {VerticalSlider},
        data() {
            return{
                sliderImg: {background : 'url('+ Image +') no-repeat center'}
            }
        }
    }
</script>

<style lang="scss" scoped>
    .userManage{
        height: 920px;
        .hasVerticalSliderContent{
            padding: 30px;
            height: calc(100% - 60px);
            .left{
                width: 540px;
                li{
                    line-height: 40px;
                    h3 {
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        width: 150px;
                        background-color: #0051bd;
                        color: #fff;
                        font-size: 16px;
                        font-weight: normal;
                        margin-bottom: 20px;
                    }
                    span {
                        width: 120px;
                        padding-left: 30px;
                    }
                    i {
                        color: #2186ed;
                        font-style: normal;
                    }
                    img{
                        border: 1px solid #0377ff;
                    }
                }
            }
            .right{
                .right_top {
                    width: 632px;
                    border: 2px solid #0377ff;
                    header {
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        background-color: #5c71f7;
                        font-size: 22px;
                        color: #fff;
                    }
                    .message {
                        padding: 20px 28px 35px;
                        p {
                            height: 40px;
                            line-height: 40px;
                            font-size: 18px;
                            margin-bottom: 30px;
                        }
                        li {
                            width: 172px;
                            height: 213px;
                            h1{
                                height: 20px;
                                text-align: center;
                            }
                            div {
                                height: 170px;
                                text-align: center;
                                padding-top: 23px;
                                background: url('../../assets/img/platform/userManage/border.png') no-repeat center;
                                overflow: hidden;
                            }
                        }
                        li:nth-child(2) {
                            margin: 0 30px;
                        }
                    }
                }
                .right_bottom{
                    height: 320px;
                    width: 576px;
                    border-left: 30px solid #0377ff;
                    margin-top: 18px;
                    padding-left: 30px;
                    overflow: auto;
                    line-height: 40px;
                    h1 {
                        font-size: 18px;
                        color: #0377ff;
                        font-weight: normal;
                    }
                }
            }
        }
    }
</style>
