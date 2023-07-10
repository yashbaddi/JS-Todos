<script>
  import { createTodo } from "../crud.js";
  import { todos } from "../store/todo.js";
  let dataTitle;
  let dataDate;
  async function submitForm() {
    await createTodo(todos, {
      checked: false,
      title: dataTitle,
      date: dataDate,
    });
    console.log("submit works");
  }
</script>

<div class="todo-form">
  <input type="text" bind:value={dataTitle} />
  <input type="date" name="" id="" bind:value={dataDate} />
  <button type="submit" on:click={submitForm}>submit</button>
</div>
