import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NotebooksComponent} from "./notebooks/notebooks.component";
import {ComputersComponent} from "./computers/computers.component";
import {MonitorsComponent} from "./monitors/monitors.component";
import {GamingComponent} from "./gaming/gaming.component";
import {TabletsComponent} from "./tablets/tablets.component";
import {CabelsComponent} from "./cabels/cabels.component";
import {PcPartsComponent} from "./pc-parts/pc-parts.component";
import {NetworkingComponent} from "./networking/networking.component";
import {HeadphonesComponent} from "./headphones/headphones.component";
import {KeyboardsAndMousesComponent} from "./keyboards-and-mouses/keyboards-and-mouses.component";
import {AccesorisesForElerctronicsComponent} from "./accesorises-for-elerctronics/accesorises-for-elerctronics.component";
import {PrintersComponent} from "./printers/printers.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, NotebooksComponent, ComputersComponent,
    MonitorsComponent, GamingComponent, TabletsComponent,
    CabelsComponent, PcPartsComponent, NetworkingComponent,
    HeadphonesComponent, KeyboardsAndMousesComponent,
    AccesorisesForElerctronicsComponent, PrintersComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectdz3';
}
