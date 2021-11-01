'use strict';

const trainingTime = 200;
const maxTrainingTime = 1000;


const bestAstronauts = [];

const astronauts = [
    {
        name: 'John',
        timeSpend: 0,
        result: ''
    },
    {
        name: 'Liza',   
        timeSpend: 0,
        result: ''
    },
    {
        name: 'Nick',
        timeSpend: 0,
        result: ''
    }
]

function flyMeToTheMoon() {
    const promices = [];

    astronauts.forEach((astronaut) => {
        const prom = training(astronaut);
        console.log(prom);
        promices.push(prom);
    });
    console.log('promices', promices);

    Promise.allSettled(promices)
        .then((r) => {
            r.forEach((res) => {
                if(res.status === 'fulfilled' && res.value.result === 'success') {
                    bestAstronauts.push(res.value);
                }
            })
        })
        .catch((e) => {
            console.log('settled error', e);
        })    

    
}

function training (astr) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(Math.random() > 0.2) {
                astr.timeSpend += trainingTime;
                if(maxTrainingTime <= astr.timeSpend) {
                    astr.result = 'failed';
                }
                rej(astr);
            } else {
                astr.timeSpend += trainingTime;
                astr.result = 'success';
                res(astr);
            }
        }, trainingTime)
    })

    .then((r) => {
        console.log('r', r)
        return r;
        
    })
    .catch((e) => {
        if(astr.result === 'failed') {
            console.log('e', e)
            return e;
        } else {
            return training(astr);
        }
    })
}

flyMeToTheMoon();

console.log('best', bestAstronauts)







