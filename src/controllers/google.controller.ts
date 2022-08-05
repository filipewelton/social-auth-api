import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";

import { authResponseController } from "../helpers/authResponseController";

@Controller("/user/auth/google")
class GoogleController {
  @Get()
  @UseGuards(AuthGuard("google"))
  googleAuth(@Req() req: Request) {}

  @Get("/callback")
  @UseGuards(AuthGuard("google"))
  googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    return authResponseController(req, res)
  }
}

export { GoogleController };
