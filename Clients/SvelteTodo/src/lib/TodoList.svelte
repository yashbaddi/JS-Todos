<script>
  import TodoCard from "./TodoCard.svelte";
  import { todos } from "../store/todo";
  import { getAllTodos } from "../curd";
</script>

<div class="todo-list">
  {#await getAllTodos(todos) then todosData}
    {#each todosData as data}
      <TodoCard {data} />
    {/each}
  {/await}
</div>
