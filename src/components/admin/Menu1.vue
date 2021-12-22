<template>
<div>
    <h4>메뉴1</h4>
    <h5>물품등록</h5>
    <el-table :data="items" style="width: 100%">
        <el-table-column label="물품코드">
            <template #default="scope">
                <el-input v-model= "scope.row.code"  type="text" placeholder="Please input" />
            </template>
        </el-table-column>

        <el-table-column  label="물품명" >
            <template #default="scope">
                <el-input v-model= "scope.row.name"  type="text" placeholder="Please input" />
            </template>
        </el-table-column>


        <el-table-column  label="가격">
            <template #default="scope">
                <el-input v-model= "scope.row.price"  type="text" placeholder="Please input" />
            </template>
        </el-table-column>

        <el-table-column  label="판매수량">
            <template #default="scope">
                <el-input v-model= "scope.row.quantity"  type="text" placeholder="Please input" />
            </template>
        </el-table-column>
        
    </el-table>
    <el-button style="margin-top: 10px;" @click="addCount" type="primary">항목추가</el-button>
    <el-button @click="subCount" type="primary">항목삭제</el-button>


</div>
</template>

<script>
    export default {
        created(){
            this.handleData()
        },

        methods:{
            addCount(){
                this.count++;
                if(this.count >= 10){
                    this.count = 10
                }
                this.items = []
                this.handleData()
            },
            subCount(){
                this.count--;
                if(this.count < 1){
                    this.count = 1     
                }
                this.items = []
                this.handleData()

            },
            handleData(){
                console.log(this.count)
                for(let i=0; i< this.count; i++){
                    this.items.push({
                        code : [],
                        name: [],
                        price: [],
                        quantity : [],
                    })
                }
            }
        },
        data(){
            return{
                count: 5,
                items: [],
            }
        }
        
    }
</script>

<style scoped>

</style>