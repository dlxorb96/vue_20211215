<template>
    <div>
        <h3>관리자페이지: 컴포넌트 이용</h3>
        <h3>admin</h3>
        <input type="button"  value="menu1" @click="changeMenu(1)" >
        <input type="button"  value="menu2" @click="changeMenu(2)">
        <input type="button"  value="menu3" @click="changeMenu(3)">
        <input type="button"  value="menu4" @click="changeMenu(4)">
        <input type="button"  value="menu5" @click="changeMenu(5)">
        <!-- <menu-1  v-if="this.menu ===1"/>
        <menu-2  v-else-if="this.menu ===2"/>
        <menu-3  v-else-if="this.menu ===3"/>
        <menu-4  v-else-if="this.menu ===4"/>
        <hr /> -->
        <div>
            <!-- <h5>component 태그 사용 예제</h5> -->
            <component :is="currentComp" />
        </div>

        <!-- <div> -->
            <!-- <h5>component 추가/삭제</h5> -->
            <!-- <component v-for="item in compItems" v-bind:key="item" :is="item"></component> -->
            <!-- <input type="button" value="컴포넌트추가" @click="handleComp(1)">
            <input type="button" value="컴포넌트삭제" @click="handleComp(3)"> -->
        <!-- </div> -->
    </div>
</template>

<script>
    // 필요한 컴포넌트 가져오기
    import Menu1 from './admin/Menu1.vue'
    import Menu2 from './admin/Menu2.vue'
    import Menu3 from './admin/Menu3.vue'
    import Menu4 from './admin/Menu4.vue'
    import Menu5 from './admin/Menu5.vue'
    export default {
        // 컴포넌트 등록

        mounted(){
            
        },
        components:{
            "menu-1": Menu1,
            "menu-2": Menu2,
            "menu-3": Menu3,
            "menu-4": Menu4,
            "menu-5": Menu5,
        },
        // 상태변수
        data(){
            return{
                // compItems : ['menu-3','menu-3','menu-3'],
                // menu : 1,
                compList : [null, 'menu-1', 'menu-2', 'menu-3','menu-4', 'menu-5'],
                currentComp : 'menu-1',
            }
        },
        methods:{
            changeMenu(no){
                this.menu = no;
                this.currentComp = this.compList[no]
            },
            handleComp(no){
                if(no ===1){
                    this.compItems.push('menu-3')
                }
                else if(no ===3){
                    this.compItems.pop('menu-3')
                }
            }
        }
    }
</script>

<style scoped>

</style>