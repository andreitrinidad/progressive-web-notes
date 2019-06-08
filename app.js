


// })
document.querySelectorAll('.color-picker-btn').forEach(function(card){
    card.addEventListener('click', (e) => {
    if(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.note-container')){

    }
    let target = e.target.parentElement.parentElement.parentElement.parentElement;
    console.log(e.target)

    document.querySelector('.dropdown-content').addEventListener('click', (e) => {
        if(e.target.classList.contains('pallette')){
            // console.log();
            let color = e.target.classList[1];
            // target.classList.add(color, '');
            target.className = `card note-container ${color} lighten-4`;

            // e.target.classList.remove;
        }
    })

    e.preventDefault();
        
        
        })
})

   




$(document).ready(function () {
    //MATERIALIZE INITIALIZATIONS


    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();
    $('.dropdown-trigger').dropdown({
        coverTrigger: false,
        // container: '.note'
        constrainWidth: false
    });
});


// function colorPickerClick(e, target){

//     // console.log('oof');
//     return e.target;

// }



// document.querySelector('.color-picker-btn').addEventListener('click', (e) => {

// })