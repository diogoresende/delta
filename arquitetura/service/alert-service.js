/**
 * Created by diogo on 14/01/2016.
 */
angular.module ('delta')
    .service('AlertService', AlertService);

AlertService.$inject = ['toastr'];

function AlertService(toastr){
    this.showSuccess = showSuccess;
    this.showError = showError;
    this.showInfo = showInfo;
    this.showWarning = showWarning;

    function showSuccess(mensagem, titulo){
        if(!titulo){
            titulo = 'ok';
        }


        toastr.success(mensagem, titulo, {progressBar: true});
    }

    function showError(mensagem, titulo){
        if(!titulo){
            titulo = 'Erro';
        }
        toastr.error(mensagem, titulo, {progressBar: true});
    }

    function showInfo(mensagem, titulo){
        if(!titulo){
            titulo = 'Informe';
        }
        toastr.info(mensagem, titulo, {progressBar: true});
    }

    function showWarning(mensagem, titulo){
        if(!titulo){
            titulo = 'Atenção';
        }
        toastr.warning(mensagem, titulo, {progressBar: true});
    }
}