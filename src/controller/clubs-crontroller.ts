import { Request, Response} from "express"
import { createClubService, deteleClubService, getClubByIdService, getClubService, updateClubService } from "../services/clubs-service"
import { ClubsModel } from "../models/clubs-model";


export const getClubs = async (req: Request, res: Response) => {
   const response = await getClubService();
   res.status(response.statusCode).json(response.body);

   
}


export const getClubsById = async (req: Request, res: Response) => {
      const id  = parseInt(req.params.id);
      const response = await getClubByIdService(id);
      res.status(response.statusCode).json(response.body);
}  

export const postClubs = async (req: Request, res: Response) => {
   const club = req.body;
   const httpResponse = await createClubService(club);

   res.status(httpResponse.statusCode).json(httpResponse.body);
}

export  const deleteClubs = async (req: Request, res: Response) => {
   const id = parseInt(req.params.id)
   const httpResponse = await deteleClubService(id);
   res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updateClubs = async (req: Request, res: Response) => {
   const id = parseInt(req.params.id)
   const name: ClubsModel = req.body
   const httpResponse = await updateClubService(id, name.name);
   if(httpResponse){
    res.status(httpResponse.statusCode).json(httpResponse.body);  
   }
   
}