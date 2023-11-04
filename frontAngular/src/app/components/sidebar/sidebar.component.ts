import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  { path: "/Etudiant", title: "Etudiants", icon: "person", class: "" },
  { path: "/Equipe", title: "Equipes", icon: "groups", class: "" },

  { path: "/Universite", title: "Universités", icon: "school", class: "" },

  { path: "/Departement", title: "Departements", icon: "apartment", class: "" },

  { path: "/Contrat", title: "Contrats", icon: "wysiwyg", class: "" },


  

  // {
  //   path: "/table-list",
  //   title: "Table List",
  //   icon: "content_paste",
  //   class: "",
  // },
  // { path: "/Forum/all", title: "Forum", icon: "groups", class: "" },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
