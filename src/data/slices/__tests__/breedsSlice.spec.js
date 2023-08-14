import store from '../../store';
import { breedsSlice, getBreeds } from '../breedsSlice';

const mockResponseData = [
    {
        id: 1,
        name: 'test dog1',
        height: {
            metric: '45 - 55'
        },
        life_span: '12 years',
        image: {
            url: 'dog1 image'
        }
    },
    {
        id: 2,
        name: 'test dog2',
        height: {
            metric: '35 - 40'
        },
        life_span: '15 years',
        image: {
            url: 'dog2 image'
        }
    }
];

describe("Breeds slice", () => {
    let initialState = {
        breeds: [],
        fecthStatus: {
            isLoading: false,
            isFailure: false,
            isSuccess: false
        }
    };
    it("should return initial state", () => {
        const state = store.getState().breedsReducer;
        expect(state).toEqual(initialState);
    });
    it("should set loading to true", () => {
        const newState = {
            ...initialState,
            fecthStatus: {
                ...initialState.fecthStatus,
                isLoading: true,
            }
        };
        const action = { type: getBreeds.pending };
        const state = breedsSlice.reducer(initialState, action);
        expect(state).toEqual(newState);
    });
    it("should set fail to true", () => {
        const newState = {
            ...initialState,
            fecthStatus: {
                ...initialState.fecthStatus,
                isFailure: true,
            }
        };
        const action = { type: getBreeds.rejected };
        const state = breedsSlice.reducer(initialState, action);
        expect(state).toEqual(newState);
    });
    it("should set fulfilled to true", () => {
        const newState = {
            ...initialState,
            breeds: [],
            fecthStatus: {
                ...initialState.fecthStatus,
                isSuccess: true,
            }
        };
        const action = { type: getBreeds.fulfilled, payload: [] };
        const state = breedsSlice.reducer(initialState, action);
        expect(state).toEqual(newState);
    });
})