# svelte-dx-table

[![NPM](https://img.shields.io/npm/v/svelte-dx-table.svg)](https://www.npmjs.com/package/svelte-dx-table)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/svelte-dx-table.svg)](https://www.npmjs.com/package/svelte-dx-table)

Simple dev friendly Svelte component for building a HTML Table with basic features like sorting by default. Generated component is a raw HTML one which has classes to apply styling as well.

You can generate table by just passing array of objects as following.

```svelte
<SimpleTable data={data} />
```

> Note: `svelte-dx-table` is for simplicity as of now. It is more of making a table out of array of objects instead spending time on building config to render a simple table. If you are looking for advanced features, would recommend to check [svelte-table](https://github.com/dasDaniel/svelte-table)

You can also provide `ignoreKeys` incase you want to ignore from default.

```svelte
<Table {data} ignoreKeys={["dob"]} />
```

Columns config(via `columns` prop) is not a array of objects instead it will be map, which can make you add config for a necessary columns only. Check example

```svelte
<Table {data} columns={{
      dob: {
        key: "dob",
        formatter: (val) => {
          return new Intl.DateTimeFormat("en-US").format(new Date(val));
        }
      }
    }}/>
```

> Note that `key` inside column config is mandatory.

If incase, you want to specify order of columns, you can use `keys` prop in which you can provide `keys` of row object in the order you want.

```svelte
<Table {data} keys={["name", "gender","age", "email"]} />
```

## Demo

[Click here for Storybook link](https://svelte-dx-table.netlify.app/)

Implementation for stories: https://github.com/thecodejack/svelte-dx-table/tree/main/stories/views

## Installation

```
npm install svelte-dx-table

or

yarn add svelte-dx-table
```

## API

### Props

| Prop Name  | mandatory | Description                                                                                       | Default Value |
| ---------- | --------- | ------------------------------------------------------------------------------------------------- | ------------- |
| data       | yes       | rows of data that needs to be passed                                                              | []            |
| columns    |           | column config for necessary columns as a map. Refer following for more info available properties. | {}            |
| keys       |           | keys of array of objects(data) that needs to be rendered                                          | []            |
| ignoreKeys |           | ignore keys of object that shouldn't be rendered                                                  | []            |
| tableClass |           | class that needs to be added as part of Table                                                     | ""            |
| sortKey    |           | column/object key on which sort needs to be applied                                               | ""            |
| sortType   |           | "normal" or "reverse"                                                                             | "normal"      |

### keys of column config

| key Name     | Description                | definition                                       |
| ------------ | -------------------------- | ------------------------------------------------ |
| key          | key of objects in the data | mandatory field if added in column config        |
| header       |                            | `(key) => string`                                |
| format       |                            | `(val) => string`                                |
| headerClass  | string                     | ""                                               |
| sortFunction | compare function           | `(firstValue, SecondValue, key) => 1 or -1 or 0` |

As informed previously columns prop is a map. Check columns prop of following a reference

```svelte
<Table {data} columns={{
  dob: {
    key: "dob",
    formatter: (val) => {
      return new Intl.DateTimeFormat("en-US").format(new Date(val));
    },
  },
  age: {
    key: "age",
    formatter: (val) => {
      return `${val} years`;
    },
  }
}}/>

```

### Development

```
npm install
npm run storybook
```

## License

MIT
