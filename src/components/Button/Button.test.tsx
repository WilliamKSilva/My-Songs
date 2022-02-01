import { Button } from '.';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

describe('Button component', () => {    
    
    it('Button rendering correctly', () => {
        const { getByText } = render(
            <Button title="Teste" onClick={() => console.log('Teste')} />
        )
            expect(getByText('Teste')).toBeInTheDocument()        
    })

    it('Button title prop exist', () => {
        const { getByText } = render(
            <Button title="Teste" onClick={() => console.log('Teste')} />
        )
            expect(getByText('Teste')).toHaveProperty('title')        
    })
    
})