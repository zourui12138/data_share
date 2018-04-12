<template>
    <div id="dataMapSlider">
        <div>
            <ul class="clear">
                <li class="fl"><s></s></li>
                <li class="fl"><s></s></li>
                <li class="fl"><s></s></li>
                <li class="fl"><s></s></li>
                <li class="fl"><s></s></li>
                <li class="fl"><s></s></li>
                <li class="fl"><s></s></li>
            </ul>
        </div>
        <b class="left_icon"></b>
        <b class="right_icon"></b>
    </div>
</template>

<script>
    export default {
        name: "data-map-slider",
        props: ['sliderImg']
    }
</script>

<style lang="scss" scoped>
    #dataMapSlider{
        height: 140px;
        position: relative;
        div{
            width: 980px;
            margin: auto;
            padding: 10px 0;
            ul{
                li{
                    width: 100px;
                    height: 100px;
                    padding: 10px;
                    cursor: pointer;
                    margin: 0 10px;
                    border-radius: 4px;
                    background: url('../assets/img/platform/dataMap/sliderImg.png') no-repeat center;
                }
                li:hover,li.current{
                    background:#3ad296 url('../assets/img/platform/dataMap/sliderImg_hover.png') no-repeat center;
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
            background: url('../assets/img/platform/component/left_bg.png') no-repeat center;
            left: 18px;
        }
        b.right_icon{
            background: url('../assets/img/platform/component/right_bg.png') no-repeat center;
            right: 18px;
        }
    }
</style>
