import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['user-card.component.scss'],
})
export class UserCardComponent {
  @Input() Usuario: string="";
  @Input() Perfil: string="";
  @Input() Info: string="";
}
