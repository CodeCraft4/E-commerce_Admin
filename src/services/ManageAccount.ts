import { COLLECTION } from "@muc/constants";
import { firestore } from "@muc/firebase";
import { User } from "firebase/auth";
import { doc, onSnapshot, setDoc } from "firebase/firestore";

// update admin
export const updateAdminAccount = async (data: any, user: User | null) => {
  try {
    const adminRef = doc(firestore, COLLECTION.admins, user?.uid);
    await setDoc(adminRef, {
      ...data,
      updatedAt: new Date().toISOString(),
    });

    console.log("Account updated successfully");
  } catch (error) {
    console.error("Error updating account:", error);
  }
};

// fetch user
export const fetchAdminData = (
  userId: string,
  callback: (data: any) => void
) => {
  if (!userId) {
    console.error("User ID is required to subscribe to admin data.");
    return () => {};
  }

  const adminRef = doc(firestore, COLLECTION.admins, userId);
  const unsubscribe = onSnapshot(adminRef, (docSnapshot) => {
    console.log(docSnapshot.data(),'--------')
    if (docSnapshot.exists()) {
      callback(docSnapshot.data());
    } else {
      console.warn("Admin data not found");
      callback(null);
    }
  });

  return unsubscribe;
};
