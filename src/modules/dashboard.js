export default {
	state: {
		filter: undefined,
		tasks: []
	},
	mutations: {
		SET_TASKS: (state, payload) => {
			state.tasks = payload;
		},
		SET_FILTER: (state, payload) => {
			state.filter = payload;
		}
	},
	actions: {
		SET_FILTER: (context, payload) => {
			context.commit('SET_FILTER', payload);
		},
		GET_TASKS: (context) => {
			fetch('/data.json')
				.then((response => {
					return response.json();
				}))
				.then(result => {
					context.commit('SET_TASKS', result);
				});
		}
	},
	getters: {
		TASKS_BY_FILTER: state => {
			return state.tasks.filter(task => state.filter ? task.type_id === state.filter : true);
		},
	}
};