import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableId?: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private requestService: RequestService
  ) {
    this.activatedRoute.params.subscribe((params) => {
        this.tableId = params['id'];
        this.requestService.tableId = this.tableId;
        console.log('************* ID *************');
        console.log(this.tableId);
        this.router.navigate(['splash']);
    });
  }

  ngOnInit(): void {

  }

}
