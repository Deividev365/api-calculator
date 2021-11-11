module.exports = function(server) {

    //route test

    server.route({
        method: 'POST',
        path: '/teste',
        handler: function (pedido){
    
            var data = {
                msg: 'API Calculator - The POST Version'
            };
    
            return data;
        }
    });



    //Route Welcome
    server.route({
        method: 'GET',
        path: '/',
        handler: function (pedido) {

            var data = {
                mensagem: 'Olá, para o uso afetivo da API siga as etapas abaixo',
                instrucoes: 'utilize a rota /operacao/numero/numero',
                operacao: 'Operação matematica a ser usada: soma, subtracao, multiplicacao, divicao',
                numero: 'os numeros que vão fazer parte da operação'
            };

      
    
            return data;
        }
    });


    //route Sum
        server.route({
            method: 'GET',
            path: '/{operation}/{number1}/{number2}',
            handler: function (request) {

                const number1 = parseInt(request.params.number1);
                const number2 = parseInt(request.params.number2);
                const operation = request.params.operation;
               
                switch (operation) {
                    case 'soma':
                        var data = {
                            resultado: number1 + number2
                        };
                      break;
                    case 'subtracao':
                        var data = {
                            resultado: number1 - number2
                        };
                        break;                       
                    case 'multiplicacao':
                        var data = {
                            resultado: number1 * number2
                        };
                      break;
                    case 'divicao':
                        var data = {
                            resultado: number1 / number2
                        };
                      break;
                    default:
                      var data = {
                        erro: `Operação ${operation} invalida ! `,
                        mensagem: 'As operações aceitas são: soma, subtracao, multiplicacao, divicao'
                      }
                    }

             
                return data;
            }
        });
    

    

        
    }
