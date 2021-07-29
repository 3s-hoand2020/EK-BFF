import { Module } from "@nestjs/common";
import { ExampleModule } from "../../service/areas";
import { ExampleController } from "./example.controller";
import { GuardExample } from "./example.controller.guard";

@Module({
  controllers: [ExampleController],
  imports: [
    ExampleModule,
  ],
  providers: [GuardExample],
})
export class ExampleControllerModule {}
