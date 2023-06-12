class AppConfig {

    public connectionString = "mongodb://127.0.0.1:27017/gift-shop"

    public port = 3001
    public frontEndUrl = "http://localhost:3000"
}



const appConfig = new AppConfig()
export default appConfig