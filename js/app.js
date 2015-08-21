angular.module('miApp', [])
        .controller('miController', function($scope) {
          $scope.bloqueada = {"l0c2":true,"l1c5":true};

          $scope.celdas = [0,1,2,3,4,5];
          $scope.lineas = [0,1,2,3,4,5];
          $scope.cantH = 6;
          $scope.cantV = 6;

          //DATOS BASE A CHEQUEAR
          $scope.palabrasBase = [
            {"ID":0,"palabra":"amigas","col":5,"row":0,"ord":"v"},
            {"ID":1,"palabra":"lomilo","col":5,"row":1,"ord":"v"},
            {"ID":2,"palabra":"layil","col":5,"row":2,"ord":"v"},
            {"ID":3,"palabra":"daneai","col":5,"row":3,"ord":"v"},
            {"ID":4,"palabra":"osesda","col":5,"row":4,"ord":"v"},
            {"ID":5,"palabra":"s","col":1,"row":5,"ord":"v"},
            {"ID":6,"palabra":"sion","col":5,"row":5,"ord":"v"},
            {"ID":7,"palabra":"al","col":0,"row":2,"ord":"h"},
            {"ID":8,"palabra":"dos","col":0,"row":5,"ord":"h"},
            {"ID":9,"palabra":"molas","col":1,"row":5,"ord":"h"},
            {"ID":10,"palabra":"imanes","col":2,"row":5,"ord":"h"},
            {"ID":11,"palabra":"giyesi","col":3,"row":5,"ord":"h"},
            {"ID":12,"palabra":"aliado","col":4,"row":5,"ord":"h"},
            {"ID":13,"palabra":"solian","col":5,"row":5,"ord":"h"}
          ];

          //DATOS DE LA GRILLA
          $scope.datos = [
              ["a","l","","d","o","s"],
              ["m","o","l","a","s",""],
              ["i","m","a","n","e","s"],
              ["g","i","y","e","s","i"],
              ["a","l","i","a","d","o"],
              ["s","o","l","i","a","n"]
            ];

          $scope.palabras = [];
          $scope.linea = [];

          var grilla = 5;

          //LEE LAS LINEAS
          $scope.hastring = function(){
            var strarr1 = "";
            var col = '';
            var row = '';
            for (var p=0; p <= grilla; p++) {
              for (var i=0; i <= grilla; i++){
                strarr1 += $scope.datos[p][i];
                var clet = strarr1.length -1;
                var posfinal = i - clet;
                if(i==grilla){
                  $scope.cargaPalabra(strarr1,p,i,'h',clet);
                  strarr1 ='';
                }else if ($scope.datos[p][i]=== ""){
                  $scope.cargaPalabra(strarr1,p,i,'h',clet);
                  strarr1 ='';
                }
              }
            }
          }

          //LEE LAS COLUMNAS
          $scope.vastring = function(){
            var strarr1 = "";
            for (var p=0; p <= grilla; p++) {
              for (var i=0; i <= grilla; i++){
                strarr1 += $scope.datos[i][p];
                var clet = strarr1.length -1;
                var posfinal = i - clet;
                if(i==grilla){
                  $scope.cargaPalabra(strarr1,i,p,'v',clet);
                  strarr1 ='';
                }else if ($scope.datos[i][p]=== ""){
                  $scope.cargaPalabra(strarr1,i,p,'v',clet);
                  strarr1 ='';
                }
              }
            }
          }

          //LEE LOS ESPACIOS 
          $scope.verEspacios = function(){
            for (var p=0; p <= grilla; p++) {
              for (var i=0; i <= grilla; i++){
                if ($scope.datos[p][i]=== ""){
                  $scope.cargaEspacio(p,i);
                  strarr1 ='';
                }
              }
            }
          }
          var id = 0;

          //CARGA LOS ESPACIOS LEIDOS DEL ARRAY A LA GRILLA
          $scope.cargaEspacio = function(col,row){
              $scope.bloqueada.push("l"+col+"c"+row);
          }

          //CARGA LAS PALABRAS LEIDAS DE LA GRILLA
          $scope.cargaPalabra = function(info,col,row,ord,clet){
            if (info!=="") {
              $scope.palabras.push({"ID":id,"palabra": info,"col": col,"row":row, "ord":ord});
              $scope.linea = "";
              id++;
            };
          }

          //CHEQUEA LAS PALABRAS
          $scope.chequeaPalabras = function(palabraCheck){
            for (var i = 0; i < $scope.palabrasBase.length; i++) {
              if(palabraCheck == $scope.palabrasBase[i].palabra){
                console.log("Encontrado: "+$scope.palabrasBase[i].palabra);
              }
            };
          }

          //$scope.chequeaPalabras('amigas');
          $scope.vastring();
          $scope.hastring();
          //$scope.verEspacios();

        });