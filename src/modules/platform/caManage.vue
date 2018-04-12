<template>
    <div>
        <div class="top publicBox">
            <header class="header clear"><span class="fl"></span>密钥管理</header>
            <ul class="clear">
                <li class="fl" v-for="i in dataKeyList" :class="{current : i.USE_TYPE === '1'}">
                    <div><span>{{i.DATA_KEY_NAME}}</span><button type="button" @click="updateKey(i.ID)">使用</button></div>
                </li>
            </ul>
        </div>
        <div class="bottom publicBox">
            <header class="header clear"><span class="fl"></span>CA管理</header>
            <div class="wait">
                <h1>等待认证队列<button class="fr" type="button" @click="nextUnApprove">&gt;</button><button class="fr" type="button" @click="prevUnApprove">&lt;</button></h1>
                <ul class="clear">
                    <li class="fl" v-for="i in unApproveList">
                        <div class="fl">
                            <ul class="clear">
                                <li class="fl">{{i.REAL_NAME}}</li>
                                <li class="fl" style="margin: 0 10px;">{{i.PHONE}}</li>
                                <li class="fl">{{i.E_MAIL}}</li>
                            </ul>
                            <ul class="clear">
                                <li class="fl">{{i.COMPANY_NAME}}</li>
                                <li class="fl">{{i.COMPANY_TYPE}}</li>
                            </ul>
                            <ul class="clear">
                                <li class="fl">{{i.COMPANY_ADDR}}</li>
                            </ul>
                            <ul class="clear">
                                <li class="fl"><span>公钥：{{i.PUBLIC_KEY_FINGERPRINT}}</span></li>
                            </ul>
                        </div>
                        <div class="fr">
                            <button type="button">通过认证</button>
                            <p><span>拒绝认证</span></p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="approved">
                <h1>已经认证队列<button class="fr" type="button" @click="nextApprove">&gt;</button><button class="fr" type="button" @click="prevApprove">&lt;</button></h1>
                <ul class="approvedList clear">
                    <li class="fl" v-for="i in approveList">
                        <div class="fl">
                            <p>{{i.REAL_NAME}}</p>
                            <p>{{i.COMPANY_NAME}}</p>
                            <p>{{i.ID}}</p>
                        </div>
                        <div class="fr">
                            <h2 class="star clear">
                                <b class="fl"></b>
                                <b class="fl"></b>
                                <b class="fl"></b>
                                <b class="fl"></b>
                                <b class="fl"></b>
                            </h2>
                            <img src="../../assets/img/platform/caManage/small_user.png" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { caManage_getDataKeyList } from '~/api/apiFactory'
    import { caManage_updateKey } from '~/api/apiFactory'
    import { caManage_getApproveList } from '~/api/apiFactory'
    import { caManage_getUnApproveList } from '~/api/apiFactory'

    export default {
        name: "ca-manage",
        data() {
            return{
                dataKeyList: null,
                approveList: null,
                unApproveList: null,
                approvePage: 1,
                unApprovePage: 1,
                approveTotalPage: null,
                unApproveTotalPage: null,
            }
        },
        methods: {
            async getDataKeyList() {
                let data = await caManage_getDataKeyList();
                this.dataKeyList = data.data.data;
            },
            async updateKey(id) {
                let data = await caManage_updateKey(id);
                data.data.status === 1 && (this.getDataKeyList());
            },
            async getApproveList() {
                let data = await caManage_getApproveList(this.approvePage);
                this.approveList = data.data.data;
                this.approveTotalPage = Math.ceil(data.data.total/5);
            },
            async getUnApproveList() {
                let data = await caManage_getUnApproveList(this.unApprovePage);
                this.unApproveList = data.data.data;
                this.unApproveTotalPage = Math.ceil(data.data.total/2);
            },
            nextApprove() {
                if(this.approvePage < this.approveTotalPage){
                    this.approvePage++;
                    this.getApproveList();
                }else{
                    console.log(123);
                }
            },
            prevApprove() {
                if(this.approvePage > 1){
                    this.approvePage--;
                    this.getApproveList();
                }else{
                    console.log(123);
                }
            },
            nextUnApprove() {
                if(this.unApprovePage < this.unApproveTotalPage){
                    this.unApprovePage++;
                    this.getUnApproveList(this.unApprovePage);
                }else{
                    console.log(123);
                }
            },
            prevUnApprove() {
                if(this.unApprovePage > 1){
                    this.unApprovePage--;
                    this.getUnApproveList(this.unApprovePage);
                }else{
                    console.log(123);
                }
            }
        },
        mounted() {
            this.getDataKeyList();
            this.getApproveList();
            this.getUnApproveList();
        }
    }
</script>

<style lang="scss" scoped>
    .top{
        margin-bottom: 20px;
        ul {
            padding-top: 45px;
            padding-bottom: 25px;
            li {
                width: 20%;
                text-align: center;
                height: 40px;
                line-height: 40px;
                margin-bottom: 20px;
                div {
                    width: 250px;
                    margin: auto;
                    span {
                        margin-right: 67px;
                    }
                    button {
                        font-size: 16px;
                        width: 100px;
                        height: 30px;
                        color: #fff;
                        background-color: #5a8bff;
                        border-radius: 4px;
                        border: none;
                        cursor: pointer;
                    }
                }
            }
            li.current{
                div{
                    background-color: #3ad296;
                    border-radius: 4px;
                    button {
                        background-color: #3ad296;
                    }
                    span{
                        color: #fff;
                    }
                }
            }
        }
    }
    .bottom{
        .wait{
            padding:0 20px;
            h1{
                font-size: 16px;
                font-weight: normal;
                height:60px;
                line-height: 60px;
                button{
                    width:30px;
                    height:30px;
                    background-color: #fff;
                    border:1px solid #0051bd;
                    color: #0051bd;
                    margin-top: 15px;
                    cursor: pointer;
                }
                button:hover{
                    background-color: #0051bd;
                    color: #fff;
                }
                button:nth-child(1){
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                button:nth-child(2){
                    border-top-left-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
            }
            >ul{
                padding-bottom: 45px;
                border-bottom: 1px solid #0051bd;
                height: 100px;
                >li{
                    width:736px;
                    height:100px;
                    div{
                        ul{
                            height:25px;
                            line-height: 25px;
                        }
                        button{
                            width:100px;
                            height:30px;
                            color: #fff;
                            background-color: #2186ed;
                            border-radius: 4px;
                            border:none;
                            cursor: pointer;
                        }
                        button:hover{
                            background-color: #0051bd;
                        }
                        p{
                            height:40px;
                            line-height: 40px;
                            color: #2186ed;
                            text-align: center;
                            font-size: 14px;
                            cursor: pointer;
                        }
                        p:hover{
                            color: #0051bd;
                        }
                    }
                    div:nth-child(1){
                        padding-left: 120px;
                        background: url('../../assets/img/platform/CAManage/user.png') no-repeat;
                        span{
                            color: #62cfcc;
                        }
                    }
                }
                >li:first-child{
                    margin-right: 18px;
                }
            }
        }
        /*approved*/
        .approved{
            padding:0 20px;
            h1{
                height:70px;
                line-height: 70px;
                button{
                    width:30px;
                    height:30px;
                    background-color: #fff;
                    border:1px solid #0051bd;
                    color: #0051bd;
                    margin-top: 20px;
                    cursor: pointer;
                }
                button:hover{
                    background-color: #0051bd;
                    color: #fff;
                }
                button:nth-child(1){
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                button:nth-child(2){
                    border-top-left-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
            }
            ul{
                padding-bottom: 137px;
                li{
                    width: 244px;
                    height: 174px;
                    background: url('../../assets/img/platform/caManage/card.png') no-repeat center;
                    padding: 23px 25px 0;
                    margin: 0 2px;
                    h2{
                        padding: 5px 0 ;
                        b, s {
                            width: 16px;
                            height: 16px;
                        }
                        b {
                            background: url('../../assets/img/platform/caManage/star.png') no-repeat center;
                        }
                        s {
                            background: url('../../assets/img/platform/caManage/_star.png') no-repeat center;
                        }
                    }
                    p{
                        line-height: 30px;
                    }
                    div:nth-child(1){
                        padding-top: 20px;
                    }
                }
            }
        }
    }
</style>
