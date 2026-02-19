import React from "react";
import About from "../components/About";
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

jest.mock('../cssModules/About.css',() => ({}));
jest.mock('../pages/Header', () => jest.fn());
jest.mock('../pages/Footer', () => jest.fn());

// testing import statements and content section
describe("About",() => {
    it('should  import CSS and Page modules', () => {
        expect(jest.requireMock('../cssModules/About.css')).toBeDefined();
        expect(jest.requireMock('../pages/Header')).toBeDefined();
        expect(jest.requireMock('../pages/Footer')).toBeDefined();
    })

    it('should render the About component', () => {
        const { getByText } = render(<About />);
        
        expect(getByText('About Us')).toBeInTheDocument();
        expect(getByText('Our Mission')).toBeInTheDocument();
        expect(getByText('Our Vision')).toBeInTheDocument();
      });
})

