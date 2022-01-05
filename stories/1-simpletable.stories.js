import { action } from "@storybook/addon-actions";

import BasicTable from "./views/BasicTable.svelte";
import BasicTable1 from "./views/BasicTableWith1ColumnRemoved.svelte";
import BasicTable2 from "./views/BasicTableWith1ColumnConfigAdded.svelte";
import AdDXTable1 from "./views/AdvancedImplOfTable.svelte";

import intro from "./../README.md";

export default {
  title: "Examples",
  parameters: {
    notes: { Introduction: intro },
  },
};

export const Basictable = () => ({
  Component: BasicTable,
  props: {},
});

export const BasictableWith1ColumnIgnoredFromKeys = () => ({
  Component: BasicTable1,
  props: {},
});

export const BasictableWith1ColumnConfigAdded = () => ({
  Component: BasicTable2,
  props: {},
});

export const AdvancedImplementationOfDxTable = () => ({
  Component: AdDXTable1,
  props: {},
});
