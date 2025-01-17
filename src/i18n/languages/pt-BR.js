export default {
  global: {
    companyName: 'Backoffice Boilerplate',
    successTitle: 'Tudo certo!',
    errorTitle: 'Ocorreu um erro',
    ok: 'OK',
    yes: 'Sim',
    no: 'Não',
    phone: 'Telefone',
    createdAt: 'Data Cadastro',
    screenLoadingText: 'Carregando...',
    languages: {
      english: 'Inglês',
      portuguese: 'Português (BR)',
    },
    validation: {
      required: 'Este campo é obrigatório',
    },
  },
  dashboard: {
    $: 'R$',
    balance: 'Ver saldo',
    yourBalance: 'Seu saldo é:',
    yourLanguage: 'Escolha seu idioma',
    totalReceived: 'Total recebido',
    graduation: 'Graduação',
    operationsToday: 'Operações hoje',
    operationsYesterday: 'Operações ontem',
    performanceChart: 'Gráfico de desempenho',
    latestReturns: 'Últimas operações',
    creationDate: 'Data de criação',
    description: 'Descrição',
    percentage: 'Porcentagem',
    hello: 'Olá, ',
    linkIndication: 'Link de indicação',
    balanceActivationTitle: 'Ativação com Saldo',
    balanceActivationText: 'Você deseja realmente fazer uma ativação utilizando TODO O SEU SALDO?',
    successActivation: 'Sua ativação foi feita com sucesso.',
    validation: {
      zeroBalance: 'Você não tem saldo para poder fazer ativação por saldo',
    },
  },
  profile: {
    placeholderName: 'Ex.: João',
    placeholderUser: 'Ex.: joao_user',
    placeholderEmail: 'Ex.: jõao@gmail.com',
    placeholderPhone: 'Ex.: (11) 98783-4343',
    placeholderCpf: 'Ex.: 012.345.678-90',
    placeholderAddress: 'Ex.: Rua dos Alpes, 1322',
  },
  license: {
    license: 'Investir',
    myLicenses: 'Meus Investimentos',
    formOfPayment: 'Forma de Pagamento',
    selectValue: 'Selecione um valor',
    sendProof: 'Enviar comprovante',
    sendProofText: 'O arquivo deve estar no formato jpg, jpeg ou png e ter no máximo 2 MB.',
    purchase: 'Comprar',
    copy: 'Copiar',
    purshaseRequestTitle: 'Sua solicitação de compra foi feita.',
    purshaseRequestText: 'Aguarde a nossa equipe fazer análise de sua solicitação.',
    purshaseRequestErrorTitle: 'Ocorreu um Erro',
    purshaseRequestErrorText: 'Houve um erro ao tentar solicitar seu pedido',
    datePurchase: 'Data da Compra',
    licenseEmptyMessage: 'Não há investimentos no momento',
  },
  status: {
    pending: 'Pendente',
    approved: 'Aprovado',
    underAnaLysis: 'Em análise',
    refused: 'Recusado',
    awaitingPayment: 'Aguardando Pgto.',
    active: 'Ativo',
    inactive: 'Inativo',
    activeVoucher: 'Ativo',
  },
  signIn: {
    login: 'Login',
    password: 'Senha',
    userName: 'Usuário',
    accessAcount: 'Acessar conta',
    forgotMyPassword: 'Esqueci minha senha',
    enterEmail: 'Digite o e-mail cadastrado',
    enterUsername: 'Digite seu usuário',
    enterPassword: 'Digite sua senha',
    resetPassword: 'Redefinir senha',
    invalidEmail: 'Email inválido',
    validEmail: 'Email valido',
    userOrPasswordInvalid: 'Username ou senha inválido.',
    tryAgain: 'Tentar novamente',
    signUp: 'Não tenho conta, quero me cadastrar',
  },
  signUp: {
    fullName: 'Nome completo',
    email: 'Seu melhor e-mail',
    phone: 'Telefone',
    login: 'Login',
    password: 'Senha',
    passwordConfirm: 'Repita sua senha',
    signUp: 'Quero me cadastrar',
    signIn: 'Já tenho uma conta, quero entrar.',
    validation: {
      validationUsername: 'Somente caracteres alfanuméricos, sublinhados e hífens são permitidos',
      validationPassword: 'A senha é obrigatória',
      validationConfirmPassword: 'A confirmação de senha é obrigatória',
      validationRequiredConfirmPassword: 'As senhas não coincidem',
      invalidEmail: 'Email inválido',
    },
    usernameTip: 'Utilize apenas letras minúsculas, números, traço e underline.',
    phoneTip: 'DDD + Seu telefone',
    successMessageTitle: 'Seu Cadastro foi Realizado.',
    successMessageText: 'Você agora tem acesso a plataforma da Dtrader',
  },
  withdraw: {
    validation: {
      ops: 'Ops',
      invalidWithdrawalDate: 'Hoje não é dia de fazer saques.',
      minimumWithdrawal: 'Valor mínimo: R$ 100,00. O valor deve ser maior que o saldo',
      insufficientBalance: 'Você não tem saldo suficiente para sacar esse valor.',
      invalidCpf: 'CPF inválido',
      elevenChars: 'O CPF deve ter 11 caracteres',
      withdrawCustomerIsBloqued: 'Houve um problema com seu saque. Entre em contato com o suporte.',
    },
    withdraw: 'Sacar',
    withdrawList: 'Lista de Saque',
    withdrawRequest: 'Solicitar Saque',
    withdrawalDays: 'saque apenas em dias: ',
    withdrawNotday: 'Não é dia de saque',
    namePerson: 'Nome da pessoa destinatária',
    cpf: 'Apenas números de CPF',
    pix: 'Chave PIX',
    value: 'Valor (R$)',
    wallet: 'Carteira',
    chooseWallet: 'Escolha sua criptomoeda',
    chooseWalletKey: 'Digite sua carteira',
    chooseValue: 'Digite o valor desejado',
    accountOwner: 'Os dados são os mesmos do proprietário da conta?',
    requestedWithdrawals: 'Saques solicitadas',
    receiverName: 'Nome do recebedor',
    recipientsCpf: 'CPF do destinatário',
    requestDate: 'Data do Pedido',
    refusedDate: 'Data da Recusa',
    status: 'Status',
    refused: 'Recusou',
    close: 'Fechar',
    refusedIn: 'Recusou-se em',
    reason: 'Motivo',
    details: 'Detalhes',
    pending: 'Pendente',
    approved: 'Aprovado',
    withdrawRequestSucess: 'Retirada solicitada com sucesso!!',
    noWithdrawRequest: 'Você ainda não solicitou saques.',
  },
  network: {
    myNetwork: 'Minha Rede',
    actives: 'ativos',
    affiliates: 'investdores',
    directReferences: 'ind. diretos',
    activeDirectReferences: 'ind. dir. ativos',
    level: 'Nível',
    noAffiliatesMessage: 'Não possui investidor no momento',
    Consult: 'Consultar',
    searchAffiliate: 'Busque por um investidor...',
  },
  extract: {
    extract: 'Extrato',
    dataTransaction: 'Data Transação',
    description: 'Descrição',
    type: 'Tipo',
    value: 'Valor',
    noTransactionCell: 'Nenhuma movimentação foi encontrada',
    startDate: 'Data Inicial',
    endDate: 'Data Final',
    filter: 'Consultar',
  },
  transactionTypes: {
    allTypes: 'Todos os Tipos',
    contractPurchase: 'Compra de Licença',
    manualBonus: 'Bônus Manual',
    networkCommission: 'Comissão de Rede',
    manualReversing: 'Estorno Manual',
    withdraw: 'Saque',
    withdrawalTax: 'Taxa de Saque (U$)',
    withdrawalTaxPercent: 'Taxa de Saque (%)',
    profitability: 'Rentabilidade de operação',
    balanceActivation: 'Ativação por Saldo',
    arbitrationProfit: 'Lucro Arbitragem',
    arbitration: 'Arbitragem',
    deposit: 'Depósito',
    voucher: 'Voucher',
    residualCommission: 'Residual',
    operationProfit: 'Lucro Operação',
    dailyLimitReversal: 'Estorno Teto Diário',
    contractFees: 'Taxa Compra Licença',
  },
}
