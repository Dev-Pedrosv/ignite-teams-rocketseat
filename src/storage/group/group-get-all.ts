import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTIONS } from "@storage/storage-config";

export async function groupGetAll() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTIONS);
    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw error;
  }
}
