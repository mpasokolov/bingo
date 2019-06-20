<template>
    <div class="status-bar">
        <div class="status-bar__counter status-bar__counter_total">{{counters.total}}</div>
        <div class="status-bar__counter status-bar__counter_first">{{counters[1]}}</div>
        <div class="status-bar__counter status-bar__counter_second">{{counters[2]}}</div>
        <div class="status-bar__counter status-bar__counter_third">{{counters[3]}}</div>
    </div>
</template>

<script>
	export default {
		data () {
			return {
				counters: {}
			}
		},
		computed: {
			tasks() {
				return this.$store.getters.TASKS_BY_FILTER
			},
		},
		watch: {
			tasks: function () {
				this.counters = {
					total: 0,
					1: 0,
					2: 0,
					3: 0
				};

				this.tasks.forEach(task => {
					this.counters[task.status_id]++;
					this.counters.total++;
				});
			},
		},
	}
</script>

<style lang="sass">
    .status-bar
        display: flex
        &__counter
            margin-right: 5px
            padding: 4px 6px
            border-radius: 4px
            &_total
                background-color: blue
            &_first
                background-color: green
            &_second
                background-color: orange
            &_third
                background-color: red
</style>
