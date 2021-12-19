<template>
    <div>
        <h3>Iris실습</h3>
        <table border="1">
            <thead>
                <tr style="background-color : yellow;">
                    <th>번호</th>
                    <th>꽃받침 길이</th>
                    <th>꽃받침 너비</th>
                    <th>꽃잎 길이</th>
                    <th>꽃잎 너비</th>
                    <th>꽃의 종류</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tmp,idx) in items" v-bind:key = "tmp">
                    <td>{{idx+1}}</td>
                    <td>
                        
                        <router-link :to="{
                            path:'/iris1',
                            query:{no:(idx+1), key:'asd', name:'dfs'}
                             }">{{tmp.sepalLength}}
                        </router-link>
                    </td>
                    <td>{{tmp.sepalWidth}}</td>
                    <td>{{tmp.petalLength}}</td>
                    <td>{{tmp.petalWidth}}</td>
                    <td>{{tmp.species}}</td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        created(){ //생명주기 life cycle
            this.handleIris()
        },

        data(){ //상태변수 state변수
            return{
                items: []
            }
        },
        methods:{ //메소드(함수)
            async handleIris(){
                // 백엔드의 서버 주소
                const url = 'https://raw.githubusercontent.com/domoritz/maps/master/data/iris.json'
                // 호출하는 데이터의 종류가 json 헤드 정의
                const headers = { 'Content-type':'application/json' };

                const response = await axios.get(url, headers);
                console.log(response)
                if(response.status ===200){
                    this.items = response.data;
                    console.log(this.items[0])
                }
            }
        }
    }
</script>

<style scoped>

</style>
