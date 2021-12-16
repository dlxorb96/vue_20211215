<template>
    <div class="container">
		<h3>게시판 목록</h3>
		<hr />

		<table border="1">
			<thead>
				<tr>
					<th>번호</th>
					<th>아이디</th>
					<th>이름</th>
					<th>전화번호</th>
					<th>이메일</th>
				</tr>
			</thead>

			<tbody>
				<tr @click="handleBoard(tmp)" v-for="(tmp, idx) in items" v-bind:key="tmp">
					<td>{{idx+1}}</td>
					<td>{{tmp.id}}</td>
					<td>{{tmp.name}}</td>
					<td>{{tmp.tel}}</td>
					<td v-text="tmp.email"></td>
				</tr>
			</tbody>
		</table>

		<div>
			<label  v-for="(tmp) in pages" v-bind:key="tmp">
				<!-- <button v-text="tmp"></button> -->
				<button @click="handleBoard(tmp)">{{tmp}}</button>
			</label>
		</div>
	</div>
</template>

<script>
    export default {

		// 생명주기(자동으로 호출되는 역할)
		
		created(){
			// 백엔드에서 데이터를 받는 경우
			console.log('1. created')
			this.handleBoard(1); // 메소드 호출
		},
		// creatd와 mounted 사이에 화면 구현이 됨
		mounted(){
			// 화면의 변화를 주기 위해
			console.log('2. mounted')
		},
		
		
		// 상태변수(state)
        data(){
			return{
				items:[],
				pages:5,
			}
		},
		// 호출되어지는 함수, 메소드, 기능
		methods:{
			handleBoard(page){
				console.log('handleBoard', page)
				//백엔드에서 오는거
				//  [{}.{}.{}]
				this.items = [
					{id:'a', name:'홍길동', tel: '010', email: 'ㅇ@a.com'},
					{id:'b', name:'이리야', tel: '1633', email: 'ㅠ@a.com'},
					{id:'c', name:'잠아그만와', tel: '1541', email: 'ㅊ@a.com'}
				]
			}
		}
    }
</script>

<style scoped>

</style>