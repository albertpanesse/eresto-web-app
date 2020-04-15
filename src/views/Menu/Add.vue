<template>
	<div class="add-menu-wrapper">
		<div class="card">
			<div class="card-header">
				<h4>Add Menu</h4>
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
						<image-drop-zone v-on:change="fileOnChange"></image-drop-zone>
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
import { MenuServices, FileServices } from '@/services'
import { ImageDropZone } from '@/components'

export default {
	name: 'add-menu',
	data: function() {
		return {
			name: '',
			tags: '',
			files: []
		}
	},
	components: {
		ImageDropZone
	},
	methods: {
		fileOnChange(files) {
			this.files = files
		},
		submit() {
			const formData = new FormData();
			this.files.forEach((file, i) => {
				formData.append(`image${i}`, file);
			})		

			FileServices.upload(formData)
				.then(resp => {
					if (resp.data.success === true) {
						const menu = {
							name: this.name,
							tags: this.tags,
							image: resp.data.data.filename
						}

						MenuServices.create(menu)
							.then(resp => {
								if (resp.data.success === true) {
									this.$router.push('/menu/list')
								}
							})
					}
				})
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
