

# Plano: Corrigir Modais + Newsletter Customizada + Nova Foto

## Resumo

Vou implementar tres correcoes principais:
1. **Modais funcionais** com formularios MailerLite carregando corretamente
2. **Newsletter Section customizada** com campos de nome e email estilizados (conectados ao MailerLite)
3. **Trocar foto da autora** para a nova imagem enviada

---

## 1. Corrigir Modais do MailerLite

### Problema
Os formularios embarcados do MailerLite nao renderizam dentro dos modais porque o script nao detecta elementos adicionados ao DOM apos o carregamento inicial.

### Solucao Tecnica
- Usar `key` dinamico baseado em timestamp para forcar React a recriar o elemento `ml-embedded`
- Implementar multiplas tentativas de `ml("refresh")` com intervalos progressivos (200ms, 500ms, 1000ms)
- Garantir que o script so e inicializado uma vez globalmente

### Arquivos Afetados
- `src/components/NewsletterModal.tsx`
- `src/components/WaitlistModal.tsx`

---

## 2. Newsletter Section com Formulario Customizado

### Problema Atual
A secao usa apenas `<div class="ml-embedded">` que renderiza o formulario padrao do MailerLite, sem controle visual.

### Nova Abordagem
Criar um formulario customizado estilizado com:
- Campo de **Nome** (Input do shadcn/ui)
- Campo de **Email** (Input do shadcn/ui)
- Botao de **Submit** estilizado
- Formulario MailerLite **oculto** que recebe os dados e faz o submit real

### Fluxo de Dados

```text
Usuario preenche formulario customizado
         |
         v
Ao clicar "Inscrever", JavaScript:
  1. Preenche campos ocultos do MailerLite
  2. Dispara submit do formulario MailerLite
         |
         v
MailerLite processa e mostra mensagem de sucesso
```

### Design Visual

```text
+------------------------------------------+
|      [icone] Newsletter quinzenal        |
|                                          |
|   Receba acolhimento na sua caixa...     |
|   Reflexoes, conteudos exclusivos...     |
|                                          |
|   +----------------------------------+   |
|   | Nome                             |   |
|   +----------------------------------+   |
|   +----------------------------------+   |
|   | E-mail                           |   |
|   +----------------------------------+   |
|   +----------------------------------+   |
|   |     Quero receber! [botao]       |   |
|   +----------------------------------+   |
|                                          |
+------------------------------------------+
```

### Arquivos Afetados
- `src/components/NewsletterSection.tsx` (reescrever com formulario customizado)

---

## 3. Trocar Foto da Autora

### Acao
- Copiar `user-uploads://autor_luiza_resized.webp` para `src/assets/luiza-pinheiro.webp` (substituindo a atual)
- Manter mesmo import no `AboutSection.tsx`

### Arquivo Afetado
- `src/assets/luiza-pinheiro.webp` (substituir)

---

## Detalhes Tecnicos

### NewsletterSection.tsx - Nova Estrutura

```text
Estado:
- name: string
- email: string
- isSubmitting: boolean
- isSuccess: boolean

Logica:
1. Renderizar formulario MailerLite oculto (visibility: hidden, height: 0)
2. Formulario customizado visivel com inputs estilizados
3. No submit:
   a. Buscar inputs dentro do ml-embedded oculto
   b. Preencher com valores do state
   c. Disparar click no botao submit do MailerLite
   d. Mostrar feedback de sucesso
```

### Modais - Logica de Refresh Melhorada

```text
useEffect quando open = true:
1. Gerar refreshKey unico (Date.now())
2. Carregar script MailerLite se nao existir
3. Tentar ml("refresh") em:
   - 200ms
   - 500ms
   - 1000ms
4. Usar MutationObserver para detectar quando form renderizou
```

---

## Arquivos a Modificar

| Arquivo | Alteracao |
|---------|-----------|
| `src/assets/luiza-pinheiro.webp` | Substituir pela nova foto |
| `src/components/NewsletterSection.tsx` | Formulario customizado com nome + email |
| `src/components/NewsletterModal.tsx` | Key dinamico + multiplas tentativas de refresh |
| `src/components/WaitlistModal.tsx` | Key dinamico + multiplas tentativas de refresh |

---

## Resultado Esperado

- Modais abrem com formularios do MailerLite visiveis e funcionais
- Secao Newsletter tem visual customizado alinhado ao design do site
- Campos de nome e email integrados com MailerLite
- Foto da autora atualizada com a nova imagem

