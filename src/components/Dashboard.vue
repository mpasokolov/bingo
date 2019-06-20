<template>
    <div class="dashboard">
        <div class="dashboard__header">
            <Navigation :filters="filters"/>
            <StatusBar/>
        </div>
        <div class="dashboard__content">
            <TasksList :filters="filters"/>
        </div>
    </div>
</template>

<script>
	import Navigation from './Navigation.vue'
	import TasksList from './TasksList.vue'
	import StatusBar from './StatusBar.vue'

	export default {
		name: 'Dashboard',
		components: {
			Navigation,
			TasksList,
			StatusBar
		},
		data () {
			return {
				filters: [
					{id: undefined, name: 'Все задачи'},
					{id: 1, name: 'Провести проверку'},
					{id: 2, name: 'Контроль исполнения'},
					{id: 3, name: 'Поручение'}
				],
			}
		},
		mounted() {
			this.$store.dispatch('GET_TASKS');
		},
	}
</script>

<style lang="sass">
    .dashboard
        display: flex
        flex-direction: column
        &__header
            display: flex
            justify-content: space-between
            margin-bottom: 20px
</style>
