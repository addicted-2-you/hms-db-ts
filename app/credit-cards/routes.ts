import { Router } from "express";

import { getCreditCards } from "./controllers";

const creditCardsRouter = Router();

creditCardsRouter.get("/", getCreditCards);

export default creditCardsRouter;
