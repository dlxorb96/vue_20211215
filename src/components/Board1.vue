<template>
    <div>
        <h5>board1.vue</h5>
        <!-- 테이블 만들기 -->
        <el-table :data="items" @row-click= "rowClick"  border style="cursor: pointer; width: 100%; text-align: center;">
            <el-table-column prop="no" label="글 번호" width="180" />
            <el-table-column prop="title" label="제목" width="180" />
            <el-table-column prop="writer" label="작성자" />
            <el-table-column prop="hit" label="조회수" />
            <el-table-column prop="regdate" label="등록 날짜" />
        </el-table>
        <!-- 페이지네이션 만들기 
        https://element-plus.org/en-US/component/pagination.html#basic-usage 첫번째-->
        <el-pagination layout="prev, pager, next" :total="500"
        @current-change= "currentChange"></el-pagination>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        created(){
            this.handleData()
        },
        data(){
            return{
                items: [],
                page : 1,
            }
        },
        methods:{
            async handleData(){
                const url = `http://ihongss.com/json/board.json?page=${this.page}`;
                const headers = {"Content-Type":"application/json"};
                const response = await axios.get(url, {headers:headers});
                console.log(response)
                if(response.data.ret ==="y"){
                    this.items = response.data.data;
                }
            },
            currentChange(page){
                console.log("Board1.vue > currentChange",page)
                this.page = page,
                this.handleData()
            },
            rowClick(row){
                console.log("Board1.vue => rowClick,", row)
                this.$router.push({
                    name: "Board1One",
                    query : {no: row.no}
                })
            }
        }
    }
</script>

<style scoped>

</style>