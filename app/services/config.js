function isHeroku()
{
    return process.env.NODE && process.env.NODE.indexOf("heroku");
}


export let SERVER_URL = isHeroku() ? "/" : "http://localhost:5000/";