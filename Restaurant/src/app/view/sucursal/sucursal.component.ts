import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styles: []
})
export class SucursalComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
    $(document).ready(function() {

      $('.js-example-basic-single').select2();

      $('#tabla_sucursal').DataTable({
        'language': {
          'url': '../../../assets/plugins/datatables/idioma.json'
        }
      });
    });

  }

}
