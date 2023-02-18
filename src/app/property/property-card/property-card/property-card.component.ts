import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {
  @Input() imagePath:string = "";
  @Input() titulo:string = "";
}
