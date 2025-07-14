import { Router } from "express";
import * as ControllerPlayers from "./controller/players-controller";
import * as ControllerClubs from "./controller/clubs-crontroller";

const router = Router();

router.get("/players", ControllerPlayers.getPlayer);
router.get("/players/:id", ControllerPlayers.getPlayer);

router.post("/players", ControllerPlayers.postPlayer);

router.patch("/players/:id", ControllerPlayers.updatePlayer);

router.delete("/players/:id", ControllerPlayers.deletePlayer);

router.get("/clubs", ControllerClubs.getClubs);
router.get("/clubs/:id",ControllerClubs.getClubsById);
router.post("/clubs", ControllerClubs.postClubs);
router.delete("/clubs/:id", ControllerClubs.deleteClubs);
router.patch("/clubs/:id", ControllerClubs.updateClubs);


export default router;