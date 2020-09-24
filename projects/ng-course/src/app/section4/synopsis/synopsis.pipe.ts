import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "synopsis"
})

export class SynopsisPipe implements PipeTransform {
  transform(value: string, length: number = 50, sign: string = "...") {
    if (!value) {
      return null;
    }
    /*
    if (!length) {
      length = 50;
    }
    if (!sign) {
      sign = "...";
    }
    */
    return value.substring(0, length) + " " + sign;
  }
}
