<template>
    <div>
        <h5>upload 예제</h5>
        <input v-model="userid" type="text" placeholder="아이디">
        <hr />

        <img :src= "imgsrc" style="width: 500px">
        <input type="file" @change="handleImage($event)">
        <!-- 이미지, 동영상은 v-model못 씀
        수동으로 담아야 한다 -->
        <input type="submit" value="이미지업로드">

    </div>
</template>

<script>
    // npm i axios --save
    import axios from 'axios'
    export default {
        created(){

        },
        // 상태변수(state)
        data(){
            return{
                userid:'',
                userimg: '',
                imgsrc: require('../assets/img/고양이1.jpeg'),
            }
        },
        // 메소드
        methods:{
            handleImage(e){
                console.log('Upload1.vue => handleImage', e)

                // input type = "file"은 v-model을 사용불가
                // 파일 첨부되는 시점에 메소드를 통해서 실제 파일정보를 읽어서 저장
                // this.userimg = (e.target.files[0])

                let self = this;
                if(e.target.files[0]){
                    // 파일 읽기 라이브러리
                    const reader = new FileReader();
                    // 파일 읽기 완료되는 시점
                    reader.addEventListener('load', function(e1){
                        // 여기가 완료 시점
                        console.log(e1)
                        self.imgsrc = e1.target.result
                        
                    })

                    // 파일 읽기 시작
                    reader.readAsDataURL(e.target.files[0]);

                    // 여기는 완료시점 아님
                }
                else{
                    this.imgsrc = require('../assets/img/고양이1.jpeg')
                }
            },

            async handleSend(){
                const url = "백엔드의 주소로 이미지 첨부"
                // const headers = {"Content-Type": "application/json"}/* "백엔드한테 어떤 타입으로 보낼거다 정의하는거" */
                // const response = await axios.get(url,headers)
                // console.log(response)
                // 위에는 get일 때
                // 아래는 put일 때
                const headers = {"Content-Type" : "multipart/form-data"};
                // 보내는 데이터
                const body = new FormData();
                body.append("uid", this.userid);
                body.append("img", this.userimg);

                // 파일첨부는 post로 보냄
                const response = await axios.post(url, body,{headers:headers})
                console.log(response)
            }
        },

    }
</script>

<style scoped>

</style>