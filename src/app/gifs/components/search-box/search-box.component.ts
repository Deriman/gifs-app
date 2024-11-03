import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'gifs-search-box',
    template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter)="searchTag()" 
     #txtTagInput> <!-- identifico el input con un tag y obtengo su valor en el template-->
    `
})
export class SearchBoxComponent {

    @ViewChild("txtTagInput")
    public inputTag!: ElementRef<HTMLInputElement>;

    searchTag():void {
        const newTag = this.inputTag.nativeElement.value
        console.log({ newTag })
    }
   
}