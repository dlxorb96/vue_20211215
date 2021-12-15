<template>
    <div>
        <h3>form 실습하기</h3>
        <hr />
        <input type="checkbox" v-model="chk1" />약관동의
        <br />
        <p v-text="chk1"></p>
        <hr />
        <input type="checkbox" value="html" v-model="chk2">html
        <input type="checkbox" value="css" v-model="chk2">css
        <input type="checkbox" value="js" v-model="chk2">js
        <input type="checkbox" value="vue" v-model="chk2">vue
        <p v-text="chk2"></p>
        <hr />
        <select v-model="sel1">
            <option disabled>선택</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <p v-text="sel1"></p>

        <select v-model="sel2" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <p v-text="sel2"></p>
        <input type="radio" value="1" v-model="ra1">남
        <input type="radio" value="2" v-model="ra1">여
        <input type="radio" value="3" v-model="ra1">여남
        <p v-text="ra1"></p>
    </div>
</template>

<script>
    export default {
        watch:{// 상태변수 값 변화 감지
                chk1:{
                    handler(e){
                        console.log(e)
                    }
                },
                chk2:{
                    handler(e){
                        console.log('chk2', e)
                    }
                },
                
            },
        data(){
            return{ // 상태변수 설정
                chk1 : true, /* 체크박스의 값은 true, false로 전환 */
                chk2 : ["html","js","js","js","js","html","js","js","js","html","js"], /* 체크박스의 값은 true, false로 전환 */
                sel1 : '선택',
                sel2 : [],
                ra1 : '',
            }
        }
    }
</script>

<style scoped>

</style>