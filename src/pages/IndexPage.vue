<template>
  <q-page class="main-container">
    <div class="column justify-center q-pt-xl inputs-container">
      <q-input
        standout="bg-deep-purple text-white"
        v-model="newTaskTitle"
        label="Titulo da nova tarefa"
        label-color="white"
        class="q-mb-md"
        :dense="dense"
      />
      <!-- @keydown.enter.prevent="createTask" Identica inter no input-->
      <q-input
        standout="bg-deep-purple text-white"
        v-model="newTaskDescription"
        label="Descrição da nova tarefa"
        label-color="white"
        class="q-mb-md"
        :dense="dense"
      />
      <q-btn
        rounded
        class="btn-submit"
        color="deep-purple"
        label="Adicionar nova tarefa"
        @click="createTask"
        :disable="!newTaskDescription || !newTaskTitle"
      />
    </div>

    <div class="row justify-center q-mt-xl">
      <q-list dark bordered class="col-8 list">
        <q-item-label class="label" header>Em andamento</q-item-label>
        <q-item
          v-for="task in tasks"
          :key="task.id"
          class="q-my-sm q-mx-xl item-list"
          v-ripple
        >
          <q-item-section>
            <q-item-label>{{ task.title }}</q-item-label>
            <q-item-label caption lines="1">{{
              task.description
            }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn
              size="14px"
              flat
              dense
              @click="promptEditTask(task)"
              round
              icon="edit"
            />
          </q-item-section>

          <q-item-section side>
            <q-btn
              size="14px"
              flat
              dense
              @click="completeTask(task)"
              round
              icon="done"
            />
          </q-item-section>
        </q-item>

        <q-separator inset color="white" spaced="xl" />
        <q-item-label class="label" header>Finalizadas</q-item-label>

        <q-item
          v-for="task in doneTasks"
          :key="task.id"
          class="q-my-md q-mx-xl item-list"
          v-ripple
        >
          <q-item-section>
            <q-item-label>{{ task.title }}</q-item-label>
            <q-item-label caption lines="1">{{
              task.description
            }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn
              size="14px"
              flat
              dense
              @click="backTask(task)"
              round
              icon="arrow_back"
            />
          </q-item-section>

          <q-item-section side>
            <q-btn
              size="14px"
              flat
              dense
              @click="deleteTask(task)"
              round
              icon="close"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <customDialog
      v-model="showEditDialog"
      :initial-title="taskToEdit.title"
      :initial-description="taskToEdit.description"
      @submit="handleUpdateData"
      @cancel="handleCancel"
    />
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

.inputs-container {
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.btn-submit {
  width: 50%;
  align-self: center;
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
</style>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, Ref } from 'vue';
import { useQuasar } from 'quasar';
import customDialog from 'components/CustomDialog.vue';

interface TaskData {
  tasks: Task[];
  doneTasks: Task[];
  newTaskTitle: string;
  newTaskDescription: string;
}

interface Task {
  id: number;
  title: string;
  description: string;
}

export default defineComponent({
  name: 'TodoList',

  components: {
    customDialog,
  },

  methods: {
    // ... restante das suas funções ...

    promptEditTask(task: Task) {
      this.taskToEdit = task; // Defina a task que você deseja editar
      this.showEditDialog = true; // Mostre o diálogo
    },

    handleUpdateData(data: { title: string; description: string }) {
      // Aqui, data.title e data.description contêm os novos valores
      const updatedTask: Task = {
        ...this.taskToEdit,
        title: data.title,
        description: data.description,
      } as Task;
      this.updateTask(updatedTask);
      this.showEditDialog = false;
    },

    handleCancel() {
      this.showEditDialog = false;
    },
  },

  setup() {
    const quasar = useQuasar();

    const taskData: TaskData = reactive({
      tasks: [],
      doneTasks: [],
      newTaskTitle: '',
      newTaskDescription: '',
    });

    const taskToEdit: Ref<Task> = ref({
      id: 0,
      title: '',
      description: '',
    });

    function createTask() {
      const newTaskObj: Task = {
        id: Date.now(),
        title: taskData.newTaskTitle,
        description: taskData.newTaskDescription,
      };
      taskData.tasks.push(newTaskObj);
      taskData.newTaskTitle = '';
      taskData.newTaskDescription = '';
      quasar.notify({
        type: 'positive',
        message: 'Tarefa Cadastrada com sucesso!',
      });
    }

    function completeTask(task: Task) {
      taskData.doneTasks.push(task);
      const index = taskData.tasks.findIndex((t) => t.id === task.id);
      if (index > -1) {
        taskData.tasks.splice(index, 1);
      }
    }

    function backTask(task: Task) {
      taskData.tasks.push(task);
      const index = taskData.doneTasks.findIndex((t) => t.id === task.id);
      if (index > -1) {
        taskData.doneTasks.splice(index, 1);
      }
    }

    function deleteTask(task: Task) {
      quasar
        .dialog({
          title: 'Confirmação',
          message: 'Você gostaria realmente de deletar essa task?',
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          const index = taskData.doneTasks.findIndex((t) => t.id === task.id);
          if (index > -1) {
            taskData.doneTasks.splice(index, 1);
            quasar.notify({
              type: 'positive',
              message: 'Tarefa excluida com sucesso!',
            });
          }
        })
        .onCancel(() => {
          quasar.notify({
            type: 'negative',
            message: 'Tarefa não excluida!',
          });
        });
    }

    function updateTask(updatedTask: Task) {
      const index = taskData.tasks.findIndex((t) => t.id === updatedTask.id);
      if (index > -1) {
        taskData.tasks[index] = updatedTask;
      }
    }

    return {
      ...toRefs(taskData),
      dense: ref(false),
      createTask,
      completeTask,
      deleteTask,
      updateTask,
      backTask,
      taskToEdit,
      showEditDialog: ref(false),
    };
  },
});
</script>
