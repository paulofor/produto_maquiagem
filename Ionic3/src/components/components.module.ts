import { NgModule } from '@angular/core';
import { ListaProdutoUsadoComponent } from './lista-produto-usado/lista-produto-usado';
import { FotoOlhosGeralComponent } from './foto-olhos-geral/foto-olhos-geral';
import { FotoBocaGeralComponent } from './foto-boca-geral/foto-boca-geral';
import { FotoRostoGeralComponent } from './foto-rosto-geral/foto-rosto-geral';
@NgModule({
	declarations: [ListaProdutoUsadoComponent,
    FotoOlhosGeralComponent,
    FotoBocaGeralComponent,
    FotoRostoGeralComponent],
	imports: [],
	exports: [ListaProdutoUsadoComponent,
    FotoOlhosGeralComponent,
    FotoBocaGeralComponent,
    FotoRostoGeralComponent]
})
export class ComponentsModule {}
