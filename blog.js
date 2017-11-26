/* Function: loadJson
*  Returns: void
*  Loads posts from json placeholder
*/
function loadJson(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        let output = "<h2>Blogs</h2>";
        data.forEach(function(post){
           output+= `
           <a href="blog.html"><div class="posts">
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            </div></a>`;
        })
        document.getElementById('post').innerHTML = output;
   })
   .catch((err) => console.log(err))
}

function loadPhotos(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => {
        let output = "<h2>Gallery</h2>";
        data.forEach(function(photo){
           output+= `
           <div class="photo">
                <h4>${photo.title}</h4>
                <img src=${photo.url}>
            </div>`;
        })
        document.getElementById('gallery').innerHTML = output;
   })
   .catch((err) => console.log(err))
}


loadJson();
loadPhotos();