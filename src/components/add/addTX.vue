<template>
<div class="addTX">
	<div contenteditable=true class="adt_write"></div>
</div>
</template>

<script>
	export default {
		name: 'addTX',
		components:{
		},
		data () {
			return {
			}
		},
		mounted: function(){
		},
		methods: {
        }
	}
</script>

<style scoped>
.adt_write {
    background: #fff;
    box-shadow: 0 0 1px #999;
    border-radius: 0.3rem;
    text-align: left;
    font-size: 1.1rem;
    padding: 0.6rem 1rem;
    margin: 0.5rem 0.1rem;
    color: #000;
    min-height: 1.6rem;
}
</style>
