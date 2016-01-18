//Controller, um arquivo .js que contém funcionalidades pertinentes à alguma parte do documento HTML
//esse controller é referenciado no index.html por ng-controller, colocando o nome registrado nele
//analogia com o flex seria a parte do script das telas, cada tela teria um .js
//inject tem o array de dependências do que vai ser injetado na função

angular.module('delta')
    .controller('IndexController3', IndexController3);
IndexController3.$inject = ['$scope', '$timeout', 'AlertService', '$filter'];
function IndexController3($scope, $timeout, AlertService, $filter){
    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.myClass = '';
    $scope.ultimaDataCadastrada = '';
    $scope.onClickEditar = onClickEditar;
    $scope.getRowStyle = getRowStyle;
    $scope.onClickExcluir = onClickExcluir;
    iniciar();

    function iniciar(){
        $scope.gridOptions = {
          data: 'listaDePessoas',
          columnDefs:[
              {field:'nome', displayName:'Nome', width:200},
              {field:'sobrenome', displayName:'Sobrenome'},
              {field:'nascimento', displayName:'Data Nascimento', width:150, cellTemplate:'app/template/cell-template-date.html'},
              {field:'editarGrid', displayName:'', width:70, cellTemplate:'app/template/cell-template-editar.html'}
          ],
            rowTemplate:'app/template/row-template.html'

        };
    }

    function salvar(){
        setarTouchedNosInputs();

        if($scope.formPessoa.$invalid){
            AlertService.showError('Er ro, verifique os campos antes de salvar!', 'Erro');
            return;
        }
        $scope.listaDePessoas.push($scope.entidade);

        var data = $scope.entidade.nascimento;
        $scope.ultimaDataCadastrada = $filter('date')(data, 'dd/MM/yyyy');

        AlertService.showSuccess('Registro salvo com sucesso!', 'Ok');
        limpar();
    }

    function limpar(){
        $scope.entidade = {};
        $timeout(function(){
            setarUnTouchedNosInputs();
        }, 90);

    }

    function setarTouchedNosInputs(){
        /*
         angular.forEach(objetoOuArray, function(propriedadeOuItemArray, nomePropriedade){

         });
         */
        //$scope.formPessoa.$error = objeto com os erros
        //$scope.formPessoa.nome.$error = objeto com os erros do campo nome
        //$scope.formPessoa.nome.$setTouched(); seta touched e no for each faz dinamico

        angular.forEach($scope.formPessoa.$error, function(error){
            angular.forEach(error, function(field){
                field.$setTouched();
            });
        });
    }

    function setarUnTouchedNosInputs(){
        angular.forEach($scope.formPessoa.$error, function(error){
            angular.forEach(error, function(field){
                field.$setUntouched();
            });
        });
    }

    function onClickEditar(objSelecionado){
        $scope.entidade = objSelecionado;
    }

    function onClickExcluir(objSelecionado){
        $scope.listaDePessoas.splice($scope.listaDePessoas.indexOf(objSelecionado), 1);
    }


    function getRowStyle(linhaSelecionada){
        var style = {};
        style.backgroundColor = linhaSelecionada.cor;
        style.color = 'white';
        return style;
    }
}