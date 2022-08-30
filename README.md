# Damien Monni - Javascript freelance full-stack web developer 👨‍💻

This is my personal website as a javascript full-stack web developer.
This website is about the services I provide, the skills I have and my previous experiences.

![Damien Monni website](public/img/readme-thumbnail.png)

This is a **React** and **Typescript** based website built with [Next.js](https://nextjs.org/), one of the most popular React Framework.

This website uses the following libraries:

- React
- Next.js
- Typescript
- TailwindCSS
- Storybook
- Jest
- Playwright

## Running locally in development mode

If you want to run this website locally in development mode:

1. Clone this repository to your local machine

`git clone https://github.com/damien-monni/damien-monni.git`

2. Install dependencies

```
cd damien-monni
npm install
```

3. Run the development server

`npm run dev`

You should be able to access the application locally at `http://localhost:3000`.

## Testing

Run `npm run test` to run unit and integration tests.

Tests are written using Jest and the popular [Testing Library](https://testing-library.com/).

## Continuous Integration / Continuous Deployment (CI/CD)

The way you build and deploy the website depends on your needs and is covered in the [Next.js documentation](https://nextjs.org/docs/deployment).

The following section `Example of CI/CD` describes how the CI/CD is set up for https://damien-monni.com.

### Example of CI/CD

GitHub Actions is used as the CI/CD system.
The final applicatio is hosted on Vercel.

By default, when the Vercel project is created, the project is linked to the GitHub repository and automatic CI/CD pipelines are created to build and deploy the application. To have full control over the CI/CD pipelines, the link between Vercel and GitHub is removed in the Vercel project and GitHub Actions are used to test, build and deploy the application. This way, we have full control over the CI/CD pipelines.

There is a Vercel guide explaining how this can be set up: [https://vercel.com/guides/how-can-i-use-github-actions-with-vercel](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel).

Basically, GitHub actions uses the Vercel CI to manualy build and deploy the application from GitHub to Vercel. This replaces the automatic CI/CD that Vercel uses by default, but allowing us to add custom steps in GitHub actions before the build and deploy steps are run.

The `.github/workflows` files describes the specific steps that are made.

## File structure

Source code is located in the `./src` directory.

In this directory, you will find a `pages` directory containing the website pages entry points. A special `_app.tsx` file exports a React component to initialize every page of this website ([more on this here](https://nextjs.org/docs/advanced-features/custom-app)).

All React components are located in the `./src/components` directory and groupped by feature.

## Design System

The design system represents all the reusable components you can use to maintain a consistent UI over this website and to simplify the development experience.

Those reusable components can be found in a special directory `./src/design-system`.

We use [Storybook](https://storybook.js.org/) to build and document those components. To open and browse them, run the `npm run storybook` command. This will open Storybook in your browser and you will be able to see all the Design System reusable components.

## Tailwind CSS

We use [Tailwind CSS](https://tailwindcss.com/) for styling.

Tailwind CSS is a popular utility-first CSS framework providing CSS classes to be used directly in our HTML.

Tailwind CSS does **not** provide ready to use components but only translates CSS rules from CSS files to HTML files.

Our website styling theme is defined in tailwind.config.js and `./src/styles/global.css`.

## Icons

We are using [heroicons](https://heroicons.com/) SVG icons with the [React library](https://github.com/tailwindlabs/heroicons#react) to get them as React Components.
Heroicon icons are made in two variants, solid or outline. We are using the outline variant.

## CSS classes concatenation

To improve code visiblity and maintenance, we are using the `clsx` package to concatenate class names when there are multiple CSS classe inputs to attach to a particular HTML element.

For example, if you want to attach a component internal string class and props string class to a HTML element, you can do it like so:

```javascript
export default function MyComponent(props) {
  const { className } = props;

  return <button className={clsx('font-bold', className)}>A button</button>;
}
```
