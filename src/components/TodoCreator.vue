
<script setup>
import {ref, reactive} from 'vue'
const emit = defineEmits(['create-to-do'])
import TodoButton from './TodoButton.vue';

const todoState = reactive({
    todo:"",
    invalid: null,
    errMsg: "",

});

const createTodo = () => {
    todoState.invalid = null;
    if(todoState.todo !== ""){
        emit("create-to-do", todoState.todo );
        todoState.todo = ""
        return;
    }
    todoState.invalid = true;
    todoState.errMsg= "todo value cannot be empty"

};




</script>




<template>

   
    <div class="input-container">
        <h1>Create to do</h1>
        <div>
      <input v-model="todoState.todo"  class="custom-input" placeholder="Inserisci qualcosa..." />
<TodoButton @click="createTodo()"/>
      <p v-if="todoState.invalid" class="err-msg">{{ todoState.errMsg }}</p>
      
        </div>

        </div>
     



 


</template>


<style scoped>
h1{
    text-align:center;
    margin-bottom:1.8rem;
    text-transform: uppercase;
  }

  .err-msg {
    margin-top: 0.2rem;
    width:200px;
    color: rgb(116, 19, 19);
    font-size: 0.8rem;
}
  
  .input-container {
    display: flex;
    flex-direction:column;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    gap:0.3rem;
    overflow:hidden;
    margin-top:7rem;
    

  
  }

  .input-container:focus-within{
    box-shadow: 0 -4px 6px -1px rgb(0 0 0 /0.1), 0 -2px 4px -2px rgb(000/0.1)
  }

 
  
  .custom-input{
    flex: 0.4;
    width:350px;
    max-width:500px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    padding:1rem;
    border-radius: 4px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  

  
  
  .card-container{
    margin-top:3rem;
  }
</style>