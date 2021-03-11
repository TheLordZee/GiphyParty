console.log("Let's get this party started!");

//Handles form submission
$('#search').on('submit', (e) => {
    e.preventDefault();
    const search = $('#searchTerm').val();
    getGif(search);
    $('#searchTerm').val('');
})


//Gets the url of the gif
async function getGif(q) {
    try {
        const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
            params: {
                api_key: 'fZeywUi3SkjitarEkQHWq2B2GO5TZyGx',
                q
            }
        });
        const gifs = res.data.data;
        const ranId = Math.floor(Math.random() * (gifs.length - 1));
        const url = gifs[ranId].images.original.url;
        setGif(url)
        console.log(res.data.data);
    } catch (e) {
        alert('Request Failed!')
    }
}

//Creates and appends the gif to the page
function setGif(url) {
    let $newCol = $("<div>", { class: "col-12 col-md-4 col-lg-3" });
    let $newGif = $("<img>", {
        src: url
    })
    $newCol.append($newGif);
    $('#gif-row').append($newCol);
}

//Removes Gifs
$("#delete").on("click", function () {
    $('#gif-row').empty();
});