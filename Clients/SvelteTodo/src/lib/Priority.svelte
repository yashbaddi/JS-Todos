<script>
  const priorities = ["None", "High", "Medium", "Low"];
  export let priorityValue = "None";
</script>

<select name="todo-priority" id="Priority" bind:value={priorityValue}>
  {#each priorities as prio}
    <option value={prio}>{prio}</option>
  {/each}
</select>
