<script context="module">
</script>

<script>
  import { updateTodo } from "../crud";
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
</script>

<div class="todo-card">
  <input
    class="todo-card--checkbox"
    type="checkbox"
    checked={data.checked}
    on:change={handlerChecked}
  />

  <div class="todo-card--text">
    <p class="todo-card--title">{data.title}</p>

    {#if data.date !== undefined}
      <p class="todo-card--date">{data.date}</p>
    {/if}
  </div>
  <button class="todo-card--edit" on:click={toggleTodoForm}> Edit </button>
</div>

<TodoEditForm {data} showEditForm={showEdit} />

<style>
  .todo-card {
    text-align: left;
    display: flex;
    align-self: center;
    justify-content: space-evenly;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    transition: border-color 0.25s;
  }
  .todo-card:hover {
    border-color: #646cff;
  }
  .todo-card--checkbox {
    flex-direction: row;
    margin-right: 2rem;
  }
  .todo-card--text {
    display: inline-block;
    flex-basis: 70%;
  }
  .todo-card--title {
    display: block;
  }
  .todo-card--date {
    display: block;
  }
  .todo-card--edit {
    display: inline-block;
    margin-top: 1rem;
    width: 5rem;
    height: 3rem;
  }
</style>
