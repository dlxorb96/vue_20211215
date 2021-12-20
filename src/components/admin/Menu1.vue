<template>
<div>
    <h4>메뉴1</h4>
    <h5>물품등록</h5>
            <table>
                <input @click="addCount" type="button" value="항목추가">
                <input @click="subCount" type="button" value="항목삭제">
                <tbody>
                    <tr v-for="tmp in count" v-bind:key ="tmp">
                        <td><input type="text" v-model="code[tmp]" placeholder="물품코드"></td>
                        <td><input type="text" v-model="name[tmp]" placeholder="물품명"></td>
                        <td><input type="text" v-model="price[tmp]" placeholder="가격"></td> 
                        <td><input type="text" v-model="quantity[tmp]" placeholder="판매수량"></td> 
                    </tr>
                </tbody>
            </table>
</div>
</template>

<script>
    export default {
        methods:{
            addCount(){
                // this.count = this.count +1
                this.count++;
                console.log(this.count)
                if(this.count >= 10){
                    this.count = 10
                }
            },
            subCount(){
            this.count--;
                if(this.count < 1){
                    this.count = 1     
                }
            }
        },
        data(){
            return{
                count: 5,
                code : [],
                name: [],
                price: [],
                quantity : [],
            }
        }
        
    }
</script>

<style scoped>

</style>