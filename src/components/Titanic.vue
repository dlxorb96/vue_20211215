<template>
    <div>
        <h3>titanic</h3>
        <h4>생존자</h4>
        <table border="1">
            <thead>
                <tr>
                    <th v-for="tmp in fields" v-bind:key="tmp">{{tmp.name}}</th>
                    <!-- <th>성별</th>
                    <th>나이</th>
                    <th>형제, 배우자 수</th>
                    <th>부모, 자식의 수</th>
                    <th>티켓 요금</th>
                    <th>탑승지</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="tmp in people.survived" v-bind:key="tmp">
                    <td>{{tmp[0]}}</td>
                    <td>{{tmp[1]}}</td>
                    <td>{{tmp[2]}}</td>
                    <td>{{tmp[3]}}</td>
                    <td>{{tmp[4]}}</td>
                    <td>{{tmp[5]}}</td>
                    <td>{{tmp[6]}}</td>
                    </tr>
            </tbody>
        </table>

        <hr />
        <h4>사망자</h4>
        <table border="1">
            <thead>
                <tr>
                    <th>티켓 클래스</th>
                    <th>성별</th>
                    <th>나이</th>
                    <th>형제, 배우자 수</th>
                    <th>부모, 자식의 수</th>
                    <th>티켓 요금</th>
                    <th>탑승지</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tmp) in people.did_not_survive" v-bind:key="tmp">
                    <td v-for="tmp1 in 7" v-bind:key="tmp1">
                        {{tmp[tmp1 -1]}}</td>
                    <!-- <td>{{tmp[0]}}</td>
                    <td>{{tmp[1]}}</td>
                    <td>{{tmp[2]}}</td>
                    <td>{{tmp[3]}}</td>
                    <td>{{tmp[4]}}</td>
                    <td>{{tmp[5]}}</td>
                    <td>{{tmp[6]}}</td> -->
                    </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        created(){
            this.handleData()
        },
        data(){
            return{
                people: [{
                    did_not_survive:[],
                    survived: []
                }],              
                fields: []
            }
        },
        methods:{
            async handleData(){    
                const url = "https://raw.githubusercontent.com/IBM/taxinomitis/master/resources/datasets/numbers/titanic.json";
                const headers = { 'Content-type':'application/json' };
                const response = await axios.get(url, headers);
                console.log(response)
                if(response.status ===200){
                    this.people.did_not_survive = response.data.data.did_not_survive
                    this.people.survived = response.data.data.survived
                    this.fields = response.data.metadata.fields
                }
            }
        }
    }
</script>

<style scoped>

</style>