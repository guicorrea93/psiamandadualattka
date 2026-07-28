# Site Psi Amanda Dualattka

Site institucional estatico para apresentacao profissional, temas de atendimento
e informacoes de contato.

## Entrega

| Arquivo | Funcao |
| --- | --- |
| `index.html` | Pagina principal do site. |
| `style.css` | Estilos responsivos. |
| `script.js` | Interacoes do front-end. |
| `CNAME` | Dominio customizado do GitHub Pages. |
| `robots.txt` | Orientacao para crawlers. |
| `sitemap.xml` | Mapa do site para indexacao. |
| `favicon.png` | Icone do site. |
| `ads/` | Imagens usadas nas campanhas do Google Ads. |

## Assets

O projeto usa imagens locais em `.webp`, `.jpg`, `.png` e ondas decorativas em
`.svg`. Os principais blocos visuais incluem:

- imagem de hero;
- avatar/perfil;
- fundos de secoes;
- imagens de temas como ansiedade, autoestima, carreira, infancia, luto e
  relacionamentos.

As imagens da pasta `ads/` nao sao referenciadas diretamente pelo site. Elas
sao mantidas no repositorio para uso em campanhas do Google Ads.

## Como Rodar Localmente

Por ser um site estatico, pode ser aberto diretamente pelo `index.html`. Para
testar como servidor local:

```powershell
python -m http.server 8000
```

Acesse `http://localhost:8000`.

## Manutencao

- Otimize imagens antes de publicar alteracoes.
- Verifique responsividade em mobile e desktop.
- Atualize `sitemap.xml` se novas paginas forem adicionadas.
- Preserve o `CNAME` se o dominio customizado continuar ativo.
