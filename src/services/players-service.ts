
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as playersRepository from "../repositories/players-repository";
import * as httpResponse from "../utilidades/http-helper";


export const getPlayerService =  async (number?: number) => {

   let data = null
   let response = null

   if(!number){
     data = await playersRepository.findAllPlayers();
   } else {
     data = await playersRepository.findPlayerById(number);
   }
   
   if(data){
     response = await httpResponse.ok(data);
   }else {
     response = await httpResponse.noContent();
   }

   return response
}

export const createPlayerService = async (player: PlayerModel) => {
  let response = null
   if(player){
   await playersRepository.insertPlayer(player);
   response =  httpResponse.created(player);
   } else {
    response = await httpResponse.badRequest();
   }

   return response;
}


export const deletePlayerService = async (id: number) => {
    let response = null
    const isDeleted = await playersRepository.deletePlayerById(id);
    
    if(isDeleted){
      response = await httpResponse.deleted();
    } else {
      response = await httpResponse.badRequest();
    }

    

    return response

}

export const updatePlayerService = async (id: number,  statistics: StatisticsModel) => {
    const data = await playersRepository.findAndModifyPlayer(id, statistics);

    let response = null
    if(data){
      response = await httpResponse.ok(data);
    }

    return response

}


