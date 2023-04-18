const PinkUmbrella = './assets/images/Pink-umbrella.png';
const yellowUmbrella = './assets/images/Yello-umbrella.png'
const blueUmbrella = './assets/images/Blue-umbrella.png'


const umbrellaList = [
    {
        color: 'pink',
        imgSrc: PinkUmbrella
    },
    {
        color: 'yellow',
        imgSrc: yellowUmbrella
    },
    {
        color: 'blue',
        imgSrc: blueUmbrella
    }
   
]

const umbrellaUpload = document.querySelector("#umbrella-upload");
const colorButtonList = document.querySelectorAll(".color-palette");
const umbrellaDisplay = document.querySelector(".img-umbrella");
const btnUpload = document.querySelector(".btn-upload");
const  logo = document.querySelector("#logo")


for(let i = 0 ; i < colorButtonList.length ; i++){
    colorButtonList[i].addEventListener('click', () => {
        const selectedUmbrella = umbrellaList.find( (item,index) => index === i );

        umbrellaDisplay.src = selectedUmbrella.imgSrc
    } )
}

btnUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
        logo.style.visibility = 'visible'
        logo.src = reader.result
    }   
})




