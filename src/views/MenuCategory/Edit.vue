<template>
	<div class="add-menu-category-wrapper">
		<h4>Edit Menu Category</h4>
		<hr noshade />
		<form>
			<div class="form-group">
				<label for="exampleInputEmail1">Menu Category Name</label>
				<input type="email" class="form-control" id="name" aria-describedby="emailHelp" v-model="name">
			</div>
			<button type="button" class="btn btn-primary" v-on:click="submit">Submit</button>
		</form>
	</div>
</template>

<script>
import { MenuCategoryServices } from '@/services'

export default {
	name: 'edit-menu-category',
	data: function() {
		return {
			id: '',
			name: ''
		}
	},
	methods: {
		submit() {
			const menuCategory = {
				id: this.id,
				name: this.name
			}

			MenuCategoryServices.update(menuCategory)
				.then(resp => {
					if (resp.data.success === true) {
						this.$router.push('/menu-category/list')
					}
				})
		}
	},
	mounted() {
		const id = this.$route.params.id

		MenuCategoryServices.one(id)
			.then(resp => {
				if (resp.data.success === true) {
					this.id = resp.data.data.id
					this.name = resp.data.data.name
				}
			})
	}
}
</script>

<style lang="scss" scoped>
</style>
