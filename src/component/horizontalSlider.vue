<template>
    <div id="horizontalSlider">
        <div>
            <ul class="clear">
                <li class="fl"><img :src="sliderImg" alt=""><p>贵阳市人社局</p></li>
                <li class="fl"><img :src="sliderImg" alt=""><p>贵阳市人社局</p></li>
                <li class="fl"><img :src="sliderImg" alt=""><p>贵阳市人社局</p></li>
                <li class="fl"><img :src="sliderImg" alt=""><p>贵阳市人社局</p></li>
                <li class="fl"><img :src="sliderImg" alt=""><p>贵阳市人社局</p></li>
                <li class="fl"><img :src="sliderImg" alt=""><p>贵阳市人社局</p></li>
                <li class="fl"><img :src="sliderImg" alt=""><p>贵阳市人社局</p></li>
            </ul>
        </div>
        <b class="left_icon"></b>
        <b class="right_icon"></b>
    </div>
</template>

<script>
    export default {
        name: "horizontal-slider",
        props: ['sliderImg']
    }
</script>

<style lang="scss" scoped>
    #horizontalSlider{
        height: 130px;
        background-color: #3689e6;
        position: relative;
        div{
            width: 910px;
            margin: auto;
            padding: 15px 0;
            li{
                width: 100px;
                height: 100px;
                text-align: center;
                color: #fff;
                cursor: pointer;
                margin: 0 15px;
                border-radius: 4px;
                img{
                    vertical-align: top;
                    margin-top: 5px;
                    p{
                        height: 30px;
                        line-height: 30px;
                    }
                }
            }
            li:hover,li.current{
                background-color: #2e68a9;
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
            background: url('../assets/img/platform/component/left.png') no-repeat center;
            left: 18px;
        }
        b.right_icon{
            background: url('../assets/img/platform/component/right.png') no-repeat center;
            right: 18px;
        }
    }
</style>
