import { Client, Account, Avatars } from 'appwrite';

const client = new Client();
client.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID).setEndpoint('https://cloud.appwrite.io/v1');

// Initialize the Appwrite Account
const account = new Account(client);

// Initialize the Appwrite Avatars
const avatars = new Avatars(client);

export { account, avatars };
