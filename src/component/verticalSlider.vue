<template>
    <div id="verticalSlider">
        <div>
            <ul>
                <li
                    v-vertical-animate="{
                        index: index,
                        len: sliderData.length,
                        distance: 140,
                        callback : callback,
                        id : i.ID
                    }"
                    :style="sliderImg"
                    :class="{current : index === 0}"
                    v-for="(i,index) in sliderData">
                    <h1><span>{{i.DATA_NAME}}</span></h1>
                </li>
            </ul>
            <h2></h2>
        </div>
        <b class="top_icon"></b>
        <b class="bottom_icon"></b>
    </div>
</template>

<script>
    export default {
        name: "vertical-slider",
        props: ['sliderImg','sliderData','callback']
    }
</script>

<style lang="scss" scoped>
    #verticalSlider {
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
            background: url('../assets/img/platform/component/top.png') no-repeat center;
            top: 20px;
        }
        .bottom_icon {
            background: url('../assets/img/platform/component/bottom.png') no-repeat center;
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
                background: url('../assets/img/platform/component/chain.png') no-repeat center;
                z-index: 10;
            }
        }
    }
</style>
