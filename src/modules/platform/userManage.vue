<template>
    <div class="userManage publicBox">
        <header class="header clear"><span class="fl"></span>区块链帐户详情</header>
        <section class="container clear">
            <div class="verticalSlider fl">
                <div>
                    <ul>
                        <li
                            v-vertical-animate="{
                                    index: index,
                                    len: userList.length,
                                    distance: 140,
                                    callback : toggleData,
                                    id : i.ID
                                }"
                            :class="{current : index === 0}"
                            v-for="(i,index) in userList">
                            <h1><span>{{i.USERNAME}}</span></h1>
                        </li>
                    </ul>
                    <h2></h2>
                </div>
                <b class="top_icon"></b>
                <b class="bottom_icon"></b>
            </div>
            <div class="hasVerticalSliderContent fl">
                <div class="top clear">
                    <ul class="top_left fl">
                        <li class="fl"><h1>公开信息</h1></li>
                        <li class="fl"><h1>可公开信息</h1></li>
                        <li class="fl entry"><span class="fl">公钥指纹</span><b>{{userData.PUBLIC_KEY_FINGERPRINT}}</b></li>
                        <li class="fl"><span class="fl">姓名</span><b>{{userData.REAL_NAME}}</b></li>
                        <li class="fl score">
                            <span class="fl">系统评分</span>
                            <img src="../../assets/img/platform/userManage/score.png" alt="">
                            <div class="clear">
                                <i class="fl"></i>
                                <i class="fl"></i>
                                <i class="fl"></i>
                                <s class="fl"></s>
                                <s class="fl"></s>
                            </div>
                            <h2>5.0分</h2>
                        </li>
                        <li class="fl photo">
                            <span class="fl">照片</span>
                            <img src="../../assets/img/platform/userManage/user.png" alt="">
                        </li>
                        <li class="fl"><span class="fl">数据共享次</span><b>{{userData.DATA_SHARES_TIMES+' 次'}}</b></li>
                        <li class="fl"><span class="fl">企业名称</span><b>{{userData.COMPANY_NAME}}</b></li>
                        <li class="fl"><span class="fl">数据共享总量</span><b>{{userData.DATA_SHARING_TOTAL+' GB'}}</b></li>
                        <li class="fl"><span class="fl">企业性质</span><b>{{userData.COMPANY_TYPE}}</b></li>
                        <li class="fl"><span class="fl">履约次数</span><b>{{userData.COMPLIANCE_TIMES+' 次'}}</b></li>
                        <li class="fl"><span class="fl">组织机构代码</span><b>{{userData.ORGANIZATION_CODE}}</b></li>
                        <li class="fl"><span class="fl">违约次数</span><b>{{userData.BREACH_CONTRACT_TIMES+' 次'}}</b></li>
                        <li class="fl"><span class="fl">统一信用代码</span><b>{{userData.UNIFIED_SOCIAL_CREDIT_CODE}}</b></li>
                    </ul>
                    <div class="top_right fr">
                        <header>私密信息</header>
                        <h1 class="clear">
                            <span class="fl">区块链账户ID</span>
                            <b class="fr">{{currentUserId}}</b>
                        </h1>
                        <ul class="clear">
                            <li class="fl"><h2>指纹信息</h2><img src="../../assets/img/platform/userManage/fingerprint.png" alt=""></li>
                            <li class="fl"><h2>人脸信息</h2><img src="../../assets/img/platform/userManage/default.png" alt=""></li>
                            <li class="fl"><h2>虹膜信息</h2><img src="../../assets/img/platform/userManage/iris.png" alt=""></li>
                        </ul>
                    </div>
                </div>
                <div class="bottom">
                    <header>异常数据</header>
                    <VuePerfectScrollbar class="bottom_content">
                        <ul>
                            <li v-for="(i,$index) in errorData">
                                <span>{{$index+1}}</span>
                                <span>{{i.BREACH_TIME | moment}}</span>
                                <span>{{i.BREACH_CONTRACT_CONTENT}}</span>
                            </li>
                        </ul>
                    </VuePerfectScrollbar>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import { userManage_getUserList } from '~/api/apiFactory'
    import { userManage_getUserData } from '~/api/apiFactory'
    import { userManage_getErrorData } from '~/api/apiFactory'

    export default {
        name: "user-manage",
        components: {VuePerfectScrollbar},
        data() {
            return{
                userList: null,
                userData: {},
                errorData: null,
                id: null
            }
        },
        methods: {
            async getUserList() {
                let data = await userManage_getUserList();
                this.userList = data.data.data;
                this.id = this.userList[0].ID;
                this.getUserData();
                this.getErrorData();
            },
            async getUserData() {
                let data = await userManage_getUserData(this.id);
                this.userData = data.data.data[0];
            },
            async getErrorData() {
                let data = await userManage_getErrorData(this.id);
                this.errorData = data.data.data;
            },
            toggleData(id) {
                this.id = id;
                this.getUserData();
                this.getErrorData();
            }
        },
        mounted() {
            this.getUserList();
        }
    }
</script>

<style lang="scss" scoped>
    .userManage{
        height: 920px;
        .verticalSlider {
            position: relative;
            padding: 45px 0;
            b {
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                width: 48px;
                height: 24px;
            }
            .top_icon {
                background: url('../../assets/img/platform/component/top.png') no-repeat center;
                top: 20px;
            }
            .bottom_icon {
                background: url('../../assets/img/platform/component/bottom.png') no-repeat center;
                bottom: 20px;
            }
            div{
                width: 140px;
                height: 700px;
                position: relative;
                overflow: hidden;
                ul{
                    position: absolute;
                    width: 140px;
                    z-index: 11;
                    top: 0;
                    li {
                        width: 100px;
                        height: 100px;
                        position: relative;
                        padding: 20px;
                        background: url('../../assets/img/platform/blockChainMsg/sliderImg.png') no-repeat center;
                        h1{
                            width: 96px;
                            height: 96px;
                            background-color: rgba(74,107,186,.8);
                            cursor: pointer;
                            color: #fff;
                            padding: 2px;
                            font-size: 14px;
                            text-align: center;
                            display: none;
                        }
                    }
                    li:hover,li.current{
                        background-color: #f0f3fa!important;
                        h1{
                            display: block;
                        }
                    }
                }
                h2 {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    width: 16px;
                    height: 700px;
                    background: url('../../assets/img/platform/component/chain.png') no-repeat center;
                    z-index: 10;
                }
            }
        }
        .hasVerticalSliderContent{
            padding: 30px;
            height: calc(100% - 60px);
            .top{
                .top_left{
                    background-color: #fff;
                    border-left: 8px solid #3ad296;
                    padding: 10px;
                    width: calc(100% - 558px);
                    li{
                        width: calc(50% - 20px);
                        padding: 0 10px;
                        line-height: 30px;
                        h1{
                            color: #5a8bff;
                        }
                        span{
                            width: 100px;
                        }
                        b {
                            font-weight: normal;
                            color: #0077e6;
                            word-break: break-all;
                        }
                    }
                    .entry{
                        height: 30px;
                        overflow: hidden;
                    }
                    .photo{
                        img{
                            vertical-align: top;
                        }
                    }
                    .score{
                        height: 100px;
                        position: relative;
                        img{
                            vertical-align: top;
                            margin-top: 18px;
                        }
                        div{
                            position: absolute;
                            top: 40px;
                            left: 185px;
                            i, s {
                                width: 16px;
                                height: 16px;
                                margin-left: 4px;
                            }
                            i {
                                background: url('../../assets/img/platform/userManage/star.png') no-repeat center;
                            }
                            s {
                                background: url('../../assets/img/platform/userManage/_star.png') no-repeat center;
                            }
                        }
                        h2{
                            position: absolute;
                            top: 36px;
                            left: 127px;
                        }
                    }

                }
                .top_right{
                    border-left: 8px solid #ffdd67;
                    background-color: #fff;
                    width: 472px;
                    height: 280px;
                    padding: 10px;
                    header{
                        color: #5a8bff;
                        line-height: 30px;
                        font-size: 16px;
                    }
                    h1{
                        line-height: 60px;
                        b{
                            font-weight: normal;
                            color: #00b361;
                        }
                    }
                    ul{
                        margin-top: 20px;
                        li{
                            h2{
                                height: 30px;
                                line-height: 30px;
                                text-align: center;
                            }
                            img{
                                vertical-align: top;
                            }
                        }
                        li:nth-child(2){
                            margin: 0 56px;
                        }
                    }
                }
            }
            .bottom{
                margin-top: 20px;
                background-color: #fff;
                border-bottom: 1px solid #fff;
                header {
                    font-size: 24px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    background-color: #5a8bff;
                    color: #fff;
                }
                .bottom_content{
                    margin: 30px;
                    line-height: 40px;
                    height: 299px;
                    ul{
                        li{
                            padding: 0 10px;
                            span{
                                margin-right: 10px;
                            }
                        }
                        li:nth-child(odd){
                            background-color: #f5f7fc;
                        }
                    }
                }
            }
        }
    }
</style>
