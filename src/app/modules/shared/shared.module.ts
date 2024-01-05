import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, IonicModule ],
  exports:[NavBarComponent]
})
export class SharedModule { }
