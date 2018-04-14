<template>
    <VuePerfectScrollbar id="login">
        <div class="loginBox clear">
            <div class="portrait fl">
                <div><div></div></div>
                <p style="display: none">贵阳市国土资源部</p>
            </div>
            <ul class="fl">
                <li>登录</li>
                <li><b class="fl"></b><span>帐号</span><input type="text" placeholder="请输入帐号" v-model="username"></li>
                <li><b class="fl"></b><span>密码</span><input type="password" placeholder="请输入密码" v-model="password"></li>
                <li class="clear">
                    <b class="fl"></b><span>指纹</span>
                    <button class="fr" type="button">指纹验证</button>
                    <div class="fr"></div>
                </li>
                <li><b class="fl"></b><span>PKI认证</span><i>0101010011010010101010001010101010</i></li>
                <li><button type="button" @click="login">登录</button></li>
            </ul>
        </div>
    </VuePerfectScrollbar>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import { login_login } from '~/api/apiFactory'

    export default {
        name: "login",
        components: {VuePerfectScrollbar},
        data() {
            return{
                username: null,
                password: null
            }
        },
        methods: {
            async login() {
                let data = await login_login(this.username,this.password);
                data.data.status === 1 && (this.$router.push({path: '/platform/node'}));
            }
        }
    }
</script>

<style lang="scss" scoped>
    #login{
        height: calc(100%);
        background: url('../../assets/img/login/bg.png') no-repeat center;
        position: relative;
        .loginBox {
            position: absolute;
            top: calc(50% - 330px);
            left: 0;
            right: 0;
            margin: auto;
            width: 1160px;
            background-color: #fff;
            border-radius: 6px;
            padding: 50px 0;
            .portrait {
                width: 524px;
                height: 560px;
                border-right: 1px solid #d6d6e3;
                > div {
                    height: 450px;
                    background: url('../../assets/img/login/portrait_bg.png') no-repeat center;
                    position: relative;
                    > div {
                        position: absolute;
                        top: 75px;
                        left: 112px;
                        width: 300px;
                        height: 300px;
                        border-radius: 50%;
                        background: url('../../assets/img/login/portrait.png') no-repeat center;
                    }
                }
                p {
                    height: 60px;
                    line-height: 60px;
                    font-size: 24px;
                    color: #0091d4;
                    text-align: center;
                }
            }
            ul {
                width: 495px;
                padding: 0 68px;
                li{
                    b {
                        width: 24px;
                        height: 24px;
                    }
                    span {
                        margin: 0 16px;
                    }
                    input {
                        width: 392px;
                        height: 48px;
                        outline: none;
                        border-radius: 6px;
                        box-shadow: 0 0 10px #ccc inset;
                        border: none;
                        font-size: 18px;
                        padding-left: 10px;
                    }
                }
                li:nth-child(1) {
                    font-size: 36px;
                    font-weight: bold;
                }
                li:nth-child(2) {
                    height: 90px;
                    line-height: 90px;
                    b {
                        background: url('../../assets/img/login/user.png') no-repeat center;
                        margin-top: 33px;
                    }
                }
                li:nth-child(3) {
                    height: 90px;
                    line-height: 90px;
                    b {
                        background: url('../../assets/img/login/password.png') no-repeat center;
                        margin-top: 33px;
                    }
                }
                li:nth-child(4) {
                    height: 200px;
                    line-height: 200px;
                    b {
                        background: url('../../assets/img/login/finger.png') no-repeat center;
                        margin-top: 88px;
                    }
                    div {
                        width: 200px;
                        height: 200px;
                        background: url('../../assets/img/login/_finger.png') no-repeat center;
                    }
                    button {
                        width: 130px;
                        height: 36px;
                        color: #fff;
                        font-size: 16px;
                        background-color: #0094d4;
                        border: none;
                        border-radius: 4px;
                        margin-top: 82px;
                        margin-left: 70px;
                        cursor: pointer;
                        outline: none;
                    }
                }
                li:nth-child(5) {
                    height: 56px;
                    line-height: 56px;
                    b {
                        background: url('../../assets/img/login/certification.png') no-repeat center;
                        margin-top: 16px;
                    }
                    i {
                        font-style: normal;
                    }
                }
                li:nth-child(6) {
                    text-align: center;
                    button {
                        display: inline-block;
                        width: 150px;
                        height: 50px;
                        line-height: 50px;
                        color: #fff;
                        font-size: 18px;
                        background-color: #0094d4;
                        border: none;
                        border-radius: 4px;
                        margin: 27px 30px 0;
                        cursor: pointer;
                        outline: none;
                    }
                }
            }
        }
    }
</style>
