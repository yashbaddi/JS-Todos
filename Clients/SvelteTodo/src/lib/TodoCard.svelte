<script context="module">
</script>

<script>
  import { updateTodo } from "../curd";
  import TodoEditForm from "./TodoEditForm.svelte";
  import { todos } from "../store/todo";
  export let data = {};
  let showEdit = false;

  export function toggleTodoForm() {
    showEdit = !showEdit;
  }

  async function handlerChecked() {
    data.checked = !data.checked;
    console.log(data);
    await updateTodo(todos, data);
  }

  $: console.log(showEdit);
</script>

<input type="checkbox" checked={data.checked} on:change={handlerChecked} />

<p>{data.title}</p>

<p>{data.date}</p>
<button on:click={toggleTodoForm}> Drop </button>

<TodoEditForm {data} showEditForm={showEdit} />
