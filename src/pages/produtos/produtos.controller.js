(function($scope) {
    $scope.produtos = [];
    $scope.addProdutos = function () {
        $scope.produtos.push({
            neme: $scope.produtoNome,
            preco: $scope.produtoPreco,
            tipo:  $scope.produtoCategoria,
        });
        $scope.produtoNome="";
        $scope.produtoPreco="";
        $scope.produtoCategoria="";
    };
    $scope.removeItem = function (index) {
        $scope.produtos.splice(index, 1);
    };
});