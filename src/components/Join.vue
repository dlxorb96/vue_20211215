<template>
    <div class="container">
        <h2>회원가입</h2>
        <hr />

        <el-form label-width="150px"> <!-- :inline="true" -->
             <el-form-item label="아이디">
                <el-input placeholder="아이디" v-model="userid" ref="userid"
                style="display: inline-block; width: 200px; height: 20px;"></el-input>
            </el-form-item>

             <el-form-item label="암호">
                <el-input placeholder="암호" v-model="userpw" show-password ref="userpw"
                 style="display: inline-block; width: 200px; height: 10px" ></el-input>
            </el-form-item>

            <el-form-item label="암호 확인">
                <el-input placeholder="암호 확인" v-model="userpwchk" show-password ref="userpwchk"
                 style="display: inline-block; width: 200px; height: 10px" ></el-input>
            </el-form-item>

            <el-form-item label="이름">
                <el-input placeholder="이름" v-model="name"  ref="name"
                 style="display: inline-block; width: 200px; height: 10px" ></el-input>
            </el-form-item>

            <el-form-item label="이메일">
                <el-input placeholder="a@gamil.com" v-model="email" ref="email"
                 style="display: inline-block; width: 200px; height: 10px" ></el-input>

                 <label>@</label>
                   <el-select v-model="value" placeholder="Select">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        >
                        </el-option>
                    </el-select>
            </el-form-item>

            <el-form-item style="margin-bottom: 0;" label="전화번호">
                <el-input placeholder="010-0000-0000" v-model="tel" ref="tel"
                 style="display: inline-block; width: 200px; height: 10px" ></el-input>
            </el-form-item>

            <el-form-item label="">
                <el-checkbox v-model="chk" label="약관동의"></el-checkbox>
            </el-form-item>

            <el-form-item label="">
                <el-button type="primary" @click="join()">회원가입</el-button>
                <el-button type="primary">로그인</el-button>
            </el-form-item>
        </el-form>




        <!-- <div class="mydiv2">
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
        </div> -->
    </div>
</template>

<script>
    export default ({
        data(){
            return{
                userid: '',
                userpw: '',
                userpwchk : '',
                name: '',
                email: '',
                tel: '',
                chk: false,
                options:[
                {
                value: 'Option1',
                label: 'gamil.com',
                },
                {
                value: 'Option2',
                label: 'naver.com',
                },
                {
                value: 'Option3',
                label: 'hanmail.net',
                },],       
                value: '',
            }},
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
                if(this.chk === false){
                    alert('약관동의를 체크해주세요');
                    return true
                }
            }
        }
        

    })
    
</script>

<style>
/* <style scoped src="../assets/css/mystyle1.css"> */

</style>