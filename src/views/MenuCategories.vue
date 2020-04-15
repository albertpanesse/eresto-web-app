<template>
	<div class="menus-wrapper">
		<h4>Add New Menu Category</h4>
		<hr noshade />
		<form>
			<div class="form-group">
				<label for="exampleInputEmail1">Menu Category Title</label>
				<input type="email" class="form-control" id="name" aria-describedby="emailHelp" v-model="name">
			</div>
			<button type="button" class="btn btn-primary" v-on:click="submit">Submit</button>
		</form>
	</div>
</template>

<script>
import { MenuCategoryServices } from '@/services'

export default {
	name: 'menu-categories',
	data: function() {
		return {
			name: ''
		}
	},
	methods: {
		submit() {
			const menuCategory = {
				name: this.name
			}

			MenuCategoryServices.create(menuCategory)
				.then(resp => {
					if (resp.data.success === true) {
						this.$router.push('/menu-categories')
					}
				})
		}
	}
}
</script>

<style scoped>
</style>