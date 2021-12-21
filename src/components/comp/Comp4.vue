<template>
    <div>
        <h3>slot 예제</h3>
        <p>props로 전달되는 값 {{name}}</p>
        <hr />

        <slot name="left"></slot>
        <hr />

        <slot name="center">
            <!-- 슬롯가운데 부모 컴포넌트에 값이 없으면 default 값으로 나온다 -->
            <h5>센터다</h5>
        </slot>
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