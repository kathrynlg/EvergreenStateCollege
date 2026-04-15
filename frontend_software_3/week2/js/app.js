const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: "",
            tasks: []
        };
    },

    mounted() {
        const saved = localStorage.getItem("tasks");

        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                this.tasks = Array.isArray(parsed) ? parsed : [];
            } catch (e) {
                this.tasks = [];
            }
        }
    },

    watch: {
        tasks: {
            handler(newTasks) {
                localStorage.setItem("tasks", JSON.stringify(newTasks));
            },
            deep: true
        }
    },

    methods: {
        addTask() {
            if (this.newTask.trim() === "") return;

            this.tasks.push({
                text: this.newTask,
                done: false
            });

            this.newTask = "";
        },

        removeTask(index) {
            this.tasks.splice(index, 1);
        },

        toggleTask(index) {
            this.tasks[index].done = !this.tasks[index].done;
        }
    }
}).mount("#app");