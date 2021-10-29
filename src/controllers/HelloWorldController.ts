import {Controller, Get, Post, RawBodyParams} from "@tsed/common";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello";
  }

  @Post("/")
  post(@RawBodyParams() raw: Buffer) {
    return {
      response: raw.toString("utf8")
    };
  }
}
