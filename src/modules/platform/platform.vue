<template>
    <div id="platform" class="clear">
        <header class="header">
            <ul class="clear">
                <li class="fl">
                    <img class="fl" src="../../assets/img/platform/logo.png" alt="">
                    <img class="fr" src="../../assets/img/platform/breadcrumb.png" alt="">
                </li>
                <li class="fl">数据共享区块链平台</li>
                <li class="fr"><a href="#">退出系统</a></li>
            </ul>
        </header>
        <section class="section clear">
            <VuePerfectScrollbar class="nav fl">
                <div class="clear" @click="href('node')" :class="{current : asideNodeNav}"><i class="fl"></i><span>共享平台节点服务器</span></div>
                <div class="clear" @click="href('blockChainMsg')" :class="{current : asideBlockChainMsgNav}"><i class="fl"></i><span>数据区块链信息</span></div>
                <div class="clear" @click="href('contract')" :class="{current : asideContractNav}"><i class="fl"></i><span>区块链合约信息</span></div>
                <div class="clear" @click="href('userManage')" :class="{current : asideUserManageNav}"><i class="fl"></i><span>区块链帐户管理</span></div>
                <div class="clear" @click="href('share')" :class="{current : asideShareNav}"><i class="fl"></i><span>数据共享平台数据集市</span></div>
                <div class="clear" @click="href('abnormal')" :class="{current : asideAbnormalNav}"><i class="fl"></i><span>违约与异常态势</span></div>
                <div class="clear" @click="href('dataMap')" :class="{current : asideDataMapNav}"><i class="fl"></i><span>数据地图</span></div>
                <div class="clear" @click="href('caManage')" :class="{current : asideCaManageNav}"><i class="fl"></i><span>数据密钥/CA管理</span></div>
            </VuePerfectScrollbar>
            <VuePerfectScrollbar class="main fl" v-scroll><router-view/></VuePerfectScrollbar>
        </section>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "platform",
        components: {VuePerfectScrollbar},
        data() {
            return{
                asideNodeNav: false,
                asideBlockChainMsgNav: false,
                asideContractNav: false,
                asideUserManageNav: false,
                asideShareNav: false,
                asideAbnormalNav: false,
                asideDataMapNav: false,
                asideCaManageNav: false
            }
        },
        methods: {
            initAsideNav() {
                this.asideNodeNav = false;
                this.asideBlockChainMsgNav = false;
                this.asideContractNav = false;
                this.asideUserManageNav = false;
                this.asideShareNav = false;
                this.asideAbnormalNav = false;
                this.asideDataMapNav = false;
                this.asideCaManageNav = false;
                switch (this.$route.name){
                    case 'node' : this.asideNodeNav = true;break;
                    case 'blockChainMsg' : this.asideBlockChainMsgNav = true;break;
                    case 'contract' : this.asideContractNav = true;break;
                    case 'userManage' : this.asideUserManageNav = true;break;
                    case 'share' : this.asideShareNav = true;break;
                    case 'abnormal' : this.asideAbnormalNav = true;break;
                    case 'dataMap' : this.asideDataMapNav = true;break;
                    case 'caManage' : this.asideCaManageNav = true;break;
                }
            },
            href(arg) {
                this.$router.push({path : '/platform/'+arg});
                this.initAsideNav();
            }
        },
        mounted() {
            this.initAsideNav();
        }
    }
</script>

<style lang="scss">@import "../../assets/css/platform";</style>

<style lang="scss" scoped>
    #platform{
        height: calc(100%);
        /* .header */
        .header{
            height:90px;
            line-height: 90px;
            color: #fff;
            padding-right: 30px;
            background-color: #5a8bff;
            li:first-child{
                width:224px;
                background-color: #4877e6;
                height: 90px;
                padding: 0 28px;
                img:first-child{
                    margin-top: 27px;
                }
                img:last-child{
                    margin-top: 34px;
                }
            }
            li:nth-child(2){
                padding-left: 30px;
                font-size: 24px;
            }
            li:last-child{
                a{
                    background: url('../../assets/img/platform/logout.png') no-repeat 0 center;
                    color: #fff;
                    padding-left: 20px;
                    text-decoration: none;
                }
            }
        }
        /* .section */
        .section{
            height: calc(100% - 90px);
            /*nav*/
            .nav{
                width:280px;
                height: calc(100%);
                background-color: #fff;
                div{
                    height:42px;
                    line-height: 42px;
                    width: 224px;
                    margin:20px auto;
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: normal;
                    transition: all .2s;
                    border-radius: 21px;
                    i{
                        width: 20px;
                        height: 20px;
                        margin: 11px 20px;
                    }
                }
                div:nth-child(1) i{
                    background: url('../../assets/img/platform/nav_node.png') no-repeat center;
                }
                div:nth-child(2) i{
                    background: url('../../assets/img/platform/nav_blockChainMsg.png') no-repeat center;
                }
                div:nth-child(3) i{
                    background: url('../../assets/img/platform/nav_contract.png') no-repeat center;
                }
                div:nth-child(4) i{
                    background: url('../../assets/img/platform/nav_userManage.png') no-repeat center;
                }
                div:nth-child(5) i{
                    background: url('../../assets/img/platform/nav_share.png') no-repeat center;
                }
                div:nth-child(6) i{
                    background: url('../../assets/img/platform/nav_abnormal.png') no-repeat center;
                }
                div:nth-child(7) i{
                    background: url('../../assets/img/platform/nav_dataMap.png') no-repeat center;
                }
                div:nth-child(8) i{
                    background: url('../../assets/img/platform/nav_caManage.png') no-repeat center;
                }
                div:hover, div.current{
                    background-color: #4877e6;
                    color: #fff;
                }
                div:nth-child(1):hover i, div:nth-child(1).current i{
                    background: url('../../assets/img/platform/nav_node_current.png') no-repeat center;
                }
                div:nth-child(2):hover i, div:nth-child(2).current i{
                    background: url('../../assets/img/platform/nav_blockChainMsg_current.png') no-repeat center;
                }
                div:nth-child(3):hover i, div:nth-child(3).current i{
                    background: url('../../assets/img/platform/nav_contract_current.png') no-repeat center;
                }
                div:nth-child(4):hover i, div:nth-child(4).current i{
                    background: url('../../assets/img/platform/nav_userManage_current.png') no-repeat center;
                }
                div:nth-child(5):hover i, div:nth-child(5).current i{
                    background: url('../../assets/img/platform/nav_share_current.png') no-repeat center;
                }
                div:nth-child(6):hover i, div:nth-child(6).current i{
                    background: url('../../assets/img/platform/nav_abnormal_current.png') no-repeat center;
                }
                div:nth-child(7):hover i, div:nth-child(7).current i{
                    background: url('../../assets/img/platform/nav_dataMap_current.png') no-repeat center;
                }
                div:nth-child(8):hover i, div:nth-child(8).current i{
                    background: url('../../assets/img/platform/nav_caManage_current.png') no-repeat center;
                }
            }
            .main{
                width: calc(100% - 340px);
                height: calc(100% - 60px);
                padding: 30px;
            }
        }
    }
</style>
