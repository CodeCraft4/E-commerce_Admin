import { Client, Account, Databases,Storage } from "appwrite";

const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT_ID as string;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID as string;

const client = new Client().setEndpoint(endpoint).setProject(projectId);

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);



export { account, database,storage };
