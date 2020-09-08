const TOGGLE_FEATURE = "TOGGLE_FEATURE";

export const defaultState = {
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500, added: false },
        { id: 2, name: 'Racing detail package', price: 1500, added: false },
        { id: 3, name: 'Premium sound system', price: 500, added: false },
        { id: 4, name: 'Rear spoiler', price: 250, added: false }
    ]
};

export const cardReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_FEATURE: // action.data = ID number of the feature
            console.log(state);
            return {
                ...state,
                additionalFeatures: state.additionalFeatures.map(item => {
                    if(item.id === action.data) {
                        return {...item, added: !item.added};
                    }
                    return item;
                })
            };
        default:
            return state;
    }
};