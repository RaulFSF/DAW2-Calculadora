import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

  @Input() res: string | undefined;
  @Input() operation: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
