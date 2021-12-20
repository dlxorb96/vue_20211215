<template>
    <div>
        <h3>slot 예제</h3>
        <p>props로 전달되는 값 {{name}}</p>
        <hr />

        <slot name="left"></slot>
        <hr />

        <slot name="center"></slot>
        <hr />

        <slot name="right"></slot>
    </div>
</template>

<script>
    export default {
        
        props:{
            name:{
                type: String,
                default: ''
            }
        },

    }
</script>

<style scoped>

</style>