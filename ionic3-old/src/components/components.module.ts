import { NgModule } from '@angular/core';
import { ProdutoUsadoComponent } from './produto-usado/produto-usado';
import { FotoEventoResumoComponent } from './foto-evento-resumo/foto-evento-resumo';
import { FotoBocaDetalheComponent } from './foto-boca-detalhe/foto-boca-detalhe';
import { FotoOlhosDetalheComponent } from './foto-olhos-detalhe/foto-olhos-detalhe';
import { FotoRostoDetalheComponent } from './foto-rosto-detalhe/foto-rosto-detalhe';
@NgModule({
	declarations: [ProdutoUsadoComponent,
    FotoEventoResumoComponent,
    FotoBocaDetalheComponent,
    FotoOlhosDetalheComponent,
    FotoRostoDetalheComponent],
	imports: [],
	exports: [ProdutoUsadoComponent,
    FotoEventoResumoComponent,
    FotoBocaDetalheComponent,
    FotoOlhosDetalheComponent,
    FotoRostoDetalheComponent]
})
export class ComponentsModule {}
