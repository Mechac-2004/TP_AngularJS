import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CardComponent } from "./card/card.component";
import { ListComponent } from "./list/list.component";
import { ProduitComponent } from './produit/produit.component';
import { FooterComponent } from './footer/footer.component';
import { SlideComponent } from './Slide/slide.component';
import { FurnitureComponent } from './furniture/furniture.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    CardComponent, 
    ListComponent, 
    ProduitComponent, 
    FooterComponent,
    SlideComponent,
    FurnitureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP4_Angular';
  images = [
    { url: 'assets/1.jpg', alt: 'Image 1', description: 'Description de l\'image 1' },
    // ...
  ];  
}
