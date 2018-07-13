import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-insumo',
  templateUrl: './insumo.component.html',
  styleUrls: ['./insumo.component.css']
})
export class InsumoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {

      $('.js-example-basic-single').select2();

      $('#tabla_insumo').DataTable({
        'language': {
          'url': '../../../assets/plugins/datatables/idioma.json'
        }
      });
    });

  }

}
