<template>
    <div>
        <h3>table2</h3>
        <table border="1">
            <thead>
                <tr>
                    <th>체크</th>
                    <th>아이디</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>할인</th>
                    <th>합계</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tmp,idx) in items" v-bind:key="tmp">
                    <td><input type="checkbox" v-model="tmp.chk"></td>
                    <td>{{tmp.id}}</td>
                    <td>{{tmp.price}}</td>
                    <td>
                       
                        <select @change="handlePrice(idx)" v-model="tmp.count1" >
                            <option v-for="tmp1 in tmp.count" v-bind:key="tmp1">
                                {{tmp1}}
                            </option>
                        </select>
                    </td>
                    <td>{{tmp.discountrate}}</td>
                    <td>{{tmp.total}}</td>
                </tr>
                <tr>
                    <td colspan="2">합계</td>
                    <td colspan="1">{{sumPrice}}</td>
                    <td colspan="1">{{sumCount}}</td>
                    <td colspan="1"></td>
                    <td colspan="1">{{sumTotal}}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div style="margin:50px 0;">
        <input type="button" value="삭제" @click="handleDelete()">
        <input type="button" value="복사" @click="handleCopy()">
        <input type="button" value="이동" @click="handleMove()">
    </div>

    <table border="1">
        <table border="1">
            <thead>
                <tr>
                    <th>체크</th>
                    <th>아이디</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>할인</th>
                    <th>합계</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tmp,idx) in items1" v-bind:key="tmp">
                    <td><input type="checkbox" v-model="tmp.chk"></td>
                    <td>{{tmp.id}}</td>
                    <td>{{tmp.price}}</td>
                    <td>
                       
                        <select @change="handlePrice(idx)" v-model="tmp.count1" >
                            <option v-for="tmp1 in tmp.count" v-bind:key="tmp1">
                                {{tmp1}}
                            </option>
                        </select>
                    </td>
                    <td>{{tmp.discountrate}}</td>
                    <td>{{tmp.total}}</td>
                </tr>
                <tr>
                    <td colspan="2">합계</td>
                    <td colspan="1">{{sumPrice}}</td>
                    <td colspan="1">{{sumCount}}</td>
                    <td colspan="1"></td>
                    <td colspan="1">{{sumTotal}}</td>
                </tr>
            </tbody>
        </table>
        <tbody>

        </tbody>


    </table>





</template>

<script>
    export default {

        // 생명주기
        created(){
            this.handleData()
        },

        // 리턴값이 있는 계산
        computed:{
            sumPrice(){
                let sum = 0;
                for(let i =0; i < this.items.length; i++){
                    sum += this.items[i].price
                }
                return sum;
            },
            sumCount(){
                let sum = 0;
                for(let i =0; i < this.items.length; i++){
                    sum += Number(this.items[i].count1);
                    console.log(typeof this.items[i].count1)
                }
                // console.log(typeof this.items[i].count1)
                return sum;
                
            },
            sumTotal(){
                let sum = 0;
                for(let tmp of this.items){
                    sum += tmp.total
                }
                return sum;
            }
        },

        //상태변수
        data(){
            return{
                items :[],
                items1 : [],
                items2 : [],
            }
        },
        
        // 메소드
        methods:{
            handleData(){
                // 백엔드에서 데이터 받기
                // items 상태 변수에 저장
                this.items =[
                    {id: 'a', price:3000, count: 3, discountrate: 10},
                    {id: 'b', price:39800, count: 5, discountrate: 20},
                    {id: 'C', price:20000, count: 12, discountrate: 35},
                ];
                for(let tmp of this.items){
                    // console.log(typeof tmp.count)

                    tmp.chk = false
                    tmp.count1 = 1;
                    tmp.total = tmp.price * tmp.count1 * (100 - tmp.discountrate) / 100
                    tmp.total = Math.round(tmp.total)
                }
            },
            handlePrice(idx){
                this.items[idx].total =this.items[idx].price * this.items[idx].count1 
                * (100 - this.items[idx].discountrate) / 100
            },
            handleDelete(){
                // 기존에 3개 중에서 false인 것 찾아서
                // itemTemp로 복사함
                // itemTemp값을 items로 변경
                let itemTemp = []; 
                for(let tmp of this.items){
                    if(tmp.chk===false){
                        itemTemp.push(tmp)
                    }
                }
                this.items = itemTemp
            },
            handleCopy(){
                let itemTemp = [];
                for(let tmp of this.items){
                    if(tmp.chk === true){
                        itemTemp.push( Object.create( tmp ) );
                    }
                }
                console.log(itemTemp);
                this.items1 = itemTemp; 
            },
            // handleCopy(){
            //     for(let tmp of this.items){
            //         if(tmp.chk){
            //             this.items1.push( Object.create (tmp))
            //         }
            //     }
            // },
            handleMove(){
                let itemTemp = []; 
                for(let tmp of this.items){
                    if(tmp.chk){
                        this.items1.push(Object.create(tmp))
                    }
                    else if (!(tmp.chk)){
                        itemTemp.push(Object.create(tmp))
                    }
                }
                this.items = itemTemp
                
            },

        }
        
        // 테이블 화면 만들기
        // count select으로
        // select이 선택되면 total = price * count * (100-discountrate)

    }
</script>

<style scoped>

</style>