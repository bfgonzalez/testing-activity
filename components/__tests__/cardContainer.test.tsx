import { CardContainer } from "../CardContainer"
import { CardProps } from "../Card"
import { render, screen } from "@testing-library/react"

describe('Rendering Card List', () => {

    it('Should render all listed card samples', () => {
        const cardSamples = [
            {
                header: 'card1',
                description: 'card1 description',
                link: 'card1-link'
            },
            {
                header: 'card2',
                description: 'card2 description',
                link: 'card2-link'
            },
            {
                header: 'card3',
                description: 'card3 description',
                link: 'card3-link'
            },
        ];

        render (
            <CardContainer
                cards = {cardSamples}
            />
        )
        
        expect(screen.getAllByLabelText('card')).toHaveLength(cardSamples.length)
    })
})