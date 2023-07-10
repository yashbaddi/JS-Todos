<script>
  import { deleteTodo, updateTodo } from "../crud";
  import { todos } from "../store/todo";
  import Priority from "./Priority.svelte";

  export let showEditForm = false;
  export let data = {};
  async function onFormSubmit() {
    await updateTodo(todos, data);
    showEditForm = false;
  }
  async function onTodoDelete() {
    await deleteTodo(todos, data._id);
    showEditForm = false;
  }
</script>

{#if showEditForm}
  <div class="todo-form">
    <input type="text" bind:value={data.title} />
    <input type="date" name="" id="" bind:value={data.date} />
    <Priority bind:priorityValue={data.priority} />
    <textarea id="" cols="30" rows="10" bind:value={data.description} />

    <button on:click={onTodoDelete}>Delete</button>
    <button type="submit" on:click={onFormSubmit}>submit</button>
  </div>
{/if}

<style>
</style>
