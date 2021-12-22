<template>
     <div>
           
        <h4>게시판 상세 내용</h4>
        <h3>{{items.title}}</h3>

        <hr />

     <!-- <el-row>
    <el-col :span="8">
      <el-card :body-style="{ padding: '0px' }">
        <img :src= "items.img" class="image" />
        <div style= "padding: 14px">
          <span>{{items.title}}</span>
          <div class="bottom">
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row> -->
        <el-row :gutter="20">
            <el-col :span="2">
                <p @click="left" style="cursor: pointer; font-size: 50px; line-height: 150px">◀ </p>
            </el-col>

            <el-col :span="10" style="width:200px;">
                <el-image :src="items.img " />
            </el-col>
            <el-col :span="10">
                <p>번호: {{items.no}}</p>
                <p>조회수: {{items.hit}}</p>
                <p>등록 날짜: {{items.regdate}}</p>
                <p>작성자: {{items.writer}}</p>
            </el-col>
            <el-col :span="2">
                <p @click="right" style="cursor: pointer; font-size: 50px; line-height: 150px;">▶</p>
            </el-col>

        </el-row>   
                
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
                no: this.$route.query.no,
                items : []
            }
        },
        methods:{
            async handleData(){
                const url = `http://ihongss.com/json/boardone.json?no=${this.no}`
                const headers = {"Content-Type":"application/json"};
                const response = await axios.get(url, {headers:headers});
                console.log(response)
                if(response.data.ret ==='y'){
                    this.items = response.data.data
                }
                console.log(this.items)
            },
            right(){
                this.no++
                this.handleData()
            },
            left(){
                this.no--
                this.handleData()
            }
        }
    }
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>