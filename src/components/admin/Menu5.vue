<template>
    <div>
        <h5>admin/Menu5.vue</h5>
        <el-table :data="items" size="mini" style="width: 100%">
            <el-table-column prop="userid" label="아이디" width="180" />
            <el-table-column prop="username" label="이름" width="180" />
            <el-table-column prop="userage" label="나이" width="180" />
            <el-table-column label="버튼">
                <template #default="scope">
                    

                    <el-button size="mini" type='info'>수정하기</el-button>
                    <el-button size="mini" type="danger" @click ="handleDelte(scope.$index)"> 삭제하기</el-button>
                </template>
            </el-table-column>

        </el-table>
        <el-dialog
            v-model="dialogVisible"
            title="삭제알림"
            width="30%">
            <span>정말 삭제하시겠습니까?</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="handleDelteAction(idx)" type="primary">삭제하기</el-button> 
                    <el-button @click="dialogVisible = false">취소하기</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        // 원래 해야하는데 main에 다 임포트 해놨음
        // component:{
        //     'el-table': ElTable,
        // },
        created(){
          this.handleData()  
        },
        data(){
            return{
                items :[],
                dialogVisible : false,
                idx : -1,  //삭제 버튼 누를 때 임시로 보관되는 변수
            }
        },
        methods:{
            // 백엔드로부터 데이터 받음
            handleData(){
                this.items = [
                    {userid: 'a', username: '하', userage:34},
                    {userid: 'B', username: '이', userage:14},
                    {userid: 'C', username: '라', userage:134},
                    {userid: 'E', username: '이', userage:464},
                    {userid: 'F', username: '트', userage:124},
                ]
            },
            // 다이얼로그 띄우기
            handleDelte(idx){
                this.dialogVisible = true
                this.idx = idx                
            },

            // 실제 삭제 수행시 삭제하고자 하는 idx를 알 수 없음.
            handleDelteAction(){
                this.dialogVisible = true
                // 벡엔드로 아이디값을 전달하면
                // 벡엔드가 아이디값이 일치하는 항목 지우기
                // 벡엔드가 새로운 내용을 줌
                // this.items.splice(idx, 1)
                let items1 = [];
                for(let i=0; i <this.items.length; i++){
                    if(i === this.idx){
                        continue
                    }
                    items1.push(this.items[i])
                }
                this.items = items1
                this.dialogVisible = false

            //     let tmpItem = [];
            //     for(let i =0; i<this.items.length; i++){
            //         if(i !==idx){
            //             tmpItem.push(this.items[i]);
            //         }
            //     }
            //    this.items = tmpItem
            //     //arr.push({id: 'a', name: 'b'}); //배열에 추가
            //     // arr.pop() // 배열에서 제거 (뒤에서 부터)
            //     // arr.splice(4, 1) //배열에서 제거(위치,개수)
            }
        }
    }
</script>

<style scoped>

</style>