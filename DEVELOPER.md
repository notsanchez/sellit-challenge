# Instruções para Configuração e Deploy do Projeto - Sellit API

Como configurar e executar o projeto localmente (com e sem Docker) e como realizar o deploy para produção.

---

## 📦 **Requisitos**

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- **Node.js** (recomendado: versão 18 ou superior)
- **Docker** e **Docker Compose** (se optar por usar Docker)
- **PostgreSQL** (se executar sem Docker)

---

## 🚀 **Executando o Projeto Localmente**

### **Opção 1: Usando Docker**

1. **Certifique-se de que o Docker e o Docker Compose estão instalados**.
2. Navegue até a raiz do projeto.
3. Execute o seguinte comando no terminal:
   ```bash
   docker-compose up --build
4. O projeto estará disponível em http://localhost:3000 com a documentação do Swagger

### **Opção 2: Sem Docker**
1. **Certifique-se de que o PostgreSQL está rodando localmente**.
2. Configure as variáveis de ambiente no arquivo ```.env```
    ```bash
   DATABASE_URL=postgres://<user>:<password>@<host>:<port>/<database>
3. Instale as dependências:
    ```bash
   npm install --force
4. Execute as migrações para criar as tabelas no banco de dados:
    ```bash
   npx drizzle-kit push
5. Inicie o servidor de desenvolvimento:
    ```bash
   npm run dev
6. O projeto estará disponível em http://localhost:3000 com a documentação do Swagger

## 🌐 **Deploy para Produção**
1. Certifique-se de ter configurado as variáveis de ambiente no servidor de produção. Um exemplo de configuração no arquivo ```.env```:
    ```bash
    DATABASE_URL=postgres://<user>:<password>@<host>:<port>/<database>
    NODE_ENV=production
2. Após a construção, inicie o servidor de produção:
    ```bash
    npm start
3. Para realizar o deploy utilizando Docker, você pode usar o ```docker-compose.yml``` configurado no projeto. Suba os containers com:
    ```bash
    docker-compose up --build -d

## 📚 **Informações Adicionais**
**Banco de Dados**: Certifique-se de que o banco PostgreSQL está configurado e acessível tanto em ambiente local quanto de produção.

**Porta Padrão**: O projeto utiliza a porta 3000 por padrão. Altere isso, se necessário, no arquivo .env ou nas configurações do servidor.