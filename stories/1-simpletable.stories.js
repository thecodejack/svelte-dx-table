import { action } from "@storybook/addon-actions";
import Table from "../src";
import data from "./data";

import intro from "./../README.md";

export default {
  title: "Examples",
  parameters: {
    notes: { Introduction: intro },
  },
};

export const Basictable = () => ({
  Component: Table,
  props: {
    data: data,
  },
});

export const BasictableWith1ColumnIgnoredFromKeys = () => ({
  Component: Table,
  props: {
    data: data,
    ignoreKeys: ["dob"],
  },
});

export const BasictableWith1ColumnConfigAdded = () => ({
  Component: Table,
  props: {
    data: data,
    columns: {
      dob: {
        key: "dob",
        formatter: (val) => {
          return new Intl.DateTimeFormat("en-US").format(new Date(val));
        },
      },
    },
  },
});

export const TableWithConfiguredKeys = () => ({
  Component: Table,
  props: {
    data: data,
    keys: ["name", "gender", "age", "email"],
  },
});
