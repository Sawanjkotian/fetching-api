function get_random_dog_image()
{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        display_image(data.message);
    })
    .catch(function(error){
        console.log("error" + error);
    })
}

function display_image(image)
{
    document.getElementById("image").src=image;
}