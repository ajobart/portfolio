import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import {CmsArrayType, CmsDataType, CmsHeadlineType} from "../../types/cms.types";
import { CmsService } from "../../services/cms.service";
import {environment} from "../../../environments/environment";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'CmsHtmlRendererAtom',
  templateUrl: './cms-html-renderer.component.html',
  styleUrls: ['./cms-html-renderer.component.scss'],
})
export class CmsHtmlRendererComponent implements OnInit {

  /** Color for Title */
  @Input() colorTitle: string = "";

  /** Data of rich text */
  @Input() data: Array<CmsDataType> = [];

  /** Data of headline */
  @Input() headline: Array<CmsHeadlineType> = [];

  /** Array 1 */
  @Input() array1: Array<CmsArrayType> = [];

  /** Array 2 */
  @Input() array2: Array<CmsArrayType> = [];

  /** Array 3 */
  @Input() array3: Array<CmsArrayType> = [];

  /** Array 3 */
  @Input() array4: Array<CmsArrayType> = [];

  /** Array 3 */
  @Input() array5: Array<CmsArrayType> = [];

  /** Array 3 */
  @Input() array6: Array<CmsArrayType> = [];

  /** Array 3 */
  @Input() array7: Array<CmsArrayType> = [];

  /** Array 3 */
  @Input() array8: Array<CmsArrayType> = [];

  /** Array 3 */
  @Input() array9: Array<CmsArrayType> = [];

  /** Array 3 */
  @Input() array10: Array<CmsArrayType> = [];

  

  /** List of generate id */
  listGenerateId: string[] = [];

  constructor(
    public cms: CmsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    for (let item of this.data) {
      if (item.text)  item.text = item.text.replace('https://www.monabee.fr/portfolio-item', `${environment.url}/blog`)
      if (item.text)  item.text = item.text.replace('https://d3u5slsagqox11.cloudfront.net', `${environment.url}`)

      if (item.spans) {
        for (const span of item.spans) {
          if (span.type === "hyperlink" && span.data.url) span.data.url = span.data.url.replace('https://www.monabee.fr/portfolio-item', `${environment.url}/blog`);
          if (span.type === "hyperlink" && span.data.url) span.data.url = span.data.url.replace('https://d3u5slsagqox11.cloudfront.net', `${environment.url}`);
        }
      }

      if(item.text && item.type == "heading2"){
        item.id = this.generateId(item.text);
      }
    }
  }

  /**
   * Get the list item
   * @param index
   * @param currentTag
   */
  public getListItem(index: number, currentTag: CmsDataType): Array<CmsDataType> {
    let items: Array<CmsDataType> = [];
    let tag = currentTag.type;

    while (this.data.length >= index && (tag === "list-item" || tag === "o-list-item")) {
      items.push(this.data[index]);
      index++;
      tag = this.data[index] !== undefined ? this.data[index].type : "";
    }

    return items;
  }

  /**
   * Is array
   */
  public isTable(text: string|undefined): boolean {
    return text !== undefined && [
      "[tableau-1]",
      "[tableau-2]",
      "[tableau-3]",
      "[tableau-4]",
      "[tableau-5]",
      "[tableau-6]",
      "[tableau-7]",
      "[tableau-8]",
      "[tableau-9]",
      "[tableau-10]",
    ].indexOf(text.trim()) !== -1;
  }

  /**
   * Is headline
   */
  public isHeadline(text: string|undefined): boolean {
    return text !== undefined && [
      "[headline-1]",
      "[headline-2]",
      "[headline-3]",
      "[headline-4]",
      "[headline-5]",
      "[headline-6]",
      "[headline-7]",
      "[headline-8]",
      "[headline-9]",
      "[headline-10]",
    ].indexOf(text.trim()) !== -1;
  }

  /**
   * get the headline
   */
  public getHeadline(text: string|undefined): CmsHeadlineType {
    const headlineIndex = text?.replace('[', '').replace(']', '').split('-');

    if (headlineIndex) {
      return this.headline[Number(headlineIndex[1])-1];
    } else return {};
  }

  /**
   * Get the array
   */
  public getTable(text: string): string {
    let array: Array<CmsArrayType> = [];
    if (text.trim() === "[tableau-1]") array = this.array1;
    if (text.trim() === "[tableau-2]") array = this.array2;
    if (text.trim() === "[tableau-3]") array = this.array3;
    if (text.trim() === "[tableau-4]") array = this.array4;
    if (text.trim() === "[tableau-5]") array = this.array5;
    if (text.trim() === "[tableau-6]") array = this.array6;
    if (text.trim() === "[tableau-7]") array = this.array7;
    if (text.trim() === "[tableau-8]") array = this.array8;
    if (text.trim() === "[tableau-9]") array = this.array9;
    if (text.trim() === "[tableau-10]") array = this.array10;

    // Return empty string if the array is unknown
    if (array.length === 0) return "";

    let html = "";
    // Loop over the row
    for (const index in array) {
      const row = array[index];

      // Split the row with the comma and loop over
      const items = row.row.split(';');
      html += "<tr>";

      for (const item of items) {
        if (Number(index) == 0) html += `<th>${item}</th>`;
        else html += `<td>${item}</td>`;
      }

      html += "</tr>";
    }

   return `<table>${html}</table>`;
  }


  /**
   * Generate the id
   */
  generateId(text: string, withoutPush = false): string {
    const sanitizedText = this.sanitizer.sanitize(SecurityContext.HTML, text.toLowerCase().replace(/[^a-z0-9]/g, '')) ?? "";
  
    if (!this.listGenerateId.includes(sanitizedText) && !withoutPush) {
      this.listGenerateId.push(sanitizedText);
    }
  
    return sanitizedText;
  }
  
// Fonction pour défiler jusqu'à un ID spécifique avec un smooth scroll
  scrollToId(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -100; // décalage en pixels

    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

}


