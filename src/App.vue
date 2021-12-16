<template>
  <div>
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
      <router-link to="/titanic">titanic</router-link>
    </div>

    <router-view></router-view>

    <hr />
    <h3>footer</h3>
</div>
</template>

<script>

export default {
}
</script>

<style>
@import 'assets/css/mystyle1.css';

</style>
