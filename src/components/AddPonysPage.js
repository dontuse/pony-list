import React from 'react';
import {Grid,Row,Col, Input} from 'react-bootstrap';
import PonyForm from './PonyForm.js';
import PonyList from './PonyList.js';
import appStore from '../stores/appStore.js';

class AddPonysPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={3}>
                       <PonyForm/>
                    </Col>
                    <Col xs={12} md={9}>
                        <PonyList></PonyList>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default AddPonysPage;