
import { ActionTypes } from './../contant/action-types';
const initialState ={
    products:[
        {
            id: 1,
            title: 'Full Face Motorcycle Helmet Casco Capacete Racing Helmet kask Casque Moto High quality',
            price: 200,
            category: 'AGV',
            image: 'https://i.pinimg.com/736x/be/16/e4/be16e4dcfc60c788ba2e6ac20dca83cb.jpg',

        },
        {
            id: 2,
            title: 'Atlas 2.0 Helmet - Camo',
            price: 200,
            category: 'AGV',

            image: 'https://i.pinimg.com/564x/a8/f4/d0/a8f4d036867edea289e544ed984a5fb4.jpg'
        }
        ,
        {
            id: 3,
            title: 'Casque Moto',
            price: 200,
            category: 'AGV',

            image: 'https://i.pinimg.com/564x/10/40/65/104065132ff85e125969c8f04f60cb6c.jpg'
        }
        ,
        {
            id: 4,
            title: 'The Motorcycle Helmet Art of Hello Cousteau',
            price: 300,
            category: 'AGV',

            image: 'https://i.pinimg.com/564x/a1/17/e6/a117e6b2bc25dfac3530a5e349a86d47.jpg'
        }
        ,
        {
            id: 5,
            title: 'AGV 2020',
            price: 100,
            category: 'AGV',

            image: 'https://i.pinimg.com/564x/fb/42/3c/fb423ca69a86dd4b373f84fc48c76868.jpg'
        }
        ,
        {
            id: 6,
            title: 'Monkeebeast: The Wrenchmonkees vs the Yamaha XSR900',
            price: 500,
            category: 'SC',

            image: 'https://i.pinimg.com/564x/3b/ea/aa/3beaaa3b7e70c591ca382ae8be799b9e.jpg'
        }
        ,
        {
            id: 7,
            title: 'SC 2020 Cacbon',
            price: 300,
            category: 'SC',

            image: 'https://i.pinimg.com/564x/1f/f5/39/1ff539039ce2e3b897ce2702d4c963c3.jpg'
        }
        ,
        {
            id: 8,
            title: 'Atacama 700',
            price: 200,
            category: 'SC',

            image: 'https://i.pinimg.com/564x/e2/eb/55/e2eb558f4aec9f543b7f5c8ed8ae1947.jpg'
        }
        ,
        {
            id: 9,
            title: 'Sc Project Exhaust - Uitlaten',
            price: 200,
            category: 'SC',

            image: 'https://i.pinimg.com/564x/d0/85/20/d0852005d77d376dc161bfdbbab2dd6e.jpg'
        }
        ,
        {
            id: 10,
            title: 'SC Titan',
            price: 200,
            category: 'SC',

            image: 'https://i.pinimg.com/564x/ef/84/17/ef841791d8bf53eb569726a00d14113b.jpg'
        }
        ,
        {
            id: 11,
            title: 'F90 BMW M5',
            price: 200,
            category: 'AKRAPOVIC',

            image: 'https://i.pinimg.com/564x/7d/80/98/7d8098ce6d3e2fffab512469ff1aead6.jpg'
        }
        ,
        {
            id: 12,
            title: 'S1000rr Akrapovic',
            price: 200,
            category: 'AKRAPOVIC',

            image: 'https://i.pinimg.com/564x/03/27/84/032784dcbd459c6dc58ce9a6ddbe91ca.jpg'
        }
        ,
        {
            id: 13,
            title: 'S1000rr Akrapovic',
            price: 200,
            category: 'AKRAPOVIC',

            image: 'https://i.pinimg.com/564x/bc/3a/e1/bc3ae1556e20ec65232455fb3d6888e4.jpg'
        }
        ,
        {
            id: 14,
            title: 'F90 BMW M5 ',
            price: 500,
            category: 'AKRAPOVIC',

            image: 'https://i.pinimg.com/564x/7d/80/98/7d8098ce6d3e2fffab512469ff1aead6.jpg'
        }
        ,
        {
            id: 15,
            title: 'BMW M4 Akrapovic Exhaust System',
            price: 200,
            category: 'AKRAPOVIC',

            image: 'https://i.pinimg.com/564x/75/5d/c6/755dc6c612dd361482bb4f24b7718fde.jpg'
        }
        
    ]
    ,
    categoris:['ALL','AGV','SC','AKRAPOVIC']
    ,
    carts:[
        {
            id:1,
            idProduct:1,
            quality: 2,
            price:200
        },
        {
            id:2,
            idProduct:2,
            quality: 2,
            price:200
        },
        {
            id:3,
            idProduct:3,
            quality: 2,
            price:200
        },
        {
            id:4,
            idProduct:4,
            quality: 2,
            price:200
        }
    ]
}


export const productReducer =(state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}

