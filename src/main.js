import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import PouchDb from 'pouchdb-core';
import PouchAuth from 'pouchdb-authentication';
import RxDB from 'rxdb'
import PouchdbAdapterHttp from 'pouchdb-adapter-http';
import PouchdbAdapterIdb from 'pouchdb-adapter-idb';

PouchDb.plugin( PouchAuth );
// PouchDb.plugin( { 
// 	getUrl(){
// 		return 'http://localhost:5984';
// 	}
// });

RxDB.plugin( PouchdbAdapterIdb );
RxDB.plugin( PouchdbAdapterHttp );

Vue.config.productionTip = false

const db_schema = {
	title: 'products',
	version: 0,
	type: 'object',
	properties: {
		_id: {
			type: 'string',
			primary: true
		},
		sku: {
			type: 'string'
		},
		name: {
			type: 'string'
		},
		price: {
			type: 'number'
		}
	}
}

RxDB.create({
	name: 'products',
	adapter: 'idb',
	queryChangeDetection: true
}).then( db => {
	db.collection( {
		name: 'products',
		schema: db_schema,
		migrationStrategies: {
		}
	} ).then( col => {

		col.pouch.getSession( ( err, res ) => console.log(res) );
		col.pouch.logOut();




		// const repState = col.sync({
		// 	remote: 'http://localhost:5984/products',
		// 	options: {                         
		// 		live: true,
		// 		retry: false
		// 	}
		// });

		// repState.denied$.subscribe( res => console.log( res ) );
		// repState.error$.subscribe( err => console.log( err ) );
	} )

	return db;
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
