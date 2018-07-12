import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {

      $('.js-example-basic-single').select2();

      $('#tabla_categoria_Insumo').DataTable({
        'language': {
          'url': '../../../assets/plugins/datatables/idioma.json'
        }
      });

      $('#tabla_Insumo').DataTable({
        'language': {
          'url': '../../../assets/plugins/datatables/idioma.json'
        }
      });

    });

  }
}
