<template>
    <div>
        <h3>table3</h3>
        <table border="1">
            <thead>
                <tr>
                    <th>no</th>
                    <th>num1</th>
                    <th>num2</th>
                    <th>num3</th>
                    <th>결과</th>
                    <th>버튼</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(tmp,idx) in this.it" v-bind:key="tmp">
                    <td>{{tmp.no}}</td>
                    <td>{{tmp.num1}}</td>
                    <td>{{tmp.num2}}</td>
                    <td>{{tmp.num3}}</td>
                    <td>{{tmp.result}}</td>
                    <td><input type="button" value="+" @click="handlePlus(idx)">
                    <input type="button" value="-" @click="handleSub(idx)">
                    <input type="button" value="*" @click="handleMul(idx)">
                    <input type="button" value="/" @click="handleDiv(idx)"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        created(){
            this.it =[
                {no:1, num1:5551233, num2:4, num3:44, result:0},
                {no:2, num1:51215, num2:5445, num3:144, result:0},
                {no:3, num1:14821446812, num2:1123123, num3:157, result:0},
            ]
        },
        data(){
            return{
                it:[]
            }
        },
        methods:{
            handlePlus(idx){
                this.it[idx].result =
                this.it[idx].num1 + this.it[idx].num2 + this.it[idx].num3
            },
            handleSub(idx){
                this.it[idx].result =
                this.it[idx].num1 - this.it[idx].num2 - this.it[idx].num3
            },
            handleMul(idx){
                this.it[idx].result =
                this.it[idx].num1 * this.it[idx].num2 * this.it[idx].num3
            },
            handleDiv(idx){
                this.it[idx].result =
                this.it[idx].num1 / this.it[idx].num2 / this.it[idx].num3
                this.it[idx].result = Math.round(this.it[idx].result)
            },
        },
    }
</script>

<style scoped>

</style>