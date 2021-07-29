import { Module } from "@nestjs/common";
import { ExampleModule } from "../../service/example";
import { ExampleController } from "./example.controller";
import { GuardExample } from "./example.controller.guard";

@Module({
  controllers: [ExampleController],
  imports: [ExampleModule],
  providers: [GuardExample],
})
export class ExampleControllerModule {}
