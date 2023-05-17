// HTML Elements to variables

const imageContainer=document.getElementById('image-container');
const photosArray=[];
// Unsplash API
const count=10;
const apiKey='nehq1ycJlz_sSFZaH-Az9VKRbNhsYc11wMyXxzYT5U8';
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=nehq1ycJlz_sSFZaH-Az9VKRbNhsYc11wMyXxzYT5U8&count=10`;

// Get upsplash images
async function getPhotos(){
    try{
    const response=await fetch(apiUrl);
    const photosArray=await response.json();
    console.log(photosArray);
    displayPhotos();
    }catch(error){
// Error code
    }
}

// Display Photos
function displayPhotos(){
    photosArray.forEach(photo=>{
        // Craete <a> to link to unsplash
        const item=document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank');
        // Create <img> for Photo
        const img=document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt',photo.alt_description);
        img.setAttribute('title',photo.alt_description);
        // Add <img> to <a>
        item.appendChild(img);
        // add item to imageContainer
        imageContainer.appendChild(item);
    })
}
getPhotos();
