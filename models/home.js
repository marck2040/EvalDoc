homeModel={};

homeModel.getData=function(idAlum,callback){

	if(connection)
	{
		
		var sql='select mat_codigo,mat_nombre,emp_codigo,emp_apellidos_nombres from inscripciones inner join materia on (mai_codmat=mat_codigo) inner join docentes on (mai_codemp=emp_codigo) where (mai_codper='+connection.escape(idAlum)+')';

		//var sql ='select alu_codper,alu_usuario from usuarios where alu_usuario='+connection.escape(user)+' '+'&& alu_pass='+connection.escape(pass);
		connection.query(sql,function(error,row){
			if (row.length == 0)
			{
				callback({msg:"error", data:""});
				
			}
			else
			{
				callback(row);
			}
		});
	}
}

homeModel.getMat=function(idmat,idemp,callback){
	if(connection)
	{
		
		var sql='select mat_codigo,mat_nombre,emp_codigo,emp_apellidos_nombres from inscripciones inner join materia on (mai_codmat=mat_codigo) inner join docentes on (mai_codemp=emp_codigo) where (mat_codigo='+connection.escape(idmat)+' '+'and'+' '+'emp_codigo='+connection.escape(idemp)+')'+' '+'limit 1';

		//var sql ='select alu_codper,alu_usuario from usuarios where alu_usuario='+connection.escape(user)+' '+'&& alu_pass='+connection.escape(pass);
		connection.query(sql,function(error,row){
			if (row.length == 0)
			{
				callback({msg:"error", data:""});
				
			}
			else
			{
				callback(row);
			}
		});
	}

}

homeModel.getInfo=function(idmat,idemp,idalum,callback){
	if(connection)
	{
		var sql='select * from encuesta where idmat='+connection.escape(idmat)+'and idemp='+connection.escape(idemp)+'and idalum='+connection.escape(idalum);
		connection.query(sql,function(error,row){
			if(row.length>=1)
			{
				callback({msg:"error",data:""})
			}
			else 
			{
				callback(row);
			}
		});

	}

}

homeModel.insertInfo=function(userData,callback){
	if(connection)
	{
		connection.query('insert into encuesta set ?',userData,function(error,result){
			if(result)
			{
				callback(result);
			}
			else
			{
				callback({msg:"error",data:""})
			}

		});
	}

}