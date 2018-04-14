<template>
    <div id="verticalSlider">
        <div>
            <ul ref="elem">
                <li :style="sliderImg" :class="{current : index === currentIndex}" v-for="(i,index) in sliderData">
                    <h1 @click="toggleCurrent(index)"><span>{{i.name}}</span></h1>
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
        props: ['sliderImg','sliderData','callback'],
        data() {
            return{
                timer: null,
                isAnimate: false,
                currentIndex: 0
            }
        },
        computed: {
            dataTotal() {return this.sliderData && this.sliderData.length-1;}
        },
        methods: {
            move() {
                this.callback(this.sliderData[this.currentIndex].id);
                let step;
                this.isAnimate = true;
                if(this.currentIndex - 2 > 0){
                    step = this.currentIndex - 2;
                    this.currentIndex + 2 >= this.dataTotal && (step = this.dataTotal - 4);
                }else{
                    step = 0;
                }
                $(this.$refs.elem).animate({top : -(140*step) +'px'},'fast',() => {this.isAnimate = false;});
            },
            autoAnimate() {
                this.timer = setInterval(() => {
                    this.currentIndex++;
                    this.move();
                },2500);
            },
            toggleCurrent(index) {
                if(!this.isAnimate){
                    this.timer && clearInterval(this.timer);
                    this.currentIndex = index;
                    this.move();
                    this.autoAnimate();
                }
            }
        },
        mounted() {
            this.autoAnimate();
        }
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
