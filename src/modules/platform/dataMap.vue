<template>
    <div class="clear">
        <div class="left fl publicBox">
            <header class="header clear"><span class="fl"></span>区块数据</header>
            <section class="container">
                <div class="keywords clear">
                    <h1 class="fl">关键词</h1>
                    <ul class="fl">
                        <li class="fl"><span>123</span><b class="fr"></b></li>
                        <li class="fl"><span>123</span><b class="fr"></b></li>
                    </ul>
                </div>
                <div class="blockChain">
                    <header>所含信息区块链</header>
                    <DataMapSlider :sliderImg="sliderImg"/>
                </div>
                <div class="dataMsg">
                    <div class="dataContainer">
                        <div class="dataBox">
                            <header>数据拥有方-</header>
                            <section class="clear">
                                <ul class="fl">
                                    <li class="clear"><span class="fl">公钥指纹</span><b class="fl">2a:d8:00:8e:02:63:a4:32:7e:e8:5c:4a:36:4d:e0:ea</b></li>
                                    <li class="clear">
                                        <span class="fl">系统评分</span>
                                        <div class="fl"><h1></h1></div>
                                        <i>分</i>
                                    </li>
                                    <li class="clear"><span class="fl">数据共享次</span><b class="fl"><s></s>次</b></li>
                                    <li class="clear"><span class="fl">数据共享总量</span><b class="fl"><s></s>GB</b></li>
                                </ul>
                                <footer class="fl"></footer>
                            </section>
                        </div>
                    </div>
                    <div class="dataContainer clear">
                        <div class="dataBox fl">
                            <header>数据拥有方-</header>
                            <section class="clear">
                                <ul class="fl">
                                    <li class="clear"><span class="fl">公钥指纹</span><b class="fl">2a:d8:00:8e:02:63:a4:32:7e:e8:5c:4a:36:4d:e0:ea</b></li>
                                    <li class="clear">
                                        <span class="fl">系统评分</span>
                                        <div class="fl"><h1></h1></div>
                                        <i>分</i>
                                    </li>
                                    <li class="clear"><span class="fl">数据共享次</span><b class="fl"><s></s>次</b></li>
                                    <li class="clear"><span class="fl">数据共享总量</span><b class="fl"><s></s>GB</b></li>
                                </ul>
                                <footer class="fl"></footer>
                            </section>
                        </div>
                        <div class="dataBox fl">
                            <header>数据拥有方-</header>
                            <section class="clear">
                                <ul class="fl">
                                    <li class="clear"><span class="fl">公钥指纹</span><b class="fl">2a:d8:00:8e:02:63:a4:32:7e:e8:5c:4a:36:4d:e0:ea</b></li>
                                    <li class="clear">
                                        <span class="fl">系统评分</span>
                                        <div class="fl"><h1></h1></div>
                                        <i>分</i>
                                    </li>
                                    <li class="clear"><span class="fl">数据共享次</span><b class="fl"><s></s>次</b></li>
                                    <li class="clear"><span class="fl">数据共享总量</span><b class="fl"><s></s>GB</b></li>
                                </ul>
                                <footer class="fl"></footer>
                            </section>
                        </div>
                        <div class="left_icon"></div>
                        <div class="right_icon"></div>
                    </div>
                </div>
            </section>
        </div>
        <div class="right fr publicBox">
            <header class="header clear"><span class="fl">热</span>近期热搜数据</header>
        </div>
    </div>
</template>

<script>
    import DataMapSlider from '~/component/dataMapSlider'
    import sliderImg from '~/assets/img/platform/dataMap/sliderImg.png'

    export default {
        name: "data-map",
        components: {DataMapSlider},
        data() {
            return{
                sliderImg: sliderImg
            }
        }
    }
</script>

<style lang="scss" scoped>
    .left{
        width: calc(100% - 480px);
        height: 920px;
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
            }
            .dataMsg{
                border: 2px solid #2186ed;
                padding: 10px 0;
                .dataContainer{
                    width: 1000px;
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
                        background: url('../../assets/img/platform/component/left_bg.png') no-repeat center;
                        left: -30px;
                    }
                    .right_icon{
                        background: url('../../assets/img/platform/component/right_bg.png') no-repeat center;
                        right: -30px;
                    }
                }
            }
        }
    }
    .right{
        width: 350px;
        height: 920px;
    }
</style>
