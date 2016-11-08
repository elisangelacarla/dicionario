<template>
<form>
	<div>

<!--................................................................................Selects...........................................................................................................-->

		<dsg-menu></dsg-menu> 
			<v-card class="card-panel #f5f5f5 grey lighten-5 ">
				<div class="row">
			    	<div class= "col s12"> 
		        		<div class="input-field col s3 " >
							<v-select name="itemsTabela"  id="itemsTabela" :items="itemsTabela"  ></v-select>
							<label for="itemsTabela">Área</label>
			    		</div>
			    		<div class="input-field col s3 ">
							<v-select name="itemsCategoria"  id="itemsCategoria"  :items="itemsCategoria"   ></v-select>
							<label for="itemsCategoria">Categorias</label>
			    		</div>
		    		</div>
				</div>
			</v-card>

<!--................................................................................Tabelas...........................................................................................................-->

			<v-card class="card-panel #f5f5f5 grey lighten-5">
				<div class="row">
			    	<div class="col s12">            
			    		<div class="row">		
							<div class="col s3">
						        <v-card class="card White darken-3 ">
							        <div class="card-content white-text ">
									    <v-collection>
										    <h4><a> Tabelas</a></h4>
									          	<div class= "col s12  scroll-270px">
								              		<v-collection-link v-for="(item, index) in dsgItensTabela" class="collection-item" name="tabela" id="tabela" >
									       				<a @click.prevent.stop="BuscarTabelas(index, $event)">{{ item.tabela}} </a>
								 	     			</v-collection-link>
												</div>
									  	</v-collection>
								  	</div>	
							    </v-card>
					   	    </div>
					   		<div class="col s9">
					   			<div class="row">

							  		<div class="input-field col s1">
				               			<v-text-input name="dsgItensTabela_id" id="dsgItensTabela_id" :v-model ="dsgItensTabela.id" :value ="dsgItensTabela.id" type="number" ></v-text-input>
				               			<label for="dsgItensTabela_id">ID*</label>	
				              		</div>
						    		<div class="input-field col s3">
				    					<v-text-input name="dsgItensTabela_tabela" id="dsgItensTabela_tabela" :v-model ="dsgItensTabela.tabela" type="text" :value="dsgItensTabela.tabela" ></v-text-input>
				               			<label for="dsgItensTabela_tabela">Tabela*</label>	
				               		</div>
				                   	<div class="input-field col s3">
				               			<v-text-input name="dsgItensTabela_nome" id="dsgItensTabela_nome" :v-model ="dsgItensTabela.nome"  :value ="dsgItensTabela.nome" type="text"></v-text-input>
				               			<label for="dsgItensTabela_nome">Nome*</label>	
				                  	</div>
				                    <div class="input-field col s5">
				                   		<v-text-input name="dsgItensTabela_descricao_detalhada" id="dsgItensTabela_descricao_detalhada" :v-model ="dsgItensTabela.descricao_detalhada"  :value ="dsgItensTabela.descricao_detalhada" type="text"></v-text-input>
				               			<label for="dsgItensTabela_descricao_detalhada">Descrição Detalhada*</label>	
				                    </div>
				                    <div class="input-field col s8">
				               			<v-text-input name="dsgItensTabela_objetivo" id="dsgItensTabela_objetivo" :v-model ="dsgItensTabela.objetivo" :value ="dsgItensTabela.objetivo" type="text"></v-text-input>
				               			<label for="dsgItensTabela_objetivo">Objetivo*</label>	
				                  	</div>
				              		<div class="input-field col s2">
				            			<v-checkbox name="dsgItensTabela_liberado" id="dsgItensTabela_liberado"   :v-model="dsgItensTabela.liberado"  >Liberado ?</v-checkbox>
				              		</div>
				              		<div class="input-field col s2">
				              			<v-checkbox name="dsgItensTabela_registrar_auditoria" id="dsgItensTabela_registrar_auditoria"  :v-model="dsgItensTabela.registro_auditoria" >Registrar Auditoria? </v-checkbox>
				              		</div>

			              		</div>
		              		</div>
			      		    <div class="row ">
								<div class= "col s12 right-align">
									<a class=" btn s12 m6 l3" @click="AdicionarTabelas" > Adicionar </a>
									<a class=" btn s12 m6 l3" @click="RemoverTabelas"> Remover </a>	
									<a class=" btn s12 m6 l3" @click="EditarTabelas"> Salvar...   </a>
								</div>
					    	</div>
						</div>
		    		</div>
				</div>
			</v-card>

<!--................................................................................Campos...........................................................................................................-->

<div class="card-panel #f5f5f5 grey lighten-5">
	<div class="row">
    	<div class="col s12">            
    		<div class="row">		
				<div class="col s3">
			        <v-card class="card White darken-3">
				        <div class="card-content white-text">
						    <v-collection>
							    <h4><a> Campos</a></h4>
						          	<div class= "col s12  scroll-270px">
					              		<v-collection-link v-for="(item, index) in dsgItensCampos" class="collection-item"  name="campos" id="campos">
						       				<a href="#" @click.prevent.stop="BuscarCampos(index)">{{ item.nome }} </a>
					 	     			</v-collection-link>
									</div>
						  	</v-collection>								  		  
					  	</div>	
				    </v-card>
			    </div>
			   <div class="col s9">
					<div class="row">

	                  	<div class="input-field col s1">
	               			<v-text-input name="dsgItensCampos_id" id="dsgItensCampos_id" :v-model ="dsgItensCampos.id" type="number" :value="dsgItensCampos.id" ></v-text-input>
	               			<label for="dsgItensCampos_id">ID*</label>	
	              		</div>				   		
		    		
		    			<div class="input-field col s3">
	    					<v-text-input name="dsgItensCampos_tabela" id="dsgItensCampos_tabela" :v-model ="dsgItensCampos.tabela" type="text" :value="dsgItensCampos.tabela" ></v-text-input>
	               			<label for="dsgItensCampos_tabela">Tabela*</label>	
	           			</div>
	               		
	               		<div class="input-field col s3">
	               			<v-text-input name="dsgItensCampos_nome" id="dsgItensCampos_nome" :v-model ="dsgItensCampos.nome" type="text" :value="dsgItensCampos.nome"></v-text-input>
	               			<label for="dsgItensCampos_nome">Nome*</label>	
	              		</div>

	                  	<div class="input-field col s2">
	                   		<v-text-input name="dsgItensCampos_tipo" id="dsgItensCampos_tipo" :v-model ="dsgItensCampos.tipo" type="text" :value="dsgItensCampos.tipo"></v-text-input>
	               			<label for="dsgItensCampos_tipo">Tipo*</label>	
	                   	</div>

	                   	<div class="input-field col s3">
	               			<v-text-input name="dsgItensCampos_dominio" id="dsgItensCampos_dominio" :v-model ="dsgItensCampos.dominio" type="text" :value="dsgItensCampos.dominio" ></v-text-input>
	               			<label for="dsgItensCampos_dominio">Domínio*</label>	
	              		</div>

	                <div class="row"> 	
	                  	<div class="input-field col s4">
	               			<v-text-input name="dsgItensCampos_descricao" id="dsgItensCampos_descricao" :v-model ="dsgItensCampos.descricao" type="text" :value="dsgItensCampos.descricao" ></v-text-input>
	               			<label for="dsgItensCampos_descricao">Descrição*</label>	
	              		</div>

	              		<div class="input-field col s5">
	               			<v-text-input name="dsgItensCampos_descricao_detalhada" id="dsgItensCampos_descricao_detalhada" :v-model ="dsgItensCampos.descricao_detalhada" type="text" :value="dsgItensCampos.descricao_detalhada" ></v-text-input>
	               			<label for="dsgItensCampos_descricao_detalhada">Descrição Detalhada*</label>	
	              		</div>
 
	                  	<div class="input-field col s3">
	               			<v-text-input name="dsgItensCampos_valor_padrao" id="dsgItensCampos_valor_padrao" :v-model ="dsgItensCampos.valor_padrao" type="text" :value="dsgItensCampos.valor_padrao" ></v-text-input>
	               			<label for="dsgItensCampos.valor_padrao">Valor Padrão*</label>	
	              		</div>

              		</div>
              		<div class="row"> 	

	              		<div class="input-field col s4">
	               			<v-text-input name="dsgItensCampos_expressao_restricao" id="dsgItensCampos_expressao_restricao" :v-model ="dsgItensCampos.expressao_restricao" type="text" :value="dsgItensCampos.expressao_restricao" ></v-text-input>
	               			<label for="dsgItensCampos_expressao_restricao">Expressão Restrição*</label>	
	              		</div>

	                  	<div class="input-field col s5">
	               			<v-text-input name="dsgItensCampos_orientacao_usuario" id="dsgItensCampos_orientacao_usuario" :v-model ="dsgItensCampos.orientacao_usuario" type="text" :value="dsgItensCampos.orientacao_usuario" ></v-text-input>
	               			<label for="dsgItensCampos_orientacao_usuario">Orientação ao usuário*</label>	
	              		</div>

	                  	<div class="input-field col s3">
	               			<v-text-input name="dsgItensCampos_definicao_sql" id="dsgItensCampos_definicao_sql" :v-model ="dsgItensCampos.definicao_sql" type="text" :value="dsgItensCampos.definicao_sql" ></v-text-input>
	               			<label for="dsgItensCampos_definicao_sql">Definição SQL*</label>	
	              		</div>
	              	</div>	
	              	<div class="row"> 	
              			<div class="input-field col s2">
	               			<v-checkbox name="dsgItensCampos_requerido" id="dsgItensCampos_requerido" >Requerido ?</v-checkbox>
               			</div>
               			<div class="input-field col s2">
	              			<v-checkbox name="dsgItensCampos_visivel" id="dsgItensCampos_visivel" >Visíve? </v-checkbox>
	              		</div>
	              		<div class="input-field col s3">
	              			<v-checkbox name="dsgItensCampos_disponivel_pesquisa" id="dsgItensCampos_disponivel_pesquisa" >Disponível para pesquisa?</v-checkbox>
	              		</div>
	              		<div class="input-field col s3">
	              			<v-checkbox name="dsgItensCampos_preselecionado_pesquisa" id="dsgItensCampos_preselecionado_pesquisa" >Pré Selecionado Pesquisa? </v-checkbox>
	              		</div>
	              		<div class="input-field col s2">
	              			<v-checkbox name="dsgItensCampos_sobrescrever_customizacao_cliente" id="dsgItensCampos_sobrescrever_customizacao_cliente" >Sob. Customizado? </v-checkbox>
              			</div>
	      			</div>
	      			</div>
	  		    	<div class="row ">
						<div class= "col s12 right-align">
							<a class=" btn s12 m6 l3"  @click="AdicionarCampos"> Adicionar </a>
							<a class=" btn s12 m6 l3" @click="RemoverCampos"> Remover </a>	
							<a class=" btn s12 m6 l3" @click="EditarCampos"> Salvar...</a>
						</div>
			    	</div>
				</div>
    		</div>
		</div>
	</div>
</div>

<!--................................................................................IntegridadeReferencial.........................................................................................-->

<div class="card-panel #f5f5f5 grey lighten-5">
	<div class="row">
    	<div class="col s12">            
    		<div class="row">		
				<div class="col s3">
			        <v-card class="card White darken-3">
				        <div class="card-content white-text">
						    <v-collection>
							    <h4><a> Integridade Referencial</a></h4>
						          	<div class= "col s12  scroll-250px">
					              		<v-collection-link v-for="(item, index) in dsgItensIntegridade" class="collection-item"  :id="dsgItensIntegridade.tabela">
						       				<a href="#!" @click="BuscarIntegridade(index)">{{ item.tabela_relacao }} </a>
					 	     			</v-collection-link>
									</div>
						  	</v-collection>
						  		  
					  	</div>	
				    </v-card>
			    </div>
				    <div class="col s9">
						<div class="row">

			    			<div class="input-field col s3">
	        					<v-text-input name="dsgItensIntegridade_tabela" id="dsgItensIntegridade_tabela" v-model ="dsgItensIntegridade.tabela" type="text" ></v-text-input>
	                   			<label for="dsgItensIntegridade_tabela">Tabela*</label>	
	               			</div>

	                   		<div class="input-field col s3">
	                   			<v-text-input name="dsgItensIntegridade_tabela_relacao" id="dsgItensIntegridade_tabela_relacao" v-model ="dsgItensIntegridade.tabela_relacao" type="text"></v-text-input>
	                   			<label for="nome">Tabela Relação*</label>	
	                  		</div>

	                      	<div class="input-field col s3">
	                       		<v-text-input name="dsgItensIntegridade_campo" id="dsgItensIntegridade_campo" v-model ="dsgItensIntegridade.campo" type="text"></v-text-input>
	                   			<label for="dsgItensIntegridade_campo">Campo*</label>	
	                       	</div>

	                      	<div class="input-field col s3">
	                   			<v-text-input name="dsgItensIntegridade_campo_relacao" id="dsgItensIntegridade_campo_relacao" v-model="dsgItensIntegridade.campo_relacao" type="text" ></v-text-input>
	                   			<label for="dsgItensIntegridade_campo_relacao">Campo Relação*</label>	
	                  		</div>

	                  		<div class="input-field col s3">
	                       		<v-text-input name="dsgItensIntegridade_acao_remocao" id="dsgItensIntegridade_acao_remocao" v-model ="dsgItensIntegridade.acao_remocao" type="text"></v-text-input>
	                   			<label for="nome">Ação Remoção*</label>	
	                       	</div>
	                      	<div class="input-field col s3">
	                   			<v-text-input name="dsgItensIntegridade_nome_chave" id="dsgItensIntegridade_nome_chave" v-model ="dsgItensIntegridade.nome_chave"type="text" readonly ></v-text-input>
	                   			<label for="dsgItensIntegridade_nome_chave">Nome Chave*</label>	
	                  		</div>
                  		</div>
	                  		
	          		</div>
      		    	<div class="row">
						<div class= "col s12 right-align">
							<a class=" btn s12 m6 l3" @click="AdicionarIntegridade" > Adicionar </a>
							<a class=" btn s12 m6 l3" @click="RemoverIntegridade"> Remover </a>	
							<a class=" btn s12 m6 l3" @click="EditarIntegridade" > Salvar...   </a>
						</div>
			    	</div>
			</div> 
    	</div>
	</div>
</div>
<router-view></router-view>
</div>
</form>
</template>
<script>
import dsgMenu from './dsgMenu.vue'
window.$ = window.jQuery = require('materialize-css/node_modules/jquery/dist/jquery.js');



$(document).on("change", "#itemsCategoria", function() {
	console.log('aquiiiii entrou')

    jsonWhere = "{area : " + '"' + itemsTabela.value + '"'
			    +",categoria: " + '"' + itemsCategoria.value+ '"' 
			    +"}"
	this.$http.post('/server/dessisserver/buscar/tabelas/*/tabela', jsonWhere)
	.then(function(response){
		this.dsgItensTabela =response.body;


	})





})	

export default {

	data: function() {
		return{
	    	dsgItens:"",
	     	dsgItensTabela:"",
	     	itemsCategoria:[],
	    	dsgItensCampos:"", 
     		itemsTabela: [{'id': 'teste', 'text':'teste'}],
     		dsgItensIntegridade:[],

     		item1s:[
			    	{'id': 'Desenvolvimento', 'text':'Desenvolvimento'},
			    	{'id': 'Producao', 		  'text':'Produção'},
			    	{'id': 'Analise', 		  'text':'Análise'}
			]
		}
	},
	components:{
		dsgMenu
	},
	events:{
		teste:'teste'
	},

	methods:{


	    init () {
            this.$el.onchange = function () {
     			console.log('aquiiii')
                }
        },

		AdicionarTabelas: function()
		{
			if (dsgItensTabela_tabela.value!='')
			{
				dsgItensTabela_tabela.value='';
				dsgItensTabela_nome.value='';
				dsgItensTabela_descricao_detalhada.value='';
				dsgItensTabela_objetivo.value='';
				dsgItensTabela_registrar_auditoria.value='';
				dsgItensTabela_liberado.value='';
				dsgItensTabela_tabela.value='';
				dsgItensTabela_tabela.focus();
			}  
		},
		teste:function(){
			
			
			console.log('entrou teste')
			
			
		},
	
		AdicionarIntegridade: function()
		{
			if (dsgItensIntegridade_tabela.value!='')
			{
				dsgItensIntegridade_tabela.value='';
				dsgItensIntegridade_tabela_relacao.value='';
				dsgItensIntegridade_campo.value='';
				dsgItensIntegridade_campo_relacao.value='';
				dsgItensIntegridade_acao_remocao.value='';
				dsgItensIntegridade_nome_chave.value='';
				dsgItensIntegridade_tabela.focus();
			}  
		},

		AdicionarCampos: function()
		{
			if (dsgItensIntegridade_tabela.value!='')
			{
				dsgItensIntegridade_tabela.value='';
				dsgItensIntegridade_tabela_relacao.value='';
				dsgItensIntegridade_campo.value='';
				dsgItensIntegridade_campo_relacao.value='';
				dsgItensIntegridade_acao_remocao.value='';
				dsgItensIntegridade_nome_chave.value='';
				dsgItensIntegridade_tabela.focus();
			}  
		},

		BuscarIntegridade: function(index)
		{
			dsgItensIntegridade_tabela.value=   this.dsgItensIntegridade[index].tabela;
			dsgItensIntegridade_tabela_relacao.value= this.dsgItensIntegridade[index].tabela_relacao;
			dsgItensIntegridade_campo.value= this.dsgItensIntegridade[index].campo; 
			dsgItensIntegridade_campo_relacao.value= this.dsgItensIntegridade[index].campo_relacao;
			dsgItensIntegridade_acao_remocao.value= this.dsgItensIntegridade[index].acao_remocao;
			dsgItensIntegridade_nome_chave.value=this.dsgItensIntegridade[index].nome_chave;
			dsgItensIntegridade_tabela.focus();
			dsgItensIntegridade_tabela_relacao.focus();
			dsgItensIntegridade_campo.focus();
			dsgItensIntegridade_campo_relacao.focus();
			dsgItensIntegridade_acao_remocao.focus();
			dsgItensIntegridade_nome_chave.focus();

			itens1 = index
			clicado = true
 
		},
		BuscarTabelas: function(index)
		{

    		dsgItensTabela_tabela.value=this.dsgItensTabela[index].tabela;
    		dsgItensTabela_nome.value=this.dsgItensTabela[index].nome;
    		dsgItensTabela_descricao_detalhada.value=this.dsgItensTabela[index].descricao_detalhada; 
    		dsgItensTabela_objetivo.value= this.dsgItensTabela[index].objetivo;
			dsgItensTabela_id.value= this.dsgItensTabela[index].id;
			dsgItensTabela_registrar_auditoria.checked=this.dsgItensTabela[index].registro_auditoria;
			dsgItensTabela_liberado.checked=this.dsgItensTabela[index].liberado;

    		itens1 = index
			clicado = true
			jsonWhere = "{tabela: "  + this.dsgItensTabela[index].tabela +"}";	
									
			this.$http.post('/server/dessisserver/buscar/campos/*/nome ', jsonWhere)
		   	.then(function(response){
				this.dsgItensCampos =response.body;

	    		itens1 = index
				clicado = true

	    		dsgItensTabela_nome.focus();
	    		dsgItensTabela_descricao_detalhada.focus();
	    		dsgItensTabela_objetivo.focus();
				dsgItensTabela_id.focus();
				dsgItensTabela_tabela.focus();

		})
		},

		BuscarCampos: function(index)
		{
			dsgItensCampos_tabela.value =   this.dsgItensCampos[index].tabela;
			dsgItensCampos_nome.value = this.dsgItensCampos[index].nome;
			dsgItensCampos_tipo.value = this.dsgItensCampos[index].tipo; 
			dsgItensCampos_descricao.value = this.dsgItensCampos[index].descricao;
			dsgItensCampos_descricao_detalhada.value = this.dsgItensCampos[index].descricao_detalhada;
			dsgItensCampos_orientacao_usuario.value =this.dsgItensCampos[index].orientacao_usuario;
			dsgItensCampos_dominio.value =this.dsgItensCampos[index].dominio;
			dsgItensCampos_requerido.checked =   this.dsgItensCampos[index].requerido;
			dsgItensCampos_visivel.checked = this.dsgItensCampos[index].visivel;
			dsgItensCampos_preselecionado_pesquisa.checked = this.dsgItensCampos[index].preselecionado_pesquisa; 
			dsgItensCampos_disponivel_pesquisa.checked = this.dsgItensCampos[index].disponivel_pesquisa;
			dsgItensCampos_expressao_restricao.value = this.dsgItensCampos[index].expressao_restricao;
			dsgItensCampos_definicao_sql.value =this.dsgItensCampos[index].definicao_sql;
			dsgItensCampos_valor_padrao.value =this.dsgItensCampos[index].valor_padrao;
			dsgItensCampos_sobrescrever_customizacao_cliente.checked =this.dsgItensCampos[index].sobrescrever_customizacao_cliente;
			dsgItensCampos_id.value =this.dsgItensCampos[index].id;

    		itens1 = index
			clicado = true

			dsgItensCampos_nome.focus();
			dsgItensCampos_tipo.focus();
			dsgItensCampos_descricao.focus();
			dsgItensCampos_descricao_detalhada.focus();
			dsgItensCampos_orientacao_usuario.focus();
			dsgItensCampos_dominio.focus();
			dsgItensCampos_requerido.focus();
			dsgItensCampos_visivel.focus();
			dsgItensCampos_preselecionado_pesquisa.focus();
			dsgItensCampos_disponivel_pesquisa.focus();
			dsgItensCampos_expressao_restricao.focus();
			dsgItensCampos_definicao_sql.focus();
			dsgItensCampos_valor_padrao.focus();
			dsgItensCampos_sobrescrever_customizacao_cliente.focus();
			dsgItensCampos_id.focus();
			dsgItensCampos_tabela.focus();

			jsonWhere = "{tabela: "  + dsgItensCampos_tabela.value 
						+",campo:" + dsgItensCampos_nome.value 
						+"}";	

			this.$http.post('/server/dessisserver/buscar/integridade_referencial/*/tabela ', jsonWhere)
			.then(function(response){
				this.dsgItensIntegridade =response.body;
			})	

		},	
 		RemoverTabelas: function()
		{
			if (dsgItensTabela_nome.value!=''){

			    jsonWhere = "{tabela : " + '"' + (this.dsgItensTabela[itens1].tabela).toString() + '"'+"}"

	            this.$http.post('/server/dessisserver/deletar/tabelas',jsonWhere)
	   			.then(function(response){

					jsonWhere = "{1 :  1}";	

					this.$http.post('/server/dessisserver/buscar/tabelas/*/tabela', jsonWhere)
					.then(function(response){
						this.dsgItensTabela =response.body;
					});

					dsgItensTabela_nome.value=''
					dsgItensTabela_descricao_detalhada.value=''
					dsgItensTabela_objetivo.value=''
					dsgItensTabela_registrar_auditoria.value=''
					dsgItensTabela_liberado.value=''
					dsgItensTabela_tabela.value=''

				});
			}
  
		},
		RemoverCampos: function()
		{
			if (dsgItensTabela_nome.value!=''){
			    
			    jsonWhere = "{tabela : " + '"' + this.dsgItensCampos[itens1].tabela + '"'
						    +",nome: " + '"' + this.dsgItensCampos[itens1].nome+ '"' 
						    +"}"

	            this.$http.post('/server/dessisserver/deletar/campos',jsonWhere)
	   			.then(function(response){

					dsgItensCampos_nome.value=''
					dsgItensCampos_tabela.value=''
					dsgItensCampos_id.value=''
					dsgItensCampos_descricao.value=''
					dsgItensCampos_orientacao_usuario.value=''
					dsgItensCampos_tipo.value=''
					dsgItensCampos_expressao_restricao.value=''
					dsgItensCampos_dominio.value=''
					dsgItensCampos_descricao_detalhada.value=''
					dsgItensCampos_valor_padrao.value=''
					dsgItensCampos_definicao_sql.value=''
					dsgItensCampos_visivel.checked=false
					dsgItensCampos_requerido.checked=false
					dsgItensCampos_disponivel_pesquisa.checked=false
					dsgItensCampos_preselecionado_pesquisa.checked=false
					dsgItensCampos_sobrescrever_customizacao_cliente.checked=false

					dsgItensCampos_tabela.focus()

					jsonWhere = "{tabela: "  + dsgItensCampos_tabela.value 
								 +"}";	
					this.$http.post('/server/dessisserver/buscar/campos/*/nome', jsonWhere)
					.then(function(response){
						this.dsgItensTabela =response.body;

					});

				});
			}
    		},

		RemoverIntegridade: function()
		{
			if (dsgItensIntegridade_tabela.value!=''){
			    jsonWhere = "{tabela : " + '"' + (this.dsgItensIntegridade[itens1].tabela) + '"'
			    			+",tabela_relacao: " + '"' + (this.dsgItensIntegridade[itens1].tabela_relacao)+ '"' 
			    			+",campo: " + '"' + (this.dsgItensIntegridade[itens1].campo)+ '"' 
			    			+",campo_relacao:" + '"' + (this.dsgItensIntegridade[itens1].campo_relacao)+ '"' 
			    			+"}"

		        this.$http.post('/server/dessisserver/deletar/integridade_referencial',jsonWhere)
	   			.then(function(response){

					dsgItensIntegridade_tabela.value=''
					dsgItensIntegridade_tabela_relacao.value=''
					dsgItensIntegridade_campo.value=''
					dsgItensIntegridade_campo_relacao.value=''
					dsgItensIntegridade_acao_remocao.value=''
					dsgItensIntegridade_nome_chave.value=''

					jsonWhere = "{tabela: "  + dsgItensCampos_tabela.value 
								+",campo:" + dsgItensCampos_nome.value 
								+"}";	

					this.$http.post('/server/dessisserver/buscar/integridade_referencial/*/tabela ', jsonWhere)
					.then(function(response){
						this.dsgItensIntegridade =response.body;
					})	

				});
			}
		},

		Mascaradata: function(data_geracao1, mask){
			var teste = data_geracao.value
			var i = teste.length;
			var saida = mask.substring(1,0);
			var texto = mask.substring(i)
				if (texto.substring(0,1) != saida){
					data_geracao.value += texto.substring(0,1);
				}
		 },    
		 
		EditarTabelas: function()
		{
			if (this.dsgItensTabela_tabela!= ''){

   				jsonWhere = "{tabela : "  + '"' + dsgItensTabela_tabela.value  + '"' 
   							+", descricao_detalhada: "  + dsgItensTabela_descricao_detalhada.value  
   							+", nome : "  + dsgItensTabela_nome.value  
   							+", objetivo : "  + '"' + dsgItensTabela_objetivo.value  + '"' 
   							+", registro_auditoria: "  + dsgItensTabela_registrar_auditoria.checked
   							+", liberado:"   + dsgItensTabela_liberado.checked
   							+", id:"   + dsgItensTabela_id.value
   							+", area : configurações"  
   							+", categoria: desenvolvimento"   +"}"
  
				this.$http.post('/server/dessisserver/tabelas/',jsonWhere)
    			.then(function(response){
					dsgItensTabela_tabela.value=''
					dsgItensTabela_descricao_detalhada.value=''
					dsgItensTabela_nome.value=''
					dsgItensTabela_objetivo.value=''
					dsgItensTabela_registrar_auditoria.value=''
					dsgItensTabela_liberado.value=''
					dsgItensTabela_id.value=''

					clicado=false
					jsonWhere = "{1 :  1}";	 
					this.$http.post('/server/dessisserver/buscar/tabelas/*/tabela ', jsonWhere)
				   	.then(function(response){
						this.dsgItensTabela =response.body;
							
					})	
    			});
			}
		},
		EditarIntegridade: function()
		{
			if (dsgItensIntegridade_tabela.value!= ''){

   				jsonWhere = "{  tabela : "          + dsgItensIntegridade_tabela.value  
   							+", tabela_relacao: "   +dsgItensIntegridade_tabela_relacao.value  
   							+", campo : "           + dsgItensIntegridade_campo.value  
   							+", campo_relacao : "   +dsgItensIntegridade_campo_relacao.value  
   							+", acao_remocao: "     +dsgItensIntegridade_acao_remocao.value  
   							+", nome_chave:   "     +dsgItensIntegridade_nome_chave.value  
							+"}"
  
				this.$http.post('/server/dessisserver/integridade_referencial/',jsonWhere)
    			.then(function(response){

					dsgItensIntegridade_tabela.value=''
					dsgItensIntegridade_tabela_relacao.value=''
					dsgItensIntegridade_campo.value=''
					dsgItensIntegridade_campo_relacao.value=''
					dsgItensIntegridade_acao_remocao.value=''
					dsgItensIntegridade_nome_chave.value=''
					clicado=false

					this.$http.post('/server/dessisserver/buscar/integridade_referencial/*/tabela ', jsonWhere)
					.then(function(response){
						this.dsgItensIntegridade =response.body;
						dsgItensIntegridade_tabela.focus();
		
					})	
						
				})	
			}
		},

		EditarCampos: function()
		{
			if (this.dsgItensTabela_tabela!= ''){

   				jsonWhere = "{tabela: "  + dsgItensCampos_tabela.value   
   							+", nome: "  + dsgItensCampos_nome.value  
   							+", tipo: "  + dsgItensCampos_tipo.value  
   							+", descricao: "  + dsgItensCampos_descricao.value 
   							+", descricao_detalhada: "  + dsgItensCampos_descricao_detalhada.value   
   							+", orientacao_usuario:"   +dsgItensCampos_orientacao_usuario.value  
   							+", dominio:"   + dsgItensCampos_dominio.value 
   							+", requerido:"   + dsgItensCampos_requerido.checked 
   							+", visivel:"   + dsgItensCampos_visivel.checked 
   							+", disponivel_pesquisa:"   + dsgItensCampos_disponivel_pesquisa.checked 
   							+", pre_selecionado_pesquisa:"   + dsgItensCampos_preselecionado_pesquisa.checked 
   							+", expressao_restricao:"   + dsgItensCampos_expressao_restricao.value 
   							+", definicao_sql:"   + dsgItensCampos_definicao_sql.value 
   							+", valor_padrao:"   + dsgItensCampos_valor_padrao.value 
   							+", sobrescrever_customizacao_cliente:"   + dsgItensCampos_sobrescrever_customizacao_cliente.checked 
   							+", id: "   + dsgItensCampos_id.value    +"}"

				this.$http.post('/server/dessisserver/campos/',jsonWhere)
    			.then(function(response){
					dsgItensCampos_tabela.value = ''
					dsgItensCampos_nome.value = ''
					dsgItensCampos_tipo.value = ''
					dsgItensCampos_descricao.value = ''
					dsgItensCampos_descricao_detalhada.value = ''
					dsgItensCampos_orientacao_usuario.value = ''
					dsgItensCampos_dominio.value = ''
					dsgItensCampos_requerido.value = ''
					dsgItensCampos_visivel.value = ''
					dsgItensCampos_preselecionado_pesquisa.value = ''
					dsgItensCampos_disponivel_pesquisa.value = ''
					dsgItensCampos_expressao_restricao.value = ''
					dsgItensCampos_definicao_sql.value = ''
					dsgItensCampos_valor_padrao.value = ''
					dsgItensCampos_sobrescrever_customizacao_cliente.value = ''
					dsgItensCampos_id.value = ''
					clicado=false
					jsonWhere = "{1 :  1}";	
					this.$http.post('/server/dessisserver/buscar/campos/*/nome', jsonWhere)
					.then(function(response){
						this.dsgItensTabela =response.body;

					});
			
    			});
			}
		}


	},

	mounted: function() {

	jsonWhere = "{1 :  1}";	
	this.$http.post('/server/dessisserver/buscar/tabelas/*/tabela', jsonWhere)
	.then(function(response){
		this.dsgItensTabela =response.body;

		jsonWhere = "{1 :  1}";	
		this.$http.post('/server/dessisserver/buscar/categorias/*/categoria', jsonWhere)
		.then(function(response){

			for(var i=0;i<response.data.length;i++)
			{
				this.itemsCategoria.push({id: response.data[i].categoria, text: response.data[i].categoria})
			}

		}).finally(function () {
			 $('select').material_select();
   		})

		jsonWhere = "{1 :  1}";	
		this.$http.post('/server/dessisserver/buscar/areas/*/nome', jsonWhere)
		.then(function(response){
			this.dsgItens =response.data;

			for(var i=0;i<this.dsgItens.length;i++)
			{
				this.itemsTabela.push({id: this.dsgItens[i].nome , text: this.dsgItens[i].nome})
			}

		}).finally(function () {
			 $('select').material_select();
   		})

	})

	}
}
</script>
<style>


</style>