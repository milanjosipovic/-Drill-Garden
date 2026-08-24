# JavaScript Quick Cheatsheet 🪴

## DOM + Event

```js
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("clicked");
});
```

## Render Pattern

```js
const items = [];
function render() {
  // clear + rebuild UI from state
}
```

## State Update Pattern

```js
items.push({ id: Date.now(), text: "Task" });
render();
```

## Array Helpers To Practice

- `map`
- `filter`
- `find`
- `findIndex`
