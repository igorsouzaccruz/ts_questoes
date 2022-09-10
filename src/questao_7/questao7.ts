import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
import { Candidato } from './candidato';

const prompter = PromptSync();

export class QuestaoSete implements IAlgoritimo {
  private votosInvalidos: number = 0;

  constructor(
    private quantidadeVotantes: number,
    private candidatos: Array<Candidato>
  ) {
    this.realizarVotacao();
  }

  titulo(): string {
    return 'QUESTÃO 7';
  }

  entradaDeDados(): void {
    throw new Error('Method not implemented.');
  }

  processamentoDosDados() {
    throw new Error('Method not implemented.');
  }

  saidaDosDados() {
    throw new Error('Method not implemented.');
  }

  // SAIDA DE DADOS
  public mostrarResultado(): void {
    console.log('- QUESTÃO 07');
    this.candidatos.forEach((candidato) => {
      console.log(
        `O Candidato ${candidato.nome} recebeu ${candidato.votos} voto(s)`
      );
    });
    console.log(`Votos anulados: ${this.votosInvalidos} voto(s)`);
  }

  private realizarVotacao() {
    const mensagemParaPedirVoto: string = this.mensagemParaPedirVoto();
    for (let index = 0; index < this.quantidadeVotantes; index++) {
      console.log();
      console.log(mensagemParaPedirVoto);
      const voto: number = Number(prompter(''));
      this.addVoto(voto);
    }
  }

  private mensagemParaPedirVoto(): string {
    const ultimaVirgulaEncontrada = new RegExp(', ' + '([^' + ',' + ']*)$');
    const trocarPorOu = ' ou ' + '$1'; //$1 representa a string depois da ULTIMA virgula encontrada
    const opcoesDeVotos = this.candidatos
      .map((candidato) => candidato.id)
      .join(', ')
      .replace(ultimaVirgulaEncontrada, trocarPorOu);
    return `Deseja votar em quem? Lembrando números (${opcoesDeVotos})`;
  }

  private addVoto(voto: number): void {
    const foiInvalidado = this.votoInvalido(voto);
    if (foiInvalidado) {
      console.log(`Seu voto foi anulado`);
      return;
    }
    const candidatoVotado: Candidato = this.candidatos.find(
      (candidato) => candidato.id === voto
    );
    candidatoVotado.addVoto();
  }

  private votoInvalido(voto: number): boolean {
    if (isNaN(voto)) {
      this.votosInvalidos++;
      return true;
    }
    let candidatoVotado: Candidato = this.candidatos.find(
      (candidato) => candidato.id === voto
    );
    if (!candidatoVotado) {
      this.votosInvalidos++;
      return true;
    }
    return false;
  }
}
