import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  btnClick()
  {
    this.router.navigate(['/dashboard']);
  }

}
