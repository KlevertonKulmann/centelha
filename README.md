# Centelha configs para desenvolvimento

## WINDOWS
- Passo 1
    Instalar o nodeJS (acessar o site deles e baixar a versão LTS)
- Passo 2
    Instalar Ruby (acessar o site e baixar a versão com devkit)
        Passar pelos passos do instalador e executar o programa no final da instalação padrão do Ruby, escolher a opção 3
- Passo 3
    Instalar SASS pelo prompt de comando do Ruby:
        <gem install sass>
- Passo 4
    Adicionar o Path na variavel de ambiente(caso ainda não tenha configurado)
    Abra o menu do windows e digite "variaveis"
    Seleciona a opção "editar as variaveis de ambiente do sistema"
    Na janela que abrir escolha a opção "Variaveis de ambiente"
    No bloco de variaveis do usuario esolha a linha que tem escrito "Path" e clique em editar
    Na edição da variavel "Path" do usuario, adicione um novo caminho:
        %USERPROFILE%\AppData\Roaming\npm
    clique em OK e feche todas as janelas
- Passo 5
    Abra o teriminal do powershell e digite:
        Get-ExecutionPolicy 
        |caso o retorno for "Restricted" rode o comando abaixo
            Set-ExecutionPolicy RemoteSigned
            Verifique se o comando foi bem executado rodando mais uma vez:
            Get-ExecutionPolicy 

        |caso o retorno for "RemoteSigned" passe para o proximo passo
- Passo 6
    Rodar o comando base de instalação do node:
        <npm install>
- Passo 7
    Rodar o comando:
        <grunt>
    Caso queira desenvolver com livereload nos arquivos de estilo e scripts basta rodar:
        <grunt watch>