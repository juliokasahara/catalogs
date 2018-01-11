var modulo = angular.module('catalogs.module', [ 'ui.router']);

modulo.config(function($stateProvider) {
	
	$stateProvider.state({
		name : 'template-index',
		url : '/index',
		controller: 'CatalogsIndexController',
		templateUrl: '/catalogsorder/paginas/index.html'
	});
	
	$stateProvider.state({
		name : 'pedido-index',
		url : '/pedido/index',
		controller: 'CatalogsIndexController',
		templateUrl: '/catalogsorder/paginas/pedidoIndex.html'
	});
	
	$stateProvider.state({
		name : 'cadastro-vendedor',
		url : '/cadastrar/vendedor',
		controller: 'CatalogsIndexController',
		templateUrl: '/catalogsorder/paginas/cadastroVendedor.html'
	});
	
});