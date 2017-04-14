import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'voltagedrop',
  templateUrl: './voltagedrop.component.html',
  styleUrls: ['./voltagedrop.component.css']
})
export class VoltagedropComponent implements OnInit {
@Input() formval;
@Input()  submitted = false;
  constructor() { }

  ngOnInit() {
  }

}
