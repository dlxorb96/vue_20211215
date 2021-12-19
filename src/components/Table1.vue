<template>
    <div>
        <h3>주문하기</h3>
        <table border="1">
            <thead>
                <tr>
                    <th>체크</th>
                    <th>아이디</th>
                    <th>나이</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>합계</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(tmp,idx) in items" v-bind:key="tmp">
                <td><input @change="handleCheck(idx)" type="checkbox" v-model="tmp.chk"></td>
                <td>{{tmp.id}}</td>
                <td>{{tmp.age}}</td>
                <td>{{tmp.price}}</td>
                
                <td>
                    <select v-model="tmp.cnt1" @change="handleCheck(idx)">
                        <option v-for="tmp1 in tmp.cnt" v-bind:key="tmp1">
                            {{tmp1}}
                        </option>
                    </select>
                </td>
                <td>{{tmp.sum}}</td>
            </tr>
            <tr>
                <td colspan="2">합계</td>
                
                <td></td>
                <td>{{sumPrice}}</td>
                <td></td>
                <td>{{sumTotal}}</td>
            </tr>
            </tbody>
            
        </table>
    </div>
</template>

<script>
    // import axios from 'axios'
    export default {
        // 생명주기 (자동호출)
        created(){
            this.handleData()

        },

        mounted(){

        },

        // 상태변수
        data(){
            return{
                items:[],
            }
        },

        // 미리계산(생명주기 + 메소드)
        computed:{
            // sumAge(){
            //     let sum = 0;

            //     for(let tmp of this.items){
            //         sum += tmp.age
            //     }
            //     return sum
            // },

            sumPrice(){
                let sum = 0
                for(let tmp of this.items){
                    sum += tmp.price;
                }
                return sum
            },

            sumTotal(){
                let sum = 0;
                for(let tmp of this.items){
                    sum += tmp.sum;
                } 
                return sum;
            },

            sumAge(){
                let sum = 0;

                for(let tmp of this.items){
                    sum += tmp.age
                }
                return sum
            }
        },
        // 메소드를 통해서 해도됨 근데 이런 기능 있어서 쓰는거임

        // 메소드, 함수
        methods:{
            async handleData(){
                // 백엔드로부터 데이터를 받았다고 가정
                this.items = [
                    { id: 'a', age:23, price:500, cnt:5},
                    { id: 'b', age:34, price:400, cnt:10},
                    { id: 'c', age:26, price:4500, cnt:12},
                    { id: 'd', age:99, price:200, cnt:26},
                    { id: 'e', age:120, price:20000, cnt:33},
                ];

                for(let tmp of this.items){
                    tmp.chk = false;
                    tmp.sum = 0;
                    tmp.cnt1 = 1
                }
            },

            handleCheck(idx){
                console.log('Table.vue => handleCheck', idx)
                if(this.items[idx].chk ===true){
                    this.items[idx].sum = 
                    this.items[idx].cnt1 * this.items[idx].price
                }
                else{
                    this.items[idx].sum = 0
                }  
            },
            

        }
    }
    
</script>

<style scoped>

</style>