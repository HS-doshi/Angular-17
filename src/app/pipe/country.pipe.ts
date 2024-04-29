import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country',
  standalone: true
})
export class CountryPipe implements PipeTransform {

  transform(value: number, country?:string): string {
    let code = "+91-"
    if(country == "USA") code="+1-"
    return code+value;
  }

}
