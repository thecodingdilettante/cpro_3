<h1>Coding Project — Next.js “Button Counter” (React)</h1>

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

<h1>Overview</h1>

Build a small Next.js web app that renders a reusable Button Counter component. Students will scaffold a Next.js project, implement stateful React UI with accessible controls, and deploy it to GitHub.


<h1>Getting Started</h1>

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

(This project was built by using npx create-next-app@latest my-next-app, selecting YES for recommended add-ons, and cd my-next-app before using the above npm run dev.)

<h1>Checklist</h1>

<h2>Counter Component - Done</h2>
Displays the current count.

<b>Buttons:</b>
<ul><li>Increment (+1 by default)
<li>Decrement (-1 by default)
<li>Reset (sets count back to 0)</ul>

A Step input (input type="number") that sets how much to add/subtract.

<b>Props - Done</b>
<ul><li>initialCount (number, default 0)
<li>initialStep (number, default 1)</ul>

<h2>Accessibility - Done</h2>
<ul><li>Buttons have clear text labels.
<li>Count region is announced on change (aria-live="polite").</ul>

<h2>State Management - Done</h2>
<ul><li>Use useState for count and step.
<li>>Disable decrement if count - step would go below 0.</ul>

<h2>Home Page (/) - Done</h2>
<ul><li>Renders one Counter with defaults.
<li>Renders one Counter with custom props (e.g., initialCount={5}, initialStep={2}).</ul>

<h2>Quality - Done</h2>
<ul><li>No runtime errors.
<li>Clean layout and simple CSS.</ul>

<h1>Known Issues/Limitations</h1>

None identified.

