loginDModel={};

loginDModel.getUsers=function(user,pass,callback)
{
	if(connection)
	{
		var sql ='select cat_usuario,cat_pass,cat_codemp from doc_usuarios where cat_usuario='+connection.escape(user)+' '+'&& cat_pass='+connection.escape(pass);
		connection.query(sql,function(error,row){
			if (row.length == 0)
			{
				callback({msg:"error", data:""});
				
			}
			else
			{
				callback(row);
			}
		})
	}
}

module.exports=loginModel;