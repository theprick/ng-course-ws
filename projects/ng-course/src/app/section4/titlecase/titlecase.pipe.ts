import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'titlecase1'
})
export class TitleCasePipe implements PipeTransform {

  private IGNORED_WORDS = [
    'a', 'the', 'or', 'of', 'and'
  ];    

  transform(value: string, ...args: any[]) {
    console.debug(value);
    if (!value) {
      return null;
    }

    let tokens: string[] = value.split(' ');
    for (var i = 0; i < tokens.length; i++) {
      tokens[i] = this.processToken(tokens[i].trim(), i == 0);
    } 
    
    return tokens.length > 1 ? tokens.join(' ') : tokens[0];
  }

  private processToken(value: string, isFirst: boolean): string {
    console.debug(value);
    return (isFirst || !this.IGNORED_WORDS.includes(value)) ?
      this.toTitleCase(value) : value.toLowerCase();
  }

  private toTitleCase(value: string): string{
    let lower = value.toLowerCase();
    return lower.charAt(0).toUpperCase() +
      (lower.length > 1 ? lower.substring(1) : '');
  }
}
