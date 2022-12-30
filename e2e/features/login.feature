Feature: Login

  Scenario: Deve realizar o login com sucesso
    Given O usuário visita a página "https://the-internet.herokuapp.com/login"
    When O usuário digita o username "tomsmith"
    When O usuário digita a senha "SuperSecretPassword!"
    Then O sistema deve retornar uma mensagem "You logged into a secure area!"

  Scenario: Não deve realizar o login com credenciais inválidas
    Given O usuário visita a página "https://the-internet.herokuapp.com/login"
    When O usuário digita o username "tomsmith"
    When O usuário digita a senha "123456"
    Then O sistema deve retornar uma mensagem "Your password is invalid!"
