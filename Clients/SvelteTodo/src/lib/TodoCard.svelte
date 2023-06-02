<script>
  import TodoEditForm from "./TodoEditForm.svelte";
  export let data = {};
  let showEdit;
  function showTodoForm() {
    showEdit = !showEdit;
  }

  $: console.log(data);
</script>

<input type="checkbox" name="checkbox" id="" checked={data.checked} />

<p>{data.title}</p>

<p>{data.date}</p>
<button on:click={showTodoForm}> Drop </button>

{#if showEdit}
  <div>
    <TodoEditForm {data} />
  </div>
{/if}
