import { render, screen } from "@testing-library/react";
import { testConstants } from "../../../utils/constants";
import Home from "..";

const mockedDispatch = jest.fn();
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockedDispatch
}));
jest.mock("../../Search/index", () => {
    return {
        __esModule: true,
        default: () => {
            return <div>Search</div>
        }
    }
})
describe("test Home component", () => {
    it("dispatch to be called", () => {
        render(<Home/>);
        expect(mockedDispatch).toBeCalled();
        expect(screen.getByTestId(testConstants.HomeContainer)).toBeInTheDocument();
    })
})