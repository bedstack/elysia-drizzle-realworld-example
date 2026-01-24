<div align='center'>

<img src="logo.png" alt="Logo for Bedstack RealWorld example" width=200>
<h1>Conduit - Bedstack RealWorld Example</h1>

[![Tests Status](https://github.com/bedstack/elysia-drizzle-realworld-example/actions/workflows/tests.yml/badge.svg?event=push&branch=main&)](https://github.com/bedstack/elysia-drizzle-realworld-example/actions/workflows/tests.yml?query=branch%3Amain+event%3Apush) [![License](https://custom-icon-badges.demolab.com/github/license/bedstack/elysia-drizzle-realworld-example?label=License&color=blue&logo=law&labelColor=0d1117)](https://github.com/bedstack/elysia-drizzle-realworld-example/blob/main/LICENSE) [![Bun](https://img.shields.io/badge/Bun-14151a?logo=bun&logoColor=fbf0df)](https://bun.com/) [![ElysiaJS](https://custom-icon-badges.demolab.com/badge/ElysiaJS-0f172b.svg?logo=elysia)](https://elysiajs.com/) [![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?logo=drizzle&logoColor=000)](https://drizzle.team/) [![Biome](https://img.shields.io/badge/Biome-24272f?logo=biome&logoColor=f6f6f9)](https://biomejs.dev/) [![Scalar](https://img.shields.io/badge/Scalar-080808?logo=scalar&logoColor=e7e7e7)](https://scalar.com/) [![Star](https://custom-icon-badges.demolab.com/github/stars/bedstack/elysia-drizzle-realworld-example?logo=star&logoColor=373737&label=Star)](https://github.com/bedstack/elysia-drizzle-realworld-example/stargazers/)

[RealWorld](https://realworld-docs.netlify.app/) example app for [Bedstack](https://bedstack.js.org/)
</div>

<br/>
<br/>
<br/>

### [Read the docs](https://bedstack.js.org/)

<br/>
<br/>

## Quickstart

1. **Install dependencies**

    ```sh
    bun i
    ```

2. **Create a `.env` file**

   ```sh
   cp .env.example .env
   ```

   Use the provided example values or replace them with your own.

3. **Ensure Docker daemon is running and start the database service**

   ```sh
   bun db:start
   ```

4. **Migrate the schema to the database**

   ```sh
   bun db:migrate
   ```

5. **Run the development server**

   ```sh
   bun dev
   ```

6. **Run the API tests**

   ```sh
   bun run test # not `bun test`!
   ```

7. **(Optional) Start the [database studio](https://orm.drizzle.team/drizzle-studio/overview)**
   ```bash
   bun db:studio
   ```


## Deploy to production

> [!TIP]
> See more info in ElysiaJS's [Deploy to production](https://elysiajs.com/patterns/deploy) pattern.

1. **Build the app**

   ```sh
   bun run build # not `bun build`!
   ```

2. **Run the server**

   ```sh
   bun preview
   ```

## Need help?

If you have questions or ideas:
- Open a [GitHub Discussion](https://github.com/bedstack/elysia-drizzle-realworld-example/discussions)
- Open an [Issue](https://github.com/bedstack/elysia-drizzle-realworld-example/issues) if you believe you found a bug

## Supporting Bedstack

If you love Bedstack, you can support the project by **starring it on GitHub**!

You are also welcome to [contribute to the project](https://github.com/bedstack/elysia-drizzle-realworld-example/blob/main/CONTRIBUTING.md) and join the wonderful people who have contributed:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://yam.codes"><img src="https://avatars.githubusercontent.com/u/2014360?v=4?s=100" width="100px;" alt="Yam C Borodetsky"/><br /><sub><b>Yam C Borodetsky</b></sub></a><br /><a href="#question-yamcodes" title="Answering Questions">💬</a> <a href="#ideas-yamcodes" title="Ideas, Planning, & Feedback">🤔</a> <a href="#doc-yamcodes" title="Documentation">📖</a> <a href="#bug-yamcodes" title="Bug reports">🐛</a> <a href="#example-yamcodes" title="Examples">💡</a> <a href="#infra-yamcodes" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#test-yamcodes" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Hajbo"><img src="https://avatars.githubusercontent.com/u/35660161?v=4?s=100" width="100px;" alt="Hajbo"/><br /><sub><b>Hajbo</b></sub></a><br /><a href="#infra-Hajbo" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#code-Hajbo" title="Code">💻</a> <a href="#design-Hajbo" title="Design">🎨</a> <a href="#ideas-Hajbo" title="Ideas, Planning, & Feedback">🤔</a> <a href="#test-Hajbo" title="Tests">⚠️</a> <a href="#question-Hajbo" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/aruaycodes"><img src="https://avatars.githubusercontent.com/u/57131628?v=4?s=100" width="100px;" alt="Aruay Berdikulova"/><br /><sub><b>Aruay Berdikulova</b></sub></a><br /><a href="#code-aruaycodes" title="Code">💻</a> <a href="#ideas-aruaycodes" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
