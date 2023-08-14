import { render, screen, fireEvent, act } from "@testing-library/react";
import { testConstants } from "../../../utils/constants";
import SearchComponent from "..";
import store from "../../../data/store";
import * as Redux from 'react-redux';

const mockedDispatch = jest.fn();
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: () => mockedDispatch
}));
describe("test Search component", () => {
    const mockBreeds = [
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
    beforeEach(() => {
        jest.spyOn(Redux, "useSelector").mockImplementation(() => ({
            breeds: mockBreeds
        }));
    });
    afterEach(() => {
        jest.useRealTimers();
    })
    it("components rendered properly", () => {
        render(
            <Redux.Provider store={store}>
                <SearchComponent />
            </Redux.Provider>
        )
        expect(screen.getByTestId(testConstants.SearchContainer)).toBeInTheDocument();
    });
    it("check filter results after debounce", () => {
        jest.useFakeTimers();
        render(
            <Redux.Provider store={store}>
                <SearchComponent />
            </Redux.Provider>
        );
        fireEvent.change(screen.getByTestId(testConstants.SearchInput), { target: { value: 'test' } });
        act(() => {
            jest.advanceTimersByTime(1500);
        });
        expect(screen.getByTestId(testConstants.SortbySelect)).toBeInTheDocument();
        expect(screen.getByTestId(testConstants.AscButton)).toBeInTheDocument();
    });
    it("check no results", () => {
        jest.useFakeTimers();
        render(
            <Redux.Provider store={store}>
                <SearchComponent />
            </Redux.Provider>
        );
        fireEvent.change(screen.getByTestId(testConstants.SearchInput), { target: { value: 'fake' } });
        act(() => {
            jest.advanceTimersByTime(1500);
        });
        expect(screen.getByTestId(testConstants.NoResult)).toBeInTheDocument();
    });
    it("toggle asc order", () => {
        jest.useFakeTimers();
        render(
            <Redux.Provider store={store}>
                <SearchComponent />
            </Redux.Provider>
        );
        fireEvent.change(screen.getByTestId(testConstants.SearchInput), { target: { value: 'test' } });
        act(() => {
            jest.advanceTimersByTime(1500);
        });
        expect(screen.getByTestId(testConstants.SortbySelect)).toBeInTheDocument();
        expect(screen.getByTestId(testConstants.AscButton)).toBeInTheDocument();
        fireEvent.click(screen.getByTestId(testConstants.AscButton));
        expect(screen.getByTestId(testConstants.DescButton)).toBeInTheDocument();
    });
    it("check sort by name asc", () => {
        jest.useFakeTimers();
        render(
            <Redux.Provider store={store}>
                <SearchComponent />
            </Redux.Provider>
        );
        fireEvent.change(screen.getByTestId(testConstants.SearchInput), { target: { value: 'test' } });
        act(() => {
            jest.advanceTimersByTime(1500);
        });
        expect(screen.getByTestId(testConstants.SortbySelect)).toBeInTheDocument();
        fireEvent.change(screen.getByTestId(testConstants.SortbySelect),{ target: { value: 'name' } });
        expect(screen.getByTestId(testConstants.SortbySelect)).toBeInTheDocument();
    });
    it("check sort by height asc", () => {
        jest.useFakeTimers();
        render(
            <Redux.Provider store={store}>
                <SearchComponent />
            </Redux.Provider>
        );
        fireEvent.change(screen.getByTestId(testConstants.SearchInput), { target: { value: 'test' } });
        act(() => {
            jest.advanceTimersByTime(1500);
        });
        expect(screen.getByTestId(testConstants.SortbySelect)).toBeInTheDocument();
        fireEvent.change(screen.getByTestId(testConstants.SortbySelect),{ target: { value: 'height' } });
        expect(screen.getByTestId(testConstants.SortbySelect)).toBeInTheDocument();
    });
    it("check sort by lifespan asc", () => {
        jest.useFakeTimers();
        render(
            <Redux.Provider store={store}>
                <SearchComponent />
            </Redux.Provider>
        );
        fireEvent.change(screen.getByTestId(testConstants.SearchInput), { target: { value: 'test' } });
        act(() => {
            jest.advanceTimersByTime(1500);
        });
        expect(screen.getByTestId(testConstants.SortbySelect)).toBeInTheDocument();
        fireEvent.change(screen.getByTestId(testConstants.SortbySelect),{ target: { value: 'lifespan' } });
        expect(screen.getByTestId(testConstants.SortbySelect)).toBeInTheDocument();
    });
    it("toggle desc order", () => {
        jest.useFakeTimers();
        render(
            <Redux.Provider store={store}>
                <SearchComponent />
            </Redux.Provider>
        );
        fireEvent.change(screen.getByTestId(testConstants.SearchInput), { target: { value: 'test' } });
        act(() => {
            jest.advanceTimersByTime(1500);
        });
        expect(screen.getByTestId(testConstants.SortbySelect)).toBeInTheDocument();
        expect(screen.getByTestId(testConstants.AscButton)).toBeInTheDocument();
        fireEvent.click(screen.getByTestId(testConstants.AscButton));
        expect(screen.getByTestId(testConstants.DescButton)).toBeInTheDocument();
        fireEvent.click(screen.getByTestId(testConstants.DescButton));
        expect(screen.getByTestId(testConstants.AscButton)).toBeInTheDocument();
    });
    it("check sort by name desc", () => {
        jest.useFakeTimers();
        render(
            <Redux.Provider store={store}>
                <SearchComponent />
            </Redux.Provider>
        );
        fireEvent.change(screen.getByTestId(testConstants.SearchInput), { target: { value: 'test' } });
        act(() => {
            jest.advanceTimersByTime(1500);
        });
        expect(screen.getByTestId(testConstants.SortbySelect)).toBeInTheDocument();
        fireEvent.change(screen.getByTestId(testConstants.SortbySelect),{ target: { value: 'name' } });
        expect(screen.getByTestId(testConstants.AscButton)).toBeInTheDocument();
        fireEvent.click(screen.getByTestId(testConstants.AscButton));
        expect(screen.getByTestId(testConstants.SortbySelect)).toBeInTheDocument();
    });
    it("check sort by height desc", () => {
        jest.useFakeTimers();
        render(
            <Redux.Provider store={store}>
                <SearchComponent />
            </Redux.Provider>
        );
        fireEvent.change(screen.getByTestId(testConstants.SearchInput), { target: { value: 'test' } });
        act(() => {
            jest.advanceTimersByTime(1500);
        });
        expect(screen.getByTestId(testConstants.SortbySelect)).toBeInTheDocument();
        fireEvent.change(screen.getByTestId(testConstants.SortbySelect),{ target: { value: 'height' } });
        expect(screen.getByTestId(testConstants.AscButton)).toBeInTheDocument();
        fireEvent.click(screen.getByTestId(testConstants.AscButton));
        expect(screen.getByTestId(testConstants.SortbySelect)).toBeInTheDocument();
    });
    it("check sort by lifespan desc", () => {
        jest.useFakeTimers();
        render(
            <Redux.Provider store={store}>
                <SearchComponent />
            </Redux.Provider>
        );
        fireEvent.change(screen.getByTestId(testConstants.SearchInput), { target: { value: 'test' } });
        act(() => {
            jest.advanceTimersByTime(1500);
        });
        expect(screen.getByTestId(testConstants.SortbySelect)).toBeInTheDocument();
        fireEvent.change(screen.getByTestId(testConstants.SortbySelect),{ target: { value: 'lifespan' } });
        expect(screen.getByTestId(testConstants.AscButton)).toBeInTheDocument();
        fireEvent.click(screen.getByTestId(testConstants.AscButton));
        expect(screen.getByTestId(testConstants.SortbySelect)).toBeInTheDocument();
    });
})