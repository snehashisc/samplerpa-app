import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Grid } from 'ag-grid';
import {PostsService} from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: `user.component.html`,
    providers: [PostsService]
   
})
export class UserComponent implements OnInit  { 
posts:Post[];
isDataAvailed:boolean;
 constructor(private postsService: PostsService){
   
    this.postsService.getPosts().subscribe(posts => {
    console.log("posts1":posts);
        this.posts = posts;
        this.bindGridData();
    });
    
  }
  bindGridData() {
   var gridDiv = document.getElementById('myGrid');
                
   var  gridOptions = {
       columnDefs: [
         {headerName: 'RequestType', field: 'RequestType'},
        {headerName: 'Account#', field: 'Account'},
        {headerName: 'SubmittedBy', field: 'SubmittedBy'},
        {headerName: 'Created DateTime#', field: 'CreatedOn'},
        {headerName: 'Status', field: 'Status'}
          ]
    };
     
     new agGrid.Grid(gridDiv, gridOptions);
     gridOptions.api.setRowData(this.posts);
      
 }
  

}
interface Post{
    id: number;
    title: string;
    body: string;
}


