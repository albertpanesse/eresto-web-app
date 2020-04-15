<template>
	<div class="edit-menu-wrapper">
		<div class="card">
			<div class="card-header">
				<h4>Edit Menu</h4>
			</div>
			<div class="card-body">
				<form>
					<div class="form-group">
						<label for="name">Menu Name</label>
						<input type="text" class="form-control" id="name" v-model="name">
					</div>
					<div class="form-group">
						<label for="tags">Tags</label>
						<input type="text" class="form-control" id="tags" v-model="tags">
					</div>
					<div class="form-group">
						<label for="name">Image</label>
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
import { MenuServices } from '@/services'

export default {
	name: 'edit-menu',
	data: function() {
		return {
			id: '',
			name: ''
		}
	},
	methods: {
		submit() {
			const menu = {
				id: this.id,
				name: this.name
			}

			MenuServices.update(menu)
				.then(resp => {
					if (resp.data.success === true) {
						this.$router.push('/menu/list')
					}
				})
		}
	},
	mounted() {
		const id = this.$route.params.id

		MenuServices.one(id)
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
