<template>
	<div class="list-menu-category-wrapper">
		<div class="card">
			<div class="card-header">
				<h4>Menu Categories</h4>
			</div>
			<div class="card-body">
				<table class="table table-striped table-sm">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Menu Category Name</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, i) in menuCategories" :key="item.id">
							<th scope="row">{{ i + 1 }}</th>
							<td>{{ item.name }}</td>
							<td><router-link v-bind:to="`/menu-category/edit/${item.id}`">Edit</router-link> | <a class="del-action" v-on:click="delOnClick(item.id)">Del</a></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="card-footer">
				<button class="btn btn-primary btn-sm" v-on:click="btnAddOnClick"><i class="fa fa-plus"></i> New Menu Category</button>
			</div>
		</div>
		<confirm-modal
			:show="showConfirmModal"
			v-on:confirm="onConfirm"
			v-on:cancel="onCancel"
			title="Delete Confirmation"
			message="Are you sure want to delete?"
		>
		</confirm-modal>
	</div>
</template>

<script>
import { MenuCategoryServices } from '@/services'
import { ConfirmModal } from '@/components'

export default {
	name: 'list-menu-category',
	data: function() {
		return {
			selectedId: '',
			showConfirmModal: false,
			menuCategories: []
		}
	},
	components: {
		ConfirmModal
	},
	methods: {
		btnAddOnClick() {
			this.$router.push('/menu-category/add')
		},
		delOnClick(id) {
			this.selectedId = id
			this.showConfirmModal = true
		},
		onConfirm() {
			MenuCategoryServices.delete(this.selectedId)
				.then(resp => {
					if (resp.data.success === true) {
						this.showConfirmModal = false

						this.menuCategories = this.menuCategories.filter(item => item.id !== this.selectedId)
					}
				})
		},
		onCancel() {
			this.showConfirmModal = false
		}
	},
	mounted() {
		MenuCategoryServices.many()
			.then(resp => {
				if (resp.data.success === true) {
					this.menuCategories = resp.data.data
				}
			})
	}
}
</script>

<style lang="scss" scoped>
</style>
