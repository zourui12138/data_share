<template>
    <div>
        <header class="breadcrumb">数据地图</header>
        <div class="clear">
            <div class="left fl public-box">
                <header>区块数据</header>
            </div>
            <div class="right fr public-box">
                <header>近期热搜数据</header>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "data-map"
    }
</script>

<style lang="scss" scoped>
    .left{
        width: calc(100% - 390px);
        height: 890px;
    }
    .right{
        width: 360px;
        height: 890px;
    }
</style>
