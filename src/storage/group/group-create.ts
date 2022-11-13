import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTIONS } from "@storage/storage-config";
import { groupGetAll } from "./group-get-all";

export async function groupCreate(newGroup: string) {
  try {
    const storageGroups = await groupGetAll();

    const storage = JSON.stringify([...storageGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTIONS, storage);
  } catch (error) {
    throw error;
  }
}
