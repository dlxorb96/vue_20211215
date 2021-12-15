<template>
    <div class="container">
        <h2>회원가입</h2>
        <hr />
        <div class="mydiv2">
            <label class="lbl1">아이디</label>
            <input ref="userid" type="text" placeholder="아이디" id="userId" v-model="userid"/>
            <input type="button" value="중복확인" id="btnIdCheck"/>
        </div>
        <hr style="margin: 0;" />
        <div class="mydiv2">
            <label class="lbl1">비밀번호</label>
            <input ref="userpw" v-model="userpw" type="password" placeholder="비밀번호" id="userPw" />
        </div>
        <hr />
        <div class="mydiv2">
            <label class="lbl1">비밀번호 확인</label>
            <input ref="userpwchk" v-model="userpwchk" type="password" placeholder="비밀번호" id="userPwCheck"/>
        </div>
        <hr />
        <div class="mydiv2">
            <label class="lbl1">이름</label>
            <input ref="name" v-model="name" type="text" placeholder="홍길동" id="userName" />
        </div>
        <hr />
        
        <div class="mydiv2">
            <label class="lbl1">이메일</label>
            <input ref="email" v-model="email" type="text" placeholder="이메일" id="userEmail"/>
            <label>@</label>
            <select>
                <option>naver.com</option>
                <option>gmail.com</option>
                <option>daum.net</option>
            </select>
        </div>
        <hr />
        <div class="mydiv2">
            <label class="lbl1">전화번호</label>
            <input ref="tel" v-model="tel" type="text" placeholder="000-0000-0000" id="userPhoneNumber" />
        </div>
        <hr />
        <div class="mydiv2">
            <label class="lbl1"></label>
            <input ref="chk" v-model="chk" type="checkbox" id="checkBox"/>
            <label>약관동의</label>
        </div>    
        <div class="mydiv2">
            <label class="lbl1"></label>
            <input @click="join" type="button"  value="회원가입" id="loginBtn"/>
            <a href="login.html">
                <input type="button"  value="로그인"/>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            join(){
                 if(this.userid ===''){
                    alert('아이디를 입력하세요.')
                    this.$refs.userid.focus();
                    return false;
                 }
                 if(this.userpw ===''){
                     alert('암호를 입력하세요.');
                     this.$refs.userpw.focus();
                     return false;
                 }
                 if(this.userpwchk ===''){
                     alert('암호를 입력하세요.');
                     this.$refs.userpwchk.focus();
                     return false;
                 }
                 if(this.userpw !== this.userpwchk){
                     alert('암호가 다릅니다.');
                     this.$refs.userpwchk.focus();
                     return false;
                 }
                if(this.name ===""){
                    alert('이름을 입력하세요.');
                    this.$refs.name.focus();
                    return false;
                }
                if(this.email === ""){
                    alert('이메일을 입력하세요');
                    this.$refs.email.focus();
                    return false
                }
                if(this.tel === ""){
                    alert('전화번호를 입력하세요');
                    this.$refs.tel.focus();
                    return false
                }
                if(this.chk === ''){
                    alert('약관동의를 체크해주세요');
                    return false
                }
            }
        },
        data(){
            return{
                userid: '',
                userpw: '',
                userpwchk : '',
                name: '',
                email: '',
                tel: '',
                chk: ''
            }
        }
    }
</script>

<style>
/* <style scoped src="../assets/css/mystyle1.css"> */

</style>