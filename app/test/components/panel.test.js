import {renderComponent} from '../test.helper';
import PanelComponent from 'panel.component';

describe('PanelComponent', ()=>{
    let state ={
            employees: [{
                name: 'charlie', 
                key: '123',
                regions:{
                    n:false,
                    s:false,
                    e:false,
                    w:false
                }
            }]
        } 
    it('should exist', ()=>{
        let component = renderComponent(PanelComponent);
        expect(component.instance).to.exist;
    });
    it('should toggle region', ()=>{
        
    });
});