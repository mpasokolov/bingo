<template>
    <table class="tasks-list" border="1">
        <caption class="tasks-list__caption">Задачи на исполнение</caption>
        <thead class="tasks-list__header">
            <tr>
                <th>Срок</th>
                <th>Исполнитель</th>
                <th>Тип</th>
                <th>Краткое содержание</th>
                <th>Дата создания задачи</th>
            </tr>
        </thead>
        <tbody class="tasks-list__body">
            <template v-for="(task, index) in getTasks">
                <tr :key="index">
                    <td
                        :class = "[isTaskExpired(task.require_date)
                            ? 'tasks-list__date tasks-list__date_expire'
                            : 'tasks-list__date tasks-list__date_valid']"
                    >
                        {{task.require_date}}
                    </td>
                    <td>{{task.executor}}</td>
                    <td>{{getTaskTypeName(task.type_id)}}</td>
                    <td>{{task.description}}</td>
                    <td>{{task.date_create}}</td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<script>
	export default {
		props: {
			filters: Array
		},
		computed: {
            getTasks() {
				return this.$store.getters.TASKS_BY_FILTER
            }
		},
        methods: {
			getTaskTypeName: function (id) {
				return this.filters.find(filter => filter.id === id).name
			},
            isTaskExpired: function (date) {
                const now = new Date();
                const expireDate = new Date(date);
                return now.getTime() > expireDate.getTime();
			}
        }
	}
</script>

<style lang="sass">
    .tasks-list
        table-layout: auto
        width: 100%
        border-collapse: collapse
        &__caption
            color: white
            padding: 5px
            text-align: left
            background-color: cornflowerblue
        &__header
            text-align: left
        &__body
            cursor: pointer
            tr:nth-child(2n)
                background-color: whitesmoke
            tr:hover
                background-color: yellow
        &__date
            color: white
            &_expire
                background-color: red
            &_valid
                background-color: green
        td
            padding: 5px
        th
            font-weight: normal
            padding: 15px 5px
            &:first-child, &:last-child
                width: 10%
            &:nth-child(2), &:nth-child(3)
                width: 15%
</style>
