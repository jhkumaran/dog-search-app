import { render, screen } from "@testing-library/react";
import { testConstants } from "../../../utils/constants";
import Dog from "..";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useCallback: jest.fn(),
}));
describe("test Dog component", () => {
    const dog = {
        name: 'test dog',
        height: {
            metric: '45'
        },
        life_span: '12 years',
        image: {
            url: 'dog image'
        }
    }
    it("components rendered properly", () => {
        render(<Dog dog={dog}/>);
        expect(screen.getByTestId(testConstants.DogContainer)).toBeInTheDocument();
    })
})