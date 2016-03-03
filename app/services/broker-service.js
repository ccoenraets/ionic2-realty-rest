import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {SERVER_URL} from './config';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let brokersURL = SERVER_URL + 'brokers/';

@Injectable()
export class BrokerService {

    static get parameters() {
        return [[Http]];
    }

    constructor (http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(brokersURL)
            .map(res => res.json())
            .catch(this.handleError);
    }

    findById(id) {
        return this.http.get(brokersURL + id)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error) {
        return Observable.throw(error.json().error || 'Server error');
    }

}