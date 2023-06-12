<script>
  import TodoCard from "./TodoCard.svelte";
  import { todos } from "../store/todo";
  import { getAllTodos } from "../curd";
  let todosData;

  async function getData() {
    await getAllTodos(todos);
    todosData = $todos;
    return todosData;
  }
  $: todosData = $todos;
  $: console.log(todosData);
</script>

<div class="todo-list">
  {#await getData() then}
    {#each todosData as todo}
      <TodoCard data={todo} />
    {/each}
  {/await}
</div>
