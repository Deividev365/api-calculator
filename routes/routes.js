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


        server.route({
            method: 'GET',
            path: '/',
            handler: function (pedido){
        
                var data = {
                    msg: "Teste Calculadora"
                };
                   // console.log("Aqui é loucura!! ")
        
                return data;
            }
        });
    
    //route Sum
        server.route({
            method: 'GET',
            path: '/sum/{num1}/{num2}',
            handler: function (pedido) {
    
                const num1 = parseInt(pedido.params.num1);
                const num2 = parseInt(pedido.params.num2);
    
                var data = {
                    resultado: num1 + num2
                };

                console.log(data)
        
                return data;
            }
        });
    
    //route Subtraction
        
    //route Multiplication
       
    //route Division
    server.route({
            method: 'GET',
            path: '/div/{num1}/{num2}',
            handler: function (pedido) {
    
                const num1 = parseInt(pedido.params.num1);
                const num2 = parseInt(pedido.params.num2);
    
                var data = {
                    resultado: num1 / num2
                };

                console.log(data)
        
                return data;
            }
        });

    }
