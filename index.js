const reviews = [
    {
        id : 0,
        name: "@brandonprows",
        review: "Poetic ending. Absolutely awe-inspiring. This part of the film is what seals the deal for this being the front runner for best picture. The ending to this movie had a profound impact on me, and weeks later after having seen it, I find myself continuously thinking about those final moments. What a magnificent film."
        ,img: '<img src="download.jpg">'
    },
    {
        id : 1,
        name: "@keithmoore4576",
        review: "After avoiding this movie for years, not my cup of tea, i watched it the other day. OMG was I wrong! Totally blew me away. The piano on this track is simple but reaches straight into the heart and rips away. Superb."
        ,img: '<img src="android17.webp">'
    },
    {
        id : 2,
        name: "@LongNguyen",
        review: "Who knows 7 minutes of a movie can leave a scar in your head like that? And who knows the characters' happiness acceptance to reality can bring sadness to the audience?"
        ,img: '<img src="picolo.jpg">'
    },
    {
        id : 3,
        name: "@concernedspectator",
        review: "Exceptional. Love that soft second-to-last key at the very end, that unnecessary and precious detour to a higher fleeting note. We all know which note he's headed for, yet he tries keeping hold of that song for just one more moment, one last time.",
        img: '<img src="gohan.jpg">'
    }
]

let count = 0;

const forward = document.getElementById("forward");
const back = document.getElementById("backward");
const shuffle = document.getElementById("shuffle");
forward.addEventListener("click",function(){
    count += 1;
    if (count > reviews.length - 1){
        count = 0;
    }
    document.querySelector(".image").innerHTML = reviews[count].img;
    document.querySelector(".name").textContent = reviews[count].name;
    document.querySelector(".opinion").textContent = reviews[count].review;
})


back.addEventListener("click",function(){
    count -= 1;
    if (count < 0){
        count = reviews.length - 1;
    }
    document.querySelector(".image").innerHTML = reviews[count].img;
    document.querySelector(".name").textContent = reviews[count].name;
    document.querySelector(".opinion").textContent = reviews[count].review;
})

shuffle.addEventListener("click",function(){
    count = Math.floor(Math.random()*4);
    document.querySelector(".image").innerHTML = reviews[count].img;
    document.querySelector(".name").textContent = reviews[count].name;
    document.querySelector(".opinion").textContent = reviews[count].review;
})
