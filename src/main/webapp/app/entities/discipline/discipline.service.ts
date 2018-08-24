import{Injectable}from'@angular/core';
import {HttpClient, HttpResponse}from '@angular/common/http';
import {Observable}from 'rxjs';

import {SERVER_API_URL}from 'app/app.constants';
import {createRequestOption}from 'app/shared';
import {IDiscipline}from 'app/shared/model/discipline.model';

type EntityResponseType = HttpResponse<IDiscipline>;
type EntityArrayResponseType = HttpResponse<IDiscipline[]>;

@Injectable({ providedIn: 'root' })
export class DisciplineService {
    private resourceUrl = SERVER_API_URL + 'api/disciplines';

    constructor(private http: HttpClient) {}

    create(discipline: IDiscipline): Observable<EntityResponseType> {
        return this.http.post<IDiscipline>(this.resourceUrl, discipline, { observe: 'response' });
    }

    update(discipline: IDiscipline): Observable<EntityResponseType> {
        return this.http.put<IDiscipline>(this.resourceUrl, discipline, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IDiscipline>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IDiscipline[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
