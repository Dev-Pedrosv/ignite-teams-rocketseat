import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTIONS } from "@storage/storage-config";
import { AppError } from "@utils/app-error";
import { groupGetAll } from "./groupGetAll";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupGetAll();

    const groupAlreadyExists = storedGroups.includes(newGroup);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }

    const storage = JSON.stringify([...storedGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTIONS, storage);
  } catch (error) {
    throw error;
  }
}
