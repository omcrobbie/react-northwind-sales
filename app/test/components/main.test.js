import {renderComponent,expect} from '../test.helper';
import MainComponent from 'main.component';
describe('MainComponent', ()=>{
    it('should exist', ()=>{
        let component = renderComponent(MainComponent);
        expect(component).to.exist;
    });
});