import { Module } from "@nestjs/common";
import { ExampleModule } from "src/service/example";
import { EnvironmentModule } from "./environment";

// -------------------------------------

@Module({
  imports: [EnvironmentModule, ExampleModule],
})
export class RestControllerModule { }
