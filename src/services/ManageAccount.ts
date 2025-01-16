<<<<<<< Updated upstream
export {};
=======
import { database } from "@muc/appwrite";
import { DATABASE, COLLECTION } from "@muc/constants";

export const updateAdminAccount = async (data: any, userId: any) => {
  if (!userId) {
    console.error("User ID is required to update admin account.");
    return;
  }

  try {
    const document = await database.getDocument(
      DATABASE.databaseId,
      COLLECTION.adminsId,
      userId
    );

    if (document) {
      await database.updateDocument(
        DATABASE.databaseId,
        COLLECTION.adminsId,
        userId,
        {
          ...data,
          profileImg: data.profileImg,
        }
      );
      console.log("Account updated successfully.");
    }
  } catch (error: any) {
    if (error.code === 404) {
      await database.createDocument(
        DATABASE.databaseId,
        COLLECTION.adminsId,
        userId,
        {
          ...data,
          profileImg: data.profileImg,
        }
      );
      console.log("Account created successfully.");
    } else {
      console.error("Error updating account:", error);
    }
  }
};

export const fetchAdminAccount = async (userId: string) => {
  if (!userId) {
    console.error("User ID is required to fetch admin account.");
    return;
  }

  try {
    const document = await database.getDocument(
      DATABASE.databaseId,
      COLLECTION.adminsId,
      userId
    );

    if (document) {
      const previewImageUrl = document.profileImg || null;

      return {
        ...document,
        previewImageUrl,
      };
    }
  } catch (error) {
    console.error("Error fetching admin account:", error);
  }
};
>>>>>>> Stashed changes
