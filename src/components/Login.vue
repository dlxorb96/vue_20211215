<template>
    <div>
        <div class="container">
            <h3>로그인</h3>
            <hr />
            <el-form label-width="60px"> <!-- :inline="true" -->
             <el-form-item label="아이디">
                <el-input v-model="member.userid" ref="userid"
                style="display: inline-block; width: 200px; height: 20px;"></el-input>
            </el-form-item>
             <el-form-item label="암호">
                <el-input v-model="member.userpw" show-password ref="userpw"
                 style="display: inline-block; width: 200px;" ></el-input>
            </el-form-item>
            </el-form>
            <!-- <label>아이디</label>
            <input type="text" ref="userid" v-model="member.userid" placeholder="아이디"/>
            <br />
            <label>암호</label>
            <input type="password" v-model="member.userpw" ref="userpw" placeholder="암호" />
            <br /> -->
            <label></label>
            <el-button type="primary" @click="handleLogin()">로그인</el-button>
            <el-button type="primary" @click="handlerouter()">회원가입</el-button>
            <!-- <input type="button" value="로그인" /> -->
            <!-- <input type="button" value="회원가입" /> -->
        </div>
        

    </div>
</template>

<script>
    export default {
        //메소드 == 함수 == 기능 구현
        methods:{
            handleLogin(){
                if(this.member.userid ===''){
                    this.$refs.userid.focus();
                    console.log(this)
                    alert('아이디를 입력하세요.');
                    return false;
                }
                else if(this.member.userpw ===''){
                    this.$refs.userpw.focus();
                    alert('암호를 입력하세요.');
                    return false;
                }
            },
            handlerouter(){
                this.$router.push({path:'/join'});
            }
        },

        // 상태(state 변수 설정) (자바스크립트 selector)
        data(){
            return{
                member:{
                    userid:'',
                    userpw:'',

                }
                
            }
        },

        //상태변수의 변화를 감지
        /* watch:{
            userid:{
                handler(e){
                    console.log('watch:', e)
                }
            },
            userpw:{
                handler(e){
                    console.log('watch:', e)
                }
            }
        }, */
    }
</script>

<style scoped>
    .container{
        width: 700px;
        border: 10px solid purple;
        padding: 80px;
    }
    label{
        display: inline-block;
        width: 80px;
    }
    input{
        margin: 5px;
    }
    
</style>