/**
 * Created by diogo on 14/01/2016.
 */
angular.module ('delta')
    .service('ParametrosAplicacao', ParametrosAplicacao);

function ParametrosAplicacao(){
    return{
        nomeDoUsuario:'',
        email: '',
        logado: false
    };
}