import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";

import { authResponseController } from "../helpers/authResponseController";

@Controller("/user/auth/facebook")
class FacebookController {
  @Get()
  @UseGuards(AuthGuard("facebook"))
  facebookAuth(@Req() res: Request) {}

  @Get("/callback")
  @UseGuards(AuthGuard("facebook"))
  facebookAuthRedirect(@Req() req: Request, @Res() res: Response) {
    return authResponseController(req, res);
  }
}

export { FacebookController };
