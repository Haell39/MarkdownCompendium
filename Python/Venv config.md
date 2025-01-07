

## Para ativar e iniciar a venv

### 1. **Verificar a Política de Execução Atual**
Digite o seguinte comando no PowerShell para verificar a política de execução:
```powershell
Get-ExecutionPolicy
```
Se o resultado for `Restricted` ou algo semelhante, é necessário alterá-lo.

### 2. **Alterar a Política de Execução**
Altere a política para permitir a execução de scripts. Execute o seguinte comando no PowerShell com privilégios de administrador:
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
- **`RemoteSigned`**: Permite a execução de scripts locais sem assinatura, mas exige assinatura para scripts baixados da internet.
- **`CurrentUser`**: Aplica a mudança apenas para o usuário atual, sem afetar outros usuários no sistema.

### 3. **Confirmar a Mudança**
Verifique novamente a política para confirmar que a alteração foi aplicada:
```powershell
Get-ExecutionPolicy•
```

### 4. **Ativar o Ambiente Virtual**
Agora, tente novamente ativar o ambiente virtual:
```powershell
.\venv\Scripts\activate
```

### 5. Salvar dependencias
```
pip freeze > requirements.txt
```

---

### **Dicas Adicionais**
- Se você não quiser alterar permanentemente a política, pode iniciar o PowerShell com o parâmetro `-ExecutionPolicy Bypass`:
  ```powershell
  powershell -ExecutionPolicy Bypass
  ```
- Caso o problema persista, certifique-se de que você está executando o PowerShell no mesmo diretório do ambiente virtual.


## Estrutura simples da venv

