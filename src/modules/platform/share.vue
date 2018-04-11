<template>
    <div>
        <header class="breadcrumb">数据共享平台数据集市</header>
        <div class="clear">
            <div class="left fl public-box">
                <header>原始数据备份</header>
            </div>
            <div class="right fr">
                <div class="top public-box">
                    <header>数据备份Top10</header>
                </div>
                <div class="bottom public-box">
                    <header>数据上传/下载走势</header>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "share"
    }
</script>

<style lang="scss" scoped>
    .left{
        height: 890px;
        width: calc(100% - 500px);
    }
    .right{
        width: 470px;
        .top {
            height: 426px;
            margin-bottom: 20px;
        }
        .bottom {
            height: 444px;
        }
    }
</style>
