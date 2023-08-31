

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['update-todo', 'delete-todo']);

const editing = ref(false);
const editedTodo = ref(props.todo.todo);

const startEditing = () => {
  editing.value = true;
};

const saveEdit = () => {
  if (editedTodo.value.trim() !== '') {
    emit('update-todo', editedTodo.value);
  }
  editing.value = false;
};

const deleteTodo = () => {
  emit('delete-todo');
};
</script>


<template>
    <div class="card">
      <div>
        <input type="checkbox" v-model="todo.isCompleted">
      </div>
      <p v-if="!editing" @click="startEditing">{{ todo.todo }}</p>
      <input v-else v-model="editedTodo" @blur="saveEdit" @keydown.enter="saveEdit" />
      <div class="todo-actions">
        <Icon
          class="icon"
          icon="ph:pencil-fill"
          color="#074a41"
          width="22"
          @click="startEditing"
        />
        <Icon
          v-if="editing"
          class="icon"
          icon="ph:check-circle"
          color="#074a41"
          width="22"
          @click="saveEdit"
        />
        <Icon
          class="icon"
          icon="ph:trash"
          color="#f95e5e"
          width="22"
          @click="deleteTodo"
        />
      </div>
    </div>
  </template>
  



  
<style scoped>
.card {
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 220px;
  background-color: aquamarine;
  color: rgb(7, 74, 65);
  padding: 1rem;
  font-size: 1.3rem;
  border-radius: 5px;
  margin-bottom: 1.2rem;
}

.todo-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 0.4s ease all;
}
</style>


