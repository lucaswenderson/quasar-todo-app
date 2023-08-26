<template>
  <q-page class="main-container">
    <div class="row justify-evenly q-pt-xl">
      <q-input
        standout="bg-deep-purple text-white"
        v-model="newTask"
        label="Insira uma nova tarefa"
        label-color="white"
        class="col-6"
        :dense="dense"
        @keydown.enter.prevent="createTask"
      />
      <q-btn round color="deep-purple" icon="add" @click="createTask" />
    </div>

    <div class="row justify-center q-mt-xl">
      <q-list dark bordered class="col-8 list">
        <q-item-label class="label" header>Em andamento</q-item-label>
        <q-item
          v-for="task in tasks"
          :key="task"
          class="q-my-sm q-mx-xl item-list"
          clickable
          v-ripple
        >
          <q-item-section>
            <q-item-label>{{ task }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="check" color="white" @click="completeTask(task)" />
          </q-item-section>
        </q-item>

        <q-separator inset color="white" spaced="xl" />
        <q-item-label class="label" header>Finalizadas</q-item-label>

        <q-item
          v-for="task in doneTasks"
          :key="task"
          class="q-my-md q-mx-xl item-list"
          clickable
          v-ripple
        >
          <q-item-section>
            <q-item-label>{{ task }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="close" color="white" @click="deleteTask(task)" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<style scoped>
.main-container {
  background-image: linear-gradient(
    to right top,
    #504169,
    #433365,
    #342661,
    #23195d,
    #050d59
  );
}

.label {
  color: #fff;
}

.list {
  border: 0.5px solid #fff; /* Mude para a cor desejada */
  border-radius: 4px; /* Opcional, para bordas arredondadas */
}
.item-list {
  background-color: #673bb7;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  color: white;
  transition: background-color 0.5s ease;
}
.item-list:hover {
  background-color: #a681eb; /* Uma cor um pouco mais escura para o hover. */
}
</style>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue';
import { useQuasar } from 'quasar';

interface TaskData {
  tasks: string[];
  doneTasks: string[];
  newTask: string;
}

export default defineComponent({
  name: 'TodoList',
  setup() {
    const quasar = useQuasar();

    const taskData: TaskData = reactive({
      tasks: [],
      doneTasks: [],
      newTask: '',
    });

    function createTask() {
      taskData.tasks.push(taskData.newTask);
      taskData.newTask = '';
    }

    function completeTask(task: string) {
      taskData.doneTasks.push(task);
      taskData.tasks.splice(taskData.tasks.indexOf(task), 1);
    }

    function deleteTask(task: string) {
      quasar
        .dialog({
          title: 'Confirm',
          message: 'Would you like to delete this task?',
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          taskData.doneTasks.splice(taskData.doneTasks.indexOf(task), 1);
        });
    }

    return {
      ...toRefs(taskData),
      dense: ref(true),
      createTask,
      completeTask,
      deleteTask,
    };
  },
});
</script>
