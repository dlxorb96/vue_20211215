<template>
    <div>
        <h4>Order.vue</h4>
        <el-row :gutter="20">
            <el-col :span="12" style="cursor: pointer;">
                <el-image :src="items.img " />
            </el-col>
            <el-col :span="12">
                <p>물품명 : {{items.name}}</p>
                <p>가격 : {{items.price}}원</p>
                    <!-- <el-select @change="sum()" v-model="value" placeholder="Select">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        >
                        </el-option>
                    </el-select> -->
                <el-input-number v-model="num" :min="1" :max="this.items.qty" @change="sum()" />
                <p>합계 : {{sum1}}원</p>
                <!-- 구매 버튼 -->
                <!-- <el-button size="mini" type="danger" @click ="handleDelte()"> 구매하기</el-button> -->
                <el-button size="mini" type="danger" @click ="handleOrderAction()"> 구매하기</el-button>
                <!-- 구매 버튼 클릭시 뜨는 창 -->
                <!-- <el-dialog
                    v-model="dialogVisible"
                    title="구매알림"
                    width="30%">
                    <p>물품명 : {{items.name}}</p>
                    <p>수량 : {{items.qty}}개</p>
                    <p>합계 : {{sum1}}원</p>
                    <span>정말 구매하시겠습니까?</span>
                    <p></p>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click ="handleOrderAction()" type="primary">결제하기</el-button> 
                            <el-button @click="dialogVisible = false">취소하기</el-button>
                        </span>
                    </template>
                </el-dialog> -->
                
                
            </el-col>
        </el-row>   
        
    </div>
</template>

<script>
    export default {
        created(){
            this.handleData()
            this.optionPush()
            this.sum()
        },
        data(){
            return{
                // 받을때는 route
                // 보낼 때는 router
                // query로 전달되는 값은 숫자가 아닌 string으로 온다
                code: Number(this.$route.query.icode),
                key : this.$route.params.key,
                // 새로고침 시 key 날아가버려~
                items: null,
                options:[],
                // value : '',
                num : 1,
                sum1 : 0,
                dialogVisible : false
            }
        },
        methods:{
            handleOrderAction(){
                this.$router.push({
                    name : 'OrderAction',
                    params : {
                        code: this.items.code, count: this.num}})
            },

            handleDelte(){
                this.dialogVisible = true

            },
            handleDelteAction(){
                this.dialogVisible = false
            },

            handleData(){
                this.items= {
                            code: this.code,
                            name: '사과' +this.code,
                            price: 1000 * this.code,
                            qty : 15 - Number(this.code),
                            img : "https://picsum.photos/500/300?image="+ this.code,
                }
            },
            sum(){
                this.sum1 = Number(this.items.price) * Number(this.num)
            },
            optionPush(){
                for(let i =1; i < this.items.qty +1; i++){
                    this.options.push({
                        label: i,
                        value: i
                    })
                }
            },
            
        }
    }
</script>

<style scoped>

</style>