<template>
    <div>
        <el-dialog
            v-model="dialogVisible"
            title="구매알림"
            width="30%">
            <p>물품명 : {{items.name}}</p>
            <p>수량 : {{items.count}}개</p>
            <p>합계 : {{items.sum}}원</p>
            <span>정말 구매하시겠습니까?</span>
            <p></p>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click ="handleDelteAction()" type="primary">결제하기</el-button> 
                    <el-button @click="handleDelteAction()">취소하기</el-button>
                </span>
            </template>
        </el-dialog> 
    </div>
</template>

<script>
// 이컴포넌트로 와서 주문처리 후
// 다시 다른페이지로 이동
// 화면이 없음
    export default {
        created(){
            this.handleData()
            this.handleSum()
            this.dialogVisible = true
            console.log(this.$route.params.code);
            console.log(this.$route.params.count);
            console.log(this.code)
            console.log(this.count)
            // 결제 처리
            // alert('결제 되었습니다');
            // 쇼핑몰 메인으로 이동
            
        },
        data(){
            return{
                code: Number(this.$route.params.code),
                count: Number(this.$route.params.count),
                items : []
            }
        },
        methods:{
            handleData(){
                this.items= {
                    code: this.code,
                    name: '사과' +this.code,
                    price: 1000 * this.code,
                    count : this.count

                }   
            },
            handleDelte(){
                this.dialogVisible = true

            },
            handleDelteAction(){
                this.dialogVisible = false
                this.$router.push({path:'/shop'})

            },
            
            handleSum(){
                this.items.sum = Number(this.items.price) * Number(this.items.count)
            }
        }
    }
</script>

<style scoped>

</style>