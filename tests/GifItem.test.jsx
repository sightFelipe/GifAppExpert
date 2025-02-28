import { render } from "@testing-library/react"
import GifItem from "../src/components/GifItem"

describe('Tests in <GifItem/>', () => { 

    const title = 'Goku';
    const url = 'https://localhost/goku.jpg';	

    test('should match with snapshot', () => { 

           const {container} = render(<GifItem title='' url=''/>) 
           expect(container).toMatchSnapshot();
     }) 


 })