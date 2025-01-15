import config from "../config/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAcc = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAcc) {
        return this.login({ email, password });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createSession(email, password);
      return session;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      console.error("Error in getCurrentUser:", error);
      if (error.code === 401) {
        return null;
      }
      throw error;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession();
    } catch (error) {
      throw new Error(error);
    }
  }
}

const authService = new AuthService();
export default authService;

/** 
* The code below is the same as the code above. Which is repeatable 
const client = new Client()
   .setEndpoint("https://cloud.appwrite.io/v1").setProject("<YOUR_PROJECT_ID>"); 

const account = new Account(client);
*/
