import dataClubs from "../data/clubs.json";
import { ClubsModel } from "../models/clubs-model";

const database: ClubsModel[] = dataClubs;

export const findAllClubs = async (): Promise<ClubsModel[]> => {
   return database
}


export const findClubById = async (id: number): Promise<ClubsModel | undefined> => {
   return database.find(club => club.id === id) 
}


export const insertClub = async (club: ClubsModel): Promise<ClubsModel> => {
   database.push(club)
   return club
}


export const deleteClubById = async (id: number) => {
   const index = database.findIndex(club => club.id === id)

   if(index !== -1) {
      database.splice(index, 1);
      return true;
   }
   
   return false
   }


   export const updateClubById = async (id: number, name: string) => {
      const index = database.findIndex(club => club.id === id)

      if(index !== -1) {
         database[index].name = name;
      }
      
     return database[index]
      }