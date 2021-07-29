import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RestControllerModule } from "./controllers/rest-controller.module";
import { ConfigServiceModule } from "./service/config";



@Module({
  imports: [
    ConfigModule.forRoot(),
    ConfigServiceModule,
    RestControllerModule,
  ],
})
export class AppModule { }
