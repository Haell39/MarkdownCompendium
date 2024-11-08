## 1. **Integração por Substituição**

Essa técnica é usada quando você consegue transformar uma integral complicada em uma mais simples, mudando a variável de integração. A ideia é fazer uma substituição que simplifique a função.

****Exemplo de uso:****
$$
\int e^{3x} \, dx
$$

**Passos:**

- Substitua $$ u = 3x $$, então $$ du = 3dx $$, ou $$ dx = \frac{du}{3} $$.
- A integral agora fica:
  $$
  \int e^u \cdot \frac{du}{3} = \frac{1}{3} \int e^u \, du
  $$
- Resolva a integral simples:
  $$
  \frac{1}{3} e^u + C
  $$
- Substitua $$ u = 3x $$ de volta:
  $$
  \frac{1}{3} e^{3x} + C
  $$

## 2. **Integração por Partes**

Essa técnica é útil quando você tem o produto de duas funções, como $$ e^{3x} \sin(2x) $$. A regra para integração por partes é derivada do produto de duas funções e diz:
$$
\int u \, dv = uv - \int v \, du
$$
Você escolhe uma parte da função para ser $$ u $$ (que vai ser derivada) e a outra para ser $$ dv $$ (que será integrada).

****Exemplo de uso:****
$$
\int x e^x \, dx
$$

**Passos:**

- Escolha $$ u = x $$, então $$ du = dx $$.
- Escolha $$ dv = e^x \, dx $$, então $$ v = e^x $$.
- Agora aplique a fórmula:
  $$
  \int x e^x \, dx = x e^x - \int e^x \, dx
  $$
- Resolva a segunda integral:
  $$
  x e^x - e^x + C
  $$

## 3. **Uso de Identidades Trigonométricas**

Em muitos casos, você precisará utilizar identidades trigonométricas para simplificar as integrais. Por exemplo, ao lidar com integrais envolvendo $$ \sin(2x) $$, $$ \cos(2x) $$, ou outros produtos trigonométricos.

****Identidades úteis:****

- $$ \sin^2(x) + \cos^2(x) = 1 $$
- $$ \sin(2x) = 2\sin(x)\cos(x) $$
- $$ \cos(2x) = \cos^2(x) - \sin^2(x) $$

Essas identidades ajudam a transformar funções trigonométricas em formas mais simples para integração.

****Exemplo:****
$$
\int \sin(2x) \, dx
$$

**Passos:**

- Use a identidade $$ \sin(2x) = 2\sin(x)\cos(x) $$.
- A integral fica:
  $$
  \int 2 \sin(x) \cos(x) \, dx
  $$
- Agora, use a substituição $$ u = \sin(x) $$, então $$ du = \cos(x) \, dx$$, o que torna a integral mais simples:
  $$
  2 \int u \, du = u^2 + C = \sin^2(x) + C
  $$

## 4. **Integração de Funções Exponenciais e Logarítmicas**

Para integrais com funções exponenciais ou logarítmicas mais complexas, é importante lembrar algumas fórmulas básicas:

- $$\int e^{ax} \, dx = \frac{1}{a} e^{ax} + C$$
- $$\int \frac{1}{x} \, dx = \ln|x| + C$$
- $$\int a^x \, dx = \frac{a^x}{\ln(a)} + C$$

Essas fórmulas são essenciais, especialmente quando combinadas com outras técnicas, como substituição.

****Exemplo:****
$$
\int e^{3x} \sin(2x) \, dx
$$

Este é um exemplo clássico onde **integração por partes** será usada duas vezes. Primeiro, você integra por partes escolhendo $$ u = e^{3x} $$ e $$ dv = \sin(2x) \, dx$$. Depois, o processo é repetido até obter uma equação que possa ser resolvida.

## Passo a Passo para Resolver Integrais de Nível 2

1. **Identifique a técnica**: Veja se a integral pode ser resolvida por substituição ou por partes.

2. **Substitua ou quebre a função**: Se for possível usar substituição, faça isso para simplificar a função. Se for por partes, escolha as funções adequadas para $$ u$$ e $$ dv$$.

3. **Use identidades trigonométricas**: Se a função envolver senos, cossenos ou tangentes, tente usar identidades para simplificar.

4. **Resolva a nova integral**: Após simplificar a integral, calcule a antiderivada.

5. **Substitua de volta**: Se você fez uma substituição, lembre-se de voltar à variável original no final.

## Exercícios para Praticar:

1. Resolva a integral indefinida:
   $$
   \int e^{4x} \cos(2x) \, dx
   $$

2. Calcule a integral definida:
   $$
   \int_0^1 x e^x\, dx
   $$

3. Resolva a integral indefinida:
   $$
   \int\ln(x)\, dx
   $$

Esses exercícios te ajudarão a reforçar essas técnicas.
