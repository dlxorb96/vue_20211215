<template>
    <div>
        <p>{{str1}}</p>
        <p>{{num1}}</p>
        <input type="button" value="num1의 값 증가" @click="handleNum1()">
    </div>
</template>

<script>
// import { stringifyQuery } from 'vue-router'
    export default {
        // 생명주기
        created(){

        },
        mounted(){

        },

        // props 변수 : 부모컴포넌트에서 전달되는 값
        props: {
            str1:{
                type : String,
                default:''
            },
            num1:{
                type: Number,
                default : 0
            },
        },

        // 상태변수
        data(){
            return{

            }
        },

        // 메소드
        methods:{
            handleNum1(){
                console.log('Comp1.vue => handleNum1')

                // 컴포넌트를 사용했던 부모의 이벤트를 호출
                // 컴포넌트 내부의 값을 바꾸는 건 의미가 없다
                // 부모의 데이터를 바꿔야 한다.
                this.$emit('addNum1')
            }
        },
        // 리턴 값이 있는 메소드
        computed:{

        }
    }
</script>

<style scoped>

</style>