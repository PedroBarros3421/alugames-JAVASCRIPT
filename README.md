# AluGames

## Descrição
O **AluGames** é uma aplicação web que permite aos usuários alugar boardgames. O sistema exibe uma lista de jogos disponíveis para aluguel, com a opção de devolver os jogos que já foram alugados. A interface é simples e interativa, proporcionando uma experiência amigável ao usuário.

## Como instalar e rodar o projeto
Para executar este projeto, siga as instruções abaixo:

1. **Clone o repositório**: 
   ```bash
   git clone https://github.com/MarceloGODev/alugames-MGO.git
2. **cd alugames-MGO**

## Tecnologias utilizadas
- JavaScript
- HTML
- CSS

### Funcionalidades
- Exibe uma lista de boardgames disponíveis para aluguel.
- Permite que o usuário alugue ou devolva jogos com um simples clique.
- Atualiza dinamicamente a interface conforme os jogos são alugados ou devolvidos.
- Design responsivo e atraente.

### Exemplo de uso
1. Abra a aplicação em um navegador.
2. Visualize a lista de jogos disponíveis.
3. Clique no botão "Alugar" para alugar um jogo.
4. Se você já alugou um jogo, clique em "Devolver" para retorná-lo.

## Informações sobre como contribuir
Este projeto aceita qualquer contribuição útil que ajude a manter o código atualizado e a melhorar sua funcionalidade. Isso pode incluir correções de bugs, melhorias na documentação, novas funcionalidades ou otimizações de desempenho. Sinta-se à vontade para abrir um pull request com suas sugestões ou relatar problemas que você encontrar.

## Links para documentação
Para aprender mais sobre JavaScript e suas funcionalidades, consulte a [documentação oficial do JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript). Para informações sobre HTML, você pode visitar a [documentação oficial do HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) e para aprender mais sobre CSS, consulte a [documentação oficial do CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS). Esses recursos abrangentes oferecem guias, tutoriais e referências detalhadas sobre as tecnologias, permitindo que desenvolvedores de todos os níveis aprimorem suas habilidades e conhecimentos.

## Comentários sobre o código
### HTML
A estrutura HTML é responsável pela criação da interface do usuário. Ela define os campos de entrada onde o usuário pode especificar a quantidade de números a serem sorteados, o intervalo mínimo e máximo, e o botão para iniciar o sorteio. Os elementos HTML, como `input` e `button`, permitem interações do usuário com a aplicação. A área de resultados exibe os números sorteados após a execução do sorteio.
### CSS
O CSS é utilizado para estilizar a aplicação, proporcionando uma melhor experiência visual ao usuário. Ele define a aparência dos elementos, como cores, fontes, tamanhos e espaçamentos, garantindo que a interface seja amigável e atraente. Os estilos são aplicados a classes específicas e IDs dos elementos HTML, permitindo que a aparência da aplicação seja ajustada facilmente sem alterar a estrutura do HTML.
### JavaScript
O JavaScript é a parte do código que traz interatividade à aplicação. Ele puxa informações do HTML por meio do uso de métodos como `document.getElementById()`, que permite acessar os valores inseridos pelo usuário nos campos de entrada. As funções JavaScript realizam a lógica do sorteio, gerando números aleatórios dentro do intervalo especificado, garantindo que os números sorteados não se repitam. Além disso, o JavaScript atualiza a interface do usuário com os resultados do sorteio e gerencia o estado dos botões (ativando ou desativando) com base nas ações do usuário.
