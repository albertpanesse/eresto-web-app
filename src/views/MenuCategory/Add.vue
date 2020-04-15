<template>
	<div class="add-menu-category-wrapper">
		<div class="card">
			<div class="card-header">
				<h4>Add Menu Category</h4>
			</div>
			<div class="card-body">
				<form>
					<div class="form-group">
						<label for="exampleInputEmail1">Menu Category Name</label>
						<input type="text" class="form-control" id="name" v-model="name">
					</div>
				</form>
			</div>
			<div class="card-footer">
				<button type="button" class="btn btn-primary" v-on:click="submit">Submit</button>
			</div>
		</div>		
	</div>
</template>

<script>
import { MenuCategoryServices } from '@/services'

export default {
	name: 'add-menu-category',
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
						this.$router.push('/menu-category/list')
					}
				})
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
