import { DataService, Order } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/components/template/base/base.component';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  closeResult = '';
  title = 'WKTechnology';
  total = 0;
  items: Array<Line> = [];
  currentItem = ['id', 'name', 'preço', 'action'];
  product: Line = {
    id: 0,
    name: '',
    price: 0,
  };
  rows = [
    {
      id: 1,
      name: 'uva',
      price: 10.6,
    },
    {
      id: 2,
      name: 'teclado',
      price: 250,
    },
  ];

  constructor(
    private dataServicevice: DataService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {}

  incluirProduct() {
    const sortedRows = this.rows.sort((a, b) => b.id - a.id);
    const newID = sortedRows[0].id + 1;

    const name = this.product.name || '';
    const price = this.product.price || 0;

    this.rows.push({
      name,
      price,
      id: newID,
    });
    this.modalService.dismissAll();
  }

  addItem(newItem: Array<Line>) {
    this.items = newItem;
    console.log(newItem);
    this.soma();
    this.total = this.soma();
  }

  private soma() {
    const tot = this.items.map(function (item) {
      return Number(item.price) || 0;
    });

    return tot.length > 0 ? tot.reduce((acc, cur) => acc + cur) : 0;
  }

  order() {
    const order: Order = {
      products: this.items,
      total: this.total,
    };
    this.dataServicevice.changeOrder(order);

    this.router.navigate(['/order']);
  }

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
