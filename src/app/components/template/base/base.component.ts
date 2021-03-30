import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

export interface Line {
  id: number;
  first: string;
  last: string;
  selected?: boolean;
}

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent implements OnInit {
  @Input() item: Array<string> = []; // decorate the property with @Input()
  @Input() row: Array<Line> = []; // decorate the property with @Input()

  @Output() newItemEvent = new EventEmitter<Array<Line>>();

  constructor() {}

  ngOnInit(): void {
    this.row.map((element) => {
      element.selected = false;
    });
  }

  reverse(id: number) {
    this.row.map((element) => {
      if (element.id === id) {
        element.selected = !element.selected;
      }
    });
    this.addNewItem();
  }


  // var alunosDeMaior = [];

  // for(var i = 0; i < alunos.length; i++){
  //  var aluno = alunos[i];
  //  if(aluno.idade >= 18) alunosDeMaior.push(aluno);
  // }
  // console.log(alunosDeMaior);

  // var alunosDeMaior = alunos.filter(function(aluno){
  //   return aluno.idade >= 18;
  // });

  addNewItem() {
      const analise = this.row.filter(function(rows){
        return rows.selected;
      });
     this.newItemEvent.emit(analise);
  }
}
