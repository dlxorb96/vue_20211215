<template>
    <div>
        <div class="container">
            <h3>로그인</h3>
            <hr />

            <label>아이디</label>
            <input type="text" ref="userid" v-model="userid" placeholder="아이디"/>
            <br />
            <label>암호</label>
            <input type="password" v-model="userpw" ref="userpw" placeholder="암호" />
            <br />
            <label></label>
            <input type="button" value="로그인" @click="handleLogin"/>
            <input type="button" value="회원가입" />
        </div>
        

    </div>
</template>

<script>
    export default {
        //메소드 == 함수 == 기능 구현
        methods:{
            handleLogin(){
                if(this.userid ===''){
                    this.$refs.userid.focus();
                    console.log(this)
                    alert('아이디를 입력하세요.');
                    return false;
                }
                else if(this.userpw ===''){
                    this.$refs.userpw.focus();
                    alert('암호를 입력하세요.');
                    return false;
                }
            },
           
        },

        // 상태(state 변수 설정) (자바스크립트 selector)
        data(){
            return{
                userid:'',
                userpw:'',

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
        width: 800px;
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