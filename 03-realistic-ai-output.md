# Setting Up a React Project with Vite

Below is a quick guide to scaffolding a new **React** application using **Vite**, along with some best practices for project structure.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js version `18` or higher
- npm, yarn, or pnpm
- A code editor such as VS Code

> **Tip:** You can check your Node version by running `node -v` in your terminal.

## Step 1: Create the Project

Run the following command to scaffold a new project:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
```

This will generate a folder structure similar to:

```
my-app/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Step 2: Project Structure Best Practices

We recommend organizing your `src/` folder as follows:

1. **Components** — reusable UI pieces
   - `Button.jsx`
   - `Card.jsx`
2. **Pages** — top-level route views
   - `Home.jsx`
   - `About.jsx`
3. **Hooks** — custom React hooks
   - `useFetch.js`
4. **Utils** — helper functions

## Step 3: Styling Options

| Approach | Setup Effort | Best For |
|---|:---:|---|
| Tailwind CSS | Low | Rapid prototyping |
| CSS Modules | Low | Component-scoped styles |
| Styled Components | Medium | Dynamic theming |
| Plain CSS | Very Low | Small projects |

We *strongly* recommend **Tailwind CSS** for most projects because of its speed and consistency.

## Step 4: Example Component

Here's a simple functional component using hooks:

```jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

## Common Pitfalls

- Forgetting to wrap state updates in the correct handler
- Mutating state directly instead of using the setter function
- ~~Using class components~~ — prefer function components with hooks
- Not memoizing expensive computations with `useMemo`

## Further Reading

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

### Summary

| Step | Description |
|---|---|
| 1 | Scaffold project with Vite |
| 2 | Organize folder structure |
| 3 | Choose a styling approach |
| 4 | Build components with hooks |

> Following these conventions will help keep your codebase clean and `maintainable` as your project grows.
