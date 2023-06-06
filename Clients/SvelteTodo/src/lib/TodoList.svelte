<script>
  import TodoCard from "./TodoCard.svelte";
  import { get } from "svelte/store";
  import { todos } from "../store/todo";
  import { getAllTodos } from "../curd";
  let todosData;
  todos.subscribe(() => {
    console.log("todos changed");
  });
  async function getData() {
    await getAllTodos(todos);
    todosData = $todos;
    return todosData;
  }

  $: todosData = $todos;

  $: console.log($todos);
</script>

<div class="todo-list">
  {#await getData() then}
    {#each todosData as todo}
      <TodoCard data={todo} />
    {/each}
  {/await}
</div>
