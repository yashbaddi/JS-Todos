<script>
  import { createTodo, updateTodo } from "../curd";
  import TodoEditForm from "./TodoEditForm.svelte";
  import { todos } from "../store/todo";
  export let data = {};
  let showEdit = false;
  function showTodoForm() {
    showEdit = !showEdit;
  }
  async function handlerChecked() {
    data.checked = !data.checked;
    console.log(data);
    await createTodo(todos, data);
  }

  $: console.log(data);
</script>

<input type="checkbox" checked={data.checked} on:change={handlerChecked} />

<p>{data.title}</p>

<p>{data.date}</p>
<button on:click={showTodoForm}> Drop </button>

{#if showEdit}
  <div>
    <TodoEditForm {data} />
  </div>
{/if}
