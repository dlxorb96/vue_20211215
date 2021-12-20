<template>
    <div>
        <h3>CompProp예제</h3>
        <comp-1 :num1="age" :str1= "name" @addNum1="addNum1()" />
        <hr />
        <comp-1 :num1="age +20" :str1="name + '군'" />
        <hr />
        <comp-2 id="aa" :n1="age"  :s1="name + '군'" :k1="'아미'"  @subNum1 = "subNum1()"/>
        <hr />
        <comp-2/>
        <comp-3/>
    </div>
</template>

<script>
    import Comp1 from './comp/Comp1.vue';
    import Comp2 from './comp/Comp2.vue';
    import Comp1233 from './comp/Comp3.vue';
    export default {
        // 사용할 컴포넌트 등록
        components:{
            'comp-1' :Comp1,
            'comp-2' :Comp2,
            'comp-3' :Comp1233,
        },
        data(){
            return{
                name: '홍길동',
                age: 23,
            }
        },
        methods:{
            addNum1(){
                this.age ++
                console.log(1)
            },
            subNum1(){
                this.age --
            }
        }

    }
</script>

<style scoped>
#aa{
    margin: 100px;
    color: blue;
}
</style>