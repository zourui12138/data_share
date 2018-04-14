<template>
    <div class="content publicBox">
        <header class="header clear"><span class="fl"></span>违约详情</header>
        <div class="top">
            <div>
                <ul class="clear" ref="elem" :style="containerWidth">
                    <li class="fl"
                        v-for="(i,index) in userList"
                        :class="{current : index === currentIndex}" @click="toggleData(i.ID,index)">
                        <p>{{i.USERNAME}}</p>
                    </li>
                </ul>
            </div>
            <b class="left_icon"></b>
            <b class="right_icon"></b>
        </div>
        <div class="bottom clear">
            <div class="bottom_left fl">
                <header><span>事件描述</span>{{events.BREACH_CONTRACT_CONTENT}}<b class="left_icon" @click="prevEvents"></b><b class="right_icon" @click="nextEvents"></b></header>
                <ul class="clear">
                    <li class="fl"><img src="../../assets/img/platform/abnormal/trade.png" alt=""></li>
                    <li class="fl"><img src="../../assets/img/platform/abnormal/data.png" alt=""></li>
                    <li class="fl"><img src="../../assets/img/platform/abnormal/intercept.png" alt=""></li>
                </ul>
            </div>
            <ul class="bottom_right fr">
                <li><img src="../../assets/img/platform/abnormal/abnormal_total.png" alt=""><span>{{countData.BREACH_CONTRACT_TOTAL}}次</span></li>
                <li style="margin: 32px 0;"><img src="../../assets/img/platform/abnormal/abnormal_success.png" alt=""><span>{{countData.BLOCKING_SUCCESS_TOTAL}}次</span></li>
                <li><img src="../../assets/img/platform/abnormal/abnormal_fail.png" alt=""><span>{{countData.BLOCKING_FAIL_TOTAL}}次</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { abnormal_getUserList } from '~/api/apiFactory'
    import { abnormal_getCountData } from '~/api/apiFactory'
    import { abnormal_getEventsList } from '~/api/apiFactory'

    export default {
        name: "abnormal",
        data() {
            return{
                userList: null,
                countData: {},
                events: {},
                eventsPage: 1,
                eventsTotalPage: null,
                currentUserId: 100021001,
                currentIndex: 0,
                isAnimate: false
            }
        },
        computed: {
            containerWidth() {return this.userList && {width : this.userList.length*197+'px'};},
            dataTotal() {return this.userList && this.userList.length-1;}
        },
        methods: {
            async getUserList() {
                let data = await abnormal_getUserList();
                this.userList = data.data.data;
                this.currentUserId = this.userList[0].ID;
                this.getCountData();
                this.getEvents();
            },
            async getCountData() {
                let data = await abnormal_getCountData(this.currentUserId);
                this.countData = data.data.data;
            },
            async getEvents() {
                let data = await abnormal_getEventsList(this.currentUserId,this.eventsPage);
                this.events = data.data.data[0];
                this.eventsTotalPage = data.data.total;
            },
            nextEvents() {
                if(this.eventsPage < this.eventsTotalPage){
                    this.eventsPage++;
                    this.getEvents();
                }else{
                    console.log(123);
                }
            },
            prevEvents() {
                if(this.eventsPage > 1){
                    this.eventsPage--;
                    this.getEvents();
                }else{
                    console.log(123);
                }
            },
            toggleData(id,index) {
                if(!this.isAnimate){
                    this.currentUserId = id;
                    this.eventsPage = 1;
                    this.getCountData();
                    this.getEvents();
                    this.currentIndex = index;
                    let step;
                    this.isAnimate = true;
                    if(this.currentIndex - 3 > 0){
                        step = this.currentIndex - 3;
                        this.currentIndex + 3 >= this.dataTotal && (step = this.dataTotal - 6);
                    }else{
                        step = 0;
                    }
                    $(this.$refs.elem).animate({left : -(197*step) +'px'},'fast',() => {this.isAnimate = false;});
                }
            }
        },
        mounted() {
            this.getUserList();
        }
    }
</script>

<style lang="scss" scoped>
    .content{
        height: 890px;
        .top{
            position: relative;
            div{
                width: 1379px;
                height: 241px;
                padding: 30px 0;
                margin: auto;
                position: relative;
                overflow: hidden;
                ul{
                    position: absolute;
                    top: 30px;
                    left: 0;
                    li{
                        width: 137px;
                        height: 241px;
                        overflow: hidden;
                        border-radius: 6px;
                        margin: 0 30px;
                        box-shadow: 0 0 30px #a6afb6;
                        cursor: pointer;
                        background: url('../../assets/img/platform/abnormal/sliderImg.png') no-repeat center;
                        img{
                            vertical-align: top;
                        }
                        p{
                            margin-top: 134px;
                            width: calc(100%);
                            line-height: 30px;
                            text-align: center;
                        }
                    }
                    li:hover,li.current{
                        background: url('../../assets/img/platform/abnormal/sliderImg_hover.png') no-repeat center;
                    }
                }
            }
            b{
                position: absolute;
                width: 24px;
                height: 48px;
                top: calc(50% - 24px);
                cursor: pointer;
            }
            b.left_icon{
                background: url('../../assets/img/platform/abnormal/left_bg.png') no-repeat center;
                left: 18px;
            }
            b.right_icon{
                background: url('../../assets/img/platform/abnormal/right_bg.png') no-repeat center;
                right: 18px;
            }
        }
        .bottom{
            border: 2px solid #5a8bff;
            padding: 20px 87px;
            img{
                vertical-align: top;
            }
            .bottom_left{
                header{
                    height: 60px;
                    line-height: 60px;
                    font-size: 18px;
                    text-align: center;
                    position: relative;
                    span{
                        color: #0377ff;
                        margin-right: 20px;
                    }
                    b{
                        position: absolute;
                        width: 24px;
                        height: 48px;
                        top: calc(50% - 24px);
                        cursor: pointer;
                    }
                    b.left_icon{
                        background: url('../../assets/img/platform/abnormal/left_bg.png') no-repeat center;
                        left: 18px;
                    }
                    b.right_icon{
                        background: url('../../assets/img/platform/abnormal/right_bg.png') no-repeat center;
                        right: 18px;
                    }
                }
            }
            .bottom_right{
                li{
                    position: relative;
                    span{
                        position: absolute;
                        font-size: 30px;
                        color: #fff;
                        top: 50px;
                        right: 60px;
                    }
                }
            }
        }
    }
</style>
