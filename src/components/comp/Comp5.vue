<template>
    <div>
        <h4>자식: comp/Comp5.vue</h4>
        {{data}}
        <br />
        <hr/>
        <slot name="tag1" :user = "user"></slot>
        여기는 자식 내부
    </div>
</template>

<script>
    export default {
        // 부모로부터 전달되는 변수값
        props:{
            data:{
                type:String,
                default: '',
            }
        },
        data(){
            return{
                user : {
                    firstname: 'aaa',
                    lastname: 'bbb'
                }
            }
        }
    }
</script>

<style scoped>

</style>