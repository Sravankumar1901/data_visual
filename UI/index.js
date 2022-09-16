const dragArea = document.querySelector('.form' );
let input = document.querySelector("#input");
let file;


dragArea.addEventListener('dragover',(event)=>{
    event.preventDefault();
    // console.log("file is over drag area");
    dragArea.classList.add('active');
})

dragArea.addEventListener('dragleave',()=>{
    // console.log("file is outside from dragarea");
    dragArea.classList.remove('active');
})

dragArea.addEventListener('drop',(event)=>{
    event.preventDefault();
    file = event.dataTransfer.files[0];
    console.log(file);
});

