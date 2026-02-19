import React from "react";
import Contact from "../components/Contact";
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

jest.mock('../cssModules/Contact.css',() => ({}));
jest.mock('../pages/Header', () => jest.fn());
jest.mock('../pages/Footer', () => jest.fn());

describe('Contact',()=>{
    it('should  import CSS and Page modules', () => {
        expect(jest.requireMock('../cssModules/Contact.css')).toBeDefined();
        expect(jest.requireMock('../pages/Header')).toBeDefined();
        expect(jest.requireMock('../pages/Footer')).toBeDefined();
    })
    
    it('should render the Contact component', () => {
        const { getByText } = render(<Contact />);
        
        expect(getByText('Contact Us')).toBeInTheDocument();
        expect(getByText('Name')).toBeInTheDocument();
        expect(getByText('Email')).toBeInTheDocument();
        expect(getByText('Message')).toBeInTheDocument();
      });

      it('should render the Contact component', () => {
        const { getByText } = render(<Contact />);
        
        expect(getByText('Office Address')).toBeInTheDocument();
        expect(getByText('Block 001 - Farmart Ranch')).toBeInTheDocument();
        expect(getByText('Open All week 8am - 5pm')).toBeInTheDocument();
        expect(getByText('Talk To Us')).toBeInTheDocument();
        expect(getByText('Office Address')).toBeInTheDocument();
        expect(getByText('Block 001 - Farmart Ranch')).toBeInTheDocument();
        expect(getByText('Open All week 8am - 5pm')).toBeInTheDocument();
        expect(getByText('Talk To Us')).toBeInTheDocument();
      });
      it('should render the send button', () => {
        const { getByText } = render(<Contact />);
        
        expect(getByText('Send')).toBeInTheDocument();
      });
})