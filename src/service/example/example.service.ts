import { Injectable } from "@nestjs/common";
import { ConfigService } from "../config";
import {
  IQueryExample
} from "./example.service.i";

@Injectable()
export class GetExampleService implements IQueryExample {
  constructor(
    private readonly config: ConfigService,
  ) {}
}
