import { Request, Response} from "express"
import { createPlayerService, deletePlayerService, getPlayerService, updatePlayerService } from "../services/players-service"
import { noContent } from "../utilidades/http-helper";
import { StatisticsModel } from "../models/statistics-model";



export const getPlayer = async (req: Request, res: Response) => {
   
   const id = req.params.id ? parseInt(req.params.id) : undefined;

   const httpResponse= await getPlayerService(id);

   res.status(httpResponse.statusCode).json(httpResponse.body);
}


export const postPlayer = async (req: Request, res: Response) => {

   const player = req.body;
   const httpResponse= await createPlayerService(player);

   if(httpResponse){
     res.status(httpResponse.statusCode).json(httpResponse.body); 
   }

   
}

export const deletePlayer = async (req: Request, res: Response) => {

   const id = parseInt(req.params.id)

   const httpResponse= await deletePlayerService(id);

   if(httpResponse){
     res.status(httpResponse.statusCode).json(httpResponse.body); 
   }

}; 


export const updatePlayer = async (req: Request, res: Response) => {
      const id = parseInt(req.params.id)
      const bodyValue:StatisticsModel = req.body;
      
     const httpResponse = await updatePlayerService(id, bodyValue);
     if(httpResponse){
       res.status(httpResponse.statusCode).json(httpResponse.body); 
     }
   

}