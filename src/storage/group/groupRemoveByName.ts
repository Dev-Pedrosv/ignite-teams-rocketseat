import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTIONS, PLAYER_COLLECTIONS } from "@storage/storage-config";

import { groupGetAll } from "./groupGetAll";

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupGetAll();
    const groups = storedGroups.filter(
      (group: string) => group !== groupDeleted
    );

    await AsyncStorage.setItem(GROUP_COLLECTIONS, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTIONS}-${groupDeleted}`);
  } catch (error) {}
}
