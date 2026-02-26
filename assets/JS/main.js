/*                 <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-img">
                            <img src="./img/Gore.webp" alt="">
                        </div>
                        <div class="body-card">
                            <h3 class="title">Title</h3>
                            <p class ="date">Data</p>
                        </div>
                    </div>
                </div> 
                TO INJECT
*/






//get dom

const boardEl = document.getElementById('board')
const overlayEl = document.getElementById("overlay")
const overlayContEl = document.getElementById("overlay-content")
const overlayImgEl = document.getElementById("overlay-img")
const closeButtonEl = document.getElementById("close-btn")



//api call (bzzzbzzbbzz)
fetch("https://lanciweb.github.io/demo/api/pictures/")
.then(res=>res.json())
.then(data=>{console.log(data)

    data.forEach(cardPicture => {
        console.log(cardPicture);

       const {title, date, url} = cardPicture 
/*     

with innerHTML += only

       const boardPicture =  `<div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-img" onclick="zoomImg('${url}')">
                            <img src="./img/pin.svg" id="pin" class="pin" alt="">
                            <img src="${url}" class="images img-fluid img-top" alt="">
                        </div>
                        <div class="body-card">
                        
                            <p class ="date">${date}</p>
                            <h3 class="title">${title.toUpperCase()}</h3>
                        </div>
                    </div>
                </div> `

        boardEl.innerHTML += boardPicture
 */
//with createElement
        const colEl = document.createElement('div');
        colEl.className = "col-sm-12 col-md-6 col-lg-4";


        const cardEl = document.createElement('div')
        cardEl.className = "card";

        cardEl.innerHTML = `<div class="card-img"">
                            <img src="./img/pin.svg" id="pin" class="pin" alt="">
                            <img src="${url}" class="images img-fluid img-top" alt="">
                        </div>
                        <div class="body-card">
                        
                            <p class ="date">${date}</p>
                            <h3 class="title">${title.toUpperCase()}</h3>
                        </div>
                    </div>`
        
        const onClick = cardEl.querySelector('.card-img')

        onClick.addEventListener('click', function() {
            zoomImg(url)
        })


        colEl.appendChild(cardEl)
        boardEl.append(colEl)

        
        
    })
    
    
})    



function zoomImg(url) {
    document.getElementById('overlay-img').src = url;
    document.getElementById('overlay').classList.remove('d-none')  

    
}

 
    closeButtonEl.addEventListener('click', function () {

        overlayEl.classList.add('d-none')

    })





