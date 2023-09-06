# Next.js tailwind starter

## Design Layout

https://www.figma.com/file/p3FHdjjhqirkqcH6wmM4FC/Odessa-Mafia-Club-11.08.23

## 📚 Best practices

> "Any fool can write code that a computer can understand. Good programmers
> write code that humans can understand." - Martin Fowler

- [ ] [Cheat sheet 1](https://my-js.org/docs/other/best-practices#%D1%88%D0%BF%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%BA%D0%B0-%D0%BF%D0%BE-react)
- [ ] [Cheat sheet 2](https://my-js.org/docs/other/react-philosophies)
- [ ] [Cheat sheet 3](https://alexkondov.com/tao-of-react/)

## 🥁 Getting started

1. Clone repo

```bash
git@github.com:SoftRyzen-internship/Mafia-frontend.git
```

> if you haven't access to repo - write to me in telegram
> [@LanaSvetCat](https://t.me/LanaSvetCat)

1. Recommended for use **yarn** - `yarn` or `yarn install`
2. Create file `.env.local` in the project root using `.env.local.example` as a
   template
3. `yarn dev`
4. Open `http://localhost:3000`.

## Project structure

> Attention! The project structure is not final and can be changed at any time.

**💁‍♀️ Create a components folder for each module**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```
# ✅ Good

├── layout
    ├── Header
        ├── index.ts
        ├── Header.tsx
    ├── Footer
        ├── index.ts
        ├── Footer.tsx
```

</details>

---

**💁‍♀️ Reusable css classes should be placed in the `styles` folder .**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```css
/*globals.css */

@layer components {
  .your-class {
    @apply ...;
  }
}
```

</details>

---

**💁‍♀️ Description of object structure**

<details>

<summary><b>💡 Structure: </b></summary>

<br/>

```
|-- components -> folder with reusable components
  |-- NameComponent -> folders for each component
    |-- NameComponent.tsx -> main component
    |-- index.ts -> file for re-export
|-- layout -> components that are used as a main template
|-- app -> pages and routing
|-- public -> static files
|-- styles -> global styles

<!-- You can create these folders already in work -->
|-- data -> data for the project ( from graphql, json, etc.)
|-- hooks -> custom users hooks
|-- utils -> helpers, functions, etc.
```

</details>

---

## 📚 Components API

Each component has its own API. You can find it in the component's folder. This
is a list of more common components and their API.

This is example of API for component `Title` and `Paragraph`

- ### Heading

| Prop        | Default     | Description                                     |
| ----------- | ----------- | ----------------------------------------------- |
| `tag`       | `h1`        | choose the tag of title you'd need: `h1` - `h6` |
| `children`  | `undefined` | required, any content                           |
| `className` | `undefined` | add custom or additional css class you'd need   |
| `shadow`    | `undefined` | add text as a shadow decoration of the element  |

- ### Paragraph

| Prop        | Default     | Description                                   |
| ----------- | ----------- | --------------------------------------------- |
| `content`   | `undefined` | any content                                   |
| `className` | `undefined` | add custom or additional css class you'd need |

- ### Logo

| Prop        | Default     | Description                                                                                             |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `href`      | `/`         | section id or path                                                                                      |
| `position`  | `header`    | add sizes according to logo position. Choose the position you'd need: `header`, `footer`, `mobile-menu` |
| `className` | `undefined` | add any custom styles                                                                                   |

- ### ButtonPrimary

The Primary Button has `button` tag and performs an action when clicked.

| Prop            | Default     | Description                                   |
| --------------- | ----------- | --------------------------------------------- |
| `buttonsize`    | `small`     | choose the size: `small`, `medium` or `large` |
| `disabled`      | `false`     | choose the disabled state: `false` or `true`  |
| `loading`       | `false`     | choose the loading state: `false` or `true`   |
| `children`      | `undefined` | a necessary prop. any text content            |
| `actionHandler` | `black`     | a function that is executed when clicked      |

- ### ButtonSecondary

The Secondary Button has `a` tag and performs a transition to another part of
the site when pressed.

| Prop         | Default     | Description                                 |
| ------------ | ----------- | ------------------------------------------- |
| `linkto `    | `undefined` | a necessary prop. the address of the link   |
| `buttonsize` | `medium`    | choose the size: `medium` or `large`        |
| `loading`    | `false`     | choose the loading state: `false` or `true` |
| `children`   | `undefined` | a necessary prop. any text content          |

```

```
