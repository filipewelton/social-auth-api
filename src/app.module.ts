import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { GoogleController } from './controllers/google.controller'
import { FacebookController } from "./controllers/facebook.controller";

import { GoogleStrategy } from "./strategies/google.strategy";
import { FacebookStrategy } from "./strategies/facebook.strategy";

const nodeEnv = process.env.NODE_ENV;
const envFilePath =
  nodeEnv === "development"
    ? "environments/.env.dev"
    : nodeEnv === "test"
    ? "environments/.env.test"
    : "";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
    }),
  ],
  providers: [GoogleStrategy, FacebookStrategy],
  controllers: [GoogleController, FacebookController]
})
export class AppModule {}
