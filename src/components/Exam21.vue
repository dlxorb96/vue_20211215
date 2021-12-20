<template>
    <div>
        <h3 v-text="title"></h3>
        <h4>기간: {{date}}</h4>
        <table>
            <thead style>
                <tr>
                    <th>넘버</th>
                    <th>순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                    <th>누적매출액</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="tmp in items" v-bind:key="tmp">
                    <td><input type="text" v-model="tmp.rnum"></td>
                    <td><input type="text" v-model="tmp.rank"></td>
                    <td><input type="text" v-model="tmp.movieNm"></td>
                    <td><input type="text" v-model="tmp.openDt"></td>
                    <td><input type="text" v-model="tmp.salesAcc"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        created(){
            this.handleData()
        },
        data(){
            return{
                items : [],
                title : '',
                date: ''
            }
        },
        methods:{
            async handleData(){
                const url = "http://ihongss.com/json/exam21.json";
                const headers = { 'Content-type':'application/json' };
                const response = await axios.get(url, headers);
                console.log(response)
                if(response.status ===200){
                    this.date = response.data.boxOfficeResult.showRange
                    this.title = response.data.boxOfficeResult.boxofficeType
                    this.items = response.data.boxOfficeResult.dailyBoxOfficeList
                    console.log(this.items)
                }
                
            }
        }
    }
</script>

<style scoped>

</style>