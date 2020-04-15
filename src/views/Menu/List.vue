<template>
	<div class="list-menu-wrapper">
		<div class="card">
			<div class="card-header">
				<h4>Menus</h4>
			</div>
			<div class="card-body">
				<table class="table table-striped table-sm">
					<thead>
						<tr>
							<th width="5%" scope="col">#</th>
							<th width="15%" scope="col">Image</th>
							<th width="45%" scope="col">Menu Name</th>
							<th width="25%" scope="col">Tags</th>
							<th width="10%" scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, i) in menus" :key="item.id">
							<th scope="row">{{ i + 1 }}</th>
							<td><img :src="imageFile(item.image)" /></td>
							<td>{{ item.name }}</td>
							<td>{{ item.tags }}</td>
							<td><router-link v-bind:to="`/menu/edit/${item.id}`">Edit</router-link> | <a class="del-action" v-on:click="delOnClick(item.id)">Del</a></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="card-footer">
				<button class="btn btn-primary btn-sm" v-on:click="btnAddOnClick"><i class="fa fa-plus"></i> New Menu</button>
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
import { MenuServices } from '@/services'
import { ConfirmModal } from '@/components'

export default {
	name: 'list-menu',
	data: function() {
		return {
			selectedId: '',
			showConfirmModal: false,
			menus: []
		}
	},
	components: {
		ConfirmModal
	},
	methods: {
		imageFile(file) {
			return `${process.env.VUE_APP_CDN_URL}/${file}`
		},
		btnAddOnClick() {
			this.$router.push('/menu/add')
		},
		delOnClick(id) {
			this.selectedId = id
			this.showConfirmModal = true
		},
		onConfirm() {
			MenuServices.delete(this.selectedId)
				.then(resp => {
					if (resp.data.success === true) {
						this.showConfirmModal = false

						this.menus = this.menus.filter(item => item.id !== this.selectedId)
					}
				})
		},
		onCancel() {
			this.showConfirmModal = false
		}
	},
	mounted() {
		MenuServices.many()
			.then(resp => {
				if (resp.data.success === true) {
					this.menus = resp.data.data
				}
			})
	}
}
</script>

<style lang="scss" scoped>
table {
	tbody {
		tr {
			td {
				img {
					width: 100%;
				}
			}
		}
	}
}
</style>
