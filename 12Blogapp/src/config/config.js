const config = {
  appwriteUrl: String(process.env.REACTAPP_APPWRITE_URL),
  appwriteDatabaseId: String(process.env.REACTAPP_APPWRITE_DATABASE_ID),
  appwriteProjectId: String(process.env.REACTAPP_APPWRITE_PROJECT_ID),
  appwriteCollectionId: String(process.env.REACTAPP_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(process.env.REACTAPP_APPWRITE_BUCKET_ID),
};

export default config;
