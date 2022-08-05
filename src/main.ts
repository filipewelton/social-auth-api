import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      methods: ["GET"],
      origin: "localhost",
      credentials: true,
    },
  });
  const port = parseInt(process.env.SERVER_PORT);

  await app.listen(port);
}

bootstrap();
