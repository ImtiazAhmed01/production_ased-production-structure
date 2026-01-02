import { Request, Response } from "express";
import { registerUser, loginUser } from "./auth.service";

export const register = async (req: Request, res: Response) => {
    const user = await registerUser(req.body);
    res.status(201).json({ success: true, user });
};

export const login = async (req: Request, res: Response) => {
    const result = await loginUser(req.body.email, req.body.password);
    res.json({ success: true, ...result });
};
