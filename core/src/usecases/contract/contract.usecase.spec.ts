import { Contract } from '../../models/contract/contract';
import { ContractUsecase } from './contract.usecase';

describe('契約書', () => {
  test('発注者が、"エンジニアから承諾の通知を受信"した時、契約書が生成される。', () => {
    const contractUsecase = new ContractUsecase();
    expect(() => {
      contractUsecase.generateContract(new Contract());
    }).toThrowError();
  });

  test('発注者が、"エンジニアから承諾の通知を受信"していない時、契約書が生成されない。', () => {
    const contractUsecase = new ContractUsecase();
    expect(() => {
      contractUsecase.generateContract(new Contract());
    }).not.toThrowError();
  });

  test('発注者が、"エンジニアから否認の通知を受信"した時、契約書が生成されない。', () => {
    const contractUsecase = new ContractUsecase();
    expect(() => {
      contractUsecase.generateContract(new Contract());
    }).not.toThrowError();
  });

  test('発注者が、"エンジニアから否認の通知を受信"していない時、契約書が生成されない。', () => {
    const contractUsecase = new ContractUsecase();
    expect(() => {
      contractUsecase.generateContract(new Contract());
    }).not.toThrowError();
  });
});
