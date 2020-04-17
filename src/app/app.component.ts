import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  input: string = ''
  alphabet = '01'
  state = 0;
  states: any;

  ngOnInit() {
  }

  getState() {
    return this.states ? this.states[this.state] ? this.states[this.state] : 'Cadena no aceptada' : 'Ingrese una cadena'
  }

  parcial() {
    this.state = 0;
    this.states = {
      23: 'Cadena aceptada',
      24: 'Cadena aceptada',
      25: 'Cadena aceptada',
      26: 'Cadena aceptada',
      '-99': 'Contiene errores',
    }
    this.input.split('').map(c => {
      switch (this.state) {
        case 0: {
          this.state = '0' == c ? 17 : '1' == c ? 18 : -99;
          break;
        }
        case 2: {
          this.state = '0' == c ? 2 : '1' == c ? 19 : -99;
          break;
        }
        case 6: {
          this.state = '0' == c ? 6 : '1' == c ? 20 : -99;
          break;
        }
        case 10: {
          this.state = '0' == c ? 10 : '1' == c ? 21 : -99;
          break;
        }
        case 14: {
          this.state = '0' == c ? 22 : '1' == c ? 14 : -99;
          break;
        }
        case 17: {
          this.state ='0' == c ? 6 : '1' == c ? 2 : -99;
          break;
        }
        case 18: {
          this.state = '0' == c ? 14 : '1' == c ? 10 : -99;
          break;
        }
        case 19: {
          this.state = '0' == c ? 23 : '1' == c ? 19 : -99;
          break;
        }
        case 20: {
          this.state = '0' == c ? 6 : '1' == c ? 24 : -99;
          break;
        }
        case 21: {
          this.state = '0' == c ? 10 : '1' == c ? 25 : -99;
          break;
        }
        case 22: {
          this.state = '0' == c ? 22 : '1' == c ? 26 : -99;
          break;
        }
        case 23: {
          this.state = '0' == c ? 2 : '1' == c ? 19 : -99;
          break;
        }
        case 24: {
          this.state = '0' == c ? 6 : '1' == c ? 24 : -99;
          break;
        }
        case 25: {
          this.state = '0' == c ? 10 : '1' == c ? 25 : -99;
          break;
        }
        case 26: {
          this.state = '0' == c ? 22 : '1' == c ? 14 : -99;
          break;
        }
        default: {
          this.state = -99;
          break;
        }
      }
    });
  }

}
