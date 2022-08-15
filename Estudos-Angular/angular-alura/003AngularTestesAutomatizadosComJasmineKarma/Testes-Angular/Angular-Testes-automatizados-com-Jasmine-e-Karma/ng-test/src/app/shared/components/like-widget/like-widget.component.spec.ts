import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    /**
     * configura um modulo teste para cada it()
     * declaramos o component nele
     * colocamos ele no bloco async para chamarmos o metodo compileComponents()
     */
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    }).compileComponents();
    /**
     *retorna uma Promise
     assim conseguimos o await esperar ele ser resolvido
     por padrão o angular procura o template de um componente de forma assincrona
     assim o compileComponents vai aguardar a copilação do meu component

     */

    /**
     * fixture é onde contem a instancia do componente LikeWidgetComponent.
     * onde posso acessar metdos do componentes e outras series de métodos utilitarios de
     * que iram ajudar nos testes
     */
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  /**
  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
*/
  it('should create', () => {
    //foi criada a instancia deve ser true
    expect(component).toBeTruthy();
  });

  //deve auto-gerar ID durante ngOnInit quando (@Input id) está faltando
  it(`should auto-generate ID during ngOnInit when (@Input id) is missing`, () => {
    /**
     * para o ciclo de vida do angular disparar precisamos chamar  o
     * fixture.detectChanges();
     * ele ira disparar o ciclo de vida angular
     * assim o método que esta dentro do onInit ira gerar o id.
     */
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  //Não deve gerar Id automaticamente durante ngOnInit quando (@Input id) é atribuído
  it(`should Not auto-generate Id during ngOnInit when (@Input id) is assigned`, () => {
    const someId = 'someId';
    component.id = someId;
    //passamos o id antes de iniciar o onInit e compara se o id é o mesmo passado.
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  /**
   * Se não registramos a ação antes de diparar o Output ele por padão não da erro, apenas um warning
   * para isso devemos tratar a mesma estrategia de teste assincronos
   * usamos o done para quando for Observables usar o subscribe
   * para garantir que o teste falhou
   * se eu chamar o método que dispara o Output ele nunca vai testar a perpectiva e ira gerar erro
   */
  it(`#${LikeWidgetComponent.prototype.like} should trigger (@Output liked) when called`, (done) => {
    //dipara ciclos de vida angular
    fixture.detectChanges();

    //É possível realizar a incrição de propriedades de output
    //em nossos testes como se fossem Observables.
    //para que o teste funcione de maneira esperada primeiro
    //registro minha ação que vai testar minha espectativa
    component.liked.subscribe(() => {
      expect(true).toBeTrue();
      done();
    });
    //e depois chamo o método que ira disparar o Output
    component.like();
  });

  //Mesmo teste de cima com SPY
  it(`#${LikeWidgetComponent.prototype.like} should trigger (@Output liked) when called with Spy`, () => {

    //o Spy guarda uma referencia para o emit original
    //mas é ele que é chamado pelo toHaveBeenCalled
    //passamos um objeto para ele no caso o emit
    //se removermos o like ele vai dar error
    //essa abordagem é uma opção para o mesmo problema resolvido no teste de cima
    /**
     * O teste com toHaveBeenCalled funcionará,
     * pois a função spyOn modificou o método component.liked transformando-o em um spy.
     */
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    //toHaveBeenCalled  sabemos se o método liked foi chamado, porem ele espera um Spy não uma função
    expect(component.liked.emit).toHaveBeenCalled();
  });

});
