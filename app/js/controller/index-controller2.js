//Controller, um arquivo .js que contém funcionalidades pertinentes à alguma parte do documento HTML
//esse controller é referenciado no index.html por ng-controller, colocando o nome registrado nele
//analogia com o flex seria a parte do script das telas, cada tela teria um .js
//inject tem o array de dependências do que vai ser injetado na função

angular.module('delta')
    .controller('IndexController2', IndexController2);
//IndexController.$inject['$scope'];
function IndexController2($scope){
    $scope.nome = 'Delta';
    $scope.myStyle = {};
    $scope.$watch('nome', onChangeNome);

    function onChangeNome(novoValor, valorAntigo){
        if(novoValor === valorAntigo){
            return;
        }
        if(novoValor ==='delta'){
            $scope.myStyle.backgroundColor = 'blue';
        }
        else{
            $scope.myStyle.backgroundColor = 'green';
        }
    }
}