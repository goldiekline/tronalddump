function getDataFromApi() {
    var endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
    
    // final url: http://api.giphy.com/v1/gifs/search?q=panda&api_key=5871f9c9c07e4e60a70dfd9948da9658
    // get json data from url endpoint
    // json == javascript object notation
    
//     var options = {
//         method: 'GET',
// 'Access-Control-Allow-Origin': '*'        
//     }
    
    fetch(endpoint) // Fetch issues GET requests
    .then(function(data){
        return data.json()
    })
    .then(function(json){
        console.log(json)
        
       
        
        var finalHTML = ''
        finalHTML = json["message"]
    
        var resultDiv = document.getElementById('result')
        resultDiv.innerHTML = finalHTML
        
    })
    .catch(function(error){
        console.log(error)
    })
}
