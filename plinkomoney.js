// Made by Chucny (GitHub)
// https://github.com/chucny



setTimeout(() => {
    plinko_balance = parseFloat(localStorage.getItem('plinko_balance'));
    plinko_balance = 100e+100
    localStorage.setItem('plinko_balance', plinko_balance);
    console.log('Balance forced:', plinko_balance);
}, 1000); 
// one second after load, copy paste this in the console and spam-reload and spam-paste

