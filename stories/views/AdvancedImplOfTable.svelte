<script>
  import Table from "./../../src";
  import data from "./data";
</script>

<Table
  {data}
  tableClass="table"
  columns={{
    dob: {
      key: "dob",
      formatter: (val) => {
        return new Intl.DateTimeFormat("en-US").format(new Date(val));
      },
    },
  }}
/>

<style>
  :global(table.table) {
    font-size: 16px;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }

  :global(.table td),
  :global(.table th) {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  :global(.table tr:nth-child(even)) {
    background-color: #f2f2f2;
  }

  :global(.table th) {
    padding-top: 11px;
    padding-bottom: 11px;
    background-color: #04aa6d;
    color: white;
  }

  :global(.sort::after) {
    border: solid white;
    border-width: 0 3px 3px 0;
    content: "";
    display: inline-block;
    padding: 3px;
    margin-bottom: 3px;
    margin-left: 5px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  :global(.reverse::after) {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    margin-bottom: 0px;
  }
</style>
