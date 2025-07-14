import { ClubsModel } from "../models/clubs-model";
import * as clubsRepository from "../repositories/clubs-repository";
import * as httpResponse from "../utilidades/http-helper";



export const getClubService = async () => {
   const data  = await clubsRepository.findAllClubs();
   const response  = httpResponse.ok(data);
   return response
}


export const getClubByIdService = async (id: number) => {
   const data  = await clubsRepository.findClubById(id);
  let response = null
  if(data) {
     response  = httpResponse.ok(data);
    return response
  } else {
    response  = httpResponse.noContent();
    return response
  }
   
}

export const createClubService = async (club: ClubsModel) => {
let response = null;
if(club) {
   await clubsRepository.insertClub(club);
   response  = httpResponse.created(club);
} else {
   response  = httpResponse.badRequest();
}
   
   
   return response
}


export const deteleClubService = async (id: number) => {
   const isDeleted = await clubsRepository.deleteClubById(id);
   let response = null
   if(isDeleted) {
      response  = httpResponse.deleted();
   } else {
      response  = httpResponse.badRequest();
   }
   return response
}


export const updateClubService = async (id: number, name: string) => {
   const data  = await clubsRepository.updateClubById(id, name);
   let response = null
   if(data) {
      response  = httpResponse.ok(data);
   } else {
      response  = httpResponse.badRequest();
   }
   return response
}
