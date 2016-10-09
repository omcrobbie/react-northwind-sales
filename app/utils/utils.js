import {connect} from 'react-redux';

export const connected = (Component, mapStateToProps)=>{
    return connect(mapStateToProps || (s=>s),null,null, {withRef:true})(Component);
}