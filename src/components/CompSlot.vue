<template>
    <div>
        <h3>Comp Slot 예제</h3>
        <comp-4 :name="name">
            <template v-slot:left>
                <p>왼쪽입니다.</p>
                <input type="button" value="name값이 이랴 > 랴이"
                @click="handleName()">
            </template>
            <template #right>
                <p>오른쪽입니다.</p>
            </template>
            <template #center>
                <p>중간</p>
            </template>
        </comp-4>
    </div>
</template>

<script>
    import Comp4 from './comp/Comp4.vue';
    export default {
        components:{
            'comp-4' : Comp4
        },
        data(){
            return{
                name: '이랴'
            }
        },
        methods:{
            handleName(){
                if(this.name ==='이랴'){
                    this.name ='랴이'
                }else if(this.name ==='랴이'){
                    this.name = '이랴'
                }
            }
        }
    }
</script>

<style scoped>

</style>