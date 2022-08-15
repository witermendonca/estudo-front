import { UniqueIdService } from './unique-id.service';

/**
 * A função describe recebe dois parâmetros.
 * O primeiro é uma descrição do artefato que queremos testar e o segundo é uma função.
 * Toda nossa lógica de teste fica envolvida pela função passada como segundo parâmetro.
 */
describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  /**
   * Tem como papel principal garantir que cada chamada à função it
   * tenha seu próprio conjunto de dados de testes.
   * Isso evita que mudança de estado no conjunto de dados de teste vaze para outro.
   */
  beforeEach(() => {
    service = new UniqueIdService();
  });

  //it codigo das condições que quero testar
  //alguma coisa deve(shoud) fazer algo quando(when) determinada função for determinada.
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate Ids when called multiple times`, () => {
    //const firstId = service.generateUniqueIdWithPrefix('app');
    //const secondId = service.generateUniqueIdWithPrefix('app');
    //expect(firstId).not.toBe(secondId);

    /**
     * Para conseguir varios ids para comparação,
     * Vamos usar um Set que não permite strings iguais
     * assim com o size do set conseguimos verificar se todos os ids gerados são diferentes
     */

    const ids = new Set();
    for (let i = 0; i < 50; i++)
      ids.add(service.generateUniqueIdWithPrefix('app'));
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name} should return the number of generated ids when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');

    expect(service.getNumberOfGeneratedIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw when called with empty`, () => {
    /**
     * toThrow() necessita que o método a ser chamado seja embrulhado por uma função.
     *Para verificar se está dando uma exception devemos verivificar chamando por uma função anonima.
     */
    const emptyValue = [null, undefined, '', '0', '2'];
    emptyValue.forEach((emptyValue) => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
      .withContext(`Empty value: ${emptyValue}`)
      .toThrow();
    });
  });

  it(`ToBe, ToBeTrue e ToBeTruthy`, () =>{
    //so testa se o valor é verdadeiro a true
    expect(true).toBeTrue();

    //compara se um valor é igual a outro
    //se trabalhar para dois enderços na memoria diferentes vão ser diferentes
    expect(true).toBe(true);

    //é o mais generico para
    //segue as regras javascript verdadeiro ou false
    expect(true).toBeTruthy();
  })
});
