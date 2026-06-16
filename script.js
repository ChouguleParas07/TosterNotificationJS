// function clicklimiter() {
//     let click = 0;

//     return function(){
//         if (click < 5){
//             click++;
//             console.log(`you clicked ${click} times.`);
//         }else console.error('you already tried for 5 times');
//     };
// };


function CreateToster(data){

    return function(notification){

        let div = document.createElement("div");
        div.textContent = notification;

        div.className = `inline-block ${data.theme == 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-white'}  px-6 py-3 rounded shadow-lg transition-opacity pointer-events-none duration-300`;

        document.querySelector('.parent').appendChild(div);

        // document.querySelector('.parent').classList.add('fixed'); 

        if(data.positionX != "left" || data.positionY != 'top'){
            document.querySelector('.parent').className += `${data.positionX == 'right' ? ' right-5' : ' left-5'} ${data.positionY == 'top' ? ' top-5' : ' bottom-5'}`;
        };

        setTimeout(() => {
            document.querySelector('.parent').removeChild(div);
        }, data.duration*1000);



    };
};


let toster = CreateToster({
    positionX : 'right',
    positionY : 'top',
    theme : 'dark',
    duration : 3,
});


toster('downloading...');

setTimeout(() => {
    toster('download done');
}, 2000);
