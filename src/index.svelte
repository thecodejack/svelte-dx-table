<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { snakeCaseToTitleSentence, compare } from "./utils";

  //props
  export let data = [];
  export let columns = {};
  export let keys = [];
  export let ignoreKeys = [];
  export let tableClass = "";
  export let sortKey = "";
  export let sortType = "normal"; // or "reverse"

  let derivedColumns = columns;
  let derivedData = [...data];
  let keysData = [];
  if (data.length) {
    keysData = Object.keys(data[0]);
  }
  if (keys.length) {
    keysData = [...keys];
  }

  keysData = keysData.filter((key) => {
    return !ignoreKeys.includes(key);
  });
  console.log(keysData);

  derivedColumns = keysData.map((key) => {
    const column = columns[key] || {
      key: key,
    };
    return {
      key: column.key,
      header: column.header
        ? column.header(column.key)
        : snakeCaseToTitleSentence(column.key),
      format: column.formatter || ((val) => val || "-"),
      headerClass: column.headerClass,
      sortFunction: column.sortFunction || compare,
    };
  });
  function sortData(key, sortFunction) {
    if (sortKey === key && sortType === "normal") {
      derivedData = derivedData.reverse();
      sortType = "reverse";
      return;
    }
    derivedData = derivedData.sort((a, b) => {
      const val = sortFunction(a, b, key);
      console.log(val);
      return val;
    });
    sortKey = key;
    sortType = "normal";
  }
  const dispatch = createEventDispatcher();
</script>

<table class={`${tableClass}`}>
  <tr>
    {#each derivedColumns as col}
      <th
        class:sort={sortKey === col["key"]}
        class:reverse={sortKey === col["key"] && sortType === "reverse"}
        class={`${col["headerClass"]}`}
        on:click={() => sortData(col["key"], col["sortFunction"])}
        >{col["header"]}</th
      >
    {/each}
  </tr>
  <tbody>
    {#each derivedData as item}
      <tr>
        {#each derivedColumns as col}
          <td>{col.format(item[col.key])}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
</style>
