import { connect } from 'react-redux';
import App from './components';
import * as Actions from './actions';

function mapProps(state, ownProps) {
    return { ...state,
             service_id: ownProps.params.serviceid};
}

function mapDispatch(dispatch) {
    return {
        onCreateLink: (id, service, endpoint) => dispatch(Actions.linkCreateLink(id, service, endpoint)),
        onRemoveLink: (id, service, endpoint) => dispatch(Actions.linkRemoveLink(id, service, endpoint)),
        onShowCode: (link) => dispatch(Actions.linkShowCode(link)),
        onNewLinkServiceSelect: (id) => dispatch(Actions.linkNewLinkServiceSelect(id)),
        onNewLinkEndpointSelect: (id, service) => dispatch(Actions.linkNewLinkEndpointSelect(id, service))
    }
}

let LinkApp = connect(mapProps, mapDispatch)(App);
export default LinkApp;
