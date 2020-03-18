# React Bricks starter vanilla React

This starter is aimed at users of [React Bricks](https://reactbricks.com) who need to integrate it into an existing React project, instead of starting from the Gatsby or Next.js starters.

It is very useful to understand how React Bricks components, hooks and function work.

## 🚀 Quick start

To clone this project:

```bash
git clone https://github.com/reactbricks/vanilla-starter-reactbricks
```

## 📦 What's inside

This app is bootstrapped with create-react-app, with just two dependencies added:
- `@reach/router`
- `react-bricks`

The `admin` directory contains the Admin dashboard components (they are just a thin wrapper around React Bricks' exported components)

In the root directory you find two `Viewer` components to show content in your front-end:
- `Viewer` uses React Bricks' `usePage` hook to fetch the page content
- `ViewerFetch` uses React Bricks `fetchPage` function to fetch the page content

## 📖 Documentation

Please, read our documentation at [Reactbricks.com](https://reactbricks.com/docs).
