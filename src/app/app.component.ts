import { Component, OnInit } from '@angular/core';

// Importa dependência
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Projeto01';

  constructor(

    // Injetar dependência
    private viewportScroller: ViewportScroller,
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // Executa o método que altera o título
    this.changeTitle();
  }

  // Acessa âncoras na própria página
  goTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  // Acessa links externos
  open(urlToOpen: string): void {
    window.open(urlToOpen);
  }

  // Método que altera o título dinâmicamente conforme o valor de 'title' em 'app-routing.module.ts'.
  changeTitle() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data.title) {
            return `${child.snapshot.data.title} ~ ${this.title}`;
          } else {
            return this.title;
          }
        }
        return this.title;
      })).subscribe((title: any) => {
        this.titleService.setTitle(title);
      });
  }
}
