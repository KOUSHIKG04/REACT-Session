import config from "../config/config.js";
import { Client, Account } from "appwrite";

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
      } else {
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createSession(email, password);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite error :: getCurrentUser() :: ", error);
      throw new Error(error);
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
