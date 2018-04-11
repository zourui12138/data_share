<template>
    <div class="clear">
        <div class="left fl public-box">
            <header class="clear"><span class="fl"></span>区块链详情</header>
            <section class="clear">
                <div class="nav fl">
                    <div>
                        <ul>
                            <li><h1></h1><s></s></li>
                            <li><h1></h1><s></s></li>
                            <li><h1></h1><s></s></li>
                            <li><h1></h1><s></s></li>
                            <li><h1></h1><s></s></li>
                        </ul>
                        <h2></h2>
                    </div>
                    <b class="top_icon"></b>
                    <b class="bottom_icon"></b>
                </div>
            </section>
        </div>
        <div class="right fr public-box">
            <header class="clear"><span class="fl"></span>近期共享数据的贡献值</header>
            <h1 class="clear"><span class="fl">数据集</span><b class="fr">贡献值</b></h1>
            <h2 class="clear"><span class="fl"></span><b class="fr"></b></h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "block-chain-msg"
    }
</script>

<style lang="scss" scoped>
    .left{
        height: 920px;
        width: calc(100% - 460px);
        .nav {
            width: 150px;
            height: 780px;
            position: relative;
            background-color: #aaa;
            b {
                position: absolute;
                left: 51px;
                width: 48px;
                height: 24px;
            }
            .top_icon {
                background: url('../../assets/img/platform/blockChainMsg/top.png') no-repeat center;
                top: 20px;
            }
            .bottom_icon {
                background: url('../../assets/img/platform/blockChainMsg/bottom.png') no-repeat center;
                bottom: 20px;
            }
            div{
                height: 650px;
                margin: 65px 0;
                position: relative;
                ul{
                    position: absolute;
                    width: 150px;
                    z-index: 11;
                    top: 0;
                    li {
                        margin: auto;
                        width: 130px;
                        height: 130px;
                        position: relative;
                        cursor: pointer;
                        background: url('../../assets/img/platform/blockChainMsg/big.png') no-repeat center;
                    }
                }
                h2 {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    width: 16px;
                    height: 650px;
                    background: url('../../assets/img/platform/blockChainMsg/chain.png') no-repeat center;
                    z-index: 10;
                }
            }
        }
    }
    .right{
        height: 920px;
        width: 330px;
    }
</style>
