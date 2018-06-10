<template>
	<div class="pageContainer">
				<ul class="pagesInner">
					<li class="page">
						<span class="fa fa-chevron-left" aria-hidden="true"></span>
					</li>
					<li class="page" v-for="(item,index) in pages" :key="index">
						<span>{{item}}</span>
					</li>
					<li class="page">
						<span class="fa fa-chevron-right" aria-hidden="true"></span>
					</li>
				</ul>
			</div>
</template>

<script>
	export default{
		data (){
			
		},
		computed:{
			pages(){
				return 10;
			}
		}
	}
</script>

<style>
</style>