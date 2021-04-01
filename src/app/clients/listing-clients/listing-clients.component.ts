import { DataService, Order } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/components/template/base/base.component';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { cpf } from 'cpf-cnpj-validator';
import * as EmailValidator from 'email-validator';

const { isValid } = cpf;

@Component({
  selector: 'app-listing-clients',
  templateUrl: './listing-clients.component.html',
  styleUrls: ['./listing-clients.component.css'],
})
export class ListingClientsComponent implements OnInit {
  closeResult = '';
  title = 'WKTechnology';
  total = 0;
  items: Array<Line> = [];
  currentItem = ['id', 'name', 'cpf', 'ender', 'email', 'nasc', 'action'];
  nasc = {
    year: 0,
    month: 0,
    day: 0,
  };
  product: Line = {
    id: 0,
    name: '',
    cpf: '',
    ender: '',
    email: '',
  };
  rows = [
    {
      id: 1,
      name: 'arleilson',
      cpf: '03309392201',
      ender: 'rua luiz antony',
      email: 'carneiroarleilson@gmail.com',
      nasc: new Date(),
    },
  ];

  constructor(
    private dataServicevice: DataService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {}

  incluirClient() {

    const sortedRows = this.rows.sort((a, b) => b.id - a.id);
    const newID = sortedRows[0].id + 1;

    const name = this.product.name || '';
    const cpf = this.product.cpf || '';
    const ender = this.product.ender || '';
    const email = this.product.email || '';
    const nasc = new Date(`${this.nasc.year}/${this.nasc.month}/${this.nasc.day}/`) || new Date();

    if(name === '') {
      alert('Nome está vazio!');
      return;
    }
    if(cpf === '') {
      alert('CPF está vazio!');
      return;
    }
    if(!isValid(cpf)) {
      alert('CPF não é válido!');
      return;
    }
    if(ender === '') {
      alert('Endereço está vazio!');
      return;
    }
    if(email === '') {
      alert('Email está vazio!');
      return;
    }
    if(!EmailValidator.validate(email)) {
      alert('Email não é válido!');
      return;
    }
    // if(nasc === '') {
    //   alert('Data de Nascimento está vazio!');
    //   return;
    // }

    this.rows.push({
      name,
      cpf,
      ender,
      email,
      nasc,
      id: newID,
    });
    this.modalService.dismissAll();
  }

  addItem() {}

  private soma() {}

  order() {}

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
