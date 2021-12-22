<template>
    <div>
        <el-row :gutter="20" v-for="tmp in items.length/cnt" :key="tmp" style="margin-top: 20px">
            <el-col :span="6" v-for="tmp1 in cnt" :key="tmp1" style="cursor: pointer;" @click="handleOrder(items[(tmp-1) * cnt + (tmp1-1)].code)">
                <el-image :src="items [(tmp-1) * cnt + (tmp1-1)].img" />
                <p>물품명 : {{items [(tmp-1) * cnt + (tmp1-1)].name}}</p>
                <p>가격 : {{items [(tmp-1) * cnt + (tmp1-1)].price}}</p>
                <p>수량 : {{items [(tmp-1) * cnt + (tmp1-1)].qty}}</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        created(){
            this.handleData()
        },
        mounted(){

        },
        data(){
            return{
                items: [],
                cnt : 4
            }
        },
        methods:{
            handleData(){
                for(let i =0; i<12; i++){
                    this.items.push({
                            code: i+1,
                            name: '사과' +i,
                            price: 1000 + i,
                            qty : 1000- i,
                            img : "https://picsum.photos/500/300?image="+ (120+i)
                    })
                }
            },
            handleOrder(code){
                console.log("shop.vue => handleOrder", code);
                this.$router.push({
                    // path 사용할 경우 query로 전달, params는 전달안됨
                    // name 사용할 경우 query 전달, params도 전달됨
                    // query는 주소창에 정보가 표시
                    // params는 주소창에 정보가 표시되지 않음 (1회만)
                    // name을 권장 name을 써야 query와 params를 동시에 쓸 수 있음
                    // path:'/order',
                    name: 'Order',
                    query: {icode : code},
                    params: { key : '숨김정보' }
                    });


                // 주문페이지로 이동
            }
            
        }
    }
</script>

<style scoped>

</style>