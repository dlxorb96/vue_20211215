<template>
    <div>
        <h3>Comp2 컴포넌트</h3>
        <span>{{s1}}</span>
        <span v-text="n1"></span>
        <span>{{k1}}</span>
        <input type="button" value="num1의 값 감소" @click="handleSub()">
    </div>
</template>

<script>
    export default {
        // 사용을 하게 되는 부모컴포넌트에서 전달되는 값
        props:{
            s1: {
                type : String,
                default : '라라'
            },
            n1: {
                type : Number,
                default : 90
            },
            k1 : {
                type : String,
                default : '아'
            }
        },
        methods:{
            handleSub(){
                console.log("Comp2.vue => handleSub")
                this.$emit('subNum1')
            }
        }
    }
</script>

<style scoped>

</style>