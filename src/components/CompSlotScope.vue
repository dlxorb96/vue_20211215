<template>
    <div>
        <h4>부모:CompSlotScope.vue</h4>
        <comp-5 :data ="title">
            <template #tag1="slotProps">
                <!-- 데이터가 여러개 들어오는데 그 중에 하나의 이벤트
                같은걸 사용하기 위해서 쓰는거임 특정 데이터를 
                받기 위해 =""를 쓰는거임-->
                {{slotProps.user.firstname}} <br />
                {{slotProps.user.lastname}} <br />
                <span>전달되어 표시되는 태그들</span>
                <br />
            </template>
        </comp-5>
    </div>
</template>

<script>
    // 1.import 하기
    import Comp5 from './comp/Comp5.vue';
    export default {
        //2. 컴포넌트 등록
        components:{
            'comp-5' : Comp5
        },
        data(){
            return{
                title:'제목입니다'

            }
        }
    }
</script>

<style scoped>

</style>