console.log("Let's get this party started!");
const key = 'fZeywUi3SkjitarEkQHWq2B2GO5TZyGx';

$('#search').on('submit', (e) => {
    e.preventDefault();
    makeGif($('#searchTerm').val());
})

async function makeGif(q) {
    const res = await axios.get('api.giphy.com/v1/gifs/search', { params: { api_key: key, q } });
    console.log(res);
}