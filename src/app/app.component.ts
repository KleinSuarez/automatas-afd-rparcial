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
      27: 'Cadena aceptada',
      31: 'Cadena aceptada',
      32: 'Cadena aceptada',
      34: 'Cadena aceptada',
      35: 'Cadena aceptada',
      '-99': 'Contiene errores',
    }
    this.input.split('').map(c => {
      switch (this.state) {
        case 0: {
          this.state = '0' == c ? 17 : '1' == c ? 18 : -99;
          break;
        }
        case 1: {
          this.state = '0' == c ? -99 : '1' == c ? 2 : -99;
          break;
        }
        case 2: {
          this.state = '0' == c ? 2 : '1' == c ? 19 : -99;
          break;
        }
        case 3: {
          this.state = '0' == c ? 4 : '1' == c ? -99 : -99;
          break;
        }
        case 4: {
          this.state = -99;
          break;
        }
        case 5: {
          this.state = '0' == c ? 6 : '1' == c ? -99 : -99;
          break;
        }
        case 6: {
          this.state = '0' == c ? 6 : '1' == c ? 20 : -99;
          break;
        }
        case 7: {
          this.state = '0' == c ? -99 : '1' == c ? 8 : -99;
          break;
        }
        case 8: {
          this.state =  -99;
          break;
        }
        case 9: {
          this.state = '0' == c ? -99 : '1' == c ? 10 : -99;
          break;
        }
        case 10: {
          this.state = '0' == c ? 10 : '1' == c ? 21 : -99;
          break;
        }
        case 11: {
          this.state = '0' == c ? -99 : '1' == c ? 12 : -99;
          break;
        }
        case 12: {
          this.state = -99;
          break;
        }
        case 13: {
          this.state = '0' == c ? 14 : '1' == c ? -99 : -99;
          break;
        }
        case 14: {
          this.state = '0' == c ? 22 : '1' == c ? 14 : -99;
          break;
        }
        case 15: {
          this.state = '0' == c ? -99 : '1' == c ? 16 : -99;
          break;
        }
        case 16: {
          this.state = -99;
          break;
        }
        case 17: {
          this.state ='0' == c ? 6 : '1' == c ? 23 : -99;
          break;
        }
        case 18: {
          this.state = '0' == c ? 24 : '1' == c ? 25 : -99;
          break;
        }
        case 19: {
          this.state = '0' == c ? 26 : '1' == c ? 19 : -99;
          break;
        }
        case 20: {
          this.state = '0' == c ? 6 : '1' == c ? 27 : -99;
          break;
        }
        case 21: {
          this.state = '0' == c ? 10 : '1' == c ? 28 : -99;
          break;
        }
        case 22: {
          this.state = '0' == c ? 22 : '1' == c ? 29 : -99;
          break;
        }
        case 23: {
          this.state = '0' == c ? 30 : '1' == c ? 31 : -99;
          break;
        }
        case 24: {
          this.state = '0' == c ? 24 : '1' == c ? 32 : -99;
          break;
        }
        case 25: {
          this.state = '0' == c ? 24 : '1' == c ? 35 : -99;
          break;
        }
        case 26: {
          this.state = '0' == c ? 2 : '1' == c ? 19 : -99;
          break;
        }
        case 27: {
          this.state = '0' == c ? 6 : '1' == c ? 27 : -99;
          break;
        }
        case 28: {
          this.state = '0' == c ? 10 : '1' == c ? 28 : -99;
          break;
        }
        case 29: {
          this.state = '0' == c ? 22 : '1' == c ? 14 : -99;
          break;
        }
        case 30: {
          this.state = '0' == c ? 30 : '1' == c ? 33 : -99;
          break;
        }
        case 31: {
          this.state = '0' == c ? 34 : '1' == c ? 31 : -99;
          break;
        }
        case 32: {
          this.state = '0' == c ? 24 : '1' == c ? 35 : -99;
          break;
        }
        case 33: {
          this.state = '0' == c ? 34 : '1' == c ? 31 : -99;
          break;
        }
        case 34: {
          this.state = '0' == c ? 30 : '1' == c ? 33 : -99;
          break;
        }
        case 35: {
          this.state = '0' == c ? 18 : '1' == c ? 35 : -99;
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
