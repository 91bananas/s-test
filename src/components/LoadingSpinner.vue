<template>
    <div class="loading-overlay ">
        <div id="loader"></div>
    </div>
</template>

<script>
export default {
    name: 'LoadingSpinner'
}
</script>

<style scoped>
.loading-overlay {
    position: absolute;
    padding-top: 100px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
}
#loader {
    width: 25px;
    height: 25px;
    background-color: transparent;
    border-radius: 50%;
    margin: 0 auto;
    border-top: 4px solid black;
    border-right: 4px solid #ccc;
    border-bottom: 4px solid #ccc;
    border-left: 4px solid #ccc;
    animation: rotate .8s linear infinite;
}
@keyframes rotate {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>