import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit,OnDestroy {
public todos=[] ;
private sub: any;
constructor(private getDataService : GetDataService) {}

ngOnDestroy() {
  console.log("Bye Bye")
  this.sub.unsubscribe();
}

ngOnInit(){
  this.sub  = this.getDataService.getTodos().subscribe(
    res=>{
      this.todos=res;
      // console.log(res);

    },error=>{
      console.log(error);

    }
  );
}

}
