import { Module } from "@nestjs/common";
import { ConfigServiceModule } from "../config";
import { GetExampleService } from "./example.service";

@Module({
  providers: [GetExampleService],
  imports: [ConfigServiceModule],
  exports: [GetExampleService],
})
export class ExampleModule {}
