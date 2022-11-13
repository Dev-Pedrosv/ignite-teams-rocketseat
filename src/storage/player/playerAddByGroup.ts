import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/app-error";

import { PLAYER_COLLECTIONS } from "@storage/storage-config";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playerGetByGroup";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Essa pessoa já adicionada em um time aqui.");
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTIONS}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
