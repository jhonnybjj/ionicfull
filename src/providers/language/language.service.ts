import { Injectable } from "@angular/core";
import { LanguageModel } from "./language.model";

@Injectable()
export class LanguageService {
  languages : Array<LanguageModel> = new Array<LanguageModel>();

   constructor() {
     this.languages.push(
       {name: "English", code: "en"},
  /*     {name: "Spanish", code: "es"},
  {name: "Arabic", code: "ar"},
*/
       {name: "Portuguese", code: "pt"}
     );
   }

   getLanguages(){
     return this.languages;
   }
 }
