<template>
    <div>
        <h4>메뉴2</h4>
        <h5>물품관리</h5>  
            <!-- <template> -->
                <el-table :data="items" style="width: 100%">
                    <el-table-column label="Id">
                        <template #default = "scope">
                            <el-input v-model="scope.row.id"  type="text" placeholder="Please input" />
                        </template>
                    </el-table-column>

                    <el-table-column  label="Name" >
                        <template #default = "scope">
                            <el-input v-model="scope.row.name"  type="text" placeholder="Please input" />
                        </template>
                    </el-table-column>


                    <el-table-column  label="Age">
                        <template #default = "scope">
                            <el-input v-model="scope.row.age"  type="text" placeholder="Please input" />
                        </template>
                    </el-table-column>

                </el-table>
            <!-- </template> -->

            <!-- <table>
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>이름</th>
                        <th>나이</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tmp in items" v-bind:key="tmp">
                        <td><input type="text" v-model="tmp.id"></td>
                        <td><input type="text" v-model="tmp.name"></td>
                        <td><input type="text" v-model="tmp.age"></td>
                    </tr>
                </tbody>
            </table> -->
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        created(){
            this.handleItem()

        },
        mounted(){
            
        },
        data(){
            return{
                items : [],
            }
        },
        methods:{
            async handleItem(){
                const url = "http://ihongss.com/json/exam13.json"
                const headers = { 'Content-type':'application/json' };
                const response = await axios.get(url, headers);
                console.log(response)
                if(response.status===200){
                    this.items = response.data.data
                    const data1 = response.data.data1
                    data1.forEach(element => {
                        this.items.push(element)                        
                    });
                    console.log(data1)
                    console.log(this.items)
                }
            },
        }
    }
</script>

<style scoped>

</style>