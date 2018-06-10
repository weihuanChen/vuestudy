<template>
</template>

<script>
	Vue.component('button-counter',{
			data:function(){
				return{
					count:0
				}
			},
			template:'<button v-on:click="count++">你点击了{{count}}次</button>'
		})
</script>

<style>
</style>