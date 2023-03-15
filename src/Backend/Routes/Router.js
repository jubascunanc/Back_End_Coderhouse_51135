import { Router } from "express";

const router = Router();

router.get('/',(req, res) =>{
  console.log("Consumiendo página desde Router")
})

export default router;