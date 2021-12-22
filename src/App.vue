<template>
  <div>
    <!-- 고객용 페이지 레이아웃 -->
      <el-container v-if= "admin === false">
      <el-header> <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">홈화면</el-menu-item>
    <el-menu-item index="2">로그인</el-menu-item>
    <el-menu-item index="3">회원가입</el-menu-item>
    <el-menu-item index="4">마이페이지</el-menu-item>
    <el-menu-item index="8"><a href="/admin2">관리자</a></el-menu-item>
    <el-sub-menu index="5">
      <template #title>Workspace</template>
      <el-menu-item index="5-1">로그인</el-menu-item>
      <el-menu-item index="5-2">회원가입</el-menu-item>
      <el-menu-item index="5-3">게시판</el-menu-item>
      <el-menu-item index="5-4">form</el-menu-item>
      <el-menu-item index="5-5">Iris</el-menu-item>
      <el-menu-item index="5-6">exam10</el-menu-item>
      <el-menu-item index="5-7">exam21</el-menu-item>

      <el-sub-menu index="5-8">
        <template #title>table</template>
        <el-menu-item index="5-8-1">table1</el-menu-item>
        <el-menu-item index="5-8-2">table2</el-menu-item>
        <el-menu-item index="5-8-3">table3</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5-9">
        <template #title>admin</template>
        <el-menu-item index="5-9-1">admin</el-menu-item>
        <el-menu-item index="5-9-2">admin2</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="5-10">titanic</el-menu-item>
      <el-menu-item index="5-11">CompProp</el-menu-item>
      <el-menu-item index="5-12">CompSlot</el-menu-item>
      <el-menu-item index="5-13">upload1</el-menu-item>
      <el-menu-item index="5-14">compslotscope</el-menu-item>
      <el-menu-item index="5-15">shop</el-menu-item>
      <el-menu-item index="5-16">order</el-menu-item>
      <el-menu-item index="5-17">OrderAction</el-menu-item>
      <el-menu-item index="5-18">Board1</el-menu-item>
      <el-menu-item index="5-19">Board1One</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="6" disabled>Info</el-menu-item>
    <el-menu-item index="7">Orders</el-menu-item>
  </el-menu>
  </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>    <router-view></router-view>
</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>

    <!-- 관리자 페이지 -->
    <el-container v-else-if= "admin === true">
      <el-header>Header</el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer>Footer</el-footer>
    </el-container>



    <h3>header</h3>
    <hr />
    <!-- 메뉴에 해당 -->
    <div>
      <router-link to="/">홈화면</router-link>
      <router-link to="/login">로그인</router-link>
      <router-link to="/join">회원가입</router-link>
      <router-link to="/board">게시판</router-link>
      <router-link to="/form">form</router-link>
      <router-link to="/iris">Iris</router-link>
      <router-link to="/exam10">exam10</router-link>
      <router-link to="/exam21">exam21</router-link>
      <router-link to="/admin">admin</router-link>
      <router-link to="/admin2">admin2</router-link>
      <router-link to="/titanic">titanic</router-link>
      <router-link to="/table1">table1</router-link>
      <router-link to="/table2">table2</router-link>
      <router-link to="/table3">table3</router-link>
      <router-link to="/compprop">CompProp</router-link>
      <router-link to="/compslot">CompSlot</router-link>
      <router-link to="/upload1">Upload1</router-link>
      <router-link to="/compslotscope">compslotscope</router-link>
      <router-link to="/shop">shop</router-link>
      <router-link to="/board1">board1</router-link>
    </div>


    <hr />
    <h3>footer</h3>
</div>
</template>

<script>

export default {

  // F5 수행시 실행(redux === store === vuex)
  created(){
    this.handelAdmin()
  },
  mounted(){

  },
  data(){
    return{
      activeIndex: '4',
      admin : false
    }
  },

  methods:{
      handleSelect(idx){
        console.log('App.vue - > handleSelect', idx)
        if(idx ==='1'){
          this.$router.push({path:'/'});
        }
        else if(idx ==='2'){
          this.$router.push({path:'/login'});
        }
        else if(idx ==='3'){
          this.$router.push({path:'/join'});
        }
        else if(idx ==='8'){
          this.$router.push({path:'/admin2'});
        }
      },
      handelAdmin(){
        // console.log(window.location.pathname)
        // console.log(window.location)

        if(window.location.pathname === '/admin2' || window.location.pathname === '/admin'){
          this.admin = true
        }
        else{
          this.admin = false
        }
      }
    }
  }

</script>
<style>
/* @import './assets/css/mystyle1.css'; */

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  /* text-align: center; */
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
ul{
    list-style-type: none;
}
a{
    text-decoration: none;
    /* color: black; */
}
table{
    width: 100%;
    /* height: 60%; */
    border-collapse: collapse;
}
tbody{
    text-align: center;
}

/* .container{
    width: 800px;
    padding: 100px;
    border: 5px solid purple;
}  */

.lbl1{
    background-color: rgb(226, 226, 226);
    width: 150px;
    display: inline-block;
}

.mydiv2{
    margin: 10px 0;
}
.contaimer1{/* div class ="container" */
    width: 100%;
}
header{/* <header> */
    background-color: gray;
    color: white;
    padding: 20px;
    text-align: center;
}
nav{
    float: left;
    width: 20%;
    height: 500px;
    background-color: rgb(69, 119, 128);
    padding: 20px;
}
article{
    float: left;
    width: 70%;
    background-color: rgb(112, 112, 60);
    height: 500px;
    text-align: center;
    padding: 20px;
}
</style>