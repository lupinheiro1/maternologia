

# Plano: Corrigir Modais MailerLite + Overflow Mobile

## Problema Identificado

Os logs mostram o erro: **"Invalid argument 'refresh' passed to MailerLite script"**

O comando `ml("refresh")` **não existe** na API do MailerLite. A abordagem atual está completamente errada.

---

## Solução para os Modais

### Nova Abordagem Técnica

O MailerLite tem duas formas de exibir formulários:

1. **Popups** (recomendado para modais): usar `window.ml("show", "FORM_ID", true)`
2. **Embarcados**: reinjetar o script a cada abertura

Como o formulário precisa aparecer dentro do Dialog do Radix UI, vou usar a técnica de **reinjeção do script** que força o MailerLite a escanear o DOM novamente.

### Lógica Corrigida

```text
Quando modal abre:
1. Limpar conteúdo anterior do container
2. Reinserir o div ml-embedded com data-form
3. Criar e injetar novo script tag do MailerLite
4. Inicializar com ml("account", "2088191")
```

---

## Alterações Técnicas

### NewsletterModal.tsx

```text
Estado:
- Remover refreshKey (não funciona)

useEffect (quando open = true):
1. Limpar container do formulário
2. Criar novo div.ml-embedded com data-form="HSYvQA"
3. Criar novo script element
4. Injetar no container
5. Quando script carrega, chamar ml("account", "2088191")
```

### WaitlistModal.tsx

Mesma lógica, com data-form="tbPNHH"

---

## Correção do Overflow Mobile (Faixa Verde)

### InspirationBand.tsx

```text
Alterações:
1. Adicionar overflow-hidden ao container interno
2. Limitar largura máxima do grid de palavras no mobile
3. Reduzir padding do texto em telas pequenas
```

---

## Arquivos a Modificar

| Arquivo | Alteração |
|---------|-----------|
| `src/components/NewsletterModal.tsx` | Reinjeção do script MailerLite |
| `src/components/WaitlistModal.tsx` | Reinjeção do script MailerLite |
| `src/components/InspirationBand.tsx` | Adicionar overflow-hidden e ajustar responsividade |

---

## Resultado Esperado

- Formulários do MailerLite aparecem corretamente nos modais
- Campos de email e botão de submit visíveis
- Sem barra de rolagem horizontal no mobile
- Texto da faixa verde não cortado

