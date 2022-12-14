# Configurando

- Utilizar versão do node 16.16.0
- Entrar na pasta e rodar o commando abaixo:

  ```
      npm i
  ```

- Baixar as extensões recomendads no vsCode
  - Clicando no icone de extensões a esquerda (Icone marcado de AZUL). Verifique imagem a baixo
    ![Alt text](./assets/ExtensoesVsCode.png?raw=true 'Extensões')
  - Em seguida procure pelas extensões do workspace e instale todas. Verifique imagem a baixo
    ![Alt text](./assets/ExtensoesVsCodeInstal.png?raw=true 'Extensões')
- Projeto está pronto para desenvolvimento.

# Criando os algoritimos.

- Comandos para entrada e saide de dados

  - Saida de dados

  ```js
  console.log('O texto que você quiser colocar...');
  ```

  - Entrada de dados

  ```js
  import PromptSync from 'prompt-sync'; // Esse import deve ser adicionado na primeira linha da classe criada.
  prompt = PromptSync(); // Variável que deve ser criada em seu algoritimo para fazer uso do comando de entrada de dados.
  this.prompt(''); // Comando que aguardara a entrada do dado do TECLADO. Sempre retornando uma string.
  ```

- Dentro da pasta **src** crie uma pasta como o _nome do arquivo_
  ```
    mkdir src/[nome_da_pasta]
  ```
- Dentro da pasta criei o arquivo **.ts**

  ```
      type nul > src/[nome_da_pasta]/[nome_do_arquivo].ts
  ```

  - O arquivo **.ts** deve ser criado com o contéudo abaixo:

    ```js
    import { IAlgoritimo } from '../interface/algoritimo';
    import PromptSync from 'prompt-sync';
    export class NomeArquivo implements IAlgoritimo {
      prompt = PromptSync();

      titulo(): string {
        //return 'QuestaoBliBli'
        throw new Error('Method not implemented.');
      }
      entradaDeDados(): void {
        console.log('Informe alguma coisa:');
        let valorInformado = this.prompt('');
        throw new Error('Method not implemented.');
      }
      processamentoDosDados() {
        throw new Error('Method not implemented.');
      }
      saidaDosDados() {
        throw new Error('Method not implemented.');
      }
    }
    ```

  - **Então desenvolva seu algoritimo**.

# Para executar/debugar.

- abra o arquivo main.ts localizado na raiz da pasta **src/** do seu projeto. O modelo **cru** deve estar como abaixo:

  ```js
  import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
  import { IAlgoritimo } from './interface/algoritimo';

  const algoritimos: Array<IAlgoritimo> = [];

  const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
    new GerenciadorDeAlgoritimo(algoritimos);

  gerenciadorDosAlgoritimos.executar();
  ```

- para cada _novo algoritimo criado_ adicione-o no Array de algoritimos. Exemplo abaixo:

  - const algoritimos: Array<IAlgoritimo> = [**new NomeArquivoCriado(), new Nome2ArquivoCriado(), new Nome3ArquivoCriado()**];

  ```js
  import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
  import { IAlgoritimo } from './interface/algoritimo';

  const algoritimos: Array<IAlgoritimo> = [
    new NomeArquivoCriado(),
    new Nome2ArquivoCriado(),
    new Nome3ArquivoCriado(),
  ];

  const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
    new GerenciadorDeAlgoritimo(algoritimos);

  gerenciadorDosAlgoritimos.executar();
  ```

- E com o arquivo **main.ts** aberto execute o f5 no vsCode.
