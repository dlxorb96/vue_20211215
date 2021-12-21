<template>
    <div>
        <h4>이미지 여러개 첨부</h4>
        <!-- <input type="file" multiple /> -->
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이미지</th>
                    <th>상품명</th>
                    <th>가격</th>
                    <th>판매수량</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tmp,idx) in count" :key="tmp">
                    <td>{{tmp}}</td>
                    <td>
                        <input type="file" ref= 'file' @change="handleImg($event, idx)" style="display: none;">
                        <img :src="product.imgsrc[(idx)]" @click="handleFile(idx)"
                        style="width: 50px; cursor: pointer;">
                    </td>
                    <td><input v-model="product.name[idx]" type="text" placeholder="상품명"></td>
                    <td><input v-model="product.name[idx]" type="text" placeholder="상품명"></td>
                    <td><input v-model="product.price[idx]" type="text" placeholder="가격"></td>
                    <td><input v-model="product.quantity[idx]" type="text" placeholder="판매수량"></td>
                </tr>
                <input type="button" value="추가" @click="add">
                <input type="button" value="삭제" @click="del">
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {

        created(){
            for(let i =0; i< this.count; i++){
                this.product.imgsrc.push(require('../../assets/img/고양이1.jpeg'))
            }
        },
        mounted(){

        },
        data(){
            return{
                // 항목의 개수 기본값: 3
                count: 3,

                product:{
                    // default 기본 값
                    imgsrc : [],

                    // v-model로 연결
                    name: [],
                    price: [],
                    quantity: [],
                },
                // test: []
                
            }
        },
        methods:{
            handleFile(idx){
                console.log(idx);
                this.$refs.file[idx].click()
            },
            handleImg(e,idx){
                console.log(e, idx);
                let self = this;
                if(e.target.files[0]){
                    // 파일 읽기 라이브러리
                    const reader = new FileReader();
                    // 파일 읽기 완료되는 시점
                    reader.addEventListener('load', function(e1){
                        // 여기가 완료 시점
                        console.log(e1)
                        self.product.imgsrc[idx] = e1.target.result
                        
                    })

                    // 파일 읽기 시작
                    reader.readAsDataURL(e.target.files[0]);

                    // 여기는 완료시점 아님
                }
                else{
                    self.product.imgsrc[idx] = require('../../assets/img/고양이1.jpeg')
                }
            },
            add(){
                this.count++
                this.product.imgsrc.push(require(`../../assets/img/고양이1.jpeg`))
            },
            del(){
                this.count--
                this.product.imgsrc.pop()

            }
        }
    }
</script>

<style scoped>

</style>