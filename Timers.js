/* 
    countdown(num), counts down from num every 1 second and shows 'DONE!' when 0
*/

const countdown = (num) => {
    let count = num;
    const counter = setInterval(() => {
        count--;
        if(count <= 0){
            clearInterval(counter);
            console.log('DONE!');
        }
        else{
            console.log(count);
        }
    }, 1000);
}

/* 
    randomGame(), every 1 second selects a random number between 0 and 1 (excludes 1). 
    Then increment count every random number selected. 
    Then if the random number is greater than 0.75, stop timer and displays count
*/

const randomGame = () => {
    let count = 0;
    const game = setInterval(() => {
        const randInt = Math.random();
        count++;
        if(randInt > 0.75){
            clearInterval(game);
            console.log(count);
        }
    }, 1000);
}