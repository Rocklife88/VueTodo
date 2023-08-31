<template>

    <button> 
        <slot>Create</slot>
    </button>
</template>

<style scoped>
button {
  
    background-color:rgb(69, 186, 186);
      border: none;
      border-radius: 4px;
      padding: 1rem 2rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
  
    }
    
    button:hover {
      background-color: #6eb8b5;
    }
</style>