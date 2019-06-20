<template>
    <ul class="nav">
        <li class="nav__point"
                v-for="filter in filters"
                :key="filter.id"
                @click="setActiveTab(filter.id)"
                :class = "{ nav__point_active: filter.id === activeFilter }"
        >
            {{filter.name}}
        </li>
    </ul>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'Navigation',
		props: {
			filters: Array
        },
		computed: mapState({
			activeFilter: state => state.dashboard.filter
		}),
		methods: {
			setActiveTab: function (id) {
				this.$store.dispatch('SET_FILTER', id);
			}
		}
	}
</script>

<style scoped lang="sass">
    .nav
        display: flex
        list-style-type: none
        cursor: pointer
        margin: 0
        padding: 0
        &__point
            padding: 4px 6px
            border-radius: 4px
            margin-right: 20px
            &_active
                background-color: green
                color: white

</style>
