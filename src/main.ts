import env from '@env';
import chalk from 'chalk';
import { Elysia } from 'elysia';
import { setupApp } from '@/app.module';

console.info(chalk.gray('Starting Conduit'));

new Elysia()
  .use(setupApp)
  .get('/', ({ redirect }) => redirect('/openapi'))
  .listen(env.PORT, ({ hostname, port }) => {
    console.info(
      `Conduit is up and running on ${chalk.blue(`http://${hostname}:${port}`)}`,
    );
  });
