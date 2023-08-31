
<script setup>
import { ref } from 'vue';
import { uid } from 'uid';
import TodoCreator from '../components/TodoCreator.vue';
import TodoItem from '../components/TodoItem.vue';
import { Icon } from '@iconify/vue';

const todoList = ref([]);

const createTodo = (todo) => {
  todoList.value.push({
    id: uid(),
    todo,
    isCompleted: false,
  });
};

const updateTodo = (index, updatedTodo) => {
  todoList.value[index].todo = updatedTodo;
};

const deleteTodo = (index) => {
  todoList.value.splice(index, 1);
};
</script>


<template>



      <TodoCreator @create-to-do="createTodo" />

  <p v-if="todoList.length < 1" class="todo-msg">
    <Icon
      icon="noto-v1:sad-but-relieved-face"
      color="#074a41"
      width="22"
    />
    <span>You have no todos! Add one!</span>
  </p>
  <div class="todocontainer">
  <TodoItem
  v-for="(todo, index) in todoList"
  :todo="todo"
  :key="todo.id"
  @update-todo="updateTodo(index, $event)"
  @delete-todo="deleteTodo(index)"
/>
</div>
</template>



<style scoped>
.todocontainer {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: 1rem;
  max-width: 1100px;
  justify-content: center;
  flex-wrap: nowrap;
  margin-top: 3rem;
}

.todo-msg {
  display: flex;
  text-align:center;
  align-items: center;
  gap: 0.2rem;
  margin-top: 1.2rem;
  justify-content: center;
}
</style>


