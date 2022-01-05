<script>
  import Table from "./../../src";
  import data from "./data";
</script>

<Table
  {data}
  columns={{
    dob: {
      key: "dob",
      formatter: (val) => {
        return new Intl.DateTimeFormat("en-US").format(new Date(val));
      },
    },
  }}
/>
