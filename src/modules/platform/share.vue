<template>
    <div class="clear">
        <div class="left fl publicBox">
            <header class="header clear"><span class="fl"></span>原始数据备份</header>
            <section class="container">
                <HorizontalSlider :sliderImg="sliderImg"/>
                <div class="shareDetail clear">
                    <ul class="file fl">
                        <li><h1>文件</h1><i></i><s></s><h2></h2></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                    </ul>
                    <ul class="API fl">
                        <li><h1>API</h1><i></i><s></s><h2></h2></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                        <li><b class="fl"></b><span>危险货物运输企业基本情况表</span><button class="fr" type="button">王**</button></li>
                    </ul>
                </div>
            </section>
        </div>
        <div class="right fr">
            <div class="top publicBox">
                <header class="header clear"><span class="fl"></span>数据备份Top10</header>
            </div>
            <div class="bottom publicBox">
                <header class="header clear"><span class="fl"></span>数据上传/下载走势</header>
            </div>
        </div>
    </div>
</template>

<script>
    import HorizontalSlider from '~/component/horizontalSlider'
    import sliderImg from '~/assets/img/platform/share/sliderImg.png'

    export default {
        name: "share",
        components: {HorizontalSlider},
        data() {
            return{
                sliderImg: sliderImg
            }
        }
    }
</script>

<style lang="scss" scoped>
    .left{
        height: 920px;
        width: calc(100% - 580px);
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
        }
        .bottom {
            height: 445px;
        }
    }
</style>
