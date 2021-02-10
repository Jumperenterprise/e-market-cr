import { Component } from '@angular/core';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent {

 img = ['https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        '../../../../assets/img/product-2.jpg',
        '../../../../assets/img/product-3.jpg',
        '../../../../assets/img/product-4.jpg',
        'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
       ];
 icons = ['../../../../assets/svg/sales.svg', '../../../../assets/svg/hand.svg'];

 description = ['Verder', 'Rojo', 'Azul'];

}
