# Fundamentos-Angular
Curso angular alura

Link para repositorio de curso Angular: Começando com o framework
https://github.com/alura-cursos/1952-angular/tree/aula-7

. Utilize os recursos do framework para acelerar o desenvolvimento
. Aprenda a criar componentes Angular
. Entenda como transmitir informação entre componentes
. Integre dados com API’s REST
. Transforme seus componentes em páginas

Angular: Boas práticas em arquiteturas e formulários
. Entenda como começar um projeto com melhores validações de tipos utilizando o modo strict
. Organize melhor seu projeto Angular utilizando módulos
. Melhore a performance da sua aplicação conhecendo o Lazy Loading
. Aprenda a criar formulários simples com módulo de Formulários Template Driven
. Crie formulários elaborados utilizando o módulo de Formulários Reativos
. Desenvolva validações síncronas e assíncronas para seus formulários.
. Aprenda como utilizar token JWT no seu projeto Angular

aula-1 home:
Nesta aula:

Começamos um projeto utilizando o angular/cli como ferramenta de apoio em todo nosso fluxo de trabalho. Utilizando a opção --strict, ligamos mais verificações de tipo no nosso projeto, melhorando logo na largada a nossa qualidade do nosso código.
Aprendemos como configurar o Bootstrap como framework de CSS global para nossa aplicação.
Começamos também a estruturar nossa aplicação utilizando o módulo Angular. Com a técnica do lazy loading, melhoramos o carregamento inicial da nossa aplicação.
Estudamos também como é composto um componente Angular e quais são os arquivos que o angular/cli gera para nós.
Começamos a desenvolver nossa primeira funcionalidade: o formulário de Login.

aula-2 Login: 
Neste aula, aprendemos:

Como interagir com nosso backend utilizando o serviço HttpClient do Angular.
Como utilizar o mecanismo de Injeção de dependência do Angular para criar nossos próprios serviços e injetá-los nos nossos componentes.
Vimos também como criar um formulário do tipo Template Driven, em que toda a montagem e a regra de negócio ficam no arquivo de template, e o Angular realiza o controle do modelo de dados utilizando o componente ngModel.
Criamos um componente de mensagens genérico e aprendemos como receber parâmetros utilizando o @Input e como mostrar conteúdo dinâmico utilizando a interpolação do Angular.
Por fim, implementamos as validações do nosso formulário HTML utilizando o ngModel para pegar a referência do campo para avaliar se ele está válido ou não.

aula-3 Cadastro:
Nesta aula, aprendemos:

Como criar um formulário utilizando a técnica de formulários reativos, em que nós temos um pouco mais de configurações, mas ganhamos mais possibilidades e controle sobre o formulário.
Estudamos a diretiva routerLink e como o Angular analisa o caminho passado, avaliando primeiro a rota do módulo do componente e depois a rota global.
Criamos o serviço de cadastro de novo usuário e utilizamos a boa prática de criar uma interface para o retorno do backend e assim termos melhor produtividade e menos erros.

aula-4 validando formulario assincrono:
Nesta aula:

Exploramos o tópico de validações em formulário reativos no Angular. e aprendemos como aplicar validações comuns e padronizadas no nosso componente do nosso formulário, além de usar a classe utilitária Validators, padrão do Angular.
Criamos uma validação customizada para um campo e vimos quais são os requisitos para uma função ser reconhecida como validação no Angular.
Também trabalhamos em uma função de validação que avaliava mais do que um campo do nosso formulário.
Por fim, criamos uma validação que consulta o backend da nossa aplicação e aprendemos sobre os operadores RXJS, uma biblioteca poderosa que o Angular utiliza.

aula-5 Autenticação:
Nesta aula:

Começamos a tratar as informações do nosso usuário que o backend nos retorna na forma de um token JWT (Json Web Token).
Instalamos uma biblioteca que nos ajuda a trabalhar com esse tipo de dado e criamos um serviço exclusivamente para tratar a gravação e recuperação do token.
Criamos também um serviço que representa as operações com o usuário logado e nesse serviço decodificamos e fazemos o uso do objeto Subject do RXJS para propagar as alterações das informações do usuário.
Por fim, criamos o cabeçalho e rodapé da nossa interface interagindo com esse serviço de Usuário.



Angular: Controle o fluxo de navegação
. Aprenda como utilizar a composição para criar componentes reutilizáveis e melhorar sua produtividade.
. Entenda como realizar a operação de upload de fotos no seu front-end.
. Otimize o seu site utilizando serviços do tipo Resolver.
. Controle o fluxo de navegação do seu usuário com guarda de rotas.
. Aprenda a manipular as requisições da sua aplicação criando serviços do tipo Interceptor.

aula-1 Cartão animais:
Nesta aula, aprendemos:

Como criar um componente reutilizável, recebendo atributos utilizando o decorator @Input
Aprendemos a projetar um conteúdo externo no nosso componente utilizando a diretiva ng-content
Criamos um serviço e enviamos além dos parâmetros, o header da requisição utilizando o objeto HttpHeaders
Centralizamos a configuração do endereço da API utilizando o arquivo de environment.

aula-2 lista animais:
Nesta aula, aprendemos:

Como criar uma página utilizando diversos componentes reutilizáveis utilizando a composição.
Aprendemos a utilizar o operador switchMap para concatenar dois fluxos de informações e não realizar um subscribe dentro de outro subscribe.
Aprendemos a utilizar guarda de rotas para controlar o fluxo de navegação do usuário em nossa aplicação.

aula-3 detalhes animais:
Nesta aula, aprendemos:

Como parametrizar a rota da aplicação e utilizar essa informação com o serviço ActivatedRoute
Aprendemos como anexar o token a todas as requisições ao backend criando um serviço do tipo Interceptor
Criamos as funções de curtir e excluir e aprendemos mais sobre os operadores mapTo e catchError

aula-4 comentarios:
Nesta aula, aprendemos:

Como carregar informações do servidor enquanto a rota é carregada utilizando o serviço do tipo Resolver
Criamos o componente de comentários e anexamos ele ao nosso componente de detalhe do animal
Aprendemos a como resetar o formulário após a requisição utilizando o operador tap


aula-5 novo animal:
Nesta aula, aprendemos:

Como criar CSS para um componente específico, criando a animação do Menu da aplicação
Criamos um serviço de upload e aprendemos como enviar uma foto para nosso backend
Aprendemos a utilizar o HttpClient do Angular para monitorar o progresso da operação de upload.
Como criar o pacote do nosso projeto de front-end para ser enviado para a produção através do comando ng build.