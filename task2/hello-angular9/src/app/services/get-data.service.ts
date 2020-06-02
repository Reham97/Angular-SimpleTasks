import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http';
import { ITodo } from '../myInterfaces/todos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ITodo[]>
  {
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
 
  }



  

}
