# CSS3 Quick Cheatsheet 🍃

## Common Layout

```css
.wrapper {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}
```

## Responsive Pattern

```css
@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }
}
```

## Good Habits

- Use `box-sizing: border-box;`
- Use a spacing scale (8, 12, 16, 24...)
- Keep color tokens in `:root` custom properties
