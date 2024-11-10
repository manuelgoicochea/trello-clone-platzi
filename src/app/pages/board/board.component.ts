import { Component, OnInit } from '@angular/core';
import { CdkDragDrop,moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';
import { ToDo,Column } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles:[
  `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
  `
  ]
})
export class BoardComponent implements OnInit {


  columns: Column[] = [
    {
      title: 'To Do',
      todos: [
        {
          id:'1',
          title:'Make dishes'
        },
        {
          id:'2',
          title:'Buy a unicorn'
        }
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id:'3',
          title:'Watch Angular Path in Platzi'
        }
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id:'4',
          title:'Play video games'
        }
      ]
    }
  ];

  
  todos: ToDo[] = [];

  doing: ToDo[] = [];
  done: ToDo[] = [];


  constructor(
    private dialog: Dialog
  ) { }

  ngOnInit(): void {
  }

  drop(event:CdkDragDrop<ToDo[]>){
    //console.log(event);
    if (event.previousContainer=== event.container) {
      moveItemInArray(event.container.data,event.previousIndex,event.currentIndex);      
    }else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  AddColumn(){
    this.columns.push({
      title:'New Column',
      todos:[]
    }
    );
  }

  openDialog(todo:ToDo){
    const dialogRef = this.dialog.open(TodoDialogComponent,{
      minWidth :'300px',
      maxWidth: '50%',
      autoFocus: false,
      data: {
        todo:todo,
      }
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
    
  }
}
