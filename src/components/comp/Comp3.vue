<template>
    <div>
        <h3>Comp3 컴포넌트</h3>
        <p id="dd">{{dk}}</p>
        <p>{{sk}}</p>
    </div>
</template>

<script>
    export default {
        props:{
            dk:{
                type: String,
                default : '아'
            },
            sk:{
                type : String,
                default : '123'
            }
        }
    }
</script>

<style scoped>
    #dd{
        margin: 30px;
    }
</style>