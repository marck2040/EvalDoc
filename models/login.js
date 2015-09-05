
loginModel={};

loginModel.getUsers=function(user,pass,callback)
{
	if(connection)
	{
		var sql ='select alu_codper,alu_usuario from usuarios where alu_usuario='+connection.escape(user)+' '+'&& alu_pass='+connection.escape(pass);
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