function isHeroku()
{
    // Rudimentary check to see if the app is running on Heroku. assumes you don't have a PORT env var set locally
    return process.env.PORT;
}


export let SERVER_URL = isHeroku() ? "/" : "http://localhost:5000/";