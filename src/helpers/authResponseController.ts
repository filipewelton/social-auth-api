import { Request, Response } from "express";

function authResponseController(req: Request, res: Response) {
  const { user } = req;

  if (!user) {
    res.status(404).json({
      error: "This user does not exists",
    });

    return;
  }

  res.status(200).json({
    user,
  });
}

export { authResponseController };
