import React from "react";
import AnimalList from "../components/AnimalList";
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

jest.mock('../cssModules/Animalist.css',() => ({}));
jest.mock('../pages/Header', () => jest.fn());
jest.mock('../pages/Footer', () => jest.fn());

describe('AnimalList',()=>{
    it('should  import CSS and Page modules', () => {
        expect(jest.requireMock('../cssModules/Animalist.css')).toBeDefined();
        expect(jest.requireMock('../pages/Header')).toBeDefined();
        expect(jest.requireMock('../pages/Footer')).toBeDefined();
    })

})