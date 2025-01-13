import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6784b8810011f159af4e");

export const account = new Account(client);
export const databases = new Databases(client);

export default client;
