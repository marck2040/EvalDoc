homeDModel={};

homeDModel.getData=function(idDoc,callback){

	if(connection)
	{
		
		var sql='select emp_codigo,emp_apellidos_nombres from docentes where (emp_codigo= '+connection.escape(idDoc)+')';
		//var sql='select mat_codigo,mat_nombre,emp_codigo,emp_apellidos_nombres from inscripciones inner join materia on (mai_codmat=mat_codigo) inner join docentes on (mai_codemp=emp_codigo) where (mai_codper='+connection.escape(idAlum)+')';
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

homeDModel.getMat=function(idmat,idemp,callback){
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

homeDModel.getInfo=function(idemp,callback){
	if(connection)
	{
		var sql='select * from encuesta_doc where idemp='+connection.escape(idemp);
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

homeDModel.insertInfo=function(userData,callback){
	if(connection)
	{
		connection.query('insert into encuesta_doc set ?',userData,function(error,result){
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