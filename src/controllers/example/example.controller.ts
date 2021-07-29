import { Controller, UseInterceptors } from "@nestjs/common";
import { GetExampleService } from "../../service/example";
import { GuardExample } from "./example.controller.guard";

@Controller("")
@UseInterceptors()
export class ExampleController {
  constructor(private readonly getExampleService: GetExampleService, private guard: GuardExample) {}
}
