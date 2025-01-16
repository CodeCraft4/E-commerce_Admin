// import { COLLECTION } from "@muc/constants";
// import { firestore } from "@muc/firebase";
// import { ProductType } from "@muc/types";
// import { collection, addDoc } from "firebase/firestore";

// /**
//  * Adds a new product to the Firestore products collection with a unique ID.
//  * @param data - The product details to store.
//  * @returns A promise that resolves with the generated document ID.
//  */
// export const addProductToFirestore = async (data: ProductType) => {
//   try {
//     const productsCollectionRef = collection(firestore, COLLECTION.products);

//     const docRef = await addDoc(productsCollectionRef, {
//       ...data,
//       createdAt: new Date().toISOString(),
//     });

//     console.log("Product added successfully with ID:", docRef.id);
//     return docRef.id;
//   } catch (error) {
//     console.error("Error adding product:", error);
//     throw error;
//   }
// };
