import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-categoria-insumo',
  templateUrl: './categoria-insumo.component.html',
  styleUrls: ['./categoria-insumo.component.css']
})
export class CategoriaInsumoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {

      $('.js-example-basic-single').select2();

      $('#tabla_categoriaInsumo').DataTable({
        'language': {
          'url': '../../../assets/plugins/datatables/idioma.json'
        }
      });
    });

  }

}
