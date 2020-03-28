import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class DataService {
    constructor(private http: HttpClient, private url: string) {

    }

    getAll() {
 
        return this.http.get(this.url)



    }

    create(ressource) {

        return this.http.post(this.url, ressource)
            ;
    }
    update(ressource) {

        return this.http.put(this.url + "/" + ressource.id, ressource);
    }

    delete(id) {

        return this.http.delete(this.url + "/" + id);
    }
}