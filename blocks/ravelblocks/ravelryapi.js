/**
 * Dependencies 
 */

import axios from 'axios';
import apiFetch from '@wordpress/api-fetch';


/**
 * Internal block libraries
 */
const { Component } = wp.element;

export default class Ravelryapi extends Component {
	constructor() {
		super(...arguments);
	}


	componentDidMount() {
	const headers = new Headers();

	headers.append('Authorization', 'Basic ' + btoa('read-8fe1a187f6580d7ffc4d4af23203af99:2iLEitN/S+IJm2ZnThfs49qWa3nrCqHI8bRC3Hll'));

	const myRequest = { method: 'GET', headers: headers};

    const url = 'https://api.ravelry.com/';

    const mainRequest = apiFetch(url, myRequest);

	}

    render() {
        const {
            attributes: className, setAttributes  } = this.props;
 

    return (
            <h2></h2>
        );
 
  	}




}

