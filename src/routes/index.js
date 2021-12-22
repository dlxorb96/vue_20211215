import { createWebHistory, createRouter } from "vue-router";

// 1. 컴포넌트 HelloWorld
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/Login.vue';
import Join from '@/components/Join.vue';
import  Board from '@/components/Board.vue';
import  Form from '@/components/Form.vue';
import  Iris from '@/components/Iris.vue';
import  Iris1 from '@/components/Iris1.vue';
import  Exam10 from '@/components/Exam10.vue';
import  Exam21 from '@/components/Exam21.vue';
import  Admin from '@/components/Admin.vue';
import  Admin2 from '@/components/Admin2.vue';
import  Titanic from '@/components/Titanic.vue';
import  Table1 from '@/components/Table1.vue';
import  Table2 from '@/components/Table2.vue';
import  Table3 from '@/components/Table3.vue';
import  CompProp from '@/components/CompProp.vue';
import  CompSlot from '@/components/CompSlot.vue';
import  Upload1 from '@/components/Upload1.vue';
import  CompSlotScope from '@/components/CompSlotScope.vue';
import  Shop from '@/components/Shop.vue';
import  Order from '@/components/Order.vue';
import  OrderAction from '@/components/OrderAction.vue';
import  Board1 from '@/components/Board1.vue';
import  Board1One from '@/components/Board1One.vue';

// 2. URL과 함께 사용할 컴포넌트 연결
const routes = [
    // localhost:8080/
    { path:'/', name:"HelloWorld", component:HelloWorld },
    // localhost:8080/login
    { path:'/login', name:"Login", component:Login },
    // localhost:8080/join
    { path:'/join', name:"Join", component:Join },
    // localhost:8000/board
    { path:'/board', name:"Board", component:Board },
    // localhost:8000/board
    { path:'/form', name:"Form", component:Form },
    // localhost:8000/iris
    { path:'/iris', name:"Iris", component:Iris },
    // localhost:8000/iris1
    { path:'/iris1', name:"Iris1", component:Iris1 },
    // localhost:8000/exam10
    { path:'/exam10', name:"Exam10", component:Exam10 },
    // localhost:8000/exam21
    { path:'/exam21', name:"Exam21", component:Exam21 },
    // localhost:8000/admin
    { path:'/admin', name:"Admin", component:Admin },
    // localhost:8000/admin2
    { path:'/admin2', name:"Admin2", component:Admin2 },
    // localhost:8000/titanic
    { path:'/titanic', name:"Titanic", component:Titanic },
    // localhost:8000/table1
    { path:'/table1', name:"Table1", component:Table1 },
    // localhost:8000/table2
    { path:'/table2', name:"Table2", component:Table2 },
    // localhost:8000/table3
    { path:'/table3', name:"Table3", component:Table3 },
    // localhost:8000/compprop
    { path:'/compprop', name:"CompProp", component:CompProp },
    // localhost:8000/compslot
    { path:'/compslot', name:"CompSlot", component:CompSlot },
    // localhost:8000/upload
    { path:'/upload1', name:"Upload1", component:Upload1 },
    // localhost:8000/compslotscope
    { path:'/compslotscope', name:"CompSlotScope", component:CompSlotScope },
    // localhost:8000/shop
    { path:'/shop', name:"Shop", component:Shop },
    // localhost:8000/order
    { path:'/order', name:"Order", component:Order },
    // localhost:8000/orderAction
    { path:'/orderAction', name:"OrderAction", component:OrderAction },
    // localhost:8000/board1
    { path:'/board1', name:"Board1", component:Board1 },
    // localhost:8000/board1One
    { path:'/board1One', name:"Board1One", component:Board1One },
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;
