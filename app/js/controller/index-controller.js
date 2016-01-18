//Controller, um arquivo .js que contém funcionalidades pertinentes à alguma parte do documento HTML
//esse controller é referenciado no index.html por ng-controller, colocando o nome registrado nele
//analogia com o flex seria a parte do script das telas, cada tela teria um .js
//inject tem o array de dependências do que vai ser injetado na função

angular.module('delta')
    .controller('IndexController', IndexController);
//IndexController.$inject['$scope'];
function IndexController($scope){
    $scope.nome = 'Diogo';
    $scope.testeFuncao = testeFuncao;
    $scope.$watch('nome', onChangeNome);

    function onChangeNome(novoValor, valorAntigo){

    }
    function testeFuncao(){
        alert('Olá '+ $scope.nome);
    }
}