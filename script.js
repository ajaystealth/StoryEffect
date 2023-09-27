var arr = [
    {dp:"ajay.jpg",story:"ajay.jpg"},
    {dp:"https://images.unsplash.com/photo-1695116764519-44bd92afa9e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1695116764519-44bd92afa9e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1694476053120-d729a3f6a7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1694476053120-d729a3f6a7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1695192699177-f98215c7bc4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1695192699177-f98215c7bc4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"ajay_alone1.jpg", story:"ajay_alone1.jpg"},
    {dp:"https://images.unsplash.com/photo-1695051711946-a843514742aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1695051711946-a843514742aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
];


var clutter = "";
arr.forEach(function(info, id){
    clutter += `<div class="story">
    <img id="${id}" src="${info.dp}" alt="">
</div>`
});
// console.log(clutter)

document.querySelector("#storiyan").innerHTML = clutter;

document.querySelector("#storiyan").addEventListener("click", function(info){
    document.querySelector("#fullScreen").style.display = "block";
    document.querySelector("#fullScreen").style.backgroundImage = `url(${arr[info.target.id].story})`;
    
    setTimeout(function(){
        document.querySelector("#fullScreen").style.display = "none";
    },3000)
});