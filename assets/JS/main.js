/*                 <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-img">
                            <img src="./img/Gore.webp" alt="">
                        </div>
                        <div class="body-card">
                            <h3 class="title">Title</h3>
                            <p class ="date">Data</p>
                            <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolorum
                                alias distinctio qui, quo vitae ea debitis quae magni tenetur aspernatur obcaecati eaque
                                odit aliquid quos, error delectus quidem. Quo.</p>
                        </div>
                    </div>
                </div> 
                TO INJECT
*/






//get dom

const boardEl = document.getElementById('board')

//api call (bzzzbzzbbzz)
fetch("https://lanciweb.github.io/demo/api/pictures/")
.then(res=>res.json())
.then(data=>{console.log(data)

    data.forEach(cardPicture => {
        console.log(cardPicture);

       const {title, date, url} = cardPicture 
    
       const boardPicture =  `<div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-img">
                            <img src="./img/pin.svg" id="pin" class="pin" alt="">
                            <img src="${url}" class="images img-fluid img-top" alt="">
                        </div>
                        <div class="body-card">
                            <h3 class="title">${title}</h3>
                            <p class ="date">${date}</p>
                        </div>
                    </div>
                </div> `

        boardEl.innerHTML += boardPicture

        
    })



}




)
